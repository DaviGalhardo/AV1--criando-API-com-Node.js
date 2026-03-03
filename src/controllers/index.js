const items = [];

const getItems = (req, res) => {
    res.status(200).json(items);
};

const createItem = (req, res) => {
    const newItem = req.body;
    items.push(newItem);
    res.status(201).json(newItem);
};

module.exports = {
    getItems,
    createItem,
};