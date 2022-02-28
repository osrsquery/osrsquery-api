import { Health } from "../../services";
import { generateBaseRootResolvers } from "../../core/helpers/rootResolver";

export default {
  ...generateBaseRootResolvers(Health, [
    "get",
    "getMultiple",
    "delete",
    "create",
    "update",
  ]),
};
