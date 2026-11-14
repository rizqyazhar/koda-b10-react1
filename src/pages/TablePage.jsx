import RowTable from "../components/RowTable";
import Layout from "../layout/Layout";
import TableLayout from "../layout/TableLayout";

export default function TablePage() {
  const getDataFromLocalStorage =
    JSON.parse(window.localStorage.getItem("survey")) || [];

  return (
    <Layout>
      <TableLayout>
        {getDataFromLocalStorage.map((item, index) => {
          return <RowTable key={`row-${index + 1}`} data={item} />;
        })}
      </TableLayout>
    </Layout>
  );
}
