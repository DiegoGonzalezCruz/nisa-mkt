import React, { useEffect, useState, createContext, useContext } from 'react';
import { Modal } from './Modal';
import { JoinPilotModal } from './JoinPilotModal';
import { Sparkles } from 'lucide-react';
interface ModalContextType {
  isSignupModalOpen: boolean;
  openSignupModal: () => void;
  closeSignupModal: () => void;
  isJoinPilotModalOpen: boolean;
  openJoinPilotModal: (originX?: number, originY?: number) => void;
  closeJoinPilotModal: () => void;
  modalOrigin: {
    x: number;
    y: number;
  } | null;
}
const ModalContext = createContext<ModalContextType | undefined>(undefined);
export const useModal = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
};
interface ModalProviderProps {
  children: ReactNode;
}
export const ModalProvider: React.FC<ModalProviderProps> = ({
  children
}) => {
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [isJoinPilotModalOpen, setIsJoinPilotModalOpen] = useState(false);
  const [modalOrigin, setModalOrigin] = useState<{
    x: number;
    y: number;
  } | null>(null);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const openSignupModal = () => {
    setFormSubmitted(false);
    setIsSignupModalOpen(true);
  };
  const closeSignupModal = () => setIsSignupModalOpen(false);
  const openJoinPilotModal = (originX?: number, originY?: number) => {
    if (originX !== undefined && originY !== undefined) {
      setModalOrigin({
        x: originX,
        y: originY
      });
    } else {
      // Default to center of screen if no coordinates provided
      setModalOrigin({
        x: window.innerWidth / 2,
        y: window.innerHeight / 2
      });
    }
    setIsJoinPilotModalOpen(true);
  };
  const closeJoinPilotModal = () => setIsJoinPilotModalOpen(false);
  // Add cache-busting timestamp parameter
  const formUrl = `https://cdn.forms-content-1.sg-form.com/433ba15d-81c9-11f0-8078-3eee6f6a2b83?t=${Date.now()}`;
  // Listen for messages from the iframe
  useEffect(() => {
    const handleMessage = (event: MessageEvent) => {
      // Check if the message is from our form
      if (event.data && event.data.formSubmitted) {
        setFormSubmitted(true);
      }
    };
    window.addEventListener('message', handleMessage);
    return () => window.removeEventListener('message', handleMessage);
  }, []);
  return <ModalContext.Provider value={{
    isSignupModalOpen,
    openSignupModal,
    closeSignupModal,
    isJoinPilotModalOpen,
    openJoinPilotModal,
    closeJoinPilotModal,
    modalOrigin
  }}>
      {children}
      <Modal isOpen={isSignupModalOpen} onClose={closeSignupModal}>
        <div className="w-full">
          {formSubmitted ? <div className="text-center py-8">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 text-green-600 mb-4">
                <Sparkles className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Thanks for joining!
              </h3>
              <p className="text-base text-gray-600 leading-relaxed">
                We'll be in touch soon.
              </p>
            </div> : <iframe src={formUrl} className="w-full h-[660px] border-0" title="Nisa Sign Up Form" frameBorder="0" onLoad={e => {
          // Add script to the iframe to notify parent when form is submitted
          const iframe = e.currentTarget;
          const iframeWindow = iframe.contentWindow;
          if (iframeWindow) {
            try {
              iframeWindow.addEventListener('submit', () => {
                window.parent.postMessage({
                  formSubmitted: true
                }, '*');
              });
            } catch (error) {
              console.error('Could not add event listener to iframe:', error);
            }
          }
        }}></iframe>}
        </div>
      </Modal>
      <JoinPilotModal isOpen={isJoinPilotModalOpen} onClose={closeJoinPilotModal} origin={modalOrigin} />
    </ModalContext.Provider>;
};