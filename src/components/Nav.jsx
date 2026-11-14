import { Link, useLocation } from "react-router";

export default function Nav() {
  const location = useLocation();
  const pathname = location.pathname;
  return (
    <nav class='w-1/4 flex items-center justify-evenly'>
      <Link
        to='/'
        className={`${pathname === "/" ? "pointer-events-none bg-violet-700 text-white rounded-sm" : null} px-4 py-2 text-sm md:text-base hover:underline hover:decoration-wavy`}>
        Isi Form
      </Link>
      <span className='font-bold'>|</span>
      <Link
        to='/table'
        className={`${pathname === "/table" ? "pointer-events-none bg-violet-700 text-white rounded-sm" : null} px-4 py-2 text-sm md:text-base hover:underline hover:decoration-wavy`}>
        Lihat Tabel
      </Link>
    </nav>
  );
}
