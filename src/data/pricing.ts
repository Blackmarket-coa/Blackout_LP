export interface FeatureFlag {
	name: string
	included: boolean
	highlight: boolean
}

export interface PricingTier {
	name: string
	price: number
	unit: string
	badge: string | null
	featured: boolean
	description: string
	features: FeatureFlag[]
}

export const individualTiers: PricingTier[] = [
	{
		name: 'Free',
		price: 0,
		unit: 'forever',
		badge: null,
		featured: false,
		description: 'Secure communication for everyone.',
		features: [
			{ name: 'Full E2EE messaging & calls', included: true, highlight: true },
			{ name: 'Governance & voting tools', included: true, highlight: true },
			{ name: 'Federation support', included: true, highlight: false },
			{ name: 'Basic steganography (LSB)', included: true, highlight: false },
			{ name: '1 GB encrypted storage', included: true, highlight: false },
			{ name: 'Advanced steg codecs', included: false, highlight: false },
			{ name: 'Priority federation relay', included: false, highlight: false },
			{ name: 'Animated avatar', included: false, highlight: false }
		]
	},
	{
		name: 'Signal',
		price: 4.99,
		unit: 'month',
		badge: 'SIGNAL',
		featured: true,
		description: 'Advanced privacy tools for individuals.',
		features: [
			{ name: 'Everything in Free', included: true, highlight: true },
			{ name: 'Advanced steganography (DCT, audio, batch)', included: true, highlight: true },
			{ name: 'Priority federation relay', included: true, highlight: true },
			{ name: '10 GB encrypted storage', included: true, highlight: false },
			{ name: 'Animated solarpunk avatar', included: true, highlight: false },
			{ name: 'Cross-server identity badge', included: true, highlight: false },
			{ name: 'Custom encrypted sticker packs', included: true, highlight: false },
			{ name: 'Coalition Boost discount ($3.49)', included: true, highlight: false }
		]
	},
	{
		name: 'Signal+',
		price: 9.99,
		unit: 'month',
		badge: null,
		featured: false,
		description: 'Power user. Full sovereignty toolkit.',
		features: [
			{ name: 'Everything in Signal', included: true, highlight: true },
			{ name: '50 GB encrypted storage', included: true, highlight: true },
			{ name: 'Steganographic voting', included: true, highlight: true },
			{ name: 'Dedicated relay node access', included: true, highlight: false },
			{ name: 'Module marketplace early access', included: true, highlight: false },
			{ name: '1099 bounty payroll generation', included: true, highlight: false },
			{ name: 'Governance template library', included: true, highlight: false },
			{ name: 'Priority support', included: true, highlight: false }
		]
	}
]

export const orgTiers: PricingTier[] = [
	{
		name: 'Community',
		price: 15,
		unit: 'month',
		badge: null,
		featured: false,
		description: 'Up to 100 members, 3 spaces.',
		features: [
			{ name: 'All free features for all members', included: true, highlight: true },
			{ name: '10 GB community storage', included: true, highlight: false },
			{ name: 'Custom branding', included: true, highlight: false },
			{ name: 'Priority federation', included: true, highlight: false },
			{ name: 'Governance analytics', included: true, highlight: false },
			{ name: 'SSO / admin API', included: false, highlight: false },
			{ name: 'SFU townhall video', included: false, highlight: false }
		]
	},
	{
		name: 'Organization',
		price: 49,
		unit: 'month',
		badge: 'SOVEREIGN',
		featured: true,
		description: 'Up to 500 members, unlimited spaces.',
		features: [
			{ name: 'Everything in Community', included: true, highlight: true },
			{ name: 'SFU townhall video (50+)', included: true, highlight: true },
			{ name: 'SSO integration', included: true, highlight: true },
			{ name: '50 GB community storage', included: true, highlight: false },
			{ name: 'Admin API access', included: true, highlight: false },
			{ name: 'Steg-voting for elections', included: true, highlight: false },
			{ name: 'Custom governance templates', included: true, highlight: false }
		]
	},
	{
		name: 'Federation',
		price: 99,
		unit: 'month',
		badge: null,
		featured: false,
		description: 'Unlimited members. Dedicated instance.',
		features: [
			{ name: 'Everything in Organization', included: true, highlight: true },
			{ name: 'Dedicated homeserver instance', included: true, highlight: true },
			{ name: 'Self-healing federation', included: true, highlight: true },
			{ name: '200 GB storage', included: true, highlight: false },
			{ name: 'Custom domain', included: true, highlight: false },
			{ name: 'SLA guarantee', included: true, highlight: false },
			{ name: 'Phone support', included: true, highlight: false }
		]
	}
]

export const boostTiers = [
	{
		name: 'Tier 1',
		boosts: 2,
		features: '256Kbps voice, custom homeserver banner, Adinkra rank badge'
	},
	{ name: 'Tier 2', boosts: 5, features: 'TURN/STUN priority, 1080p video, custom invite links' },
	{ name: 'Tier 3', boosts: 10, features: 'Dedicated relay node, 10 GB community storage, townhall SFU' }
]

export const addons = [
	{
		name: 'Space Subscriptions',
		price: '95/5 split',
		description: 'Communities charge dues, workshop fees, governance access. Blackout takes 5%.'
	},
	{
		name: 'FreeBlackMarket Bridge',
		price: '3% commission',
		description: 'Sell digital products inside encrypted rooms via BMC payment rails.'
	},
	{
		name: 'Coalition Quests',
		price: '5% facilitation',
		description: 'Bounty boards. Orgs post tasks, members earn FBM credits. Mutual aid, not ads.'
	},
	{
		name: 'Module Marketplace',
		price: '85/15 split',
		description: 'Third-party governance widgets, voting algorithms, treasury dashboards.'
	},
	{
		name: 'Blackbox Hardware',
		price: '$99–$349',
		description: 'Pre-flashed mesh nodes (RPi 4/5, Orange Pi). Optional $9–19/mo managed service.'
	},
	{
		name: 'Federation Insurance',
		price: '$19/mo',
		description: 'CRDT auto-rebuild from peer nodes. Uptime SLA backed by gossip mesh.'
	}
]
