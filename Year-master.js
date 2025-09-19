Feature('login');

Scenario('Login and Year Master', ({ I }) => {
  I.amOnPage('/');

//   Login Page
  I.click('Login');
  I.fillField('username', process.env.USER);
  I.fillField('password', process.env.PASSWORD);
  I.click('Sign In');

//   Dashboard verify
  I.waitForText('Login Completed Successfully', 5);
  I.see('Login Completed Successfully');
  I.waitForText('Welcome back, Jenish Varsani! 👋', 5);
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

//   Year Master Create
  I.click('Items');
  I.waitForText('Years', 2);
  I.click('Years');
  I.see('Year');
  I.waitForText('Add Year', 5);
  I.click('Add Year');
  I.waitForText('Create New Year', 3);
  I.see('Create New Year');
  const Year_name = `(${Date.now()})`;
  I.fillField('name', Year_name);
  I.click('input[name="start_date"]');
  I.click('//td[@aria-label="April 1, 2026"]'); 
  I.click('input[name="end_date"]');
  I.click('//td[@aria-label="March 31, 2027"]');
  I.click('button[name="status"]');
  I.click(locate('span').withText('Active'));
  I.click('Save');
  I.see('Year created successfully');

//   Year Master Update
  I.click('Open menu');
  I.waitForText('Edit', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Edit"]]');
  I.waitForText('Update Year', 5);
  I.fillField('name', Year_name);
  I.click('Save');
  I.see('Year updated successfully');

  //   Year Master Create time Unique Validation Check
  I.click('Add Year');
  I.waitForText('Create New Year', 3);
  I.see('Create New Year');
  I.fillField('name', '2025-26');
  I.fillField('input[name="start_date"]', '2026-04-01');
  I.fillField('input[name="end_date"]', '2027-03-31');
  I.click('button[name="status"]');
  I.click(locate('span').withText('Active'));
  I.click('Save');
  I.waitForText('The name has already been taken.', 3)
  I.see('The name has already been taken.');
  I.click('Cancel');
  I.see('You have unsaved changes. Are you sure you want to leave? Your changes will be lost.');
  I.click('Discard');

   //   Year Master Update time Unique Validation Check
  I.click('Open menu'); 
  I.waitForText('Edit', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Edit"]]');
  I.waitForText('Update Year', 5);
  I.fillField('name', '2025-26');
  I.click('Save');
  I.waitForText('The name has already been taken.', 3)
  I.see('The name has already been taken.');
  I.click('Cancel');
  I.see('You have unsaved changes. Are you sure you want to leave? Your changes will be lost.');
  I.click('Discard');
  
//  Active Year Delete if not delete
  I.click('Open menu');
  I.waitForText('Delete', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Delete"]]');
  I.see('Delete Year');
  I.click('Delete');
  I.waitForText('you can not delete active year', 3)
  I.see('you can not delete active year');
  I.click('Cancel');
  I.see('You have unsaved changes. Are you sure you want to leave? Your changes will be lost.');
  I.click('Discard');

  //  Active Year De-active if not De-active
  I.click('Open menu');
  I.waitForText('Edit', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Edit"]]');
  I.see('Update year');
  I.click('button[name="status"]');
  I.click(locate('span').withText('De-active'));
  I.waitForText('Status at list one active status required.', 3)
  I.see('Status at list one active status required.');
  I.click('Cancel');
  I.see('You have unsaved changes. Are you sure you want to leave? Your changes will be lost.');
  I.click('Discard');

  // Yeare Master Filter
  I.click('Filter');
  I.see('Year Filters');
  I.fillField('name', '2025-26');
  I.click('Apply');
  I.waitForText('2025-26', 7);
  I.see('2025-26');

//  De-active Year Active
  I.click('Open menu');
  I.waitForText('Edit', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Edit"]]');
  I.see('Update year');
  I.click('button[name="status"]');
  I.click(locate('span').withText('Active'));
  I.waitForText('Year updated successfully', 3)
  I.see('Year updated successfully');
  I.click('Filter');
  I.click('Clear');

//  Year Delete
  I.click('Open menu');
  I.waitForText('Delete', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Delete"]]');
  I.see('Delete Year');
  I.click('Delete');
  I.waitForText('Year deleted successfully', 3)
  I.see('Year deleted successfully');
});