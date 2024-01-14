import * as z from "zod";
export const CreateCategorySchema = z.object({
  categoryName: z.string().min(5).max(50),
  categoryDescription: z.string().min(100).max(500),
});
