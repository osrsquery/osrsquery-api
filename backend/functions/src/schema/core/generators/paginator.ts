import {
  PaginatorInfoService,
  EdgeService,
  PaginatedService,
  BaseService,
} from "../services";

import { generateTypenameField } from "../helpers/typeDef";
import type { ObjectTypeDefinition } from "giraffeql";
import { PaginatorData } from "../../../types";
import { extractLastValueColumns } from "../helpers/shared";

export function generatePaginatorTypeDef(
  service: PaginatedService,
  currentService: BaseService
): ObjectTypeDefinition {
  const PaginatorInfo = new PaginatorInfoService(service);

  const Edge = new EdgeService(service);

  return <ObjectTypeDefinition>{
    name: currentService.typename,
    description: "Paginator",
    fields: {
      ...generateTypenameField(currentService),
      paginatorInfo: {
        type: PaginatorInfo.typeDef,
        allowNull: false,
        resolver: ({ req, fieldPath, args, query, data }) => {
          return PaginatorInfo.getRecord({
            req,
            fieldPath,
            args,
            query,
            data,
          });
        },
      },
      edges: {
        type: Edge.typeDef,
        arrayOptions: {
          allowNullElement: false,
        },
        allowNull: false,
        resolver: async ({ req, fieldPath, args, query, data }) => {
          const paginatorData = <PaginatorData>data;

          return Promise.all(
            paginatorData.records.map((item, index) => {
              // separate the last_id key, if any
              const { $last_id: lastId, ...remainingItem } = item;

              // aggregate $last_value_N into last_values array
              const lastValues = extractLastValueColumns(remainingItem, true);

              return Edge.getRecord({
                req,
                fieldPath,
                args,
                query,
                data: { item: remainingItem, index, lastId, lastValues },
              });
            })
          );
        },
      },
    },
  };
}
