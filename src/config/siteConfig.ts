import type { SiteConfig } from "../types/config";

// 定义站点语言
const SITE_LANG = "zh_CN";

export const siteConfig: SiteConfig = {
	title: "春物 · 侍奉部",
	subtitle: "我的青春恋爱物语果然有问题。",
	siteURL: "https://oregairu.site/",
	siteStartDate: "2013-04-04",
	timeZone: "Asia/Shanghai",
	lang: SITE_LANG,
	themeColor: {
		hue: 210,
		fixed: false,
	},
	featurePages: {
		anime: true,
		diary: true,
		friends: true,
		projects: true,
		skills: true,
		timeline: true,
		albums: true,
		devices: true,
		aiTools: true,
	},
	navbarTitle: {
		mode: "text-icon",
		text: "侍奉部",
		icon: "assets/home/home.webp",
		logo: "assets/home/default-logo.webp",
	},
	pageScaling: {
		enable: false,
		targetWidth: 2000,
	},
	font: {
		mode: "custom",
	},
	bangumi: {
		userId: "your-bangumi-id",
		fetchOnDev: false,
	},
	bilibili: {
		vmid: "your-bilibili-vmid",
		fetchOnDev: false,
		coverMirror: "",
		useWebp: true,
	},
	anime: {
		mode: "local",
	},
	diaryApiUrl: "",
	postListLayout: {
		defaultMode: "list",
		enable: true,
		allowSwitch: true,
		categoryBar: {
			enable: true,
		},
	},
	ultrawidePostLayout: {
		enable: true,
		allowSwitch: true,
	},
	tagStyle: {
		useNewStyle: false,
	},
	wallpaperMode: {
		defaultMode: "banner",
		showModeSwitchOnMobile: "both",
	},
	banner: {
		src: {
			desktop: [
				"/assets/desktop-banner/1.webp",
				"/assets/desktop-banner/2.webp",
				"/assets/desktop-banner/3.webp",
				"/assets/desktop-banner/4.webp",
			],
			mobile: [
				"/assets/mobile-banner/1.webp",
				"/assets/mobile-banner/2.webp",
				"/assets/mobile-banner/3.webp",
				"/assets/mobile-banner/4.webp",
			],
		},
		position: "center",
		carousel: {
			enable: true,
			interval: 3,
			switchable: true,
		},
		waves: {
			enable: true,
			performanceMode: false,
			mobileDisable: false,
			switchable: true,
		},
		imageApi: {
			enable: false,
			url: "http://domain.com/api_v2.php?format=text&count=4",
		},
		homeText: {
			enable: true,
			title: "奉仕部へようこそ",
			switchable: true,
			subtitle: [
				"看吧，很简单吧，谁都不会受伤的世界完成了。",
				"我想要的，并不是话语，而是真实。",
				"只要稍微打个招呼就会胡思乱想，要是互相发短信，心中还会起波澜。",
				"误会不过是误会，并不是真实。",
				"努力是不会背叛自己的，虽然梦想会背叛。",
			],
			typewriter: {
				enable: true,
				speed: 100,
				deleteSpeed: 50,
				pauseTime: 2000,
			},
		},
		credit: {
			enable: false,
			text: "Describe",
			url: "",
		},
		navbar: {
			transparentMode: "semifull",
		},
	},
	toc: {
		enable: true,
		mobileTop: true,
		desktopSidebar: true,
		floating: true,
		depth: 2,
		useJapaneseBadge: true,
	},
	showCoverInContent: true,
	generateOgImages: false,
	favicon: [],
	showLastModified: true,
	pageProgressBar: {
		enable: true,
		height: 3,
		duration: 6000,
	},
	thirdPartyAnalytics: {
		enable: false,
		clarityId: "",
	},
	card: {
		border: true,
		followTheme: false,
	},
	imageOptimization: {
		formats: "webp",
		quality: 85,
		noReferrerDomains: [
			"*.hdslb.com",
		],
	},
};

export { SITE_LANG };
