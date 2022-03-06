import * as allServices from "./services";
import "./scalars"; // initialize scalars
export * as Scalars from "./scalars";
import { BaseService } from "./core/services";

import user from "./models/user/typeDef";
import apiKey from "./models/apiKey/typeDef";
import file from "./models/file/typeDef";
import gameVersion from "./models/gameVersion/typeDef";
import gameType from "./models/gameType/typeDef";
import health from "./models/health/typeDef";
import texture from "./models/texture/typeDef"
import npc from "./models/npc/typeDef"
import item from "./models/item/typeDef"
import object from "./models/object/typeDef"
/** END TypeDef Import */

import gameVersionGameTypeLink from "./links/gameVersionGameTypeLink/typeDef";
import userUserFollowLink from "./links/userUserFollowLink/typeDef"
/** END LINK TypeDef Import */

// add the objectTypeDefs for the services with objectTypeDefs
allServices.User.setTypeDef(user);
allServices.ApiKey.setTypeDef(apiKey);
allServices.File.setTypeDef(file);
allServices.GameVersion.setTypeDef(gameVersion);
allServices.GameType.setTypeDef(gameType);
allServices.Health.setTypeDef(health);
allServices.Texture.setTypeDef(texture)
allServices.Npc.setTypeDef(npc)
allServices.Item.setTypeDef(item)
allServices.Object.setTypeDef(object)
/** END TypeDef Set */

allServices.GameVersionGameTypeLink.setTypeDef(gameVersionGameTypeLink);
allServices.UserUserFollowLink.setTypeDef(userUserFollowLink)
/** END LINK TypeDef Set */

import User from "./models/user/rootResolver";
import ApiKey from "./models/apiKey/rootResolver";
import Github from "./models/github/rootResolver";
import File from "./models/file/rootResolver";
import Admin from "./models/admin/rootResolver";
import GameVersion from "./models/gameVersion/rootResolver";
import GameType from "./models/gameType/rootResolver";
import Health from "./models/health/rootResolver";
import Texture from "./models/texture/rootResolver"
import Npc from "./models/npc/rootResolver"
import Item from "./models/item/rootResolver"
import Object from "./models/object/rootResolver"
/** END RootResolver Import */

import GameVersionGameTypeLink from "./links/gameVersionGameTypeLink/rootResolver";
import UserUserFollowLink from "./links/userUserFollowLink/rootResolver"
/** END LINK RootResolver Import */

allServices.User.setRootResolvers(User);
allServices.ApiKey.setRootResolvers(ApiKey);
allServices.Github.setRootResolvers(Github);
allServices.File.setRootResolvers(File);
allServices.Admin.setRootResolvers(Admin);
allServices.GameVersion.setRootResolvers(GameVersion);
allServices.GameType.setRootResolvers(GameType);
allServices.Health.setRootResolvers(Health);
allServices.Texture.setRootResolvers(Texture);
allServices.Npc.setRootResolvers(Npc);
allServices.Item.setRootResolvers(Item);
allServices.Object.setRootResolvers(Object);
/** END RootResolver Set */

allServices.GameVersionGameTypeLink.setRootResolvers(GameVersionGameTypeLink);
allServices.UserUserFollowLink.setRootResolvers(UserUserFollowLink);
/** END LINK RootResolver Set */

// build and export services map
export const servicesMap: Map<string, BaseService> = new Map();

for (const prop in allServices) {
  servicesMap.set(allServices[prop].typename, allServices[prop]);
}
