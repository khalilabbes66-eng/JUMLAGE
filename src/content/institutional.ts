import { workPackages as homepageWorkPackages } from '../i18n/homepage';
import type {
	Article, CompetencyFramework, ContactInformation, CurriculumAnalysis, Institution, Localized,
	Media, Person, Resource, WorkPackage,
} from '../types/institutional';

const france = { fr: 'France', en: 'France' };
export const institutions: readonly Institution[] = [
	{ id: 'enmv', name: 'ENMV Sidi Thabet', country: { fr: 'Tunisie', en: 'Tunisia' }, website: 'https://uma.rnu.tn/fr/university-establishments' },
	{ id: 'envt', name: 'ENVT Toulouse', country: france, website: 'https://envt.fr/' },
	{ id: 'enva', name: 'EnvA', country: france, website: 'https://www.vet-alfort.fr/' },
	{ id: 'oniris', name: 'Oniris VetAgroBio Nantes', country: france, website: 'https://www.oniris-nantes.fr/' },
	{ id: 'vetagro', name: 'VetAgro Sup Lyon', country: france, website: 'https://www.vetagro-sup.fr/' },
];

export const woah = {
	fr: { name: 'Organisation mondiale de la santé animale (OMSA)', website: 'https://www.woah.org/fr/accueil/' },
	en: { name: 'World Organisation for Animal Health (WOAH)', website: 'https://www.woah.org/en/home/' },
};

const [wp1, wp2, wp3] = homepageWorkPackages;
export const programme: readonly WorkPackage[] = [
	{
		id: 'wp1', code: wp1.code, title: { fr: wp1.fr, en: wp1.en },
		activities: [
			{ id: '1.1', title: { fr: 'Analyse des besoins', en: 'Needs analysis' } },
			{ id: '1.2', title: { fr: 'État des lieux de la formation', en: 'Review of current training' } },
			{ id: '1.3', title: { fr: 'Réforme curriculaire selon l’approche par compétences', en: 'Competency-based curriculum reform' } },
			{ id: '1.4', title: { fr: 'Nouvelles méthodes pédagogiques', en: 'New teaching methods' } },
			{ id: '1.5', title: { fr: 'Étudiants acteurs de leur formation', en: 'Students as active participants in their education' } },
			{ id: '1.6', title: { fr: 'Synthèse et restitution', en: 'Synthesis and presentation of findings' } },
		],
	},
	{
		id: 'wp2', code: wp2.code, title: { fr: wp2.fr, en: wp2.en },
		activities: [
			{ id: '2.1', title: { fr: 'Repenser les moyens et objectifs pédagogiques', en: 'Rethinking teaching resources and objectives' } },
			{ id: '2.2', title: { fr: 'Environnement de formation clinique', en: 'Clinical training environment' } },
			{ id: '2.3', title: { fr: 'Enseignement des urgences chez les animaux de compagnie et réflexion sur l’organisation des urgences', en: 'Teaching companion animal emergency care and reviewing how emergency services are organised' } },
			{ id: '2.4', title: { fr: 'Synthèse', en: 'Synthesis' } },
		],
	},
	{
		id: 'wp3', code: wp3.code, title: { fr: wp3.fr, en: wp3.en },
		focus: [
			{ fr: 'Coordination', en: 'Coordination' },
			{ fr: 'Gestion du projet', en: 'Project management' },
			{ fr: 'Communication', en: 'Communication' },
		],
		activities: [{ id: '3.1', title: { fr: 'Restitution finale', en: 'Final presentation of findings' } }],
	},
];

// Replace these server-side sources with approved records from the CMS.
export const people: readonly Person[] = [];
export const articles: readonly Article[] = [];
export const resources: readonly Resource[] = [];
export const media: readonly Media[] = [];
export const contactInformation: readonly ContactInformation[] = [];
export const competencyFramework: Localized<CompetencyFramework | undefined> = { fr: undefined, en: undefined };
export const curriculumAnalysis: Localized<CurriculumAnalysis | undefined> = { fr: undefined, en: undefined };
