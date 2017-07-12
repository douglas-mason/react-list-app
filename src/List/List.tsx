import * as React from 'react';
import { Item } from '../types/index';
// import * as Redux from 'react-redux';
import './List.css';

class List extends React.Component<{}, { items: Item[]}> {
  constructor(props: object) {
    super(props);
    this.state = {
      ...this.state,
      items: [{id: 0, name: ''}] as Item[]
    };
    this.addItemToList = this.addItemToList.bind(this);
    this.removeItemFromList = this.removeItemFromList.bind(this);
  }

  // updateItemName(event: any) {
  //   const value = event.target.value;
  // }

  addItemToList (event: any) {
    if (event.which === 13) {
      console.log('enter', event.target.value);
      const newItemValue = event.target.value;
      this.setState({
        ...this.state,
        items: [
          ...this.state.items,
          {
            id: this.state.items.length,
            name: newItemValue
          }
        ]
      });
    }
  }

  removeItemFromList () {
    console.log('test');
  }

  render() {
    const listItems = this.state.items.map((item) => {
      return (
        <li key={item.id}>
          <ListItem
            name={item.name}
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
            type="text"
            placeholder="Enter an item"
          />
        </li>
      </ul>
    );
  }
}

const ListItem =
  (props: {
    name: string,
    onRemove?: () => void
  }) => {
  return (
    <div>
      <input
        value={props.name}
        type="text"
        placeholder="Enter an item"
      />
      <button onClick={props.onRemove}>
        Remove
      </button>
    </div>
  );
};

export default List;