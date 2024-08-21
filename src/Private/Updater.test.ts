import { expect, expectTypeOf, test, vi } from 'vitest';
import { version } from '../../package.json';
import Updater from './Updater';
import Client from '../Client';
import axios from 'axios';

test('Updater', () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '');
  expect(client).toBeDefined();
  expectTypeOf(client).toEqualTypeOf<Client>();

  expect(client.updater).toBeDefined();
  expectTypeOf(client.updater).toEqualTypeOf<Updater>();

  expect(client.updater.currentVersion).toBe(version);
  expect(client.updater.latestVersion).toBe('0.0.0');

  expect(client.updater.checkForUpdates).toBeDefined();
  expectTypeOf(client.updater.checkForUpdates).toBeFunction();
  expect(() => client.updater.checkForUpdates()).not.toThrow();

  expect(client.updater.getLatestVersion).toBeDefined();
  expectTypeOf(client.updater.getLatestVersion).toBeFunction();
  expect(() => client.updater.getLatestVersion()).not.toThrow();

  expect(client.updater.compareVersions).toBeDefined();
  expectTypeOf(client.updater.compareVersions).toBeFunction();
  expect(() => client.updater.compareVersions('1.0.0', '1.0.0')).not.toThrow();
  expect(client.updater.compareVersions('1.0.0', '1.0.0')).toBe(false);
  expect(client.updater.compareVersions('1.0.0', '1.0.1')).toBe(true);
  expect(client.updater.compareVersions('1.0.1', '1.0.0')).toBe(false);
  expect(client.updater.compareVersions('meow', '1.0.0')).toBe(false);

  client.destroy();
});

test('Updater (get latest version)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '');
  const mockRequest = { status: 200, data: { metadata: { 'dist-tags': { latest: '1.0.0' } } } };
  vi.spyOn(axios, 'get').mockResolvedValue(mockRequest);
  const data = await client.updater.getLatestVersion();
  expect(data).toBe('1.0.0');
  vi.restoreAllMocks();
  client.destroy();
});

test('Updater (get latest version error)', () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '');
  const mockRequest = { status: 404, data: { metadata: { 'dist-tags': { latest: '1.0.0' } } } };
  vi.spyOn(axios, 'get').mockResolvedValue(mockRequest);
  expect(() => client.updater.getLatestVersion()).rejects.toThrowError(client.errors.UPDATER_REQUEST_NOT_OK);
  vi.restoreAllMocks();
  client.destroy();
});

test('Updater (check version)', async () => {
  const client = new Client(process.env.HYPIXEL_KEY ?? '');
  const consoleLogSpy = vi.spyOn(console, 'log');
  client.updater.currentVersion = '1.0.0';
  const mockRequest = { status: 200, data: { metadata: { 'dist-tags': { latest: version } } } };
  vi.spyOn(axios, 'get').mockResolvedValue(mockRequest);
  await client.updater.checkForUpdates();
  expect(consoleLogSpy).toHaveBeenCalledWith(
    `New version of hypixel-api-reborn is available! Current version: 1.0.0, Latest version: ${version}`
  );
  client.destroy();
});
