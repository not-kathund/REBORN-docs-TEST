import Auction from '../structures/SkyBlock/Auctions/Auction';
import Client from '../Client';
import Endpoint from '../Private/Endpoint';
import { AuctionFetchOptions, AuctionRequestOptions } from './API';
import { RequestData } from '../Private/RequestHandler';

class getSkyblockAction extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(
    type: AuctionFetchOptions,
    query: string,
    options?: AuctionRequestOptions
  ): Promise<Auction[] | RequestData> {
    let filter;
    if ('profile' === type) {
      filter = 'profile';
    } else if ('player' === type && query) {
      query = await this.client.requestHandler.toUUID(query);
      filter = 'player';
    } else if ('auction' === type) {
      filter = 'uuid';
    } else {
      throw new Error(this.client.errors.BAD_AUCTION_FILTER);
    }
    if (!query) throw new Error(this.client.errors.NO_NICKNAME_UUID);
    const res = await this.client.requestHandler.request(`/skyblock/auction?${filter}=${query}`, options);
    if (res.options.raw) return res;
    return res.data.auctions.map((a: any) => new Auction(a, options?.includeItemBytes ?? false));
  }
}

export default getSkyblockAction;
