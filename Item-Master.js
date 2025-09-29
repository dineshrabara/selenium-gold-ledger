Feature('login');

Before(({ I }) => {
  I.login();
});

Scenario('Login and Item Master', ({ I }) => {
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

//   Item Master Create
  I.click('Items');
  I.waitForText('Items', 2);
  I.click('a[href="/items"]');
  I.see('Items');
  I.waitForText('Add Item', 5);
  I.click('Add Item');
  I.waitForText('Create New Item', 3);
  I.see('Create New Item');
  // const Item_name = `Ring (${Date.now()})`;
  // I.fillField('name', Item_name);
  I.fillField('name', 'ItemTest');
  I.fillField('shortname', 'short name');
  I.click('button[name="item_groups_id"]');
  I.click(locate('span').withText('Primary'));
  I.click('button[name="item_type"]');
  I.click(locate('span').withText('Goods'));
  I.attachFile(locate('input[type="file"]'), 'files/gents_ring.jpg');
  I.waitForText('File uploaded successfully', 10);
  I.see('File uploaded successfully');
  I.fillField('hsn_code', '0001');
  I.click('button[name="gst_rate"]');
  I.click(locate('span').withText('0%'));
  I.click('button[name="unit_id"]');
  I.click(locate('span').withText('Pcs'));
  I.click('Save');
  I.see('Item created successfully');

//   Item Master Update
  I.click('Open menu'); 
  I.waitForText('Edit', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Edit"]]');
  I.waitForText('Update Item', 5);
  I.fillField('name', 'ItemTest');
  I.click('Update');
  I.see('Item updated successfully');

  //   Item Master Create time Unique Validation Check
  I.click('Add Item');
  I.waitForText('Create New Item', 3);
  I.see('Create New Item');
  I.fillField('name', 'ItemTest');
  I.fillField('shortname', 'short name');
  I.click('button[name="item_groups_id"]');
  I.click(locate('span').withText('Primary'));
  I.click('button[name="item_type"]');
  I.click(locate('span').withText('Goods'));
  I.attachFile(locate('input[type="file"]'), 'files/gents_ring.jpg');
  I.waitForText('File uploaded successfully', 10);
  I.see('File uploaded successfully');
  I.fillField('hsn_code', '0001');
  I.click('button[name="gst_rate"]');
  I.click(locate('span').withText('0%'));
  I.click('button[name="unit_id"]');
  I.click(locate('span').withText('Pcs'));
  I.click('Save');
  I.waitForText('The name has already been taken.', 3)
  I.see('The name has already been taken.');
  I.fillField('name', 'ItemTest1');
  I.click('Save');
  I.waitForText('Item created successfully', 3)
  I.see('Item created successfully');

   //   Item Master Update time Unique Validation Check
  I.click('Open menu'); 
  I.waitForText('Edit', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Edit"]]');
  I.waitForText('Update Item', 5);
  I.fillField('name', 'ItemTest');
  I.click('Update');
  I.waitForText('The name has already been taken.', 3)
  I.see('The name has already been taken.');
  I.refreshPage();
  
//   Item Delete
  I.click('Open menu');
  I.waitForText('Delete', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Delete"]]');
  I.see('Delete Item');
  I.click('Delete');
  I.see('Item deleted successfully');

  // Iteme Master Filter
  I.click('Filter');
  I.see('Item Filters');
  I.fillField('name', 'ItemTest');
  I.click('Apply');
  I.waitForText('ItemTest', 7);
  I.see('ItemTest');

  // Item Delete
  I.click('Open menu');
  I.waitForText('Delete', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Delete"]]');
  I.see('Delete Item');
  I.click('Delete');
  I.see('Item deleted successfully');
  I.click('Filter');
  I.click('Clear');
  
  // Item Delete dependency
  I.click('Filter');
  I.see('Item Filters');
  I.fillField('name', 'Gents Ring');
  I.click('Apply');
  I.waitForText('Gents Ring', 7);
  I.see('Gents Ring');
  I.click('Open menu');
  I.waitForText('Delete', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Delete"]]');
  I.see('Delete Item');
  I.click('Delete');
  I.see('The parent record can not be update/deleted as its used in Voucher modules (and 2 more errors)');
  I.click('Cancel');
  I.click('Filter');
  I.click('Clear');

});