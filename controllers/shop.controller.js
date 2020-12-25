const shopService = require('../services/shop.service');

module.exports.create = async (req, res, next) => {
    try {
        const shop = await shopService.create(req.body);
        return res.status(200).json(shop);
    } catch (e) {
        console.error(e);
        return res.status(500).json({ message: 'Something went wrong'});
    }
}

module.exports.getAll = async function (req, res, next) {
    try {
        const shops = await shopService.getAll({})
        return res.status(200).json({ status: 200, data: shops, message: "Successfully Shops Retrieved" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}

module.exports.getById = async function (req, res, next) {
    try {
        const shop = await shopService.getById(req.params.id)
        return res.status(200).json({ status: 200, data: shop, message: "Successfully Shop Retrieved" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
}


module.exports.updateById = async function (req, res, next) {
    try {
        const shop = await shopService.updateById(req.params.id, req.body)
        return res.status(200).json({ status: 200, data: shop, message: "Shop updated successfully" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
    
}


module.exports.deleteById = async function (req, res, next) {
    try {
        const shop = await shopService.deleteById(req.params.id)
        return res.status(200).json({ status: 200, data: shop, message: "Shop deleted successfully" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }
    
}






