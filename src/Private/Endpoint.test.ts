import { expect, expectTypeOf, test } from 'vitest';
import Endpoint from './Endpoint';
import Client from '../Client';
import Errors from '../Errors';
const errors = new Errors();

test('Endpoint', () => {
  const client = new Client(process.env.key ?? '');
  expect(client).toBeDefined();
  expectTypeOf(client).toEqualTypeOf<Client>();

  const endpoint = new Endpoint(client);

  expect(endpoint).toBeDefined();
  expectTypeOf(endpoint).toEqualTypeOf<Endpoint>();

  expect(endpoint.client).toBeDefined();
  expectTypeOf(endpoint.client).toEqualTypeOf<Client>();

  expect(endpoint.execute).toBeDefined();
  expectTypeOf(endpoint.execute).toBeFunction();
  expect(() => endpoint.execute()).toThrowError(errors.NOT_IMPLEMENTED);

  client.destroy();
});