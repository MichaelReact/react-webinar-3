import React from "react";
import PropTypes from 'prop-types';
import Item from "../item";
import './style.css';

function List({list, onDeleteItem, onAddItem,onSelectItem,children}) {
  console.log(children)
  return (
    <div className='List'>
      {children||list.map((item) =>{
          return <div key={item.code} className='List-item'>
         <Item item={item} id={item.code} onSelectItem={onSelectItem} onAddItem={onAddItem} />
        </div>;

      })}
    </div>
  );
}

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape({
    code: PropTypes.number
  })).isRequired,
  onDeleteItem: PropTypes.func,
  onSelectItem: PropTypes.func
};

List.defaultProps = {
  onDeleteItem: () => {
  },
  onSelectItem: () => {
  },
}

export default React.memo(List);
