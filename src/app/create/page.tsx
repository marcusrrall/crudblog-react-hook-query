"use client";
import BackButton from "@/components/back-button";
import FormPost from "@/components/form-post";
import { FormInputPost } from "@/types";
import { SubmitHandler } from "react-hook-form";

export default function CreatePage() {
  const handleCreatePost: SubmitHandler<FormInputPost> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <BackButton />
      <h1 className="text-2xl my-4 font-bold text-center">Add new Post</h1>
      <FormPost submit={handleCreatePost} />
    </div>
  );
}
