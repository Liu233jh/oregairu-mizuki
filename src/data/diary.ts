// 日记数据配置 - 侍奉部活动记录
export interface DiaryItem {
	id: number;
	content: string;
	date: string;
	images?: string[];
	location?: string;
	mood?: string;
	tags?: string[];
}

const diaryData: DiaryItem[] = [
	{
		id: 1,
		content: "今天平冢老师又把我叫到了侍奉部。雪乃还是老样子，用那种看垃圾一样的眼神看着我。结衣做了曲奇，虽然味道有点奇怪，但她努力的样子还挺可爱的。……我到底在写什么啊。",
		date: "2012-04-10T16:30:00+09:00",
		location: "总武高中 侍奉部活动室",
		mood: "无奈",
		tags: ["侍奉部", "日常"],
	},
	{
		id: 2,
		content: "网球部的户冢来找我们帮忙。……户冢真的很可爱啊，不对，他是男生！为什么男生可以这么可爱！今天和他打了网球，虽然输了，但是能和户冢一起打球，值了。雪乃在旁边用看变态的眼神看着我。",
		date: "2012-05-12T17:00:00+09:00",
		location: "总武高中 网球场",
		mood: "心动",
		tags: ["户冢", "网球"],
	},
	{
		id: 3,
		content: "林间学校结束了。鹤见留美的事情……我用自己的方式解决了。雪乃说她不认同我的做法，结衣也沉默了。但是，我不后悔。因为……没有人受伤的世界，完成了。",
		date: "2012-07-24T20:00:00+09:00",
		location: "千叶县 林间学校",
		mood: "复杂",
		tags: ["林间学校", "自爆", "鹤见留美"],
	},
	{
		id: 4,
		content: "文化祭结束了。相模南的事情，我又用了那种方式。雪乃今天没有和我一起回家。……我是不是做错了？可是，如果我不那么做，文化祭就会失败。到底什么才是正确的？",
		date: "2012-11-04T21:30:00+09:00",
		location: "总武高中",
		mood: "迷茫",
		tags: ["文化祭", "相模南", "自爆"],
	},
	{
		id: 5,
		content: "今天是圣诞节。幼儿园的圣诞活动很成功。但是……我终于说出了那句话。「我想要的，并不是话语，而是真实。」雪乃哭了，结衣也哭了。……我到底在做什么啊。但是，这一次，我不想再逃避了。",
		date: "2013-12-24T23:00:00+09:00",
		location: "千叶市 幼儿园",
		mood: "动摇",
		tags: ["圣诞", "真物", "告白"],
	},
	{
		id: 6,
		content: "雪乃决定独立策划毕业舞会。她说她想证明自己不依赖他人也能完成事情。我选择在旁边默默看着，不再用自爆的方式介入。……这一次，我想相信她。也想相信……我们之间的关系。",
		date: "2014-11-15T18:00:00+09:00",
		location: "总武高中 侍奉部活动室",
		mood: "期待",
		tags: ["毕业舞会", "雪乃", "成长"],
	},
	{
		id: 7,
		content: "舞会很成功。雪乃真的做到了。……今天，我终于向她说出了自己的心意。她没有回答，只是……紧紧地握住了我的手。樱花飘落的季节，我们的青春，终于有了答案。",
		date: "2015-03-20T19:30:00+09:00",
		location: "千叶市 活动会场",
		mood: "幸福",
		tags: ["毕业", "告白", "雪乃"],
	},
];

export const getDiaryList = (limit?: number) => {
	const sortedData = [...diaryData].sort(
		(a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
	);
	if (limit && limit > 0) {
		return sortedData.slice(0, limit);
	}
	return sortedData;
};

export const getAllTags = () => {
	const tags = new Set<string>();
	for (const item of diaryData) {
		if (item.tags) {
			for (const tag of item.tags) {
				tags.add(tag);
			}
		}
	}
	return Array.from(tags).sort();
};
