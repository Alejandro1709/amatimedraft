import Head from "next/head";
import Header from "./Header";
import Wrapper from "./Wrapper";

type LayoutProps = {
  title?: string;
  description?: string;
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ title = "Amatime", description = "Amatime is an app where you can ask questions to alefsdev", children }) => {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <Header title={title.split('|')[1]} />
        {children}
        {/* <footer className="flex flex-row justify-center items-center gap-4 border p-4 bg-white">
          <h2 className="text-2xl font-medium">Footer</h2>
        </footer> */}
      </Wrapper>
    </>
  )
};

export default Layout;