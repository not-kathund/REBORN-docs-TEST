import Skills from './Skills';
import { SkillLevel } from './Types';
import { expect, expectTypeOf, test } from 'vitest';

test('Skills', () => {
  const data = new Skills({ stats: 'meow' });
  expect(data.combat).toBeDefined();
  expectTypeOf(data.combat).toEqualTypeOf<SkillLevel>();
  expect(data.farming).toBeDefined();
  expectTypeOf(data.farming).toEqualTypeOf<SkillLevel>();
  expect(data.fishing).toBeDefined();
  expectTypeOf(data.fishing).toEqualTypeOf<SkillLevel>();
  expect(data.mining).toBeDefined();
  expectTypeOf(data.mining).toEqualTypeOf<SkillLevel>();
  expect(data.foraging).toBeDefined();
  expectTypeOf(data.foraging).toEqualTypeOf<SkillLevel>();
  expect(data.enchanting).toBeDefined();
  expectTypeOf(data.enchanting).toEqualTypeOf<SkillLevel>();
  expect(data.alchemy).toBeDefined();
  expectTypeOf(data.alchemy).toEqualTypeOf<SkillLevel>();
  expect(data.carpentry).toBeDefined();
  expectTypeOf(data.carpentry).toEqualTypeOf<SkillLevel>();
  expect(data.runecrafting).toBeDefined();
  expectTypeOf(data.runecrafting).toEqualTypeOf<SkillLevel>();
  expect(data.taming).toBeDefined();
  expectTypeOf(data.taming).toEqualTypeOf<SkillLevel>();
  expect(data.social).toBeDefined();
  expectTypeOf(data.social).toEqualTypeOf<SkillLevel>();
  expect(data.average).toBeDefined();
  expect(data.average).toBeGreaterThanOrEqual(0);
  expectTypeOf(data.average).toEqualTypeOf<number>();
});