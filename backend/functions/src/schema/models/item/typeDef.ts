import { Item } from "../../services";
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
  generateGameTypeModelTypeDef(Item, {
    name: generateStringField({
      allowNull: false,
    }),
    resizeX: generateIntegerField({
      allowNull: false,
      sqlOptions: { field: "resize_x" },
    }),
    resizeY: generateIntegerField({
      allowNull: false,
      sqlOptions: { field: "resize_y" },
    }),
    resizeZ: generateIntegerField({
      allowNull: false,
      sqlOptions: { field: "resize_z" },
    }),
    xan2d: generateIntegerField({
      allowNull: false,
    }),
    category: generateIntegerField({
      allowNull: false,
    }),
    yan2d: generateIntegerField({
      allowNull: false,
    }),
    zan2d: generateIntegerField({
      allowNull: false,
    }),
    cost: generateIntegerField({
      allowNull: false,
    }),
    isTradeable: generateBooleanField({
      allowNull: false,
      sqlOptions: { field: "is_tradeable" },
    }),
    stackable: generateIntegerField({
      allowNull: false,
    }),
    inventoryModel: generateIntegerField({
      allowNull: false,
      sqlOptions: { field: "inventory_model" },
    }),
    members: generateBooleanField({
      allowNull: false,
    }),
    zoom2d: generateIntegerField({
      allowNull: false,
    }),
    xOffset2d: generateIntegerField({
      allowNull: false,
      sqlOptions: { field: "x_offset2d" },
    }),
    yOffset2d: generateIntegerField({
      allowNull: false,
      sqlOptions: { field: "y_offset2d" },
    }),
    ambient: generateIntegerField({
      allowNull: false,
    }),
    contrast: generateIntegerField({
      allowNull: false,
    }),
    options: generateArrayField({
      allowNull: false,
      allowNullElement: true,
      type: Scalars.string,
    }),
    interfaceOptions: generateArrayField({
      allowNull: false,
      allowNullElement: true,
      type: Scalars.string,
      sqlOptions: {
        field: "interface_options",
      },
    }),
    maleModel0: generateIntegerField({
      allowNull: false,
      sqlOptions: { field: "male_model0" },
    }),
    maleModel1: generateIntegerField({
      allowNull: false,
      sqlOptions: { field: "male_model1" },
    }),
    maleModel2: generateIntegerField({
      allowNull: false,
      sqlOptions: { field: "male_model2" },
    }),
    maleOffset: generateIntegerField({
      allowNull: false,
      sqlOptions: { field: "male_offset" },
    }),
    maleHeadModel: generateIntegerField({
      allowNull: false,
      sqlOptions: { field: "male_head_model" },
    }),
    maleHeadModel2: generateIntegerField({
      allowNull: false,
      sqlOptions: { field: "male_head_model2" },
    }),
    femaleModel0: generateIntegerField({
      allowNull: false,
      sqlOptions: { field: "female_model0" },
    }),
    femaleModel1: generateIntegerField({
      allowNull: false,
      sqlOptions: { field: "female_model1" },
    }),
    femaleModel2: generateIntegerField({
      allowNull: false,
      sqlOptions: { field: "female_model2" },
    }),
    femaleOffset: generateIntegerField({
      allowNull: false,
      sqlOptions: { field: "female_offset" },
    }),
    femaleHeadModel: generateIntegerField({
      allowNull: false,
      sqlOptions: { field: "female_head_model" },
    }),
    femaleHeadModel2: generateIntegerField({
      allowNull: false,
      sqlOptions: { field: "female_head_model2" },
    }),
    notedID: generateIntegerField({
      allowNull: false,
      sqlOptions: { field: "noted_id" },
    }),
    notedTemplate: generateIntegerField({
      allowNull: false,
      sqlOptions: { field: "noted_template" },
    }),
    team: generateIntegerField({
      allowNull: false,
    }),
    shiftClickDropIndex: generateIntegerField({
      allowNull: false,
      sqlOptions: { field: "shift_click_drop_index" },
    }),
    boughtId: generateIntegerField({
      allowNull: false,
      sqlOptions: { field: "bought_id" },
    }),
    boughtTemplateId: generateIntegerField({
      allowNull: false,
      sqlOptions: { field: "bought_template_id" },
    }),
    placeholderId: generateIntegerField({
      allowNull: false,
      sqlOptions: { field: "placeholder_id" },
    }),
    placeholderTemplateId: generateIntegerField({
      allowNull: false,
      sqlOptions: { field: "placeholder_template_id" },
    }),
    params: generateJSONField({
      allowNull: false,
      jsonString: false,
    }),
  })
);
