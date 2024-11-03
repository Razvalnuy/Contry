import { Box, Card, Paper } from "@mui/material";
import Search from "./components/Search/Search";
import styles from "./App.module.css";
import CountryList from "./components/CountryList/CountryList";

export default function App() {
  return (
    <Paper>
      <Box className={styles.search}>
        <Search />
      </Box>
      <Card className={styles.cardList}>
        <CountryList />
      </Card>
    </Paper>
  );
}
