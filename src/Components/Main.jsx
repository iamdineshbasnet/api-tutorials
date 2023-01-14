import React from 'react';
import Header from './Header';
import {CssBaseline} from '@mui/material'
const Main = ({children}) => {
    return (
        <>
        <CssBaseline/>
           <Header/> 
           {children}
        </>
    );
};

export default Main;