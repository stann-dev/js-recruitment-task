import { readLaterStorage } from './readLaterStorageController';

export function generateReadLaterList() {
  let readLaterListContainer = document.querySelector('.readLaterList');
  readLaterListContainer.innerHTML = '';
  let readLaterStorageList = readLaterStorage.getList();

  if(readLaterStorageList.length < 1){
    readLaterListContainer.innerHTML = 'Add some news to read them later...';
  }

  readLaterStorageList.map((item) => {
    let parsedItem = JSON.parse(item);
    let readLaterElement = document.createElement('li');
    readLaterElement.innerHTML = `
             
                <h4 class="readLaterItem-title">${parsedItem.title}</h4>
                <section>
                  <button class="button button-clear remove">Remove</button>
                  <a href="${parsedItem.webUrl}" target="_blank" class="button">Read</a>
                </section>
              
  `;
    readLaterElement.querySelector('.remove').addEventListener('click', () => {
      readLaterStorage.remove(parsedItem.id, () => {
        if(document.getElementById(`read_later_${parsedItem.id}`)) {
          document.getElementById(`read_later_${parsedItem.id}`).classList.remove('hide');
        }
        generateReadLaterList();
      });
    });
    readLaterListContainer.appendChild(readLaterElement);
  });

}
