import './App.css';
import { Grid } from '@mui/material';
import Header from './Layout/Header';
import AddCustomer from './Layout/AddCustomer';
import AddProduct from './Layout/AddProduct';
import AddTransaction from './Layout/AddTransaction';
import RewardDashboard from './Layout/RewardDashboard';
import { useState } from 'react';

function App() {
  const [layout, setLayout] = useState(0);
  let layoutToRender;

  if (layout === 0) { layoutToRender = <AddCustomer />; }
  else if (layout === 1) { layoutToRender = <AddProduct />; }
  else if (layout === 2) { layoutToRender = <AddTransaction />; }
  else if (layout === 3) { layoutToRender = <RewardDashboard />; }
  else { layoutToRender = <AddTransaction />; }

  return (
    <div className="App">
      <Grid padding={3} container spacing={1} direction='column'>
        <Grid item textAlign={'center'}>
          <h1>Reward Management System</h1>
        </Grid>
        <Grid item>
          <Header setLayout={setLayout}> </Header>
        </Grid>
        <Grid item>
          {layoutToRender}
        </Grid>
      </Grid>

    </div>
  );
}

export default App;
