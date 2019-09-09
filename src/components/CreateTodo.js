import React from 'react';
import _ from 'lodash';


export default class CreateTodo extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null
    };
  }

  renderError() {
    if (!this.state.error) {
      return null;
    }

    return <div style={{
      color: 'red'
    }}>{this.state.error}</div>;
  }

  render() {
    return (
      
      <form className="todoInput" onSubmit={this.handleCreate.bind(this)}>
        <div className="input-group">
          <input className="form-control" type="text" placeholder="Buraya Yazınız..." ref="createInput"/>
            <div className="input-group-btn">
            <button className="btn btn-warning">
                Ekle
              </button>
            </div>
        </div>
        <div className="errorMsg">
          {this.renderError()}
        </div>
      </form>
    );
  }

  handleCreate(event) {
    event.preventDefault();
    
    const createInput = this.refs.createInput;
    const task = createInput.value;
    const validateInput = this.validateInput(task);

    if (validateInput) {
      this.setState({error: validateInput});
      return;
    }

    this.setState({error: null});
    this.props.createTask(task);
    this.refs.createInput.value = '';
  }

  validateInput(task) {
    if (!task) {
      return <div className="alert alert-warning" role="alert">
        Lütfen Kayıt Giriniz.!
    </div>;
    } else if (_.find(this.props.todos, todo => todo.task === task)) {
      return <div className="alert alert-danger" role="alert">
     Girmiş Olduğunuz Kayıt Zaten Mevcut.
    </div>;
    } else {
      return null;
    }
  }
}
