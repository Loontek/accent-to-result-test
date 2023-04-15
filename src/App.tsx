import React, { FC, useEffect, useState } from "react";
import { Outlet, Route, Routes, useSearchParams } from "react-router-dom";
import Header from "./components/Header/Header";
import products from "./assets/products.json";
import brands from "./assets/brands.json";
import Sort from "./components/Sort/Sort";
import { IProduct } from "./types/types";
import styles from "./App.module.css";
import PaginatedList from "./components/PaginatedList/PaginatedList";
import Cart from "./components/Cart/Cart";

const Layout: FC = () => {
	return (
		<div className={styles.App}>
			<Header />
			<Outlet />
		</div>
	);
};

export const CartContext: any = React.createContext([]);

function App() {
	const [searchParams, setSearchParams] = useSearchParams();
	const [filteredProducts, setFilteredProducts] = useState<IProduct[]>([]);
	const [cart, setCart] = useState<[]>([]);

	useEffect(() => {
		const query = searchParams.getAll("brand");

		if (query.length) {
			setFilteredProducts(
				products.filter((product) =>
					query?.join(",").includes(`${product.brand}`)
				)
			);
		}

		if (!query.length) {
			setFilteredProducts(products);
		}
	}, [searchParams]);

	return (
		<CartContext.Provider value={[cart, setCart]}>
			<Routes>
				<Route path="/accent-to-result-test" element={<Layout />}>
					<Route
						index
						element={
							<main className={styles.main}>
								<Sort brands={brands} />
								<PaginatedList products={filteredProducts} />
							</main>
						}
					/>
					<Route path="cart" element={<Cart />} />
				</Route>
			</Routes>
		</CartContext.Provider>
	);
}

export default App;
