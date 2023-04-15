import { FC, useContext, useEffect } from "react";
import { CartContext } from "../../App";
import { IProduct } from "../../types/types";
import styles from "./ProductCard.module.css";

interface ProductCardProps {
	product: IProduct;
}

const ProductCard: FC<ProductCardProps> = ({ product }) => {
	const [cart, setCart] = useContext<any>(CartContext);

	const handleClick = () => {
		const itemInCart = cart.find((item: any) => item.id === product.id);

		if (itemInCart) {
			itemInCart.count++;
		}

		if (!itemInCart) {
			setCart([
				...cart,
				{
					...product,
					count: 1,
				},
			]);
		}
	};

	return (
		<article className={styles.ProductCard}>
			<img
				className={styles.image}
				// src={`./src/assets${product.image}`}
				src={`./assets${product.image}`}
			/>
			<div className={styles.description}>
				<h2 className={styles.title}>{product.title}</h2>
				<span>Type: {product.type}</span>
				<span>Sku: {product.sku}</span>
				<span>Brand: {product.brand}</span>
				<span>
					{`${product.regular_price.value} ${product.regular_price.currency}`}
				</span>
				<button className={styles.AddButton} onClick={handleClick}>
					Add to cart
				</button>
			</div>
		</article>
	);
};

export default ProductCard;
