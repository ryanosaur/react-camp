var Hello = React.createClass({
  render: function(){
    var data = this.props.data;
    return (
      <div>
        {data.name} {data.greeting[data.name]}
      </div>
    );
  }
});

var App = React.createClass({
  render: function(){
    var collection = {
      gerald: 'hi',
      ryan: 'hello',
      trey: 'yo'
    }
    return (
      <div>
        <h1>React Example</h1>
        <Hello data={{ name: 'ryan', greeting: collection }} />
      </div>
    );
  }
});

React.render(
  <App />,
  document.getElementById('root')
);
