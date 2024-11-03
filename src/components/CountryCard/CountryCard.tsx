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

interface CountryProps {
  code: string;
  name: string;
  continent: string;
  phone: string;
  languages: string[];
  currency: string;
  capital?: string;
}

const CountryCard = ({ country }: { country: CountryProps }) => {
  return (
    <Card className={styles.countryCard}>
      <Box sx={{ display: "flex" }}>
        <CardMedia
          component="img"
          image={`https://flagcdn.com/w320/${country.code.toLowerCase()}.png`}
          title={country.name}
          className={styles.countryFlag}
        />
        <Box className={styles.wrapper}>
          <Typography gutterBottom variant="h5" component="h2">
            {country.name}
          </Typography>
          {country.capital && (
            <Typography variant="subtitle1" className={styles.countryInfo}>
              {country.capital}
            </Typography>
          )}
          <span className={styles.countryInfo}>
            <FlagIcon sx={{ fontSize: 16 }} />
            {country.continent}
          </span>
        </Box>
      </Box>
      <CardContent className={styles.countryContent} sx={{ display: "flex" }}>
        <Typography variant="body2" color="text.secondary">
          <Box
            sx={{
              display: "flex",
              gap: "20px",
              alignItems: "center",
            }}
          >
            <Typography variant="subtitle1" className={styles.countryInfo}>
              <PhoneIcon sx={{ fontSize: 16 }} />+{country.phone}
            </Typography>

            <Typography variant="subtitle1" className={styles.countryInfo}>
              <Chip label={country.currency} variant="outlined" size="small" />
            </Typography>
            <Typography variant="subtitle1" className={styles.countryInfo}>
              <LanguageIcon sx={{ fontSize: 16 }} />
              {country.languages.join(", ")}
            </Typography>
          </Box>
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CountryCard;
