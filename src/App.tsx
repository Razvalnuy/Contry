import { Card } from "@mui/material";
import CountryCard from "./components/CountryCard/CountryCard";
import Search from "./components/Search/Search";
import styles from "./App.module.css";

export default function App() {
  const listContry = [
    {
      code: "AO",
      name: "Uzbekistan",
      continent: "Asia",
      phone: "998",
      languages: ["Uzbek", "Russian"],
      currency: "UZS",
      capital: "Tashkent",
    },
    {
      code: "SR",
      name: "Uzbekistan",
      continent: "Asia",
      phone: "998",
      languages: ["Uzbek", "Russian"],
      currency: "UZS",
      capital: "Tashkent",
    },
    {
      code: "BR",
      name: "Uzbekistan",
      continent: "Asia",
      phone: "998",
      languages: ["Uzbek", "Russian"],
      currency: "UZS",
      capital: "Tashkent",
    },
    {
      code: "UZ",
      name: "Uzbekistan",
      continent: "Asia",
      phone: "998",
      languages: ["Uzbek", "Russian"],
      currency: "UZS",
      capital: "Tashkent",
    },
    {
      code: "GE",
      name: "Uzbekistan",
      continent: "Asia",
      phone: "998",
      languages: ["Uzbek", "Russian"],
      currency: "UZS",
      capital: "Tashkent",
    },
    {
      code: "SO",
      name: "Uzbekistan",
      continent: "Asia",
      phone: "998",
      languages: ["Uzbek", "Russian"],
      currency: "UZS",
      capital: "Tashkent",
    },
    {
      code: "RU",
      name: "Uzbekistan",
      continent: "Asia",
      phone: "998",
      languages: ["Uzbek", "Russian"],
      currency: "UZS",
      capital: "Tashkent",
    },
    {
      code: "SO",
      name: "Uzbekistan",
      continent: "Asia",
      phone: "998",
      languages: ["Uzbek", "Russian"],
      currency: "UZS",
      capital: "Tashkent",
    },
    {
      code: "RU",
      name: "Uzbekistan",
      continent: "Asia",
      phone: "998",
      languages: ["Uzbek", "Russian"],
      currency: "UZS",
      capital: "Tashkent",
    },
    {
      code: "SO",
      name: "Uzbekistan",
      continent: "Asia",
      phone: "998",
      languages: ["Uzbek", "Russian"],
      currency: "UZS",
      capital: "Tashkent",
    },
    {
      code: "RU",
      name: "Uzbekistan",
      continent: "Asia",
      phone: "998",
      languages: ["Uzbek", "Russian"],
      currency: "UZS",
      capital: "Tashkent",
    },
    {
      code: "SO",
      name: "Uzbekistan",
      continent: "Asia",
      phone: "998",
      languages: ["Uzbek", "Russian"],
      currency: "UZS",
      capital: "Tashkent",
    },
    {
      code: "RU",
      name: "Uzbekistan",
      continent: "Asia",
      phone: "998",
      languages: ["Uzbek", "Russian"],
      currency: "UZS",
      capital: "Tashkent",
    },
    {
      code: "SO",
      name: "Uzbekistan",
      continent: "Asia",
      phone: "998",
      languages: ["Uzbek", "Russian"],
      currency: "UZS",
      capital: "Tashkent",
    },
    {
      code: "RU",
      name: "Uzbekistan",
      continent: "Asia",
      phone: "998",
      languages: ["Uzbek", "Russian"],
      currency: "UZS",
      capital: "Tashkent",
    },
    {
      code: "SO",
      name: "Uzbekistan",
      continent: "Asia",
      phone: "998",
      languages: ["Uzbek", "Russian"],
      currency: "UZS",
      capital: "Tashkent",
    },
    {
      code: "RU",
      name: "Uzbekistan",
      continent: "Asia",
      phone: "998",
      languages: ["Uzbek", "Russian"],
      currency: "UZS",
      capital: "Tashkent",
    },
    {
      code: "SO",
      name: "Uzbekistan",
      continent: "Asia",
      phone: "998",
      languages: ["Uzbek", "Russian"],
      currency: "UZS",
      capital: "Tashkent",
    },
    {
      code: "RU",
      name: "Uzbekistan",
      continent: "Asia",
      phone: "998",
      languages: ["Uzbek", "Russian"],
      currency: "UZS",
      capital: "Tashkent",
    },
  ];

  return (
    <>
      <Search />
      <Card className={styles.wrapper}>
        {listContry.map((country) => (
          <CountryCard country={country} />
        ))}
      </Card>
    </>
  );
}
