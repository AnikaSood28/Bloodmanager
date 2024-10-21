const mongoose = require("mongoose");

const inventorySchema = new mongoose.Schema(
  {
    inventoryType: {
      type: String,
      required: [true, "inventory type require"],
      enum: ["in", "out"],
    },
    bloodGroup: {
      type: String,
      required: [true, "blood group is require"],
      enum: ["DEA 1.1", "DEA 1.2", "DEA 3", "DEA 4", "DEA 5", "DEA 7"],
    },
    quantity: { 
      type: Number,
      require: [true, "blood quanity is require"],
    },
    
    email: {
      type: String,
      required: [true, "Donar Email is Required"],
    },
    organisation: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: [true, "organisation is require"],
    },
    hospital: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      required: function () {
        return this.inventoryType === "out";
      },
    },
    donor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "users",
      //  required: function () {
      //    return this.inventoryType === "in";
      //  },
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Inventory", inventorySchema);