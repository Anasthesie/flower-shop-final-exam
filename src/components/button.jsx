export default function Button({
  type = "button",
  text,
  onClick,
  className = "",
}) {
  return (
    <div>
      <button
        type={type}
        onClick={onClick}
        className={`w-full p-3 rounded-md shadow-md focus:outline-none hover:bg-opacity-80 cursor-pointer ${className}`}
      >
        {text}
      </button>
    </div>
  );
}
