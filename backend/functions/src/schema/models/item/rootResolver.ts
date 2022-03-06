import { Item } from "../../services";
import { generateGameTypeModelRootResolvers } from "../../helpers/gameType";

export default {
  ...generateGameTypeModelRootResolvers(Item),
};
