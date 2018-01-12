var React = require('react');
var DefaultLayout = require('./layouts/default');

class HelloMessage extends React.Component {
  render() {
    return (
      <DefaultLayout title="Registration">
        <h1>Registration</h1>
        <form action="registration" method="POST">
          <input type="text" name="username" placeholder="Username"/>
          <input type="password" name="password" placeholder="Password"/>
          <input type="submit" value="Register"/>
        </form>
      </DefaultLayout>
    );
  }
}

module.exports = HelloMessage;
