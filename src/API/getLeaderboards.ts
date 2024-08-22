import { RequestOptions } from '../Private/Requests';
import Leaderboard from '../structures/Leaderboard';
import Constants from '../utils/Constants';
import Endpoint from '../Private/Endpoint';
import Client from '../Client';

class getLeaderboards extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(options?: RequestOptions): Promise<any> {
    const res = await this.client.requests.request('/leaderboards', options);
    if (res.options.raw) return res.data;
    if (!res.data.leaderboards) {
      throw new Error(this.client.errors.SOMETHING_WENT_WRONG.replace(/{cause}/, 'Try again.'));
    }
    const lbnames = Object.create(Constants.leaderboardNames);
    for (const name in lbnames) {
      lbnames[name] = res.data.leaderboards[lbnames[name]].length
        ? res.data.leaderboards[lbnames[name]].map((lb: any) => new Leaderboard(lb))
        : [];
    }
    return lbnames;
  }
}

export default getLeaderboards;
