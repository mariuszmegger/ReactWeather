var React = require('react');

var WeatherForm = React.createClass({
  onFormSubmit: function(e){
    e.preventDefault();
    var location = this.refs.location.value;
    if(location.length > 0){
      this.refs.location.value = '';
      this.props.onSearch(location);
    }
  },
  render: function(){
    return(
      <div>
        <form onSubmit={this.onFormSubmit}>
          <div><input type="text" placeholder="Enter City Name" ref="location"/></div>
          <div><input type="submit" value="Submit"/></div>
        </form>
      </div>
    )
  }
})

module.exports = WeatherForm;
