import { Texture } from "../../services";
import { GiraffeqlObjectType } from "giraffeql";
import {
  generateIntegerField,
  generateArrayField,
} from "../../core/helpers/typeDef";
import * as Scalars from "../../scalars";
import { generateGameTypeModelTypeDef } from "../../helpers/gameType";

export default new GiraffeqlObjectType(
  generateGameTypeModelTypeDef(Texture, {
    fileIds: generateArrayField({
      allowNull: false,
      type: Scalars.number,
      sqlOptions: {
        field: "file_ids",
      },
    }),
    sprite: generateIntegerField({
      allowNull: false,
    }),
  })
);
