import React, { useState, createContext, useContext } from 'react';
import { Modal } from './Modal';
interface ModalContextType {
  isSignupModalOpen: boolean;
  openSignupModal: () => void;
  closeSignupModal: () => void;
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
  const openSignupModal = () => setIsSignupModalOpen(true);
  const closeSignupModal = () => setIsSignupModalOpen(false);
  // Add cache-busting timestamp parameter
  const formUrl = `https://cdn.forms-content-1.sg-form.com/433ba15d-81c9-11f0-8078-3eee6f6a2b83?t=${Date.now()}`;
  return <ModalContext.Provider value={{
    isSignupModalOpen,
    openSignupModal,
    closeSignupModal
  }}>
      {children}
      <Modal isOpen={isSignupModalOpen} onClose={closeSignupModal}>
        <div className="w-full">
          <iframe src={formUrl} className="w-full h-[660px] border-0" title="Nisa Sign Up Form" frameBorder="0"></iframe>
        </div>
      </Modal>
    </ModalContext.Provider>;
};