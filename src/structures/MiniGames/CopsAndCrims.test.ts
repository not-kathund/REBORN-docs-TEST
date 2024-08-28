import { expect, expectTypeOf, test } from 'vitest';
import CopsAndCrims, { CopsAndCrimsDeathmatch, CopsAndCrimsDefusal, CopsAndCrimsGunGame } from './CopsAndCrims';
test('CopsAndCrims', () => {
  const data = new CopsAndCrims({ stats: 'meow' });
  expect(data.defusal).toBeDefined();
  expectTypeOf(data.defusal).toEqualTypeOf<CopsAndCrimsDefusal>();
  expect(data.defusal.kills).toBeDefined();
  expect(data.defusal.kills).greaterThanOrEqual(0);
  expectTypeOf(data.defusal.kills).toEqualTypeOf<number>();
  expect(data.defusal.headshotKills).toBeDefined();
  expect(data.defusal.headshotKills).greaterThanOrEqual(0);
  expectTypeOf(data.defusal.headshotKills).toEqualTypeOf<number>();
  expect(data.defusal.assists).toBeDefined();
  expect(data.defusal.assists).greaterThanOrEqual(0);
  expectTypeOf(data.defusal.assists).toEqualTypeOf<number>();
  expect(data.defusal.deaths).toBeDefined();
  expect(data.defusal.deaths).greaterThanOrEqual(0);
  expectTypeOf(data.defusal.deaths).toEqualTypeOf<number>();
  expect(data.defusal.KDRatio).toBeDefined();
  expect(data.defusal.KDRatio).greaterThanOrEqual(0);
  expectTypeOf(data.defusal.KDRatio).toEqualTypeOf<number>();
  expect(data.defusal.wins).toBeDefined();
  expect(data.defusal.wins).greaterThanOrEqual(0);
  expectTypeOf(data.defusal.wins).toEqualTypeOf<number>();
  expect(data.defusal.gamesPlayed).toBeDefined();
  expect(data.defusal.gamesPlayed).greaterThanOrEqual(0);
  expectTypeOf(data.defusal.gamesPlayed).toEqualTypeOf<number>();
  expect(data.defusal.losses).toBeDefined();
  expect(data.defusal.losses).greaterThanOrEqual(0);
  expectTypeOf(data.defusal.losses).toEqualTypeOf<number>();
  expect(data.defusal.WLRatio).toBeDefined();
  expect(data.defusal.WLRatio).greaterThanOrEqual(0);
  expectTypeOf(data.defusal.WLRatio).toEqualTypeOf<number>();
  expect(data.defusal.roundWins).toBeDefined();
  expect(data.defusal.roundWins).greaterThanOrEqual(0);
  expectTypeOf(data.defusal.roundWins).toEqualTypeOf<number>();
  expect(data.defusal.shotsFired).toBeDefined();
  expect(data.defusal.shotsFired).greaterThanOrEqual(0);
  expectTypeOf(data.defusal.shotsFired).toEqualTypeOf<number>();
  expect(data.defusal.bombsDefused).toBeDefined();
  expect(data.defusal.bombsDefused).greaterThanOrEqual(0);
  expectTypeOf(data.defusal.bombsDefused).toEqualTypeOf<number>();
  expect(data.defusal.bombsPlanted).toBeDefined();
  expect(data.defusal.bombsPlanted).greaterThanOrEqual(0);
  expectTypeOf(data.defusal.bombsPlanted).toEqualTypeOf<number>();
  expect(data.defusal.killsAsCrim).toBeDefined();
  expect(data.defusal.killsAsCrim).greaterThanOrEqual(0);
  expectTypeOf(data.defusal.killsAsCrim).toEqualTypeOf<number>();
  expect(data.defusal.killsAsCop).toBeDefined();
  expect(data.defusal.killsAsCop).greaterThanOrEqual(0);
  expectTypeOf(data.defusal.killsAsCop).toEqualTypeOf<number>();
  expect(data.deathmath).toBeDefined();
  expectTypeOf(data.deathmath).toEqualTypeOf<CopsAndCrimsDeathmatch>();
  expect(data.deathmath.kills).toBeDefined();
  expect(data.deathmath.kills).greaterThanOrEqual(0);
  expectTypeOf(data.deathmath.kills).toEqualTypeOf<number>();
  expect(data.deathmath.assists).toBeDefined();
  expect(data.deathmath.assists).greaterThanOrEqual(0);
  expectTypeOf(data.deathmath.assists).toEqualTypeOf<number>();
  expect(data.deathmath.deaths).toBeDefined();
  expect(data.deathmath.deaths).greaterThanOrEqual(0);
  expectTypeOf(data.deathmath.deaths).toEqualTypeOf<number>();
  expect(data.deathmath.KDRatio).toBeDefined();
  expect(data.deathmath.KDRatio).greaterThanOrEqual(0);
  expectTypeOf(data.deathmath.KDRatio).toEqualTypeOf<number>();
  expect(data.deathmath.wins).toBeDefined();
  expect(data.deathmath.wins).greaterThanOrEqual(0);
  expectTypeOf(data.deathmath.wins).toEqualTypeOf<number>();
  expect(data.deathmath.gamesPlayed).toBeDefined();
  expect(data.deathmath.gamesPlayed).greaterThanOrEqual(0);
  expectTypeOf(data.deathmath.gamesPlayed).toEqualTypeOf<number>();
  expect(data.deathmath.losses).toBeDefined();
  expect(data.deathmath.losses).greaterThanOrEqual(0);
  expectTypeOf(data.deathmath.losses).toEqualTypeOf<number>();
  expect(data.deathmath.WLRatio).toBeDefined();
  expect(data.deathmath.WLRatio).greaterThanOrEqual(0);
  expectTypeOf(data.deathmath.WLRatio).toEqualTypeOf<number>();
  expect(data.deathmath.killsAsCrim).toBeDefined();
  expect(data.deathmath.killsAsCrim).greaterThanOrEqual(0);
  expectTypeOf(data.deathmath.killsAsCrim).toEqualTypeOf<number>();
  expect(data.deathmath.killsAsCop).toBeDefined();
  expect(data.deathmath.killsAsCop).greaterThanOrEqual(0);
  expectTypeOf(data.deathmath.killsAsCop).toEqualTypeOf<number>();
  expect(data.gunGame).toBeDefined();
  expectTypeOf(data.gunGame).toEqualTypeOf<CopsAndCrimsGunGame>();
  expect(data.gunGame.kills).toBeDefined();
  expect(data.gunGame.kills).greaterThanOrEqual(0);
  expectTypeOf(data.gunGame.kills).toEqualTypeOf<number>();
  expect(data.gunGame.assists).toBeDefined();
  expect(data.gunGame.assists).greaterThanOrEqual(0);
  expectTypeOf(data.gunGame.assists).toEqualTypeOf<number>();
  expect(data.gunGame.deaths).toBeDefined();
  expect(data.gunGame.deaths).greaterThanOrEqual(0);
  expectTypeOf(data.gunGame.deaths).toEqualTypeOf<number>();
  expect(data.gunGame.KDRatio).toBeDefined();
  expect(data.gunGame.KDRatio).greaterThanOrEqual(0);
  expectTypeOf(data.gunGame.KDRatio).toEqualTypeOf<number>();
  expect(data.gunGame.wins).toBeDefined();
  expect(data.gunGame.wins).greaterThanOrEqual(0);
  expectTypeOf(data.gunGame.wins).toEqualTypeOf<number>();
  expect(data.gunGame.gamesPlayed).toBeDefined();
  expect(data.gunGame.gamesPlayed).greaterThanOrEqual(0);
  expectTypeOf(data.gunGame.gamesPlayed).toEqualTypeOf<number>();
  expect(data.gunGame.losses).toBeDefined();
  expect(data.gunGame.losses).greaterThanOrEqual(0);
  expectTypeOf(data.gunGame.losses).toEqualTypeOf<number>();
  expect(data.gunGame.WLRatio).toBeDefined();
  expect(data.gunGame.WLRatio).greaterThanOrEqual(0);
  expectTypeOf(data.gunGame.WLRatio).toEqualTypeOf<number>();
  expect(data.gunGame.killsAsCrim).toBeDefined();
  expect(data.gunGame.killsAsCrim).greaterThanOrEqual(0);
  expectTypeOf(data.gunGame.killsAsCrim).toEqualTypeOf<number>();
  expect(data.gunGame.killsAsCop).toBeDefined();
  expect(data.gunGame.killsAsCop).greaterThanOrEqual(0);
  expectTypeOf(data.gunGame.killsAsCop).toEqualTypeOf<number>();
  expect(data.gunGame.fastestWin).toBeDefined();
  expect(data.gunGame.fastestWin).greaterThanOrEqual(0);
  expectTypeOf(data.gunGame.fastestWin).toEqualTypeOf<number>();
  expect(data.coins).toBeDefined();
  expect(data.coins).greaterThanOrEqual(0);
  expectTypeOf(data.coins).toEqualTypeOf<number>();
  expect(data.kills).toBeDefined();
  expect(data.kills).greaterThanOrEqual(0);
  expectTypeOf(data.kills).toEqualTypeOf<number>();
  expect(data.assists).toBeDefined();
  expect(data.assists).greaterThanOrEqual(0);
  expectTypeOf(data.assists).toEqualTypeOf<number>();
  expect(data.deaths).toBeDefined();
  expect(data.deaths).greaterThanOrEqual(0);
  expectTypeOf(data.deaths).toEqualTypeOf<number>();
  expect(data.KDRatio).toBeDefined();
  expect(data.KDRatio).greaterThanOrEqual(0);
  expectTypeOf(data.KDRatio).toEqualTypeOf<number>();
  expect(data.wins).toBeDefined();
  expect(data.wins).greaterThanOrEqual(0);
  expectTypeOf(data.wins).toEqualTypeOf<number>();
  expect(data.gamesPlayed).toBeDefined();
  expect(data.gamesPlayed).greaterThanOrEqual(0);
  expectTypeOf(data.gamesPlayed).toEqualTypeOf<number>();
  expect(data.losses).toBeDefined();
  expect(data.losses).greaterThanOrEqual(0);
  expectTypeOf(data.losses).toEqualTypeOf<number>();
  expect(data.WLRatio).toBeDefined();
  expect(data.WLRatio).greaterThanOrEqual(0);
  expectTypeOf(data.WLRatio).toEqualTypeOf<number>();
  expect(data.killsAsCrim).toBeDefined();
  expect(data.killsAsCrim).greaterThanOrEqual(0);
  expectTypeOf(data.killsAsCrim).toEqualTypeOf<number>();
  expect(data.killsAsCop).toBeDefined();
  expect(data.killsAsCop).greaterThanOrEqual(0);
  expectTypeOf(data.killsAsCop).toEqualTypeOf<number>();
  expect(data.prefixColor).toBeDefined();
  expectTypeOf(data.prefixColor).toEqualTypeOf<string>();
  expect(data.showPrefix).toBeDefined();
  expectTypeOf(data.showPrefix).toEqualTypeOf<boolean>();
  expect(data.selectedPrefix).toBeDefined();
  expectTypeOf(data.selectedPrefix).toEqualTypeOf<string>();
  expect(data.killsInPrefix).toBeDefined();
  expectTypeOf(data.killsInPrefix).toEqualTypeOf<boolean>();
});
