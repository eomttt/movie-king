import { AppHeightProvider } from 'contexts/AppHeight';
import ReactDOM from 'react-dom';
import { QueryCache, ReactQueryCacheProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query-devtools';
import { BrowserRouter } from 'react-router-dom';
import App from './App';

const queryCache = new QueryCache();

console.log('ENV', process.env.NODE_ENV, process.env.API_ENV);

ReactDOM.render(
  <ReactQueryCacheProvider queryCache={queryCache}>
    <AppHeightProvider>
      <BrowserRouter>
        <App />
        <ReactQueryDevtools initialIsOpen />
      </BrowserRouter>
    </AppHeightProvider>
  </ReactQueryCacheProvider>,
  document.getElementById('root'),
);
