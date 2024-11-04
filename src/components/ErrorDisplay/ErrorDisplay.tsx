import React from "react"
import styles from "./ErrorDisplay.module.css"

interface ErrorDisplayProps {
	error: Error
	retryCount: number
}

const ErrorDisplay: React.FC<ErrorDisplayProps> = ({ error, retryCount }) => {
	return (
		<p className={styles.loader}>
			{retryCount < 3
				? `Ошибка: ${error.message}. Попробуем снова через 5 секунд...`
				: "Увы, не удалось загрузить данные. Попробуйте позже."}
		</p>
	)
}

export default ErrorDisplay
