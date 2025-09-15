Feature('login');

Before(({ I }) => {
  I.login();
});

Scenario('Login and Unit Master', ({ I }) => {
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

//   Unit Master Create
  I.click('Items');
  I.waitForText('Item Units', 2);
  I.click('Item Units');
  I.see('Item Units');
  I.waitForText('Add Item Unit', 5);
  I.click('Add Item Unit');
  I.waitForText('Create New Item Unit', 3);
  I.see('Create New Item Unit');
  const Unit_name = `Unit (${Date.now()})`;
  I.fillField('name', Unit_name);
  I.fillField('shortname', 'Short Name');
  I.click('Save');
  I.see('Item unit created successfully');

//   Unit Master Update
  I.click('Open menu'); 
  I.waitForText('Edit', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Edit"]]');
  I.waitForText('Update Item Unit', 5);
  I.fillField('name', Unit_name);
  I.click('Update');
  I.see('Item unit updated successfully');

  //   Unit Master Create time Unique Validation Check
  I.click('Add Item Unit');
  I.waitForText('Create New Item Unit', 3);
  I.see('Create New Item Unit');
  I.waitForText('Short Name', 5);
  I.fillField('name', 'Pcs');
  I.fillField('shortname', 'Short Name');
  I.click('Save');
  I.waitForText('The name has already been taken.', 3)
  I.see('The name has already been taken.');
  I.refreshPage();
  I.waitForText('Item Units', 50);

   //   Unit Master Update time Unique Validation Check
  I.click('Open menu'); 
  I.waitForText('Edit', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Edit"]]');
  I.waitForText('Update Item Unit', 10);
  I.waitForText('Short Name', 5);
  I.fillField('name', 'Pcs');
  I.click('Update');
  I.waitForText('The name has already been taken.', 3)
  I.see('The name has already been taken.');
  I.refreshPage();
  
//   Unit Delete
  I.click('Open menu');
  I.waitForText('Delete', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Delete"]]');
  I.see('Delete Item Unit');
  I.click('Delete');
  I.see('Item unit deleted successfully');

  // Unit Master Filter
  I.click('Filter');
  I.see('Item Unit Filters');
  I.fillField('name', 'Pcs');
  I.click('Apply');
  I.waitForText('Pcs', 7);
  I.see('Pcs');
  I.click('Filter');
  I.click('Clear');

});