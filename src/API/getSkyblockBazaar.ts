import Client from '../Client';
import Endpoint from '../Private/Endpoint';
import Product from '../structures/SkyBlock/Bazaar/Product';
import { RequestData, RequestOptions } from '../Private/RequestHandler';

class getSkyblockBazaar extends Endpoint {
  readonly client: Client;
  constructor(client: Client) {
    super(client);
    this.client = client;
  }

  async execute(options?: RequestOptions): Promise<Product[] | RequestData> {
    const res = await this.client.requestHandler.request('/skyblock/bazaar', options);
    if (res.options.raw) return res;
    return Object.keys(res.data.products).map((x) => new Product(res.data.products[x]));
  }
}

export default getSkyblockBazaar;
