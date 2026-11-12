export default function Form(props) {
  const { children, title, description, email } = props;
  return (
    <form class='w-fit flex flex-col gap-4'>
      <div class='bg-white shadow-sm border-t-8 border-violet-700 rounded-lg'>
        <div class='flex flex-col gap-4 px-4 md:px-8 py-2 py-4'>
          <div class='flex flex-col gap-1'>
            <h1 class='text-slate-900 text-lg md:text-2xl font-medium'>
              {title}
            </h1>
            <p class='text-sm md:text-base text-slate-900/50'>{description}</p>
          </div>
          <div class='border-y border-violet-50 py-4 flex justify-between items-center'>
            <div>
              <span class='text-slate-900/50 text-xs md:text-sm'>{email}</span>
              <button class='text-slate-900/50 text-xs md:text-sm'>
                Switch Account
              </button>
            </div>
            <button>
              <svg
                class='size-4 md:size-6 text-slate-700'
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='lucide lucide-cloud-check preview-icon'>
                <path d='m17 15-5.5 5.5L9 18' />
                <path d='M5.516 16.07A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 3.501 7.327' />
              </svg>
            </button>
          </div>
          <span class='text-red-500 font-medium text-xs md:text-sm'>
            * Harus diisi!
          </span>
        </div>
      </div>
      {children}
    </form>
  );
}
