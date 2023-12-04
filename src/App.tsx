import Burndown from "./charts/burndown";
import React, { useState } from 'react';
import AverageAge from "./charts/average_age";
import "./App.css";
import conv_to_unified from "./utils/parse";
import { tmp } from "./charts/tmp";
import CloseToDueDateChart from "./utils/CloseToDueDateChart";

function App() {
  const [daysThreshold, setDaysThreshold] = useState(7);
  let parsed_data = conv_to_unified(tmp);

  const handleDaysThresholdChange = (event) => {
    setDaysThreshold(Number(event.target.value));
  };

  return (
    <>
      <div>
        <label htmlFor="daysThreshold">Days for 'Close to Due Date': </label>
        <input
          id="daysThreshold"
          type="number"
          value={daysThreshold}
          onChange={handleDaysThresholdChange}
        />
      </div>
      
      <CloseToDueDateChart issues={parsed_data.issues} daysThreshold={daysThreshold} />
    </>
  );
 
  // return <AverageAge issues={parsed_data.issues} />;
}

export default App;
