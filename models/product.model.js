const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "product name is required"],
    },
    price: {
      type: Number,
      required: [true, "product price is required"],
      default: 0,
    },
    quantity: {
      type: Number,
      required: [true, "product quantity is required"],
      default: 0,
    },
    image: {
      type: String,
      required: [false, "product image is not required"],
    },
  },
  {
    timestamps: true,
  }
);
