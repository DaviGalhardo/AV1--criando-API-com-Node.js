const items = [];

const addItem = (item) => {
    items.push(item);
};

const getItems = () => {
    return items;
};

const validateItem = (item) => {
    return item && typeof item === 'string' && item.trim() !== '';
};

module.exports = {
    addItem,
    getItems,
    validateItem,
};