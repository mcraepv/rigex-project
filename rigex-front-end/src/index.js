import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import { Router } from 'react-router-dom';
import { Provider } from 'react-redux';

import './styles/styles.scss';
import App from './App';
import { store } from './store/store';
import { typeDefs } from './constants/typeDefs';
import history from './utils/history';

const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
  },
  query: {
    fetchPolicy: 'no-cache',
  },
  mutate: {
    fetchPolicy: 'no-cache',
  },
};

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  typeDefs,
  cache: new InMemoryCache(),
  defaultOptions,
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <Router history={history}>
        <App />
      </Router>
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);
