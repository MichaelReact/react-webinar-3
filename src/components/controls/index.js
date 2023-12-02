import React from "react";
import PropTypes from 'prop-types';
import './style.css';

function Controls({onOpen,listModal}) {

  const newList=listModal.slice().map(item=>{
     item.all=item.price*item.count;
     return item;
  });

  const [price,quantity]=newList.reduce((item,nextItem)=>{
   item[0]=item[0]+nextItem.all;
   item[1]=item[1]+nextItem.count;
    
    return item;
  },[0,0]);
  
console.log(listModal)
  return (
    <div className='Controls'>
     <div className="price">{price}</div>
     <div className="count">{quantity}</div>
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
