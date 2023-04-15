import { FC, useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../App";
import basket from "../../assets/images/basket-shopping-solid.svg";
import logo from "../../assets/images/shirt-solid.svg";
import styles from "./Header.module.css";

const Header: FC = () => {
	const [cart] = useContext<any>(CartContext);
	const [count, setCount] = useState<number>(0);

	useEffect(() => {
		setCount(
			cart.reduce((acc: number, product: any) => acc + product.count, 0)
		);
	}, [cart]);

	return (
		<header className={styles.Header}>
			<Link className={styles.logo} to="/accent-to-result-test/">
				<img src={logo} alt="logo" />
				<span className={styles.title}>Clothes</span>
			</Link>
			<Link className={styles.basket} to="/accent-to-result-test/cart">
				<img src={basket} alt="basket" />
				{cart.length ? (
					<span className={styles.itemsCount}>{count}</span>
				) : null}
			</Link>
		</header>
	);
};

export default Header;
