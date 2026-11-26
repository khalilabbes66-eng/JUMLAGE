import { projectPeriod } from './homepage';
import type { Locale } from './navigation';

export const projectSectionOrder = ['overview', 'cooperation', 'objectives', 'methodology', 'impact'] as const;
type ProjectSectionId = (typeof projectSectionOrder)[number];

interface ProjectSectionCopy {
	heading: string;
	paragraphs?: readonly string[];
	pending?: string;
}

interface ProjectPageCopy {
	title: string;
	kicker: string;
	intro: string;
	breadcrumbLabel: string;
	contentsLabel: string;
	pendingLabel: string;
	facts: ReadonlyArray<{ label: string; value: string }>;
	sections: Record<ProjectSectionId, ProjectSectionCopy>;
}

// Keep the section IDs stable when replacing this local copy with published locale records from Directus.
export const projectPageCopy: Record<Locale, ProjectPageCopy> = {
	fr: {
		title: 'Le projet',
		kicker: 'Jumelage institutionnel ENMV–ENVF',
		intro: 'Une coopération entre la Tunisie et la France dans le domaine de la formation vétérinaire.',
		breadcrumbLabel: 'Fil d’Ariane',
		contentsLabel: 'Sur cette page',
		pendingLabel: 'Contenu en attente de validation',
		facts: [
			{ label: 'Période', value: projectPeriod },
			{ label: 'Pays', value: 'Tunisie et France' },
			{ label: 'Écoles vétérinaires', value: '5' },
			{ label: 'Avec le soutien de', value: 'OMSA' },
		],
		sections: {
			overview: {
				heading: 'Présentation du projet',
				paragraphs: [
					`Le projet de jumelage institutionnel ENMV–ENVF se déroule sur la période ${projectPeriod} avec le soutien de l’Organisation mondiale de la santé animale (OMSA). Il réunit cinq écoles vétérinaires en Tunisie et en France autour de trois volets de travail.`,
				],
			},
			cooperation: {
				heading: 'Contexte et historique de la coopération',
				paragraphs: ['Le jumelage repose sur une coopération entre la Tunisie et la France dans le domaine de la formation vétérinaire.'],
				pending: 'Les repères historiques et la chronologie de cette coopération restent à valider.',
			},
			objectives: {
				heading: 'Objectifs du projet',
				paragraphs: ['Le projet porte sur la formation vétérinaire, avec des volets consacrés à la formation initiale et à l’enseignement clinique.'],
				pending: 'La formulation officielle des objectifs détaillés reste à valider.',
			},
			methodology: {
				heading: 'Approche et méthodologie',
				paragraphs: ['Le programme du jumelage s’organise en trois volets de travail.'],
				pending: 'Les modalités de mise en œuvre et de suivi restent à valider.',
			},
			impact: {
				heading: 'Ambition et impact attendu',
				pending: 'La formulation de l’ambition du projet, des effets attendus et des indicateurs reste à valider.',
			},
		},
	},
	en: {
		title: 'The Project',
		kicker: 'ENMV–ENVF institutional twinning',
		intro: 'Cooperation between Tunisia and France in veterinary education.',
		breadcrumbLabel: 'Breadcrumb',
		contentsLabel: 'On this page',
		pendingLabel: 'Content pending approval',
		facts: [
			{ label: 'Project period', value: projectPeriod },
			{ label: 'Countries', value: 'Tunisia and France' },
			{ label: 'Veterinary schools', value: '5' },
			{ label: 'Supported by', value: 'WOAH' },
		],
		sections: {
			overview: {
				heading: 'Project overview',
				paragraphs: [
					`The ENMV–ENVF institutional twinning project runs from ${projectPeriod}, with support from the World Organisation for Animal Health (WOAH). It brings together five veterinary schools in Tunisia and France and is organised into three work packages.`,
				],
			},
			cooperation: {
				heading: 'Background and historical cooperation',
				paragraphs: ['The twinning project is based on cooperation between Tunisia and France in veterinary education.'],
				pending: 'Historical milestones and the timeline of this cooperation are pending approval.',
			},
			objectives: {
				heading: 'Project objectives',
				paragraphs: ['The project focuses on veterinary education, with work packages covering initial veterinary training and clinical teaching.'],
				pending: 'The official wording of the detailed objectives is pending approval.',
			},
			methodology: {
				heading: 'Approach and methodology',
				paragraphs: ['The twinning work programme is organised into three work packages.'],
				pending: 'Implementation and monitoring details are pending approval.',
			},
			impact: {
				heading: 'Ambition and expected impact',
				pending: 'The project’s ambition, expected effects, and indicators are pending approval.',
			},
		},
	},
};
