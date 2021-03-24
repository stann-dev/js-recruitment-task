import { getFilteredNewsList } from './getNewsList';
import { fireAfterNewsFetched } from './fireAfterNewsFetched';
import { generateNewsList } from './generateNewsList';

function FiltersWatcher () {
  this.page = 1;
  this.section = 'all';
  this.search = '';

  let throttler;

  document.getElementById('activePageSelect').addEventListener('change', e => {
    this.page = e.target.value;
    getFilteredNewsList().then(data => generateNewsList(data.response.results));
  });
  document.getElementById('sectionSelect').addEventListener('change', e => {
    this.section = e.target.value;
    getFilteredNewsList().then(data => fireAfterNewsFetched(data));
  });
  document.getElementById('newsContentSearch').addEventListener('keyup', e => {
    clearTimeout(throttler);
    throttler = setTimeout(() => {
      this.search = e.target.value;
      getFilteredNewsList().then(data => fireAfterNewsFetched(data));
    }, 500);
  });
}

export const filters = new FiltersWatcher();
