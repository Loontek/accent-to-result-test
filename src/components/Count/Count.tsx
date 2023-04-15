import { FC } from "react";
import styles from "./Count.module.css";

interface CountProps {
	count: number | undefined;
	addCount: () => void;
	removeCount: () => void;
}

const Count: FC<CountProps> = ({ count, addCount, removeCount }) => {
	return (
		<div className={styles.count}>
			<button className={styles.minus} onClick={removeCount}>
				-
			</button>
			<p className={styles.amount}>{count}</p>
			<button className={styles.plus} onClick={addCount}>
				+
			</button>
		</div>
	);
};

export default Count;
