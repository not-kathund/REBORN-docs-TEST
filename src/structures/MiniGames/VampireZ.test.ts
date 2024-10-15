import VampireZ, { VampireZRole } from './VampireZ.js';
import { expect, expectTypeOf, test } from 'vitest';

test('VampireZ', () => {
  const data = new VampireZ({ stats: 'meow' });
  expect(data).toBeDefined();
  expect(data).toBeInstanceOf(VampireZ);
  expectTypeOf(data).toEqualTypeOf<VampireZ>();
  expect(data.coins).toBeDefined();
  expect(data.coins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.coins).toEqualTypeOf<number>();
  expect(data.goldBought).toBeDefined();
  expect(data.goldBought).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.goldBought).toEqualTypeOf<number>();
  expect(data.blood).toBeDefined();
  expectTypeOf(data.blood).toEqualTypeOf<boolean>();
  expect(data.zombieKills).toBeDefined();
  expect(data.zombieKills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.zombieKills).toEqualTypeOf<number>();
  expect(data.human).toBeDefined();
  expectTypeOf(data.human).toEqualTypeOf<VampireZRole>();
  expect(data.human.kills).toBeDefined();
  expect(data.human.kills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.human.kills).toEqualTypeOf<number>();
  expect(data.human.deaths).toBeDefined();
  expect(data.human.deaths).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.human.deaths).toEqualTypeOf<number>();
  expect(data.human.KDR).toBeDefined();
  expect(data.human.KDR).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.human.KDR).toEqualTypeOf<number>();
  expect(data.human.wins).toBeDefined();
  expect(data.human.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.human.wins).toEqualTypeOf<number>();
  expect(data.vampire).toBeDefined();
  expectTypeOf(data.vampire).toEqualTypeOf<VampireZRole>();
  expect(data.vampire.kills).toBeDefined();
  expect(data.vampire.kills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.vampire.kills).toEqualTypeOf<number>();
  expect(data.vampire.deaths).toBeDefined();
  expect(data.vampire.deaths).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.vampire.deaths).toEqualTypeOf<number>();
  expect(data.vampire.KDR).toBeDefined();
  expect(data.vampire.KDR).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.vampire.KDR).toEqualTypeOf<number>();
  expect(data.vampire.wins).toBeDefined();
  expect(data.vampire.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.vampire.wins).toEqualTypeOf<number>();
  expect(data.kills).toBeDefined();
  expect(data.kills).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.kills).toEqualTypeOf<number>();
  expect(data.deaths).toBeDefined();
  expect(data.deaths).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.deaths).toEqualTypeOf<number>();
  expect(data.KDR).toBeDefined();
  expect(data.KDR).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.KDR).toEqualTypeOf<number>();
  expect(data.wins).toBeDefined();
  expect(data.wins).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.wins).toEqualTypeOf<number>();
});