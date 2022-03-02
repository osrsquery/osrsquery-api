import { GameType } from "../../services";
import { generateBaseRootResolvers } from "../../core/helpers/rootResolver";

export default {
  ...generateBaseRootResolvers({
    service: GameType,
    methods: ["get", "getMultiple", "delete", "create", "update"],
    restMethods: {
      get: {},
      getMultiple: {},
    },
  }),
};
