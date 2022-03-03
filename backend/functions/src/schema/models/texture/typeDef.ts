import { User, Texture, GameVersion } from "../../services";
import { GiraffeqlObjectType, ObjectTypeDefinition } from "giraffeql";
import {
  generateIdField,
  generateCreatedAtField,
  generateUpdatedAtField,
  generateCreatedByField,
  generateTypenameField,
  generateIntegerField,
  generateJoinableField,
  generateJSONField,
} from "../../core/helpers/typeDef";

export default new GiraffeqlObjectType(<ObjectTypeDefinition>{
  name: Texture.typename,
  description: "Texture type",
  fields: {
    ...generateIdField(),
    ...generateTypenameField(Texture),
    gameId: generateIntegerField({
      allowNull: false,
      sqlOptions: { field: "game_id", unique: "gameId-gameVersion" },
    }),
    gameVersion: generateJoinableField({
      service: GameVersion,
      allowNull: false,
      sqlOptions: { field: "game_version", unique: "gameId-gameVersion" },
    }),
    sprite: generateIntegerField({
      allowNull: false,
    }),
    data: generateJSONField({
      allowNull: false,
      jsonString: false,
    }),
    ...generateCreatedAtField(),
    ...generateUpdatedAtField(),
    ...generateCreatedByField(User),
  },
});
