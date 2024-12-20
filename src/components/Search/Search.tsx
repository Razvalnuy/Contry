import { Card, Input } from "@mui/material"
import React from "react"
import { useDispatch, useSelector } from "react-redux"
import { RootState, updateSearchTerm } from "../../store/features/searchSlice"
import styles from "./Search.module.css"

const Search: React.FC = () => {
	const value = useSelector((state: RootState) => state.search.value)
	const dispatch = useDispatch()

	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		dispatch(updateSearchTerm(event.target.value))
	}

	return (
		<Card className={styles.wrapper}>
			<Input
				fullWidth
				placeholder="Search by country code"
				value={value}
				onChange={handleChange}
			/>
		</Card>
	)
}

export default Search
