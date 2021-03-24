import { getData } from '../fetch/fetchData';
import { filters } from './filtersWatcher';

let fromDate = new Date(new Date().setDate(new Date().getDate() - 30));
fromDate = fromDate.toISOString().substring(0, 10);

export async function getNewsList() {
  try {
    const newsList = await getData(
      '/search',
      {
        'from-date': fromDate
      },
    );
    return newsList;
  } catch (error) {
    console.error(error);
    document.querySelector('body').innerHTML = 'Service under maintenance... We will be back soon...';
  }
}

export async function getFilteredNewsList() {
  let query = {
    'from-date': fromDate
  };
  if(filters.search !== ''){
    query.q = filters.search;
  }
  if(filters.section !== 'all'){
    query.section = filters.section;
  }
  if(filters.page !== null){
    query.page = filters.page;
  }
  try {
    const newsList = await getData(
      '/search',
      query,
    );

    return newsList;
  } catch (error) {
    console.error(error);
  }
}

