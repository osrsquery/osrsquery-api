import { lookupSymbol } from "giraffeql";
import { servicesMap } from "../..";
import {
  AccessControlMap,
  ExternalQuery,
  ServiceFunctionInputs,
} from "../../../types";
import { permissionsCheck } from "../../core/helpers/permissions";
import { NormalService, PaginatedService } from "../../core/services";
import {
  fetchRepositoryData,
  repositoryPathExists,
} from "../../helpers/repository";
import { GameType, GameVersionGameTypeLink } from "../../services";

export class GameVersionService extends PaginatedService {
  defaultTypename = "gameVersion";

  presets: ExternalQuery = {
    default: {
      id: lookupSymbol,
      name: lookupSymbol,
      description: lookupSymbol,
      avatar: lookupSymbol,
      generation: lookupSymbol,
      isLatest: lookupSymbol,
    },
  };

  filterFieldsMap = {
    id: {},
    "createdBy.id": {},
  };

  sortFieldsMap = {
    id: {},
    createdAt: {},
    updatedAt: {},
  };

  searchFieldsMap = {
    name: {},
  };

  accessControl: AccessControlMap = {
    get: () => true,
    getMultiple: () => true,
  };

  @permissionsCheck("update")
  async syncGameTypeLinks({
    req,
    fieldPath,
    args,
    query,
    data = {},
    isAdmin = false,
  }: ServiceFunctionInputs) {
    // confirm gameVersion exists, get id
    const gameVersion = await this.getFirstSqlRecord(
      {
        select: ["id", "folderName"],
        where: {
          id: args.id,
        },
      },
      fieldPath
    );

    // loop through all gameTypes
    const gameTypes = await GameType.getAllSqlRecord({
      select: ["id", "fileName"],
      where: {},
    });

    // delete all entries for gameTypeLink with the gameVersion
    await GameVersionGameTypeLink.deleteSqlRecord({
      where: {
        gameVersion: gameVersion.id,
      },
    });

    for (const gameType of gameTypes) {
      // if url exists, add gameTypeLink
      if (
        await repositoryPathExists(
          `${gameVersion.folderName}/types/${gameType.fileName}`
        )
      ) {
        await GameVersionGameTypeLink.createSqlRecord(
          {
            fields: {
              gameVersion: gameVersion.id,
              gameType: gameType.id,
              createdBy: req.user!.id,
            },
          },
          fieldPath
        );
      }
    }

    return this.getRecord({
      req,
      fieldPath,
      args,
      query,
    });
  }

  @permissionsCheck("update")
  async syncGameTypes({
    req,
    fieldPath,
    args,
    query,
    data = {},
    isAdmin = false,
  }: ServiceFunctionInputs) {
    // confirm gameVersion exists, get id
    const gameVersion = await this.getFirstSqlRecord(
      {
        select: ["id", "folderName"],
        where: {
          id: args.id,
        },
      },
      fieldPath
    );

    // get all valid gameTypes for this gameVersion
    const gameTypes = await GameType.getAllSqlRecord({
      select: ["id", "fileName", "modelName", "fieldsMap"],
      where: {
        "gameVersionGameTypeLink/gameVersion.id": gameVersion.id,
      },
    });

    // loop through gameTypes and fetch/populate data in the models
    for (const gameType of gameTypes) {
      const gameDataResults = await fetchRepositoryData(
        `${gameVersion.folderName}/types/${gameType.fileName}`
      );

      const service = servicesMap.get(gameType.modelName);

      if (!service) throw new Error(`Invalid model: '${gameType.modelName}'`);

      if (!(service instanceof NormalService))
        throw new Error(
          `Service for model: '${gameType.modelName}' must be a NormalService`
        );

      // delete all entries for this model given the gameVersion
      await service.deleteSqlRecord({
        where: {
          gameVersion: gameVersion.id,
        },
      });

      // add an entry for each object returned in the JSON
      for (const gameData of gameDataResults) {
        await service.createSqlRecord(
          {
            fields: gameType.fieldsMap.reduce(
              (total, ele) => {
                total[ele.value] = gameData[ele.key];
                return total;
              },
              {
                gameId: gameData.id,
                gameVersion: gameVersion.id,
                data: gameData,
                createdBy: req.user!.id,
              }
            ),
          },
          fieldPath
        );
      }
    }

    return this.getRecord({
      req,
      fieldPath,
      args,
      query,
    });
  }
}
