import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import rootReducer from './components/reducers';
import { createBottomTabNavigator } from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';


// import SearchPage from './components/searchPage';
// import SearchResults from './components/searchResults';
// import NewsPage from './components/newspage';
// import NewsArticle from './components/newsarticle';
// import GameDetails from './components/gamedetails';
// import Footer from './components/footer';

import NewsStack from './components/newsStack';
import SearchStack from './components/searchStack'


const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(thunk),
)

const TabNavigator = createBottomTabNavigator(
  {
    News: NewsStack,
    Search: SearchStack,
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'News') {
          iconName = `ios-paper${focused ? '' : '-outline'}`;
        } else if (routeName === 'Search') {
          iconName = `ios-search${focused ? '' : '-outline'}`;
        }

        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);


const App = () => (
  <Provider store={store}>
    <TabNavigator />
  </Provider>
)

export default App;