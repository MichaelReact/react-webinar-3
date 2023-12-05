import React from 'react';
import {formatPrice} from '../../utils';
import PropTypes from 'prop-types';
import './style.css';

const ItemModal=({item,onDelete})=>{
    
    return (
    
    <div className='Item' key={item.code}>
        <div className='Item-code'>{item.code}</div>
        <div className='Item-title'>
        {item.title} 
        </div>
        
        <div className='Item-actions'>
        <div className='Item-actions__price'> {formatPrice(item.price)}</div>
        <div className='Item-actions__count'>{`${item.count} шт`}</div>
        <button onClick={()=>onDelete(item.code)}
        >
            Удалить
        </button>
        </div>
  </div>);
};

ItemModal.propTypes={
    item: PropTypes.shape({
        code: PropTypes.number,
       
      }).isRequired,
    onDelete:PropTypes.func
};
ItemModal.defaultProps={
    onDelete:()=>{

    }
};
export default ItemModal;