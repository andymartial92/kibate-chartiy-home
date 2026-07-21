import React, { useState, useEffect } from 'react';
import { X, Settings, Plus, Save, Trash2, Edit3, CheckCircle2, ShieldAlert } from 'lucide-react';
import { Cause } from '../types';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
  causes: Cause[];
  onUpdateCauses: (causes: Cause[]) => void;
}

export const AdminModal: React.FC<AdminModalProps> = ({
  isOpen,
  onClose,
  causes,
  onUpdateCauses,
}) => {
  const [editingCauses, setEditingCauses] = useState<Cause[]>(causes);
  const [activeTab, setActiveTab] = useState<'causes' | 'new'>('causes');
  const [savedSuccess, setSavedSuccess] = useState(false);

  // New Cause Form State
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState('Education');
  const [newTag, setNewTag] = useState('#Children');
  const [newGoal, setNewGoal] = useState('15000');
  const [newDesc, setNewDesc] = useState('');
  const [newImg, setNewImg] = useState('/src/assets/images/cause_education_classroom_1784668322046.jpg');

  useEffect(() => {
    setEditingCauses(causes);
  }, [causes]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleFieldChange = (id: string, field: keyof Cause, value: any) => {
    setEditingCauses((prev) =>
      prev.map((c) => (c.id === id ? { ...c, [field]: value } : c))
    );
  };

  const handleSaveAll = () => {
    onUpdateCauses(editingCauses);
    setSavedSuccess(true);
    setTimeout(() => {
      setSavedSuccess(false);
      onClose();
    }, 1500);
  };

  const handleAddCause = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle || !newDesc) return;

    const created: Cause = {
      id: `cause-${Date.now()}`,
      title: newTitle,
      category: newCategory,
      tag: newTag,
      image: newImg,
      raised: 0,
      goal: parseFloat(newGoal) || 10000,
      description: newDesc,
      fullStory: newDesc,
      date: 'Just Now',
      author: 'Admin Staff',
    };

    const updatedList = [created, ...editingCauses];
    setEditingCauses(updatedList);
    onUpdateCauses(updatedList);

    setSavedSuccess(true);
    setNewTitle('');
    setNewDesc('');
    setTimeout(() => setSavedSuccess(false), 2000);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="admin-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-xs animate-fade-in"
    >
      <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 shadow-2xl relative max-h-[90vh] overflow-y-auto border border-slate-100 space-y-6">
        
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 rounded-full text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center space-x-3">
          <div className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center">
            <Settings className="w-5 h-5" />
          </div>
          <div>
            <h2 id="admin-modal-title" className="text-xl font-extrabold text-slate-900">
              NGO Staff CMS Control Panel
            </h2>
            <p className="text-xs text-slate-500">Update campaign fundraising targets, stories, and images</p>
          </div>
        </div>

        {/* Tab switch */}
        <div className="flex space-x-2 border-b border-slate-100 pb-2 text-xs font-bold">
          <button
            onClick={() => setActiveTab('causes')}
            className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
              activeTab === 'causes' ? 'bg-slate-900 text-white' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            Manage Existing Campaigns ({editingCauses.length})
          </button>
          <button
            onClick={() => setActiveTab('new')}
            className={`px-4 py-2 rounded-xl transition-all cursor-pointer ${
              activeTab === 'new' ? 'bg-[#E5533D] text-white' : 'text-slate-600 hover:bg-slate-100'
            }`}
          >
            + Add New Campaign
          </button>
        </div>

        {savedSuccess && (
          <div className="bg-emerald-50 text-emerald-800 p-3 rounded-xl border border-emerald-200 text-xs font-bold flex items-center space-x-2">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>Campaign settings saved & updated live!</span>
          </div>
        )}

        {activeTab === 'causes' ? (
          <div className="space-y-4">
            {editingCauses.map((cause) => (
              <div key={cause.id} className="p-4 bg-slate-50 rounded-2xl border border-slate-200 space-y-3 text-xs">
                <div className="flex justify-between items-center font-bold text-slate-900">
                  <span>{cause.title}</span>
                  <span className="text-[#E5533D]">${cause.raised} / ${cause.goal}</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  <div>
                    <label className="text-slate-500 font-semibold block mb-1">Fundraising Goal ($ USD)</label>
                    <input
                      type="number"
                      value={cause.goal}
                      onChange={(e) => handleFieldChange(cause.id, 'goal', parseFloat(e.target.value) || 0)}
                      className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-slate-800 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label className="text-slate-500 font-semibold block mb-1">Total Raised ($ USD)</label>
                    <input
                      type="number"
                      value={cause.raised}
                      onChange={(e) => handleFieldChange(cause.id, 'raised', parseFloat(e.target.value) || 0)}
                      className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-slate-800 focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-slate-500 font-semibold block mb-1">Short Description</label>
                  <input
                    type="text"
                    value={cause.description}
                    onChange={(e) => handleFieldChange(cause.id, 'description', e.target.value)}
                    className="w-full px-3 py-1.5 bg-white border border-slate-200 rounded-lg text-slate-800 focus:outline-none"
                  />
                </div>
              </div>
            ))}

            <button
              onClick={handleSaveAll}
              className="w-full py-3 bg-slate-900 hover:bg-slate-800 text-white font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center space-x-2"
            >
              <Save className="w-4 h-4" />
              <span>Save & Publish Changes Live</span>
            </button>
          </div>
        ) : (
          <form onSubmit={handleAddCause} className="space-y-3 text-xs">
            <div>
              <label className="font-bold text-slate-700 block mb-1">Campaign Title *</label>
              <input
                type="text"
                required
                placeholder="e.g. Build Clean Borehole in Kampala Suburb"
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none"
              />
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="font-bold text-slate-700 block mb-1">Category</label>
                <select
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none"
                >
                  <option value="Food & Water">Food & Water</option>
                  <option value="Education">Education</option>
                  <option value="Shelter">Shelter</option>
                  <option value="Healthcare">Healthcare</option>
                </select>
              </div>

              <div>
                <label className="font-bold text-slate-700 block mb-1">Target Goal ($ USD)</label>
                <input
                  type="number"
                  required
                  value={newGoal}
                  onChange={(e) => setNewGoal(e.target.value)}
                  className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none"
                />
              </div>
            </div>

            <div>
              <label className="font-bold text-slate-700 block mb-1">Full Description *</label>
              <textarea
                rows={3}
                required
                placeholder="Describe the target impact in Kampala, Uganda..."
                value={newDesc}
                onChange={(e) => setNewDesc(e.target.value)}
                className="w-full px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-slate-800 focus:outline-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-[#E5533D] hover:bg-[#d0422d] text-white font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer flex items-center justify-center space-x-2"
            >
              <Plus className="w-4 h-4" />
              <span>Create Campaign</span>
            </button>
          </form>
        )}

      </div>
    </div>
  );
};
