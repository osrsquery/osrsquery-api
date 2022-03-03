import * as Knex from "knex";

export async function up(knex: Knex): Promise<void[]> {
  return Promise.all([
    knex.schema.createTable("user", function (table) {
      table.string("id").notNullable().primary();
      table.string("name").notNullable();
      table.string("firebase_uid").notNullable().unique();
      table.string("email").notNullable().unique();
      table.string("avatar").nullable();
      table.integer("role").notNullable().defaultTo(2);
      table.jsonb("permissions").nullable();
      table.boolean("is_public").notNullable().defaultTo(true);
      table.dateTime("created_at").notNullable().defaultTo(knex.fn.now());
      table.dateTime("updated_at").nullable();
      table.string("created_by").notNullable();
    }),
    knex.schema.createTable("apiKey", function (table) {
      table.string("id").notNullable().primary();
      table.string("name").notNullable();
      table.string("code").notNullable().unique();
      table.string("user").notNullable();
      table.jsonb("permissions").nullable();
      table.dateTime("created_at").notNullable().defaultTo(knex.fn.now());
      table.dateTime("updated_at").nullable();
      table.string("created_by").notNullable();
    }),
    knex.schema.createTable("file", function (table) {
      table.string("id").notNullable().primary();
      table.string("name").notNullable();
      table.integer("size").notNullable();
      table.string("location").notNullable();
      table.string("content_type").notNullable();
      table.string("parent_key").nullable();
      table.dateTime("created_at").notNullable().defaultTo(knex.fn.now());
      table.dateTime("updated_at").nullable();
      table.string("created_by").notNullable();
    }),
    knex.schema.createTable("gameVersion", function (table) {
      table.string("id").notNullable().primary();
      table.string("name").notNullable();
      table.string("avatar").nullable();
      table.text("description").nullable();
      table.integer("generation").notNullable().unique();
      table.string("folder_name").notNullable();
      table.boolean("is_latest").notNullable();
      table.dateTime("created_at").notNullable().defaultTo(knex.fn.now());
      table.dateTime("updated_at").nullable();
      table.string("created_by").notNullable();
    }),
    knex.schema.createTable("gameType", function (table) {
      table.string("id").notNullable().primary();
      table.string("name").notNullable();
      table.string("avatar").nullable();
      table.text("description").nullable();
      table.string("file_name").notNullable();
      table.string("model_name").notNullable().unique();
      table.jsonb("fields_map").notNullable();
      table.dateTime("created_at").notNullable().defaultTo(knex.fn.now());
      table.dateTime("updated_at").nullable();
      table.string("created_by").notNullable();
    }),
    knex.schema.createTable("health", function (table) {
      table.string("id").notNullable().primary();
      table.integer("game_id").notNullable();
      table.string("game_version").notNullable();
      table.integer("field3272").notNullable();
      table.integer("field3275").notNullable();
      table.integer("field3276").notNullable();
      table.integer("field3277").notNullable();
      table.integer("field3278").notNullable();
      table.integer("field3283").notNullable();
      table.integer("health_scale").notNullable();
      table.integer("health_bar_padding").notNullable();
      table.integer("health_bar_back_sprite_id").notNullable();
      table.integer("health_bar_front_sprite_id").notNullable();
      table.jsonb("data").notNullable();
      table.dateTime("created_at").notNullable().defaultTo(knex.fn.now());
      table.dateTime("updated_at").nullable();
      table.string("created_by").notNullable();
      table.unique(["game_id", "game_version"]);
    }),
    knex.schema.createTable("texture", function (table) {
      table.string("id").notNullable().primary();
      table.integer("game_id").notNullable();
      table.string("game_version").notNullable();
      table.jsonb("file_ids").notNullable().defaultTo([]);
      table.integer("sprite").notNullable();
      table.jsonb("data").notNullable();
      table.dateTime("created_at").notNullable().defaultTo(knex.fn.now());
      table.dateTime("updated_at").nullable();
      table.string("created_by").notNullable();
      table.unique(["game_id", "game_version"]);
    }),
    knex.schema.createTable("npc", function (table) {
      table.string("id").notNullable().primary();
      table.integer("game_id").notNullable();
      table.string("game_version").notNullable();
      table.string("name").notNullable();
      table.integer("size").notNullable();
      table.integer("category").notNullable();
      table.jsonb("models").notNullable().defaultTo([]);
      table.jsonb("chathead_models").notNullable().defaultTo([]);
      table.integer("standing_animation").notNullable();
      table.integer("rotate_left_animation").notNullable();
      table.integer("rotate_right_animation").notNullable();
      table.integer("walking_animation").notNullable();
      table.integer("rotate180_animation").notNullable();
      table.integer("rotate90_right_animation").notNullable();
      table.integer("rotate90_left_animation").notNullable();
      table.jsonb("actions").notNullable().defaultTo([]);
      table.boolean("is_minimap_visible").notNullable();
      table.integer("combat_level").notNullable();
      table.integer("width_scale").notNullable();
      table.integer("height_scale").notNullable();
      table.boolean("has_render_priority").notNullable();
      table.integer("ambient").notNullable();
      table.integer("contrast").notNullable();
      table.integer("head_icon").notNullable();
      table.integer("rotation_speed").notNullable();
      table.integer("varbit_id").notNullable();
      table.integer("varp_index").notNullable();
      table.boolean("is_interactable").notNullable();
      table.boolean("rotation_flag").notNullable();
      table.boolean("is_pet").notNullable();
      table.jsonb("params").notNullable();
      table.jsonb("data").notNullable();
      table.dateTime("created_at").notNullable().defaultTo(knex.fn.now());
      table.dateTime("updated_at").nullable();
      table.string("created_by").notNullable();
      table.unique(["game_id", "game_version"]);
    }),
    knex.schema.createTable("gameVersionGameTypeLink", function (table) {
      table.string("id").notNullable().primary();
      table.string("game_version").notNullable();
      table.string("game_type").notNullable();
      table.dateTime("created_at").notNullable().defaultTo(knex.fn.now());
      table.dateTime("updated_at").nullable();
      table.string("created_by").notNullable();
      table.string("file_name_override").nullable();
      table.boolean("is_synced").notNullable().defaultTo(false);
      table.unique(["game_version", "game_type"]);
    }),
    knex.schema.createTable("userUserFollowLink", function (table) {
      table.string("id").notNullable().primary();
      table.string("user").notNullable();
      table.string("target").notNullable();
      table.dateTime("created_at").notNullable().defaultTo(knex.fn.now());
      table.dateTime("updated_at").nullable();
      table.string("created_by").notNullable();
      table.unique(["user", "target"]);
    }),
  ]);
}

export async function down(knex: Knex): Promise<void[]> {
  return Promise.all([
    knex.schema.dropTable("user"),
    knex.schema.dropTable("apiKey"),
    knex.schema.dropTable("file"),
    knex.schema.dropTable("gameVersion"),
    knex.schema.dropTable("gameType"),
    knex.schema.dropTable("health"),
    knex.schema.dropTable("texture"),
    knex.schema.dropTable("npc"),
    knex.schema.dropTable("gameVersionGameTypeLink"),
    knex.schema.dropTable("userUserFollowLink"),
  ]);
}
