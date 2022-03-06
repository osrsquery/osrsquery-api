import * as Knex from "knex";

export async function up(knex: Knex): Promise<void[]> {
  return Promise.all([
    knex.schema.createTable("item", function (table) {
      table.string("id").notNullable().primary();
      table.integer("game_id").notNullable();
      table.string("game_version").notNullable();
      table.string("name").notNullable();
      table.integer("resize_x").notNullable();
      table.integer("resize_y").notNullable();
      table.integer("resize_z").notNullable();
      table.integer("xan2d").notNullable();
      table.integer("category").notNullable();
      table.integer("yan2d").notNullable();
      table.integer("zan2d").notNullable();
      table.integer("cost").notNullable();
      table.boolean("is_tradeable").notNullable();
      table.integer("stackable").notNullable();
      table.integer("inventory_model").notNullable();
      table.boolean("members").notNullable();
      table.integer("zoom2d").notNullable();
      table.integer("x_offset2d").notNullable();
      table.integer("y_offset2d").notNullable();
      table.integer("ambient").notNullable();
      table.integer("contrast").notNullable();
      table.jsonb("options").notNullable().defaultTo([]);
      table.jsonb("interface_options").notNullable().defaultTo([]);
      table.integer("male_model0").notNullable();
      table.integer("male_model1").notNullable();
      table.integer("male_model2").notNullable();
      table.integer("male_offset").notNullable();
      table.integer("male_head_model").notNullable();
      table.integer("male_head_model2").notNullable();
      table.integer("female_model0").notNullable();
      table.integer("female_model1").notNullable();
      table.integer("female_model2").notNullable();
      table.integer("female_offset").notNullable();
      table.integer("female_head_model").notNullable();
      table.integer("female_head_model2").notNullable();
      table.integer("noted_id").notNullable();
      table.integer("noted_template").notNullable();
      table.integer("team").notNullable();
      table.integer("shift_click_drop_index").notNullable();
      table.integer("bought_id").notNullable();
      table.integer("bought_template_id").notNullable();
      table.integer("placeholder_id").notNullable();
      table.integer("placeholder_template_id").notNullable();
      table.jsonb("params").notNullable();
      table.jsonb("data").notNullable();
      table.dateTime("created_at").notNullable().defaultTo(knex.fn.now());
      table.dateTime("updated_at").nullable();
      table.string("created_by").notNullable();
      table.unique(["game_id", "game_version"]);
    }),
    knex.schema.createTable("object", function (table) {
      table.string("id").notNullable().primary();
      table.integer("game_id").notNullable();
      table.string("game_version").notNullable();
      table.integer("decor_displacement").notNullable();
      table.boolean("is_hollow").notNullable();
      table.string("name").notNullable();
      table.integer("map_area_id").notNullable();
      table.integer("size_x").notNullable();
      table.integer("size_y").notNullable();
      table.integer("an_int2083").notNullable();
      table.integer("offset_x").notNullable();
      table.boolean("merge_normals").notNullable();
      table.integer("wall_or_door").notNullable();
      table.integer("animation_id").notNullable();
      table.integer("varbit_id").notNullable();
      table.integer("ambient").notNullable();
      table.integer("contrast").notNullable();
      table.jsonb("actions").notNullable().defaultTo([]);
      table.integer("interact_type").notNullable();
      table.integer("map_scene_id").notNullable();
      table.integer("blocking_mask").notNullable();
      table.integer("shadow").notNullable();
      table.integer("model_size_x").notNullable();
      table.integer("model_size_height").notNullable();
      table.integer("model_size_y").notNullable();
      table.integer("offset_height").notNullable();
      table.integer("offset_y").notNullable();
      table.boolean("obstructs_ground").notNullable();
      table.boolean("randomize_anim_start").notNullable();
      table.integer("contoured_ground").notNullable();
      table.integer("category").notNullable();
      table.integer("supports_items").notNullable();
      table.jsonb("config_change_dest").notNullable().defaultTo([]);
      table.boolean("is_rotated").notNullable();
      table.integer("varp_id").notNullable();
      table.integer("ambient_sound_id").notNullable();
      table.boolean("a_bool2111").notNullable();
      table.integer("an_int2112").notNullable();
      table.integer("an_int2113").notNullable();
      table.boolean("blocks_projectile").notNullable();
      table.jsonb("params").notNullable();
      table.jsonb("data").notNullable();
      table.dateTime("created_at").notNullable().defaultTo(knex.fn.now());
      table.dateTime("updated_at").nullable();
      table.string("created_by").notNullable();
      table.unique(["game_id", "game_version"]);
    }),
  ]);
}

export async function down(knex: Knex): Promise<void[]> {
  return Promise.all([
    knex.schema.dropTable("item"),
    knex.schema.dropTable("object"),
  ]);
}
