import { Cause, EventItem, NewsItem, StatItem, Donor } from '../types';

export const INITIAL_CAUSES: Cause[] = [
  {
    id: 'cause-1',
    title: 'Collect fund for fresh food & nutrition for families',
    category: 'Food & Water',
    tag: '#Food & Water',
    image: '/src/assets/images/cause_food_market_1784668696596.jpg',
    raised: 1500,
    goal: 10000,
    description: 'Supporting local food security, market produce distribution, and nutritional care for mothers and children in need.',
    date: '20 Dec, 2021',
    author: 'Admin',
  },
  {
    id: 'cause-2',
    title: 'Give children a good education & better life',
    category: 'Education',
    tag: '#Education',
    image: '/src/assets/images/cause_education_classroom_1784668322046.jpg',
    raised: 18000,
    goal: 20000,
    description: 'Provide vulnerable children with access to quality education, school supplies, learning materials, and safe classrooms.',
    date: '20 Dec, 2021',
    author: 'Admin',
  },
  {
    id: 'cause-3',
    title: 'Provide safe shelter & housing for vulnerable families',
    category: 'Shelter',
    tag: '#HomeLess & Shelter',
    image: '/src/assets/images/cause_shelter_settlement_1784669067541.jpg',
    raised: 25000,
    goal: 50000,
    description: 'Building secure housing, improving community infrastructure, and providing clean shelter for families living in underserved settlements.',
    date: '20 Dec, 2021',
    author: 'Admin',
  },
];

export const EVENTS_DATA: EventItem[] = [
  {
    id: 'event-featured',
    title: 'Healthy food and nutrition awareness campaign',
    tag: '#FoodCamp',
    dateDay: '20',
    dateMonth: 'Dec',
    image: '/src/assets/images/cause_food_market_1784668696596.jpg',
    description: 'Community food drive and nutrition education providing fresh market produce and meal packages for local families.',
    location: 'Montgomery, Alabama',
    time: '8:00 pm',
    isFeatured: true,
  },
  {
    id: 'event-1',
    title: 'Run for the senior citizens.',
    tag: '#FundFolder',
    dateDay: '22',
    dateMonth: 'Dec',
    image: '/src/assets/images/event_children_food_1784666743573.jpg',
    description: 'Community outreach and food drive providing warm meals and support for children and families.',
    location: 'Montgomery, Alabama',
    time: '8:00 pm',
  },
  {
    id: 'event-2',
    title: 'Education for all children',
    tag: '#ChildrenEducation',
    dateDay: '06',
    dateMonth: 'Jan',
    image: '/src/assets/images/cause_education_classroom_1784668322046.jpg',
    description: 'Providing educational tools and building open community classrooms for children.',
    location: 'Montgomery, Alabama',
    time: '9:00 am',
  },
  {
    id: 'event-3',
    title: 'Stop violence against women',
    tag: '#RightsForWomen',
    dateDay: '15',
    dateMonth: 'Jan',
    description: 'Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor.',
    location: 'Montgomery, Alabama',
    time: '6:00 pm',
  },
];

export const NEWS_DATA: NewsItem[] = [
  {
    id: 'news-1',
    title: 'Healthy food and nutrition among all the children',
    tag: '#Nutrition',
    image: '/src/assets/images/cause_food_market_1784668696596.jpg',
    description: 'Fresh market produce and community food initiatives bringing proper nutrition to families...',
    date: '20 Dec, 2021',
    author: 'Admin',
  },
  {
    id: 'news-2',
    title: 'New era for children learning and remove discrimination',
    tag: '#Education',
    image: '/src/assets/images/cause_education_classroom_1784668322046.jpg',
    description: 'Expanding access to village shelter classrooms and quality education for all children...',
    date: '20 Dec, 2021',
    author: 'Admin',
  },
  {
    id: 'news-3',
    title: 'Ensure pure and mineral drinking water for rural people',
    tag: '#Water',
    image: 'https://images.unsplash.com/photo-1541544741938-0af808871cc0?auto=format&fit=crop&q=80&w=800',
    description: 'Lorem ipsum dolor sit amet, consectetur notted adipisicing elit sed do eiusmod tempor...',
    date: '20 Dec, 2021',
    author: 'Admin',
  },
];

export const STATS_DATA: StatItem[] = [
  { id: 'stat-1', number: 2348, label: 'Total campaign', iconName: 'Megaphone' },
  { id: 'stat-2', number: 1748, label: 'Satisfied donors', iconName: 'Users' },
  { id: 'stat-3', number: 4287, label: 'Fund raised', iconName: 'DollarSign' },
  { id: 'stat-4', number: 1294, label: 'Happy volunteers', iconName: 'HeartHandshake' },
];

export const RECENT_DONORS: Donor[] = [
  { name: 'Sarah Jenkins', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=120', amount: 250, timeAgo: '10 mins ago' },
  { name: 'Michael Chen', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=120', amount: 500, timeAgo: '35 mins ago' },
  { name: 'Emma Watson', avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=120', amount: 100, timeAgo: '2 hours ago' },
  { name: 'David Miller', avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=120', amount: 1000, timeAgo: '4 hours ago' },
];
