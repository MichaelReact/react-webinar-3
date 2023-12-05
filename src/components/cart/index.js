import React from 'react';
import 'style.css';
import {formatPrice} from '../../utils';
import PropTypes from 'prop-types';
import ItemModal from '../item-modal';
import List from '../list';
import './style.css';

const Cart=({list,onDelete,price})=>{
    const priceFormat=formatPrice(price);
    return (
        <>
       
        <List list={list} onDelete={onDelete}>
                {list.map(item=>{
                               
                               return (
                                 <ItemModal key={item.code} item={item} onDelete={onDelete}/>
                                       
                                     );
                               
                           })}
           
        </List>
        {price>=0?<div className="sum"><span className="sum__name">Итого:</span> <span>{priceFormat}</span>  </div>:''}
        </>
    );
}
Cart.propTypes={
    list:PropTypes.array,
    onDelete:PropTypes.func,
    price:PropTypes.number
};
Cart.defaultProps={
    onDelete:()=>{

    }
};

export default React.memo(Cart);