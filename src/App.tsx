import { Card, Container, Paper, Typography } from "@mui/material"
import styles from "./App.module.css"
import CountryList from "./components/CountryList/CountryList"
import Search from "./components/Search/Search"

export default function App() {
	return (
		<Paper>
			<Container>
				<Typography variant="h4" className={styles.title}>
					Countries
				</Typography>
				<Search />
				<Card className={styles.cardList}>
					<CountryList />
				</Card>
			</Container>
		</Paper>
	)
}
