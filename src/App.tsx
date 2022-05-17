import { useState } from 'react';
import { useQuery } from 'react-query';
// Components
import * as Data from './Data/products.json';
import Header from './partials/Header';
import Footer from './partials/Footer';
import LandingPage from './LandingPage/LandingSection';
import Item from './Item/Item';
import Cart from './Cart/Cart';
import Drawer from '@material-ui/core/Drawer';
import LinearProgress from '@material-ui/core/LinearProgress';
import Grid from '@material-ui/core/Grid';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';
// Styles
import { Wrapper, StyledButton } from './App.styles';
import {Link} from "react-router-dom";
// Types



const App = () => {
    return (
      <>
        <Header />
        <LandingPage />
        <Footer />
      </>
  );
};

export default App;
