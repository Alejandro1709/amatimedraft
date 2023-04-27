type AlertProps = {
  message: string;
  type?: "success" | "loading" | "error";
}

const Alert = ({ message = "This is a message...", type = "loading" }: AlertProps) => {
  const alertType = type === "success" ? "bg-green-400" : type === "loading" ? "bg-blue-400" : "bg-red-400";
  return (
    <div className={`flex flex-row justify-between items-center ${alertType} p-2 text-white font-medium`}>
      <h3>{message}</h3>
      <button>Close</button>
    </div>
  )
};

export default Alert;