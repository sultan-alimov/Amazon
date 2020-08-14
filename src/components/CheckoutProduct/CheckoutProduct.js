import React from 'react';
import StarOutlinedIcon from '@material-ui/icons/StarOutlined';
import {useStateValue} from '../../StateProvider';
import './CheckoutProduct.sass';

export default function CheckoutProduct({id, title, rating, image, price}) {
    const [{basket}, dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        });
    };
    return (
        <div className='checkoutProduct'>
            <img className='checkoutProduct__image' src={image} alt='' />
            <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className='checkoutProduct__price'>
                    <strong>
                        {new Intl.NumberFormat('en-US', {
                            style: 'currency',
                            currency: 'UZS'
                        }).format(price)}
                    </strong>
                </p>
                <div className='checkoutProduct__rating'>
                    {Array(rating)
                        .fill()
                        .map(_ => (
                            <p>
                                <StarOutlinedIcon style={{color: 'yellow'}} />
                            </p>
                        ))}
                </div>
                <button onClick={removeFromBasket}>Remove</button>
            </div>
        </div>
    );
}
