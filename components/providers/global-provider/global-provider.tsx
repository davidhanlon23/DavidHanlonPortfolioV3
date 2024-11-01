'use client';

import React, { createContext, useContext, useState } from 'react';

type ViewType = 'default' | 'hacker';

interface GlobalContextType {
  view: ViewType;
  setView: (view: ViewType) => void;
}

const GlobalContext = createContext<GlobalContextType | undefined>(undefined);

interface GlobalProviderProps {
  children: React.ReactNode;
}

const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [view, setView] = useState<ViewType>('default');

  const value = {
    view,
    setView,
  };

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  );
}

export function useGlobal() {
  const context = useContext(GlobalContext);
  
  if (context === undefined) {
    throw new Error('useGlobal must be used within a GlobalProvider');
  }
  
  return context;
}

export default GlobalProvider;