const Shop = require('../models/Shop.model');

module.exports.create = shop => {
    return Shop.create(shop);
}


module.exports.getAll = async function (query) {
    try {
        let shops = await Shop.find(query)
        return shops;
    } catch (e) {
         throw Error('Something went wrong in getAll')
    }
}

module.exports.getById = async function (id) {
    try {
        let shop = await Shop.findById(id)
         return shop;
    } catch (e) {
         throw Error('Something went wrong in getById')
    }
   
  };


  module.exports.updateById = async function (id, shopParam) {
    const shop = await Shop.findById(id);

    // validate
    if (!shop) throw 'Shop not found';
    if (shop.name !== shopParam.name && await Shop.findOne({ name: shopParam.name })) {
        throw 'name "' + shopParam.name + '" is already exist';
    }
    if (shop.owner !== shopParam.owner && await Shop.findOne({ name: shopParam.owner })) {
        throw 'owner "' + shopParam.owner + '" is already exist';
    }
    if (shop.category !== shopParam.category && await Shop.findOne({ name: shopParam.category })) {
        throw 'category "' + shopParam.category + '" is already exist';
    }
       
    // copy shopParam properties to shop
    Object.assign(shop, shopParam);

    await shop.save();
}

module.exports.deleteById = async function(id) {
    await Shop.findByIdAndRemove(id);
}