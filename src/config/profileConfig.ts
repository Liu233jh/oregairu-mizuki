import type { ProfileConfig } from "../types/config";

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/avatar.webp",
	name: "比企谷 八幡",
	bio: "看吧，很简单吧，谁都不会受伤的世界完成了。",
	typewriter: {
		enable: true,
		speed: 80,
	},
	links: [
		{ name: "Bangumi", icon: "fa7-brands:bilibili", url: "https://bgm.tv/subject/47614" },
		{ name: "B站番剧", icon: "fa7-brands:bilibili", url: "https://www.bilibili.com/bangumi/media/md45051" },
		{ name: "维基百科", icon: "material-symbols:link", url: "https://zh.wikipedia.org/wiki/我的青春恋爱物语果然有问题。" },
	],
};
