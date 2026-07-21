import React, { useEffect } from 'react';
import { X, Calendar, User, Share2, Tag, Heart } from 'lucide-react';
import { NewsItem } from '../types';

interface NewsDetailModalProps {
  news: NewsItem | null;
  onClose: () => void;
  onOpenDonate: () => void;
}

export const NewsDetailModal: React.FC<NewsDetailModalProps> = ({ news, onClose, onOpenDonate }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && news) onClose();
    };
    if (news) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [news, onClose]);

  if (!news) return null;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: news.title,
        text: news.description,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Article link copied to clipboard!');
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="news-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in"
    >
      <div className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl relative max-h-[90vh] overflow-y-auto border border-slate-100 flex flex-col">
        {/* Cover Image */}
        <div className="relative h-64 sm:h-72 w-full overflow-hidden rounded-t-3xl bg-slate-100">
          <img
            src={news.image}
            alt={news.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent"></div>

          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/50 hover:bg-slate-900/80 text-white transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          {/* Tag badge */}
          <div className="absolute top-4 left-4 bg-[#E5533D] text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
            {news.tag}
          </div>

          <div className="absolute bottom-4 left-6 right-6 text-white">
            <h2 id="news-title" className="text-xl sm:text-2xl font-black leading-tight">
              {news.title}
            </h2>
            <div className="flex items-center space-x-4 text-xs text-slate-300 mt-2">
              <span className="flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-[#E5533D]" />
                {news.date}
              </span>
              <span className="flex items-center gap-1">
                <User className="w-3.5 h-3.5 text-[#E5533D]" />
                By {news.author}
              </span>
            </div>
          </div>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8 space-y-6">
          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed text-sm sm:text-base space-y-4">
            {(news.fullContent || news.description).split('\n\n').map((paragraph, idx) => (
              <p key={idx}>{paragraph}</p>
            ))}
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4">
            <button
              onClick={handleShare}
              className="px-4 py-2.5 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-xs rounded-xl flex items-center space-x-2 transition-colors cursor-pointer"
            >
              <Share2 className="w-4 h-4 text-[#E5533D]" />
              <span>Share Article</span>
            </button>

            <button
              onClick={() => {
                onClose();
                onOpenDonate();
              }}
              className="px-6 py-2.5 bg-[#E5533D] hover:bg-[#d0422d] text-white font-semibold text-xs rounded-xl flex items-center space-x-2 shadow-md transition-all cursor-pointer"
            >
              <Heart className="w-4 h-4 fill-current" />
              <span>Support Our Mission Today</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
