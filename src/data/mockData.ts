import { Cause, EventItem, NewsItem, StatItem, DonorRecord, Donor } from '../types';

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
    fullStory: `Severe drought and food inflation in regional communities have left thousands of vulnerable children and elderly citizens struggling to get even one square meal a day. Kibate Charity Home collaborates directly with local Kampala farmers and women market vendors to procure fresh, nutrient-dense produce—such as leafy greens, bananas, maize flour, tomatoes, and beans.
    
    Through this initiative, we supply daily cooked meals to over 400 orphaned children and distribute weekly dry-ration food packs to 150 low-income households. Every dollar donated directly funds local food procurement and transport logistics.`,
    breakdown: [
      { label: 'Fresh Market Produce', percentage: 55, color: '#E5533D' },
      { label: 'Storage & Safe Transport', percentage: 25, color: '#F59E0B' },
      { label: 'Kitchen & Volunteer Supplies', percentage: 20, color: '#10B981' },
    ],
    updates: [
      {
        id: 'up-1',
        date: '18 July 2026',
        title: '300 Fresh Produce Packs Distributed in Kampala Market',
        content: 'Thanks to early donors, our field team supplied 300 families with fresh tomatoes, beans, and maize grain directly purchased from local women vendors.'
      }
    ],
    date: '20 Dec, 2021',
    author: 'Admin',
  },
  {
    id: 'cause-2',
    title: 'Give children a good education & better life',
    category: 'Education',
    tag: '#Education',
    image: '/src/assets/images/cause_education_classroom_1784668322046.jpg',
    raised: 12000,
    goal: 20000,
    description: 'Provide vulnerable children with access to quality education, school supplies, learning materials, and safe classrooms.',
    fullStory: `Education is the single most powerful tool to break the intergenerational cycle of poverty. In rural settlements, hundreds of bright young children are forced to stay home because their families cannot afford basic tuition fees, uniforms, or exercise books.
    
    Kibate Charity Home has constructed open shelter community classrooms and partnered with local certified teachers to provide free daily schooling, literacy training, STEM kits, and school lunch programs. We are now $8,000 away from achieving full funding for the 2026 school year!`,
    breakdown: [
      { label: 'Teacher Stipends & Training', percentage: 40, color: '#E5533D' },
      { label: 'Books, Uniforms & Learning Kits', percentage: 35, color: '#3B82F6' },
      { label: 'Classroom Infrastructure', percentage: 25, color: '#10B981' },
    ],
    updates: [
      {
        id: 'up-2',
        date: '10 June 2026',
        title: 'New Open Shelter Classroom Roof Installed',
        content: 'Our village shelter classroom received new thatched roofing and wooden desks for 60 primary students.'
      }
    ],
    date: '20 Dec, 2021',
    author: 'Admin',
  },
  {
    id: 'cause-3',
    title: 'Provide safe shelter & housing for vulnerable families',
    category: 'Shelter',
    tag: '#HomeLess & Shelter',
    image: '/src/assets/images/cause_shelter_settlement_1784669067541.jpg',
    raised: 700,
    goal: 50000,
    description: 'Building secure housing, improving community infrastructure, and providing clean shelter for families living in underserved settlements.',
    fullStory: `Living in flimsy, leaking structures leaves children vulnerable to extreme weather, vector-borne illnesses, and safety risks. Kibate Charity Home is actively building durable brick homes, reinforcing thatched roofing with weather-resistant iron sheets, and renovating sanitation facilities in informal Kampala settlements.
    
    Your contribution supports raw building materials (cement, bricks, iron sheets), local artisan labor, and community sanitation block upgrades.`,
    breakdown: [
      { label: 'Corrugated Iron & Roof Materials', percentage: 45, color: '#E5533D' },
      { label: 'Local Builder Labor', percentage: 30, color: '#8B5CF6' },
      { label: 'Sanitation Blocks & Clean Latrines', percentage: 25, color: '#10B981' },
    ],
    updates: [
      {
        id: 'up-3',
        date: '02 May 2026',
        title: '5 Family Shelters Fully Weather-Proofed',
        content: 'Constructed new corrugated iron roofs and reinforced mud-brick walls for 5 displaced families.'
      }
    ],
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
    fullDetails: 'Join Kibate Charity Home at our Kampala community station for a full-day food drive, nutritional screening, and meal distribution. Volunteers will pack and hand out 500+ fresh market produce bundles to expectant mothers and elderly residents.',
    location: 'Kampala, Uganda',
    time: '8:00 pm',
    isFeatured: true,
  },
  {
    id: 'event-1',
    title: 'Warm Meal & Community Outreach Drive',
    tag: '#FundFolder',
    dateDay: '22',
    dateMonth: 'Dec',
    image: '/src/assets/images/event_children_food_1784666743573.jpg',
    description: 'Community outreach and food drive providing warm meals and support for children and families.',
    fullDetails: 'A festive gathering where our volunteers serve warm, balanced meals and distribute footwear and hygiene kits to over 200 street children and orphans.',
    location: 'Kampala, Uganda',
    time: '8:00 pm',
  },
  {
    id: 'event-2',
    title: 'Education for all children drive',
    tag: '#ChildrenEducation',
    dateDay: '06',
    dateMonth: 'Jan',
    image: '/src/assets/images/cause_education_classroom_1784668322046.jpg',
    description: 'Providing educational tools and building open community classrooms for children.',
    fullDetails: 'Distributing 1,000 exercise books, pens, backpacks, and math kits to primary school students preparing for the new academic term.',
    location: 'Kampala, Uganda',
    time: '9:00 am',
  },
  {
    id: 'event-3',
    title: 'Clean Water & Sanitation Workshop',
    tag: '#RightsForWomen',
    dateDay: '15',
    dateMonth: 'Jan',
    description: 'Interactive workshop teaching safe water storage, hygiene practices, and maintenance of local water taps.',
    fullDetails: 'Empowering community leaders with water purification tablets, clean jerrycans, and maintenance training for village water points.',
    location: 'Kampala, Uganda',
    time: '6:00 pm',
  },
];

export const NEWS_DATA: NewsItem[] = [
  {
    id: 'news-1',
    title: 'Healthy food and nutrition among all the children',
    tag: '#Nutrition',
    image: '/src/assets/images/cause_food_market_1784668696596.jpg',
    description: 'Fresh market produce and community food initiatives bringing proper nutrition to families across Kampala.',
    fullContent: `Proper nutrition during early childhood is critical for physical development and cognitive growth. Across many informal settlements in Uganda, access to fresh, balanced meals remains a daily challenge for low-income households.
    
    Through our Fresh Market Food Initiative, Kibate Charity Home sources fresh tomatoes, leafy vegetables, maize flour, and legumes directly from local market women. By cutting out middleman markups, we maximize every dollar donated and provide nutritious daily meals for over 400 children in Kampala.
    
    "When children are fed, they can focus in school, play freely, and grow without the constant burden of hunger," says program lead Kibate. We invite all well-wishers to support this campaign today.`,
    date: '20 Dec, 2021',
    author: 'Admin',
  },
  {
    id: 'news-2',
    title: 'New era for children learning and removing discrimination',
    tag: '#Education',
    image: '/src/assets/images/cause_education_classroom_1784668322046.jpg',
    description: 'Expanding access to village shelter classrooms and quality education for all children regardless of background.',
    fullContent: `Every child deserves a seat at a desk, a book in hand, and a teacher who believes in their potential. In our open shelter village classroom in Kampala, children who previously missed months of schooling are now catching up on fundamental reading, writing, and arithmetic skills.
    
    With community support, we recently added sturdy wooden benches, blackboards, and solar-powered reading lamps so evening adult literacy classes can also take place. We extend our sincere gratitude to all global donors making this possible!`,
    date: '20 Dec, 2021',
    author: 'Admin',
  },
  {
    id: 'news-3',
    title: 'Ensure pure and clean drinking water for rural communities',
    tag: '#Water',
    image: '/src/assets/images/cause_water_point_1784669402329.jpg',
    description: 'Constructing clean water points and borehole filtration systems to provide safe drinking water to rural villages...',
    fullContent: `Access to clean, safe drinking water is a fundamental human right. Before the installation of our new multi-spout community water station, women and children walked up to 4 kilometers daily to fetch untreated water from open ponds.
    
    Today, over 1,200 residents draw clean, purified water directly into yellow jerrycans and bottles at our newly constructed water point in Kampala. Waterborne illnesses have dropped significantly, and young girls now have time to attend school instead of hauling water for hours each morning.`,
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
