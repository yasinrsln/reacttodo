import React from 'react';
// import _ from 'lodash';

export default class TodoListItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false
    };
  }

  renderTaskSection() {
    const {task, isCompleted} = this.props;
    //Görev Bu özellikleri tamamladı//    

    const taskStyle =  isCompleted ? 'done' : ''
    // görev stili tamamlandı//

    if (this.state.isEditing) {
      //eğer bu durum düzenleniyorsa//
      
      return (
        //dönüş// 
        <td> Yeni Değeri Giriniz.
          <form onSubmit={this.onSaveClick.bind(this)}> 
            
            <input className="form-control"  type="text" defaultValue={task} ref="editInput"/>
          </form>
        </td>
      );
    }
    return (
      <td className={taskStyle} onClick={this.props.toggleTask.bind(this, task)}>
        {task}
      </td>
    );
  }
  renderActionsSection() {
    if (this.state.isEditing) {
      return (
        <td>
          <button className="btn btn-dark" onClick={this.onSaveClick.bind(this)}>Kaydet</button>
          <button className="btn btn-danger" onClick={this.onCancelClick.bind(this)}>İptal</button>
        </td>
      );
    }

    return (
      <td>
        <button className="btn btn-success" onClick={this.onEditClick.bind(this)}>Düzenle</button>
        <button className="btn btn-warning" onClick={this.props.deleteTask.bind(this, this.props.task)}>Sil</button>
      </td>
    );
  }

  render() {
    return (
      <tr>
        {this.renderTaskSection()}
        {this.renderActionsSection()}
      </tr>
    );
  }

  onEditClick() {
    this.setState({isEditing: true});
  }

  onCancelClick() {
    this.setState({isEditing: false});
  }

  onSaveClick(event) {
    event.preventDefault();

    const oldTask = this.props.task;
    const newTask = this.refs.editInput.value;
    this.props.saveTask(oldTask, newTask);
    this.setState({isEditing: false});
  }
}
