const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'ProductCategory', required: true },
  price: { type: Number, required: true },
  discountId: { type: mongoose.Schema.Types.ObjectId, ref: 'Discount' },
  inventoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'ProductInventory' },
  createdAt: { type: Date, default: Date.now },
  deletedAt: { type: Date }
});

const ProductCategorySchema = new mongoose.Schema({
  name: { type: String, required: true },
  desc: { type: String },
  createdAt: { type: Date, default: Date.now },
  deletedAt: { type: Date },
});

const DiscountSchema = new mongoose.Schema({
  name: { type: String, required: true },
  desc: { type: String },
  discountPercent: { type: Number, required: true },
  active: { type: Boolean, required: true },
  createdAt: { type: Date, default: Date.now },
  deletedAt: { type: Date },
});

const ProductInventorySchema = new mongoose.Schema({
  SKU: { type: String, required: true },
  quantity: { type: Number, required: true },
  categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'ProductCategory', required: true },
  price: { type: Number, required: true },
  discountId: { type: mongoose.Schema.Types.ObjectId, ref: 'Discount' },
  createdAt: { type: Date, default: Date.now },
  inventoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'ProductInventory', required: true },
  deletedAt: { type: Date },
});

const ProductCategory = mongoose.model('ProductCategory', ProductCategorySchema);
const Product = mongoose.model('Product', productSchema);
const Discount = mongoose.model('Discount', DiscountSchema);
const ProductInventory = mongoose.model('ProductInventory', ProductInventorySchema);