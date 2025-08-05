import React from "react";

interface ComingSoonModalProps {
  open: boolean;
  onClose: () => void;
}

const ComingSoonModal: React.FC<ComingSoonModalProps> = ({ open, onClose }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-xl shadow-lg p-8 w-full max-w-md relative animate-fade-in">
        <button
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl"
          onClick={onClose}
          aria-label="Close"
        >
          &times;
        </button>
        <div className="flex flex-col items-center">
          <span className="text-5xl mb-4">🚧</span>
          <h2 className="text-2xl font-bold mb-2">Coming Soon</h2>
          <p className="text-gray-600 text-center mb-2">
            The Careers page is launching soon. Stay tuned for exciting opportunities!
          </p>
        </div>
      </div>
    </div>
  );
};

export default ComingSoonModal;
