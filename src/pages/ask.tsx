import Layout from "@/components/Layout";
import Link from "next/link";
import { useRef } from "react";
import type { NextPage } from "next";

const AskPage: NextPage = () => {
  const questionRef = useRef<HTMLTextAreaElement>(null);
  const authorRef = useRef<HTMLInputElement>(null);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
    event.preventDefault();

    if (event.target === questionRef.current) {
      questionRef.current.value = event.target.value;
    } else if (event.target === authorRef.current) {
      authorRef.current.value = event.target.value;
    } else {
      console.log("Unknown target");
    }
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    console.log(questionRef.current?.value);
    console.log(authorRef.current?.value);
  };

  return (
    <Layout title="Amatime | Ask" description="">
      <section className="p-4 border">
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-500" htmlFor="title">Write your question:</label>
            <textarea className="p-2 border resize-none" required ref={questionRef} onChange={handleChange}></textarea>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-500" htmlFor="author">Who is asking the question?:</label>
            <input className="p-2 border" type="text" placeholder="defaults to 'Anonymous'" ref={authorRef} onChange={handleChange} />
          </div>
          <button className="p-2 bg-blue-400 text-white font-medium hover:bg-blue-500 active:bg-blue-600 transition-all rounded-lg mt-2" type="submit">Send</button>
          <Link href="/" className="p-2 bg-red-400 text-center text-white font-medium hover:bg-red-500 active:bg-red-600 transition-all rounded-lg mt-1" type="button">Cancel</Link>
        </form>
      </section>
    </Layout>
  );
};

export default AskPage;