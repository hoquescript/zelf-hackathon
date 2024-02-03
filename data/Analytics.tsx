interface User {
  image: string;
  email: string;
}

interface Post {
  id: string;
  date: string;
  content: string;
  user: User;
  platform: string;
  views: string;
  engagement: string;
  engagementRate: string;
  actions: string;
}

export const ANALYTIC_DATA: any[] = [
  {
    id: "Post1",
    date: "Sep 06",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti doloremque fuga exercitationem fugiat, tempore at temporibus ab et earum nulla.",
    user: {
      id: "daisyapa.salam.nin",
      image: "/avatar_sm.svg",
    },
    platform: "tiktok",
    views: "434k",
    engagement: "140k",
    engagementRate: "9.5%",
    actions: "",
  },
];

export default ANALYTIC_DATA;
