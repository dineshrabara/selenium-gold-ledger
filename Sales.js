Feature('Sales');

Before(({ I }) => {
  I.login();
});

Scenario('Sales Voucher', ({ I }) => {
  I.amOnPage('/login');

// Ledger Create
  I.click('Ledgers')
  I.waitForText('Ledgers', 2);
  I.click('a[href="/ledgers"]');
  I.see('Ledgers');
  I.waitForText('Add Ledger', 5);
  I.click('Add Ledger');
  I.waitForText('Create New Ledger', 3);
  I.see('Create New Ledger');
  I.fillField('name', 'TestCustomer');
  I.click('button[name="group_id"]');
  I.click(locate('span').withText('Customer'));
  I.click('Save');
  I.see('Ledger created successfully');
  I.click('Open menu'); 
  I.waitForText('Edit', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Edit"]]');
  I.waitForText('Update Ledger', 5);
  I.fillField('name', 'TestCustomer');
  I.click('Update');
  I.see('Ledger updated successfully');
  
//   Item Goods Create
  I.click('Items');
  I.waitForText('Items', 2);
  I.click('a[href="/items"]');
  I.see('Items');
  I.waitForText('Add Item', 5);
  I.click('Add Item');
  I.waitForText('Create New Item', 3);
  I.see('Create New Item');
  I.fillField('name', 'TestItem');
  I.fillField('shortname', 'short name');
  I.click('button[name="item_groups_id"]');
  I.click(locate('span').withText('Primary'));
  I.click('button[name="item_type"]');
  I.click(locate('span').withText('Goods'));
  I.fillField('hsn_code', '0001');
  I.click('button[name="gst_rate"]');
  I.click(locate('span').withText('0%'));
  I.click('button[name="unit_id"]');
  I.click(locate('span').withText('Pcs'));
  I.click('Save');
  I.see('Item created successfully');
  I.click('Open menu'); 
  I.waitForText('Edit', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Edit"]]');
  I.waitForText('Update Item', 5);
  I.fillField('name', 'TestItem');
  I.click('Update');
  I.see('Item updated successfully');
  
//   Item Service Create
  I.waitForText('Add Item', 5);
  I.click('Add Item');
  I.waitForText('Create New Item', 3);
  I.see('Create New Item');
  I.fillField('name', 'TestService');
  I.fillField('shortname', 'short name');
  I.click('button[name="item_groups_id"]');
  I.click(locate('span').withText('Primary'));
  I.click('button[name="item_type"]');
  I.click(locate('span').withText('Service'));
  I.fillField('hsn_code', '0001');
  I.click('button[name="gst_rate"]');
  I.click(locate('span').withText('0%'));
  I.click('button[name="unit_id"]');
  I.click(locate('span').withText('Pcs'));
  I.click('Save');
  I.see('Item created successfully');
  I.click('Open menu'); 
  I.waitForText('Edit', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Edit"]]');
  I.waitForText('Update Item', 5);
  I.fillField('name', 'TestService');
  I.click('Update');
  I.see('Item updated successfully');
  
//   Item Raw Material Create
  I.waitForText('Add Item', 5);
  I.click('Add Item');
  I.waitForText('Create New Item', 3);
  I.see('Create New Item');
  I.fillField('name', 'TestRawMaterial');
  I.fillField('shortname', 'short name');
  I.click('button[name="item_groups_id"]');
  I.click(locate('span').withText('Primary'));
  I.click('button[name="item_type"]');
  I.click(locate('span').withText('Raw Material'));
  I.fillField('hsn_code', '0001');
  I.click('button[name="gst_rate"]');
  I.click(locate('span').withText('0%'));
  I.click('button[name="unit_id"]');
  I.click(locate('span').withText('Pcs'));
  I.click('Save');
  I.see('Item created successfully');
  I.click('Open menu'); 
  I.waitForText('Edit', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Edit"]]');
  I.waitForText('Update Item', 5);
  I.fillField('name', 'TestRawMaterial');
  I.click('Update');
  I.see('Item updated successfully');
  
//   Touch 92 Create
  I.waitForText('Touch & Colors', 2);
  I.click('Touch & Colors');
  I.see('Touch');
  I.waitForText('Add Touch', 5);
  I.click('Add Touch');
  I.waitForText('Create New Touch', 3);
  I.see('Create New Touch');
  I.fillField('name', 'TestTouch92');
  I.fillField('real_touch', '91.80');
  I.click('Save');
  I.see('Touch created successfully');
  I.click('Open menu'); 
  I.waitForText('Edit', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Edit"]]');
  I.waitForText('Update Touch', 5);
  I.fillField('name', 'TestTouch92');
  I.click('Update');
  I.see('Touch updated successfully');
  
//   Touch None Create
  I.waitForText('Add Touch', 5);
  I.click('Add Touch');
  I.waitForText('Create New Touch', 3);
  I.see('Create New Touch');
  I.fillField('name', 'TestTouchNone');
  I.fillField('real_touch', '00');
  I.click('Save');
  I.see('Touch created successfully');
  I.click('Open menu'); 
  I.waitForText('Edit', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Edit"]]');
  I.waitForText('Update Touch', 5);
  I.fillField('name', 'TestTouchNone');
  I.click('Update');
  I.see('Touch updated successfully');
  
//   Sales Create
  I.click('Vouchers');
  I.waitForText('Sales', 20);
  I.click('Sales');
  I.see('Sales');
  I.waitForText('Add Voucher', 5);
  I.click('Add Voucher');
  I.waitForText('Create New Sale', 3);
  I.see('Create New Sale');
  I.waitForText('TestCustomer', 5);
  I.click(locate('span').withText('TestCustomer'));
  I.see('Closing Balance: ');
  I.see('Fine Closing Balance: ');
  I.click('button[name="to_ledger_id"]');
  I.click(locate('span').withText('Sales Account'));
  I.see('Closing Balance: ');
  I.see('Fine Closing Balance: ');
  I.fillField('narration', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.');
  I.click('button[name="vouchers_items.0.item_id"]');
  I.click(locate('span').withText('TestItem'));
  I.click('button[name="vouchers_items.0.touch_id"]');
  I.click(locate('span').withText('TestTouch92'));
  I.fillField('vouchers_items.0.qty', '10');
  I.fillField('vouchers_items.0.gross_weight', '15');
  I.click('//*[@id="form-modal"]/div[1]/div/div[5]/div[2]/div[2]/div[3]/div[2]/div[2]/div/button');
  I.waitForText('Manage Less Weight Items', 5);
  I.see('Manage Less Weight Items');
  I.click('Cancel');
  I.click('//*[@id="form-modal"]/div[1]/div/div[5]/div[1]/button');
  I.see('Item 2')
  I.click('button[name="vouchers_items.0.item_id"]');
  I.click(locate('span').withText('TestService'));
  I.fillField('vouchers_items.0.qty', '10');
  I.fillField('vouchers_items.0.rate', '15');
  I.fillField('vouchers_items.0.narration', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.');
  I.click('Save');
  I.see('sale created successfully');

//   Sales Update
  I.click('Open menu'); 
  I.waitForText('Edit', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Edit"]]');
  I.waitForText('Update Sale', 5);
  I.click('Update');
  I.see('sale updated successfully');
  I.click('Update & Print');
  I.waitForText('Sale', 5);
  I.see('Sale');
  I.refreshPage();

//   Sales Print
  I.click('Open menu'); 
  I.waitForText('Print', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Print"]]');
  I.waitForText('Sale', 5);
  I.see('Sale');
  I.refreshPage();

//   Sales Filter
I.waitForText('Filter', 10);
I.see('Filter');
I.click('Filter');
I.waitForText('From Ledger', 5);
I.click('button[name="from_ledger_id"]');
I.click(locate('span').withText('TestCustomer'));
I.click('Apply');
I.waitForText('TestCustomer', 2);
I.see('TestCustomer');
I.click('Open menu'); 
I.waitForText('Delete', 5);
I.click('//div[@role="menuitem" and .//span[text()="Delete"]]');
I.waitForText('Delete Voucher', 5);
I.see('Delete Voucher');
I.click('Delete');
I.see('sale deleted successfully');
I.click('Filter');
I.click('Clear');

});