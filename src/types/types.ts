export interface Language {
	code: string
	name: string
}

export interface CountryProps {
	code: string
	name: string
	phone: string
	languages: Language[]
	currency: string
	capital?: string
}

export interface CountriesResponse {
	countries: CountryProps[]
}
