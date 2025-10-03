Feature('Ledger Master');

Before(({ I }) => {
  I.login();
});

Scenario('Ledger Master', ({ I }) => {
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

//   Ledger Master Create
  I.click('Ledgers');
  I.waitForText('Ledgers', 2);
  I.click('a[href="/ledgers"]');
  I.see('Ledgers');
  I.waitForText('Add Ledger', 5);
  I.click('Add Ledger');
  I.waitForText('Create New Ledger', 3);
  I.see('Create New Ledger');
  const Ledger_name = `Ledger (${Date.now()})`;
  I.fillField('name', Ledger_name);
  I.click('button[name="group_id"]');
  I.click(locate('span').withText('Customer'));
  I.click('Save');
  I.see('Ledger created successfully');

//   Ledger Master Update
  I.click('Open menu'); 
  I.waitForText('Edit', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Edit"]]');
  I.waitForText('Update Ledger', 5);
  I.fillField('name', Ledger_name);
  I.click('Update');
  I.see('Ledger updated successfully');

  //   Ledger Master Create time Unique Validation Check
  I.click('Add Ledger');
  I.waitForText('Create New ledger', 3);
  I.see('Create New Ledger');
  I.fillField('name', 'Sales Account');
  I.click('button[name="group_id"]');
  I.click(locate('span').withText('Sales Account'));
  I.click('Save');
  I.waitForText('The name has already been taken.', 3)
  I.see('The name has already been taken.');
  I.refreshPage();

   //   Ledger Master Update time Unique Validation Check
  I.click('Open menu'); 
  I.waitForText('Edit', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Edit"]]');
  I.waitForText('Update Ledger', 10);
  I.fillField('name', 'Sales Account');
  I.click('Update');
  I.waitForText('The name has already been taken.', 3)
  I.see('The name has already been taken.');
  I.refreshPage();
  
//   Ledger Delete
  I.click('Open menu');
  I.waitForText('Delete', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Delete"]]');
  I.see('Delete Ledger');
  I.click('Delete');
  I.see('Ledger deleted successfully');

  // Ledger Master Filter
  I.click('Filter');
  I.see('Ledger Filters');
  I.fillField('name', 'RV Ornaments (Supplier)');
  I.click('Apply');
  I.waitForText('RV Ornaments (Supplier)', 7);
  I.see('RV Ornaments (Supplier)');

  // Ledger Delete Dependency
  I.click('Open menu');
  I.waitForText('Delete', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Delete"]]');
  I.see('Delete Ledger');
  I.click('Delete');
  I.waitForText('The parent record can not be update/deleted as its used in', 5);
  I.see('The parent record can not be update/deleted as its used in');
  I.click('Cancel');
  I.click('Filter');
  I.click('Clear');

//   Ledger create with GST, Address etc.. details
  I.waitForText('Add Ledger', 5);
  I.click('Add Ledger');
  I.waitForText('Create New Ledger', 3);
  I.see('Create New Ledger');
  I.fillField('name', Ledger_name);
  I.click('button[name="group_id"]');
  I.click(locate('span').withText('Customer'));
  I.click('button[name="is_export"]');
  I.click(locate('span').withText('Yes'));
  I.click('button[name="gst_registration_type"]');
  I.click(locate('span').withText('Regular'));
  I.fillField('gst_number', '09AQZPJ1908K1Z6');
  I.fillField('pan_number', 'AQZPJ1908K');
  I.click('button[name="deduct_tds"]');
  I.click(locate('span').withText('No'));
  I.click('button[name="deduct_tcs"]');
  I.click(locate('span').withText('No'));
  I.fillField('mobile_no', '12345678901');
  I.scrollPageToBottom();
  I.fillField('address_office', 'Vivanta Icon, A-512, LP Savani Rd, Adajan Gam, Adajan, Surat, Gujarat 395009');
  I.fillField('Type or select state', 'Gujarat');
  I.fillField('Type or select city', 'Surat');
  I.fillField('pincode', '395009');
  I.fillField('ref_by', 'Test');
  I.fillField('ref_by_mobile_no', '1234567890');
  I.click('button[name="status"]');
  I.click(locate('span').withText('Active'));
  I.click('Save');
  I.waitForText('The mobile no field must be 10 digits.', 10);
  I.see('The mobile no field must be 10 digits.');
  I.fillField('mobile_no', '1234567890');
  I.click('Save');
  I.waitForText('Ledger created successfully', 5);
  I.see('Ledger created successfully');

//   Ledger Delete
  I.click('Open menu');
  I.waitForText('Delete', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Delete"]]');
  I.see('Delete Ledger');
  I.click('Delete');
  I.see('Ledger deleted successfully');
});