[**hypixel-api-reborn**](../../../README.md) • **Docs**

***

[hypixel-api-reborn](../../../modules.md) / [API/getSkyblockAuctions](../README.md) / default

# Class: default

## Extends

- [`default`](../../../Private/Endpoint/classes/default.md)

## Constructors

### new default()

> **new default**(`client`): [`default`](default.md)

#### Parameters

• **client**: [`default`](../../../Client/classes/default.md)

#### Returns

[`default`](default.md)

#### Overrides

[`default`](../../../Private/Endpoint/classes/default.md).[`constructor`](../../../Private/Endpoint/classes/default.md#constructors)

#### Defined in

[API/getSkyblockAuctions.ts:10](https://github.com/Kathund/REBORN-docs-TEST/blob/226e7f6a62bb6bca87ef0828ac84e9098d59f860/src/API/getSkyblockAuctions.ts#L10)

## Properties

### client

> `readonly` **client**: [`default`](../../../Client/classes/default.md)

#### Overrides

[`default`](../../../Private/Endpoint/classes/default.md).[`client`](../../../Private/Endpoint/classes/default.md#client)

#### Defined in

[API/getSkyblockAuctions.ts:8](https://github.com/Kathund/REBORN-docs-TEST/blob/226e7f6a62bb6bca87ef0828ac84e9098d59f860/src/API/getSkyblockAuctions.ts#L8)

***

### options

> **options**: [`AuctionRequestOptions`](../../API/interfaces/AuctionRequestOptions.md)

#### Defined in

[API/getSkyblockAuctions.ts:9](https://github.com/Kathund/REBORN-docs-TEST/blob/226e7f6a62bb6bca87ef0828ac84e9098d59f860/src/API/getSkyblockAuctions.ts#L9)

## Methods

### execute()

> **execute**(`query`, `options`?): `Promise`\<[`SkyblockAuctionsResult`](../../API/interfaces/SkyblockAuctionsResult.md)\>

#### Parameters

• **query**: `number` \| `"*"`

• **options?**: [`AuctionRequestOptions`](../../API/interfaces/AuctionRequestOptions.md)

#### Returns

`Promise`\<[`SkyblockAuctionsResult`](../../API/interfaces/SkyblockAuctionsResult.md)\>

#### Overrides

[`default`](../../../Private/Endpoint/classes/default.md).[`execute`](../../../Private/Endpoint/classes/default.md#execute)

#### Defined in

[API/getSkyblockAuctions.ts:15](https://github.com/Kathund/REBORN-docs-TEST/blob/226e7f6a62bb6bca87ef0828ac84e9098d59f860/src/API/getSkyblockAuctions.ts#L15)

***

### getAllPages()

> **getAllPages**(): `Promise`\<[`SkyblockAuctionsResult`](../../API/interfaces/SkyblockAuctionsResult.md)\>

#### Returns

`Promise`\<[`SkyblockAuctionsResult`](../../API/interfaces/SkyblockAuctionsResult.md)\>

#### Defined in

[API/getSkyblockAuctions.ts:24](https://github.com/Kathund/REBORN-docs-TEST/blob/226e7f6a62bb6bca87ef0828ac84e9098d59f860/src/API/getSkyblockAuctions.ts#L24)

***

### getPage()

> **getPage**(`page`): `Promise`\<[`SkyblockAuctionsResult`](../../API/interfaces/SkyblockAuctionsResult.md)\>

#### Parameters

• **page**: `number`

#### Returns

`Promise`\<[`SkyblockAuctionsResult`](../../API/interfaces/SkyblockAuctionsResult.md)\>

#### Defined in

[API/getSkyblockAuctions.ts:39](https://github.com/Kathund/REBORN-docs-TEST/blob/226e7f6a62bb6bca87ef0828ac84e9098d59f860/src/API/getSkyblockAuctions.ts#L39)
