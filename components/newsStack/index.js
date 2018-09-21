import { createStackNavigator } from 'react-navigation';

import NewsArticle from './newsarticle';
import NewsPage from './newspage';

const NewsStack = createStackNavigator({
    Main: NewsPage,
    Article: NewsArticle
},
{
    initialRouteName: 'Main'
});

export default NewsStack;