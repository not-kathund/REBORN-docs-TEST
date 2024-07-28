/**
 * Bid class
 */
class Bid {
  auctionId: string | null;
  profileId: string | null;
  amount: number;
  timestamp: number;
  at: Date | null;
  bidder: string;
  constructor(data: Record<string, any>) {
    this.auctionId = data.auction_id || null;
    this.profileId = data.profile_id || null;
    this.amount = data.amount || 0;
    this.timestamp = data.timestamp || null;
    this.at = data.timestamp ? new Date(data.timestamp) : null;
    this.bidder = data.bidder || null;
  }

  toString(): string {
    return `${this.bidder} bid ${this.amount} coins`;
  }
}

export default Bid;