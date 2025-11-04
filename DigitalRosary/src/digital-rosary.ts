import { mysteries, dayNames, prayers } from './data.ts';

// determine the mystery of the day
const dayOfWeek = new Date().toLocaleDateString('en-US', { weekday: 'long' });
const mysteryToday = dayNames[dayOfWeek.toString()];

export const prayersObj = {
	get startingPrayers() {
		return [
			`☩ Make the Sign of the Cross ☩\n\n${prayers.SignOfCross}`,
			`☩ Pray the "Apostles' Creed" ☩\n\n${prayers.ApostlesCreed}`,
			`☩ Pray the "Our Father" ☩\n\n${prayers.OurFather}`,
			`☩ Pray a "Hail Mary" for Faith ☩\n\n${prayers.HailMary}`,
			`☩ Pray a "Hail Mary" for Hope ☩\n\n${prayers.HailMary}`,
			`☩ Pray a "Hail Mary" for Charity ☩\n\n${prayers.HailMary}`,
			`☩ Pray the "Glory be" ☩\n\n${prayers.GloryBe}`,
			`☩ Today is ${dayOfWeek}, so we meditate on the 5 ${mysteryToday} mysteries ☩`,
		];
	},

	get mysteryPrayers() {
		const prayersList: string[] = [];

		for (let m = 1; m <= 5; m++) {
			prayersList.push(
				`☩ Announce ${mysteries[mysteryToday][m].description} ☩`,
				`☩ Pray the "Our Father" ☩\n\n${prayers.OurFather}`,
				`☩ While meditating on ${mysteries[mysteryToday][m].name} ☩`,
			);

			for (let h = 1; h <= 10; h++) {
				prayersList.push(
					`☩ ${h}. Meditate ☩\n\n${mysteries[mysteryToday][m][h]}\n\n☩ Pray a "Hail Mary" ☩\n\n${prayers.HailMary}`,
				);
			}

			prayersList.push(
				`☩ Pray the "Glory be" ☩\n\n${prayers.GloryBe}`,
				`☩ Pray the "Oh My Jesus" ☩\n\n${prayers.OhMyJesus}`,
			);
		}

		return prayersList;
	},

	get finalPrayers() {
		return [
			`☩ Pray the "Hail Holy Queen" ☩\n\n${prayers.HailHolyQueen}`,
			`☩ Pray the "Final Prayer" ☩\n\n${prayers.FinalPrayer}`,
			`☩ Make the Sign of the Cross ☩\n\n${prayers.SignOfCross}`,
		];
	},
};

export const getAllPrayers = (): string[] => [
	...prayersObj.startingPrayers,
	...prayersObj.mysteryPrayers,
	...prayersObj.finalPrayers,
];
