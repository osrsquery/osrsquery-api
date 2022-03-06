import { Object } from "../../services";
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
  generateGameTypeModelTypeDef(Object, {
    decorDisplacement: generateIntegerField({
      allowNull: false,
      sqlOptions: { field: "decor_displacement" },
    }),
    isHollow: generateBooleanField({
      allowNull: false,
      sqlOptions: { field: "is_hollow" },
    }),
    name: generateStringField({
      allowNull: false,
    }),
    mapAreaId: generateIntegerField({
      allowNull: false,
      sqlOptions: { field: "map_area_id" },
    }),
    sizeX: generateIntegerField({
      allowNull: false,
      sqlOptions: { field: "size_x" },
    }),
    sizeY: generateIntegerField({
      allowNull: false,
      sqlOptions: { field: "size_y" },
    }),
    anInt2083: generateIntegerField({
      allowNull: false,
      sqlOptions: { field: "an_int2083" },
    }),
    offsetX: generateIntegerField({
      allowNull: false,
      sqlOptions: { field: "offset_x" },
    }),
    mergeNormals: generateBooleanField({
      allowNull: false,
      sqlOptions: { field: "merge_normals" },
    }),
    wallOrDoor: generateIntegerField({
      allowNull: false,
      sqlOptions: { field: "wall_or_door" },
    }),
    animationId: generateIntegerField({
      allowNull: false,
      sqlOptions: { field: "animation_id" },
    }),
    varbitId: generateIntegerField({
      allowNull: false,
      sqlOptions: { field: "varbit_id" },
    }),
    ambient: generateIntegerField({
      allowNull: false,
    }),
    contrast: generateIntegerField({
      allowNull: false,
    }),
    actions: generateArrayField({
      allowNull: false,
      allowNullElement: true,
      type: Scalars.string,
    }),
    interactType: generateIntegerField({
      allowNull: false,
      sqlOptions: { field: "interact_type" },
    }),
    mapSceneID: generateIntegerField({
      allowNull: false,
      sqlOptions: { field: "map_scene_id" },
    }),
    blockingMask: generateIntegerField({
      allowNull: false,
      sqlOptions: { field: "blocking_mask" },
    }),
    shadow: generateIntegerField({
      allowNull: false,
    }),
    modelSizeX: generateIntegerField({
      allowNull: false,
      sqlOptions: { field: "model_size_x" },
    }),
    modelSizeHeight: generateIntegerField({
      allowNull: false,
      sqlOptions: { field: "model_size_height" },
    }),
    modelSizeY: generateIntegerField({
      allowNull: false,
      sqlOptions: { field: "model_size_y" },
    }),
    offsetHeight: generateIntegerField({
      allowNull: false,
      sqlOptions: { field: "offset_height" },
    }),
    offsetY: generateIntegerField({
      allowNull: false,
      sqlOptions: { field: "offset_y" },
    }),
    obstructsGround: generateBooleanField({
      allowNull: false,
      sqlOptions: { field: "obstructs_ground" },
    }),
    randomizeAnimStart: generateBooleanField({
      allowNull: false,
      sqlOptions: { field: "randomize_anim_start" },
    }),
    contouredGround: generateIntegerField({
      allowNull: false,
      sqlOptions: { field: "contoured_ground" },
    }),
    category: generateIntegerField({
      allowNull: false,
    }),
    supportsItems: generateIntegerField({
      allowNull: false,
      sqlOptions: { field: "supports_items" },
    }),
    configChangeDest: generateArrayField({
      allowNull: false,
      type: Scalars.number,
      sqlOptions: {
        field: "config_change_dest",
      },
    }),
    isRotated: generateBooleanField({
      allowNull: false,
      sqlOptions: { field: "is_rotated" },
    }),
    varpId: generateIntegerField({
      allowNull: false,
      sqlOptions: { field: "varp_id" },
    }),
    ambientSoundId: generateIntegerField({
      allowNull: false,
      sqlOptions: { field: "ambient_sound_id" },
    }),
    aBool2111: generateBooleanField({
      allowNull: false,
      sqlOptions: { field: "a_bool2111" },
    }),
    anInt2112: generateIntegerField({
      allowNull: false,
      sqlOptions: { field: "an_int2112" },
    }),
    anInt2113: generateIntegerField({
      allowNull: false,
      sqlOptions: { field: "an_int2113" },
    }),
    blocksProjectile: generateBooleanField({
      allowNull: false,
      sqlOptions: { field: "blocks_projectile" },
    }),
    params: generateJSONField({
      allowNull: false,
      jsonString: false,
    }),
  })
);
