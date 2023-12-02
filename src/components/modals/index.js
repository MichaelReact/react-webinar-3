import React from 'react';
import './style.css';


const Modal=({onClose,list,onDelete})=>{
  console.log(list)
   function onDeleteItem(id){
    onDelete(id)
   }
    return (
            <div className="modal-wrapper" >
                <div className="overlay">
                        
                </div>
                <div className="modal">
                            <h1>Корзина</h1>
                            <button onClick={onClose}>Закрыть</button> 
                            {list.map(item=>{
                               
                                return (
                                  
                                        <div className='Item'>
                                          <div className='Item-code'>{item.code}</div>
                                          <div className='Item-title'>
                                            {item.title} 
                                          </div>
                                          
                                          <div className='Item-actions'>
                                          <div className='Item-actions__price'> {item.price}</div>
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
            </div>);
};

export default React.memo(Modal);