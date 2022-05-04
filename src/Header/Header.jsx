import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, LogoContainer, Wrapper, Menu, MenuItem, MenuItemLink} from './Header.elements';
import { BsBag } from "react-icons/bs";
import { IconContext } from 'react-icons/lib';
import { setCurrentUser } from '../redux/user/user.actions'
import { selectCartHidden } from '../redux/cart/cart.selectors'
import { selectCurrentUser } from '../redux/user/user.selectors'
import CartDropdownComponent from '../cart-dropdown/cart-dropdown.component'
import CartIconComponent  from "../cart-icon/cart-icon.component";
import {createStructuredSelector} from "reselect";
import {connect} from "react-redux";

const Header = (props) => {
    return (
        <Container>
            <Wrapper>
                <IconContext.Provider value ={{ style: {fontSize: "2em"}}}>
                    <LogoContainer>
                        <BsBag />
                        <p>Vent</p>
                        <p>arage</p>
                    </LogoContainer>
                        <Menu>
                            <MenuItem>
                                <MenuItemLink href="/">
                                    Categorías
                                </MenuItemLink>
                            </MenuItem>
                            <MenuItem>
                                {props.currentUser ?
                                <MenuItemLink className='option' to='#' onClick={() => props.setCurrentUser(null)}>
                                    Desconectar
                                </MenuItemLink>
                                :
                                <MenuItemLink className='option' href='/signin'>
                                    Iniciar Sesión
                                </MenuItemLink>
                                }
                            </MenuItem>
                            <MenuItem>
                                <MenuItemLink href='/signup'>
                                    Registrarse
                                </MenuItemLink>
                            </MenuItem>
                            <MenuItem>
                                <MenuItemLink>
                                     <CartIconComponent/>
                                </MenuItemLink>
                            </MenuItem>

                        </Menu>
                </IconContext.Provider>
            </Wrapper>
            {props.cartHidden ? null : <CartDropdownComponent />}
        </Container>
    );
};

const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser,
    cartHidden: selectCartHidden
})

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)
