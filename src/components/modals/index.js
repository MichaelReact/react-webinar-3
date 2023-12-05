import React from 'react';
import PropTypes from "prop-types";
import './style.css';
import {formatPrice} from '../../utils';
import Cart from "../cart";

const Modal=({onClose,children})=>{
  // const priceFormat=formatPrice(price);
   function onDeleteItem(id){
    onDelete(id)
   }
    return (
            <div className="modal-wrapper" >
                <div className="overlay">
                        
                </div>
                <div className="modal">
                            <h1 className="modal__title">Корзина</h1>
                            <button className="close" onClick={onClose}>Закрыть</button> 
                            {children}
                </div>
            </div>);
};

Modal.propTypes={
 
  onClose: PropTypes.func,
 
  
}
export default React.memo(Modal);