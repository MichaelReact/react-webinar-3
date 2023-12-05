import React from "react";
import PropTypes from 'prop-types';
import './style.css';
import {plural,formatPrice} from "../../utils";

function Controls({onOpen,listModal,quantity,price}) {
  const priceFormat=formatPrice(price);
  
  
console.log(listModal)
  return (
    <div className='Controls'>
      В корзине:{quantity===0? <span className="Controls__empty">  пусто </span> :
      <><span className="count">  {quantity} {plural(quantity, {
        one: 'товар',
        few: 'товара',
        many: 'товаров'
      })} /</span>
     <span className="price">{priceFormat}  </span> </>}
      
      <button onClick={()=>onOpen()}>Перейти</button>
    </div>
  )
}

Controls.propTypes = {
  onOpen: PropTypes.func,
  listModal: PropTypes.array,
  quantity:PropTypes.number,
  price:PropTypes.number,

};

Controls.defaultProps = {
  onOpen: () => {}
}

export default React.memo(Controls);
