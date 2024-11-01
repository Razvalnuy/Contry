import CountryCard from "./components/CountryCard/CountryCard"

export default function App() {
	const countryData = {
		code: "US",
		name: "Uzbekistan",
		continent: "Asia",
		phone: "998",
		languages: ["Uzbek", "Russian"],
		currency: "UZS",
		capital: "Tashkent",
	}
	return (
		<>
			<CountryCard country={countryData} />
			<CountryCard country={countryData} />
			<CountryCard country={countryData} />
			<CountryCard country={countryData} />
		</>
	)
}
