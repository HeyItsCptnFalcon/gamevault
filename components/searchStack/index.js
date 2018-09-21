import { createStackNavigator } from 'react-navigation';

import SearchPage from './searchPage';
import SearchResults from './searchResults';
import GameDetails from './gamedetails';

const SearchStack = createStackNavigator({
    SearchPage: SearchPage,
    Results: SearchResults,
    Details: GameDetails
},
{
    initialRouteName: 'SearchPage'
});

export default SearchStack;