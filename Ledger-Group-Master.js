Feature('login');

Before(({ I }) => {
  I.login();
});

Scenario('Login and Ledger Group Master', ({ I }) => {
  I.amOnPage('/login');

//   Dashboard verify
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

//   Ledger Group Master Create
  I.click('Ledgers');
  I.waitForText('Ledger Groups', 2);
  I.click('Ledger Groups');
  I.see('Ledger Groups');
  I.waitForText('Add Ledger Group', 5);
  I.click('Add Ledger Group');
  I.waitForText('Create New Ledger Group', 3);
  I.see('Create New Ledger Group');
  const Ledger_Group_name = `Ledger Group (${Date.now()})`;
  I.fillField('name', Ledger_Group_name);
  I.click('button[name="under_group"]');
  I.click(locate('span').withText('Sales Account'));
  I.click('Save');
  I.waitForText('Ledger group created successfully', 5);
  I.see('Ledger group created successfully');

//   Ledger Group Master Update
  I.click('Open menu'); 
  I.waitForText('Edit', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Edit"]]');
  I.waitForText('Update Ledger Group', 5);
  I.fillField('name', Ledger_Group_name);
  I.click('Update');
  I.waitForText('Ledger group updated successfully', 5);
  I.see('Ledger group updated successfully');

  //   Ledger Groups Master Create time Unique Validation Check
  I.click('Add Ledger Group');
  I.waitForText('Create New Ledger Group', 3);
  I.see('Create New Ledger Group');
  I.waitForText('Under Group', 5);
  I.fillField('name', 'Sales Account');
  I.click('button[name="under_group"]');
  I.click(locate('span').withText('Sales Account'));
  I.click('Save');
  I.waitForText('The name has already been taken.', 3);
  I.see('The name has already been taken.');
  I.refreshPage();

   //   Ledger Group Master Update time Unique Validation Check
  I.click('Open menu'); 
  I.waitForText('Edit', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Edit"]]');
  I.waitForText('Update Ledger', 10);
  I.see('Update Ledger');
  I.waitForText('Under Group', 5);
  I.fillField('name', 'Sales Account');
  I.click('Update');
  I.waitForText('The name has already been taken.', 3)
  I.see('The name has already been taken.');
  I.refreshPage();
  
//   Ledger Group Delete
  I.click('Open menu');
  I.waitForText('Delete', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Delete"]]');
  I.see('Delete Ledger Group');
  I.click('Delete');
  I.see('Ledger group deleted successfully');

  // Ledger Group Master Filter
  I.click('Filter');
  I.see('Ledger Group Filters');
  I.fillField('name', 'Supplier');
  I.click('Apply');
  I.waitForText('Supplier', 7);
  I.see('Supplier');

  // Ledger Group Delete Dependency
  I.click('Open menu');
  I.waitForText('Delete', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Delete"]]');
  I.see('Delete Ledger Group');
  I.click('Delete');
  I.waitForText('The parent record can not be update/deleted as its used in Ledgers modules', 5);
  I.see('The parent record can not be update/deleted as its used in Ledgers modules');
  I.click('Cancel');
  I.click('Filter');
  I.click('Clear');

});