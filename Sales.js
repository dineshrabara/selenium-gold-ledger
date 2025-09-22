Feature('Sales');

Before(({ I }) => {
  I.login();
});

Scenario('Login and Sales Voucher', ({ I }) => {
  I.amOnPage('/login');

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