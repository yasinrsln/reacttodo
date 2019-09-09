import React from 'react';
import _ from 'lodash';
import TodoListItem from './TodoListItem'

export default class TodoList extends React.Component {
  renderItems() {
    const props = _.omit(this.props, 'todos');

    return _.map(this.props.todos, (todo, index) => <TodoListItem key={index} {...todo} {...props}/>);
  }

  render() {
    return (
      <table className="table">  <p className="yapilacak">Yapılacaklar Listesi</p>
        
        <tbody>
          {this.renderItems()}
        </tbody>
      </table>
    );
  }
}
