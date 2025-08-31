export default function Button({
  type = "button",
  text,
  onClick,
  className = "",
  ...rest
}) {
  return (
    <div>
      <button
        type={type}
        onClick={onClick}
        className={`w-full p-3 rounded-md shadow-md focus:outline-none hover:bg-opacity-80 cursor-pointer ${className}`}
        {...rest}
      >
        {text}
      </button>
    </div>
  );
}
