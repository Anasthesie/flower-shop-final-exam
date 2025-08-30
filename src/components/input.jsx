export default function Input({
  type,
  name,
  placeholder,
  label,
  value,
  onChange,
}) {
  return (
    <div className="flex flex-col mb-4 text-sm">
      {label && (
        <label htmlFor={name} className="text-black-700">
          {label}
        </label>
      )}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="p-2 border border-green rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green focus:border-green"
      />
    </div>
  );
}
