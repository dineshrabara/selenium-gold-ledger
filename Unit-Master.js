Feature('Unit Master');

Before(({ I }) => {
  I.login();
});

Scenario('Unit Master', ({ I }) => {
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

// Required Filed Checked
  I.click('Items');
  I.waitForText('Item Units', 2);
  I.click('Item Units');
  I.see('Item Units');
  I.waitForText('Add Item Unit', 5);
  I.click('Add Item Unit');
  I.waitForText('Create New Item Unit', 3);
  I.see('Create New Item Unit');
  I.click('Save');
  I.see('Name is required');
  I.see('Short name is required');

// First Unit Master Create
  I.fillField('name', 'TestPcs');
  I.click('Save');
  I.see('Short name is required');
  I.fillField('shortname', 'Short Name');
  I.click('Save');
  I.see('Item unit created successfully');

//   Unit Master Update
  I.click('Open menu'); 
  I.waitForText('Edit', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Edit"]]');
  I.waitForText('Update Item Unit', 5);
  I.fillField('name', 'TestPcs');
  I.click('Update');
  I.see('Item unit updated successfully');

  //  Second Unit Master Create time Unique Validation Check
  I.click('Add Item Unit');
  I.waitForText('Create New Item Unit', 3);
  I.see('Create New Item Unit');
  I.waitForText('Short Name', 5);
  I.fillField('name', 'TestPcs');
  I.fillField('shortname', 'Name');
  I.click('Save');
  I.waitForText('The name has already been taken.', 3)
  I.see('The name has already been taken.');
  I.fillField('name', 'TestPcs1');
  I.click('Save');
  I.waitForText('Item unit created successfully', 10);
  I.see('Item unit created successfully');
  I.waitForText('Item Units', 50);

   //   Unit Master Update time Unique Validation Check
  I.click('Open menu'); 
  I.waitForText('Edit', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Edit"]]');
  I.waitForText('Update Item Unit', 10);
  I.waitForText('Short Name', 5);
  I.fillField('name', 'TestPcs');
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
  I.fillField('shortname', 'Short Name');
  I.click('Apply');
  I.waitForText('Short Name', 7);
  I.see('Short Name');
  I.click('Filter');
  I.click('Clear');
  I.click('Filter');
  I.fillField('name', 'TestPcs');
  I.click('Apply');
  I.waitForText('TestPcs', 7);
  I.see('TestPcs');
  I.click('Filter');
  I.click('Clear');
  I.waitForText('TestPcs', 3)
  I.click('Open menu');
  I.waitForText('Delete', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Delete"]]');
  I.see('Delete Item Unit');
  I.click('Delete');
  I.see('Item unit deleted successfully');

  // Pagination Check
  I.click('Add Item Unit');
  I.fillField('name', 'Test0');
  I.fillField('shortname', 'ShortName0');
  I.click('Save');
  I.see('Item unit created successfully');

  I.click('Add Item Unit');
  I.fillField('name', 'Test1');
  I.fillField('shortname', 'ShortName1');
  I.click('Save');
  I.see('Item unit created successfully');
  
  I.click('Add Item Unit');
  I.fillField('name', 'Test2');
  I.fillField('shortname', 'ShortName2');
  I.click('Save');
  I.see('Item unit created successfully');
  
  I.click('Add Item Unit');
  I.fillField('name', 'Test3');
  I.fillField('shortname', 'ShortName3');
  I.click('Save');
  I.see('Item unit created successfully');
  
  I.click('Add Item Unit');
  I.fillField('name', 'Test4');
  I.fillField('shortname', 'ShortName4');
  I.click('Save');
  I.see('Item unit created successfully');
  
  I.click('Add Item Unit');
  I.fillField('name', 'Test5');
  I.fillField('shortname', 'ShortName5');
  I.click('Save');
  I.see('Item unit created successfully');
  
  I.click('Add Item Unit');
  I.fillField('name', 'Test6');
  I.fillField('shortname', 'ShortName6');
  I.click('Save');
  I.see('Item unit created successfully');
  
  I.click('Add Item Unit');
  I.fillField('name', 'Test7');
  I.fillField('shortname', 'ShortName7');
  I.click('Save');
  I.see('Item unit created successfully');
  
  I.click('Add Item Unit');
  I.fillField('name', 'Test8');
  I.fillField('shortname', 'ShortName8');
  I.click('Save');
  I.see('Item unit created successfully');
  
  I.click('Add Item Unit');
  I.fillField('name', 'Test9');
  I.fillField('shortname', 'ShortName9');
  I.click('Save');
  I.see('Item unit created successfully');
  
  I.click('100 rows');
  I.click('10 rows');
  I.click('Next');
  I.click('Previous');

  I.click('Open menu');
  I.waitForText('Delete', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Delete"]]');
  I.click('Delete');
  I.click('Open menu');
  I.waitForText('Delete', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Delete"]]');
  I.click('Delete');
  I.click('Open menu');
  I.waitForText('Delete', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Delete"]]');
  I.click('Delete');
  I.click('Open menu');
  I.waitForText('Delete', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Delete"]]');
  I.click('Delete');
  I.click('Open menu');
  I.waitForText('Delete', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Delete"]]');
  I.click('Delete');
  I.click('Open menu');
  I.waitForText('Delete', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Delete"]]');
  I.click('Delete');
  I.click('Open menu');
  I.waitForText('Delete', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Delete"]]');
  I.click('Delete');
  I.click('Open menu');
  I.waitForText('Delete', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Delete"]]');
  I.click('Delete');
  I.click('Open menu');
  I.waitForText('Delete', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Delete"]]');
  I.click('Delete');
  I.click('Open menu');
  I.waitForText('Delete', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Delete"]]');
  I.click('Delete');
  I.see('Item unit deleted successfully');
});