import { User, GameVersion } from "../../services";
import { GiraffeqlObjectType, ObjectTypeDefinition } from "giraffeql";
import {
  generateIdField,
  generateCreatedAtField,
  generateUpdatedAtField,
  generateCreatedByField,
  generateStringField,
  generateTextField,
  generateTypenameField,
  generateIntegerField,
  generateBooleanField,
} from "../../core/helpers/typeDef";

export default new GiraffeqlObjectType(<ObjectTypeDefinition>{
  name: GameVersion.typename,
  description: "GameVersion type",
  fields: {
    ...generateIdField(),
    ...generateTypenameField(GameVersion),
    name: generateStringField({ allowNull: false }),
    avatar: generateStringField({ allowNull: true }),
    description: generateTextField({
      allowNull: true,
    }),
    generation: generateIntegerField({
      allowNull: false,
      sqlOptions: { unique: true },
    }),
    folderName: generateStringField({
      allowNull: false,
      sqlOptions: { field: "folder_name" },
    }),
    isLatest: generateBooleanField({
      allowNull: false,
      sqlOptions: {
        field: "is_latest",
      },
    }),
    ...generateCreatedAtField(),
    ...generateUpdatedAtField(),
    ...generateCreatedByField(User),
  },
});
