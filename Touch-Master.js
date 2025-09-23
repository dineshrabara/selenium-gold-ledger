Feature('login');

Before(({ I }) => {
  I.login();
});

Scenario('Login and Touch Master', ({ I }) => {
  I.amOnPage('/login');

//   Dashboard verify
  I.waitForText('Welcome back,', 5);
  I.see('Welcome back,');
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

//  First Touch Master Create
  I.click('Items');
  I.waitForText('Touch & Colors', 2);
  I.click('Touch & Colors');
  I.see('Touch');
  I.waitForText('Add Touch', 5);
  I.click('Add Touch');
  I.waitForText('Create New Touch', 3);
  I.see('Create New Touch');
  // const touch_name = `92 KT (${Date.now()})`;
  // I.fillField('name', touch_name);
  I.fillField('name', 'TestTouch');
  I.fillField('real_touch', '00');
  I.click('Save');
  I.see('Touch created successfully');

//  Touch Master Update
  I.click('Open menu'); 
  I.waitForText('Edit', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Edit"]]');
  I.waitForText('Update Touch', 10);
  I.waitForText('Real Touch', 10);
  I.fillField('name', 'TestTouch');
  I.click('Update');
  I.see('Touch updated successfully');

  //  Second Touch Master Create time Unique Validation Check
  I.click('Add Touch');
  I.waitForText('Create New Touch', 3);
  I.see('Create New Touch');
  I.fillField('name', 'TestTouch');
  I.fillField('real_touch', '00');
  I.click('Save');
  I.waitForText('The name has already been taken.', 3)
  I.see('The name has already been taken.');
  I.click('Cancel');
  I.see('You have unsaved changes. Are you sure you want to discard them?');
  I.click('Stay');
  I.fillField('name', 'TestTouch1');
  I.click('Save');
  I.waitForText('Touch created successfully', 10);
  I.see('Touch created successfully');

   //   Touch Master Update time Unique Validation Check
  I.click('Open menu'); 
  I.waitForText('Edit', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Edit"]]');
  I.waitForText('Update Touch', 5);
  I.fillField('name', 'TestTouch');
  I.click('Update');
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
  I.see('Touch Filters');
  I.fillField('name', 'TestTouch');
  I.click('Apply');
  I.waitForText('TestTouch', 7);
  I.see('TestTouch');
  I.click('Filter');
  I.click('Clear');
  I.waitForText('TestTouch', 3)
  I.click('Open menu');
  I.waitForText('Delete', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Delete"]]');
  I.see('Delete Touch');
  I.click('Delete');
  I.see('Touch deleted successfully');

});