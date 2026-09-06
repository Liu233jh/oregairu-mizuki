// 友情链接数据配置 - 春物相关资源
export interface FriendItem {
	id: number;
	title: string;
	imgurl: string;
	desc: string;
	siteurl: string;
	tags: string[];
}

export const friendsData: FriendItem[] = [
	{
		id: 1,
		title: "Bangumi - 春物",
		imgurl: "https://api.dicebear.com/7.x/shapes/svg?seed=oregairu&backgroundColor=b6e3f4",
		desc: "Bangumi 番组计划 - 我的青春恋爱物语果然有问题 条目页",
		siteurl: "https://bgm.tv/subject/47614",
		tags: ["番组", "数据库"],
	},
	{
		id: 2,
		title: "B站番剧 - 第一季",
		imgurl: "https://api.dicebear.com/7.x/shapes/svg?seed=yukino&backgroundColor=ffd5dc",
		desc: "哔哩哔哩番剧 - 我的青春恋爱物语果然有问题 第一季",
		siteurl: "https://www.bilibili.com/bangumi/media/md45051",
		tags: ["动画", "B站"],
	},
	{
		id: 3,
		title: "B站番剧 - 第二季 续",
		imgurl: "https://api.dicebear.com/7.x/shapes/svg?seed=yui&backgroundColor=c0aede",
		desc: "哔哩哔哩番剧 - 我的青春恋爱物语果然有问题。续",
		siteurl: "https://www.bilibili.com/bangumi/media/md28222976",
		tags: ["动画", "B站"],
	},
	{
		id: 4,
		title: "B站番剧 - 第三季 完",
		imgurl: "https://api.dicebear.com/7.x/shapes/svg?seed=iroha&backgroundColor=d1d4f9",
		desc: "哔哩哔哩番剧 - 我的青春恋爱物语果然有问题。完",
		siteurl: "https://www.bilibili.com/bangumi/media/md28227668",
		tags: ["动画", "B站"],
	},
	{
		id: 5,
		title: "维基百科 - 春物",
		imgurl: "https://api.dicebear.com/7.x/shapes/svg?seed=wiki&backgroundColor=b6e3f4",
		desc: "中文维基百科 - 我的青春恋爱物语果然有问题 条目",
		siteurl: "https://zh.wikipedia.org/wiki/我的青春恋爱物语果然有问题。",
		tags: ["百科", "资料"],
	},
	{
		id: 6,
		title: "渡航 - 作者推特",
		imgurl: "https://api.dicebear.com/7.x/shapes/svg?seed=watari&backgroundColor=ffdfbf",
		desc: "春物原作小说家 渡航 官方Twitter",
		siteurl: "https://twitter.com/watariponkan8",
		tags: ["作者", "社交"],
	},
	{
		id: 7,
		title: "Ponkan⑧ - 插画师",
		imgurl: "https://api.dicebear.com/7.x/shapes/svg?seed=ponkan&backgroundColor=c0aede",
		desc: "春物角色设计 & 插画师 Ponkan⑧ 官方Twitter",
		siteurl: "https://twitter.com/ponkan_8",
		tags: ["插画", "角色设计"],
	},
	{
		id: 8,
		title: "动画官网",
		imgurl: "https://api.dicebear.com/7.x/shapes/svg?seed=anime&backgroundColor=b6e3f4",
		desc: "我的青春恋爱物语果然有问题。完 动画官方网站",
		siteurl: "https://www.oregairu-anime.com/",
		tags: ["官网", "动画"],
	},
];

export function getFriendsList(): FriendItem[] {
	return friendsData;
}

export function getShuffledFriendsList(): FriendItem[] {
	const shuffled = [...friendsData];
	for (let i = shuffled.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
	}
	return shuffled;
}
