import Achievements from './Achievements.js';
import Arcade from '../MiniGames/Arcade.js';
import ArenaBrawl from '../MiniGames/ArenaBrawl.js';
import BedWars from '../MiniGames/BedWars.js';
import BlitzSurvivalGames from '../MiniGames/BlitzSurvivalGames.js';
import BuildBattle from '../MiniGames/BuildBattle.js';
import Color from '../Color.js';
import CopsAndCrims from '../MiniGames/CopsAndCrims.js';
import Cosmetics from './Cosmetics.js';
import Duels from '../MiniGames/Duels.js';
import Gifting from './Gifting.js';
import Guild from '../Guild/Guild.js';
import House from '../House.js';
import Housing from '../Housing.js';
import MegaWalls from '../MiniGames/MegaWalls.js';
import MurderMystery from '../MiniGames/MurderMystery.js';
import Paintball from '../MiniGames/Paintball.js';
import Parkour from './Parkour.js';
import Pit from '../MiniGames/Pit.js';
import Quakecraft from '../MiniGames/Quakecraft.js';
import Quests from './Quests.js';
import RecentGame from '../RecentGame.js';
import Rewards from './Rewards.js';
import Seasonal from './Seasonal.js';
import SkyWars from '../MiniGames/SkyWars.js';
import SmashHeroes from '../MiniGames/SmashHeroes.js';
import SocialMedia, { parseSocialMedia } from './SocialMedia.js';
import SpeedUHC from '../MiniGames/SpeedUHC.js';
import TNTGames from '../MiniGames/TNTGames.js';
import Tourney from './Tourney.js';
import TurboKartRacers from '../MiniGames/TurboKartRacers.js';
import UHC from '../MiniGames/UHC.js';
import VampireZ from '../MiniGames/VampireZ.js';
import Walls from '../MiniGames/Walls.js';
import Warlords from '../MiniGames/Warlords.js';
import WoolGames from '../MiniGames/WoolGames.js';
import { ChatChannel, Language, LevelProgress, PlayerRank, PlayerStats, ScorpiusBribe } from './Types.js';
import { getRank, playerLevelProgress } from './Utils.js';

class Player {
  uuid: string;
  nickname: string;
  rank: PlayerRank;
  mvpPlusColor: Color | null;
  mvpPlusPlusColor: Color | null;
  gifting: Gifting;
  socialMedia: SocialMedia[];
  firstLoginTimestamp: number;
  firstLoginAt: Date;
  lastLoginTimestamp: number | null;
  lastLoginAt: Date | null;
  achievements: Achievements;
  language: Language;
  channel: ChatChannel;
  exp: number;
  level: LevelProgress;
  seasonal: Seasonal;
  karma: number;
  freeSkyblockCookie: number | null;
  tourney: Tourney;
  rewards: Rewards;
  challenges: object;
  parkour: Parkour[];
  housing: Housing;
  cosmetics: Cosmetics;
  scorpiusBribes: ScorpiusBribe[];
  quests: Quests;
  guild: Guild | null;
  houses: House[] | null;
  recentGames: RecentGame[] | null;
  stats: PlayerStats;
  constructor(
    data: Record<string, any>,
    extra: { guild: Guild | null; houses: House[] | null; recentGames: RecentGame[] | null }
  ) {
    this.uuid = data.uuid || '';
    this.nickname = data.displayname || '';
    this.rank = getRank(data);
    this.mvpPlusColor = data.rankPlusColor ? new Color(data.rankPlusColor) : null;
    this.mvpPlusPlusColor = data.monthlyRankColor ? new Color(data.monthlyRankColor) : null;
    this.gifting = new Gifting(data?.giftingMeta || {});
    this.socialMedia = parseSocialMedia(data?.socialMedia?.links || {});
    this.firstLoginTimestamp = data?.firstLogin || 0;
    this.firstLoginAt = new Date(this.firstLoginTimestamp);
    this.lastLoginTimestamp = data?.lastLogin || null;
    this.lastLoginAt = this.lastLoginTimestamp ? new Date(this.lastLoginTimestamp) : null;
    this.achievements = new Achievements(data);
    this.language = data?.userLanguage || 'ENGLISH';
    this.channel = data.channel || 'ALL';
    this.exp = data?.networkExp || 0;
    this.level = playerLevelProgress(this.exp);
    this.seasonal = new Seasonal(data?.seasonal || {});
    this.karma = data?.karma || 0;
    this.freeSkyblockCookie = data?.skyblock_free_cookie || null;
    this.tourney = new Tourney(data?.tourney || {});
    this.rewards = new Rewards(data);
    this.challenges = data?.challenges || {};
    this.parkour = [];
    Object.keys(data?.parkourCompletions || {}).map((location) => {
      this.parkour.push(new Parkour(data?.parkourCompletions || {}, data?.parkourCheckpointBests || {}, location));
    });
    this.housing = new Housing(data?.housingMeta || {});
    this.cosmetics = new Cosmetics(data);
    this.scorpiusBribes = [];
    Object.keys(data)
      .filter((key) => key.startsWith('scorpius_bribe_'))
      .forEach((key) => {
        this.scorpiusBribes.push({ year: Number(key), timestamp: data[key] });
      });
    this.quests = new Quests(data?.quests || {}, data?.questSettings?.autoActivate || false);
    this.guild = extra.guild || null;
    this.houses = extra.houses || null;
    this.recentGames = extra.recentGames || null;
    this.stats = {
      arcade: new Arcade({ ...data?.stats?.Arcade, ...data?.achievements }),
      arena: new ArenaBrawl(data?.stats?.Arena),
      bedwars: new BedWars(data?.stats?.Bedwars),
      blitzsg: new BlitzSurvivalGames(data?.stats?.HungerGames),
      buildbattle: new BuildBattle(data?.stats?.BuildBattle),
      copsandcrims: new CopsAndCrims(data?.stats?.MCGO),
      duels: new Duels(data?.stats?.Duels),
      megawalls: new MegaWalls(data?.stats?.Walls3),
      murdermystery: new MurderMystery(data?.stats?.MurderMystery),
      paintball: new Paintball(data?.stats?.Paintball),
      pit: new Pit(data?.stats?.Pit),
      quakecraft: new Quakecraft(data?.stats?.Quake),
      skywars: new SkyWars(data?.stats?.SkyWars),
      smashheroes: new SmashHeroes(data?.stats?.SuperSmash),
      speeduhc: new SpeedUHC(data?.stats?.SpeedUHC),
      tntgames: new TNTGames(data?.stats?.TNTGames),
      turbokartracers: new TurboKartRacers(data?.stats?.GingerBread),
      uhc: new UHC(data?.stats?.UHC),
      vampirez: new VampireZ(data?.stats?.VampireZ),
      walls: new Walls(data?.stats?.Walls),
      warlords: new Warlords(data?.stats?.Battleground),
      woolgames: new WoolGames(data?.stats?.WoolGames)
    };
  }

  toString(): string {
    return this.nickname;
  }
}

export default Player;