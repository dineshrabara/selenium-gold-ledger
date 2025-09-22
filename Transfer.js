Feature('login');

Before(({ I }) => {
  I.login();
});

Scenario('Login and Transfer', ({ I }) => {
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

//  First Transfer Create with Amount
  I.click('Transfers');
  I.see('Transfers');
  I.waitForText('Add Transfer', 5);
  I.click('Add Transfer');
  I.waitForText('Create New Transfer', 3);
  I.see('Create New Transfer');
  I.click('button[name="transaction_type"]');
  I.click(locate('span').withText('Metal'));
  I.click('button[name="type"]');
  I.click(locate('span').withText('Debit'));
  I.click('button[name="from_ledger_id"]');
  I.click(locate('span').withText('Testsupplier'));
  I.fillField('narration', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.');
  I.click('button[name="transfer_ledgers.0.to_ledger_id"]');
  I.click(locate('span').withText('Bank Account'));
  I.fillField('amount', '1250');
  I.fillField('narration', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.');
  I.click('Save');
  I.see('Transfer created successfully');

//   Transfer Update
  I.click('Open menu'); 
  I.waitForText('Edit', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Edit"]]');
  I.waitForText('Update Transfer', 5);
  I.see('Lorem Ipsum is simply dummy text of the printing and typesetting industry.');
  I.fillField('amount', '1350');
  I.click('Update');
  I.waitForText('Transfer updated successfully', 15);
  I.see('Transfer updated successfully');
  I.click('Cancel');

  // Transfer Filter
  I.waitForText('Filter', 20);
  I.click('Filter');
  I.see('Transfer Filters');
  I.click('button[name="from_ledger_id"]');
  I.click(locate('span').withText('Testsupplier'));
  I.click('Apply');
  I.waitForText('Testsupplier', 10);
  I.see('Testsupplier');
    
//   Transfer Delete
  I.click('Open menu');
  I.waitForText('Delete', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Delete"]]');
  I.see('Delete Transfer');
  I.click('Delete');
  I.see('Transfer deleted successfully');
  I.click('Filter');
  I.click('Clear');

  //  Second Transfer Create with Metal
  I.waitForText('Add Transfer', 5);
  I.click('Add Transfer');
  I.waitForText('Create New Transfer', 3);
  I.see('Create New Transfer');
  I.click('button[name="transaction_type"]');
  I.click(locate('span').withText('Amount'));
  I.click('button[name="Amount"]');
  I.click(locate('span').withText('Credit'));
  I.click('button[name="from_ledger_id"]');
  I.click(locate('span').withText('Testsupplier'));
  I.fillField('narration', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.');
  I.click('button[name="transfer_ledgers.0.to_ledger_id"]');
  I.click(locate('span').withText('Bank Account'));
  I.fillField('amount', '-1250');
  I.fillField('narration', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.');
  I.click('Save');
  I.waitForText('The amount field must be at least 1.', 20);
  I.see('The amount field must be at least 1.');
  I.fillField('amount', '1250');
  I.click('Save');
  I.see('Transfer created successfully');
  I.click('Open menu');
  I.waitForText('Delete', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Delete"]]');
  I.see('Delete Transfer');
  I.click('Delete');
  I.see('Transfer deleted successfully');
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