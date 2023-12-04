import React from "react";
import PropTypes from 'prop-types';
import './style.css';
import {plural} from "../../utils";

function Controls({onOpen,listModal,quantity,price}) {

  
  
console.log(listModal)
  return (
    <div className='Controls'>
      В корзине:{quantity===0? <span className="Controls__empty">  Пусто </span> :
      <><span className="count">  {quantity} {plural(quantity, {
        one: 'товар',
        few: 'товара',
        many: 'товаров'
      })} /</span>
     <span className="price">{price} ₽  </span> </>}
      
      <button onClick={()=>onOpen()}>Перейти</button>
    </div>
  )
}

Controls.propTypes = {
  onAdd: PropTypes.func
};

Controls.defaultProps = {
  onAdd: () => {}
}

export default React.memo(Controls);
