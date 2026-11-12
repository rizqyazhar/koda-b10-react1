import { Link } from "react-router";

export default function Layout(props) {
  const { children } = props;
  return (
    <div className='w-full min-h-dvh px-8 md:px-0 py-12 flex flex-col justify-center items-center gap-8 bg-violet-50'>
      <nav class='flex items-center gap-4'>
        <Link
          to={"/src/pages/SurveyFormPage.jsx"}
          class='bg-violet-600 text-white px-2 py-1 rounded-lg cursor-default text-sm md:text-base'>
          Isi Form
        </Link>
        <span class='font-bold'>&gt;</span>
        <Link
          to={"/src/pages/TablePage.jsx"}
          href='/table.html'
          class='text-sm md:text-base'>
          Lihat Tabel
        </Link>
      </nav>
      {children}
    </div>
  );
}
