import mongoose from "mongoose";

interface IProduct {
  name: String,
  brand: String,
  model: String,
  price: Number,
  stock: Number
};

const productSchema = new mongoose.Schema<IProduct>({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  model: { type: String, required: true },
  price: { type: Number, required: true },
  stock: { type: Number, required: true },
});

const Product = mongoose.model<IProduct>('Product', productSchema);

export default Product;
