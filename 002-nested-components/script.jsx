var Hello = React.createClass({
  render: function(){
    var data = this.props.data;

    var greetings = Object.keys(data.greeting)
    .map(function(name){
      return (
        <div key={name}>
          {data.greeting[name]} {name}
        </div>
      );
    })
    .sort(function(a, b){
      if(a.key > b.key){
        return 1;
      }
      else if(a.key < b.key){
        return -1;
      }
      else {
        return 0;
      }
    });

    return (
      <div>
        { greetings }
      </div>
    );
  }
});

var App = React.createClass({
  render: function(){
    var collection = {
      ryan: 'hello',
      gerald: 'hi',
      trey: 'yo'
    }
    return (
      <div>
        <h1>React Example</h1>
        <Hello data={{ greeting: collection }} />
      </div>
    );
  }
});

React.render(
  <App />,
  document.getElementById('root')
);
