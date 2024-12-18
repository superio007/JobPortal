import React, { useEffect, useState } from "react";

const TryComponent = () => {
  const [data, setData] = useState(null);

  // Fetch data when the component mounts
  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch(
          "https://jsondeploy-jobportal.onrender.com/jobs/1",
          {
            method: "GET",
            mode: "cors", // Enables CORS
          }
        );
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        const jsonData = await res.json();
        setData(jsonData); // Save data to state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    }

    fetchData();
  }, []); // Empty dependency array ensures this runs only once

  return (
    <div>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre> // Render the fetched data
      ) : (
        <p>Loading...</p> // Display a loading message
      )}
    </div>
  );
};

export default TryComponent;
