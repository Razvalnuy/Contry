import { Box, CardContent, Skeleton } from "@mui/material"
import styles from "./SkeletonCard.module.css"

export const SkeletonCard = () => {
	return (
		<>
			<Skeleton
				variant="rectangular"
				width={320}
				height={180}
				sx={{ bgcolor: "grey.300" }}
			/>
			<CardContent>
				<Skeleton
					width="80%"
					height={25}
					sx={{ bgcolor: "grey.300", marginBottom: 1 }}
				/>
				<Skeleton className={styles.subtitle} />
				<Box className={styles.wrapper}>
					<Skeleton className={styles.infoSmall} />
					<Skeleton className={styles.InfoLarge} />
				</Box>
			</CardContent>
		</>
	)
}
