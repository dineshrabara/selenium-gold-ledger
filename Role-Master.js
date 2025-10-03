Feature('Role');

Before(({ I }) => {
  I.login();
});

Scenario('Role Master', ({ I }) => {
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

//   Role Master Create
  I.click('Roles');
  I.see('Roles');
  I.waitForText('Add Role', 5);
  I.click('Add Role');
  I.waitForText('Create New Role', 3);
  I.see('Create New Role');
  const Role_name = `Role (${Date.now()})`;
  I.fillField('name', Role_name);
  I.click('Save');
  I.waitForText('The role permissions field is required.', 5);
  I.see('The role permissions field is required.');
  I.checkOption('//*[@id="6"]');  // Role Add
  I.checkOption('//*[@id="7"]');  // Role Update
  I.checkOption('//*[@id="8"]');  // Role Delete
  I.checkOption('//*[@id="9"]');  // Role List
  I.checkOption('//*[@id="10"]');  // Role Index
  I.click('ledger_group');
  I.click('Save');
  I.waitForText('Role created successfully', 5);
  I.see('Role created successfully');

//   Role Master Update
  I.click('Open menu'); 
  I.waitForText('Edit', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Edit"]]');
  I.waitForText('Update Role', 5);
  I.fillField('name', 'TestRole');
  I.checkOption('//*[@id="6"]');  // Role Add
  I.checkOption('//*[@id="7"]');  // Role Update
  I.checkOption('//*[@id="8"]');  // Role Delete
  I.checkOption('//*[@id="9"]');  // Role List
  I.checkOption('//*[@id="10"]');  // Role Index
  I.click('Update');
  I.waitForText('Role updated successfully', 5);
  I.see('Role updated successfully');

  //   Roles Master Create time Unique Validation Check
  I.click('Add Role');
  I.waitForText('Create New Role', 3);
  I.see('Create New Role');
  I.fillField('name', 'TestRole');
  I.checkOption('//*[@id="6"]');  // Role Add
  I.checkOption('//*[@id="7"]');  // Role Update
  I.checkOption('//*[@id="8"]');  // Role Delete
  I.checkOption('//*[@id="9"]');  // Role List
  I.checkOption('//*[@id="10"]');  // Role Index
  I.click('Save');
  I.waitForText('The name has already been taken.', 3);
  I.see('The name has already been taken.');
  I.fillField('name', 'TestRole1');
  I.click('Save');
  I.waitForText('Role created successfully', 10);
  I.see('Role created successfully');

   //   Role Master Update time Unique Validation Check
  I.click('Open menu'); 
  I.waitForText('Edit', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Edit"]]');
  I.waitForText('Update Role', 10);
  I.see('Update Role');
  I.fillField('name', 'TestRole');
  I.click('Update');
  I.waitForText('The name has already been taken.', 3)
  I.see('The name has already been taken.');
  I.refreshPage();
  
//   Role Delete
  I.click('Open menu');
  I.waitForText('Delete', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Delete"]]');
  I.see('Delete Role');
  I.click('Delete');
  I.see('Role deleted successfully');

  // Role Master Filter
  I.click('Filter');
  I.see('Role Filters');
  I.fillField('name', 'TestRole');
  I.click('Apply');
  I.waitForText('TestRole', 7);
  I.see('TestRole');
  I.click('Open menu');
  I.waitForText('Delete', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Delete"]]');
  I.see('Delete Role');
  I.click('Delete');
  I.see('Role deleted successfully');
  I.click('Filter');
  I.click('Clear');
});