import { userRoleKenum } from "./enums";
import { KenumService } from "./core/services";

import { UserService } from "./models/user/service";
import { ApiKeyService } from "./models/apiKey/service";
import { GithubService } from "./models/github/service";
import { FileService } from "./models/file/service";
import { AdminService } from "./models/admin/service";
import { GameVersionService } from "./models/gameVersion/service";
import { GameTypeService } from "./models/gameType/service";
import { HealthService } from "./models/health/service";
import { TextureService } from "./models/texture/service"
import { NpcService } from "./models/npc/service"
/** END Service Import */

import { GameVersionGameTypeLinkService } from "./links/gameVersionGameTypeLink/service";
import { UserUserFollowLinkService } from "./links/userUserFollowLink/service"
/** END LINK Service Import */

export const User = new UserService();
export const ApiKey = new ApiKeyService();
export const File = new FileService();
export const Github = new GithubService();
export const Admin = new AdminService();
export const GameVersion = new GameVersionService();
export const GameType = new GameTypeService();
export const Health = new HealthService();
export const Texture = new TextureService();
export const Npc = new NpcService();
/** END Service Set */

export const GameVersionGameTypeLink = new GameVersionGameTypeLinkService();
export const UserUserFollowLink = new UserUserFollowLinkService();
/** END LINK Service Set */

export const UserRole = new KenumService("userRole", userRoleKenum);
