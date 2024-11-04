import { Language } from "../types/types"

export const formatLanguages = (languages: Language[]): string => {
	return languages.length > 3
		? `${languages
				.slice(0, 3)
				.map((lang) => lang.name)
				.join(", ")} ...`
		: languages.map((lang) => lang.name).join(", ")
}

