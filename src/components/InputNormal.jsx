export default function InputNormal(props) {
  const { children, isRequired, forInput, errorsMessage, ...rest } = props;
  return (
    <div className='bg-white shadow-sm rounded-lg'>
      <div className='flex flex-col gap-4 px-4 md:px-8 py-2 md:py-4'>
        <label className='font-medium text-sm md:text-base' forHtml={forInput}>
          {children}
          {isRequired && <span className='text-red-500'>*</span>}
        </label>
        <input
          className='outline-none border-b border-violet-50 py-2 text-sm md:text-base'
          {...rest}
        />
        <p className='text-red-500 text-xs'>{errorsMessage}</p>
      </div>
    </div>
  );
}
