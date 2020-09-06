import { add } from '../lib';

/** @test {someModule} */
describe('someModule test suits', () => {
	/** @test {#add} */
	test('#add()', () => {
		expect(add(4, 4)).toBe(8);
	});
});
