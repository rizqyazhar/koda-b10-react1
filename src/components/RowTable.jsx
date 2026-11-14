import DataTable from "./DataTable";

export default function RowTable(props) {
  const { nama, gender, smoking, umur, cigarettes } = props.data;

  return (
    <tr className='w-full border-b border-violet-100 text-center hover:bg-violet-100 md:text-base'>
      <DataTable>{nama}</DataTable>
      <DataTable>{gender}</DataTable>
      <DataTable>{umur}</DataTable>
      <DataTable>{smoking}</DataTable>
      {cigarettes.map((item) => {
        return <DataTable>{item ? "\u2713" : ""}</DataTable>;
      })}
    </tr>
  );
}
