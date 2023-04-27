/* eslint-disable @typescript-eslint/no-floating-promises */
import { useRef } from "react";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import Link from "next/link";
import { api } from "@/utils/api";
import Alert from "@/components/Alert";
import type { NextPage } from "next";

const AskPage: NextPage = () => {
  const questionRef = useRef<HTMLTextAreaElement>(null);
  const authorRef = useRef<HTMLInputElement>(null);

  const router = useRouter();

  const { mutate, isLoading, error } = api.questions.createOne.useMutation();

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

    if (!questionRef.current?.value) return

    mutate({
      question: questionRef.current.value,
      author: authorRef.current?.value || "Anonymous"
    })

    questionRef.current.value = "";
    authorRef.current && (authorRef.current.value = "");

    router.push("/");
  };

  return (
    <Layout title="Amatime | Ask" description="">
      {error ? <Alert type="error" message={error.message} /> : null}
      {isLoading ? <Alert type="loading" message="Loading..." /> : null}
      <Alert type="warning" message="Your question won't be public until the admin makes it public." />
      <section className="p-4 border border-slate-700">
        <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-500" htmlFor="title">Write your question:</label>
            <textarea className="p-2 border resize-none text-white bg-slate-800 border-slate-700" required ref={questionRef} onChange={handleChange}></textarea>
          </div>
          <div className="flex flex-col gap-1">
            <label className="text-sm text-gray-500" htmlFor="author">Who is asking the question?:</label>
            <input className="p-2 border bg-slate-800 text-white border-slate-700" type="text" placeholder="defaults to 'Anonymous'" ref={authorRef} onChange={handleChange} />
          </div>
          <button className="p-2 bg-blue-500 text-white font-medium hover:bg-blue-600 active:bg-blue-700 transition-all rounded-lg mt-2" type="submit">Send</button>
          <Link href="/" className="p-2 bg-red-500 text-center text-white font-medium hover:bg-red-600 active:bg-red-700 transition-all rounded-lg mt-1" type="button">Cancel</Link>
        </form>
      </section>
    </Layout>
  );
};

export default AskPage;