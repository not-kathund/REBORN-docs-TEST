import GovernmentData from '../structures/SkyBlock/Static/Government.js';
import { RequestOptions } from '../Private/Requests';
import Endpoint from '../Private/Endpoint.js';
import Client from '../Client.js';

class getSkyblockGovernment extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(options?: RequestOptions): Promise<GovernmentData> {
    const res = await this.client.requests.request('/resources/skyblock/election', options);
    if (res.raw) return res;
    return new GovernmentData(res);
  }
}

export default getSkyblockGovernment;
