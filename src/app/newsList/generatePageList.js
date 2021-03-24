export function generatePageList (numberOfPages) {
  let pageSelect = document.getElementById('activePageSelect');
  if(!pageSelect) {
    pageSelect = document.createElement('select');
    pageSelect.setAttribute('id', 'activePageSelect');
  }


    pageSelect.innerHTML = '';
    for (let i = 1; i <= numberOfPages; i++) {
      let option = document.createElement('option');
      option.value = i;
      option.text = i;
      pageSelect.appendChild(option);
    }

}
