import React, { FC, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { IBrand } from "../../types/types";
import styles from "./Sort.module.css";

interface SortProps {
	brands: IBrand[];
}

const Sort: FC<SortProps> = ({ brands }) => {
	const [searchParams, setSearchParams] = useSearchParams();

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		if (e.target.checked) {
			searchParams.append("brand", e.target.name);
		}

		if (!e.target.checked) {
			searchParams.set(
				"brand",
				searchParams
					.getAll("brand")
					.filter((param) => param !== e.target.name)
					.join(",")
			);
		}
	};

	const handleConfirm = (e: React.MouseEvent<HTMLButtonElement>) => {
		setSearchParams(searchParams);
	};

	const handleReset = (e: React.MouseEvent<HTMLButtonElement>) => {
		searchParams.delete("brand");
		setSearchParams(searchParams);
	};

	return (
		<aside className={styles.Sort}>
			<h2>Бренды</h2>
			{brands.map((brand) => {
				return (
					<label key={brand.id} className={styles.parameter}>
						<input
							type="checkbox"
							name={brand.sort}
							onChange={handleChange}
						/>
						{brand.title}
					</label>
				);
			})}
			<button onClick={handleConfirm}>Применить</button>
			<button onClick={handleReset}>Сбросить</button>
		</aside>
	);
};

export default Sort;
