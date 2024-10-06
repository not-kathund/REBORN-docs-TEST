import ArenaBrawl, { ArenaBrawlMode } from './ArenaBrawl.js';
import { expect, expectTypeOf, test } from 'vitest';

test('ArenaBrawl', () => {
  const data = new ArenaBrawl({ stats: 'meow' });
  expect(data).toBeInstanceOf(ArenaBrawl);
  expectTypeOf(data).toEqualTypeOf<ArenaBrawl>();
  expect(data.coins).toBeDefined();
  expect(data.coins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.coins).toEqualTypeOf<number>();
  expect(data.coinsSpent).toBeDefined();
  expect(data.coinsSpent).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.coinsSpent).toEqualTypeOf<number>();
  expect(data.wins).toBeDefined();
  expect(data.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.wins).toEqualTypeOf<number>();
  expect(data.keys).toBeDefined();
  expect(data.keys).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.keys).toEqualTypeOf<number>();
  expect(data.chests).toBeDefined();
  expect(data.chests).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.chests).toEqualTypeOf<number>();
  expect(data.rune).toBeDefined();
  expectTypeOf(data.rune).toEqualTypeOf<string>();
  expect(data['1v1']).toBeDefined();
  expectTypeOf(data['1v1']).toEqualTypeOf<ArenaBrawlMode>();
  expect(data['1v1'].damage).toBeDefined();
  expect(data['1v1'].damage).toBeGreaterThanOrEqual(0);
  expectTypeOf(data['1v1'].damage).toEqualTypeOf<number>();
  expect(data['1v1'].kills).toBeDefined();
  expect(data['1v1'].kills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data['1v1'].kills).toEqualTypeOf<number>();
  expect(data['1v1'].deaths).toBeDefined();
  expect(data['1v1'].deaths).toBeGreaterThanOrEqual(0);
  expectTypeOf(data['1v1'].deaths).toEqualTypeOf<number>();
  expect(data['1v1'].KDR).toBeDefined();
  expect(data['1v1'].KDR).toBeGreaterThanOrEqual(0);
  expectTypeOf(data['1v1'].KDR).toEqualTypeOf<number>();
  expect(data['1v1'].healed).toBeDefined();
  expect(data['1v1'].healed).toBeGreaterThanOrEqual(0);
  expectTypeOf(data['1v1'].healed).toEqualTypeOf<number>();
  expect(data['1v1'].wins).toBeDefined();
  expect(data['1v1'].wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data['1v1'].wins).toEqualTypeOf<number>();
  expect(data['1v1'].losses).toBeDefined();
  expect(data['1v1'].losses).toBeGreaterThanOrEqual(0);
  expectTypeOf(data['1v1'].losses).toEqualTypeOf<number>();
  expect(data['1v1'].WLR).toBeDefined();
  expect(data['1v1'].WLR).toBeGreaterThanOrEqual(0);
  expectTypeOf(data['1v1'].WLR).toEqualTypeOf<number>();
  expect(data['1v1'].games).toBeDefined();
  expect(data['1v1'].games).toBeGreaterThanOrEqual(0);
  expectTypeOf(data['1v1'].games).toEqualTypeOf<number>();
  expect(data['1v1'].winstreak).toBeDefined();
  expect(data['1v1'].winstreak).toBeGreaterThanOrEqual(0);
  expectTypeOf(data['1v1'].winstreak).toEqualTypeOf<number>();
  expect(data['2v2']).toBeDefined();
  expectTypeOf(data['2v2']).toEqualTypeOf<ArenaBrawlMode>();
  expect(data['2v2'].damage).toBeDefined();
  expect(data['2v2'].damage).toBeGreaterThanOrEqual(0);
  expectTypeOf(data['2v2'].damage).toEqualTypeOf<number>();
  expect(data['2v2'].kills).toBeDefined();
  expect(data['2v2'].kills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data['2v2'].kills).toEqualTypeOf<number>();
  expect(data['2v2'].deaths).toBeDefined();
  expect(data['2v2'].deaths).toBeGreaterThanOrEqual(0);
  expectTypeOf(data['2v2'].deaths).toEqualTypeOf<number>();
  expect(data['2v2'].KDR).toBeDefined();
  expect(data['2v2'].KDR).toBeGreaterThanOrEqual(0);
  expectTypeOf(data['2v2'].KDR).toEqualTypeOf<number>();
  expect(data['2v2'].healed).toBeDefined();
  expect(data['2v2'].healed).toBeGreaterThanOrEqual(0);
  expectTypeOf(data['2v2'].healed).toEqualTypeOf<number>();
  expect(data['2v2'].wins).toBeDefined();
  expect(data['2v2'].wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data['2v2'].wins).toEqualTypeOf<number>();
  expect(data['2v2'].losses).toBeDefined();
  expect(data['2v2'].losses).toBeGreaterThanOrEqual(0);
  expectTypeOf(data['2v2'].losses).toEqualTypeOf<number>();
  expect(data['2v2'].WLR).toBeDefined();
  expect(data['2v2'].WLR).toBeGreaterThanOrEqual(0);
  expectTypeOf(data['2v2'].WLR).toEqualTypeOf<number>();
  expect(data['2v2'].games).toBeDefined();
  expect(data['2v2'].games).toBeGreaterThanOrEqual(0);
  expectTypeOf(data['2v2'].games).toEqualTypeOf<number>();
  expect(data['2v2'].winstreak).toBeDefined();
  expect(data['2v2'].winstreak).toBeGreaterThanOrEqual(0);
  expectTypeOf(data['2v2'].winstreak).toEqualTypeOf<number>();
  expect(data['4v4']).toBeDefined();
  expectTypeOf(data['4v4']).toEqualTypeOf<ArenaBrawlMode>();
  expect(data['4v4'].damage).toBeDefined();
  expect(data['4v4'].damage).toBeGreaterThanOrEqual(0);
  expectTypeOf(data['4v4'].damage).toEqualTypeOf<number>();
  expect(data['4v4'].kills).toBeDefined();
  expect(data['4v4'].kills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data['4v4'].kills).toEqualTypeOf<number>();
  expect(data['4v4'].deaths).toBeDefined();
  expect(data['4v4'].deaths).toBeGreaterThanOrEqual(0);
  expectTypeOf(data['4v4'].deaths).toEqualTypeOf<number>();
  expect(data['4v4'].KDR).toBeDefined();
  expect(data['4v4'].KDR).toBeGreaterThanOrEqual(0);
  expectTypeOf(data['4v4'].KDR).toEqualTypeOf<number>();
  expect(data['4v4'].healed).toBeDefined();
  expect(data['4v4'].healed).toBeGreaterThanOrEqual(0);
  expectTypeOf(data['4v4'].healed).toEqualTypeOf<number>();
  expect(data['4v4'].wins).toBeDefined();
  expect(data['4v4'].wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data['4v4'].wins).toEqualTypeOf<number>();
  expect(data['4v4'].losses).toBeDefined();
  expect(data['4v4'].losses).toBeGreaterThanOrEqual(0);
  expectTypeOf(data['4v4'].losses).toEqualTypeOf<number>();
  expect(data['4v4'].WLR).toBeDefined();
  expect(data['4v4'].WLR).toBeGreaterThanOrEqual(0);
  expectTypeOf(data['4v4'].WLR).toEqualTypeOf<number>();
  expect(data['4v4'].games).toBeDefined();
  expect(data['4v4'].games).toBeGreaterThanOrEqual(0);
  expectTypeOf(data['4v4'].games).toEqualTypeOf<number>();
  expect(data['4v4'].winstreak).toBeDefined();
  expect(data['4v4'].winstreak).toBeGreaterThanOrEqual(0);
  expectTypeOf(data['4v4'].winstreak).toEqualTypeOf<number>();
});
