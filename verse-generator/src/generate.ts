import { verses } from './verses.ts';

export const generate = () => {
	const values = Object.values(verses);
	return values[Math.floor(Math.random() * values.length)];
};
