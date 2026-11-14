export default function DataTable(props) {
  const { children } = props;
  return <td className='p-3 bg-inherit hover:bg-violet-100'>{children}</td>;
}
