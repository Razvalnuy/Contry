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
import { useInView } from "react-intersection-observer"
import { CountryProps } from "../../types/types"
import { formatLanguages } from "../../utils/formatting"
import { SkeletonCard } from "../SkeletonCard/SkeletonCard"
import styles from "./CountryCard.module.css"
const empty: string = "❌ Empty ❌"

const CountryCard = ({ country }: { country: CountryProps }) => {
	const { ref, inView } = useInView({
		threshold: 0.4,
		triggerOnce: true,
	})

	const { code, name, phone, languages, currency, capital } = country
	const languageDisplay = formatLanguages(languages)
	//todo Разбить еще на отдельный компонент, многословно )
	return (
		<Card ref={ref} className={styles.countryCard}>
			{inView ? (
				<>
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
							<FlagIcon className={styles.icon} />
							{capital || empty}
						</Typography>
						<Box>
							<Typography variant="subtitle1" className={styles.countryInfo}>
								<Chip
									label={currency || empty}
									variant="outlined"
									size="small"
								/>
								<PhoneIcon className={styles.icon} />+{phone}
							</Typography>
							<Typography variant="subtitle1" className={styles.countryInfo}>
								<LanguageIcon className={styles.icon} />
								{languageDisplay || empty}
							</Typography>
						</Box>
					</CardContent>
				</>
			) : (
				<SkeletonCard />
			)}
		</Card>
	)
}

export default CountryCard
