import FlagIcon from "@mui/icons-material/Flag";
import LanguageIcon from "@mui/icons-material/Language";
import PhoneIcon from "@mui/icons-material/Phone";
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Chip,
  Typography,
} from "@mui/material";
import styles from "./CountryCard.module.css";

interface Language {
  name: string;
}

interface CountryProps {
  code: string;
  name: string;
  continent: string;
  phone: string;
  languages: Language[];
  currency: string;
  capital?: string;
}

const CountryCard = ({ country }: { country: CountryProps }) => {
  const displayedLanguages = country.languages.slice(0, 3);

  return (
    <Card className={styles.countryCard}>
      <CardMedia
        component="img"
        image={`https://flagcdn.com/w320/${country.code.toLowerCase()}.png`}
        title={country.name}
        className={styles.countryFlag}
      />
      <CardContent className={styles.cardContent}>
        <Typography gutterBottom variant="h6" component="h2" noWrap>
          {country.name}
        </Typography>
        {country.capital && (
          <Typography variant="subtitle1" className={styles.countryInfo}>
            <FlagIcon sx={{ fontSize: 16 }} />
            {country.capital}
          </Typography>
        )}
        <Box className={styles.countryDetails}>
          <Typography variant="subtitle1" className={styles.countryInfo}>
            {country.continent}
          </Typography>
          <Typography variant="subtitle1" className={styles.countryInfo}>
            <Chip label={country.currency} variant="outlined" size="small" />
            <PhoneIcon sx={{ fontSize: 16 }} />+{country.phone}
          </Typography>
          <Typography variant="subtitle1" className={styles.countryInfo}>
            <LanguageIcon sx={{ fontSize: 16 }} />
            {displayedLanguages.map((lang, index) => (
              <span key={index}>
                {lang.name}
                {index < displayedLanguages.length - 1 && ", "}
              </span>
            ))}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CountryCard;
