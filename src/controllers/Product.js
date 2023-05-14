"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceOne = exports.create = exports.findByIdAndDelete = exports.findById = exports.findAll = void 0;
const Product_1 = __importDefault(require("../models/Product"));
let title;
let locals;
const findAll = async (req, res) => {
    let products = [];
    title = "Productos";
    try {
        products = await Product_1.default.find({});
    }
    catch (error) {
        console.log(error.message);
    }
    locals = { title, products };
    res.render("index", locals);
};
exports.findAll = findAll;
const findById = async (req, res) => {
    let product;
    const { id } = req.query;
    title = "Editar";
    try {
        product = await Product_1.default.findById({ _id: id });
    }
    catch (error) {
        console.log(error.message);
    }
    locals = { title, product };
    res.render("edit", locals);
};
exports.findById = findById;
const findByIdAndDelete = async (req, res) => {
    const { pid } = req.body;
    const product = await Product_1.default.findByIdAndDelete({ _id: pid });
    res.redirect("/");
};
exports.findByIdAndDelete = findByIdAndDelete;
const create = async (req, res) => {
    const { name, brand, model, price, stock } = req.body;
    const product = new Product_1.default({
        name, brand, model, price, stock
    });
    try {
        await product.save();
        console.log(product);
    }
    catch (error) {
        console.log(error.message);
    }
    res.redirect("/");
};
exports.create = create;
const replaceOne = async (req, res) => {
    const { name, brand, model, price, stock } = req.body;
    try {
        const product = await Product_1.default.replaceOne({ name }, { name, brand, model, price, stock });
    }
    catch (error) {
        console.log(error.message);
    }
    res.redirect("./");
};
exports.replaceOne = replaceOne;
//# sourceMappingURL=Product.js.map