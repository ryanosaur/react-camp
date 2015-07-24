var UserInputForm = React.createClass({
  handleSubmit: function(e){
    e.preventDefault();
    this.props.greet(this.refs.name2greet);
  },
  render: function(){
    return (
      <form>
        <input placeholder="Name" ref="name2greet" required/>
        <button onClick={this.handleSubmit}>Greet</button>
      </form>
    );
  }
});

var OneUserGreeting = React.createClass({
  render: function(){
    return <li key={this.props.key}>Hello {this.props.name}</li>
  }
});

var ListOfGreetings = React.createClass({
  render: function(){
    var usersLIs = this.props.names.map(function(name, index){
      return <OneUserGreeting name={name} key={index} />;
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
  greet: function(nameInput){
    this.setState({
      names: this.state.names.concat(nameInput.value)
    }, function(){
      nameInput.value = '';
    });
  },
  render: function(){
    return (
      <div>
        <UserInputForm greet={this.greet}/>
        <ListOfGreetings names={this.state.names} />
      </div>
    );
  }
});

React.render(
  <App />,
  document.getElementById('root')
);
