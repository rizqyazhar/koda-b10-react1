export default function InputChoice(props) {
  const { label, forInput, ...rest } = props;
  return (
    <div class='flex items-center gap-2'>
      <input
        class='outline-none border-b border-violet-50 py-2 label-sm md:text-base'
        {...rest}
      />
      <label for={forInput} class='text-sm md:text-base'>
        {label}
      </label>
    </div>
  );
}
