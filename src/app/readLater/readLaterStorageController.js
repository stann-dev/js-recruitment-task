function ReadLaterStorage () {
  const storageName = 'readLater';
  if(localStorage.getItem(storageName) === null){
    localStorage.setItem(storageName, JSON.stringify([]));
  }

  this.checkIfExists = (object) => {
    const currentStorage = JSON.parse(localStorage.getItem(storageName));

    return currentStorage.find(item => {
      let parsedItem = JSON.parse(item);
      return parsedItem.id === object.id;
    });
  };

  this.add = (object, callback) => {
    const currentStorage = JSON.parse(localStorage.getItem(storageName));

    if(!this.checkIfExists(object)) {
      currentStorage.push(JSON.stringify(object));
      localStorage.setItem(storageName, JSON.stringify(currentStorage));
      if (typeof callback === 'function') callback();
    }
  };

  this.remove = (id, callback) => {
    let currentStorage = JSON.parse(localStorage.getItem(storageName));
    let itemForRemove = currentStorage.find(item => {
      let parsedItem = JSON.parse(item);
      return parsedItem.id === id;
    });
    const removeIndex = currentStorage.indexOf(itemForRemove);
    if(removeIndex > -1){
      currentStorage.splice(removeIndex, 1);
    }
    localStorage.setItem(storageName, JSON.stringify(currentStorage));
    if(typeof callback === 'function') callback();
  };

  this.getList = () => {
    return JSON.parse(localStorage.getItem(storageName));
  };
}

export const readLaterStorage = new ReadLaterStorage();
