import { User, GameType } from "../../services";
import { GiraffeqlObjectType, ObjectTypeDefinition } from "giraffeql";
import {
  generateIdField,
  generateCreatedAtField,
  generateUpdatedAtField,
  generateCreatedByField,
  generateStringField,
  generateTextField,
  generateTypenameField,
  generateJSONField,
} from "../../core/helpers/typeDef";

export default new GiraffeqlObjectType(<ObjectTypeDefinition>{
  name: GameType.typename,
  description: "GameType type",
  fields: {
    ...generateIdField(),
    ...generateTypenameField(GameType),
    name: generateStringField({ allowNull: false }),
    avatar: generateStringField({ allowNull: true }),
    description: generateTextField({
      allowNull: true,
    }),
    fileName: generateStringField({
      allowNull: false,
      sqlOptions: { field: "file_name" },
    }),
    modelName: generateStringField({
      allowNull: false,
      sqlOptions: { field: "model_name", unique: true },
    }),
    fieldsMap: generateJSONField({
      allowNull: false,
      sqlOptions: {
        field: "fields_map",
      },
    }),
    ...generateCreatedAtField(),
    ...generateUpdatedAtField(),
    ...generateCreatedByField(User),
  },
});
