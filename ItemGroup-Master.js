Feature('login');

Before(({ I }) => {
  I.login();
});

Scenario('Login and Item Group Master', ({ I }) => {
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

//   Item Groups Master Create
  I.click('Items');
  I.waitForText('Item Groups', 2);
  I.click('Item Groups');
  I.see('Item Groups');
  I.waitForText('Add Item Group', 5);
  I.click('Add Item Group');
  I.waitForText('Create New Item Group', 3);
  I.see('Create New Item Group');
  // const itemgroup_name = `Item Group (${Date.now()})`;
  // I.fillField('name', itemgroup_name);
  I.fillField('name', 'TestItem');
  I.fillField('shortname', 'Short Name');
  I.fillField('decimal_number', '0');
  I.click('Save');
  I.see('Item group created successfully');

//   Item Groups Master Update
  I.click('Open menu'); 
  I.waitForText('Edit', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Edit"]]');
  I.waitForText('Update Item Group', 5);
  I.fillField('name', 'TestItem');
  I.click('Update');
  I.see('Item group updated successfully');

  //   Item Group Master Create time Unique Validation Check
  I.click('Add Item Group');
  I.waitForText('Create New Item Group', 3);
  I.see('Create New Item Group');
  I.waitForText('Decimal Number', 5);
  I.fillField('name', 'TestItem');
  I.fillField('shortname', 'Short Name');
  I.fillField('decimal_number', '0');
  I.click('Save');
  I.waitForText('The name has already been taken.', 3)
  I.see('The name has already been taken.');
  I.fillField('name', 'TestItem1');
  I.click('Save');
  I.waitForText('Item group created successfully',10);
  I.see('Item group created successfully');
  I.waitForText('Item Groups', 50);

   //   Item Group Master Update time Unique Validation Check
  I.click('Open menu'); 
  I.waitForText('Edit', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Edit"]]');
  I.waitForText('Update Item Group', 5);
  I.see('Update Item Group');
  I.waitForText('Decimal Number', 5);
  I.fillField('name', 'TestItem1');
  I.click('Update');
  I.waitForText('The name has already been taken.', 3)
  I.see('The name has already been taken.');
  I.refreshPage();
  
//   Item Group Delete
  I.click('Open menu');
  I.waitForText('Delete', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Delete"]]');
  I.see('Delete Item Group');
  I.click('Delete');
  I.see('Item group deleted successfully');

  // Item Group Master Filter
  I.click('Filter');
  I.see('Item Group Filters');
  I.fillField('name', 'TestItem');
  I.click('Apply');
  I.waitForText('TestItem', 7);
  I.see('TestItem');
  I.click('Filter');
  I.click('Clear');
  I.waitForText('TestItem', 3)
  I.click('Open menu');
  I.waitForText('Delete', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Delete"]]');
  I.see('Delete Item Group');
  I.click('Delete');
  I.see('Item group deleted successfully');

});