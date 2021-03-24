import { generatePageList } from './generatePageList';
import { generateNewsList } from './generateNewsList';

export function fireAfterNewsFetched(newsData){
  generatePageList(newsData.response.pages);
  generateNewsList(newsData.response.results);
}
