import { onReadLaterClick } from '../../app/newsList/onReadLaterClick';
import { readLaterStorage } from '../../app/readLater/readLaterStorageController';

describe('Read later button', () => {
  test('it should fire events of adding data to storage and changing self class to hidden', () => {

    const readLaterData = {
      id: 'test-id',
      title: 'Test title',
      webUrl: 'http://web.url/'
    };

    const readLaterBtn = `<button class='btn' id='read_later_${readLaterData.id}'></button>`;
    document.body.innerHTML = `${readLaterBtn}<div class="readLaterList"></div>`;

    onReadLaterClick(readLaterData);

    expect(readLaterStorage.checkIfExists(readLaterData)).toBe(JSON.stringify(readLaterData));
    expect(document.getElementById(`read_later_${readLaterData.id}`).classList.contains('hide')).toBe(true);
  });
});
