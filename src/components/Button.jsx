export default function Button(props) {
  const { children, variant, ...rest } = props;
  return (
    <button
      {...rest}
      className={`px-2.5 md:px-5 py-1 md:py-1.5 text-sm md:text-base rounded-lg cursor-pointer ${variant === "primary" ? "bg-violet-700 text-white hover:opacity-70" : "text-violet-700 hover:underline"}`}>
      {children}
    </button>
  );
}
