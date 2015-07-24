var UserInputForm = React.createClass({
  handleSubmit: function(e){
    e.preventDefault();
    this.props.greet({
      name: this.refs.name2greet.value,
      email: this.refs.email2greet.value
    });
    this.refs.userForm.reset();
  },
  render: function(){
    return (
      <form onSubmit={this.handleSubmit} ref="userForm">
        <input placeholder="Name" ref="name2greet" required />
        <input type="email" placeholder="Email" ref="email2greet" required />
        <button>Greet</button>
      </form>
    );
  }
});

var OneUserGreeting = React.createClass({
  handleClick: function(){
    this.props.deleteName(this.props.key)
  },
  render: function(){
    return (
      <span>
        <li key={this.props.key}>Hello &nbsp;
          <a href={ "https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=" + this.props.name.email }>
            {this.props.name.name}
          </a>&nbsp;
          <a href={"#"} onClick={this.handleClick}>delete</a>
        </li>
      </span>
    )
  }
});

var ListOfGreetings = React.createClass({
  render: function(){
    var scope = this;
    var usersLIs = this.props.names.map(function(name, index){
      return <OneUserGreeting name={name} key={index} deleteName={scope.props.deleteName}/>;
    });
    return (
      <div>
        <ul>
          { usersLIs }
        </ul>
      </div>
    );
  }
});

var App = React.createClass({
  getInitialState: function(){
    return { names: [] };
  },
  deleteName: function(index){
    this.setState({
      names: this.state.names.splice(index, 1)
    });
  },
  greet: function(name){
    this.setState({
      names: this.state.names.concat(name)
    });
  },
  render: function(){
    return (
      <div>
        <UserInputForm greet={this.greet}/>
        <ListOfGreetings names={this.state.names} deleteName={this.deleteName} />
      </div>
    );
  }
});

React.render(
  <App />,
  document.getElementById('root')
);
