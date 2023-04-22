import { useEffect } from "react";
import { useState } from "react";
import { copy, linkIcon, loader, tick } from "../assets";

const Demo = () => {
  //
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });

  //
  const handleSubmit = async (e) => {
    alert("submitted" + e);
  };

  //
  const [copied, setCopied] = useState();

  //
  useEffect(() => {}, []);

  return (
    <section className="mt-16 w-full max-w-xl">
      <div className="flex flex-col w-full gap-2">
        <form
          className="relative flex justify-center items-center"
          onSubmit={handleSubmit}
        >
          <img
            src={linkIcon}
            alt="link-icon"
            className="absolute left-0 my-2 ml-3 w-5"
          />
          <input
            type="url"
            placeholder="Enter URL here"
            value={article.url}
            onChange={(e) => setArticle({ ...article, url: e.target.value })}
            required
            className="url_input peer"
          />
          <button
            type="submit"
            className="submit_btn peer-focus:border-gray-700 peer-focus:text-gray-700 "
          >
            <p>↵</p>
          </button>
        </form>
        <div className="flex flex-col gap-1 max-h-60 overflow-y-auto"></div>
      </div>
      <div className="my-10 max-w-full flex justify-center items-center"></div>
    </section>
  );
};

export default Demo;
