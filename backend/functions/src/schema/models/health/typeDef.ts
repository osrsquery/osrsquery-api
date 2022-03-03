import { Health } from "../../services";
import { GiraffeqlObjectType } from "giraffeql";
import { generateIntegerField } from "../../core/helpers/typeDef";
import { generateGameTypeModelTypeDef } from "../../helpers/gameType";

export default new GiraffeqlObjectType(
  generateGameTypeModelTypeDef(Health, {
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
  })
);
