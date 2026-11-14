export default function TableLayout(props) {
  const { children } = props;
  return (
    <div className='w-full h-80 md:h-100 md:w-11/12 lg:w-3/4 bg-white overflow-auto scrollbar-thin rounded-xl shadow-md'>
      <table className='table w-full table-auto border-collapse bg-white'>
        <thead className='bg-violet-700 text-white sticky top-0'>
          <tr>
            <th
              className='text-nowrap p-2 border-b-2 border-violet-200'
              scope='col'
              rowspan='2'>
              Nama
            </th>
            <th
              className='text-nowrap p-2 border-b-2 border-violet-200'
              scope='col'
              rowspan='2'>
              Umur
            </th>
            <th
              className='text-nowrap p-2 border-b-2 border-violet-200'
              scope='col'
              rowspan='2'>
              Jenis Kelamin
            </th>
            <th
              className='text-nowrap p-2 border-b-2 border-violet-200'
              scope='col'
              rowspan='2'>
              Perokok
            </th>
            <th scope='col' colspan='4'>
              Jenis Rokok
            </th>
          </tr>
          <tr>
            <th
              className='text-nowrap p-2 border-b-2 border-violet-200'
              scope='col'
              rowspan='2'>
              Gudang Garam Filter
            </th>
            <th
              className='text-nowrap p-2 border-b-2 border-violet-200'
              scope='col'
              rowspan='2'>
              Lucky Strike
            </th>
            <th
              className='text-nowrap p-2 border-b-2 border-violet-200'
              scope='col'>
              Marlboro
            </th>
            <th
              className='text-nowrap p-2 border-b-2 border-violet-200'
              scope='col'>
              Esse
            </th>
          </tr>
        </thead>
        <tbody>{children}</tbody>
      </table>
    </div>
  );
}
