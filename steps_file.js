// in this file you can append custom step methods to 'I' object

// Define custom steps here, use 'this' to access default methods of I.
// It is recommended to place a general 'login' function here.

module.exports = function() {
  return actor({
    login: function(
      username = process.env.USER,
      password = process.env.PASSWORD
    )
    {
      this.amOnPage('/login');
      this.fillField('username', username);
      this.fillField('password', password);
      this.click('Sign In');
      this.waitForNavigation();
    }
  });
}
