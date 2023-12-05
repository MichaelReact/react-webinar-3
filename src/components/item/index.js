import React from "react";
import PropTypes from "prop-types";
import {plural} from "../../utils";
import './style.css';
import {formatPrice} from '../../utils';

function Item(props) {

  const price=formatPrice(props.item.price);

  const callbacks = {
   
    onSelect:(e)=>{
      
      console.log('select')
      props.onSelectItem(props.item.code);
    },
    onAdd: (e) => {
      
      // e.stopPropagation();
      // props.onDelete(props.item.code);
      
      
      props.onAddItem(props.id);

    }
  }

  return (
    <div className={'Item' }
     >
      <div className='Item-code'>{props.item.code}</div>
      <div className='Item-title'>
        {props.item.title} 
      </div>
      <span className='Item-actions__price'>{price}</span>
      <div className='Item-actions'   onClick={callbacks.onSelect}>
       
        <button onClick={callbacks.onAdd}>
          Добавить
        </button>
      </div>
    </div>
  );
}

Item.propTypes = {
  item: PropTypes.shape({
    code: PropTypes.number,
    title: PropTypes.string,
    price: PropTypes.number
  }).isRequired,
  onAdd: PropTypes.func,
  onSelect: PropTypes.func
};

Item.defaultProps = {
  onDelete: () => {
  },
  onSelect: () => {
  },
}

export default React.memo(Item);
