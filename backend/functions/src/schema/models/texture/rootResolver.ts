import { GameVersion, Texture } from "../../services";
import {
  generateBaseRootResolvers,
  transformGetMultipleRestArgs,
} from "../../core/helpers/rootResolver";

export default {
  ...generateBaseRootResolvers({
    service: Texture,
    methods: ["get", "getMultiple", "delete", "create", "update"],
    restMethods: {
      get: {
        // route: `/rev/:gameVersion/${Health.typename}/:gameId`,
        route: `/rev/:generation/${Texture.typename}/:gameId`,
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
        route: `/rev/:generation/${Texture.typename}`,
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
  }),
};
