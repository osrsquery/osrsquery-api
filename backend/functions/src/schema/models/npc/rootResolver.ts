import { Npc } from "../../services";
import { generateGameTypeModelRootResolvers } from "../../helpers/gameType";

export default {
  ...generateGameTypeModelRootResolvers(Npc),
};
