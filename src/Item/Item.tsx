// Types
import { CartItemType } from '../LandingPage/LandingSection';
// Styles
import { Wrapper } from './Item.styles';

type Props = {
  item: CartItemType;
};

const Item: React.FC<Props> = ({ item }) => (
  <Wrapper>
    <img src={item.image} alt={item.title} />
    <div>
      <h3>{item.title}</h3>
      <p>{item.description}</p>
      <h3>${item.price}</h3>
    </div>
  </Wrapper>
);

export default Item;
