import { FC } from "react";
import { IProduct } from "../../types/types";
import ProductCard from "../ProductCard/ProductCard";
import styles from "./ProductsList.module.css";

interface ProductsListProps {
	products: IProduct[];
}

const ProductsList: FC<ProductsListProps> = ({ products }) => {
	return (
		<div className={styles.ProductsList}>
			{products.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	);
};

export default ProductsList;
