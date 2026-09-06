import type { NavBarConfig } from "../types/config";
import { LinkPreset } from "../types/config";

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		{
			name: "角色",
			url: "/characters/",
			icon: "material-symbols:group",
			children: [
				{ name: "比企谷八幡", url: "/posts/hachiman/", icon: "material-symbols:person" },
				{ name: "雪之下雪乃", url: "/posts/yukino/", icon: "material-symbols:person" },
				{ name: "由比滨结衣", url: "/posts/yui/", icon: "material-symbols:person" },
				{ name: "一色彩羽", url: "/posts/iroha/", icon: "material-symbols:person" },
			],
		},
		{
			name: "侍奉部",
			url: "/club/",
			icon: "material-symbols:book",
			children: [
				{ name: "番剧", url: "/anime/", icon: "material-symbols:movie" },
				{ name: "剧情时间线", url: "/timeline/", icon: "material-symbols:timeline" },
				{ name: "相册", url: "/albums/", icon: "material-symbols:photo-library" },
				{ name: "名台词集", url: "/posts/quotes/", icon: "material-symbols:chat" },
			],
		},
		{
			name: "关于",
			url: "/about/",
			icon: "material-symbols:info",
			children: [
				{ name: "关于本作", url: "/about/", icon: "material-symbols:description" },
				{ name: "友链", url: "/friends/", icon: "material-symbols:group" },
				{ name: "作品时间线", url: "/timeline/", icon: "material-symbols:timeline" },
			],
		},
	],
};
