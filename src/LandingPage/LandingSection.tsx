//components
import Search from '../Search/Search';
// Types
// Styles
import { Wrapper, Grid } from './LandingSection.styles';
import * as React from "react";
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
                        <p>Planning a trip?</p>
                    </div>
                    <Search />
                </div>
                <div className='lower-section'>
                    <Grid>
                        {data?.map(item => (
                            <Grid  key={item.id} >
                                <Item item={item} />
                            </Grid>
                        ))}
                    </Grid>
                </div>
            </Wrapper>
        );
}

export default LandingSection;