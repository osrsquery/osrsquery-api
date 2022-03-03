import { User, Health, GameVersion } from "../../services";
import { GiraffeqlObjectType, ObjectTypeDefinition } from "giraffeql";
import {
  generateIdField,
  generateCreatedAtField,
  generateUpdatedAtField,
  generateCreatedByField,
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
    gameId: generateIntegerField({
      allowNull: false,
      sqlOptions: { field: "game_id", unique: "gameId-gameVersion" },
    }),
    gameVersion: generateJoinableField({
      service: GameVersion,
      allowNull: false,
      sqlOptions: { field: "game_version", unique: "gameId-gameVersion" },
    }),
    field3272: generateIntegerField({
      allowNull: false,
    }),
    field3275: generateIntegerField({
      allowNull: false,
    }),
    field3276: generateIntegerField({
      allowNull: false,
    }),
    field3277: generateIntegerField({
      allowNull: false,
    }),
    field3278: generateIntegerField({
      allowNull: false,
    }),
    field3283: generateIntegerField({
      allowNull: false,
    }),
    healthScale: generateIntegerField({
      allowNull: false,
      sqlOptions: { field: "health_scale" },
    }),
    healthBarPadding: generateIntegerField({
      allowNull: false,
      sqlOptions: { field: "health_bar_padding" },
    }),
    healthBarBackSpriteId: generateIntegerField({
      allowNull: false,
      sqlOptions: { field: "health_bar_back_sprite_id" },
    }),
    healthBarFrontSpriteId: generateIntegerField({
      allowNull: false,
      sqlOptions: { field: "health_bar_front_sprite_id" },
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
