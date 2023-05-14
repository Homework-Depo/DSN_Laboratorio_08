import Product from '../models/Product';

let title: String
let locals: Object

export const findAll = async (req, res) => {
  let products = [];
  title = "Productos";

  try {
    products = await Product.find({});
  } catch (error) {
    console.log(error.message);
  }

  locals = { title, products }
  res.render("index", locals);
};

export const findById = async (req, res) => {
  let product
  const { id } = req.query
  title = "Editar";

  try {
    product = await Product.findById({ _id: id });
  } catch (error) {
    console.log(error.message)
  }

  locals = { title, product }
  res.render("edit", locals)
};

export const findByIdAndDelete = async (req, res) => {
  const { pid } = req.body

  const product = await Product.findByIdAndDelete({ _id: pid });

  res.redirect("/");
};

export const create = async (req, res) => {

  const { name, brand, model, price, stock } = req.body;

  const product = new Product({
    name, brand, model, price, stock
  });

  try {
    await product.save();
    console.log(product);
  } catch (error) {
    console.log(error.message);
  }

  res.redirect("/");
};

export const replaceOne = async (req, res) => {
  const { name, brand, model, price, stock } = req.body;

  try {
    const product = await Product.replaceOne({ name },
      { name, brand, model, price, stock });
  } catch (error) {
    console.log(error.message)
  }

  res.redirect("./");
};