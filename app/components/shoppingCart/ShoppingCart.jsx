import { useState } from "react";
import Drawer from "@material-ui/core/Drawer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import styles from "../header/styles/header.module.scss";
import cartStyles from "./styles/shoppingCart.module.scss";
import MenuCard from "../Restaurant/MenuCard";
import { useSelector, useDispatch } from "react-redux";
import { addItemsToShoppingCart } from "../../../redux/actions/shoppingCartActions";
import restaurantStyles from "../Restaurant/styles/restaurant.module.scss";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import React from "react";

const StyledBadge = withStyles(theme => ({
	badge: {
		right: -9,
		top: 13,
		border: `2px solid ${theme.palette.background.paper}`,
		padding: "0 4px",
		backgroundColor: "grey",
	},
}))(Badge);

export default function ShoppingCart() {
	const dispatch = useDispatch();
	const [openDrawer, setOpenDrawer] = useState(false);
	const shoppingCartItems = useSelector(state => state.shoppingCart.items);

	const menuActionButton = product => {
		return (
			<span
				onClick={() =>
					dispatch(
						addItemsToShoppingCart([
							...shoppingCartItems.filter(
								item => item.cartId !== product.cartId
							),
						])
					)
				}
				className={restaurantStyles.menuActionButton}
				style={{ backgroundColor: "#ff2825" }}
			>
				Eliminar Producto
			</span>
		);
	};

	return (
		<>
			
				<StyledBadge
					badgeContent={shoppingCartItems.length}
					max={9}
					color="primary"
				>
					<FontAwesomeIcon
						icon={faShoppingCart}
						height="20"
						className={cartStyles.shoppingCartButton}
						onClick={() => setOpenDrawer(!openDrawer)}
					/>
				</StyledBadge>
			

			<Drawer
				anchor={"right"}
				open={openDrawer}
				onClose={() => setOpenDrawer(false)}
			>
				<h3 className={cartStyles.cartHeader}>Tu Pedido</h3>
				<h4 className={cartStyles.cartTotalAmount}>
					Total de la compra $
					{shoppingCartItems.reduce(
						(a, b) => parseInt(a, 10) + parseInt(b["precio"], 10),
						0
					)}
				</h4>
				<h5 className={cartStyles.cartItemsCount}>
					Tienes {shoppingCartItems?.length || 0} productos en tu carrito
				</h5>
				{shoppingCartItems.length > 0 && (
					<button className={cartStyles.confirmCart}>Realizar Pedido</button>
				)}
				<div className={cartStyles.cartItemsContainer}>
					{Array.isArray(shoppingCartItems) &&
						shoppingCartItems.map(item => {
							return (
								<MenuCard
									title={item.nombre}
									description="Cantidad: 1"
									src={item.imagen}
									price={`$${item.precio}`}
									cardActionButton={menuActionButton(item)}
								/>
							);
						})}
				</div>
			</Drawer>
		</>
	);
}
