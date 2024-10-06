import Client from '../../Client.js';
import Pit, { PitArmor } from './Pit.js';
import PitInventoryItem from './PitInventoryItem.js';
import Player from '../Player/Player.js';
import { expect, expectTypeOf, test } from 'vitest';

test('Pit', () => {
  const data = new Pit({ stats: 'meow' });
  expect(data).toBeInstanceOf(Pit);
  expect(data.prestige).toBeDefined();
  expectTypeOf(data.prestige).toEqualTypeOf<number>();
  expect(data.prestige).toBeGreaterThanOrEqual(0);
  expect(data.xp).toBeDefined();
  expectTypeOf(data.xp).toEqualTypeOf<number>();
  expect(data.xp).toBeGreaterThanOrEqual(0);
  expect(data.level).toBeDefined();
  expectTypeOf(data.level).toEqualTypeOf<number>();
  expect(data.level).toBeGreaterThanOrEqual(0);
  expect(data.kills).toBeDefined();
  expectTypeOf(data.kills).toEqualTypeOf<number>();
  expect(data.kills).toBeGreaterThanOrEqual(0);
  expect(data.deaths).toBeDefined();
  expectTypeOf(data.deaths).toEqualTypeOf<number>();
  expect(data.deaths).toBeGreaterThanOrEqual(0);
  expect(data.KDR).toBeDefined();
  expectTypeOf(data.KDR).toEqualTypeOf<number>();
  expect(data.KDR).toBeGreaterThanOrEqual(0);
  expect(data.assists).toBeDefined();
  expectTypeOf(data.assists).toEqualTypeOf<number>();
  expect(data.assists).toBeGreaterThanOrEqual(0);
  expect(data.maxKillStreak).toBeDefined();
  expectTypeOf(data.maxKillStreak).toEqualTypeOf<number>();
  expect(data.maxKillStreak).toBeGreaterThanOrEqual(0);
  expect(data.playtime).toBeDefined();
  expectTypeOf(data.playtime).toEqualTypeOf<number>();
  expect(data.playtime).toBeGreaterThanOrEqual(0);
  expect(data.joins).toBeDefined();
  expectTypeOf(data.joins).toEqualTypeOf<number>();
  expect(data.joins).toBeGreaterThanOrEqual(0);
  expect(data.damageReceived).toBeDefined();
  expectTypeOf(data.damageReceived).toEqualTypeOf<number>();
  expect(data.damageReceived).toBeGreaterThanOrEqual(0);
  expect(data.damageDealt).toBeDefined();
  expectTypeOf(data.damageDealt).toEqualTypeOf<number>();
  expect(data.damageDealt).toBeGreaterThanOrEqual(0);
  expect(data.damageRatio).toBeDefined();
  expectTypeOf(data.damageRatio).toEqualTypeOf<number>();
  expect(data.damageRatio).toBeGreaterThanOrEqual(0);
  expect(data.meleeDamageReceived).toBeDefined();
  expectTypeOf(data.meleeDamageReceived).toEqualTypeOf<number>();
  expect(data.meleeDamageReceived).toBeGreaterThanOrEqual(0);
  expect(data.meleeDamageDealt).toBeDefined();
  expectTypeOf(data.meleeDamageDealt).toEqualTypeOf<number>();
  expect(data.meleeDamageDealt).toBeGreaterThanOrEqual(0);
  expect(data.swordHits).toBeDefined();
  expectTypeOf(data.swordHits).toEqualTypeOf<number>();
  expect(data.swordHits).toBeGreaterThanOrEqual(0);
  expect(data.leftClicks).toBeDefined();
  expectTypeOf(data.leftClicks).toEqualTypeOf<number>();
  expect(data.leftClicks).toBeGreaterThanOrEqual(0);
  expect(data.meleeAccuracy).toBeDefined();
  expectTypeOf(data.meleeAccuracy).toEqualTypeOf<number>();
  expect(data.meleeAccuracy).toBeGreaterThanOrEqual(0);
  expect(data.meleeDamageRatio).toBeDefined();
  expectTypeOf(data.meleeDamageRatio).toEqualTypeOf<number>();
  expect(data.meleeDamageRatio).toBeGreaterThanOrEqual(0);
  expect(data.bowDamageReceived).toBeDefined();
  expectTypeOf(data.bowDamageReceived).toEqualTypeOf<number>();
  expect(data.bowDamageReceived).toBeGreaterThanOrEqual(0);
  expect(data.bowDamageDealt).toBeDefined();
  expectTypeOf(data.bowDamageDealt).toEqualTypeOf<number>();
  expect(data.bowDamageDealt).toBeGreaterThanOrEqual(0);
  expect(data.arrowsHit).toBeDefined();
  expectTypeOf(data.arrowsHit).toEqualTypeOf<number>();
  expect(data.arrowsHit).toBeGreaterThanOrEqual(0);
  expect(data.arrowsFired).toBeDefined();
  expectTypeOf(data.arrowsFired).toEqualTypeOf<number>();
  expect(data.arrowsFired).toBeGreaterThanOrEqual(0);
  expect(data.bowAccuracy).toBeDefined();
  expectTypeOf(data.bowAccuracy).toEqualTypeOf<number>();
  expect(data.bowAccuracy).toBeGreaterThanOrEqual(0);
  expect(data.bowDamageRatio).toBeDefined();
  expectTypeOf(data.bowDamageRatio).toEqualTypeOf<number>();
  expect(data.bowDamageRatio).toBeGreaterThanOrEqual(0);
  expect(data.goldenHeadsEaten).toBeDefined();
  expectTypeOf(data.goldenHeadsEaten).toEqualTypeOf<number>();
  expect(data.goldenHeadsEaten).toBeGreaterThanOrEqual(0);
});

test('Pit Inventory', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '', { cache: false, checkForUpdates: false, rateLimit: 'NONE' });
  let data = await client.getPlayer('3457688aa57c4d71ab9d22b04f9160db');
  data = data as Player;
  expect(data.stats.pit.getInventory).toBeDefined();
  expectTypeOf(data.stats.pit.getInventory).toEqualTypeOf<() => Promise<PitInventoryItem[]>>();
  expect(data.stats.pit.getInventory).toBeInstanceOf(Function);
  const pitInventory = await data.stats.pit.getInventory();
  expect(pitInventory).toBeDefined();
  pitInventory.forEach((item: PitInventoryItem) => {
    expect(item).toBeDefined();
    expect(item).toBeInstanceOf(PitInventoryItem);
    expectTypeOf(item).toEqualTypeOf<PitInventoryItem>();
    expect(item.itemId).toBeDefined();
    expectTypeOf(item.itemId).toEqualTypeOf<number>();
    expect(item.count).toBeDefined();
    expectTypeOf(item.count).toEqualTypeOf<number>();
    expect(item.name).toBeDefined();
    expectTypeOf(item.name).toEqualTypeOf<string | null>();
    expect(item.lore).toBeDefined();
    expectTypeOf(item.lore).toEqualTypeOf<string | null>();
    expect(item.loreArray).toBeDefined();
    expectTypeOf(item.loreArray).toEqualTypeOf<string[]>();
    expect(item.extraAttributes).toBeDefined();
    expectTypeOf(item.extraAttributes).toEqualTypeOf<object | null>();
  });
  expect(data.stats.pit.getEnterChest).toBeDefined();
  expectTypeOf(data.stats.pit.getEnterChest).toEqualTypeOf<() => Promise<PitInventoryItem[]>>();
  expect(data.stats.pit.getEnterChest).toBeInstanceOf(Function);
  const pitEnterChest = await data.stats.pit.getEnterChest();
  expect(pitEnterChest).toBeDefined();
  pitEnterChest.forEach((item: PitInventoryItem) => {
    expect(item).toBeDefined();
    expect(item).toBeInstanceOf(PitInventoryItem);
    expectTypeOf(item).toEqualTypeOf<PitInventoryItem>();
    expect(item.itemId).toBeDefined();
    expectTypeOf(item.itemId).toEqualTypeOf<number>();
    expect(item.count).toBeDefined();
    expectTypeOf(item.count).toEqualTypeOf<number>();
    expect(item.name).toBeDefined();
    expectTypeOf(item.name).toEqualTypeOf<string | null>();
    expect(item.lore).toBeDefined();
    expectTypeOf(item.lore).toEqualTypeOf<string | null>();
    expect(item.loreArray).toBeDefined();
    expectTypeOf(item.loreArray).toEqualTypeOf<string[]>();
    expect(item.extraAttributes).toBeDefined();
    expectTypeOf(item.extraAttributes).toEqualTypeOf<object | null>();
  });
  expect(data.stats.pit.getArmor).toBeDefined();
  expectTypeOf(data.stats.pit.getArmor).toEqualTypeOf<() => Promise<PitArmor>>();
  expect(data.stats.pit.getArmor).toBeInstanceOf(Function);
  const pitArmor = await data.stats.pit.getArmor();
  expect(pitArmor).toBeDefined();
  expectTypeOf(pitArmor).toEqualTypeOf<PitArmor>();
  expect(pitArmor.helmet).toBeDefined();
  expectTypeOf(pitArmor.helmet).toEqualTypeOf<PitInventoryItem | null>();
  if (null !== pitArmor.helmet) {
    expect(pitArmor.helmet).toBeDefined();
    expect(pitArmor.helmet).toBeInstanceOf(PitInventoryItem);
    expectTypeOf(pitArmor.helmet).toEqualTypeOf<PitInventoryItem>();
    expect(pitArmor.helmet.itemId).toBeDefined();
    expectTypeOf(pitArmor.helmet.itemId).toEqualTypeOf<number>();
    expect(pitArmor.helmet.count).toBeDefined();
    expectTypeOf(pitArmor.helmet.count).toEqualTypeOf<number>();
    expect(pitArmor.helmet.name).toBeDefined();
    expectTypeOf(pitArmor.helmet.name).toEqualTypeOf<string | null>();
    expect(pitArmor.helmet.lore).toBeDefined();
    expectTypeOf(pitArmor.helmet.lore).toEqualTypeOf<string | null>();
    expect(pitArmor.helmet.loreArray).toBeDefined();
    expectTypeOf(pitArmor.helmet.loreArray).toEqualTypeOf<string[]>();
    expect(pitArmor.helmet.extraAttributes).toBeDefined();
    expectTypeOf(pitArmor.helmet.extraAttributes).toEqualTypeOf<object | null>();
  }
  expect(pitArmor.chestplate).toBeDefined();
  expectTypeOf(pitArmor.chestplate).toEqualTypeOf<PitInventoryItem | null>();
  if (null !== pitArmor.chestplate) {
    expect(pitArmor.chestplate).toBeDefined();
    expect(pitArmor.chestplate).toBeInstanceOf(PitInventoryItem);
    expectTypeOf(pitArmor.chestplate).toEqualTypeOf<PitInventoryItem>();
    expect(pitArmor.chestplate.itemId).toBeDefined();
    expectTypeOf(pitArmor.chestplate.itemId).toEqualTypeOf<number>();
    expect(pitArmor.chestplate.count).toBeDefined();
    expectTypeOf(pitArmor.chestplate.count).toEqualTypeOf<number>();
    expect(pitArmor.chestplate.name).toBeDefined();
    expectTypeOf(pitArmor.chestplate.name).toEqualTypeOf<string | null>();
    expect(pitArmor.chestplate.lore).toBeDefined();
    expectTypeOf(pitArmor.chestplate.lore).toEqualTypeOf<string | null>();
    expect(pitArmor.chestplate.loreArray).toBeDefined();
    expectTypeOf(pitArmor.chestplate.loreArray).toEqualTypeOf<string[]>();
    expect(pitArmor.chestplate.extraAttributes).toBeDefined();
    expectTypeOf(pitArmor.chestplate.extraAttributes).toEqualTypeOf<object | null>();
  }
  expect(pitArmor.leggings).toBeDefined();
  expectTypeOf(pitArmor.leggings).toEqualTypeOf<PitInventoryItem | null>();
  if (null !== pitArmor.leggings) {
    expect(pitArmor.leggings).toBeDefined();
    expect(pitArmor.leggings).toBeInstanceOf(PitInventoryItem);
    expectTypeOf(pitArmor.leggings).toEqualTypeOf<PitInventoryItem>();
    expect(pitArmor.leggings.itemId).toBeDefined();
    expectTypeOf(pitArmor.leggings.itemId).toEqualTypeOf<number>();
    expect(pitArmor.leggings.count).toBeDefined();
    expectTypeOf(pitArmor.leggings.count).toEqualTypeOf<number>();
    expect(pitArmor.leggings.name).toBeDefined();
    expectTypeOf(pitArmor.leggings.name).toEqualTypeOf<string | null>();
    expect(pitArmor.leggings.lore).toBeDefined();
    expectTypeOf(pitArmor.leggings.lore).toEqualTypeOf<string | null>();
    expect(pitArmor.leggings.loreArray).toBeDefined();
    expectTypeOf(pitArmor.leggings.loreArray).toEqualTypeOf<string[]>();
    expect(pitArmor.leggings.extraAttributes).toBeDefined();
    expectTypeOf(pitArmor.leggings.extraAttributes).toEqualTypeOf<object | null>();
  }
  expect(pitArmor.boots).toBeDefined();
  expectTypeOf(pitArmor.boots).toEqualTypeOf<PitInventoryItem | null>();
  if (null !== pitArmor.boots) {
    expect(pitArmor.boots).toBeDefined();
    expect(pitArmor.boots).toBeInstanceOf(PitInventoryItem);
    expectTypeOf(pitArmor.boots).toEqualTypeOf<PitInventoryItem>();
    expect(pitArmor.boots.itemId).toBeDefined();
    expectTypeOf(pitArmor.boots.itemId).toEqualTypeOf<number>();
    expect(pitArmor.boots.count).toBeDefined();
    expectTypeOf(pitArmor.boots.count).toEqualTypeOf<number>();
    expect(pitArmor.boots.name).toBeDefined();
    expectTypeOf(pitArmor.boots.name).toEqualTypeOf<string | null>();
    expect(pitArmor.boots.lore).toBeDefined();
    expectTypeOf(pitArmor.boots.lore).toEqualTypeOf<string | null>();
    expect(pitArmor.boots.loreArray).toBeDefined();
    expectTypeOf(pitArmor.boots.loreArray).toEqualTypeOf<string[]>();
    expect(pitArmor.boots.extraAttributes).toBeDefined();
    expectTypeOf(pitArmor.boots.extraAttributes).toEqualTypeOf<object | null>();
  }
});
