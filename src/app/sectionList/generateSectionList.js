import { getSectionList } from './getSectionList';

export function generateSectionList () {
  getSectionList().then(data => {
    if(typeof data !== 'undefined') {
      let results = data.response.results;
      let sectionSelect = document.getElementById('sectionSelect');

      results.map((item) => {
        let option = document.createElement('option');
        option.value = item.id;
        option.text = item.webTitle;
        sectionSelect.appendChild(option);
      });
    }else{
      document.getElementById('sectionSelector').innerHTML = 'Module under maintenance...';
    }
  });
}
