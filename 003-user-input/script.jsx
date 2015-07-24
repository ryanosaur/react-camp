var OneUserGreeting = React.createClass({
  render: function(){
    return <li key={this.props.key}>Hello {this.props.name}</li>
  }
});

var Hello = React.createClass({
  getInitialState: function(){
    return { names: [] };
  },
  greet: function(){
    this.setState({
      names: this.state.names.concat(this.refs.name2greet.value)
    }, function(){
      this.refs.name2greet.value = '';
    });
  },
  componentDidMount: function(){
    console.log("Mounted!");
  },
  componentWillMount: function(){
    console.log("will mount now... ");
  },
  componentWillUnmount: function(){
    console.log("going to unmount now...");
  },
  render: function(){
    var usersLIs = this.state.names.map(function(name, index){
      return (
        <OneUserGreeting name={name} key={index} />
      )
    });
    return (
      <div>
        <input placeholder="Name" ref="name2greet"/>
        <button onClick={this.greet}>Greet</button>
        <hr />
        <ul>
          { usersLIs }
        </ul>
      </div>
    );
  }
});

var App = React.createClass({
  render: function(){
    return (
      <div>
        <Hello />
      </div>
    );
  }
});

React.render(
  <App />,
  document.getElementById('root')
);
