import React from 'react';
import PropTypes from "prop-types";
import './style.css';


const Modal=({onClose,list,onDelete,price})=>{
  console.log(list)
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
                            <div className='List'>
                            <div className='List-item'>
                            {list.map(item=>{
                               
                                return (
                                  
                                        <div className='Item' key={item.code}>
                                          <div className='Item-code'>{item.code}</div>
                                          <div className='Item-title'>
                                            {item.title} 
                                          </div>
                                          
                                          <div className='Item-actions'>
                                          <div className='Item-actions__price'> {item.price+' ₽'}</div>
                                          <div className='Item-actions__count'>{`${item.count} шт`}</div>
                                            <button onClick={()=>onDelete(item.code)}
                                            >
                                              Удалить
                                            </button>
                                          </div>
                                        </div>
                                      );
                                
                            })}
                            </div>
                            </div>

                            <div className="sum">Итого: {price} ₽ </div>
                </div>
            </div>);
};

Modal.propTypes={
 list: PropTypes.array.isRequired,
  onClose: PropTypes.func,
  onDelete: PropTypes.func
}
export default React.memo(Modal);