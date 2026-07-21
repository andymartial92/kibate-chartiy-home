export interface CauseUpdate {
  id: string;
  date: string;
  title: string;
  content: string;
}

export interface Cause {
  id: string;
  title: string;
  category: string;
  tag: string;
  image: string;
  raised: number;
  goal: number;
  description: string;
  fullStory?: string;
  breakdown?: { label: string; percentage: number; color: string }[];
  updates?: CauseUpdate[];
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
  fullDetails?: string;
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
  fullContent?: string;
  date: string;
  author: string;
}

export interface StatItem {
  id: string;
  number: number;
  label: string;
  iconName: string;
}

export interface DonorRecord {
  id: string;
  donorName: string;
  email: string;
  amount: number;
  causeId: string;
  causeTitle: string;
  paymentMethod: 'card' | 'momo' | 'paypal' | 'gpay';
  phoneNumber?: string;
  isAnonymous: boolean;
  coverFees: boolean;
  timestamp: string;
  transactionRef: string;
}

export interface NewsletterSubscriber {
  email: string;
  subscribedAt: string;
}

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  createdAt: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Donations' | 'Mobile Money' | 'Tax & Transparency';
}

export interface Donor {
  name: string;
  avatar: string;
  amount: number;
  timeAgo: string;
}

