import { Object } from "../../services";
import { generateGameTypeModelRootResolvers } from "../../helpers/gameType";

export default {
  ...generateGameTypeModelRootResolvers(Object),
};
