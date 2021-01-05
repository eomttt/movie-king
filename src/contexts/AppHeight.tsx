import {
  createContext, FunctionComponent, ReactNode, useState,
} from 'react';

interface AppHeightProviderProps {
  children: ReactNode;
}

export const AppHeightContext = createContext(null);

export const AppHeightProvider: FunctionComponent<AppHeightProviderProps> = ({
  children,
}: AppHeightProviderProps) => {
  const [appHeight, setAppHeight] = useState(0);

  return (
    <AppHeightContext.Provider value={{ appHeight, setAppHeight }}>
      {children}
    </AppHeightContext.Provider>
  );
};
