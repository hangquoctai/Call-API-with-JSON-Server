import React from 'react';
import HomePage from './pages/HomePage/homepage';
import NotFoundPage from './pages/NotFoundPage/notfoundpage';
import ProductListPage from './pages/ProductListPage/productlistpage';
import ProductActionPage from './pages/ProductActionPage/productactionpage';

const routes=[
    {
        path:"/",
        exact:true,
        main: () => <HomePage/>
    },
    {
        path:"/product-list",
        exact:false,
        main: () => <ProductListPage/>
    },
    {
        path:"/product/add",
        exact:false,
        main: ({history}) => <ProductActionPage history={history}/>
    },
    {
        path:"/product/:id/edit",
        exact:false,
        main: ({match,history}) => <ProductActionPage match={match} history ={history}/>
    },
    {
        path:"",
        exact:false,
        main: () => <NotFoundPage/>
    }

];

export default routes;