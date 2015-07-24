var Hello = React.createClass({
  render: function(){
    var greetings = ["hello", "hi", "welcome"]
    var names = ["gerald", "dan", "trey", "ryano"];
    var hellos = names.map(function(name, index){
      var greeting = index % greetings.length;
      return <h1 key={index}>{greetings[greeting]} {name}</h1>
    });
    return (
      <div>
        {hellos}
      </div>
    );
  }
});

React.render(
  <Hello />,
  document.getElementById('root')
);
