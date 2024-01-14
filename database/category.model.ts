import { Schema, model, models, Document } from "mongoose";

export interface ICollection extends Document {
  categoryName: string;
  categoryDescription: string;
  courses: Schema.Types.ObjectId[];
}

const categorySchema = new Schema({
  categoryName: {
    type: String,
    required: true,
  },
  categoryDescription: {
    type: String,
    required: true,
  },
  courses: [
    {
      type: Schema.Types.ObjectId,
      ref: "Lectures",
    },
  ],
});

const Category = models.Category || model("Category", categorySchema);
export default Category;
