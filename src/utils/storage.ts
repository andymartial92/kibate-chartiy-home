import { Cause, DonorRecord, NewsletterSubscriber, ContactMessage, FAQItem, NewsItem, EventItem } from '../types';
import { INITIAL_CAUSES, EVENTS_DATA, NEWS_DATA } from '../data/mockData';

const CAUSES_KEY = 'kibate_causes_v3';
const DONATIONS_KEY = 'kibate_donations_v1';
const SUBSCRIBERS_KEY = 'kibate_subscribers_v1';
const MESSAGES_KEY = 'kibate_contact_messages_v1';

// Initial default causes with rich story & breakdown data
export function getStoredCauses(): Cause[] {
  try {
    const data = localStorage.getItem(CAUSES_KEY);
    if (data) {
      return JSON.parse(data);
    }
  } catch (e) {
    console.error('Failed to load stored causes', e);
  }
  return INITIAL_CAUSES;
}

export function saveStoredCauses(causes: Cause[]): void {
  try {
    localStorage.setItem(CAUSES_KEY, JSON.stringify(causes));
  } catch (e) {
    console.error('Failed to save causes', e);
  }
}

export const saveCauses = saveStoredCauses;

// Get all recorded donations
export function getStoredDonations(): DonorRecord[] {
  try {
    const data = localStorage.getItem(DONATIONS_KEY);
    if (data) {
      return JSON.parse(data);
    }
  } catch (e) {
    console.error('Failed to load donations', e);
  }
  // Default mock seed donations for social proof
  return [
    {
      id: 'don-1',
      donorName: 'Dr. Sarah Jenkins',
      email: 'sarah.j@example.com',
      amount: 500,
      causeId: 'cause-1',
      causeTitle: 'Collect fund for fresh food & nutrition for families',
      paymentMethod: 'card',
      isAnonymous: false,
      coverFees: true,
      timestamp: new Date(Date.now() - 3600000 * 4).toISOString(),
      transactionRef: 'KBT-2026-88192A',
    },
    {
      id: 'don-2',
      donorName: 'Anonymous Supporter',
      email: 'anon@example.com',
      amount: 250,
      causeId: 'cause-2',
      causeTitle: 'Give children a good education & better life',
      paymentMethod: 'momo',
      phoneNumber: '+256 772 000111',
      isAnonymous: true,
      coverFees: false,
      timestamp: new Date(Date.now() - 3600000 * 12).toISOString(),
      transactionRef: 'KBT-2026-90412B',
    },
    {
      id: 'don-3',
      donorName: 'Kiprotich Ronald',
      email: 'kip.ronald@example.com',
      amount: 100,
      causeId: 'cause-3',
      causeTitle: 'Provide safe shelter & housing for vulnerable families',
      paymentMethod: 'momo',
      phoneNumber: '+256 701 445566',
      isAnonymous: false,
      coverFees: true,
      timestamp: new Date(Date.now() - 3600000 * 24).toISOString(),
      transactionRef: 'KBT-2026-71283C',
    }
  ];
}

export function saveDonationRecord(record: DonorRecord): DonorRecord[] {
  const current = getStoredDonations();
  const updated = [record, ...current];
  try {
    localStorage.setItem(DONATIONS_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to save donation record', e);
  }
  return updated;
}

// Newsletter subscribers
export function getSubscribers(): NewsletterSubscriber[] {
  try {
    const data = localStorage.getItem(SUBSCRIBERS_KEY);
    if (data) return JSON.parse(data);
  } catch (e) {
    console.error('Failed to load subscribers', e);
  }
  return [];
}

export function addSubscriber(email: string): boolean {
  const subscribers = getSubscribers();
  if (subscribers.some((s) => s.email.toLowerCase() === email.toLowerCase())) {
    return false; // already subscribed
  }
  const updated = [{ email, subscribedAt: new Date().toISOString() }, ...subscribers];
  try {
    localStorage.setItem(SUBSCRIBERS_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to save subscriber', e);
  }
  return true;
}

// Contact messages
export function getContactMessages(): ContactMessage[] {
  try {
    const data = localStorage.getItem(MESSAGES_KEY);
    if (data) return JSON.parse(data);
  } catch (e) {
    console.error('Failed to load messages', e);
  }
  return [];
}

export function saveContactMessage(msg: Omit<ContactMessage, 'id' | 'createdAt'>): ContactMessage {
  const current = getContactMessages();
  const newMsg: ContactMessage = {
    ...msg,
    id: `msg-${Date.now()}`,
    createdAt: new Date().toISOString(),
  };
  const updated = [newMsg, ...current];
  try {
    localStorage.setItem(MESSAGES_KEY, JSON.stringify(updated));
  } catch (e) {
    console.error('Failed to save message', e);
  }
  return newMsg;
}

// Default FAQ Data
export const FAQ_DATA: FAQItem[] = [
  {
    id: 'faq-1',
    question: 'How do I know my donation reaches the beneficiaries in Kampala, Uganda?',
    answer: 'Kibate Charity Home is a registered Non-Governmental Organization (NGO Reg No: INDR150892019N) based in Kampala, Uganda. We issue transparent quarterly field reports, publish photo & video proof of distributions, and provide every donor with a verified digital receipt.',
    category: 'Tax & Transparency',
  },
  {
    id: 'faq-2',
    question: 'Can I donate using Mobile Money (MTN or Airtel Uganda)?',
    answer: 'Yes! We support direct Mobile Money donations via MTN Mobile Money and Airtel Money for supporters in East Africa. Simply select "Mobile Money (Uganda)" in the payment tab, enter your phone number (+256...), and confirm on your phone prompt.',
    category: 'Mobile Money',
  },
  {
    id: 'faq-3',
    question: 'Is my online card donation safe and tax-deductible?',
    answer: 'All online card transactions are processed over 256-bit SSL encrypted channels handled securely via Stripe. Upon completion, an official printable 501(c)(3) compliant tax receipt is generated instantly for your records.',
    category: 'Donations',
  },
  {
    id: 'faq-4',
    question: 'Can I set up a monthly recurring donation or sponsor a child?',
    answer: 'Yes, you can toggle recurring monthly contributions during checkout or contact us directly at kibate12@gmail.com / +256 771450806 to match with a specific child in our education program.',
    category: 'General',
  },
  {
    id: 'faq-5',
    question: 'Where is the main field office located?',
    answer: 'Our main office and distribution center is located in Kampala, Uganda. Visitors and volunteers are always welcome! Please reach out through our Contact page to schedule a site visit.',
    category: 'General',
  }
];
