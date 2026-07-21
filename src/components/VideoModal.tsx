import React from 'react';
import { X } from 'lucide-react';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-xs animate-fade-in">
      <div className="bg-black rounded-3xl max-w-3xl w-full p-2 relative overflow-hidden shadow-2xl border border-slate-800">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-slate-800/80 text-white hover:bg-slate-700 transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="relative pt-[56.25%] w-full rounded-2xl overflow-hidden bg-slate-950">
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
            title="How We Work - Jago Welfare"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};
