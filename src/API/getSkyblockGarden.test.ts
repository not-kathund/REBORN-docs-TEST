import SkyblockGarden, {
  SkyblockGardenCropMilestones,
  SkyblockGardenComposter,
  SkyblockGardenVisitor,
  SkyblockGarenCrops
} from '../structures/SkyBlock/SkyblockGarden';
import { SkyblockSkillLevel } from '../utils/SkyblockUtils';
import { expect, expectTypeOf, test } from 'vitest';
import Client from '../Client';
import Errors from '../Errors';
const errors = new Errors();

test('getSkyblockGarden (no input)', () => {
  const client = new Client(process.env.key ?? '', { cache: false, checkForUpdates: false });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  expect(() => client.getSkyblockGarden()).rejects.toThrowError(errors.NO_UUID);
  client.destroy();
});

test('getSkyblockGarden (raw)', async () => {
  const client = new Client(process.env.key ?? '', { cache: false, checkForUpdates: false });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = await client.getSkyblockGarden('805c9751-0ff1-4cb6-8e9c-1067bf3bc601', { raw: true });
  expect(data).toBeDefined();
  expectTypeOf(data).toEqualTypeOf<object>();
  client.destroy();
});

test('getSkyblockGarden', async () => {
  const client = new Client(process.env.key ?? '', { cache: false, checkForUpdates: false });
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const data = await client.getSkyblockGarden('805c9751-0ff1-4cb6-8e9c-1067bf3bc601');
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(SkyblockGarden);
  expectTypeOf(data).toEqualTypeOf<SkyblockGarden>();

  expect(data.level).toBeDefined();
  expectTypeOf(data.level).toEqualTypeOf<SkyblockSkillLevel>();

  expect(data.barnSkin).toBeDefined();
  expectTypeOf(data.barnSkin).toEqualTypeOf<string>();

  expect(data.unlockedPlots).toBeDefined();
  expectTypeOf(data.unlockedPlots).toEqualTypeOf<string[]>();

  expect(data.visitors).toBeDefined();
  expectTypeOf(data.visitors).toEqualTypeOf<SkyblockGardenVisitor>();

  expect(data.cropMilestones).toBeDefined();
  expectTypeOf(data.cropMilestones).toEqualTypeOf<SkyblockGardenCropMilestones>();

  expect(data.composter).toBeDefined();
  expectTypeOf(data.composter).toEqualTypeOf<SkyblockGardenComposter>();

  expect(data.cropUpgrades).toBeDefined();
  expectTypeOf(data.cropUpgrades).toEqualTypeOf<SkyblockGarenCrops>();

  client.destroy();
});