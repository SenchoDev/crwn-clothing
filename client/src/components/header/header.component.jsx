import React from "react";

import { connect } from "react-redux"
import { createStructuredSelector } from 'reselect'

//import { auth } from "../../firebase/firebase.utils";
import CartIcon from "../cart-icon/cart-icon.component"

import { ReactComponent as Logo } from "../../assets/4.3 crown.svg";
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { signOutStart } from '../../redux/user/user.actions'


import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink} from './header.styles'
const Header = ({ currentUser, hidden, signOutStart}) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo"></Logo>
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">
        SHOP
      </OptionLink>
      <OptionLink to="/">
        CONTACT
      </OptionLink>
      {currentUser ? 
        <OptionLink as='div' onClick={signOutStart}>SIGN OUT</OptionLink>
       : 
        <OptionLink to='/signin'>SIGN IN</OptionLink>
      }
      <CartIcon/>
    </OptionsContainer>
    {
      hidden ? null :
      <CartDropdown/>
    }
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser,
  hidden: selectCartHidden
})
const mapDistpatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDistpatchToProps)(Header);