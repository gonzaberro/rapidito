import { useState, useEffect } from "react";
import styles from "./styles/restaurant.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import MenuCard from "./MenuCard";
import { useSelector, useDispatch } from "react-redux";
import EmptyList from "../emptyList/EmptyList";
import { addItemsToShoppingCart } from "../../../redux/actions/shoppingCartActions";

export default function RestaurantMainContainer({
	searchProduct,
	productCategory,
}) {
	const dispatch = useDispatch();
	const topProducts = useSelector(state => state.restaurantMenu.topProducts);
	const menuProducts = useSelector(state => state.restaurantMenu.menuProducts);
	const shoppingCartItems = useSelector(state => state.shoppingCart.items);
	const [filteredMenu, setFilteredMenu] = useState(menuProducts);

	useEffect(() => {
		let filteredProducts = menuProducts;

		if (searchProduct !== "") {
			for (const [key, value] of Object.entries(menuProducts)) {
				const products = value.filter(
					product =>
						product?.descripcion
							.toLowerCase()
							.includes(searchProduct.toLowerCase()) ||
						product?.nombre.toLowerCase().includes(searchProduct.toLowerCase())
				);

				if (products.length > 0) {
					filteredProducts = { ...filteredProducts, [key]: products };
				}
			}

			
		} else if(productCategory !== "") {
			filteredProducts = [];
			for (const [key, value] of Object.entries(menuProducts)) {
				if(key === productCategory){
					filteredProducts = { ...filteredProducts, [key]: value };
				}
			}
		}


		setFilteredMenu(filteredProducts);
	}, [searchProduct,productCategory]);

	const menuActionButton = product => {
		return (
			<span
				onClick={() =>
					dispatch(
						addItemsToShoppingCart([
							...shoppingCartItems,
							{ cartId: shoppingCartItems.length + 1, ...product },
						])
					)
				}
				className={styles.menuActionButton}
			>
				Agregar al pedido
			</span>
		);
	};

	const RenderRestaurantMenu = () => {
		let menuProduct = [];

		for (const [key, value] of Object.entries(filteredMenu)) {
			menuProduct = [
				...menuProduct,
				<>
					<div className={styles.recomendedMenu}>
						<h3 className={styles.recommendedMenuTitle}>{key}</h3>
					</div>
					<div className={styles.menuContainer}>
						{value.map(product => {
							return (
								<MenuCard
									title={product.nombre}
									description={product.descripcion || ""}
									src={product.imagen}
									price={`$${product.precio}`}
									cardActionButton={menuActionButton(product)}
								/>
							);
						})}
					</div>
				</>,
			];
		}

		return menuProduct;
	};

	return (
		<>
			<div>
				{searchProduct === "" && productCategory==="" && topProducts.length > 0 && (
					<>
						<div className={styles.recomendedMenu}>
							<h3 className={styles.recommendedMenuTitle}>
								Platos Recomendados
							</h3>
							<span className={styles.realPhotoTag}>
								<FontAwesomeIcon
									icon={faCheck}
									height="15"
									className={styles.realPhotoCheck}
								/>
								Fotos Reales
							</span>
						</div>
						<div className={styles.menuContainer}>
							{topProducts.map(product => {
								return (
									<MenuCard
										title={product.nombre}
										description={product.descripcion || ""}
										src={product.imagen}
										price={`$${product.precio}`}
										cardActionButton={menuActionButton(product)}
									/>
								);
							})}
						</div>
					</>
				)}
				{
					<EmptyList list={filteredMenu}>
						<RenderRestaurantMenu />
					</EmptyList>
				}
			</div>
		</>
	);
}
