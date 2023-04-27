import Link from "next/link";

type HeaderProps = {
  title?: string;
};

const Header: React.FC<HeaderProps> = ({ title = "Amatime | alefsdev" }) => {
  return (
    <header className="flex flex-row justify-center items-center gap-4 border text-white border-slate-700 p-4 bg-slate-800">
      <h2 className="text-2xl font-medium">{title}</h2>
      <Link className="p-2 bg-blue-500 text-white hover:bg-blue-600 active:bg-blue-700 transition-all rounded-lg ml-auto" href="/ask">Ask a question</Link>
    </header>
  )
};

export default Header;