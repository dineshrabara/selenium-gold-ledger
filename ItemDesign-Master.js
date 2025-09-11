Feature('login');

Scenario('Login and Item Design Master', ({ I }) => {
  I.amOnPage('/');

//   Login Page
  I.click('Login');
  I.fillField('username', process.env.USER);
  I.fillField('password', process.env.PASSWORD);
  I.click('Sign In');

//   Dashboard verify
  I.waitForText('Login Completed Successfully', 5);
  I.see('Login Completed Successfully');
  I.waitForText('Welcome back, Jenish Varsani! 👋', 5);
  I.see('Welcome back, Jenish Varsani! 👋');
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

//   Item Design Master Create
  I.click('Items');
  I.waitForText('Item Designs', 2);
  I.click('a[href="/item-designs"]');
  I.see('Item Designs');
  I.waitForText('Add Item Design', 5);
  I.click('Add Item Design');
  I.waitForText('Create New Item Design', 3);
  I.see('Create New Item Design');
  I.click('button[name="items_id"]');
  I.click(locate('span').withText('Gents Ring'));
  I.click('button[name="supplier_id"]');
  I.click(locate('span').withText('RV Ornaments (Supplier)'));
  I.fillField('supplier_design_number', 'SLR18');
  I.fillField('narration', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.');
  I.attachFile(locate('input[type="file"]'), 'files/gents_ring.jpg');
  I.waitForText('File uploaded successfully', 15);
  I.see('File uploaded successfully');
  I.click('button[name="status"]');
  I.click(locate('span').withText('Active'));
  I.click('Save');
  I.see('Item design created successfully');

//   Item Design Master Update
  I.click('Open menu'); 
  I.waitForText('Edit', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Edit"]]');
  I.waitForText('Update Item Design', 5);
  I.see('Update Item Design');
  I.click('Update');
  I.see('Item design updated successfully');

  //   Item Design Master Create time Unique Validation Check
  I.click('Add Item Design');
  I.waitForText('Create New Item Design', 3);
  I.see('Create New Item Design');
  I.click('button[name="items_id"]');
  I.click(locate('span').withText('Gents Ring'));
  I.click('button[name="supplier_id"]');
  I.click(locate('span').withText('RV Ornaments (Supplier)'));
  I.fillField('supplier_design_number', 'SLR18');
  I.fillField('narration', 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.');
  I.attachFile(locate('input[type="file"]'), 'files/gents_ring.jpg');
  I.waitForText('File uploaded successfully', 15);
  I.see('File uploaded successfully');
  I.click('button[name="status"]');
  I.click(locate('span').withText('Active'));
  I.click('Save');
  I.waitForText('The supplier design number has already been taken.', 3)
  I.see('The supplier design number has already been taken.');
  I.refreshPage();
  
//   Item Design Delete
  I.click('Open menu');
  I.waitForText('Delete', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Delete"]]');
  I.see('Delete Item Design');
  I.click('Delete');
  I.see('Item design deleted successfully');

  // Iteme Design Master Filter
  I.click('Filter');
  I.see('Item Design Filters');
  I.fillField('design_no', '0002');
  I.click('Apply');
  I.waitForText('0002', 7);
  I.see('0002');

  // Item Design Delete Dependency
  I.click('Open menu');
  I.waitForText('Delete', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Delete"]]');
  I.see('Delete Item Design');
  I.click('Delete');
  I.waitForText('The parent record can not be update/deleted as its used in Tags modules', 5);
  I.see('The parent record can not be update/deleted as its used in Tags modules');
  I.click('Cancel');
  I.click('Filter');
  I.click('Clear');

});