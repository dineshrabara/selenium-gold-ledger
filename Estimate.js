Feature('Estimate');

Before(({ I }) => {
  I.login();
});

Scenario('Login and Estimate Voucher', ({ I }) => {
  I.amOnPage('/login');

//   Estimate Create
  I.click('Vouchers');
  I.waitForText('Estimate', 2);
  I.click('a[href="/vouchers/estimate"]');
  I.see('Estimate');
  I.waitForText('Add Voucher', 5);
  I.click('Add Voucher');
  I.waitForText('Create New Estimate', 3);
  I.see('Create New Estimate');
  I.waitForText('TestCustomer', 1);
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
  I.see('estimate created successfully');

//   Estimate Update
  I.click('Open menu'); 
  I.waitForText('Edit', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Edit"]]');
  I.waitForText('Update Estimate', 5);
  I.click('Update');
  I.see('estimate updated successfully');
  I.click('Update & Print');
  I.waitForText('Estimate', 5);
  I.see('Estimate');
  I.refreshPage();

//   Estimate Print
  I.click('Open menu'); 
  I.waitForText('Print', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Print"]]');
  I.waitForText('Estimate', 5);
  I.see('Estimate');
  I.refreshPage();

//   Estimate Filter
I.waitForText('Filter', 10);
I.see('Filter');
I.click('Filter');
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
I.see('estimate deleted successfully');
I.click('Filter');
I.click('Clear');

// Item First Delete
I.click('Items');
I.waitForText('Items', 2);
I.click('a[href="/items"]');
I.waitForText('Items', 10);
I.waitForText('Items');
I.waitForText('TestService', 2);
I.see('TestService');
I.see('TestRawMaterial');
I.see('TestItem');
I.click('Open menu');
I.waitForText('Delete', 5);
I.click('//div[@role="menuitem" and .//span[text()="Delete"]]');
I.see('Delete Item');
I.click('Delete');
I.see('Item deleted successfully');

// Item Second Delete
I.click('Open menu');
I.waitForText('Delete', 5);
I.click('//div[@role="menuitem" and .//span[text()="Delete"]]');
I.see('Delete Item');
I.click('Delete');
I.see('Item deleted successfully');

// Item Thread Delete
I.click('Open menu');
I.waitForText('Delete', 5);
I.click('//div[@role="menuitem" and .//span[text()="Delete"]]');
I.see('Delete Item');
I.click('Delete');
I.see('Item deleted successfully');

// Touch First Delete
  I.click('Touch & Colors');
  I.see('Touch');
  I.waitForText('TestTouch92', 7);
  I.see('TestTouch92');
  I.see('TestTouchNone');
  I.click('Open menu');
  I.waitForText('Delete', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Delete"]]');
  I.see('Delete Touch');
  I.click('Delete');
  I.see('Touch deleted successfully');

  // Touch Second Delete
  I.click('Open menu');
  I.waitForText('Delete', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Delete"]]');
  I.see('Delete Touch');
  I.click('Delete');
  I.see('Touch deleted successfully');

  // Ledger Delete
  I.click('Ledgers');
  I.waitForText('Ledgers', 2);
  I.click('a[href="/ledgers"]');
  I.see('Ledgers');
  I.waitForText('TestCustomer', 5);
  I.see('TestCustomer');
  I.click('Open menu');
  I.waitForText('Delete', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Delete"]]');
  I.see('Delete Ledger');
  I.click('Delete');
  I.see('Ledger deleted successfully');

});