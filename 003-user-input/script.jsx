var Hello = React.createClass({
  getInitialState: function(){
    return { names: [] };
  },
  push: function(name){
    this.state.names.unshift(<li key={name}> {"Hello " + name } </li>);
  },
  greet: function(){
    this.push(this.refs.name2greet.value);
    this.setState({
      names: this.state.names
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
    return (
      <div>
        <input placeholder="Name" ref="name2greet"/>
        <button onClick={this.greet}>Greet</button>
        <hr />
        <ul>
          { this.state.names }
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
