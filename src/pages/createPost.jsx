import React from "react";
import { Form, useNavigate } from "react-router-dom";
import Preview from "../assets/preview.png";
import { getRandomPrompt } from "../utils";
import FormField from "../components/Formfield/formField";
import loader from "../components/Loader/loader";

function createPost() {
  const navigate = useNavigate();
  const [form, setForm] = React.useState({
    name: "",
    prompt: "",
    photo: "",
  });
  const [generatingImg, setGeneratingImg] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const handleSubmit = () => {};

  return (
    <div>
      <section className="max-w-7xl mx-auto">
        <div>
          <h1 className="font-extrabold text-[#222328] text-[32px]">
            Create a Post
          </h1>
          <p className="mt-2 text-[#666e75] text-[16px] max-w [500px]">
            Create imaginative and visually stunning images throught DALL-E AI
            and share them with the community
          </p>
        </div>
        <form className="mt-16 max-w-3xl" onSubmit={handleSubmit}>
          <div className="flex flec-col gap-5">
            <FormField />
          </div>
        </form>
      </section>
    </div>
  );
}

export default createPost;
