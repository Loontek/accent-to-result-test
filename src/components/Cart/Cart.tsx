import { FC, useContext } from "react";
import { CartContext } from "../../App";
import CartForm from "../CartForm/CartForm";
import CartItem from "../CartItem/CartItem";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./Cart.module.css";

const Cart: FC = () => {
	const [cart, setCart] = useContext<any>(CartContext);

	return (
		<div className={styles.Cart}>
			{cart.map((product: any) => (
				<CartItem key={product.id} product={product} />
			))}
			<CartForm />
		</div>
	);
};

export default Cart;
