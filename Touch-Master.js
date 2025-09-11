Feature('login');

Scenario('Login and Touch Master', ({ I }) => {
  I.amOnPage('/');

//   Login Page
  I.click('Login');
  I.fillField('username', 'jenishvarsani9099@gmail.com');
  I.fillField('password', 'Jenish@@9099');
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

//   Touch Master Create
  I.click('Items');
  I.waitForText('Touch & Colors', 2);
  I.click('Touch & Colors');
  I.see('Touch');
  I.waitForText('Add Touch', 5);
  I.click('Add Touch');
  I.waitForText('Create New Touch', 3);
  I.see('Create New Touch');
  const touch_name = `92 KT (${Date.now()})`;
  I.fillField('name', touch_name);
  I.fillField('real_touch', '00');
  I.click('Save');
  I.see('Touch created successfully');

//   Touch Master Update
  I.click('Open menu'); 
  I.waitForText('Edit', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Edit"]]');
  I.waitForText('Update Touch', 5);
  I.fillField('name', touch_name);
  I.click('Save');
  I.see('Touch updated successfully');

  //   Touch Master Create time Unique Validation Check
  I.click('Add Touch');
  I.waitForText('Create New Touch', 3);
  I.see('Create New Touch');
  I.fillField('name', '92 KT Yellow 91.80');
  I.fillField('real_touch', '00');
  I.click('Save');
  I.waitForText('The name has already been taken.', 3)
  I.see('The name has already been taken.');
  I.click('Cancel');
  I.see('You have unsaved changes. Are you sure you want to discard them?');
  I.click('Discard');

   //   Touch Master Update time Unique Validation Check
  I.click('Open menu'); 
  I.waitForText('Edit', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Edit"]]');
  I.waitForText('Update Touch', 5);
  I.fillField('name', '92 KT Yellow 91.80');
  I.click('Save');
  I.waitForText('The name has already been taken.', 3)
  I.see('The name has already been taken.');
  I.click('Cancel');
  I.see('You have unsaved changes. Are you sure you want to discard them?');
  I.click('Discard');
  
//   Touch Delete
  I.click('Open menu');
  I.waitForText('Delete', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Delete"]]');
  I.see('Delete Touch');
  I.click('Delete');
  I.see('Touch deleted successfully');

  // Touche Master Filter
  I.click('Filter');
  I.see('Touch Filter');
  I.fillField('name', '92 KT Yellow 91.80');
  I.click('Apply');
  I.waitForText('92 KT Yellow 91.80', 7);
  I.see('92 KT Yellow 91.80');
  I.click('Filter');
  I.click('Clear');

});