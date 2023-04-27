type HeaderProps = {
  title?: string;
};

const Header = ({ title = "Amatime | alefsdev" }: HeaderProps) => {
  return (
    <header className="flex flex-row justify-center items-center gap-4 border p-4 bg-white">
      <h2 className="text-2xl font-medium">{title}</h2>
    </header>
  )
};

export default Header;