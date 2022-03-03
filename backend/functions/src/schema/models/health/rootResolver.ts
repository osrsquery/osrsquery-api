import { Health } from "../../services";
import { generateGameTypeModelRootResolvers } from "../../helpers/gameType";

export default {
  ...generateGameTypeModelRootResolvers(Health),
};
