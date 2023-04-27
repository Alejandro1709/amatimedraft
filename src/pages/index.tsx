import List from "@/components/List";
import Layout from "@/components/Layout";
import { type NextPage } from "next";

const Home: NextPage = () => {
  return (
    <Layout title="Amatime | alefsdev" description="Amatime is an app where you can ask questions to alefsdev">
      <main className="space-y-2 bg-white">
        <List />
      </main>
    </Layout>
  );
};

export default Home;
