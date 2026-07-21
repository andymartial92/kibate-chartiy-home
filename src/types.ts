export interface Cause {
  id: string;
  title: string;
  category: string;
  tag: string;
  image: string;
  raised: number;
  goal: number;
  description: string;
  date: string;
  author: string;
}

export interface EventItem {
  id: string;
  title: string;
  tag: string;
  dateDay: string;
  dateMonth: string;
  image?: string;
  description: string;
  location: string;
  time: string;
  isFeatured?: boolean;
}

export interface NewsItem {
  id: string;
  title: string;
  tag: string;
  image: string;
  description: string;
  date: string;
  author: string;
}

export interface StatItem {
  id: string;
  number: number;
  label: string;
  iconName: string;
}

export interface Donor {
  name: string;
  avatar: string;
  amount: number;
  timeAgo: string;
}
