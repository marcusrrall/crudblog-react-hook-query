"use client";
import FormPost from "@/components/form-post";
import { FormInputPost } from "@/types";
import { SubmitHandler } from "react-hook-form";

export default function EditPage() {
  const handleEditPost: SubmitHandler<FormInputPost> = (data) => {
    console.log(data);
  };

  return (
    <div>
      <h1 className="text-2xl my-4 font-bold text-center">Edit Post</h1>
      <FormPost submit={handleEditPost} isEditing />
    </div>
  );
}
