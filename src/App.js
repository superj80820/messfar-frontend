import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import StarCard from './components/StarCard.js'
import AdCard from './components/AdCard.js'
import './App.css';

const useStyles = makeStyles({
  root: {
    display:'flex',
    justifyContent:'center'
  },
  card: {
    'flex-direction':'column'
  }
});

function App() {
  const classes = useStyles();
  return (
    <div className="App">
      <div className={classes.root}>
        <div className={classes.card}>
          <AdCard></AdCard>
          <StarCard></StarCard>
        </div>
      </div>
    </div>
  );
}

export default App;
