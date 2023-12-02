import React, {useState} from "react";
import PropTypes from "prop-types";
import {plural} from "../../utils";
import './style.css';

function Item(props) {

  // Счётчик выделений
  const [count, setCount] = useState(0);

  const callbacks = {
    onClick: () => {
      props.onSelectItem(props.item.code);
      if (!props.item.selected) {
        setCount(count + 1);
      }
    },
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
    <div className={'Item' + (props.item.selected ? ' Item_selected' : '')}
     >
      <div className='Item-code'>{props.item.code}</div>
      <div className='Item-title'>
        {props.item.title} {count ? ` | Выделяли ${count} ${plural(count, {
        one: 'раз',
        few: 'раза',
        many: 'раз'
      })}` : ''}
      </div>
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
    selected: PropTypes.bool,
    count: PropTypes.number
  }).isRequired,
  onDelete: PropTypes.func,
  onSelect: PropTypes.func
};

Item.defaultProps = {
  onDelete: () => {
  },
  onSelect: () => {
  },
}

export default React.memo(Item);
