Feature('login');

Before(({ I }) => {
  I.login();
});

Scenario('Login and Team Master', ({ I }) => {
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

  //  First Team Master Create
  I.click('Team');
  I.see('Team');
  I.waitForText('Add Team', 5);
  I.click('Add Team');
  I.waitForText('Create New Team', 3);
  I.see('Create New Team');
  I.fillField('name', 'Hello1');
  I.fillField('mobile_number', '1234567890');
  I.fillField('email', 'hello1@gmail.com');
  I.attachFile(locate('input[type="file"]'), 'files/team_user.jpg');
  I.waitForText('File uploaded successfully', 15);
  I.see('File uploaded successfully');
  I.fillField('password', 'Abcd@123');
  I.fillField('password_confirmation', 'Abcd@123');
  I.click('button[name="status"]');
  I.click(locate('span').withText('Active'));
  I.checkOption('//*[@id="18"]');  // Ledger Group Add
  I.checkOption('//*[@id="19"]');  // Ledger Group Update
  I.click('Save');

  //   Team Master Update
  I.click('Open menu');
  I.waitForText('Edit', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Edit"]]');
  I.waitForText('Update Team', 5);
  I.fillField('name', 'Hello');
  I.fillField('email', 'hello@gmail.com');
  I.click('button[name="status"]');
  I.click(locate('span').withText('Inactive'));
  I.click('Update');
  I.see('Team updated successfully');

  //   Team Master Create time Unique Validation Check
  I.click('Add Team');
  I.waitForText('Create New Team', 3);
  I.see('Create New Team');
  I.fillField('name', 'Hello');
  I.fillField('mobile_number', '1234567899');
  I.fillField('email', 'hello@gmail.com');
  I.pressKey('PageUp');
  I.attachFile(locate('input[type="file"]'), 'files/team_user.jpg');
  I.waitForText('File uploaded successfully', 15);
  I.see('File uploaded successfully');
  I.fillField('password', 'Abcd@123');
  I.fillField('password_confirmation', 'Abcd@123');
  I.click('button[name="status"]');
  I.click(locate('span').withText('Active'));
  I.checkOption('//*[@id="18"]');  // Ledger Group Add
  I.checkOption('//*[@id="19"]');  // Ledger Group Update
  I.click('Save');
  I.waitForText('The email has already been taken.', 3)
  I.see('The email has already been taken.');
  I.click('Cancel');
  I.waitForText('Unsaved Changes', 10);
  I.see('Unsaved Changes');
  I.click('Discard');

  // Second Team Master create
  I.click('Team');
  I.see('Team');
  I.waitForText('Add Team', 5);
  I.click('Add Team');
  I.waitForText('Create New Team', 3);
  I.see('Create New Team');
  I.fillField('name', 'Hello1');
  I.fillField('mobile_number', '1234567899');
  I.fillField('email', 'hello1@gmail.com');
  I.attachFile(locate('input[type="file"]'), 'files/team_user.jpg');
  I.waitForText('File uploaded successfully', 15);
  I.see('File uploaded successfully');
  I.fillField('password', 'Abcd@123');
  I.fillField('password_confirmation', 'Abcd@123');
  I.click('button[name="status"]');
  I.click(locate('span').withText('Active'));
  I.checkOption('//*[@id="18"]');  // Ledger Group Add
  I.checkOption('//*[@id="19"]');  // Ledger Group Update
  I.click('Save');

  //   Team Master Update time Unique Validation Check
  I.click('Open menu');
  I.waitForText('Edit', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Edit"]]');
  I.waitForText('Update Team', 5);
  I.fillField('email', 'hello@gmail.com');
  I.click('Update');
  I.waitForText('The email has already been taken.', 3)
  I.see('The email has already been taken.');
  I.click('Cancel');
  I.waitForText('Unsaved Changes', 10);
  I.see('Unsaved Changes');
  I.click('Discard');

  //   Team Delete
  I.click('Open menu');
  I.waitForText('Delete', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Delete"]]');
  I.see('Delete Team');
  I.click('Delete');
  I.see('Team deleted successfully');

  // Teame Master Filter
  I.click('Filter');
  I.see('Team Filters');
  I.fillField('name', 'Hello');
  I.click('Apply');
  I.waitForText('Hello', 7);
  I.see('Hello');
  I.click('Filter');
  I.click('Clear');

  // Validation Check Team Master create
  I.waitForText('Add Team', 5);
  I.click('Add Team');
  I.waitForText('Create New Team', 3);
  I.see('Create New Team');
  I.waitForText('Save', 5);
  I.click('Save');
  I.see('Name is required');
  I.see('Mobile number is required');
  I.see('Email is required');
  I.see('Password must be at least 8 characters');
  I.fillField('name', 'Hello');
  I.fillField('mobile_number', '1234567890');
  I.fillField('email', 'hello@gmail.com');
  I.attachFile(locate('input[type="file"]'), 'files/big_team.jpg');
  I.waitForText('File size should be less than 2MB', 20);
  I.see('File size should be less than 2MB');
  I.attachFile(locate('input[type="file"]'), 'files/team_user.jpg');
  I.waitForText('File uploaded successfully', 15);
  I.see('File uploaded successfully');
  I.fillField('password', 'Abcd@123');
  I.click('Save');
  I.see('Passwords must match');
  I.fillField('password_confirmation', 'Abcd@123');
  I.click('button[name="status"]');
  I.click(locate('span').withText('Active'));
  I.click('Save');
  I.waitForText('The mobile number has already been taken. (and 2 more errors)', 20);
  I.see('The mobile number has already been taken. (and 2 more errors)');
  I.fillField('mobile_number', '1234567899');
  I.fillField('email', 'hello1@gmail.com');
  I.click('Save');
  I.waitForText('The team permissions field is required.', 20);
  I.see('The team permissions field is required.');
  I.checkOption('//*[@id="18"]');  // Ledger Group Add
  I.checkOption('//*[@id="19"]');  // Ledger Group Update
  I.click('Save');
  I.click('Open menu');
  I.waitForText('Delete', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Delete"]]');
  I.see('Delete Team');
  I.click('Delete');
  I.see('Team deleted successfully');
  I.click('Open menu');
  I.waitForText('Delete', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Delete"]]');
  I.see('Delete Team');
  I.click('Delete');
  I.see('Team deleted successfully');

});