"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import React, { useState } from "react";
import { createCategory } from "@/lib/actions/course.action";
import { CreateCategorySchema } from "@/lib/validations";
import toast from "react-hot-toast";
interface Props {
  type?: string;
}

const CreateCategory = ({ type }: Props) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  // 1. Define your form.
  const form = useForm<z.infer<typeof CreateCategorySchema>>({
    resolver: zodResolver(CreateCategorySchema),
    defaultValues: {
      //   courseName: parsedQuestionDetails?.title || "",
      categoryName: "",
      //   courseDescription: parsedQuestionDetails?.content || "",
      categoryDescription: "",
    },
  });

  // 2. Define a submit handler.
  async function onSubmit(values: z.infer<typeof CreateCategorySchema>) {
    setIsSubmitting(true);
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    try {
      // make an async call to your api -> create a new Question
      // contain form data
      // navigate to home page
      //   if (type === "Edit") {
      //     await editQuestion({
      //       title: values.title,
      //       content: values.explanation,
      //       questionId: parsedQuestionDetails._id,
      //       path: pathname,
      //     });
      //     router.push(`/question/${parsedQuestionDetails._id}`);
      //   } else {
      await createCategory({
        categoryName: values.categoryName,
        categoryDescription: values.categoryDescription,
      });
      toast.success("Course created");
      //   }
    } catch (err) {
      console.log(err);
    } finally {
      setIsSubmitting(false);
    }
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex w-full flex-col gap-10 "
      >
        <FormField
          control={form.control}
          name="categoryName"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="paragraph-semibold text-white">
                Category Name <span className="text-pink-300">*</span>
              </FormLabel>
              <FormControl className="mt-3.5">
                <Input
                  {...field}
                  className="no-focus paragraph-regular bg-pure-greys-300 border-white text-white min-h-[56px] border"
                />
              </FormControl>
              <FormDescription className="body-regular mt-2.5 text-pure-greys-300 ">
                Be specific and imagine you&apos;re asking a question to another
                person.
              </FormDescription>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="categoryDescription"
          render={({ field }) => (
            <FormItem className="flex w-full flex-col">
              <FormLabel className="paragraph-semibold text-white ">
                Category Description <span className="text-pink-300">*</span>
              </FormLabel>
              <FormControl className="mt-3.5">
                <Input
                  {...field}
                  className="no-focus paragraph-regular bg-pure-greys-300 border-white text-white min-h-[56px] border"
                />
              </FormControl>
              <FormDescription className="body-regular mt-2.5 text-pure-greys-300 ">
                Write down the description of your course
              </FormDescription>
              <FormMessage className="text-red-500" />
            </FormItem>
          )}
        />

        <Button
          type="submit"
          className="px-8 py-4 self-center bg-white duration-300 hover:scale-105 transition-all cursor-pointer  w-fit !text-black "
          disabled={isSubmitting}
        >
          {isSubmitting ? (
            <>{type === "Edit" ? "Editing ..." : "Creating..."}</>
          ) : (
            <>{type === "Edit" ? "Edit Course" : "Create Course"}</>
          )}
        </Button>
      </form>
    </Form>
  );
};

export default CreateCategory;
