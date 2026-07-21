import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { FeatureCards } from './components/FeatureCards';
import { WelcomeSection } from './components/WelcomeSection';
import { TrendingCauses } from './components/TrendingCauses';
import { UpcomingEvents } from './components/UpcomingEvents';
import { BannerCallout } from './components/BannerCallout';
import { SponsorsBar } from './components/SponsorsBar';
import { StatsCounter } from './components/StatsCounter';
import { LatestNews } from './components/LatestNews';
import { FAQSection } from './components/FAQSection';
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';

import { DonateModal } from './components/DonateModal';
import { ReceiptModal } from './components/ReceiptModal';
import { VideoModal } from './components/VideoModal';
import { SearchModal } from './components/SearchModal';
import { EventModal } from './components/EventModal';
import { NewsDetailModal } from './components/NewsDetailModal';
import { CauseDetailModal } from './components/CauseDetailModal';
import { AboutModal } from './components/AboutModal';
import { ContactModal } from './components/ContactModal';
import { AdminModal } from './components/AdminModal';

import { EVENTS_DATA, NEWS_DATA } from './data/mockData';
import { Cause, EventItem, NewsItem, DonorRecord } from './types';
import { getStoredCauses, saveCauses } from './utils/storage';

export default function App() {
  const [causes, setCauses] = useState<Cause[]>(getStoredCauses());
  
  // Modals state
  const [donateModalOpen, setDonateModalOpen] = useState(false);
  const [selectedCauseForDonate, setSelectedCauseForDonate] = useState<Cause | null>(null);
  
  const [activeReceipt, setActiveReceipt] = useState<DonorRecord | null>(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null);
  const [selectedCauseDetail, setSelectedCauseDetail] = useState<Cause | null>(null);
  
  const [aboutModalOpen, setAboutModalOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);
  const [adminModalOpen, setAdminModalOpen] = useState(false);

  // Sync causes to storage whenever updated
  const handleUpdateCauses = (updatedCauses: Cause[]) => {
    setCauses(updatedCauses);
    saveCauses(updatedCauses);
  };

  // Handle open donation modal for specific cause
  const handleOpenDonateForCause = (cause?: Cause | null) => {
    setSelectedCauseForDonate(cause || null);
    setDonateModalOpen(true);
  };

  // Handle donation success & trigger receipt
  const handleDonateSuccess = (causeId: string, amount: number, record: DonorRecord) => {
    const updated = causes.map((c) =>
      c.id === causeId ? { ...c, raised: c.raised + amount } : c
    );
    handleUpdateCauses(updated);
    setActiveReceipt(record);
  };

  // Handle feature card category click
  const handleFeatureCategorySelect = (category: string) => {
    const matchedCause = causes.find((c) => c.category === category);
    handleOpenDonateForCause(matchedCause || causes[0]);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans antialiased flex flex-col selection:bg-[#E5533D] selection:text-white">
      {/* Header */}
      <Header
        onOpenDonate={() => handleOpenDonateForCause()}
        onOpenSearch={() => setSearchModalOpen(true)}
        onOpenAbout={() => setAboutModalOpen(true)}
        onOpenContact={() => setContactModalOpen(true)}
        onOpenAdmin={() => setAdminModalOpen(true)}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero onOpenDonate={() => handleOpenDonateForCause()} />

        {/* 4 Feature Cards */}
        <FeatureCards onSelectCause={handleFeatureCategorySelect} />

        {/* Welcome Section */}
        <WelcomeSection
          onOpenVideo={() => setVideoModalOpen(true)}
          onOpenDonate={() => handleOpenDonateForCause()}
        />

        {/* Active Campaigns / Causes */}
        <TrendingCauses
          causes={causes}
          onDonateCause={(cause) => handleOpenDonateForCause(cause)}
          onSelectCause={(cause) => setSelectedCauseDetail(cause)}
        />

        {/* Upcoming Events */}
        <UpcomingEvents onSelectEvent={(event) => setSelectedEvent(event)} />

        {/* Callout Banner */}
        <BannerCallout onOpenDonate={() => handleOpenDonateForCause()} />

        {/* Partners / Sponsors Bar */}
        <SponsorsBar />

        {/* Stats Counter */}
        <StatsCounter />

        {/* Latest Blog News */}
        <LatestNews onSelectNews={(newsItem) => setSelectedNews(newsItem)} />

        {/* FAQ Section */}
        <FAQSection />

        {/* Newsletter Subscription */}
        <Newsletter />
      </main>

      {/* Footer */}
      <Footer
        onOpenAbout={() => setAboutModalOpen(true)}
        onOpenContact={() => setContactModalOpen(true)}
        onOpenDonate={() => handleOpenDonateForCause()}
      />

      {/* Modals & Overlays */}
      <DonateModal
        isOpen={donateModalOpen}
        onClose={() => setDonateModalOpen(false)}
        causes={causes}
        selectedCause={selectedCauseForDonate}
        onDonateSuccess={handleDonateSuccess}
      />

      <ReceiptModal
        receipt={activeReceipt}
        onClose={() => setActiveReceipt(null)}
      />

      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
      />

      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        causes={causes}
        events={EVENTS_DATA}
        news={NEWS_DATA}
        onSelectCause={(cause) => setSelectedCauseDetail(cause)}
        onSelectEvent={(event) => setSelectedEvent(event)}
        onSelectNews={(news) => setSelectedNews(news)}
      />

      <EventModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />

      <NewsDetailModal
        news={selectedNews}
        onClose={() => setSelectedNews(null)}
        onOpenDonate={() => handleOpenDonateForCause()}
      />

      <CauseDetailModal
        cause={selectedCauseDetail}
        onClose={() => setSelectedCauseDetail(null)}
        onOpenDonate={(cause) => handleOpenDonateForCause(cause)}
      />

      <AboutModal
        isOpen={aboutModalOpen}
        onClose={() => setAboutModalOpen(false)}
        onOpenDonate={() => handleOpenDonateForCause()}
      />

      <ContactModal
        isOpen={contactModalOpen}
        onClose={() => setContactModalOpen(false)}
      />

      <AdminModal
        isOpen={adminModalOpen}
        onClose={() => setAdminModalOpen(false)}
        causes={causes}
        onUpdateCauses={handleUpdateCauses}
      />
    </div>
  );
}
