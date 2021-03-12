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

// /////// further associations as per module ??

// // ProductTag.product_id links it back to Product
// ProductTag.belongsTo(Product, {
//   foreignKey: 'product_id'
// });

// //ProductTag.tag_id links it back to tag
// ProductTag.belongsTo(Tag, {
//   foreignKey: 'tag_id'
// });
// //////////////////////////
// // associations via through table
// // shouldn't this be product_tag id?

// Product.hasMany(ProductTag, {
//   foreignKey: 'product_id'
// })

// Tag.hasMany(ProductTag, {
//   foreignKey: 'tag_id'
// });


module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
