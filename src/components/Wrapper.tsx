type WrapperProps = {
  children: React.ReactNode;
};

const Wrapper: React.FC<WrapperProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen md:max-w-screen-md md:mx-auto space-y-2 p-4">
      {children}
    </div>
  )
};

export default Wrapper;