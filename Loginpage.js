Feature('login');

Scenario('Login Page verify', ({ I }) => {
  I.amOnPage('/login');

// Wrong login user & password
  I.fillField('username', 'hello@hello.com');
  I.fillField('password', 'Hello@1234');
  I.click('Sign In');
  I.waitForText('The user credentials were incorrect.', 5)
  I.see('The user credentials were incorrect.')

//   Correct login user & password
  I.fillField('username', process.env.USER);
  I.fillField('password', process.env.PASSWORD);
  I.click('Sign In');
  I.waitForText('Login Completed Successfully', 10)
  I.see('Login Completed Successfully')

//   Dashboard verify
  I.waitForText('Welcome back, Jenish Varsani! 👋', 10);
  I.see('Welcome back, Jenish Varsani! 👋');
  I.see('Total Revenue');
  I.see('Net Profit / Loss');
  I.see('Pending Receipts');
  I.see('Pending Payments');
  I.see('Cash Flow');
  I.see('Working Capital');
  I.see('Total Assets');
  I.see('Profit Margin');
  I.see('Bank & Cash Distribution');
  I.see('Expense Breakdown');
  I.see('Top 5 Customers');
  I.see('Top 5 Suppliers');

});