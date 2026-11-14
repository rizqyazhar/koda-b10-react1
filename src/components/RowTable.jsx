import DataTable from "./DataTable";

export default function RowTable() {
  return (
    <tr className='w-full border-b border-violet-100 text-center hover:bg-violet-100 md:text-base'>
      <DataTable>John</DataTable>
      <DataTable>John</DataTable>
      <DataTable>John</DataTable>
      <DataTable>John</DataTable>
      <DataTable>&#10003;</DataTable>
      <DataTable>&#10003;</DataTable>
      <DataTable>&#10003;</DataTable>
      <DataTable>&#10003;</DataTable>
    </tr>
  );
}
