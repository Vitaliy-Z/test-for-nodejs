import { Schema, model } from "mongoose";

const catSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Set name for cat"]
    },
    age: {
      type: Number,
      min: 1,
      max: 30,
      required: [true, "Set age for cat"]
    },
    isVaccinated: { type: Boolean, default: false },
    feature: {
      type: Array,
      set: (data) => data || []
    },

    owner: { name: String, age: Number }
  },
  { versionKey: false, timestamps: true }
);

const Cat = model("cat", catSchema);

export default Cat;
