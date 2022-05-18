//components
import Search from '../Search/Search';
// Types
// Styles
import { Wrapper } from './LandingSection.styles';
import * as React from "react";
import Grid from "@material-ui/core/Grid";
import Item from "../Item/Item";
import {useQuery} from "react-query";
import * as Data from "../Data/products.json";

export type CartItemType = {
    id: number;
    category: string;
    description: string;
    image: string;
    price: number;
    title: string;
    amount: number;
};

let products = Data.products;
const getProducts = async (): Promise<CartItemType[]> => products;


const LandingSection = () => {
    const { data } = useQuery<CartItemType[]>(
        'products',
        getProducts
    );
    console.log(data);

        return (
            <Wrapper>
                <div className="background-cover">
                    <div className="title">
                        <h1>Planning a trip?</h1>
                    </div>
                    <Search />
                </div>
                <div className='lowerSection'>
                    <Grid container spacing={3}>
                        {data?.map(item => (
                            <Grid item key={item.id} xs={6} sm={6}>
                                <Item item={item} />
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </Wrapper>
        );
}

export default LandingSection;