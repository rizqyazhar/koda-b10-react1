import RowTable from "../components/RowTable";
import Layout from "../layout/Layout";
import TableLayout from "../layout/TableLayout";

export default function TablePage() {
  const getDataFromLocalStorage =
    JSON.parse(window.localStorage.getItem("survey")) || [];

  console.log(getDataFromLocalStorage);

  return (
    <Layout>
      <TableLayout>
        {getDataFromLocalStorage.map((item, index) => {
          return <RowTable key={index} data={item} />;
        })}
      </TableLayout>
    </Layout>
  );
}
