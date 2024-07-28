import { SkyblockRarity } from '../../typings';
import Constants from '../../utils/Constants';

/**
 * Skyblock Pet class
 */
class SkyblockPet {
  uuid: string;
  type: string;
  xp: number;
  active: boolean;
  rarity: SkyblockRarity;
  petScore: number;
  heldItem: string | null;
  candyUsed: number;
  skin: string | null;
  constructor(data: Record<string, any>) {
    this.uuid = data.uuid;
    this.type = data.type;
    this.xp = data.exp || 0;
    this.active = Boolean(data.active);
    this.rarity = data.tier;
    this.petScore = (Constants.petScore as { [key: number]: number })[data.tier] || 0;
    this.heldItem = data.heldItem ? data.heldItem.replace(/^PET_ITEM_/, '') : null;
    this.candyUsed = data.candyUsed || 0;
    this.skin = data.skin;
  }
}
export default SkyblockPet;