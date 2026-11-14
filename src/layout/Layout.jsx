import Nav from "../components/Nav";

export default function Layout(props) {
  const { children } = props;
  return (
    <div className='w-full min-h-dvh px-8 md:px-0 py-12 flex flex-col justify-center items-center gap-8 bg-violet-50'>
      <Nav />
      {children}
    </div>
  );
}
