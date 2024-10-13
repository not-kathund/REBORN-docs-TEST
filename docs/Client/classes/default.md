[**hypixel-api-reborn**](../../README.md) • **Docs**

***

[hypixel-api-reborn](../../modules.md) / [Client](../README.md) / default

# Class: default

## Constructors

### new default()

> **new default**(`key`, `options`?): [`default`](default.md)

#### Parameters

• **key**: `string`

• **options?**: [`ClientOptions`](../interfaces/ClientOptions.md)

#### Returns

[`default`](default.md)

#### Defined in

[Client.ts:61](https://github.com/Kathund/REBORN-docs-TEST/blob/226e7f6a62bb6bca87ef0828ac84e9098d59f860/src/Client.ts#L61)

## Properties

### cacheHandler

> **cacheHandler**: [`default`](../../Private/CacheHandler/classes/default.md)

#### Defined in

[Client.ts:55](https://github.com/Kathund/REBORN-docs-TEST/blob/226e7f6a62bb6bca87ef0828ac84e9098d59f860/src/Client.ts#L55)

***

### errors

> **errors**: [`default`](../../Errors/classes/default.md)

#### Defined in

[Client.ts:57](https://github.com/Kathund/REBORN-docs-TEST/blob/226e7f6a62bb6bca87ef0828ac84e9098d59f860/src/Client.ts#L57)

***

### interval

> **interval**: `Timeout`

#### Defined in

[Client.ts:60](https://github.com/Kathund/REBORN-docs-TEST/blob/226e7f6a62bb6bca87ef0828ac84e9098d59f860/src/Client.ts#L60)

***

### key

> `readonly` **key**: `string`

#### Defined in

[Client.ts:59](https://github.com/Kathund/REBORN-docs-TEST/blob/226e7f6a62bb6bca87ef0828ac84e9098d59f860/src/Client.ts#L59)

***

### options

> **options**: [`ClientOptions`](../interfaces/ClientOptions.md)

#### Defined in

[Client.ts:53](https://github.com/Kathund/REBORN-docs-TEST/blob/226e7f6a62bb6bca87ef0828ac84e9098d59f860/src/Client.ts#L53)

***

### rateLimit

> **rateLimit**: [`default`](../../Private/RateLimit/classes/default.md)

#### Defined in

[Client.ts:58](https://github.com/Kathund/REBORN-docs-TEST/blob/226e7f6a62bb6bca87ef0828ac84e9098d59f860/src/Client.ts#L58)

***

### requestHandler

> **requestHandler**: [`default`](../../Private/RequestHandler/classes/default.md)

#### Defined in

[Client.ts:54](https://github.com/Kathund/REBORN-docs-TEST/blob/226e7f6a62bb6bca87ef0828ac84e9098d59f860/src/Client.ts#L54)

***

### updater

> **updater**: [`default`](../../Private/Updater/classes/default.md)

#### Defined in

[Client.ts:56](https://github.com/Kathund/REBORN-docs-TEST/blob/226e7f6a62bb6bca87ef0828ac84e9098d59f860/src/Client.ts#L56)

## Methods

### destroy()

> **destroy**(): `void`

#### Returns

`void`

#### Defined in

[Client.ts:100](https://github.com/Kathund/REBORN-docs-TEST/blob/226e7f6a62bb6bca87ef0828ac84e9098d59f860/src/Client.ts#L100)

***

### getAchievements()

> **getAchievements**(`options`?): `Promise`\<[`default`](../../structures/Static/Achievements/Achievements/classes/default.md) \| [`RequestData`](../../Private/RequestHandler/classes/RequestData.md)\>

#### Parameters

• **options?**: [`RequestOptions`](../../Private/RequestHandler/interfaces/RequestOptions.md)

#### Returns

`Promise`\<[`default`](../../structures/Static/Achievements/Achievements/classes/default.md) \| [`RequestData`](../../Private/RequestHandler/classes/RequestData.md)\>

#### Defined in

[Client.ts:121](https://github.com/Kathund/REBORN-docs-TEST/blob/226e7f6a62bb6bca87ef0828ac84e9098d59f860/src/Client.ts#L121)

***

### getActiveHouses()

> **getActiveHouses**(`options`?): `Promise`\<[`RequestData`](../../Private/RequestHandler/classes/RequestData.md) \| [`default`](../../structures/House/classes/default.md)[]\>

#### Parameters

• **options?**: [`RequestOptions`](../../Private/RequestHandler/interfaces/RequestOptions.md)

#### Returns

`Promise`\<[`RequestData`](../../Private/RequestHandler/classes/RequestData.md) \| [`default`](../../structures/House/classes/default.md)[]\>

#### Defined in

[Client.ts:125](https://github.com/Kathund/REBORN-docs-TEST/blob/226e7f6a62bb6bca87ef0828ac84e9098d59f860/src/Client.ts#L125)

***

### getBoosters()

> **getBoosters**(`options`?): `Promise`\<[`RequestData`](../../Private/RequestHandler/classes/RequestData.md) \| [`default`](../../structures/Boosters/Booster/classes/default.md)[]\>

#### Parameters

• **options?**: [`RequestOptions`](../../Private/RequestHandler/interfaces/RequestOptions.md)

#### Returns

`Promise`\<[`RequestData`](../../Private/RequestHandler/classes/RequestData.md) \| [`default`](../../structures/Boosters/Booster/classes/default.md)[]\>

#### Defined in

[Client.ts:129](https://github.com/Kathund/REBORN-docs-TEST/blob/226e7f6a62bb6bca87ef0828ac84e9098d59f860/src/Client.ts#L129)

***

### getChallenges()

> **getChallenges**(`options`?): `Promise`\<[`RequestData`](../../Private/RequestHandler/classes/RequestData.md) \| [`default`](../../structures/Static/Challenges/classes/default.md)\>

#### Parameters

• **options?**: [`RequestOptions`](../../Private/RequestHandler/interfaces/RequestOptions.md)

#### Returns

`Promise`\<[`RequestData`](../../Private/RequestHandler/classes/RequestData.md) \| [`default`](../../structures/Static/Challenges/classes/default.md)\>

#### Defined in

[Client.ts:133](https://github.com/Kathund/REBORN-docs-TEST/blob/226e7f6a62bb6bca87ef0828ac84e9098d59f860/src/Client.ts#L133)

***

### getGameCounts()

> **getGameCounts**(`options`?): `Promise`\<[`RequestData`](../../Private/RequestHandler/classes/RequestData.md) \| [`default`](../../structures/GameCounts/classes/default.md)\>

#### Parameters

• **options?**: [`RequestOptions`](../../Private/RequestHandler/interfaces/RequestOptions.md)

#### Returns

`Promise`\<[`RequestData`](../../Private/RequestHandler/classes/RequestData.md) \| [`default`](../../structures/GameCounts/classes/default.md)\>

#### Defined in

[Client.ts:137](https://github.com/Kathund/REBORN-docs-TEST/blob/226e7f6a62bb6bca87ef0828ac84e9098d59f860/src/Client.ts#L137)

***

### getGuild()

> **getGuild**(`searchParameter`, `query`, `options`?): `Promise`\<`null` \| [`RequestData`](../../Private/RequestHandler/classes/RequestData.md) \| [`default`](../../structures/Guild/Guild/classes/default.md)\>

#### Parameters

• **searchParameter**: [`GuildFetchOptions`](../../API/API/type-aliases/GuildFetchOptions.md)

• **query**: `string`

• **options?**: [`RequestOptions`](../../Private/RequestHandler/interfaces/RequestOptions.md)

#### Returns

`Promise`\<`null` \| [`RequestData`](../../Private/RequestHandler/classes/RequestData.md) \| [`default`](../../structures/Guild/Guild/classes/default.md)\>

#### Defined in

[Client.ts:141](https://github.com/Kathund/REBORN-docs-TEST/blob/226e7f6a62bb6bca87ef0828ac84e9098d59f860/src/Client.ts#L141)

***

### getGuildAchievements()

> **getGuildAchievements**(`options`?): `Promise`\<[`RequestData`](../../Private/RequestHandler/classes/RequestData.md) \| [`default`](../../structures/Static/Achievements/Guild/classes/default.md)\>

#### Parameters

• **options?**: [`RequestOptions`](../../Private/RequestHandler/interfaces/RequestOptions.md)

#### Returns

`Promise`\<[`RequestData`](../../Private/RequestHandler/classes/RequestData.md) \| [`default`](../../structures/Static/Achievements/Guild/classes/default.md)\>

#### Defined in

[Client.ts:149](https://github.com/Kathund/REBORN-docs-TEST/blob/226e7f6a62bb6bca87ef0828ac84e9098d59f860/src/Client.ts#L149)

***

### getHouse()

> **getHouse**(`query`, `options`?): `Promise`\<[`RequestData`](../../Private/RequestHandler/classes/RequestData.md) \| [`default`](../../structures/House/classes/default.md)\>

#### Parameters

• **query**: `string`

• **options?**: [`RequestOptions`](../../Private/RequestHandler/interfaces/RequestOptions.md)

#### Returns

`Promise`\<[`RequestData`](../../Private/RequestHandler/classes/RequestData.md) \| [`default`](../../structures/House/classes/default.md)\>

#### Defined in

[Client.ts:153](https://github.com/Kathund/REBORN-docs-TEST/blob/226e7f6a62bb6bca87ef0828ac84e9098d59f860/src/Client.ts#L153)

***

### getLeaderboards()

> **getLeaderboards**(`options`?): `Promise`\<[`RequestData`](../../Private/RequestHandler/classes/RequestData.md) \| `Record`\<`string`, [`default`](../../structures/Leaderboard/classes/default.md)[]\>\>

#### Parameters

• **options?**: [`RequestOptions`](../../Private/RequestHandler/interfaces/RequestOptions.md)

#### Returns

`Promise`\<[`RequestData`](../../Private/RequestHandler/classes/RequestData.md) \| `Record`\<`string`, [`default`](../../structures/Leaderboard/classes/default.md)[]\>\>

#### Defined in

[Client.ts:157](https://github.com/Kathund/REBORN-docs-TEST/blob/226e7f6a62bb6bca87ef0828ac84e9098d59f860/src/Client.ts#L157)

***

### getPlayer()

> **getPlayer**(`query`, `options`?): `Promise`\<[`RequestData`](../../Private/RequestHandler/classes/RequestData.md) \| [`default`](../../structures/Player/Player/classes/default.md)\>

#### Parameters

• **query**: `string`

• **options?**: [`PlayerRequestOptions`](../../API/API/interfaces/PlayerRequestOptions.md)

#### Returns

`Promise`\<[`RequestData`](../../Private/RequestHandler/classes/RequestData.md) \| [`default`](../../structures/Player/Player/classes/default.md)\>

#### Defined in

[Client.ts:161](https://github.com/Kathund/REBORN-docs-TEST/blob/226e7f6a62bb6bca87ef0828ac84e9098d59f860/src/Client.ts#L161)

***

### getPlayerHouses()

> **getPlayerHouses**(`query`, `options`?): `Promise`\<[`RequestData`](../../Private/RequestHandler/classes/RequestData.md) \| [`default`](../../structures/House/classes/default.md)[]\>

#### Parameters

• **query**: `string`

• **options?**: [`RequestOptions`](../../Private/RequestHandler/interfaces/RequestOptions.md)

#### Returns

`Promise`\<[`RequestData`](../../Private/RequestHandler/classes/RequestData.md) \| [`default`](../../structures/House/classes/default.md)[]\>

#### Defined in

[Client.ts:165](https://github.com/Kathund/REBORN-docs-TEST/blob/226e7f6a62bb6bca87ef0828ac84e9098d59f860/src/Client.ts#L165)

***

### getQuests()

> **getQuests**(`options`?): `Promise`\<[`RequestData`](../../Private/RequestHandler/classes/RequestData.md) \| [`default`](../../structures/Static/Quests/classes/default.md)\>

#### Parameters

• **options?**: [`RequestOptions`](../../Private/RequestHandler/interfaces/RequestOptions.md)

#### Returns

`Promise`\<[`RequestData`](../../Private/RequestHandler/classes/RequestData.md) \| [`default`](../../structures/Static/Quests/classes/default.md)\>

#### Defined in

[Client.ts:169](https://github.com/Kathund/REBORN-docs-TEST/blob/226e7f6a62bb6bca87ef0828ac84e9098d59f860/src/Client.ts#L169)

***

### getRecentGames()

> **getRecentGames**(`query`, `options`?): `Promise`\<[`RequestData`](../../Private/RequestHandler/classes/RequestData.md) \| [`default`](../../structures/RecentGame/classes/default.md)[]\>

#### Parameters

• **query**: `string`

• **options?**: [`RequestOptions`](../../Private/RequestHandler/interfaces/RequestOptions.md)

#### Returns

`Promise`\<[`RequestData`](../../Private/RequestHandler/classes/RequestData.md) \| [`default`](../../structures/RecentGame/classes/default.md)[]\>

#### Defined in

[Client.ts:173](https://github.com/Kathund/REBORN-docs-TEST/blob/226e7f6a62bb6bca87ef0828ac84e9098d59f860/src/Client.ts#L173)

***

### getSkyblockAuction()

> **getSkyblockAuction**(`type`, `query`, `options`?): `Promise`\<[`RequestData`](../../Private/RequestHandler/classes/RequestData.md) \| [`default`](../../structures/SkyBlock/Auctions/Auction/classes/default.md)[]\>

#### Parameters

• **type**: [`AuctionFetchOptions`](../../API/API/type-aliases/AuctionFetchOptions.md)

• **query**: `string`

• **options?**: [`AuctionRequestOptions`](../../API/API/interfaces/AuctionRequestOptions.md)

#### Returns

`Promise`\<[`RequestData`](../../Private/RequestHandler/classes/RequestData.md) \| [`default`](../../structures/SkyBlock/Auctions/Auction/classes/default.md)[]\>

#### Defined in

[Client.ts:177](https://github.com/Kathund/REBORN-docs-TEST/blob/226e7f6a62bb6bca87ef0828ac84e9098d59f860/src/Client.ts#L177)

***

### getSkyblockAuctions()

> **getSkyblockAuctions**(`query`, `options`?): `Promise`\<[`SkyblockAuctionsResult`](../../API/API/interfaces/SkyblockAuctionsResult.md)\>

#### Parameters

• **query**: `number` \| `"*"`

• **options?**: [`AuctionRequestOptions`](../../API/API/interfaces/AuctionRequestOptions.md)

#### Returns

`Promise`\<[`SkyblockAuctionsResult`](../../API/API/interfaces/SkyblockAuctionsResult.md)\>

#### Defined in

[Client.ts:185](https://github.com/Kathund/REBORN-docs-TEST/blob/226e7f6a62bb6bca87ef0828ac84e9098d59f860/src/Client.ts#L185)

***

### getSkyblockAuctionsByPlayer()

> **getSkyblockAuctionsByPlayer**(`query`, `options`?): `Promise`\<[`RequestData`](../../Private/RequestHandler/classes/RequestData.md) \| [`default`](../../structures/SkyBlock/Auctions/Auction/classes/default.md)[]\>

#### Parameters

• **query**: `string`

• **options?**: [`AuctionRequestOptions`](../../API/API/interfaces/AuctionRequestOptions.md)

#### Returns

`Promise`\<[`RequestData`](../../Private/RequestHandler/classes/RequestData.md) \| [`default`](../../structures/SkyBlock/Auctions/Auction/classes/default.md)[]\>

#### Defined in

[Client.ts:189](https://github.com/Kathund/REBORN-docs-TEST/blob/226e7f6a62bb6bca87ef0828ac84e9098d59f860/src/Client.ts#L189)

***

### getSkyblockBazaar()

> **getSkyblockBazaar**(`options`?): `Promise`\<[`RequestData`](../../Private/RequestHandler/classes/RequestData.md) \| [`default`](../../structures/SkyBlock/Bazaar/Product/classes/default.md)[]\>

#### Parameters

• **options?**: [`RequestOptions`](../../Private/RequestHandler/interfaces/RequestOptions.md)

#### Returns

`Promise`\<[`RequestData`](../../Private/RequestHandler/classes/RequestData.md) \| [`default`](../../structures/SkyBlock/Bazaar/Product/classes/default.md)[]\>

#### Defined in

[Client.ts:193](https://github.com/Kathund/REBORN-docs-TEST/blob/226e7f6a62bb6bca87ef0828ac84e9098d59f860/src/Client.ts#L193)

***

### getSkyblockBingo()

> **getSkyblockBingo**(`options`?): `Promise`\<[`RequestData`](../../Private/RequestHandler/classes/RequestData.md) \| [`default`](../../structures/SkyBlock/Static/BingoData/classes/default.md)\>

#### Parameters

• **options?**: [`RequestOptions`](../../Private/RequestHandler/interfaces/RequestOptions.md)

#### Returns

`Promise`\<[`RequestData`](../../Private/RequestHandler/classes/RequestData.md) \| [`default`](../../structures/SkyBlock/Static/BingoData/classes/default.md)\>

#### Defined in

[Client.ts:197](https://github.com/Kathund/REBORN-docs-TEST/blob/226e7f6a62bb6bca87ef0828ac84e9098d59f860/src/Client.ts#L197)

***

### getSkyblockFireSales()

> **getSkyblockFireSales**(`options`?): `Promise`\<[`RequestData`](../../Private/RequestHandler/classes/RequestData.md) \| [`default`](../../structures/SkyBlock/Static/FireSale/classes/default.md)[]\>

#### Parameters

• **options?**: [`RequestOptions`](../../Private/RequestHandler/interfaces/RequestOptions.md)

#### Returns

`Promise`\<[`RequestData`](../../Private/RequestHandler/classes/RequestData.md) \| [`default`](../../structures/SkyBlock/Static/FireSale/classes/default.md)[]\>

#### Defined in

[Client.ts:201](https://github.com/Kathund/REBORN-docs-TEST/blob/226e7f6a62bb6bca87ef0828ac84e9098d59f860/src/Client.ts#L201)

***

### getSkyblockGarden()

> **getSkyblockGarden**(`profileId`, `options`?): `Promise`\<[`RequestData`](../../Private/RequestHandler/classes/RequestData.md) \| [`default`](../../structures/SkyBlock/SkyblockGarden/classes/default.md)\>

#### Parameters

• **profileId**: `string`

• **options?**: [`RequestOptions`](../../Private/RequestHandler/interfaces/RequestOptions.md)

#### Returns

`Promise`\<[`RequestData`](../../Private/RequestHandler/classes/RequestData.md) \| [`default`](../../structures/SkyBlock/SkyblockGarden/classes/default.md)\>

#### Defined in

[Client.ts:205](https://github.com/Kathund/REBORN-docs-TEST/blob/226e7f6a62bb6bca87ef0828ac84e9098d59f860/src/Client.ts#L205)

***

### getSkyblockGovernment()

> **getSkyblockGovernment**(`options`?): `Promise`\<[`RequestData`](../../Private/RequestHandler/classes/RequestData.md) \| [`default`](../../structures/SkyBlock/Static/Government/classes/default.md)\>

#### Parameters

• **options?**: [`RequestOptions`](../../Private/RequestHandler/interfaces/RequestOptions.md)

#### Returns

`Promise`\<[`RequestData`](../../Private/RequestHandler/classes/RequestData.md) \| [`default`](../../structures/SkyBlock/Static/Government/classes/default.md)\>

#### Defined in

[Client.ts:209](https://github.com/Kathund/REBORN-docs-TEST/blob/226e7f6a62bb6bca87ef0828ac84e9098d59f860/src/Client.ts#L209)

***

### getSkyblockMember()

> **getSkyblockMember**(`query`, `options`?): `Promise`\<[`RequestData`](../../Private/RequestHandler/classes/RequestData.md) \| `Map`\<`string`, [`default`](../../structures/SkyBlock/SkyblockMember/classes/default.md)\>\>

#### Parameters

• **query**: `string`

• **options?**: [`SkyblockRequestOptions`](../../API/API/interfaces/SkyblockRequestOptions.md)

#### Returns

`Promise`\<[`RequestData`](../../Private/RequestHandler/classes/RequestData.md) \| `Map`\<`string`, [`default`](../../structures/SkyBlock/SkyblockMember/classes/default.md)\>\>

#### Defined in

[Client.ts:213](https://github.com/Kathund/REBORN-docs-TEST/blob/226e7f6a62bb6bca87ef0828ac84e9098d59f860/src/Client.ts#L213)

***

### getSkyblockMuseum()

> **getSkyblockMuseum**(`query`, `profileId`, `options`?): `Promise`\<[`RequestData`](../../Private/RequestHandler/classes/RequestData.md) \| [`default`](../../structures/SkyBlock/SkyblockMuseum/classes/default.md)\>

#### Parameters

• **query**: `string`

• **profileId**: `string`

• **options?**: [`RequestOptions`](../../Private/RequestHandler/interfaces/RequestOptions.md)

#### Returns

`Promise`\<[`RequestData`](../../Private/RequestHandler/classes/RequestData.md) \| [`default`](../../structures/SkyBlock/SkyblockMuseum/classes/default.md)\>

#### Defined in

[Client.ts:220](https://github.com/Kathund/REBORN-docs-TEST/blob/226e7f6a62bb6bca87ef0828ac84e9098d59f860/src/Client.ts#L220)

***

### getSkyblockNews()

> **getSkyblockNews**(`options`?): `Promise`\<[`RequestData`](../../Private/RequestHandler/classes/RequestData.md) \| [`default`](../../structures/SkyBlock/News/SkyblockNews/classes/default.md)[]\>

#### Parameters

• **options?**: [`RequestOptions`](../../Private/RequestHandler/interfaces/RequestOptions.md)

#### Returns

`Promise`\<[`RequestData`](../../Private/RequestHandler/classes/RequestData.md) \| [`default`](../../structures/SkyBlock/News/SkyblockNews/classes/default.md)[]\>

#### Defined in

[Client.ts:228](https://github.com/Kathund/REBORN-docs-TEST/blob/226e7f6a62bb6bca87ef0828ac84e9098d59f860/src/Client.ts#L228)

***

### getSkyblockProfiles()

> **getSkyblockProfiles**(`query`, `options`?): `Promise`\<[`RequestData`](../../Private/RequestHandler/classes/RequestData.md) \| [`default`](../../structures/SkyBlock/SkyblockProfile/classes/default.md)[]\>

#### Parameters

• **query**: `string`

• **options?**: [`SkyblockRequestOptions`](../../API/API/interfaces/SkyblockRequestOptions.md)

#### Returns

`Promise`\<[`RequestData`](../../Private/RequestHandler/classes/RequestData.md) \| [`default`](../../structures/SkyBlock/SkyblockProfile/classes/default.md)[]\>

#### Defined in

[Client.ts:232](https://github.com/Kathund/REBORN-docs-TEST/blob/226e7f6a62bb6bca87ef0828ac84e9098d59f860/src/Client.ts#L232)

***

### getStatus()

> **getStatus**(`query`, `options`?): `Promise`\<[`RequestData`](../../Private/RequestHandler/classes/RequestData.md) \| [`default`](../../structures/Status/classes/default.md)\>

#### Parameters

• **query**: `string`

• **options?**: [`RequestOptions`](../../Private/RequestHandler/interfaces/RequestOptions.md)

#### Returns

`Promise`\<[`RequestData`](../../Private/RequestHandler/classes/RequestData.md) \| [`default`](../../structures/Status/classes/default.md)\>

#### Defined in

[Client.ts:239](https://github.com/Kathund/REBORN-docs-TEST/blob/226e7f6a62bb6bca87ef0828ac84e9098d59f860/src/Client.ts#L239)

***

### getWatchdogStats()

> **getWatchdogStats**(`options`?): `Promise`\<[`RequestData`](../../Private/RequestHandler/classes/RequestData.md) \| [`default`](../../structures/WatchdogStats/classes/default.md)\>

#### Parameters

• **options?**: [`RequestOptions`](../../Private/RequestHandler/interfaces/RequestOptions.md)

#### Returns

`Promise`\<[`RequestData`](../../Private/RequestHandler/classes/RequestData.md) \| [`default`](../../structures/WatchdogStats/classes/default.md)\>

#### Defined in

[Client.ts:243](https://github.com/Kathund/REBORN-docs-TEST/blob/226e7f6a62bb6bca87ef0828ac84e9098d59f860/src/Client.ts#L243)
