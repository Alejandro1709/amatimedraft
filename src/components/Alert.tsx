type AlertProps = {
  message: string;
  type?: "success" | "loading" | "error" | "warning";
  closeBtn?: boolean;
}

const Alert: React.FC<AlertProps> = ({ message = "This is a message...", type = "loading", closeBtn = false }) => {
  const alertType = type === "success" ? "bg-green-400" : type === "loading" ? "bg-blue-400" : type === "warning" ? "bg-yellow-500" : "bg-red-400";
  return (
    <div className={`flex flex-row ${closeBtn ? "justify-between" : "justify-center"} items-center ${alertType} p-2 text-white font-medium`}>
      <h3 className={`${closeBtn ? "text-left" : "text-center"}`}>{message}</h3>
      {closeBtn ? <button>Close</button> : null}
    </div>
  )
};

export default Alert;