Feature('Feedback');

Before(({ I }) => {
  I.login();
});

Scenario('Feedback', ({ I }) => {
  I.amOnPage('/login');

  //   Feedback Create
  I.see('Welcome back,');
  I.waitForText('Dashboard', 20);
  I.click('button svg.lucide-user');
  I.click('Feedback');
  I.click('Add Feedback');
  I.see('Create New Feedback');
  I.fillField('title', 'TestFeedback');
  I.click('button[name="category"]');
  I.click(locate('span').withText('Question'));
  I.fillField('description', 'Touch master create page shortcut not work | Duplicate tag create thay che 1');
  I.click('button[name="priority"]');
  I.click(locate('span').withText('Low'));
  I.attachFile(locate('input[type="file"]'), 'files/touchmaster.jpg');
  I.waitForText('File uploaded successfully', 15);
  I.see('File uploaded successfully');
  I.click('Save');
  I.see('Feedback created successfully');

  // Index column verify
  I.see('Created By');
  I.see('Title');
  I.see('Description');
  I.see('Category');
  I.see('Priority');
  I.see('Attachment');
  I.see('Actions');

  //   Feedback Update
  I.click('Open menu');
  I.waitForText('Edit', 2);
  I.click('//div[@role="menuitem" and .//span[text()="Edit"]]');
  I.fillField('title', 'TestFeedback');
  I.click('Update');
  I.see('Feedback updated successfully');

  //  Duplicate Feedback Create
  I.see('Feedback');
  I.click('Add Feedback');
  I.see('Create New Feedback');
  I.fillField('title', 'TestFeedback');
  I.click('button[name="category"]');
  I.click(locate('span').withText('Question'));
  I.fillField('description', 'Touch master create page shortcut not work | Duplicate tag create thay che 2');
  I.click('button[name="priority"]');
  I.click(locate('span').withText('Low'));
  I.attachFile(locate('input[type="file"]'), 'files/touchmaster.jpg');
  I.waitForText('File uploaded successfully', 15);
  I.see('File uploaded successfully');
  I.click('Save');
  I.see('Feedback created successfully')

  // Pagination check
  I.click('Add Feedback');
  I.see('Create New Feedback');
  I.fillField('title', 'TestFeedback');
  I.click('button[name="category"]');
  I.click(locate('span').withText('Feature Request'));
  I.fillField('description', 'Touch master create page shortcut not work | Duplicate tag create thay che 3');
  I.click('button[name="priority"]');
  I.click(locate('span').withText('Medium'));
  I.click('Save');
  I.see('Feedback created successfully');

  I.click('Add Feedback');
  I.see('Create New Feedback');
  I.fillField('title', 'TestFeedback');
  I.click('button[name="category"]');
  I.click(locate('span').withText('Bug'));
  I.fillField('description', 'Touch master create page shortcut not work | Duplicate tag create thay che 4');
  I.click('button[name="priority"]');
  I.click(locate('span').withText('High'));
  I.click('Save');
  I.see('Feedback created successfully');

  I.click('Add Feedback');
  I.see('Create New Feedback');
  I.fillField('title', 'TestFeedback');
  I.click('button[name="category"]');
  I.click(locate('span').withText('Other'));
  I.fillField('description', 'Touch master create page shortcut not work | Duplicate tag create thay che 5');
  I.click('button[name="priority"]');
  I.click(locate('span').withText('Low'));
  I.click('Save');
  I.see('Feedback created successfully');

  I.click('Add Feedback');
  I.see('Create New Feedback');
  I.fillField('title', 'TestFeedback');
  I.click('button[name="category"]');
  I.click(locate('span').withText('Question'));
  I.fillField('description', 'Touch master create page shortcut not work | Duplicate tag create thay che 6');
  I.click('button[name="priority"]');
  I.click(locate('span').withText('Low'));
  I.click('Save');
  I.see('Feedback created successfully')

  I.click('Add Feedback');
  I.see('Create New Feedback');
  I.fillField('title', 'TestFeedback');
  I.click('button[name="category"]');
  I.click(locate('span').withText('Feature Request'));
  I.fillField('description', 'Touch master create page shortcut not work | Duplicate tag create thay che 7');
  I.click('button[name="priority"]');
  I.click(locate('span').withText('Medium'));
  I.click('Save');
  I.see('Feedback created successfully');

  I.click('Add Feedback');
  I.see('Create New Feedback');
  I.fillField('title', 'TestFeedback');
  I.click('button[name="category"]');
  I.click(locate('span').withText('Bug'));
  I.fillField('description', 'Touch master create page shortcut not work | Duplicate tag create thay che 8');
  I.click('button[name="priority"]');
  I.click(locate('span').withText('High'));
  I.click('Save');
  I.see('Feedback created successfully');

  I.click('Add Feedback');
  I.see('Create New Feedback');
  I.fillField('title', 'TestFeedback');
  I.click('button[name="category"]');
  I.click(locate('span').withText('Other'));
  I.fillField('description', 'Touch master create page shortcut not work | Duplicate tag create thay che 9');
  I.click('button[name="priority"]');
  I.click(locate('span').withText('Low'));
  I.click('Save');
  I.see('Feedback created successfully');

  I.click('Add Feedback');
  I.see('Create New Feedback');
  I.fillField('title', 'TestFeedback');
  I.click('button[name="category"]');
  I.click(locate('span').withText('Bug'));
  I.fillField('description', 'Touch master create page shortcut not work | Duplicate tag create thay che 10');
  I.click('button[name="priority"]');
  I.click(locate('span').withText('High'));
  I.click('Save');
  I.see('Feedback created successfully');

  I.click('Add Feedback');
  I.see('Create New Feedback');
  I.fillField('title', 'TestFeedback');
  I.click('button[name="category"]');
  I.click(locate('span').withText('Other'));
  I.fillField('description', 'Touch master create page shortcut not work | Duplicate tag create thay che 11');
  I.click('button[name="priority"]');
  I.click(locate('span').withText('Low'));
  I.attachFile(locate('input[type="file"]'), 'files/touchmaster.jpg');
  I.waitForText('File uploaded successfully', 15);
  I.see('File uploaded successfully');
  I.click('Save');
  I.see('Feedback created successfully');

  I.click('100 rows');
  I.click('10 rows');
  I.click('Next');
  I.click('Previous');

  //   Feedback Filter
  I.waitForText('Filter', 5);
  I.see('Filter');
  I.click('Filter');
  I.click('button[name="category"]');
  I.click(locate('span').withText('Other'));
  I.click('Apply');
  I.see('Other');
  I.click('Filter');
  I.click('Clear');
  I.click('Filter');
  I.click('button[name="priority"]');
  I.click(locate('span').withText('Low'));
  I.click('Apply');
  I.see('Low');
  I.click('Filter');
  I.click('Clear');
  I.click('Filter');
  I.fillField('title', 'TestFeedback');
  I.click('Apply');
  I.waitForText('TestFeedback', 2);
  I.see('TestFeedback');

  // Feedback Delete
  I.click('Open menu');
  I.waitForText('Delete', 5);
  I.click('//div[@role="menuitem" and .//span[text()="Delete"]]');
  I.waitForText('Delete Feedback', 5);
  I.see('Delete Feedback');
  I.click('Delete');
  I.see('Feedback deleted successfully');

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
  I.see('Feedback deleted successfully');
  I.click('Filter');
  I.click('Clear');

});