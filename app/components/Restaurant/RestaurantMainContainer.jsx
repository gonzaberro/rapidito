import burger1 from "./burger.jpg"; // Tell webpack this JS file uses this image
import styles from "./styles/restaurant.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import MenuCard from "./MenuCard";
import { useSelector } from "react-redux";

export default function RestaurantMainContainer() {

	const topProducts = useSelector(state => state.restaurantMenu.topProducts);
	const menuProducts = useSelector(state => state.restaurantMenu.menuProducts);
	
	const RenderRestaurantMenu = () => {
		
		let menuProduct = [];

		for (const [key, value] of Object.entries(menuProducts)) {

			menuProduct = [...menuProduct, 
					<>
							<div className={styles.recomendedMenu}>
											<h3 className={styles.recommendedMenuTitle}>{key}</h3>
							</div>
							<div className={styles.menuContainer}>
								{value.map((product) => {
										return <MenuCard
													title={product.nombre}
													description={product.description || "Hamburguesa doble con 2 medallones de 120g, bacon crocante, doble cheddar, pan de papa, tomate y lechuga"}
													src={burger1}
													price={product.precio}
												/>
								})
								}
								{value.map((product) => {
										return <MenuCard
													title={product.nombre}
													description={product.description || "Hamburguesa doble con 2 medallones de 120g, bacon crocante, doble cheddar, pan de papa, tomate y lechuga"}
													src={burger1}
													price={product.precio}
												/>
								})
								}
								{value.map((product) => {
										return <MenuCard
													title={product.nombre}
													description={product.description || "Hamburguesa doble con 2 medallones de 120g, bacon crocante, doble cheddar, pan de papa, tomate y lechuga"}
													src={burger1}
													price={product.precio}
												/>
								})
								}
								{value.map((product) => {
										return <MenuCard
													title={product.nombre}
													description={product.description || "Hamburguesa doble con 2 medallones de 120g, bacon crocante, doble cheddar, pan de papa, tomate y lechuga"}
													src={burger1}
													price={product.precio}
												/>
								})
								}
							</div>
					</>
				]

		
		}

		return menuProduct;
		
	}
	
	
	return (
		<>
			<div>
				<div className={styles.recomendedMenu}>
					<h3 className={styles.recommendedMenuTitle}>Platos Recomendados</h3>
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
					{
						topProducts.map(( product ) => {
							return <MenuCard
								title={product.nombre}
								description={product.description || "Hamburguesa doble con 2 medallones de 120g, bacon crocante, doble cheddar, pan de papa, tomate y lechuga"}
								src={burger1}
								price={product.precio}
							/>
						})
					}
					
				</div>
				{<RenderRestaurantMenu/>}
				
			</div>
		</>
	);
}
