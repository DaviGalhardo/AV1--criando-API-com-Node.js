const items = [];

const getItems = (req, res) => {
    res.status(200).json(items);
};

const createItem = (req, res) => {
    const { titulo } = req.body;

    // validação mínima: título obrigatório
    if (!titulo || titulo.trim() === "") {
        return res.status(400).json({ erro: "Título é obrigatório." });
    }

    const nova = {
        id: items.length + 1,
        titulo: titulo.trim(),
        concluida: false,
    };

    items.push(nova);
    res.status(201).json(nova);
};

module.exports = {
    getItems,
    createItem,
};