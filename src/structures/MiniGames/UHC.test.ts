import UHC, { UHCGamemode } from './UHC.js';
import { expect, expectTypeOf, test } from 'vitest';

test('UHC', () => {
  const data = new UHC({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(UHC);
  expectTypeOf(data).toEqualTypeOf<UHC>();
  expect(data.coins).toBeDefined();
  expect(data.coins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.coins).toEqualTypeOf<number>();
  expect(data.score).toBeDefined();
  expect(data.score).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.score).toEqualTypeOf<number>();
  expect(data.kit).toBeDefined();
  expectTypeOf(data.kit).toEqualTypeOf<string>();
  expect(data.solo).toBeDefined();
  expectTypeOf(data.solo).toEqualTypeOf<UHCGamemode>();
  expect(data.solo.kills).toBeDefined();
  expect(data.solo.kills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.solo.kills).toEqualTypeOf<number>();
  expect(data.solo.deaths).toBeDefined();
  expect(data.solo.deaths).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.solo.deaths).toEqualTypeOf<number>();
  expect(data.solo.wins).toBeDefined();
  expect(data.solo.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.solo.wins).toEqualTypeOf<number>();
  expect(data.solo.headsEaten).toBeDefined();
  expect(data.solo.headsEaten).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.solo.headsEaten).toEqualTypeOf<number>();
  expect(data.solo.ultimatesCrafted).toBeDefined();
  expect(data.solo.ultimatesCrafted).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.solo.ultimatesCrafted).toEqualTypeOf<number>();
  expect(data.team.extraUltimatesCrafted).toBeDefined();
  expect(data.team.extraUltimatesCrafted).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.team.extraUltimatesCrafted).toEqualTypeOf<number>();
  expect(data.team).toBeDefined();
  expectTypeOf(data.team).toEqualTypeOf<UHCGamemode>();
  expect(data.team.kills).toBeDefined();
  expect(data.team.kills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.team.kills).toEqualTypeOf<number>();
  expect(data.team.deaths).toBeDefined();
  expect(data.team.deaths).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.team.deaths).toEqualTypeOf<number>();
  expect(data.team.wins).toBeDefined();
  expect(data.team.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.team.wins).toEqualTypeOf<number>();
  expect(data.team.headsEaten).toBeDefined();
  expect(data.team.headsEaten).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.team.headsEaten).toEqualTypeOf<number>();
  expect(data.team.ultimatesCrafted).toBeDefined();
  expect(data.team.ultimatesCrafted).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.team.ultimatesCrafted).toEqualTypeOf<number>();
  expect(data.team.extraUltimatesCrafted).toBeDefined();
  expect(data.team.extraUltimatesCrafted).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.team.extraUltimatesCrafted).toEqualTypeOf<number>();
  expect(data.redVsBlue).toBeDefined();
  expectTypeOf(data.redVsBlue).toEqualTypeOf<UHCGamemode>();
  expect(data.redVsBlue.kills).toBeDefined();
  expect(data.redVsBlue.kills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.redVsBlue.kills).toEqualTypeOf<number>();
  expect(data.redVsBlue.deaths).toBeDefined();
  expect(data.redVsBlue.deaths).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.redVsBlue.deaths).toEqualTypeOf<number>();
  expect(data.redVsBlue.wins).toBeDefined();
  expect(data.redVsBlue.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.redVsBlue.wins).toEqualTypeOf<number>();
  expect(data.redVsBlue.headsEaten).toBeDefined();
  expect(data.redVsBlue.headsEaten).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.redVsBlue.headsEaten).toEqualTypeOf<number>();
  expect(data.redVsBlue.ultimatesCrafted).toBeDefined();
  expect(data.redVsBlue.ultimatesCrafted).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.redVsBlue.ultimatesCrafted).toEqualTypeOf<number>();
  expect(data.team.extraUltimatesCrafted).toBeDefined();
  expect(data.team.extraUltimatesCrafted).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.team.extraUltimatesCrafted).toEqualTypeOf<number>();
  expect(data.noDiamond).toBeDefined();
  expectTypeOf(data.noDiamond).toEqualTypeOf<UHCGamemode>();
  expect(data.noDiamond.kills).toBeDefined();
  expect(data.noDiamond.kills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.noDiamond.kills).toEqualTypeOf<number>();
  expect(data.noDiamond.deaths).toBeDefined();
  expect(data.noDiamond.deaths).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.noDiamond.deaths).toEqualTypeOf<number>();
  expect(data.noDiamond.wins).toBeDefined();
  expect(data.noDiamond.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.noDiamond.wins).toEqualTypeOf<number>();
  expect(data.noDiamond.headsEaten).toBeDefined();
  expect(data.noDiamond.headsEaten).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.noDiamond.headsEaten).toEqualTypeOf<number>();
  expect(data.noDiamond.ultimatesCrafted).toBeDefined();
  expect(data.noDiamond.ultimatesCrafted).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.noDiamond.ultimatesCrafted).toEqualTypeOf<number>();
  expect(data.team.extraUltimatesCrafted).toBeDefined();
  expect(data.team.extraUltimatesCrafted).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.team.extraUltimatesCrafted).toEqualTypeOf<number>();
  expect(data.brawl).toBeDefined();
  expectTypeOf(data.brawl).toEqualTypeOf<UHCGamemode>();
  expect(data.brawl.kills).toBeDefined();
  expect(data.brawl.kills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.brawl.kills).toEqualTypeOf<number>();
  expect(data.brawl.deaths).toBeDefined();
  expect(data.brawl.deaths).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.brawl.deaths).toEqualTypeOf<number>();
  expect(data.brawl.wins).toBeDefined();
  expect(data.brawl.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.brawl.wins).toEqualTypeOf<number>();
  expect(data.brawl.headsEaten).toBeDefined();
  expect(data.brawl.headsEaten).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.brawl.headsEaten).toEqualTypeOf<number>();
  expect(data.brawl.ultimatesCrafted).toBeDefined();
  expect(data.brawl.ultimatesCrafted).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.brawl.ultimatesCrafted).toEqualTypeOf<number>();
  expect(data.team.extraUltimatesCrafted).toBeDefined();
  expect(data.team.extraUltimatesCrafted).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.team.extraUltimatesCrafted).toEqualTypeOf<number>();
  expect(data.soloBrawl).toBeDefined();
  expectTypeOf(data.soloBrawl).toEqualTypeOf<UHCGamemode>();
  expect(data.soloBrawl.kills).toBeDefined();
  expect(data.soloBrawl.kills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.soloBrawl.kills).toEqualTypeOf<number>();
  expect(data.soloBrawl.deaths).toBeDefined();
  expect(data.soloBrawl.deaths).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.soloBrawl.deaths).toEqualTypeOf<number>();
  expect(data.soloBrawl.wins).toBeDefined();
  expect(data.soloBrawl.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.soloBrawl.wins).toEqualTypeOf<number>();
  expect(data.soloBrawl.headsEaten).toBeDefined();
  expect(data.soloBrawl.headsEaten).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.soloBrawl.headsEaten).toEqualTypeOf<number>();
  expect(data.soloBrawl.ultimatesCrafted).toBeDefined();
  expect(data.soloBrawl.ultimatesCrafted).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.soloBrawl.ultimatesCrafted).toEqualTypeOf<number>();
  expect(data.team.extraUltimatesCrafted).toBeDefined();
  expect(data.team.extraUltimatesCrafted).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.team.extraUltimatesCrafted).toEqualTypeOf<number>();
  expect(data.duoBrawl).toBeDefined();
  expectTypeOf(data.duoBrawl).toEqualTypeOf<UHCGamemode>();
  expect(data.duoBrawl.kills).toBeDefined();
  expect(data.duoBrawl.kills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.duoBrawl.kills).toEqualTypeOf<number>();
  expect(data.duoBrawl.deaths).toBeDefined();
  expect(data.duoBrawl.deaths).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.duoBrawl.deaths).toEqualTypeOf<number>();
  expect(data.duoBrawl.wins).toBeDefined();
  expect(data.duoBrawl.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.duoBrawl.wins).toEqualTypeOf<number>();
  expect(data.duoBrawl.headsEaten).toBeDefined();
  expect(data.duoBrawl.headsEaten).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.duoBrawl.headsEaten).toEqualTypeOf<number>();
  expect(data.duoBrawl.ultimatesCrafted).toBeDefined();
  expect(data.duoBrawl.ultimatesCrafted).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.duoBrawl.ultimatesCrafted).toEqualTypeOf<number>();
  expect(data.team.extraUltimatesCrafted).toBeDefined();
  expect(data.team.extraUltimatesCrafted).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.team.extraUltimatesCrafted).toEqualTypeOf<number>();
  expect(data.wins).toBeDefined();
  expect(data.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.wins).toEqualTypeOf<number>();
  expect(data.kills).toBeDefined();
  expect(data.kills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.kills).toEqualTypeOf<number>();
  expect(data.deaths).toBeDefined();
  expect(data.deaths).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.deaths).toEqualTypeOf<number>();
  expect(data.KDR).toBeDefined();
  expect(data.KDR).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.KDR).toEqualTypeOf<number>();
  expect(data.headsEaten).toBeDefined();
  expect(data.headsEaten).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.headsEaten).toEqualTypeOf<number>();
  expect(data.ultimatesCrafted).toBeDefined();
  expect(data.ultimatesCrafted).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.ultimatesCrafted).toEqualTypeOf<number>();
  expect(data.extraUltimatesCrafted).toBeDefined();
  expect(data.extraUltimatesCrafted).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.extraUltimatesCrafted).toEqualTypeOf<number>();
  expect(data.starLevel).toBeDefined();
  expect(data.starLevel).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.starLevel).toEqualTypeOf<number>();
});
