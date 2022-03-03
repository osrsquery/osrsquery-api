import { Texture } from "../../services";
import { generateGameTypeModelRootResolvers } from "../../helpers/gameType";

export default {
  ...generateGameTypeModelRootResolvers(Texture),
};
