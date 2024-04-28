import { Schema, model } from "mongoose";

const collection = "ticket";

const ticketSchema = new Schema({
  code: {
    type: String,
    required: true,
    unique: true,
  },
  amount: Number,
  purchase_datetime: {
    type: Date,
    default: Date.now,
  },
  cart: {
    type: Schema.Types.ObjectId,
    ref: 'cart',
    required: true
  },
  purchaser: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true
  },
});

userSchema.pre('findOne', function () {
  this.populate('cart.carts')
  this.populate('purchaser.user')
})

const ticketModel = model(collection, userSchema);
export default ticketModel;