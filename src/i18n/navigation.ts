export const locales = ['fr', 'en'] as const;
export type Locale = (typeof locales)[number];

export const languageNames = { fr: 'Français', en: 'English' };

export const layoutText = {
	fr: {
		siteName: 'Projet de jumelage ENMV–ENVF',
		projectType: 'Projet de jumelage',
		publications: 'Actualités et ressources',
		sectionEmpty: 'Aucun contenu n’a encore été publié dans cette rubrique.',
		returnHome: 'Retour à l’accueil',
		institutions: 'Institutions',
		navigation: 'Navigation principale',
		menu: 'Menu',
		languages: 'Choix de la langue',
		skipLink: 'Aller au contenu principal',
		institutionalLinks: 'Liens institutionnels',
		legalNotice: 'Mentions légales',
		legalPlaceholder: 'À venir',
		languageHome: { fr: 'Accueil en français', en: 'Accueil en anglais' },
	},
	en: {
		siteName: 'ENMV–ENVF Twinning Project',
		projectType: 'Twinning Project',
		publications: 'News and resources',
		sectionEmpty: 'No content has been published in this section yet.',
		returnHome: 'Back to home',
		institutions: 'Institutions',
		navigation: 'Main navigation',
		menu: 'Menu',
		languages: 'Language selection',
		skipLink: 'Skip to main content',
		institutionalLinks: 'Institutional links',
		legalNotice: 'Legal notice',
		legalPlaceholder: 'Forthcoming',
		languageHome: { fr: 'French home page', en: 'English home page' },
	},
} satisfies Record<Locale, Record<string, string | Record<Locale, string>>>;

export const home = {
	fr: { slug: '', label: 'Accueil' },
	en: { slug: '', label: 'Home' },
};

export const project = {
	fr: { slug: 'projet', label: 'Projet' },
	en: { slug: 'project', label: 'Project' },
};

export const partners = {
	fr: { slug: 'partenaires-et-gouvernance', label: 'Partenaires et gouvernance' },
	en: { slug: 'partners-and-governance', label: 'Partners and Governance' },
};

export const workProgramme = {
	fr: { slug: 'programme-de-travail', label: 'Programme de travail' },
	en: { slug: 'work-programme', label: 'Work Programme' },
};

export const projectSections = [project, partners, workProgramme];

export const newsAndEvents = {
	fr: { slug: 'actualites-et-evenements', label: 'Actualités et événements' },
	en: { slug: 'news-and-events', label: 'News and Events' },
};

export const resultsAndResources = {
	fr: { slug: 'resultats-et-ressources', label: 'Résultats et ressources' },
	en: { slug: 'results-and-resources', label: 'Results and Resources' },
};

export const communicationAndMedia = {
	fr: { slug: 'communication-et-medias', label: 'Communication et médias' },
	en: { slug: 'communication-and-media', label: 'Communication and Media' },
};

export const publicationSections = [
	newsAndEvents,
	resultsAndResources,
	communicationAndMedia,
] satisfies Record<Locale, { slug: string; label: string }>[];

export const contact = {
	fr: { slug: 'contact', label: 'Contact' },
	en: { slug: 'contact', label: 'Contact' },
};

export const sections = [...projectSections, ...publicationSections, contact];

export const navigation = [home, ...sections];

export function localizedPath(locale: Locale, slug = '') {
	return slug ? `/${locale}/${slug}/` : `/${locale}/`;
}

export function withTrailingSlash(pathname: string) {
	return pathname.endsWith('/') ? pathname : `${pathname}/`;
}
