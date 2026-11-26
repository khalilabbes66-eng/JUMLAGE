import type { Locale } from './navigation';

export interface NewsEntry {
	title: string;
	href: string;
	summary?: string;
	date?: { iso: string; label: string };
}

export const projectPeriod = '2025–2028';

export const workPackages = [
	{ code: 'WP1', fr: 'Formation initiale', en: 'Initial veterinary training' },
	{ code: 'WP2', fr: 'Enseignement clinique', en: 'Clinical teaching' },
	{ code: 'WP3', fr: 'Organisation et communication', en: 'Organisation and communication' },
] as const;

export const homepageText = {
	fr: {
		photoPlaceholder: 'Photographie à venir',
		exploreProject: 'Découvrir le projet',
		figures: 'Le projet en chiffres',
		figureLabels: { years: 'ans', countries: 'pays', schools: 'écoles vétérinaires', packages: 'volets de travail' },
		aboutHeading: 'À propos du jumelage',
		aboutDescription: 'Le jumelage ENMV–ENVF porte sur la formation vétérinaire. Son programme de travail couvre la formation initiale, l’enseignement clinique ainsi que l’organisation et la communication.',
		partnersLink: 'Voir les partenaires et la gouvernance',
		workPackages: 'Volets de travail',
		programmeLink: 'Voir le programme de travail',
		latestNews: 'Dernières actualités',
		newsEmpty: 'Aucune actualité n’a encore été publiée en français.',
		newsLink: 'Voir les actualités et événements',
		resources: 'Ressources',
		resourcesEmpty: 'Aucune ressource n’a encore été publiée en français.',
		resourcesLink: 'Voir les résultats et ressources',
		placeholder: 'À venir',
		exploreSite: 'Explorer le site',
	},
	en: {
		photoPlaceholder: 'Photo forthcoming',
		exploreProject: 'Explore the project',
		figures: 'The project in figures',
		figureLabels: { years: 'years', countries: 'countries', schools: 'veterinary schools', packages: 'work packages' },
		aboutHeading: 'About the twinning project',
		aboutDescription: 'The ENMV–ENVF twinning project focuses on veterinary education. Its work programme covers initial veterinary training, clinical teaching, and organisation and communication.',
		partnersLink: 'See partners and governance',
		workPackages: 'Work packages',
		programmeLink: 'See the work programme',
		latestNews: 'Latest news',
		newsEmpty: 'No news has been published in English yet.',
		newsLink: 'See news and events',
		resources: 'Resources',
		resourcesEmpty: 'No resources have been published in English yet.',
		resourcesLink: 'See results and resources',
		placeholder: 'Forthcoming',
		exploreSite: 'Explore the site',
	},
};

export function getKeyFigures(locale: Locale) {
	const labels = homepageText[locale].figureLabels;

	return [
		{ value: 3, label: labels.years, detail: projectPeriod },
		{ value: 2, label: labels.countries },
		{ value: 5, label: labels.schools },
		{ value: workPackages.length, label: labels.packages },
	];
}
