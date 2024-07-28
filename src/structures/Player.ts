import { getPlayerLevel, getRank, getSocialMedia, parseClaimedRewards, playerLevelProgress } from '../utils/Player';
import { LevelProgress, PlayerRank, PlayerSocialMedia, RanksPurchaseTime } from '../typings';
import { recursive } from '../utils/removeSnakeCase';
import RecentGame from './RecentGame';
import Guild from './Guild/Guild';
import Color from './Color';
import Game from './Game';
import Arcade from './MiniGames/Arcade';
import ArenaBrawl from './MiniGames/ArenaBrawl';
import BedWars from './MiniGames/BedWars';
import BlitzSurvivalGames from './MiniGames/BlitzSurvivalGames';
import BuildBattle from './MiniGames/BuildBattle';
import CopsAndCrims from './MiniGames/CopsAndCrims';
import Duels from './MiniGames/Duels';
import MegaWalls from './MiniGames/MegaWalls';
import MurderMystery from './MiniGames/MurderMystery';
import Paintball from './MiniGames/Paintball';
import Pit from './MiniGames/Pit';
import Quakecraft from './MiniGames/Quakecraft';
import SkyWars from './MiniGames/SkyWars';
import SmashHeroes from './MiniGames/SmashHeroes';
import SpeedUHC from './MiniGames/SpeedUHC';
import TNTGames from './MiniGames/TNTGames';
import TurboKartRacers from './MiniGames/TurboKartRacers';
import UHC from './MiniGames/UHC';
import VampireZ from './MiniGames/VampireZ';
import Walls from './MiniGames/Walls';
import Warlords from './MiniGames/Warlords';
import WoolWars from './MiniGames/WoolWars';
import PlayerCosmetics from './PlayerCosmetics';

class Player {
  nickname: string;
  uuid: string;
  rank: PlayerRank;
  channel: string | null;
  firstLoginTimestamp: number | null;
  firstLogin: Date | null;
  lastLoginTimestamp: number | null;
  lastLogin: Date | null;
  lastLogoutTimestamp: number | null;
  lastLogout: Date | null;
  recentlyPlayedGame: Game | null;
  plusColor: Color | null;
  prefixColor: Color | null;
  karma: number;
  achievements: object;
  achievementPoints: number;
  totalExperience: number;
  level: number;
  socialMedia: PlayerSocialMedia[];
  giftBundlesSent: number;
  giftBundlesReceived: number;
  giftsSent: number;
  isOnline: boolean;
  lastDailyReward: Date | null;
  lastDailyRewardTimestamp: number | null;
  totalRewards: number | null;
  totalDailyRewards: number | null;
  rewardStreak: number | null;
  rewardScore: number | null;
  rewardHighScore: number | null;
  levelProgress: LevelProgress;
  guild: Guild | null;
  recentGames: RecentGame[] | null;
  stats: any | null;
  userLanguage: string;
  claimedLevelingRewards: number[];
  globalCosmetics: PlayerCosmetics | null;
  ranksPurchaseTime: RanksPurchaseTime;

  constructor(data: Record<string, any>, extraPayload: Record<string, any>) {
    this.nickname = data.displayname;
    this.uuid = data.uuid;
    this.rank = getRank(data);
    this.channel = data.channel || null;
    this.firstLoginTimestamp = data.firstLogin || null;
    this.firstLogin = data.firstLogin ? new Date(data.firstLogin) : null;
    this.lastLoginTimestamp = data.lastLogin || null;
    this.lastLogin = data.lastLogin ? new Date(data.lastLogin) : null;
    this.lastLogoutTimestamp = data.lastLogout || null;
    this.lastLogout = data.lastLogout ? new Date(data.lastLogout) : null;
    this.recentlyPlayedGame = data.mostRecentGameType ? new Game(data.mostRecentGameType) : null;
    this.plusColor =
      'MVP+' === this.rank || 'MVP++' === this.rank
        ? data.rankPlusColor
          ? new Color(data.rankPlusColor)
          : new Color('RED')
        : null;
    this.prefixColor =
      'MVP++' === this.rank ? (data.monthlyRankColor ? new Color(data.monthlyRankColor) : new Color('GOLD')) : null;
    this.karma = data.karma || 0;
    this.achievements = recursive(data.achievements);
    this.achievementPoints = data.achievementPoints || 0;
    this.totalExperience = data.networkExp || 0;
    this.level = getPlayerLevel(this.totalExperience) || 0;
    this.socialMedia = getSocialMedia(data.socialMedia) || [];
    this.giftBundlesSent = data.giftingMeta ? data.giftingMeta.realBundlesGiven || 0 : null;
    this.giftBundlesReceived = data.giftingMeta ? data.giftingMeta.realBundlesReceived || 0 : null;
    this.giftsSent = data.giftingMeta ? data.giftingMeta.giftsGiven || 0 : null;
    this.isOnline =
      null !== this.lastLoginTimestamp &&
      null !== this.lastLogoutTimestamp &&
      this.lastLoginTimestamp > this.lastLogoutTimestamp;
    this.lastDailyReward = data.lastAdsenseGenerateTime ? new Date(data.lastAdsenseGenerateTime) : null;
    this.lastDailyRewardTimestamp = data.lastAdsenseGenerateTime || null;
    this.totalRewards = data.totalRewards || null;
    this.totalDailyRewards = data.totalDailyRewards || null;
    this.rewardStreak = data.rewardStreak || null;
    this.rewardScore = data.rewardScore || null;
    this.rewardHighScore = data.rewardHighScore || null;
    this.levelProgress = playerLevelProgress(data.networkExp);
    this.guild = extraPayload?.guild || null;
    this.recentGames = extraPayload?.recentGames || null;
    this.stats = data.stats
      ? {
          arcade: data.stats.Arcade ? new Arcade({ ...data.stats.Arcade, ...data.achievements }) : null,
          arena: data.stats.Arena ? new ArenaBrawl(data.stats.Arena) : null,
          bedwars: data.stats.Bedwars ? new BedWars(data.stats.Bedwars) : null,
          blitzsg: data.stats.HungerGames ? new BlitzSurvivalGames(data.stats.HungerGames) : null,
          buildbattle: data.stats.BuildBattle ? new BuildBattle(data.stats.BuildBattle) : null,
          copsandcrims: data.stats.MCGO ? new CopsAndCrims(data.stats.MCGO) : null,
          duels: data.stats.Duels ? new Duels(data.stats.Duels) : null,
          megawalls: data.stats.Walls3 ? new MegaWalls(data.stats.Walls3) : null,
          murdermystery: data.stats.MurderMystery ? new MurderMystery(data.stats.MurderMystery) : null,
          paintball: data.stats.Paintball ? new Paintball(data.stats.Paintball) : null,
          pit: data.stats.Pit ? new Pit(data.stats.Pit) : null,
          quakecraft: data.stats.Quake ? new Quakecraft(data.stats.Quake) : null,
          skywars: data.stats.SkyWars ? new SkyWars(data.stats.SkyWars) : null,
          smashheroes: data.stats.SuperSmash ? new SmashHeroes(data.stats.SuperSmash) : null,
          speeduhc: data.stats.SpeedUHC ? new SpeedUHC(data.stats.SpeedUHC) : null,
          tntgames: data.stats.TNTGames ? new TNTGames(data.stats.TNTGames) : null,
          turbokartracers: data.stats.GingerBread ? new TurboKartRacers(data.stats.GingerBread) : null,
          uhc: data.stats.UHC ? new UHC(data.stats.UHC) : null,
          vampirez: data.stats.VampireZ ? new VampireZ(data.stats.VampireZ) : null,
          walls: data.stats.Walls ? new Walls(data.stats.Walls) : null,
          warlords: data.stats.Battleground ? new Warlords(data.stats.Battleground) : null,
          woolwars: data.stats.WoolGames ? new WoolWars(data.stats.WoolGames) : null
        }
      : null;
    this.userLanguage = data.userLanguage || 'ENGLISH';
    this.claimedLevelingRewards = parseClaimedRewards(data) || [];
    this.globalCosmetics = data ? new PlayerCosmetics(data) : null;
    this.ranksPurchaseTime = {
      VIP: data.levelUp_VIP ? new Date(data.levelUp_VIP) : null,
      VIP_PLUS: data.levelUp_VIP_PLUS ? new Date(data.levelUp_VIP_PLUS) : null,
      MVP: data.levelUp_MVP ? new Date(data.levelUp_MVP) : null,
      MVP_PLUS: data.levelUp_MVP_PLUS ? new Date(data.levelUp_MVP_PLUS) : null
    };
  }

  toString(): string {
    return this.nickname;
  }
}

export default Player;
