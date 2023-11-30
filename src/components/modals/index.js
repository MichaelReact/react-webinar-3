import React from 'react';
import './style.css';


const Modal=({onClose,list,onDelete})=>{
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
                                console.log(item.code)
                                return (
                                  
                                        <div className='Item'>
                                          <div className='Item-code'>{item.code}</div>
                                          <div className='Item-title'>
                                            {item.title} 
                                          </div>
                                          <div>{item.price}</div>
                                          <div className='Item-actions'>
                                            
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