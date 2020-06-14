import React, { Component } from 'react';
import './Item.css';

class Grc extends Component {

  render() {
    const { item, onClick, onRemove, addBasket } = this.props;
    const { _id, name, _, inBasket} = item;

    
    return (
      <div
        onClick={() => onClick(_id)}
        className="todo-item"
      >

        <div className="remove" onClick={(e) => {
          e.stopPropagation(); // onToggle 이 실행되지 않도록 함
          onRemove(_id)
        }
        }>&times;</div>

        <div className={`todo-text`}>
          {name}
        </div>


        <div className={inBasket ? "basket" : "not-in-basket"}
          onClick={() => addBasket(_id)}
        >
          🛒
            </div>

      </div>
    );
  }
}

export default Grc;
