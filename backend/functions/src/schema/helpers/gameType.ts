import { lookupSymbol, ObjectTypeDefinitionField } from "giraffeql";
import { AccessControlMap, ExternalQuery } from "../../types";
import {
  generateBaseRootResolvers,
  transformGetMultipleRestArgs,
} from "../core/helpers/rootResolver";
import {
  generateCreatedAtField,
  generateCreatedByField,
  generateIdField,
  generateIntegerField,
  generateJoinableField,
  generateJSONField,
  generateTypenameField,
  generateUpdatedAtField,
} from "../core/helpers/typeDef";
import { NormalService, PaginatedService } from "../core/services";
import { GameVersion, User } from "../services";

export function generateGameTypeModelRootResolvers(service: NormalService) {
  return generateBaseRootResolvers({
    service: service,
    methods: ["get", "getMultiple", "delete", "create", "update"],
    restMethods: {
      get: {
        // route: `/rev/:gameVersion/${Health.typename}/:gameId`,
        route: `/rev/:generation/${service.typename}/:gameId`,
        argsTransformer: async (req) => {
          // confirm existence of generation
          await GameVersion.existsSqlRecord({
            where: {
              generation: req.params.generation,
            },
          });

          const args = {
            ...req.query,
            ...req.params,
          };

          // delete generation, transform it into gameVersion.generation
          args.gameVersion = {
            generation: args.generation,
          };

          delete args.generation;

          return args;
        },
      },
      getMultiple: {
        route: `/rev/:generation/${service.typename}`,
        argsTransformer: async (req) => {
          // confirm existence of generation
          await GameVersion.existsSqlRecord({
            where: {
              generation: req.params.generation,
            },
          });

          // convert generation into filterBy.generation= and delete
          req.query["filterBy-eq.gameVersion.generation"] =
            req.params.generation;

          delete req.params.generation;

          return transformGetMultipleRestArgs(req);
        },
      },
    },
  });
}

export class GameTypeModelService extends PaginatedService {
  defaultQuery: ExternalQuery = {
    gameId: lookupSymbol,
    data: lookupSymbol,
  };

  uniqueKeyMap = {
    primary: ["id"],
    secondary: ["gameId", "gameVersion"],
  };

  filterFieldsMap = {};

  searchFieldsMap = {
    name: {},
  };

  accessControl: AccessControlMap = {
    get: () => true,
    getMultiple: () => true,
  };
}

export function generateGameTypeModelTypeDef(
  service: GameTypeModelService,
  fields: { [x: string]: ObjectTypeDefinitionField }
) {
  return {
    name: service.typename,
    description: `${service.typename} type`,
    fields: {
      ...generateIdField(),
      ...generateTypenameField(service),
      gameId: generateIntegerField({
        allowNull: false,
        sqlOptions: { field: "game_id", unique: "gameId-gameVersion" },
      }),
      gameVersion: generateJoinableField({
        service: GameVersion,
        allowNull: false,
        sqlOptions: { field: "game_version", unique: "gameId-gameVersion" },
      }),
      ...fields,
      data: generateJSONField({
        allowNull: false,
        jsonString: false,
      }),
      ...generateCreatedAtField(),
      ...generateUpdatedAtField(),
      ...generateCreatedByField(User),
    },
  };
}
