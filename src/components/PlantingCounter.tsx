import { useState, useEffect } from 'react';

 function PlantingCounter() {
  const [saplingCount, setSaplingCount] = useState(0);
  const [plotName, setPlotName] = useState('');

  useEffect(() => {
    document.title = `Planted: ${saplingCount}`;
    console.log('effect ran');
    return () => console.log('cleanup ran');
  }, [saplingCount]);

  return (
    <div>
      <button onClick={() => setSaplingCount(saplingCount + 1)}>+1 sapling</button>   
      <button onClick={() => setSaplingCount(saplingCount + 3)}>+3 sapling</button>   
      <p>Sapling count: {saplingCount}</p>
      <input type="text" placeholder="Plot name" value={plotName} onChange={(e) => setPlotName(e.target.value)} />
      <label htmlFor="plotName">Plot name: {plotName}</label>
    </div>
  )
}

export default PlantingCounter