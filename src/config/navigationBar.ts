// Navigation Bar
// ------------
// Description: The navigation bar data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface NavSubItem {
	name: string
	link: string
}

export interface NavItem {
	name: string
	link: string
	submenu?: NavSubItem[]
}

export interface NavAction {
	name: string
	link: string
	style: string
	size: string
}

export interface NavData {
	logo: Logo
	navItems: NavItem[]
	navActions: NavAction[]
}

export const navigationBarData: NavData = {
	logo: {
		src: '/favicon.svg',
		alt: 'Blackout lock icon',
		text: 'BLACKOUT'
	},
	navItems: [
		{ name: 'Features', link: '/features' },
		{ name: 'Pricing', link: '/pricing' },
		{ name: 'Docs', link: 'https://docs.blackout.coop' },
		{ name: 'GitHub', link: 'https://github.com/Blackmarket-coa' }
	],
	navActions: []
}
