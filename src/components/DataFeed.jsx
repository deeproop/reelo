import { useRef, useState} from "react";
import { Box, Button, Typography } from "@mui/material";
import LazyVirtualScrollDemo from "./LazyVirtualScrollDemo";
import Dropdown from "./Drop";
import { Toast } from 'primereact/toast';

const DataFeed = ({ data }) => {
  const [planet, setPlanet] = useState("");
  const [host, setHost] = useState("");
  const [discoveryMethod, setDiscoveryMethod] = useState("");
  const [discoveryYear, setDiscoveryYear] = useState("");
  const [discoveryFacility, setDiscoveryFacility] = useState("");
  const [search, setSearch] = useState(false);
  const [searchValues, setSearchValues] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [check, setCheck] = useState(true);
  

  const toastBottomCenter = useRef(null);
  const showMessage = (event, ref, severity) => {
    const label = "You must select something";

    ref.current.show({ severity: 'warn', summary: label, life: 3000 });
  };

  const handleSearch = (e) => {
    const newValues = [
      planet,
      host,
      discoveryMethod,
      discoveryYear,
      discoveryFacility,
    ];
    const allEmptyStrings = newValues.every(item => item === "");

    setSearchValues(newValues);
    allEmptyStrings ? showMessage(e, toastBottomCenter, 'error') : setSearch(true);
    filter(newValues);
  };

  const handleClearClick = () => {
    setSearch(false);
    setCheck(false);
    setTimeout(() => {
      setCheck(() => {
        return true;
      });
    }, 1);
  };

  const filter = (searchValues) => {
    const filterData = data.filter(item => {
      const itm = JSON.stringify(item);
      const result = searchValues.includes("")
        ? searchValues.some((word) => word !== "" && itm.includes(word))
        : searchValues.every((word) => word !== "" && itm.includes(word));
      return result;
    });

    setFilteredData(filterData);
  };

  return (
    <Box>
      <Box>
        <Box display="flex" justifyContent="center">
        <Toast ref={toastBottomCenter} position="bottom-center" />
          {check && (
            <>
              <Dropdown
                sendDataToParent={(e) => {
                  setPlanet(e);
                }}
                data={data}
                heading="pl_name"
                placeholder="Planet Name"
              />
              <Dropdown
                sendDataToParent={(e) => {
                  setHost(e);
                }}
                data={data}
                heading="hostname"
                placeholder="Host Name"
              />
              <Dropdown
                sendDataToParent={(e) => {
                  setDiscoveryMethod(e);
                }}
                data={data}
                heading="discoverymethod"
                placeholder="Discovery Method"
              />
              <Dropdown
                sendDataToParent={(e) => {
                  setDiscoveryYear(e);
                }}
                data={data}
                heading="disc_year"
                placeholder="Discovery Year"
              />
              <Dropdown
                sendDataToParent={(e) => {
                  setDiscoveryFacility(e);
                }}
                data={data}
                heading="disc_facility"
                placeholder="Discovery Facility"
              />
            </>
          )}
          <Button
            onClick={handleSearch}
            variant="contained"
            sx={{
              height: 35,
              textTransform: "capitalize",
              fontWeight: "bold",
              m: 2,
              mt: 3,
            }}
          >
            Search
          </Button>
          <Button
            onClick={handleClearClick}
            variant="contained"
            sx={{
              height: 35,
              textTransform: "capitalize",
              fontWeight: "bold",
              mt: 3,
            }}
          >
            Clear
          </Button>
        </Box>
      </Box>

      {data.length && search ? (
        <LazyVirtualScrollDemo data={filteredData} search={searchValues} />
      ) : (
        <Box
          display="flex"
          color="white"
          justifyContent="center"
          alignItems="center"
          mt="200px"
        >
          <Box>
            <Typography sx={{ fontWeight: "bold", fontSize: 18, ml: 19 }}>
              Exoplanets are planets outside the Solar System.
            </Typography>
            <Typography sx={{ fontWeight: "bold", fontSize: 18 }}>
              Here you can query{" "}
              <strong style={{ color: "#007FFF" }}>
                NASA's Exoplanet Archive
              </strong>{" "}
              and find the one you love the most.
            </Typography>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default DataFeed;
