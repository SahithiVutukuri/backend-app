import productmodel from "../models/productmodel.js";

const showProducts = async (req,res) => {
    const products = await productmodel.find()
    res.render("store/products",{products})
}

export {showProducts}