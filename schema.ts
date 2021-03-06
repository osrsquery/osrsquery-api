// Query builder (Typescript version >= 4.1.3 required)
/*
const queryResult = executeGiraffeql({
  // Start typing here to get hints
  
});
*/

export function executeGiraffeql<Key extends keyof Root>(
  query: GetQuery<Key>
): GetResponse<Key> {
  let data: any;
  return data;
}

// scaffolding
export type GetQuery<K extends keyof Root> = K extends never
  ? Partial<Record<K, Queryize<Root[keyof Root]>>>
  : Record<K, Queryize<Root[K]>>;

export type GetResponse<K extends keyof Root> = Responseize<Root[K]>;

export type GetType<T> = Responseize<Field<T, undefined>>;

type Primitive = string | number | boolean | undefined | null;

type Field<T, K> = {
  Type: T;
  Args: K;
};

type Responseize<T> = T extends Field<infer Type, infer Args>
  ? Type extends never
    ? never
    : Type extends (infer U)[]
    ? { [P in keyof U]: Responseize<U[P]> }[]
    : { [P in keyof Type]: Responseize<Type[P]> }
  : never;

type Queryize<T> = T extends Field<infer Type, infer Args>
  ? Type extends never
    ? never
    : Type extends Primitive
    ? Args extends undefined // Args is undefined
      ? LookupValue
      : Args extends [infer Arg]
      ? LookupValue | { __args: Arg } // Args is a tuple
      : { __args: Args }
    : Type extends (infer U)[]
    ? Queryize<Field<U, Args>>
    : Args extends undefined // Args is undefined
    ? { [P in keyof Type]?: Queryize<Type[P]> }
    : Args extends [infer Arg]
    ? { [P in keyof Type]?: Queryize<Type[P]> } & {
        __args?: Arg;
      }
    : { [P in keyof Type]?: Queryize<Type[P]> } & { __args: Args }
  : never;

type LookupValue = true;

type Edge<T> = {
  __typename: Field<string, undefined>;
  node: Field<T, undefined>;
  cursor: Field<string, undefined>;
};

export type FilterByField<T> = {
  eq?: T;
  neq?: T;
  gt?: T;
  lt?: T;
  in?: T[];
  nin?: T[];
  regex?: Scalars["regex"];
};

export type SortByField<T> = {
  field: T;
  desc: boolean;
};

/**All Scalar values*/ export type Scalars = {
  /**String value*/ string: string;
  /**True or False*/ boolean: boolean;
  /**Numeric value*/ number: number;
  /**Unknown value*/ unknown: unknown;
  /**Image URL Field*/ imageUrl: string;
  /**URL Field*/ url: string;
  /**UNIX Timestamp (Seconds since Epoch Time)*/ unixTimestamp: number;
  /**Date YYYY-MM-DD*/ date: string;
  /**ID Field*/ id: string;
  /**Regex Field*/ regex: RegExp;
  /**Valid JSON*/ json: unknown;
  /**Valid JSON as a string*/ jsonString: string;
  /**Enum stored as a separate key value*/ userRole:
    | "NONE"
    | "NORMAL"
    | "ADMIN"
    | "CUSTOM"
    | "MODERATOR";
  /**Enum stored as is*/ userPermission:
    | "A_A"
    | "user_x"
    | "user_get"
    | "user_getMultiple"
    | "user_update"
    | "user_create"
    | "user_delete"
    | "file_getMultiple";
  userSortByKey: "id" | "createdAt" | "updatedAt";
  userGroupByKey: undefined;
  apiKeySortByKey: "id" | "createdAt";
  apiKeyGroupByKey: undefined;
  fileSortByKey: "id" | "createdAt";
  fileGroupByKey: undefined;
  gameVersionSortByKey: "id" | "createdAt" | "updatedAt";
  gameVersionGroupByKey: undefined;
  gameTypeSortByKey: "id" | "createdAt" | "updatedAt";
  gameTypeGroupByKey: undefined;
  healthSortByKey: "id" | "createdAt" | "updatedAt";
  healthGroupByKey: undefined;
  gameVersionGameTypeLinkSortByKey: "createdAt";
  gameVersionGameTypeLinkGroupByKey: undefined;
  userUserFollowLinkSortByKey: "createdAt";
  userUserFollowLinkGroupByKey: undefined;
};
/**All Input types*/ export type InputTypes = {
  /**Input object for syncCurrentUser*/ syncCurrentUser: {
    email: Scalars["string"];
  };
  user: { id?: Scalars["id"] };
  userSortByObject: SortByField<Scalars["userSortByKey"]>;
  "userFilterByField/id": FilterByField<Scalars["id"]>;
  "userFilterByField/createdBy.name": FilterByField<Scalars["string"]>;
  "userFilterByField/isPublic": FilterByField<Scalars["boolean"]>;
  "userFilterByField/role": FilterByField<Scalars["userRole"]>;
  userFilterByObject: {
    id?: InputTypes["userFilterByField/id"];
    "createdBy.name"?: InputTypes["userFilterByField/createdBy.name"];
    isPublic?: InputTypes["userFilterByField/isPublic"];
    role?: InputTypes["userFilterByField/role"];
  };
  userPaginator: {
    first?: Scalars["number"];
    last?: Scalars["number"];
    after?: Scalars["string"];
    before?: Scalars["string"];
    sortBy?: InputTypes["userSortByObject"][];
    filterBy?: InputTypes["userFilterByObject"][];
    groupBy?: Scalars["userGroupByKey"][];
    search?: Scalars["string"];
  };
  createUser: {
    name: Scalars["string"];
    firebaseUid: Scalars["string"];
    email: Scalars["string"];
    password: Scalars["string"];
    avatar?: Scalars["string"] | null;
    role?: Scalars["userRole"];
    permissions?: Scalars["userPermission"][] | null;
    isPublic?: Scalars["boolean"];
  };
  updateUserFields: {
    name?: Scalars["string"];
    firebaseUid?: Scalars["string"];
    email?: Scalars["string"];
    password?: Scalars["string"];
    avatar?: Scalars["string"] | null;
    role?: Scalars["userRole"];
    permissions?: Scalars["userPermission"][] | null;
    isPublic?: Scalars["boolean"];
  };
  updateUser: {
    item: InputTypes["user"];
    fields: InputTypes["updateUserFields"];
  };
  apiKey: { id?: Scalars["id"] };
  apiKeySortByObject: SortByField<Scalars["apiKeySortByKey"]>;
  "apiKeyFilterByField/id": FilterByField<Scalars["id"]>;
  "apiKeyFilterByField/user.id": FilterByField<Scalars["id"]>;
  apiKeyFilterByObject: {
    id?: InputTypes["apiKeyFilterByField/id"];
    "user.id"?: InputTypes["apiKeyFilterByField/user.id"];
  };
  apiKeyPaginator: {
    first?: Scalars["number"];
    last?: Scalars["number"];
    after?: Scalars["string"];
    before?: Scalars["string"];
    sortBy?: InputTypes["apiKeySortByObject"][];
    filterBy?: InputTypes["apiKeyFilterByObject"][];
    groupBy?: Scalars["apiKeyGroupByKey"][];
    search?: Scalars["string"];
  };
  createApiKey: {
    name: Scalars["string"];
    user: InputTypes["user"];
    permissions?: Scalars["userPermission"][] | null;
  };
  updateApiKeyFields: {
    name?: Scalars["string"];
    user?: InputTypes["user"];
    permissions?: Scalars["userPermission"][] | null;
  };
  updateApiKey: {
    item: InputTypes["apiKey"];
    fields: InputTypes["updateApiKeyFields"];
  };
  /**Input object for getRepositoryReleases*/ getRepositoryReleases: {
    first: Scalars["number"];
  };
  file: { id?: Scalars["id"] };
  fileSortByObject: SortByField<Scalars["fileSortByKey"]>;
  "fileFilterByField/id": FilterByField<Scalars["id"]>;
  "fileFilterByField/createdBy.id": FilterByField<Scalars["id"]>;
  "fileFilterByField/parentKey": FilterByField<Scalars["string"]>;
  fileFilterByObject: {
    id?: InputTypes["fileFilterByField/id"];
    "createdBy.id"?: InputTypes["fileFilterByField/createdBy.id"];
    parentKey?: InputTypes["fileFilterByField/parentKey"];
  };
  filePaginator: {
    first?: Scalars["number"];
    last?: Scalars["number"];
    after?: Scalars["string"];
    before?: Scalars["string"];
    sortBy?: InputTypes["fileSortByObject"][];
    filterBy?: InputTypes["fileFilterByObject"][];
    groupBy?: Scalars["fileGroupByKey"][];
    search?: Scalars["string"];
  };
  createFile: {
    name: Scalars["string"];
    location: Scalars["string"];
    parentKey?: Scalars["string"] | null;
  };
  updateFileFields: { name?: Scalars["string"] };
  updateFile: {
    item: InputTypes["file"];
    fields: InputTypes["updateFileFields"];
  };
  gameVersion: { id?: Scalars["id"] };
  gameVersionSortByObject: SortByField<Scalars["gameVersionSortByKey"]>;
  "gameVersionFilterByField/id": FilterByField<Scalars["id"]>;
  "gameVersionFilterByField/createdBy.id": FilterByField<Scalars["id"]>;
  gameVersionFilterByObject: {
    id?: InputTypes["gameVersionFilterByField/id"];
    "createdBy.id"?: InputTypes["gameVersionFilterByField/createdBy.id"];
  };
  gameVersionPaginator: {
    first?: Scalars["number"];
    last?: Scalars["number"];
    after?: Scalars["string"];
    before?: Scalars["string"];
    sortBy?: InputTypes["gameVersionSortByObject"][];
    filterBy?: InputTypes["gameVersionFilterByObject"][];
    groupBy?: Scalars["gameVersionGroupByKey"][];
    search?: Scalars["string"];
  };
  createGameVersion: {
    name: Scalars["string"];
    avatar?: Scalars["string"] | null;
    description?: Scalars["string"] | null;
    generation: Scalars["number"];
    folderName: Scalars["string"];
    isLatest: Scalars["boolean"];
  };
  updateGameVersionFields: {
    name?: Scalars["string"];
    avatar?: Scalars["string"] | null;
    description?: Scalars["string"] | null;
    generation?: Scalars["number"];
    folderName?: Scalars["string"];
    isLatest?: Scalars["boolean"];
  };
  updateGameVersion: {
    item: InputTypes["gameVersion"];
    fields: InputTypes["updateGameVersionFields"];
  };
  gameType: { id?: Scalars["id"] };
  gameTypeSortByObject: SortByField<Scalars["gameTypeSortByKey"]>;
  "gameTypeFilterByField/id": FilterByField<Scalars["id"]>;
  "gameTypeFilterByField/createdBy.id": FilterByField<Scalars["id"]>;
  "gameTypeFilterByField/gameVersionGameTypeLink/gameVersion.id": FilterByField<
    Scalars["id"]
  >;
  gameTypeFilterByObject: {
    id?: InputTypes["gameTypeFilterByField/id"];
    "createdBy.id"?: InputTypes["gameTypeFilterByField/createdBy.id"];
    "gameVersionGameTypeLink/gameVersion.id"?: InputTypes["gameTypeFilterByField/gameVersionGameTypeLink/gameVersion.id"];
  };
  gameTypePaginator: {
    first?: Scalars["number"];
    last?: Scalars["number"];
    after?: Scalars["string"];
    before?: Scalars["string"];
    sortBy?: InputTypes["gameTypeSortByObject"][];
    filterBy?: InputTypes["gameTypeFilterByObject"][];
    groupBy?: Scalars["gameTypeGroupByKey"][];
    search?: Scalars["string"];
  };
  createGameType: {
    name: Scalars["string"];
    avatar?: Scalars["string"] | null;
    description?: Scalars["string"] | null;
    fileName: Scalars["string"];
    modelName: Scalars["string"];
    fieldsMap: Scalars["jsonString"];
  };
  updateGameTypeFields: {
    name?: Scalars["string"];
    avatar?: Scalars["string"] | null;
    description?: Scalars["string"] | null;
    fileName?: Scalars["string"];
    modelName?: Scalars["string"];
    fieldsMap?: Scalars["jsonString"];
  };
  updateGameType: {
    item: InputTypes["gameType"];
    fields: InputTypes["updateGameTypeFields"];
  };
  health: { id?: Scalars["id"] };
  healthSortByObject: SortByField<Scalars["healthSortByKey"]>;
  "healthFilterByField/id": FilterByField<Scalars["id"]>;
  "healthFilterByField/createdBy.id": FilterByField<Scalars["id"]>;
  healthFilterByObject: {
    id?: InputTypes["healthFilterByField/id"];
    "createdBy.id"?: InputTypes["healthFilterByField/createdBy.id"];
  };
  healthPaginator: {
    first?: Scalars["number"];
    last?: Scalars["number"];
    after?: Scalars["string"];
    before?: Scalars["string"];
    sortBy?: InputTypes["healthSortByObject"][];
    filterBy?: InputTypes["healthFilterByObject"][];
    groupBy?: Scalars["healthGroupByKey"][];
    search?: Scalars["string"];
  };
  createHealth: {
    gameId: Scalars["string"];
    gameVersion: InputTypes["gameVersion"];
    healthScale: Scalars["number"];
    data: Scalars["jsonString"];
  };
  updateHealthFields: {
    gameId?: Scalars["string"];
    gameVersion?: InputTypes["gameVersion"];
    healthScale?: Scalars["number"];
    data?: Scalars["jsonString"];
  };
  updateHealth: {
    item: InputTypes["health"];
    fields: InputTypes["updateHealthFields"];
  };
  gameVersionGameTypeLink: { id?: Scalars["id"] };
  gameVersionGameTypeLinkSortByObject: SortByField<
    Scalars["gameVersionGameTypeLinkSortByKey"]
  >;
  gameVersionGameTypeLinkFilterByObject: {};
  gameVersionGameTypeLinkPaginator: {
    first?: Scalars["number"];
    last?: Scalars["number"];
    after?: Scalars["string"];
    before?: Scalars["string"];
    sortBy?: InputTypes["gameVersionGameTypeLinkSortByObject"][];
    filterBy?: InputTypes["gameVersionGameTypeLinkFilterByObject"][];
    groupBy?: Scalars["gameVersionGameTypeLinkGroupByKey"][];
  };
  createGameVersionGameTypeLink: {
    gameVersion: InputTypes["gameVersion"];
    gameType: InputTypes["gameType"];
    fileNameOverride?: Scalars["string"] | null;
  };
  updateGameVersionGameTypeLinkFields: {
    gameVersion?: InputTypes["gameVersion"];
    gameType?: InputTypes["gameType"];
    fileNameOverride?: Scalars["string"] | null;
  };
  updateGameVersionGameTypeLink: {
    item: InputTypes["gameVersionGameTypeLink"];
    fields: InputTypes["updateGameVersionGameTypeLinkFields"];
  };
  userUserFollowLink: { id?: Scalars["id"] };
  userUserFollowLinkSortByObject: SortByField<
    Scalars["userUserFollowLinkSortByKey"]
  >;
  userUserFollowLinkFilterByObject: {};
  userUserFollowLinkPaginator: {
    first?: Scalars["number"];
    last?: Scalars["number"];
    after?: Scalars["string"];
    before?: Scalars["string"];
    sortBy?: InputTypes["userUserFollowLinkSortByObject"][];
    filterBy?: InputTypes["userUserFollowLinkFilterByObject"][];
    groupBy?: Scalars["userUserFollowLinkGroupByKey"][];
  };
  createUserUserFollowLink: {
    user: InputTypes["user"];
    target: InputTypes["user"];
  };
  updateUserUserFollowLinkFields: {
    user?: InputTypes["user"];
    target?: InputTypes["user"];
  };
  updateUserUserFollowLink: {
    item: InputTypes["userUserFollowLink"];
    fields: InputTypes["updateUserUserFollowLinkFields"];
  };
};
/**All main types*/ export type MainTypes = {
  paginatorInfo: { Typename: "paginatorInfo"; Type: GetType<PaginatorInfo> };
  userEdge: { Typename: "userEdge"; Type: GetType<UserEdge> };
  userPaginator: { Typename: "userPaginator"; Type: GetType<UserPaginator> };
  apiKeyEdge: { Typename: "apiKeyEdge"; Type: GetType<ApiKeyEdge> };
  apiKeyPaginator: {
    Typename: "apiKeyPaginator";
    Type: GetType<ApiKeyPaginator>;
  };
  fileEdge: { Typename: "fileEdge"; Type: GetType<FileEdge> };
  filePaginator: { Typename: "filePaginator"; Type: GetType<FilePaginator> };
  gameVersionEdge: {
    Typename: "gameVersionEdge";
    Type: GetType<GameVersionEdge>;
  };
  gameVersionPaginator: {
    Typename: "gameVersionPaginator";
    Type: GetType<GameVersionPaginator>;
  };
  gameTypeEdge: { Typename: "gameTypeEdge"; Type: GetType<GameTypeEdge> };
  gameTypePaginator: {
    Typename: "gameTypePaginator";
    Type: GetType<GameTypePaginator>;
  };
  healthEdge: { Typename: "healthEdge"; Type: GetType<HealthEdge> };
  healthPaginator: {
    Typename: "healthPaginator";
    Type: GetType<HealthPaginator>;
  };
  gameVersionGameTypeLinkEdge: {
    Typename: "gameVersionGameTypeLinkEdge";
    Type: GetType<GameVersionGameTypeLinkEdge>;
  };
  gameVersionGameTypeLinkPaginator: {
    Typename: "gameVersionGameTypeLinkPaginator";
    Type: GetType<GameVersionGameTypeLinkPaginator>;
  };
  userUserFollowLinkEdge: {
    Typename: "userUserFollowLinkEdge";
    Type: GetType<UserUserFollowLinkEdge>;
  };
  userUserFollowLinkPaginator: {
    Typename: "userUserFollowLinkPaginator";
    Type: GetType<UserUserFollowLinkPaginator>;
  };
  userRoleEnumPaginator: {
    Typename: "userRoleEnumPaginator";
    Type: GetType<UserRoleEnumPaginator>;
  };
  user: { Typename: "user"; Type: GetType<User> };
  apiKey: { Typename: "apiKey"; Type: GetType<ApiKey> };
  file: { Typename: "file"; Type: GetType<File> };
  gameVersion: { Typename: "gameVersion"; Type: GetType<GameVersion> };
  gameType: { Typename: "gameType"; Type: GetType<GameType> };
  health: { Typename: "health"; Type: GetType<Health> };
  gameVersionGameTypeLink: {
    Typename: "gameVersionGameTypeLink";
    Type: GetType<GameVersionGameTypeLink>;
  };
  userUserFollowLink: {
    Typename: "userUserFollowLink";
    Type: GetType<UserUserFollowLink>;
  };
};
/**PaginatorInfo Type*/ export type PaginatorInfo = {
  /**The typename of the record*/ __typename: {
    Type: Scalars["string"];
    Args: [Scalars["number"]];
  };
  total: { Type: Scalars["number"]; Args: undefined };
  count: { Type: Scalars["number"]; Args: undefined };
  startCursor: { Type: Scalars["string"] | null; Args: undefined };
  endCursor: { Type: Scalars["string"] | null; Args: undefined };
};
export type UserEdge = Edge<User>;
/**Paginator*/ export type UserPaginator = {
  /**The typename of the record*/ __typename: {
    Type: Scalars["string"];
    Args: [Scalars["number"]];
  };
  paginatorInfo: { Type: PaginatorInfo; Args: undefined };
  edges: { Type: UserEdge[]; Args: undefined };
};
export type ApiKeyEdge = Edge<ApiKey>;
/**Paginator*/ export type ApiKeyPaginator = {
  /**The typename of the record*/ __typename: {
    Type: Scalars["string"];
    Args: [Scalars["number"]];
  };
  paginatorInfo: { Type: PaginatorInfo; Args: undefined };
  edges: { Type: ApiKeyEdge[]; Args: undefined };
};
export type FileEdge = Edge<File>;
/**Paginator*/ export type FilePaginator = {
  /**The typename of the record*/ __typename: {
    Type: Scalars["string"];
    Args: [Scalars["number"]];
  };
  paginatorInfo: { Type: PaginatorInfo; Args: undefined };
  edges: { Type: FileEdge[]; Args: undefined };
};
export type GameVersionEdge = Edge<GameVersion>;
/**Paginator*/ export type GameVersionPaginator = {
  /**The typename of the record*/ __typename: {
    Type: Scalars["string"];
    Args: [Scalars["number"]];
  };
  paginatorInfo: { Type: PaginatorInfo; Args: undefined };
  edges: { Type: GameVersionEdge[]; Args: undefined };
};
export type GameTypeEdge = Edge<GameType>;
/**Paginator*/ export type GameTypePaginator = {
  /**The typename of the record*/ __typename: {
    Type: Scalars["string"];
    Args: [Scalars["number"]];
  };
  paginatorInfo: { Type: PaginatorInfo; Args: undefined };
  edges: { Type: GameTypeEdge[]; Args: undefined };
};
export type HealthEdge = Edge<Health>;
/**Paginator*/ export type HealthPaginator = {
  /**The typename of the record*/ __typename: {
    Type: Scalars["string"];
    Args: [Scalars["number"]];
  };
  paginatorInfo: { Type: PaginatorInfo; Args: undefined };
  edges: { Type: HealthEdge[]; Args: undefined };
};
export type GameVersionGameTypeLinkEdge = Edge<GameVersionGameTypeLink>;
/**Paginator*/ export type GameVersionGameTypeLinkPaginator = {
  /**The typename of the record*/ __typename: {
    Type: Scalars["string"];
    Args: [Scalars["number"]];
  };
  paginatorInfo: { Type: PaginatorInfo; Args: undefined };
  edges: { Type: GameVersionGameTypeLinkEdge[]; Args: undefined };
};
export type UserUserFollowLinkEdge = Edge<UserUserFollowLink>;
/**Paginator*/ export type UserUserFollowLinkPaginator = {
  /**The typename of the record*/ __typename: {
    Type: Scalars["string"];
    Args: [Scalars["number"]];
  };
  paginatorInfo: { Type: PaginatorInfo; Args: undefined };
  edges: { Type: UserUserFollowLinkEdge[]; Args: undefined };
};
/**EnumPaginator*/ export type UserRoleEnumPaginator = {
  /**The typename of the record*/ __typename: {
    Type: Scalars["string"];
    Args: [Scalars["number"]];
  };
  values: { Type: Scalars["userRole"][]; Args: undefined };
};
/**User type*/ export type User = {
  /**The unique ID of the field*/ id: { Type: Scalars["id"]; Args: undefined };
  /**The typename of the record*/ __typename: {
    Type: Scalars["string"];
    Args: [Scalars["number"]];
  };
  name: { Type: Scalars["string"]; Args: undefined };
  firebaseUid: { Type: never; Args: undefined };
  email: { Type: Scalars["string"]; Args: undefined };
  password: { Type: never; Args: undefined };
  avatar: { Type: Scalars["string"] | null; Args: undefined };
  role: { Type: Scalars["userRole"]; Args: undefined };
  permissions: { Type: Scalars["userPermission"][] | null; Args: undefined };
  allPermissions: { Type: Scalars["userPermission"][]; Args: undefined };
  isPublic: { Type: Scalars["boolean"]; Args: undefined };
  currentUserFollowLink: { Type: UserUserFollowLink | null; Args: undefined };
  /**When the record was created*/ createdAt: {
    Type: Scalars["unixTimestamp"];
    Args: undefined;
  };
  /**When the record was last updated*/ updatedAt: {
    Type: Scalars["unixTimestamp"] | null;
    Args: undefined;
  };
  createdBy: { Type: User; Args: undefined };
};
/**Api key*/ export type ApiKey = {
  /**The unique ID of the field*/ id: { Type: Scalars["id"]; Args: undefined };
  /**The typename of the record*/ __typename: {
    Type: Scalars["string"];
    Args: [Scalars["number"]];
  };
  name: { Type: Scalars["string"]; Args: undefined };
  code: { Type: Scalars["string"]; Args: undefined };
  user: { Type: User; Args: undefined };
  permissions: { Type: Scalars["userPermission"][] | null; Args: undefined };
  /**When the record was created*/ createdAt: {
    Type: Scalars["unixTimestamp"];
    Args: undefined;
  };
  /**When the record was last updated*/ updatedAt: {
    Type: Scalars["unixTimestamp"] | null;
    Args: undefined;
  };
  createdBy: { Type: User; Args: undefined };
};
/**File*/ export type File = {
  /**The unique ID of the field*/ id: { Type: Scalars["id"]; Args: undefined };
  /**The typename of the record*/ __typename: {
    Type: Scalars["string"];
    Args: [Scalars["number"]];
  };
  name: { Type: Scalars["string"]; Args: undefined };
  size: { Type: Scalars["number"]; Args: undefined };
  location: { Type: Scalars["string"]; Args: undefined };
  contentType: { Type: Scalars["string"]; Args: undefined };
  signedUrl: { Type: Scalars["string"]; Args: undefined };
  parentKey: { Type: Scalars["string"] | null; Args: undefined };
  /**When the record was created*/ createdAt: {
    Type: Scalars["unixTimestamp"];
    Args: undefined;
  };
  /**When the record was last updated*/ updatedAt: {
    Type: Scalars["unixTimestamp"] | null;
    Args: undefined;
  };
  createdBy: { Type: User; Args: undefined };
};
/**GameVersion type*/ export type GameVersion = {
  /**The unique ID of the field*/ id: { Type: Scalars["id"]; Args: undefined };
  /**The typename of the record*/ __typename: {
    Type: Scalars["string"];
    Args: [Scalars["number"]];
  };
  name: { Type: Scalars["string"]; Args: undefined };
  avatar: { Type: Scalars["string"] | null; Args: undefined };
  description: { Type: Scalars["string"] | null; Args: undefined };
  generation: { Type: Scalars["number"]; Args: undefined };
  folderName: { Type: Scalars["string"]; Args: undefined };
  isLatest: { Type: Scalars["boolean"]; Args: undefined };
  /**When the record was created*/ createdAt: {
    Type: Scalars["unixTimestamp"];
    Args: undefined;
  };
  /**When the record was last updated*/ updatedAt: {
    Type: Scalars["unixTimestamp"] | null;
    Args: undefined;
  };
  createdBy: { Type: User; Args: undefined };
};
/**GameType type*/ export type GameType = {
  /**The unique ID of the field*/ id: { Type: Scalars["id"]; Args: undefined };
  /**The typename of the record*/ __typename: {
    Type: Scalars["string"];
    Args: [Scalars["number"]];
  };
  name: { Type: Scalars["string"]; Args: undefined };
  avatar: { Type: Scalars["string"] | null; Args: undefined };
  description: { Type: Scalars["string"] | null; Args: undefined };
  fileName: { Type: Scalars["string"]; Args: undefined };
  modelName: { Type: Scalars["string"]; Args: undefined };
  fieldsMap: { Type: Scalars["jsonString"]; Args: undefined };
  /**When the record was created*/ createdAt: {
    Type: Scalars["unixTimestamp"];
    Args: undefined;
  };
  /**When the record was last updated*/ updatedAt: {
    Type: Scalars["unixTimestamp"] | null;
    Args: undefined;
  };
  createdBy: { Type: User; Args: undefined };
};
/**Health type*/ export type Health = {
  /**The unique ID of the field*/ id: { Type: Scalars["id"]; Args: undefined };
  /**The typename of the record*/ __typename: {
    Type: Scalars["string"];
    Args: [Scalars["number"]];
  };
  gameId: { Type: Scalars["string"]; Args: undefined };
  gameVersion: { Type: GameVersion; Args: undefined };
  healthScale: { Type: Scalars["number"]; Args: undefined };
  data: { Type: Scalars["jsonString"]; Args: undefined };
  /**When the record was created*/ createdAt: {
    Type: Scalars["unixTimestamp"];
    Args: undefined;
  };
  /**When the record was last updated*/ updatedAt: {
    Type: Scalars["unixTimestamp"] | null;
    Args: undefined;
  };
  createdBy: { Type: User; Args: undefined };
};
/**Link type*/ export type GameVersionGameTypeLink = {
  /**The unique ID of the field*/ id: { Type: Scalars["id"]; Args: undefined };
  /**The typename of the record*/ __typename: {
    Type: Scalars["string"];
    Args: [Scalars["number"]];
  };
  gameVersion: { Type: GameVersion; Args: undefined };
  gameType: { Type: GameType; Args: undefined };
  /**When the record was created*/ createdAt: {
    Type: Scalars["unixTimestamp"];
    Args: undefined;
  };
  /**When the record was last updated*/ updatedAt: {
    Type: Scalars["unixTimestamp"] | null;
    Args: undefined;
  };
  createdBy: { Type: User; Args: undefined };
  fileNameOverride: { Type: Scalars["string"] | null; Args: undefined };
};
/**Link type*/ export type UserUserFollowLink = {
  /**The unique ID of the field*/ id: { Type: Scalars["id"]; Args: undefined };
  /**The typename of the record*/ __typename: {
    Type: Scalars["string"];
    Args: [Scalars["number"]];
  };
  user: { Type: User; Args: undefined };
  target: { Type: User; Args: undefined };
  /**When the record was created*/ createdAt: {
    Type: Scalars["unixTimestamp"];
    Args: undefined;
  };
  /**When the record was last updated*/ updatedAt: {
    Type: Scalars["unixTimestamp"] | null;
    Args: undefined;
  };
  createdBy: { Type: User; Args: undefined };
};
/**All Root resolvers*/ export type Root = {
  getUserRoleEnumPaginator: { Type: UserRoleEnumPaginator; Args: undefined };
  getCurrentUser: { Type: User; Args: undefined };
  syncCurrentUser: { Type: User; Args: InputTypes["syncCurrentUser"] };
  getUser: { Type: User; Args: InputTypes["user"] };
  getUserPaginator: { Type: UserPaginator; Args: InputTypes["userPaginator"] };
  deleteUser: { Type: User; Args: InputTypes["user"] };
  createUser: { Type: User; Args: InputTypes["createUser"] };
  updateUser: { Type: User; Args: InputTypes["updateUser"] };
  getApiKey: { Type: ApiKey; Args: InputTypes["apiKey"] };
  getApiKeyPaginator: {
    Type: ApiKeyPaginator;
    Args: InputTypes["apiKeyPaginator"];
  };
  deleteApiKey: { Type: ApiKey; Args: InputTypes["apiKey"] };
  createApiKey: { Type: ApiKey; Args: InputTypes["createApiKey"] };
  updateApiKey: { Type: ApiKey; Args: InputTypes["updateApiKey"] };
  getRepositoryReleases: {
    Type: Scalars["unknown"][];
    Args: InputTypes["getRepositoryReleases"];
  };
  getRepositoryLatestVersion: {
    Type: Scalars["unknown"] | null;
    Args: undefined;
  };
  getFile: { Type: File; Args: InputTypes["file"] };
  getFilePaginator: { Type: FilePaginator; Args: InputTypes["filePaginator"] };
  deleteFile: { Type: File; Args: InputTypes["file"] };
  createFile: { Type: File; Args: InputTypes["createFile"] };
  updateFile: { Type: File; Args: InputTypes["updateFile"] };
  executeAdminFunction: { Type: Scalars["unknown"]; Args: Scalars["string"] };
  getGameVersion: { Type: GameVersion; Args: InputTypes["gameVersion"] };
  getGameVersionPaginator: {
    Type: GameVersionPaginator;
    Args: InputTypes["gameVersionPaginator"];
  };
  deleteGameVersion: { Type: GameVersion; Args: InputTypes["gameVersion"] };
  createGameVersion: {
    Type: GameVersion;
    Args: InputTypes["createGameVersion"];
  };
  updateGameVersion: {
    Type: GameVersion;
    Args: InputTypes["updateGameVersion"];
  };
  syncGameTypeLinks: { Type: GameVersion; Args: InputTypes["gameVersion"] };
  syncGameTypes: { Type: GameVersion; Args: InputTypes["gameVersion"] };
  getGameType: { Type: GameType; Args: InputTypes["gameType"] };
  getGameTypePaginator: {
    Type: GameTypePaginator;
    Args: InputTypes["gameTypePaginator"];
  };
  deleteGameType: { Type: GameType; Args: InputTypes["gameType"] };
  createGameType: { Type: GameType; Args: InputTypes["createGameType"] };
  updateGameType: { Type: GameType; Args: InputTypes["updateGameType"] };
  getHealth: { Type: Health; Args: InputTypes["health"] };
  getHealthPaginator: {
    Type: HealthPaginator;
    Args: InputTypes["healthPaginator"];
  };
  deleteHealth: { Type: Health; Args: InputTypes["health"] };
  createHealth: { Type: Health; Args: InputTypes["createHealth"] };
  updateHealth: { Type: Health; Args: InputTypes["updateHealth"] };
  getGameVersionGameTypeLink: {
    Type: GameVersionGameTypeLink;
    Args: InputTypes["gameVersionGameTypeLink"];
  };
  getGameVersionGameTypeLinkPaginator: {
    Type: GameVersionGameTypeLinkPaginator;
    Args: InputTypes["gameVersionGameTypeLinkPaginator"];
  };
  deleteGameVersionGameTypeLink: {
    Type: GameVersionGameTypeLink;
    Args: InputTypes["gameVersionGameTypeLink"];
  };
  createGameVersionGameTypeLink: {
    Type: GameVersionGameTypeLink;
    Args: InputTypes["createGameVersionGameTypeLink"];
  };
  updateGameVersionGameTypeLink: {
    Type: GameVersionGameTypeLink;
    Args: InputTypes["updateGameVersionGameTypeLink"];
  };
  getUserUserFollowLink: {
    Type: UserUserFollowLink;
    Args: InputTypes["userUserFollowLink"];
  };
  getUserUserFollowLinkPaginator: {
    Type: UserUserFollowLinkPaginator;
    Args: InputTypes["userUserFollowLinkPaginator"];
  };
  deleteUserUserFollowLink: {
    Type: UserUserFollowLink;
    Args: InputTypes["userUserFollowLink"];
  };
  createUserUserFollowLink: {
    Type: UserUserFollowLink;
    Args: InputTypes["createUserUserFollowLink"];
  };
  updateUserUserFollowLink: {
    Type: UserUserFollowLink;
    Args: InputTypes["updateUserUserFollowLink"];
  };
};
