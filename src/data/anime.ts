// 本地番剧数据配置 - 春物系列
export interface AnimeItem {
	title: string;
	status: "watching" | "completed" | "planned";
	rating: number;
	cover: string;
	description: string;
	episodes: string;
	year: string;
	genre: string[];
	studio: string;
	link: string;
	progress: number;
	totalEpisodes: number;
	startDate: string;
	endDate: string;
}

const localAnimeList: AnimeItem[] = [
	{
		title: "我的青春恋爱物语果然有问题。",
		status: "completed",
		rating: 9.8,
		cover: "/assets/anime/oregairu_s1.webp",
		description: "性格孤僻的比企谷八幡被老师带入侍奉部，与完美美少女雪之下雪乃、温柔少女由比滨结衣相遇，三人在帮助他人解决校园烦恼的过程中，逐渐触碰彼此的真心。",
		episodes: "13 episodes",
		year: "2013",
		genre: ["校园", "恋爱", "青春"],
		studio: "Brain's Base",
		link: "https://www.bilibili.com/bangumi/media/md45051",
		progress: 13,
		totalEpisodes: 13,
		startDate: "2013-04",
		endDate: "2013-06",
	},
	{
		title: "我的青春恋爱物语果然有问题。续",
		status: "completed",
		rating: 9.9,
		cover: "/assets/anime/oregairu_s2.webp",
		description: "第二季深入刻画角色内心。八幡的「自爆」式解决问题方式引发雪乃和结衣的担忧，三人关系面临考验。文化祭、学生会选举等事件让他们开始思考「真正的东西」是什么。",
		episodes: "13 episodes",
		year: "2015",
		genre: ["校园", "恋爱", "青春", "心理"],
		studio: "feel.",
		link: "https://www.bilibili.com/bangumi/media/md28222976",
		progress: 13,
		totalEpisodes: 13,
		startDate: "2015-04",
		endDate: "2015-06",
	},
	{
		title: "我的青春恋爱物语果然有问题。完",
		status: "completed",
		rating: 9.7,
		cover: "/assets/anime/oregairu_s3.webp",
		description: "最终章。高三的冬天来临，雪乃决定独立完成舞会企划来证明自己，八幡和结衣在旁协助。三人终于直面各自的感情，在「真物」的追寻中做出了选择。",
		episodes: "12 episodes",
		year: "2020",
		genre: ["校园", "恋爱", "青春", "治愈"],
		studio: "feel.",
		link: "https://www.bilibili.com/bangumi/media/md28227668",
		progress: 12,
		totalEpisodes: 12,
		startDate: "2020-07",
		endDate: "2020-09",
	},
	{
		title: "我的青春恋爱物语果然有问题。结",
		status: "planned",
		rating: 9.5,
		cover: "/assets/anime/oregairu_ova.webp",
		description: "以由比滨结衣为主角的新企划，续写曾在动画第二期BD特典中Another的故事。聚焦团子视角下的青春物语，讲述她在那段时光中的心声与成长。",
		episodes: "OVA",
		year: "2021",
		genre: ["校园", "恋爱", "青春"],
		studio: "feel.",
		link: "https://www.bilibili.com/bangumi/media/md28233961",
		progress: 0,
		totalEpisodes: 1,
		startDate: "2021-01",
		endDate: "2021-01",
	},
];

export default localAnimeList;
