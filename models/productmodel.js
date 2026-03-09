import mongoose from "mongoose";
const productSchema = mongoose.Schema({
  name: { type: String, required: true },
  desc: { type: String, required: true },
  price: { type: Number, required: true },
  imageUrl: { type: String },
});
const productmodel = mongoose.model("products", productSchema);



// const productModel = [
//     {id: 1,name: "product1",price:100},
//     {id: 2,name: "product1",price:200},
//     {id: 1,name: "product1",price:300},
// ];
export default productmodel