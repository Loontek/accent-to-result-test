import { FC, useEffect, useState } from "react";
import ReactPaginate from "react-paginate";
import { IProduct } from "../../types/types";
import ProductsList from "../ProductsList/ProductsList";
import styles from "./PaginatedList.module.css";

interface PaginatedListProps {
	products: IProduct[];
}

const PaginatedList: FC<PaginatedListProps> = ({ products }) => {
	const [currentItems, setCurrentItems] = useState<IProduct[]>([]);
	const [pageCount, setPageCount] = useState<number>(0);
	const [itemOffset, setItemOffset] = useState<number>(0);

	useEffect(() => {
		const endOffset = itemOffset + 6;
		setCurrentItems(products.slice(itemOffset, endOffset));
		setPageCount(Math.ceil(products.length / 6));
	}, [products, itemOffset]);

	useEffect(() => {
		setItemOffset(0);
	}, [products]);

	const handlePageClick = (event) => {
		const newOffset = (event.selected * 6) % products.length;
		setItemOffset(newOffset);
	};

	return (
		<div className={styles.PaginatedList}>
			<ProductsList products={currentItems} />
			<ReactPaginate
				nextLabel="next >"
				onPageChange={handlePageClick}
				pageRangeDisplayed={3}
				marginPagesDisplayed={2}
				pageCount={pageCount}
				previousLabel="< previous"
				pageClassName="page-item"
				pageLinkClassName="page-link"
				previousClassName="page-item"
				previousLinkClassName="page-link"
				nextClassName="page-item"
				nextLinkClassName="page-link"
				breakLabel="..."
				breakClassName="page-item"
				breakLinkClassName="page-link"
				containerClassName="pagination"
				activeClassName="active"
				renderOnZeroPageCount={null}
			/>
		</div>
	);
};

export default PaginatedList;
