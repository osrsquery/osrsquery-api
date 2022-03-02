import { GameVersion } from "../../services";
import { generateBaseRootResolvers } from "../../core/helpers/rootResolver";
import { GiraffeqlInputFieldType, GiraffeqlRootResolverType } from "giraffeql";

export default {
  ...generateBaseRootResolvers({
    service: GameVersion,
    methods: ["get", "getMultiple", "delete", "create", "update"],
    restMethods: {
      get: {
        route: `/rev/:generation`,
      },
      getMultiple: {
        route: `/rev`,
      },
    },
  }),

  // syncs the gameTypeLinks
  syncGameTypeLinks: new GiraffeqlRootResolverType({
    name: "syncGameTypeLinks",
    restOptions: {
      method: "post",
      route: "/syncGameTypeLinks",
    },
    allowNull: false,
    type: GameVersion.typeDefLookup,
    args: new GiraffeqlInputFieldType({
      required: true,
      type: GameVersion.inputTypeDefLookup,
    }),
    resolver: (inputs) => GameVersion.syncGameTypeLinks(inputs),
  }),

  // syncs the gameTypeLinks
  syncGameTypes: new GiraffeqlRootResolverType({
    name: "syncGameTypes",
    restOptions: {
      method: "post",
      route: "/syncGameTypes",
    },
    allowNull: false,
    type: GameVersion.typeDefLookup,
    args: new GiraffeqlInputFieldType({
      required: true,
      type: GameVersion.inputTypeDefLookup,
    }),
    resolver: (inputs) => GameVersion.syncGameTypes(inputs),
  }),
};
