// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
// Every Product must belong to a Category
// using the same product.category_id

Product.belongsTo(Category, {
  foreignKey: 'category_id'
});

// Categories have many Products
// using product.category_id

Category.hasMany(Product, {
  foreignKey: 'category_id'
});

// THROUGH TABLE
// Products belongToMany Tags (through ProductTag)

Product.belongsToMany(Tag, {
  through: ProductTag,
  // as: 'product_type',
  foreignKey: 'product_id'
});

// Tags belongToMany Products (through ProductTag)

Tag.belongsToMany(Product, {
  through: ProductTag,
  // as: 'product_type',
    foreignKey: 'tag_id'
});


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
