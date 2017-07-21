import * as React from 'react';
import { Item } from '../types/index';

export const ListItem =
  (props: {
    item: Item,
    onRemove: (id: number) => void,
    onUpdate: (updatedItem: Item) => void
  }) => {

  function onRemoveClick() {
    props.onRemove(props.item.id);
  }

  function onItemChange(event: React.ChangeEvent<HTMLInputElement>) {
    console.log('update');
    const newItemValue = (event.target as HTMLInputElement).value;
    props.onUpdate({
      id: props.item.id,
      name: newItemValue
    });
  }

  return (
    <div>
      <input
        className="list-item-input"
        defaultValue={props.item.name}
        type="text"
        placeholder="Enter an item"
        onChange={onItemChange}
      />
      <button className="btn-remove" onClick={onRemoveClick}>
        Remove
      </button>
    </div>
  );
};