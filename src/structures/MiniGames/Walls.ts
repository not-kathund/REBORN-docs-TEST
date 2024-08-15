import Divide from '../../utils/Divide';
/**
 * Walls class
 */
class Walls {
  coins: number;
  kills: number;
  deaths: number;
  KDRatio: number;
  wins: number;
  losses: number;
  WLRatio: number;
  assists: number;
  constructor(data: Record<string, any>) {
    this.coins = data.coins || 0;
    this.kills = data.kills || 0;
    this.deaths = data.deaths || 0;
    this.KDRatio = Divide(this.kills, this.deaths);
    this.wins = data.wins || 0;
    this.losses = data.losses || 0;
    this.WLRatio = Divide(this.wins, this.losses);
    this.assists = data.assists || 0;
  }
}

export default Walls;
