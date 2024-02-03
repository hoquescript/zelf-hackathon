const ADMIN_COLUMNS = [
  {
    label: "Date",
    accessor: "date",
  },
  {
    label: "Video",
    accessor: "content",
  },
  {
    label: "Creator",
    accessor: "id",
  },
  {
    label: "Platform",
    accessor: "platform",
  },
  {
    label: "Total Views",
    accessor: "views",
    hasSort: true,
  },
  {
    label: "Total Engagement",
    accessor: "engagement",
    hasSort: true,
  },
  {
    label: "Engagement Rate",
    accessor: "engagementRate",
    hasSort: true,
  },
  {
    label: "Actions",
    accessor: "title",
  },
];

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

const ADMIN_DATA: Post[] = [
  {
    id: "Post1",
    date: "Sep 06",
    content:
      "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti doloremque fuga exercitationem fugiat, tempore at temporibus ab et earum nulla.",
    user: {
      image: "",
      email: "",
    },
    platform: "",
    views: "434k",
    engagement: "140k",
    engagementRate: "9.5%",
    actions: "",
  },
];

export default ADMIN_COLUMNS;
