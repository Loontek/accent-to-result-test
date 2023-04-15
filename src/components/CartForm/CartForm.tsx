import React, { FC, useContext, useState } from "react";
import { CartContext } from "../../App";
import styles from "./CartForm.module.css";

const CartForm: FC = () => {
	const [name, setName] = useState<string>("");
	const [number, setNumber] = useState<string>("");
	const [cart, setCart] = useContext<any>(CartContext);

	const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setName(e.target.value);
	};

	const handleNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setNumber(e.target.value);
	};

	const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		if (!cart.length) {
			alert("Корзина пуста");
			return;
		}

		const response = await fetch("https://app.aaccent.su/js/confirm.php", {
			method: "POST",
			body: JSON.stringify(cart),
		});

		const result = await response.json();

		if (result.result === "ok") {
			alert("Заказ оформлен");
			setCart([]);
			setName("");
			setNumber("");
		}
	};

	return (
		<form className={styles.CartForm} onSubmit={handleSubmit}>
			<input
				type="text"
				name="name"
				value={name}
				placeholder="Ваше имя"
				style={{
					border: `1px solid ${
						name ? "var(--color-primary)" : "red"
					}`,
				}}
				onChange={handleNameChange}
				autoComplete="name"
				required
			/>
			<input
				type="tel"
				name="tel"
				value={number}
				style={{
					border: `1px solid ${
						name ? "var(--color-primary)" : "red"
					}`,
				}}
				placeholder="Ваш телефон"
				onChange={handleNumberChange}
				autoComplete="tel"
				required
			/>
			<button type="submit">Оформить заказ</button>
		</form>
	);
};

export default CartForm;
