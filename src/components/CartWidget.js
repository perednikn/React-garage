import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import ThemeContext from '../context/CartContext';

function IconCart(){

    const { cartSize }  = useContext(ThemeContext);
    const itemsCart = cartSize();

return (<NavLink to={'/cart'} className="bi bi-cart4 navItem"> {itemsCart} </NavLink> )}
export default IconCart;
