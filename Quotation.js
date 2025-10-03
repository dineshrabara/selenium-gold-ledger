Feature('Quotation');

Before(({ I }) => {
  I.login();
});

Scenario('Quotation Voucher', ({ I }) => {
  I.amOnPage('/login');

//   Quotation Create
  I.waitForText('Quotations', 2);
  I.see('Quotations');
  I.click('Quotations');
  I.see('Quotation');
  I.waitForText('Add Quotation', 5);
  I.click('Add Quotation');
  I.waitForText('Create New Quotation', 3);
  I.see('Create New Quotation');
  I.click('button[name="ledger_id"]');
  I.click(locate('span').withText('TestCustomer'));
  I.see('Closing Balance: ');
  I.see('Fine Closing Balance: ');
  I.fillField('narration', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.');
  I.click('button[name="quotation_items.0.item_id"]');
  I.click(locate('span').withText('TestItem'));
  I.fillField('quotation_items.0.qty', '10');
  I.fillField('quotation_items.0.rate', '15');
  I.see('150');
  I.fillField('quotation_items.0.narration', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.');
  I.click('//*[@id="form-modal"]/div[1]/div/div[5]/div[1]/button');
  I.see('Item 2')
  I.click('button[name="quotation_items.0.item_id"]');
  I.click(locate('span').withText('TestService'));
  I.fillField('quotation_items.0.qty', '10');
  I.fillField('quotation_items.0.rate', '15');
  I.fillField('quotation_items.0.narration', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.');
  I.click('//*[@id="form-modal"]/div[1]/div/div[5]/div[1]/button');
  I.see('Item 3')
  I.click('button[name="quotation_items.0.item_id"]');
  I.click(locate('span').withText('TestRawMaterial'));
  I.fillField('quotation_items.0.qty', '10');
  I.fillField('quotation_items.0.rate', '15');
  I.fillField('quotation_items.0.narration', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.');
  I.see('₹450.00');
  I.click('Save');
  I.see('quotation created successfully');

//   Quotation Update
  I.click('Open menu'); 
  I.waitForText('Edit', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Edit"]]');
  I.waitForText('Update Quotation', 5);
  I.click('Update');
  I.see('quotation updated successfully');

//   Quotation Update Print
  I.click('Open menu'); 
  I.waitForText('Edit', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Edit"]]');
  I.waitForText('Update Quotation', 5);
  I.click('Update & Print');
  I.see('quotation updated successfully');
  I.refreshPage();

//   Quotation Print
  I.click('Open menu'); 
  I.waitForText('Print', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Print"]]');
  I.waitForText('Quotation', 1);
  I.see('Quotation');
  I.refreshPage();

//   Quotation Filter
I.waitForText('Filter', 10);
I.see('Filter');
I.click('Filter');
I.click('button[name="ledger_id"]');
I.click(locate('span').withText('TestCustomer'));
I.click('Apply');
I.waitForText('TestCustomer', 2);
I.see('TestCustomer');
I.click('Open menu'); 
I.waitForText('Delete', 5);
I.click('//div[@role="menuitem" and .//span[text()="Delete"]]');
I.waitForText('Delete Quotation', 5);
I.see('Delete Quotation');
I.click('Delete');
I.see('Quotation deleted successfully');
I.click('Filter');
I.click('Clear');

});