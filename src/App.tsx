import React, { useState } from 'react';
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
import { Newsletter } from './components/Newsletter';
import { Footer } from './components/Footer';

import { DonateModal } from './components/DonateModal';
import { VideoModal } from './components/VideoModal';
import { SearchModal } from './components/SearchModal';
import { EventModal } from './components/EventModal';

import { INITIAL_CAUSES, EVENTS_DATA, NEWS_DATA } from './data/mockData';
import { Cause, EventItem, NewsItem } from './types';

export default function App() {
  const [causes, setCauses] = useState<Cause[]>(INITIAL_CAUSES);
  const [donateModalOpen, setDonateModalOpen] = useState(false);
  const [selectedCauseForDonate, setSelectedCauseForDonate] = useState<Cause | null>(null);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState<EventItem | null>(null);

  // Handle open donation modal for specific cause
  const handleOpenDonateForCause = (cause?: Cause) => {
    setSelectedCauseForDonate(cause || null);
    setDonateModalOpen(true);
  };

  // Handle donation success
  const handleDonateSuccess = (causeId: string, amount: number) => {
    setCauses((prevCauses) =>
      prevCauses.map((c) =>
        c.id === causeId ? { ...c, raised: c.raised + amount } : c
      )
    );
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

        {/* Trending Causes */}
        <TrendingCauses
          causes={causes}
          onDonateCause={(cause) => handleOpenDonateForCause(cause)}
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
        <LatestNews
          onSelectNews={(newsItem: NewsItem) => {
            // Smoothly scroll or trigger modal if needed
            const causesSection = document.getElementById('causes');
            causesSection?.scrollIntoView({ behavior: 'smooth' });
          }}
        />

        {/* Newsletter Subscription */}
        <Newsletter />
      </main>

      {/* Footer */}
      <Footer />

      {/* Modals & Overlays */}
      <DonateModal
        isOpen={donateModalOpen}
        onClose={() => setDonateModalOpen(false)}
        causes={causes}
        selectedCause={selectedCauseForDonate}
        onDonateSuccess={handleDonateSuccess}
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
        onSelectCause={(cause) => handleOpenDonateForCause(cause)}
        onSelectEvent={(event) => setSelectedEvent(event)}
        onSelectNews={() => {}}
      />

      <EventModal
        event={selectedEvent}
        onClose={() => setSelectedEvent(null)}
      />
    </div>
  );
}
