// Footer Navigation
// ------------
// Description: The footer navigation data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface FooterAbout {
	title: string
	aboutText: string
	logo: Logo
}

export interface SubCategory {
	subCategory: string
	subCategoryLink: string
}

export interface FooterColumn {
	category: string
	subCategories: SubCategory[]
}

export interface SubFooter {
	copywriteText: string
}

export interface FooterData {
	footerAbout: FooterAbout
	footerColumns: FooterColumn[]
	subFooter: SubFooter
}

export const footerNavigationData: FooterData = {
	footerAbout: {
		title: 'BLACKOUT',
		aboutText:
			'Blackout is part of the Black Market Coalition. No tracking. No telemetry. Verify it yourself.',
		logo: {
			src: '/favicon.svg',
			alt: 'Blackout lock icon',
			text: 'BLACKOUT'
		}
	},
	footerColumns: [
		{
			category: 'Links',
			subCategories: [
				{ subCategory: 'GitHub', subCategoryLink: 'https://github.com/Blackmarket-coa' },
				{ subCategory: 'Documentation', subCategoryLink: 'https://docs.blackout.coop' },
				{ subCategory: 'Matrix', subCategoryLink: 'https://matrix.to/#/#blackout:matrix.org' },
				{ subCategory: 'Status', subCategoryLink: 'https://status.blackout.coop' }
			]
		}
	],
	subFooter: {
		copywriteText: '© Blackout 2026.'
	}
}
