import Alert from "@/components/Alert";
import List from "@/components/List";
import Layout from "@/components/Layout";
import { type NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Layout title="Amatime | alefsdev" description="">
      <main className="space-y-2 bg-white">
        <Alert message="This is a message..." />
        <List />
      </main>
    </Layout>
  );
};

export default Home;
