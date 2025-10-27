import { verses } from './verses.ts';

console.clear();

export const generate = () => {
	const values = Object.values(verses);
	return values[Math.floor(Math.random() * values.length)];
};

console.log(generate());
