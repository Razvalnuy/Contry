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
  phone: string;
  languages: Language[];
  currency: string;
  capital?: string;
}

const CountryCard = ({ country }: { country: CountryProps }) => {
  const { code, name, phone, languages, currency, capital } = country;

  const languageDisplay =
    languages.length > 3
      ? `${languages
          .slice(0, 3)
          .map((lang) => lang.name)
          .join(", ")} ...`
      : languages.map((lang) => lang.name).join(", ");

  return (
    <Card className={styles.countryCard}>
      <CardMedia
        component="img"
        image={`https://flagcdn.com/w320/${code.toLowerCase()}.png`}
        title={name}
        className={styles.countryFlag}
      />
      <CardContent className={styles.cardContent}>
        <Typography gutterBottom variant="h6" component="h2" noWrap>
          {name}
        </Typography>
        {capital && (
          <Typography variant="subtitle1" className={styles.countryInfo}>
            <FlagIcon sx={{ fontSize: 16 }} />
            {capital}
          </Typography>
        )}
        <Box className={styles.countryDetails}>
          <Typography variant="subtitle1" className={styles.countryInfo}>
            <Chip label={currency} variant="outlined" size="small" />
            <PhoneIcon sx={{ fontSize: 16 }} />+{phone}
          </Typography>
          <Typography variant="subtitle1" className={styles.countryInfo}>
            <LanguageIcon sx={{ fontSize: 16 }} />
            {languageDisplay}
          </Typography>
        </Box>
      </CardContent>
    </Card>
  );
};

export default CountryCard;
