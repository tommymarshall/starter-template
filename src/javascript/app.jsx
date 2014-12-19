/**
 * @jsx React.DOM
 */
var React = require('react')

var App = React.createClass({

  render() {
    return (
      <h1>Application here</h1>
    )
  }

})

window.onload = function() {
  React.renderComponent(
    App(),
    document.getElementById('app')
  )
}