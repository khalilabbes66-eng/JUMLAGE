import { articles, resources } from '../content/institutional';
import { localizedPath, newsAndEvents, resultsAndResources, workProgramme, type Locale } from '../i18n/navigation';
import type { Article, Media, Publication, Resource, ResultsTopic, WorkPackageId } from '../types/institutional';

export const resultTopics = [
	{ id: 'competencies', fr: { slug: 'referentiel-de-competences', title: 'Référentiel de compétences' }, en: { slug: 'competency-framework', title: 'Competency Framework' } },
	{ id: 'curriculum', fr: { slug: 'analyse-curriculaire', title: 'Analyse curriculaire' }, en: { slug: 'curriculum-analysis', title: 'Curriculum Analysis' } },
	{ id: 'programme', fr: { slug: 'evolution-du-cursus-et-de-l-internat', title: 'Évolution du cursus et de l’internat' }, en: { slug: 'curriculum-and-internship-development', title: 'Curriculum and Internship Development' } },
	{ id: 'pedagogy', fr: { slug: 'innovation-pedagogique', title: 'Innovation pédagogique' }, en: { slug: 'teaching-innovation', title: 'Teaching Innovation' } },
	{ id: 'clinical', fr: { slug: 'modernisation-clinique', title: 'Modernisation clinique' }, en: { slug: 'clinical-modernisation', title: 'Clinical Modernisation' } },
	{ id: 'library', fr: { slug: 'bibliotheque-documentaire', title: 'Bibliothèque documentaire' }, en: { slug: 'document-library', title: 'Document Library' } },
] as const satisfies readonly ({ id: ResultsTopic } & Record<Locale, { slug: string; title: string }>)[];

export function isPublic(record: Publication): boolean {
	return record.publicationStatus === 'published' && record.authorizationStatus === 'authorized';
}

export function publicHref(value: string): string | undefined {
	if (value !== value.trim() || /[\x00-\x20\\]/.test(value)) return undefined;
	if (value.startsWith('/') && !value.startsWith('//')) return value;

	try {
		const url = new URL(value);
		if (url.protocol === 'https:' && !url.username && !url.password) return url.href;
	} catch {
		return undefined;
	}
}

export function publicArticles(locale: Locale) {
	return articles
		.filter((article) => article.language === locale && isPublic(article) && /^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(article.slug))
		.sort((a, b) => b.publicationDate.localeCompare(a.publicationDate));
}

export function publicResources() {
	return resources.filter((resource) => isPublic(resource) && Boolean(publicHref(resource.access.href)));
}

export function articlePath(article: Article) {
	return localizedPath(article.language, newsAndEvents[article.language].slug + '/' + article.slug);
}

export function packagePath(locale: Locale, id: WorkPackageId) {
	return localizedPath(locale, workProgramme[locale].slug + '/' + id);
}

export function topicPath(locale: Locale, topic: (typeof resultTopics)[number]) {
	return localizedPath(locale, resultsAndResources[locale].slug + '/' + topic[locale].slug);
}

export function alternateLocale(locale: Locale): Locale {
	return locale === 'fr' ? 'en' : 'fr';
}

export function videoLinks(video: Extract<Media, { kind: 'video' }>) {
	const { provider, videoId } = video;
	if (provider === 'youtube' && /^[A-Za-z0-9_-]{11}$/.test(videoId)) {
		return { embed: 'https://www.youtube-nocookie.com/embed/' + videoId, watch: 'https://www.youtube.com/watch?v=' + videoId };
	}
	if (provider === 'vimeo' && /^\d+$/.test(videoId)) {
		return { embed: 'https://player.vimeo.com/video/' + videoId, watch: 'https://vimeo.com/' + videoId };
	}
}

export function formatDate(date: string, locale: Locale) {
	const value = new Date(date);
	return Number.isFinite(value.getTime())
		? new Intl.DateTimeFormat(locale, { dateStyle: 'long', timeZone: 'UTC' }).format(value)
		: date;
}

export function relatedEntries(
	locale: Locale,
	{ workPackage, activity, articleIds = [], resourceIds = [] }: {
		workPackage?: WorkPackageId;
		activity?: string;
		articleIds?: readonly string[];
		resourceIds?: readonly string[];
	},
): { articles: Article[]; resources: Resource[] } {
	const matches = (item: { workPackage?: WorkPackageId; activity?: string }) =>
		activity ? item.activity === activity : Boolean(workPackage && item.workPackage === workPackage);

	return {
		articles: publicArticles(locale).filter((item) => articleIds.includes(item.id) || matches(item)),
		resources: publicResources().filter((item) => resourceIds.includes(item.id) || matches(item)),
	};
}
