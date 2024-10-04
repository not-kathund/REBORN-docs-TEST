import SkyWars, { SkyWarsPrestige, SkywarsMode, SkywarsModeStats, SkywarsPackages } from './SkyWars';
import { expect, expectTypeOf, test } from 'vitest';

test('SkyWars (Mode)', () => {
  const data = new SkywarsMode({ stats: 'meow' }, 'meow');
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkywarsMode);
  expectTypeOf(data).toEqualTypeOf<SkywarsMode>();
  expect(data.kills).toBeDefined();
  expect(data.kills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.kills).toEqualTypeOf<number>();
  expect(data.deaths).toBeDefined();
  expect(data.deaths).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.deaths).toEqualTypeOf<number>();
  expect(data.KDR).toBeDefined();
  expect(data.KDR).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.KDR).toEqualTypeOf<number>();
  expect(data.wins).toBeDefined();
  expect(data.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.wins).toEqualTypeOf<number>();
  expect(data.losses).toBeDefined();
  expect(data.losses).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.losses).toEqualTypeOf<number>();
  expect(data.WLR).toBeDefined();
  expect(data.WLR).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.WLR).toEqualTypeOf<number>();
});

test('SkyWars (Mode Stats)', () => {
  const data = new SkywarsModeStats({ stats: 'meow' }, 'meow');
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkywarsModeStats);
  expectTypeOf(data).toEqualTypeOf<SkywarsModeStats>();
  expect(data.activeKit).toBeDefined();
  expectTypeOf(data.activeKit).toEqualTypeOf<string>();
  expect(data.killstreak).toBeDefined();
  expect(data.killstreak).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.killstreak).toEqualTypeOf<number>();
  expect(data.kills).toBeDefined();
  expect(data.kills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.kills).toEqualTypeOf<number>();
  expect(data.voidKills).toBeDefined();
  expect(data.voidKills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.voidKills).toEqualTypeOf<number>();
  expect(data.meleeKills).toBeDefined();
  expect(data.meleeKills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.meleeKills).toEqualTypeOf<number>();
  expect(data.bowKills).toBeDefined();
  expect(data.bowKills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.bowKills).toEqualTypeOf<number>();
  expect(data.mobKills).toBeDefined();
  expect(data.mobKills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.mobKills).toEqualTypeOf<number>();
  expect(data.assists).toBeDefined();
  expect(data.assists).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.assists).toEqualTypeOf<number>();
  expect(data.deaths).toBeDefined();
  expect(data.deaths).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.deaths).toEqualTypeOf<number>();
  expect(data.KDR).toBeDefined();
  expect(data.KDR).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.KDR).toEqualTypeOf<number>();
  expect(data.wins).toBeDefined();
  expect(data.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.wins).toEqualTypeOf<number>();
  expect(data.losses).toBeDefined();
  expect(data.losses).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.losses).toEqualTypeOf<number>();
  expect(data.WLR).toBeDefined();
  expect(data.WLR).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.WLR).toEqualTypeOf<number>();
  expect(data.gamesPlayed).toBeDefined();
  expect(data.gamesPlayed).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.gamesPlayed).toEqualTypeOf<number>();
  expect(data.survivedPlayers).toBeDefined();
  expect(data.survivedPlayers).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.survivedPlayers).toEqualTypeOf<number>();
  expect(data.chestsOpened).toBeDefined();
  expect(data.chestsOpened).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.chestsOpened).toEqualTypeOf<number>();
  expect(data.timePlayed).toBeDefined();
  expect(data.timePlayed).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.timePlayed).toEqualTypeOf<number>();
  expect(data.shard).toBeDefined();
  expect(data.shard).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.shard).toEqualTypeOf<number>();
  expect(data.longestBowShot).toBeDefined();
  expect(data.longestBowShot).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.longestBowShot).toEqualTypeOf<number>();
  expect(data.arrowsShot).toBeDefined();
  expect(data.arrowsShot).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.arrowsShot).toEqualTypeOf<number>();
  expect(data.arrowsHit).toBeDefined();
  expect(data.arrowsHit).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.arrowsHit).toEqualTypeOf<number>();
  expect(data.bowAccuracy).toBeDefined();
  expect(data.bowAccuracy).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.bowAccuracy).toEqualTypeOf<number>();
  expect(data.fastestWin).toBeDefined();
  expect(data.fastestWin).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.fastestWin).toEqualTypeOf<number>();
  expect(data.heads).toBeDefined();
  expect(data.heads).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.heads).toEqualTypeOf<number>();
  expect(data.normal).toBeDefined();
  expectTypeOf(data.normal).toEqualTypeOf<SkywarsMode>();
  expect(data.insane).toBeDefined();
  expectTypeOf(data.insane).toEqualTypeOf<SkywarsMode>();
});

test('SkyWars', () => {
  const data = new SkyWars({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyWars);
  expectTypeOf(data).toEqualTypeOf<SkyWars>();
  expect(data.coins).toBeDefined();
  expect(data.coins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.coins).toEqualTypeOf<number>();
  expect(data.souls).toBeDefined();
  expect(data.souls).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.souls).toEqualTypeOf<number>();
  expect(data.tokens).toBeDefined();
  expect(data.tokens).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.tokens).toEqualTypeOf<number>();
  expect(data.experience).toBeDefined();
  expect(data.experience).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.experience).toEqualTypeOf<number>();
  expect(data.level).toBeDefined();
  expect(data.level).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.level).toEqualTypeOf<number>();
  expect(data.levelProgress).toBeDefined();
  expectTypeOf(data.levelProgress).toEqualTypeOf<any>();
  expect(data.levelFormatted).toBeDefined();
  expectTypeOf(data.levelFormatted).toEqualTypeOf<string | null>();
  expect(data.prestige).toBeDefined();
  expectTypeOf(data.prestige).toEqualTypeOf<SkyWarsPrestige>();
  expect(data.opals).toBeDefined();
  expect(data.opals).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.opals).toEqualTypeOf<number>();
  expect(data.avarice).toBeDefined();
  expect(data.avarice).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.avarice).toEqualTypeOf<number>();
  expect(data.tenacity).toBeDefined();
  expect(data.tenacity).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.tenacity).toEqualTypeOf<number>();
  expect(data.shards).toBeDefined();
  expect(data.shards).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.shards).toEqualTypeOf<number>();
  expect(data.angelOfDeathLevel).toBeDefined();
  expect(data.angelOfDeathLevel).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.angelOfDeathLevel).toEqualTypeOf<number>();
  expect(data.killstreak).toBeDefined();
  expect(data.killstreak).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.killstreak).toEqualTypeOf<number>();
  expect(data.kills).toBeDefined();
  expect(data.kills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.kills).toEqualTypeOf<number>();
  expect(data.voidKills).toBeDefined();
  expect(data.voidKills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.voidKills).toEqualTypeOf<number>();
  expect(data.meleeKills).toBeDefined();
  expect(data.meleeKills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.meleeKills).toEqualTypeOf<number>();
  expect(data.bowKills).toBeDefined();
  expect(data.bowKills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.bowKills).toEqualTypeOf<number>();
  expect(data.mobKills).toBeDefined();
  expect(data.mobKills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.mobKills).toEqualTypeOf<number>();
  expect(data.assists).toBeDefined();
  expect(data.assists).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.assists).toEqualTypeOf<number>();
  expect(data.deaths).toBeDefined();
  expect(data.deaths).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.deaths).toEqualTypeOf<number>();
  expect(data.KDR).toBeDefined();
  expect(data.KDR).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.KDR).toEqualTypeOf<number>();
  expect(data.wins).toBeDefined();
  expect(data.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.wins).toEqualTypeOf<number>();
  expect(data.losses).toBeDefined();
  expect(data.losses).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.losses).toEqualTypeOf<number>();
  expect(data.WLR).toBeDefined();
  expect(data.WLR).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.WLR).toEqualTypeOf<number>();
  expect(data.gamesPlayed).toBeDefined();
  expect(data.gamesPlayed).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.gamesPlayed).toEqualTypeOf<number>();
  expect(data.survivedPlayers).toBeDefined();
  expect(data.survivedPlayers).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.survivedPlayers).toEqualTypeOf<number>();
  expect(data.chestsOpened).toBeDefined();
  expect(data.chestsOpened).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.chestsOpened).toEqualTypeOf<number>();
  expect(data.timePlayed).toBeDefined();
  expect(data.timePlayed).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.timePlayed).toEqualTypeOf<number>();
  expect(data.shard).toBeDefined();
  expect(data.shard).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.shard).toEqualTypeOf<number>();
  expect(data.longestBowShot).toBeDefined();
  expect(data.longestBowShot).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.longestBowShot).toEqualTypeOf<number>();
  expect(data.arrowsShot).toBeDefined();
  expect(data.arrowsShot).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.arrowsShot).toEqualTypeOf<number>();
  expect(data.arrowsHit).toBeDefined();
  expect(data.arrowsHit).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.arrowsHit).toEqualTypeOf<number>();
  expect(data.bowAccuracy).toBeDefined();
  expect(data.bowAccuracy).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.bowAccuracy).toEqualTypeOf<number>();
  expect(data.fastestWin).toBeDefined();
  expect(data.fastestWin).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.fastestWin).toEqualTypeOf<number>();
  expect(data.heads).toBeDefined();
  expect(data.heads).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.heads).toEqualTypeOf<number>();
  expect(data.blocksPlaced).toBeDefined();
  expect(data.blocksPlaced).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.blocksPlaced).toEqualTypeOf<number>();
  expect(data.blocksBroken).toBeDefined();
  expect(data.blocksBroken).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.blocksBroken).toEqualTypeOf<number>();
  expect(data.eggThrown).toBeDefined();
  expect(data.eggThrown).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.eggThrown).toEqualTypeOf<number>();
  expect(data.enderpearlsThrown).toBeDefined();
  expect(data.enderpearlsThrown).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.enderpearlsThrown).toEqualTypeOf<number>();
  expect(data.solo).toBeDefined();
  expectTypeOf(data.solo).toEqualTypeOf<SkywarsModeStats>();
  expect(data.solo.activeKit).toBeDefined();
  expectTypeOf(data.solo.activeKit).toEqualTypeOf<string>();
  expect(data.solo.killstreak).toBeDefined();
  expect(data.solo.killstreak).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.solo.killstreak).toEqualTypeOf<number>();
  expect(data.solo.kills).toBeDefined();
  expect(data.solo.kills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.solo.kills).toEqualTypeOf<number>();
  expect(data.solo.voidKills).toBeDefined();
  expect(data.solo.voidKills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.solo.voidKills).toEqualTypeOf<number>();
  expect(data.solo.meleeKills).toBeDefined();
  expect(data.solo.meleeKills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.solo.meleeKills).toEqualTypeOf<number>();
  expect(data.solo.bowKills).toBeDefined();
  expect(data.solo.bowKills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.solo.bowKills).toEqualTypeOf<number>();
  expect(data.solo.mobKills).toBeDefined();
  expect(data.solo.mobKills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.solo.mobKills).toEqualTypeOf<number>();
  expect(data.solo.assists).toBeDefined();
  expect(data.solo.assists).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.solo.assists).toEqualTypeOf<number>();
  expect(data.solo.deaths).toBeDefined();
  expect(data.solo.deaths).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.solo.deaths).toEqualTypeOf<number>();
  expect(data.solo.KDR).toBeDefined();
  expect(data.solo.KDR).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.solo.KDR).toEqualTypeOf<number>();
  expect(data.solo.wins).toBeDefined();
  expect(data.solo.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.solo.wins).toEqualTypeOf<number>();
  expect(data.solo.losses).toBeDefined();
  expect(data.solo.losses).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.solo.losses).toEqualTypeOf<number>();
  expect(data.solo.WLR).toBeDefined();
  expect(data.solo.WLR).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.solo.WLR).toEqualTypeOf<number>();
  expect(data.solo.gamesPlayed).toBeDefined();
  expect(data.solo.gamesPlayed).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.solo.gamesPlayed).toEqualTypeOf<number>();
  expect(data.solo.survivedPlayers).toBeDefined();
  expect(data.solo.survivedPlayers).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.solo.survivedPlayers).toEqualTypeOf<number>();
  expect(data.solo.chestsOpened).toBeDefined();
  expect(data.solo.chestsOpened).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.solo.chestsOpened).toEqualTypeOf<number>();
  expect(data.solo.timePlayed).toBeDefined();
  expect(data.solo.timePlayed).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.solo.timePlayed).toEqualTypeOf<number>();
  expect(data.solo.shard).toBeDefined();
  expect(data.solo.shard).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.solo.shard).toEqualTypeOf<number>();
  expect(data.solo.longestBowShot).toBeDefined();
  expect(data.solo.longestBowShot).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.solo.longestBowShot).toEqualTypeOf<number>();
  expect(data.solo.arrowsShot).toBeDefined();
  expect(data.solo.arrowsShot).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.solo.arrowsShot).toEqualTypeOf<number>();
  expect(data.solo.arrowsHit).toBeDefined();
  expect(data.solo.arrowsHit).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.solo.arrowsHit).toEqualTypeOf<number>();
  expect(data.solo.bowAccuracy).toBeDefined();
  expect(data.solo.bowAccuracy).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.solo.bowAccuracy).toEqualTypeOf<number>();
  expect(data.solo.fastestWin).toBeDefined();
  expect(data.solo.fastestWin).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.solo.fastestWin).toEqualTypeOf<number>();
  expect(data.solo.heads).toBeDefined();
  expect(data.solo.heads).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.solo.heads).toEqualTypeOf<number>();
  expect(data.solo.normal).toBeDefined();
  expectTypeOf(data.solo.normal).toEqualTypeOf<SkywarsMode>();
  expect(data.solo.normal.kills).toBeDefined();
  expect(data.solo.normal.kills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.solo.normal.kills).toEqualTypeOf<number>();
  expect(data.solo.normal.deaths).toBeDefined();
  expect(data.solo.normal.deaths).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.solo.normal.deaths).toEqualTypeOf<number>();
  expect(data.solo.normal.KDR).toBeDefined();
  expect(data.solo.normal.KDR).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.solo.normal.KDR).toEqualTypeOf<number>();
  expect(data.solo.normal.wins).toBeDefined();
  expect(data.solo.normal.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.solo.normal.wins).toEqualTypeOf<number>();
  expect(data.solo.normal.losses).toBeDefined();
  expect(data.solo.normal.losses).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.solo.normal.losses).toEqualTypeOf<number>();
  expect(data.solo.normal.WLR).toBeDefined();
  expect(data.solo.normal.WLR).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.solo.normal.WLR).toEqualTypeOf<number>();
  expect(data.solo.insane).toBeDefined();
  expectTypeOf(data.solo.insane).toEqualTypeOf<SkywarsMode>();
  expect(data.solo.insane.kills).toBeDefined();
  expect(data.solo.insane.kills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.solo.insane.kills).toEqualTypeOf<number>();
  expect(data.solo.insane.deaths).toBeDefined();
  expect(data.solo.insane.deaths).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.solo.insane.deaths).toEqualTypeOf<number>();
  expect(data.solo.insane.KDR).toBeDefined();
  expect(data.solo.insane.KDR).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.solo.insane.KDR).toEqualTypeOf<number>();
  expect(data.solo.insane.wins).toBeDefined();
  expect(data.solo.insane.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.solo.insane.wins).toEqualTypeOf<number>();
  expect(data.solo.insane.losses).toBeDefined();
  expect(data.solo.insane.losses).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.solo.insane.losses).toEqualTypeOf<number>();
  expect(data.solo.insane.WLR).toBeDefined();
  expect(data.solo.insane.WLR).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.solo.insane.WLR).toEqualTypeOf<number>();
  expect(data.team).toBeDefined();
  expectTypeOf(data.team).toEqualTypeOf<SkywarsModeStats>();
  expect(data.team.activeKit).toBeDefined();
  expectTypeOf(data.team.activeKit).toEqualTypeOf<string>();
  expect(data.team.killstreak).toBeDefined();
  expect(data.team.killstreak).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.team.killstreak).toEqualTypeOf<number>();
  expect(data.team.kills).toBeDefined();
  expect(data.team.kills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.team.kills).toEqualTypeOf<number>();
  expect(data.team.voidKills).toBeDefined();
  expect(data.team.voidKills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.team.voidKills).toEqualTypeOf<number>();
  expect(data.team.meleeKills).toBeDefined();
  expect(data.team.meleeKills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.team.meleeKills).toEqualTypeOf<number>();
  expect(data.team.bowKills).toBeDefined();
  expect(data.team.bowKills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.team.bowKills).toEqualTypeOf<number>();
  expect(data.team.mobKills).toBeDefined();
  expect(data.team.mobKills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.team.mobKills).toEqualTypeOf<number>();
  expect(data.team.assists).toBeDefined();
  expect(data.team.assists).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.team.assists).toEqualTypeOf<number>();
  expect(data.team.deaths).toBeDefined();
  expect(data.team.deaths).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.team.deaths).toEqualTypeOf<number>();
  expect(data.team.KDR).toBeDefined();
  expect(data.team.KDR).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.team.KDR).toEqualTypeOf<number>();
  expect(data.team.wins).toBeDefined();
  expect(data.team.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.team.wins).toEqualTypeOf<number>();
  expect(data.team.losses).toBeDefined();
  expect(data.team.losses).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.team.losses).toEqualTypeOf<number>();
  expect(data.team.WLR).toBeDefined();
  expect(data.team.WLR).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.team.WLR).toEqualTypeOf<number>();
  expect(data.team.gamesPlayed).toBeDefined();
  expect(data.team.gamesPlayed).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.team.gamesPlayed).toEqualTypeOf<number>();
  expect(data.team.survivedPlayers).toBeDefined();
  expect(data.team.survivedPlayers).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.team.survivedPlayers).toEqualTypeOf<number>();
  expect(data.team.chestsOpened).toBeDefined();
  expect(data.team.chestsOpened).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.team.chestsOpened).toEqualTypeOf<number>();
  expect(data.team.timePlayed).toBeDefined();
  expect(data.team.timePlayed).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.team.timePlayed).toEqualTypeOf<number>();
  expect(data.team.shard).toBeDefined();
  expect(data.team.shard).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.team.shard).toEqualTypeOf<number>();
  expect(data.team.longestBowShot).toBeDefined();
  expect(data.team.longestBowShot).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.team.longestBowShot).toEqualTypeOf<number>();
  expect(data.team.arrowsShot).toBeDefined();
  expect(data.team.arrowsShot).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.team.arrowsShot).toEqualTypeOf<number>();
  expect(data.team.arrowsHit).toBeDefined();
  expect(data.team.arrowsHit).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.team.arrowsHit).toEqualTypeOf<number>();
  expect(data.team.bowAccuracy).toBeDefined();
  expect(data.team.bowAccuracy).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.team.bowAccuracy).toEqualTypeOf<number>();
  expect(data.team.fastestWin).toBeDefined();
  expect(data.team.fastestWin).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.team.fastestWin).toEqualTypeOf<number>();
  expect(data.team.heads).toBeDefined();
  expect(data.team.heads).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.team.heads).toEqualTypeOf<number>();
  expect(data.team.normal).toBeDefined();
  expectTypeOf(data.team.normal).toEqualTypeOf<SkywarsMode>();
  expect(data.team.normal.kills).toBeDefined();
  expect(data.team.normal.kills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.team.normal.kills).toEqualTypeOf<number>();
  expect(data.team.normal.deaths).toBeDefined();
  expect(data.team.normal.deaths).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.team.normal.deaths).toEqualTypeOf<number>();
  expect(data.team.normal.KDR).toBeDefined();
  expect(data.team.normal.KDR).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.team.normal.KDR).toEqualTypeOf<number>();
  expect(data.team.normal.wins).toBeDefined();
  expect(data.team.normal.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.team.normal.wins).toEqualTypeOf<number>();
  expect(data.team.normal.losses).toBeDefined();
  expect(data.team.normal.losses).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.team.normal.losses).toEqualTypeOf<number>();
  expect(data.team.normal.WLR).toBeDefined();
  expect(data.team.normal.WLR).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.team.normal.WLR).toEqualTypeOf<number>();
  expect(data.team.insane).toBeDefined();
  expectTypeOf(data.team.insane).toEqualTypeOf<SkywarsMode>();
  expect(data.team.insane.kills).toBeDefined();
  expect(data.team.insane.kills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.team.insane.kills).toEqualTypeOf<number>();
  expect(data.team.insane.deaths).toBeDefined();
  expect(data.team.insane.deaths).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.team.insane.deaths).toEqualTypeOf<number>();
  expect(data.team.insane.KDR).toBeDefined();
  expect(data.team.insane.KDR).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.team.insane.KDR).toEqualTypeOf<number>();
  expect(data.team.insane.wins).toBeDefined();
  expect(data.team.insane.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.team.insane.wins).toEqualTypeOf<number>();
  expect(data.team.insane.losses).toBeDefined();
  expect(data.team.insane.losses).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.team.insane.losses).toEqualTypeOf<number>();
  expect(data.team.insane.WLR).toBeDefined();
  expect(data.team.insane.WLR).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.team.insane.WLR).toEqualTypeOf<number>();
  expect(data.mega).toBeDefined();
  expectTypeOf(data.mega).toEqualTypeOf<SkywarsMode>();
  expect(data.mega.kills).toBeDefined();
  expect(data.mega.kills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.mega.kills).toEqualTypeOf<number>();
  expect(data.mega.deaths).toBeDefined();
  expect(data.mega.deaths).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.mega.deaths).toEqualTypeOf<number>();
  expect(data.mega.KDR).toBeDefined();
  expect(data.mega.KDR).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.mega.KDR).toEqualTypeOf<number>();
  expect(data.mega.wins).toBeDefined();
  expect(data.mega.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.mega.wins).toEqualTypeOf<number>();
  expect(data.mega.losses).toBeDefined();
  expect(data.mega.losses).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.mega.losses).toEqualTypeOf<number>();
  expect(data.mega.WLR).toBeDefined();
  expect(data.mega.WLR).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.mega.WLR).toEqualTypeOf<number>();
  expect(data.megaDoubles).toBeDefined();
  expectTypeOf(data.megaDoubles).toEqualTypeOf<SkywarsMode>();
  expect(data.megaDoubles.kills).toBeDefined();
  expect(data.megaDoubles.kills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.megaDoubles.kills).toEqualTypeOf<number>();
  expect(data.megaDoubles.deaths).toBeDefined();
  expect(data.megaDoubles.deaths).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.megaDoubles.deaths).toEqualTypeOf<number>();
  expect(data.megaDoubles.KDR).toBeDefined();
  expect(data.megaDoubles.KDR).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.megaDoubles.KDR).toEqualTypeOf<number>();
  expect(data.megaDoubles.wins).toBeDefined();
  expect(data.megaDoubles.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.megaDoubles.wins).toEqualTypeOf<number>();
  expect(data.megaDoubles.losses).toBeDefined();
  expect(data.megaDoubles.losses).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.megaDoubles.losses).toEqualTypeOf<number>();
  expect(data.megaDoubles.WLR).toBeDefined();
  expect(data.megaDoubles.WLR).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.megaDoubles.WLR).toEqualTypeOf<number>();
  expect(data.lab).toBeDefined();
  expectTypeOf(data.lab).toEqualTypeOf<SkywarsMode>();
  expect(data.lab.kills).toBeDefined();
  expect(data.lab.kills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.lab.kills).toEqualTypeOf<number>();
  expect(data.lab.deaths).toBeDefined();
  expect(data.lab.deaths).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.lab.deaths).toEqualTypeOf<number>();
  expect(data.lab.KDR).toBeDefined();
  expect(data.lab.KDR).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.lab.KDR).toEqualTypeOf<number>();
  expect(data.lab.wins).toBeDefined();
  expect(data.lab.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.lab.wins).toEqualTypeOf<number>();
  expect(data.lab.losses).toBeDefined();
  expect(data.lab.losses).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.lab.losses).toEqualTypeOf<number>();
  expect(data.lab.WLR).toBeDefined();
  expect(data.lab.WLR).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.lab.WLR).toEqualTypeOf<number>();
  expect(data.packages).toBeDefined();
  expectTypeOf(data.packages).toEqualTypeOf<SkywarsPackages>();
});
