import { GameVersionGameTypeLink, GameType, GameVersion } from "../../services";
import { GiraffeqlObjectType } from "giraffeql";
import { generateStringField } from "../../core/helpers/typeDef";
import { generateLinkTypeDef } from "../../core/generators";

export default new GiraffeqlObjectType(
  generateLinkTypeDef(
    {
      gameVersion: {
        service: GameVersion,
        allowNull: false,
        sqlField: "game_version",
      },
      gameType: {
        service: GameType,
        allowNull: false,
        sqlField: "game_type",
      },
    },
    GameVersionGameTypeLink,
    {
      fileNameOverride: generateStringField({
        allowNull: true,
        sqlOptions: {
          field: "file_name_override",
        },
      }),
    }
  )
);
