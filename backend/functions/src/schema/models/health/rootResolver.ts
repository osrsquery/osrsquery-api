import { GameVersion, Health } from "../../services";
import {
  generateBaseRootResolvers,
  transformGetMultipleRestArgs,
} from "../../core/helpers/rootResolver";

export default {
  ...generateBaseRootResolvers({
    service: Health,
    methods: ["get", "getMultiple", "delete", "create", "update"],
    restMethods: {
      get: {
        // route: `/rev/:gameVersion/${Health.typename}/:gameId`,
        route: `/rev/:generation/${Health.typename}/:gameId`,
        argsTransformer: async (req) => {
          // confirm existence of generation
          await GameVersion.getFirstSqlRecord({
            select: ["id"],
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
        route: `/rev/:generation/${Health.typename}`,
        argsTransformer: async (req) => {
          // confirm existence of generation
          await GameVersion.getFirstSqlRecord({
            select: ["id"],
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
  }),
};
