import React from 'react'
import Grid from "@material-ui/core/Grid";
import ProductCard from '../../Components/ProductCard';
import categories from '../../data/categories.json';

const Categories = () => {

    return <Grid container spacing={4}>
        {categories.map(category => <Grid item xs={6}> <ProductCard {...category} buttonLabel="SHOP NOW" /> </Grid>)}
    </Grid>

}

export default Categories;