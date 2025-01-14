import './App.css';
import React from 'react';
import RealTimeChart from './components/RealTimeChart';

function App() {
  const mockData = {
    timestamps: ['10:00', '10:01', '10:02'],
    values: [50, 60, 55],
  }

  return (
    <div className='App'>
      <h1 className='text-xl font-bold'>Predictive Maintenance Dashboard</h1>
      <RealTimeChart data={mockData} />
    </div>
  );
  
}

export default App;
