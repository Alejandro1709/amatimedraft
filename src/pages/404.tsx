import Layout from "@/components/Layout";
import Link from "next/link";
import type { NextPage } from "next";

const NotFoundPage: NextPage = () => {
  return (
    <Layout title="Amatime | Not Found" description="Page not found">
      <section className="p-4 border text-center space-y-2">
        <div className="mb-2">
          <h1 className="text-2xl font-medium">404 page not found.</h1>
          <p className="text-lg">The page you are looking for does not exist or has been moved.</p>
        </div>
        <Link className="text-blue-400 font-medium hover:underline" href="/">Go back to home</Link>
      </section>
    </Layout>
  )
};

export default NotFoundPage;