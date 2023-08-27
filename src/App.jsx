import { useState, useEffect } from "react";
import { Box } from "@mui/material";
import DataFeed from "./components/DataFeed";
import Papa from "papaparse";
import "primereact/resources/primereact.min.css";
import "primeicons/primeicons.css";
import "primeflex/primeflex.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import Heading from "./components/Heading";

function App() {
  const [data, setData] = useState([]);
  const csvFile = "/data.csv";

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(csvFile);
      const reader = response.body.getReader();
      const result = await reader.read();
      const decoder = new TextDecoder("utf-8");
      const csvData = decoder.decode(result.value);
      const parsedData = Papa.parse(csvData, {
        header: true,
        skipEmptyLines: true,
      }).data;
      setData(parsedData);
    };

    fetchData();
  }, []);

  return (
    <Box
      sx={{
        m: -1,
        height: "100vh",
        backgroundImage: `url(${"https://images.unsplash.com/photo-1475274047050-1d0c0975c63e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bmlnaHQlMjBza3l8ZW58MHx8MHx8fDA%3D&w=1000&q=80"})`,
      }}
    >
      <Heading />
      <Box sx={{ width: "100vw" }}>
        <Box
          justifyContent="center"
          width="90%"
          margin="auto"
          borderRadius="20px"
        >
          <DataFeed data={data} />
        </Box>
      </Box>
    </Box>
  );
}

export default App;
