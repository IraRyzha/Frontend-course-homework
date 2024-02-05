function LocalStorageManager() {};

LocalStorageManager.prototype.saveData = function(key, value) {
    console.log(key);
    console.log(value);
    localStorage.setItem(key, value);
};

LocalStorageManager.prototype.getData = function(key) {
    console.log(localStorage.getItem(key));
};

// localStorage.clear();

const localStorageManager = new LocalStorageManager();

localStorageManager.saveData('name', 'Ira');

localStorageManager.getData('name');