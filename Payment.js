Feature('login');

Before(({ I }) => {
  I.login();
});

Scenario('Login and Payment', ({ I }) => {
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

// Ledger Create
  I.click('Ledgers')
  I.waitForText('Ledgers', 2);
  I.click('a[href="/ledgers"]');
  I.see('Ledgers');
  I.waitForText('Add Ledger', 5);
  I.click('Add Ledger');
  I.waitForText('Create New Ledger', 3);
  I.see('Create New Ledger');
  I.fillField('name', 'TestSupplier');
  I.click('button[name="group_id"]');
  I.click(locate('span').withText('Supplier'));
  I.click('Save');
  I.see('Ledger created successfully');
  I.click('Open menu'); 
  I.waitForText('Edit', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Edit"]]');
  I.waitForText('Update Ledger', 5);
  I.fillField('name', 'Testsupplier');
  I.click('Update');
  I.see('Ledger updated successfully');

//  First Payment Create with Amount
  I.click('Payments');
  I.see('Payments');
  I.waitForText('Add Payment', 5);
  I.click('Add Payment');
  I.waitForText('Create New Payment', 3);
  I.see('Create New Payment');
  I.waitForText('Testsupplier', 10);
  I.click(locate('span').withText('Testsupplier'));
  I.click('button[name="to_ledger_id"]');
  I.click(locate('span').withText('Bank Account'));
  I.click('button[name="transaction_type"]');
  I.click(locate('span').withText('Amount'));
  I.fillField('amount', '1250');
  I.fillField('narration', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.');
  I.click('Save');
  I.see('Payment created successfully');

//   Payment Update & Print
  I.click('Open menu'); 
  I.waitForText('Edit', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Edit"]]');
  I.waitForText('Update Payment', 5);
  I.see('Lorem Ipsum is simply dummy text of the printing and typesetting industry.');
  I.fillField('amount', '1350');
  I.click('Update');
  I.waitForText('Payment updated successfully', 15);
  I.see('Payment updated successfully');
  I.click('Update & Print');
  I.see('Payment updated successfully');
  I.waitForText('Generated on', 35);
  I.see('Generated on');
  I.refreshPage();
  I.click('Open menu'); 
  I.waitForText('Print', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Print"]]');
  I.waitForText('Generated on', 35);
  I.refreshPage();

  // Payment Filter
  I.waitForText('Filter', 20);
  I.click('Filter');
  I.see('Payment Filters');
  I.click('button[name="from_ledger_id"]');
  I.click(locate('span').withText('Testsupplier'));
  I.click('Apply');
  I.waitForText('Testsupplier', 10);
  I.see('Testsupplier');
    
//   Payment Delete
  I.click('Open menu');
  I.waitForText('Delete', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Delete"]]');
  I.see('Delete Payment');
  I.click('Delete');
  I.see('Payment deleted successfully');
  I.click('Filter');
  I.click('Clear');

  //  Second Payment Create with Metal
  I.waitForText('Add Payment', 5);
  I.click('Add Payment');
  I.waitForText('Create New Payment', 3);
  I.see('Create New Payment');
  I.waitForText('Testsupplier', 10);
  I.click(locate('span').withText('Testsupplier'));
  I.see('Closing Balance: ');
  I.see('Fine Closing Balance: ');
  I.click('button[name="to_ledger_id"]');
  I.click(locate('span').withText('Bank Account'));
  I.see('Closing Balance: ');
  I.see('Fine Closing Balance: ');
  I.click('button[name="transaction_type"]');
  I.click(locate('span').withText('Metal'));
  I.fillField('amount', '-1250');
  I.fillField('narration', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.');
  I.click('Save');
  I.waitForText('The amount field must be at least 1.', 20);
  I.see('The amount field must be at least 1.');
  I.fillField('amount', '1250');
  I.click('Save');
  I.see('Payment created successfully');
  I.click('Open menu');
  I.waitForText('Delete', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Delete"]]');
  I.see('Delete Payment');
  I.click('Delete');
  I.see('Payment deleted successfully');
  I.click('Ledgers')
  I.waitForText('Ledgers', 2);
  I.click('a[href="/ledgers"]');
  I.see('Ledgers');
  I.waitForText('Testsupplier', 7);
  I.see('Testsupplier');
  I.click('Open menu');
  I.waitForText('Delete', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Delete"]]');
  I.see('Delete Ledger');
  I.click('Delete');
  I.see('Ledger deleted successfully');
});