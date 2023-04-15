import { FC, useContext, useEffect, useState } from "react";
import { CartContext } from "../../App";
import { IProduct } from "../../types/types";
import Count from "../Count/Count";
import styles from "./CartItem.module.css";

interface CardItemProps {
	product: IProduct;
}

const CartItem: FC<CardItemProps> = ({ product }) => {
	const [cart, setCart] = useContext<any>(CartContext);
	const [count, setCount] = useState<number | undefined>(product.count);

	useEffect(() => {
		setCart((prev: any) => prev.filter((product: any) => product.count));
	}, [count]);

	const addCount = () => {
		const itemInCart = cart.find((item: any) => item.id === product.id);

		itemInCart.count++;
		setCount((prev: any) => prev + 1);
	};
	const removeCount = () => {
		const itemInCart = cart.find((item: any) => item.id === product.id);

		itemInCart.count--;
		setCount((prev: any) => prev - 1);
	};

	return (
		<article className={styles.CartItem}>
			<div className={styles.description}>
				<img
					className={styles.image}
					src={`./assets${product.image}`}
				/>
				<h2 className={styles.title}>{product.title}</h2>
				<span>
					{`${product.regular_price.value * product.count} ${
						product.regular_price.currency
					}`}
				</span>
			</div>
			<Count
				count={count}
				addCount={addCount}
				removeCount={removeCount}
			/>
		</article>
	);
};

export default CartItem;
