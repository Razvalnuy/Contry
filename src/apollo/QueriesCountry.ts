import { gql } from "@apollo/client"

export const GET_COUNTRIES = gql`
	{
		countries {
			name
			capital
			languages {
				code
				name
			}
			code
			phone
			currency
		}
	}
`
