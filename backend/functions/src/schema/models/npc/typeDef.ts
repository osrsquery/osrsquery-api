import { Npc } from "../../services";
import { GiraffeqlObjectType } from "giraffeql";
import {
  generateArrayField,
  generateBooleanField,
  generateIntegerField,
  generateJSONField,
  generateStringField,
} from "../../core/helpers/typeDef";
import * as Scalars from "../../scalars";
import { generateGameTypeModelTypeDef } from "../../helpers/gameType";

export default new GiraffeqlObjectType(
  generateGameTypeModelTypeDef(Npc, {
    name: generateStringField({
      allowNull: false,
    }),
    size: generateIntegerField({
      allowNull: false,
    }),
    category: generateIntegerField({
      allowNull: false,
    }),
    models: generateArrayField({
      allowNull: false,
      type: Scalars.number,
    }),
    chatheadModels: generateArrayField({
      allowNull: false,
      type: Scalars.number,
      sqlOptions: {
        field: "chathead_models",
      },
    }),
    standingAnimation: generateIntegerField({
      allowNull: false,
      sqlOptions: {
        field: "standing_animation",
      },
    }),
    rotateLeftAnimation: generateIntegerField({
      allowNull: false,
      sqlOptions: {
        field: "rotate_left_animation",
      },
    }),
    rotateRightAnimation: generateIntegerField({
      allowNull: false,
      sqlOptions: {
        field: "rotate_right_animation",
      },
    }),
    walkingAnimation: generateIntegerField({
      allowNull: false,
      sqlOptions: {
        field: "walking_animation",
      },
    }),
    rotate180Animation: generateIntegerField({
      allowNull: false,
      sqlOptions: {
        field: "rotate180_animation",
      },
    }),
    rotate90RightAnimation: generateIntegerField({
      allowNull: false,
      sqlOptions: {
        field: "rotate90_right_animation",
      },
    }),
    rotate90LeftAnimation: generateIntegerField({
      allowNull: false,
      sqlOptions: {
        field: "rotate90_left_animation",
      },
    }),
    actions: generateArrayField({
      allowNull: false,
      allowNullElement: true,
      type: Scalars.number,
    }),
    isMinimapVisible: generateBooleanField({
      allowNull: false,
      sqlOptions: {
        field: "is_minimap_visible",
      },
    }),
    combatLevel: generateIntegerField({
      allowNull: false,
      sqlOptions: { field: "combat_level" },
    }),
    widthScale: generateIntegerField({
      allowNull: false,
      sqlOptions: { field: "width_scale" },
    }),
    heightScale: generateIntegerField({
      allowNull: false,
      sqlOptions: { field: "height_scale" },
    }),
    hasRenderPriority: generateBooleanField({
      allowNull: false,
      sqlOptions: { field: "has_render_priority" },
    }),
    ambient: generateIntegerField({
      allowNull: false,
    }),
    contrast: generateIntegerField({
      allowNull: false,
    }),
    headIcon: generateIntegerField({
      allowNull: false,
      sqlOptions: { field: "head_icon" },
    }),
    rotationSpeed: generateIntegerField({
      allowNull: false,
      sqlOptions: { field: "rotation_speed" },
    }),
    varbitId: generateIntegerField({
      allowNull: false,
      sqlOptions: { field: "varbit_id" },
    }),
    varpIndex: generateIntegerField({
      allowNull: false,
      sqlOptions: { field: "varp_index" },
    }),
    isInteractable: generateBooleanField({
      allowNull: false,
      sqlOptions: { field: "is_interactable" },
    }),
    rotationFlag: generateBooleanField({
      allowNull: false,
      sqlOptions: { field: "rotation_flag" },
    }),
    isPet: generateBooleanField({
      allowNull: false,
      sqlOptions: { field: "is_pet" },
    }),
    params: generateJSONField({
      allowNull: false,
      jsonString: false,
    }),
  })
);
