/* eslint-disable no-console */
import { version } from '../../package.json';
import Client from '../Client';
import axios from 'axios';

class Updater {
  readonly client: Client;
  currentVersion: string;
  latestVersion: string;
  constructor(client: Client) {
    this.client = client;
    this.currentVersion = version;
    this.latestVersion = '0.0.0';
  }

  async checkForUpdates(): Promise<void> {
    this.latestVersion = (await this.getLatestVersion()) ?? '0.0.0';
    const compare = this.compareVersions(this.currentVersion, this.latestVersion);
    if (compare) {
      console.log(
        `New version of hypixel-api-reborn is available! Current version: ${
          this.currentVersion
        }, Latest version: ${this.latestVersion}`
      );
    }
  }

  async getLatestVersion(): Promise<string | void> {
    const request = await axios.get('https://registry.npmjs.org/hypixel-api-reborn');
    if (200 !== request.status) {
      console.log(this.client.errors.UPDATER_REQUEST_NOT_OK);
      return;
    }
    const metadata = await request.data;
    return metadata['dist-tags'].latest;
  }

  compareVersions(a: string, b: string): boolean {
    const pa = a.split('.');
    const pb = b.split('.');
    for (let i = 0; 3 > i; i++) {
      const na = Number(pa[i]);
      const nb = Number(pb[i]);
      if (na > nb) return false;
      if (nb > na) return true;
      if (!isNaN(na) && isNaN(nb)) return false;
      if (isNaN(na) && !isNaN(nb)) return true;
    }
    return false;
  }
}

export default Updater;