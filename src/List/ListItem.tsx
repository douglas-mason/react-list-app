import * as React from 'react';
import { Item } from '../types/index';

export const ListItem =
  (props: {
    item: Item,
    onRemove: (id: number) => void
  }) => {

  function onRemoveClick() {
    props.onRemove(props.item.id);
  }

  return (
    <div>
      <input
        value={props.item.name}
        type="text"
        placeholder="Enter an item"
      />
      <button onClick={onRemoveClick}>
        Remove
      </button>
    </div>
  );
};