import React from 'react';
import './App.css';

interface IProps {
  test: string;
}

const App: React.FunctionComponent<IProps> = ({ test }) => {
  return <div className="App" />;
};

export default App;
