import { greet } from '../src/main';

test('prints Hello Chintu!', () => {
    expect(greet('Chintu')).toBe(`Hello Chintu!`);
});

test('prints Hello Zura!', () => {
    expect(greet('Zura')).toBe(`Hello Zura!`);
});
