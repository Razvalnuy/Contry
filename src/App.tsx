import CountryCard from "./components/CountryCard/CountryCard";
import Search from "./components/Search/Search";

export default function App() {
  const countryData = {
    code: "US",
    name: "Uzbekistan",
    continent: "Asia",
    phone: "998",
    languages: ["Uzbek", "Russian"],
    currency: "UZS",
    capital: "Tashkent",
  };
  return (
    <>
      <Search />
      <CountryCard country={countryData} />
    </>
  );
}
