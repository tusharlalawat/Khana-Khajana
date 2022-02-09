import { Fragment } from 'react';
import MealsImage from '../../assets/meals.jpg';
import classes from './Header.module.css';
import CartButton from './CartButton';

const Header = props => {
    return (
        <Fragment>
            <header className={classes.header}>
                <h1>Khana Khajana</h1>
                <CartButton onClick={props.onShowCart}/>
            </header>
            <div className={classes['main-image']}>
                <img src={MealsImage} alt="A table with full of delicios food!"/>
            </div>
        </Fragment>
    )
};

export default Header;