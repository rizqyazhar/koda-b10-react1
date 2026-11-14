import { Link } from "react-router";

export default function Nav() {
  return (
    <nav class='flex items-center gap-4'>
      <Link
        to='/'
        class='bg-violet-600 text-white px-2 py-1 rounded-lg cursor-default text-sm md:text-base'>
        Isi Form
      </Link>
      <span class='font-bold'>&gt;</span>
      <Link to='/table' class='text-sm md:text-base'>
        Lihat Tabel
      </Link>
    </nav>
  );
}
