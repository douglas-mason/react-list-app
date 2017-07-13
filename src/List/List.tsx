import * as React from 'react';
import { Item } from '../types/index';
// import * as Redux from 'react-redux';
import './List.css';
import { ListItem } from './ListItem';

class List extends React.Component<{}, { items: Item[]}> {
  constructor(props: object) {
    super(props);
    this.state = {
      ...this.state,
      items: [] as Item[]
    };
    this.addItemToList = this.addItemToList.bind(this);
    this.removeItemFromList = this.removeItemFromList.bind(this);
  }

  // updateItemName(event: any) {
  //   const value = event.target.value;
  // }

  addItemToList (event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.which === 13) {
      const newItemValue = (event.target as HTMLInputElement).value;
      const lastItem = this.state.items[this.state.items.length - 1];
      const id = lastItem ? lastItem.id + 1 : 0;
      this.setState({
        ...this.state,
        items: [
          ...this.state.items,
          {
            id,
            name: newItemValue
          }
        ]
      });
    }
  }

  removeItemFromList (itemId: number) {
    const idx = this.state.items.findIndex(item => item.id === itemId);
    this.state.items.splice(idx, 1);
    const items = this.state.items;
    this.setState({
      ...this.state,
      items
    });
  }

  render() {
    const listItems = this.state.items.map((item) => {
      return (
        <li key={item.id}>
          <ListItem
            item={item}
            onRemove={this.removeItemFromList}
          />
        </li>
      );
    });

    return (
      <ul>
        {listItems}
        <li key={this.state.items.length + 1}>
          <input
            onKeyUp={this.addItemToList}
            defaultValue=""
            type="text"
            placeholder="Enter an item"
          />
        </li>
      </ul>
    );
  }
}

export default List;