import BackButton from "@/components/back-button";
import ButtonAction from "@/components/button-action";

export default function BlogDetailPage() {
  return (
    <>
      <BackButton />
      <div className="mb-8">
        <h1 className="text-2xl font-bold my-4">Blog</h1>
        <ButtonAction />
      </div>
      <p className="text-slate-500">Post One Content</p>
    </>
  );
}
