import { User, Health, GameVersion } from "../../services";
import { GiraffeqlObjectType, ObjectTypeDefinition } from "giraffeql";
import {
  generateIdField,
  generateCreatedAtField,
  generateUpdatedAtField,
  generateCreatedByField,
  generateStringField,
  generateTypenameField,
  generateJoinableField,
  generateIntegerField,
  generateJSONField,
} from "../../core/helpers/typeDef";

export default new GiraffeqlObjectType(<ObjectTypeDefinition>{
  name: Health.typename,
  description: "Health type",
  fields: {
    ...generateIdField(),
    ...generateTypenameField(Health),
    gameId: generateStringField({
      allowNull: false,
      sqlOptions: { field: "game_id", unique: "gameId-gameVersion" },
    }),
    gameVersion: generateJoinableField({
      service: GameVersion,
      allowNull: false,
      sqlOptions: { field: "game_version", unique: "gameId-gameVersion" },
    }),
    healthScale: generateIntegerField({
      allowNull: false,
      sqlOptions: { field: "health_scale" },
    }),
    data: generateJSONField({
      allowNull: false,
    }),
    ...generateCreatedAtField(),
    ...generateUpdatedAtField(),
    ...generateCreatedByField(User),
  },
});
