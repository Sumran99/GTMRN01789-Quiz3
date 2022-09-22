import './App.css';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'name',
    headerName: 'Name',
    width: 150,
  },

  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    
  },
  {
    field: 'city',
    headerName: 'City',
    width: 110,
  },
  
];

const rows = [
  { id: 1, name: 'Jon', age: 35, city: "Melbourne" },
  { id: 2, name: 'Cersei', age: 42, city: "NY" },
  { id: 3, name: 'Jaime', age: 45, city: "Ohio" },
  { id: 4, name: 'Arya', age: 16, city: "NY" },
  { id: 5, name: 'Daenerys', age: 20, city: "Ohio" },
  { id: 6, name: null, age: 150, city: "Ohio" },
  { id: 7, name: 'Ferrara', age: 44, city: "Ohio" },
  { id: 8, name: 'Rossini', age: 36, city: "Ohio" },
  { id: 9, name: 'Harvey', age: 65, city: "Ohio" },
];


function App() {
  return (
    <>
<Box sx={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
        experimentalFeatures={{ newEditingApi: true }}
      />
    </Box>
    </>
  );
}

export default App;
