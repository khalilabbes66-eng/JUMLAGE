import type { Locale } from '../i18n/navigation';

export type Localized<T> = Record<Locale, T>;
export type WorkPackageId = 'wp1' | 'wp2' | 'wp3';
export type InstitutionId = 'enmv' | 'envt' | 'enva' | 'oniris' | 'vetagro';
export type Committee = 'restricted' | 'extended';
export type ResultsTopic = 'competencies' | 'curriculum' | 'programme' | 'pedagogy' | 'clinical' | 'library';

export interface Publication {
	publicationStatus: 'draft' | 'published';
	authorizationStatus: 'pending' | 'authorized' | 'restricted';
}

export interface ImageAsset extends Publication {
	src: string;
	width: number;
	height: number;
	alt: string;
	caption?: string;
	credit?: string;
	sources?: readonly { src: string; width: number }[];
}

export interface Institution {
	id: InstitutionId;
	name: string;
	country: Localized<string>;
	website: string;
}

export interface Person extends Publication {
	id: string;
	fullName?: string;
	portrait?: Partial<Localized<ImageAsset>>;
	academicTitle?: Partial<Localized<string>>;
	discipline?: Partial<Localized<string>>;
	expertise?: Partial<Localized<string>>;
	institution: InstitutionId;
	workPackages: readonly WorkPackageId[];
	institutionalRole?: Partial<Localized<string>>;
	assignments: readonly ('coordination' | 'work-package-coordinator' | 'twinning-team')[];
	committees: readonly Committee[];
}

export interface Activity {
	id: string;
	title: Localized<string>;
	relatedArticleIds?: readonly string[];
	relatedResourceIds?: readonly string[];
}

export interface WorkPackage {
	id: WorkPackageId;
	code: string;
	title: Localized<string>;
	activities: readonly Activity[];
	focus?: readonly Localized<string>[];
	relatedArticleIds?: readonly string[];
	relatedResourceIds?: readonly string[];
}

export interface Article extends Publication {
	id: string;
	translationKey: string;
	slug: string;
	language: Locale;
	title: string;
	summary: string;
	eventDate?: string;
	publicationDate: string;
	location?: string;
	category: 'news' | 'event' | 'workshop';
	workPackage?: WorkPackageId;
	activity?: string;
	featuredImage?: ImageAsset;
	context?: string;
	participants?: readonly string[];
	workCompleted?: string;
	outcomes?: string;
	perspectives?: string;
	gallery?: readonly ImageAsset[];
	relatedResourceIds?: readonly string[];
	relatedArticleIds?: readonly string[];
}

export type ResourceCategory = 'reports' | 'frameworks' | 'methodology' | 'education' | 'publications' | 'communications' | 'international';
export type ResourceLanguage = Locale | 'multilingual';

export interface Resource extends Publication {
	id: string;
	title: string;
	authors: readonly string[];
	date?: string;
	version?: string;
	category: ResourceCategory;
	workPackage?: WorkPackageId;
	activity?: string;
	topic?: ResultsTopic;
	language: ResourceLanguage;
	summary: string;
	access: { type: 'consultation' | 'download' | 'external'; href: string };
}

type ContentReference = { type: 'article' | 'resource'; id: string };

export type Media = Publication & {
	id: string;
	language: Locale;
	title: string;
	summary?: string;
} & (
	| { kind: 'gallery'; photos: readonly ImageAsset[] }
	| { kind: 'video'; provider: 'youtube' | 'vimeo'; videoId: string; transcriptHref?: string }
	| { kind: 'press'; outlet: string; date?: string; source: ContentReference | { type: 'external'; href: string } }
	| { kind: 'communication'; source: ContentReference }
);

export interface ContactInformation extends Publication {
	id: string;
	institution?: InstitutionId;
	label: Localized<string>;
	email?: string;
	telephone?: string;
	address?: readonly string[];
}

export interface CompetencyNode {
	id: string;
	title: string;
	description?: string;
}

export interface CompetencyFramework extends Publication {
	macroCompetencies: readonly (CompetencyNode & {
		subCompetencies: readonly (CompetencyNode & { capacities: readonly CompetencyNode[] })[];
	})[];
}

export type CurriculumContribution = 'direct' | 'indirect' | 'absent';

export interface CurriculumAnalysis extends Publication {
	subCompetencies: readonly { id: string; title: string }[];
	rows: readonly {
		id: string;
		title: string;
		contributions: Partial<Record<string, CurriculumContribution>>;
	}[];
	gaps: readonly { title: string; description: string }[];
}
