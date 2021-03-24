import './styles/main.css';
import { getNewsList } from './app/newsList/getNewsList';
import { generateSectionList } from './app/sectionList/generateSectionList';
import { fireAfterNewsFetched } from './app/newsList/fireAfterNewsFetched';
import { generateReadLaterList } from './app/readLater/generateReadLaterList';

generateSectionList();
generateReadLaterList();
getNewsList().then(data => fireAfterNewsFetched(data));

// Please use https://open-platform.theguardian.com/documentation/
