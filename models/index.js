// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');
const { belongsTo } = require('./Product');

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id'
});
// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id'
});
// Products belongToMany Tags (through ProductTag)
//vlnote: confused about which foreignKey to use!
Product.belongsToMany(Tag, {
  through: ProductTag,
  as: 'inventory',
  foreignKey: 'product_id'
});
// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  through: ProductTag,
  as: 'inventory',
    foreignKey: 'tag_id'
});
// following the code in the module but don't
// really see why this has to be double defined:

ProductTag.belongsTo(Product, {
  foreignKey: 'product_id'
});
ProductTag.belongsTo(Tag, {
  foreignKey: 'tag_id'
});
Product.hasMany(ProductTag, {
  foreignKey: 'product_id'
})
Tag.hasMany(ProductTag, {
  foreignKey: 'tag_id'
});


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
