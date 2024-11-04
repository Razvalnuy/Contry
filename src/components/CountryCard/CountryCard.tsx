import FlagIcon from "@mui/icons-material/Flag"
import LanguageIcon from "@mui/icons-material/Language"
import PhoneIcon from "@mui/icons-material/Phone"
import {
	Box,
	Card,
	CardContent,
	CardMedia,
	Chip,
	Typography,
} from "@mui/material"
import { CountryProps } from "../../types/types"

import { formatLanguages } from "../../utils/formatting"
import styles from "./CountryCard.module.css"
const empty: string = "❌ Empty ❌"

const CountryCard = ({ country }: { country: CountryProps }) => {
	const { code, name, phone, languages, currency, capital } = country

	const languageDisplay = formatLanguages(languages)

	return (
		<Card className={styles.countryCard}>
			<CardMedia
				component="img"
				image={`https://flagcdn.com/w320/${code.toLowerCase()}.png`}
				title={name}
				className={styles.countryFlag}
			/>
			<CardContent className={styles.cardContent}>
				<Typography
					gutterBottom
					variant="h6"
					component="h2"
					noWrap
					className={styles.title}
				>
					{name}
				</Typography>
				<Typography variant="subtitle1" className={styles.countryInfo}>
					<FlagIcon sx={{ fontSize: 16 }} />
					{capital ? capital : empty}
				</Typography>
				<Box className={styles.countryDetails}>
					<Typography variant="subtitle1" className={styles.countryInfo}>
						<Chip
							label={currency ? currency : empty}
							variant="outlined"
							size="small"
						/>
						<PhoneIcon sx={{ fontSize: 16 }} />+{phone}
					</Typography>
					<Typography variant="subtitle1" className={styles.countryInfo}>
						<LanguageIcon sx={{ fontSize: 16 }} />
						{languageDisplay ? languageDisplay : empty}
					</Typography>
				</Box>
			</CardContent>
		</Card>
	)
}

export default CountryCard
