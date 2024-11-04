import { useQuery } from "@apollo/client"
import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { GET_COUNTRIES } from "../../apollo/QueriesCountry"
import { CountriesResponse } from "../../types/types"
import CountryCard from "../CountryCard/CountryCard"
import ErrorDisplay from "../ErrorDisplay/ErrorDisplay"
import styles from "../ErrorDisplay/ErrorDisplay.module.css"

const CountryList: React.FC = () => {
	const [retryCount, setRetryCount] = useState(0)
	const { loading, error, data, refetch } = useQuery<CountriesResponse>(
		GET_COUNTRIES,
		{
			notifyOnNetworkStatusChange: true,
		}
	)

	const search = useSelector(
		(state: { search: { value: string } }) => state.search.value
	)

	const filteredCountry = data?.countries.filter((country) =>
		country.code.toLowerCase().includes(search.toLowerCase())
	)

	useEffect(() => {
		if (error && retryCount < 3) {
			const timer = setTimeout(() => {
				refetch()
				setRetryCount((prev) => prev + 1)
			}, 5000)

			return () => clearTimeout(timer)
		}
	}, [error, retryCount, refetch])

	if (loading) return <h1 className={styles.loader}>Загрузка…</h1>

	if (error) {
		return <ErrorDisplay error={error} retryCount={retryCount} />
	}

	return (
		<>
			{filteredCountry?.map((country) => (
				<CountryCard country={country} key={country.name} />
			))}
			{filteredCountry?.length === 0 && (
				<h1 className={styles.loader}>Ничего не нашлось…</h1>
			)}
		</>
	)
}

export default CountryList
