import Burndown from "./charts/burndown";
import React, { useState } from 'react';
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

      <Burndown
        issues={parsed_data.issues}
        numIssues={parsed_data.num}
        endDate={new Date()}
      />
      
      <CloseToDueDateChart issues={parsed_data.issues} daysThreshold={daysThreshold} />
    </>
  );
}

export default App;
