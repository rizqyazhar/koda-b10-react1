export default function InputChoice(props) {
  const { label, forInput, ...rest } = props;
  return (
    <div className='flex items-center gap-2'>
      <input
        className='outline-none border-b border-violet-50 py-2 label-sm md:text-base'
        {...rest}
      />
      <label htmlFor={forInput} className='text-sm md:text-base'>
        {label}
      </label>
    </div>
  );
}
