import { readLaterStorage } from '../readLater/readLaterStorageController';
import { generateReadLaterList } from '../readLater/generateReadLaterList';

export function onReadLaterClick (data) {
    readLaterStorage.add(data, () => {
        document.getElementById(`read_later_${data.id}`).classList.add('hide');
        generateReadLaterList();
    });
}
