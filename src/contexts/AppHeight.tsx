import React, { useState } from 'react';

interface AppHeightProviderProps {
  children: React.ReactNode;
}

export const AppHeightContext = React.createContext(null);

export const AppHeightProvider: React.FunctionComponent<AppHeightProviderProps> = ({
  children,
}: AppHeightProviderProps) => {
  const [appHeight, setAppHeight] = useState(0);

  return (
    <AppHeightContext.Provider value={{ appHeight, setAppHeight }}>
      {children}
    </AppHeightContext.Provider>
  );
};
