Feature('Item Master');

Before(({ I }) => {
  I.login();
});

Scenario('Item Master', ({ I }) => {
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

// Item Group Create
  I.click('Items');
  I.waitForText('Item Groups', 2);
  I.click('a[href="/item-groups"]');
  I.see('Item Groups');
  I.click('Add Item Group');
  I.waitForText('Create New Item Group', 3);
  I.see('Create New Item Group');
  I.fillField('name', 'TestItemgroup1');
  I.fillField('shortname', 'Short Name');
  I.fillField('decimal_number', '0');
  I.click('Save');
  I.see('Item group created successfully');
  I.click('Open menu'); 
  I.waitForText('Edit', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Edit"]]');
  I.waitForText('Update Item Group', 5);
  I.fillField('name', 'TestItemgroup1');
  I.fillField('name', 'TestItemgroup1');
  I.click('Update');
  I.see('Item group updated successfully');

  // Index column verify
  I.see('Group');
  I.see('Name');
  I.see('Short Name');
  I.see('Type');
  I.see('Want Stock');
  I.see('Status');
  I.see('Actions');

  // Unit Create
  I.waitForText('Item Units', 2);
  I.click('Item Units');
  I.see('Item Units');
  I.waitForText('Add Item Unit', 5);
  I.click('Add Item Unit');
  I.waitForText('Create New Item Unit', 3);
  I.see('Create New Item Unit');
  I.fillField('name', 'TestUnit1');
  I.fillField('shortname', 'Short Name');
  I.click('Save');
  I.see('Item unit created successfully');
  I.click('Open menu'); 
  I.waitForText('Edit', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Edit"]]');
  I.waitForText('Update Item Unit', 5);
  I.fillField('name', 'TestUnit1');
  I.fillField('name', 'TestUnit1');
  I.click('Update');
  I.see('Item unit updated successfully');
  
  // Required Filed Checked
  I.click('Dashboard');
  I.click('Items');
  I.click('a[href="/items"]');
  I.see('Items');
  I.waitForText('Want Stock', 10);
  I.click('Add Item');
  I.waitForText('Create New Item', 3);
  I.see('Create New Item');
  I.click('Save');
  I.see('Name is required');
  I.see('Short Name is required');
  I.see('Item Group is required');
  I.see('Type is required');
  I.see('Unit is required');

// Item Group Create
  // I.click('.lucide-settings');
  // I.click('Add Item Group');
  // I.see('Create New Item Group');
  // I.click('input[placeholder="Enter group name"]');
  // I.fillField('name', 'TestItemgroup');
  // I.fillField('shortname', 'Test');
  // I.fillField('decimal_number', '2');
  // I.click('Save');
  // I.click('.lucide-settings');
  // I.click('Add Item Unit');
  // I.see('Create New Item Unit');
  // I.fillField('name', 'TestUnit');
  // I.fillField('shortname', 'Test');
  // I.click('Save');

//   Item Master Create
  I.fillField('name', 'ItemTest');
  I.fillField('shortname', 'short name');
  I.click('button[name="item_groups_id"]');
  I.click(locate('span').withText('TestItemgroup'));
  I.click('button[name="item_type"]');
  I.click(locate('span').withText('Goods'));
  I.attachFile(locate('input[type="file"]'), 'files/gents_ring.jpg');
  I.waitForText('File uploaded successfully', 10);
  I.see('File uploaded successfully');
  I.fillField('hsn_code', '0001');
  // I.click('button[name="gst_rate"]');
  // I.click(locate('span').withText('0%'));
  I.click('button[name="unit_id"]');
  I.click(locate('span').withText('TestUnit'));
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
  I.click(locate('span').withText('TestItemgroup'));
  I.click('button[name="item_type"]');
  I.click(locate('span').withText('Goods'));
  I.attachFile(locate('input[type="file"]'), 'files/gents_ring.jpg');
  I.waitForText('File uploaded successfully', 10);
  I.see('File uploaded successfully');
  I.fillField('hsn_code', '0001');
  // I.click('button[name="gst_rate"]');
  // I.click(locate('span').withText('0%'));
  I.click('button[name="unit_id"]');
  I.click(locate('span').withText('TestUnit'));
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
  I.click('button[name="item_groups_id"]');
  I.click(locate('span').withText('TestItemgroup'));
  I.click('Apply');
  I.see('TestItemgroup');
  I.click('Filter');
  I.click('Clear');
  I.click('Filter');
  I.click('button[name="item_type"]');
  I.click(locate('span').withText('Goods'));
  I.click('Apply');
  I.see('Goods');
  I.click('Filter');
  I.click('Clear');
  I.click('Filter');
  I.fillField('hsn_code', '0001');
  I.click('Apply');
  I.see('TestItemgroup');
  I.click('Filter');
  I.click('Clear');
  I.click('Filter');
  I.click('button[name="unit_id"]');
  I.click(locate('span').withText('TestUnit'));
  I.click('Apply');
  I.see('TestUnit');
  I.click('Filter');
  I.click('Clear');
  I.click('Filter');
  I.click('button[name="status"]');
  I.click(locate('span').withText('Active'));
  I.click('Apply');
  I.see('TestItemgroup')
  I.click('Filter');
  I.click('Clear');
  I.click('Filter');
  I.click('button[name="is_stock"]');
  I.click(locate('span').withText('Yes'));
  I.click('Apply');
  I.see('TestItemgroup')
  I.click('Filter');
  I.click('Clear');
  I.click('Filter');
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
  
  // Pagination Check
  I.click('Add Item');
  I.fillField('name', 'ItemName1');
  I.fillField('shortname', 'short name');
  I.click('button[name="item_groups_id"]');
  I.click(locate('span').withText('TestItemgroup'));
  I.click('button[name="item_type"]');
  I.click(locate('span').withText('Goods'));
  I.fillField('hsn_code', '0001');
  // I.click('button[name="gst_rate"]');
  // I.click(locate('span').withText('0%'));
  I.click('button[name="unit_id"]');
  I.click(locate('span').withText('TestUnit'));
  I.click('Save');

  I.click('Add Item');
  I.fillField('name', 'ItemName2');
  I.fillField('shortname', 'short name');
  I.click('button[name="item_groups_id"]');
  I.click(locate('span').withText('TestItemgroup'));
  I.click('button[name="item_type"]');
  I.click(locate('span').withText('Goods'));
  I.fillField('hsn_code', '0001');
  // I.click('button[name="gst_rate"]');
  // I.click(locate('span').withText('0%'));
  I.click('button[name="unit_id"]');
  I.click(locate('span').withText('TestUnit'));
  I.click('Save');
  
  I.click('Add Item');
  I.fillField('name', 'ItemName3');
  I.fillField('shortname', 'short name');
  I.click('button[name="item_groups_id"]');
  I.click(locate('span').withText('TestItemgroup'));
  I.click('button[name="item_type"]');
  I.click(locate('span').withText('Goods'));
  I.fillField('hsn_code', '0001');
  // I.click('button[name="gst_rate"]');
  // I.click(locate('span').withText('0%'));
  I.click('button[name="unit_id"]');
  I.click(locate('span').withText('TestUnit'));
  I.click('Save');
  
  I.click('Add Item');
  I.fillField('name', 'ItemName4');
  I.fillField('shortname', 'short name');
  I.click('button[name="item_groups_id"]');
  I.click(locate('span').withText('TestItemgroup'));
  I.click('button[name="item_type"]');
  I.click(locate('span').withText('Goods'));
  I.fillField('hsn_code', '0001');
  // I.click('button[name="gst_rate"]');
  // I.click(locate('span').withText('0%'));
  I.click('button[name="unit_id"]');
  I.click(locate('span').withText('TestUnit'));
  I.click('Save');
  
  I.click('Add Item');
  I.fillField('name', 'ItemName5');
  I.fillField('shortname', 'short name');
  I.click('button[name="item_groups_id"]');
  I.click(locate('span').withText('TestItemgroup'));
  I.click('button[name="item_type"]');
  I.click(locate('span').withText('Goods'));
  I.fillField('hsn_code', '0001');
  // I.click('button[name="gst_rate"]');
  // I.click(locate('span').withText('0%'));
  I.click('button[name="unit_id"]');
  I.click(locate('span').withText('TestUnit'));
  I.click('Save');
  
  I.click('Add Item');
  I.fillField('name', 'ItemName6');
  I.fillField('shortname', 'short name');
  I.click('button[name="item_groups_id"]');
  I.click(locate('span').withText('TestItemgroup'));
  I.click('button[name="item_type"]');
  I.click(locate('span').withText('Goods'));
  I.fillField('hsn_code', '0001');
  // I.click('button[name="gst_rate"]');
  // I.click(locate('span').withText('0%'));
  I.click('button[name="unit_id"]');
  I.click(locate('span').withText('TestUnit'));
  I.click('Save');
  
  I.click('Add Item');
  I.fillField('name', 'ItemName7');
  I.fillField('shortname', 'short name');
  I.click('button[name="item_groups_id"]');
  I.click(locate('span').withText('TestItemgroup'));
  I.click('button[name="item_type"]');
  I.click(locate('span').withText('Goods'));
  I.fillField('hsn_code', '0001');
  // I.click('button[name="gst_rate"]');
  // I.click(locate('span').withText('0%'));
  I.click('button[name="unit_id"]');
  I.click(locate('span').withText('TestUnit'));
  I.click('Save');
  
  I.click('Add Item');
  I.fillField('name', 'ItemName8');
  I.fillField('shortname', 'short name');
  I.click('button[name="item_groups_id"]');
  I.click(locate('span').withText('TestItemgroup'));
  I.click('button[name="item_type"]');
  I.click(locate('span').withText('Goods'));
  I.fillField('hsn_code', '0001');
  // I.click('button[name="gst_rate"]');
  // I.click(locate('span').withText('0%'));
  I.click('button[name="unit_id"]');
  I.click(locate('span').withText('TestUnit'));
  I.click('Save');
  
  I.click('Add Item');
  I.fillField('name', 'ItemName9');
  I.fillField('shortname', 'short name');
  I.click('button[name="item_groups_id"]');
  I.click(locate('span').withText('TestItemgroup'));
  I.click('button[name="item_type"]');
  I.click(locate('span').withText('Goods'));
  I.fillField('hsn_code', '0001');
  // I.click('button[name="gst_rate"]');
  // I.click(locate('span').withText('0%'));
  I.click('button[name="unit_id"]');
  I.click(locate('span').withText('TestUnit'));
  I.click('Save');
  I.waitForText('Item created successfully', 3)
  I.see('Item created successfully');
  
  I.click('Add Item');
  I.fillField('name', 'ItemName10');
  I.fillField('shortname', 'short name');
  I.click('button[name="item_groups_id"]');
  I.click(locate('span').withText('TestItemgroup'));
  I.click('button[name="item_type"]');
  I.click(locate('span').withText('Goods'));
  I.fillField('hsn_code', '0001');
  // I.click('button[name="gst_rate"]');
  // I.click(locate('span').withText('0%'));
  I.click('button[name="unit_id"]');
  I.click(locate('span').withText('TestUnit'));
  I.click('Save');
  I.waitForText('Item created successfully', 3)
  I.see('Item created successfully');
  
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
  I.see('Item deleted successfully');  

  // item Group and Unit Delete
  I.waitForText('Item Groups', 2);
  I.click('Item Groups');
  I.waitForText('TestItemgroup', 3)
  I.click('Open menu');
  I.waitForText('Delete', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Delete"]]');
  I.see('Delete Item Group');
  I.click('Delete');
  I.see('Item group deleted successfully');
  I.waitForText('Item Units', 2);
  I.click('Item Units');
  I.waitForText('TestUnit', 3)
  I.click('Open menu');
  I.waitForText('Delete', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Delete"]]');
  I.see('Delete Item Unit');
  I.click('Delete');
  I.see('Item unit deleted successfully');

});