Feature('Reports');

Before(({ I }) => {
  I.login();
});

Scenario('Reports', ({ I }) => {
  I.amOnPage('/login');

// Ledger Report
  I.click('Reports')
  I.waitForText('Ledger Report', 2);
  I.click('Ledger Report');
  I.waitForText('Report Filters', 5);
  I.see('Report Filters');
  I.click('Apply');
  I.waitForText('Ledger Name', 10);
  I.see('Date Range');
  I.see('Group');
  I.see('Ledger');
  I.see('Group By');
  I.see('With Zero');
  I.see('Ledger Name');
  I.see('Fine');
  I.see('Amount');
  I.see('Last Locked');
  I.see('Total');

// Balance Sheet
  I.waitForText('Balance Sheet', 2);
  I.click('Balance Sheet');
  I.waitForText('Balance Sheet Filters', 5);
  I.see('Balance Sheet Filters');
  I.click('Apply');
  I.see('Date Range');
  I.see('Vertical');
  I.see('Horizontal');
  I.waitForText('Liabilities', 10);
  I.see('Liabilities');
  I.see('Assets');
  I.see('PARTICULARS');
  I.see('AMOUNT');
  I.see('FINE');
  I.see('Total');
  I.click('Horizontal');
  I.see('Balance Sheet');
  I.see('As at');
  I.see('Liabilities');
  I.see('Total Liabilities');
  I.see('Assets');
  I.see('Total Assets');

  // Cash Flow
  I.waitForText('Cash Flow', 2);
  I.click('Cash Flow');
  I.waitForText('Cash Flow Filters', 5);
  I.see('Cash Flow Filters');
  I.click('Apply');
  I.see('Date Range');
  I.waitForText('Operating Activities', 10);
  I.see('Operating Activities');
  I.see('Total Operating Activities');
  I.see('Investing Activities');
  I.see('Total Investing Activities');
  I.see('Financing Activities');
  I.see('Total Financing Activities');
  
  // Day Book
  I.waitForText('Day Book', 2);
  I.click('Day Book');
  I.waitForText('Day Book Filters', 5);
  I.see('Day Book Filters');
  I.click('Apply');
  I.see('Date Range');
  I.see('Ledger');
  I.waitForText('Date', 10);
  I.see('Date');
  I.see('Source By Ledger');
  I.see('Narration');
  I.see('Fine');
  I.see('Amount');
  I.see('Debit');
  I.see('Credit');
  I.see('Total Vouchers:');
  
  // Profit & Loss
  I.waitForText('Profit & Loss', 2);
  I.click('Profit & Loss');
  I.waitForText('Profit & Loss Filters', 5);
  I.see('Profit & Loss Filters');
  I.click('Apply');
  I.see('Date Range');
  I.see('Vertical');
  I.see('Horizontal');
  I.waitForText('Expense', 10);
  I.see('Expense');
  I.see('Income');
  I.see('PARTICULARS');
  I.see('AMOUNT');
  I.see('FINE');
  I.see('Total');
  I.click('Horizontal');

  // Trial Balance
  I.waitForText('Trial Balance', 2);
  I.click('Trial Balance');
  I.waitForText('Trial Balance Filters', 5);
  I.see('Trial Balance Filters');
  I.click('Apply');
  I.see('Date Range');
  I.waitForText('Group Name', 10);
  I.see('Group Name');
  I.see('Amount');
  I.see('Fine');
  I.see('Debit');
  I.see('Credit');
  I.see('Grand Total');
  
  // Stock
  I.waitForText('Stock', 2);
  I.click('Stock');
  I.waitForText('Stock Report Filters', 5);
  I.see('Stock Report Filters');
  I.click('Apply');
  I.see('Date Range');
  I.see('Touch');
  I.see('Item Group');
  I.see('Item');
  I.see('Stock Alert');
  I.see('Client/Supplier');
  I.see('Group By');
  I.see('Include Zero Stock');
  I.waitForText('Group Name', 10);
  I.see('Group Name');
  I.see('Item Name');
  I.see('Min Qty');
  I.see('Opening');
  I.see('In');
  I.see('Out');
  I.see('Closing');
  I.see('Required Qty');
  I.see('Stock Alert');
  I.see('Gross');
  I.see('Less');
  I.see('Net');
  I.see('Pcs');

  // Voucher
  I.waitForText('Voucher', 2);
  I.click('Voucher');
  I.waitForText('Voucher Report Filter', 5);
  I.see('Voucher Report Filter');
  I.click('Apply');
  I.see('Date Range');
  I.see('Item Group');
  I.see('Item');
  I.see('Voucher Type');
  I.see('Client/Supplier');
  I.see('Group By');
  I.waitForText('Group By', 10);
  I.see('Group By');
  I.see('Total Quantity');
  I.see('Total Amount');
  I.see('Voucher Count');
  
  // Tag Report
  I.waitForText('Tag Report', 2);
  I.click('Tag Report');
  I.waitForText('Tag Report Filter', 5);
  I.see('Tag Report Filter');
  I.click('Apply');
  I.see('Item');
  I.see('Design No');
  I.see('Tag No');
  I.see('Status');
  I.see('Gross Weight');
  I.see('Less Weight');
  I.see('Net Weight');
  I.see('Touch');
  I.see('Group By');
  I.waitForText('Item', 10);
  I.see('Item');
  I.see('Total Tags');
  I.see('Gross Weight');
  I.see('Less Weight');
  I.see('Net Weight');
  I.see('Rs');
  
  // Tag Verify
  I.waitForText('Tag Verify', 2);
  I.click('Tag Verify');
  I.waitForText('Tag Verify', 5);
  I.see('Tag Verify');
  I.see('Filters');
  I.see('Group By');
  I.see('Verify');
  I.see('Item');
  I.see('Touch');
  I.see('Clear Verified Tags');
  I.see('Scan Tag');
  I.see('Total Tags');
  I.see('Tags');
  I.see('Gross');
  I.see('Less');
  I.see('Net');
  I.see('Pending Tags');
  I.see('Scanned Tags');
  
  // Daily Register
  I.waitForText('Daily Register', 2);
  I.click('Daily Register');
  I.waitForText('Daily Register Report Filter', 5);
  I.see('Daily Register Report Filter');
  I.click('Apply');
  I.see('Date');
  I.see('Groups');
  I.waitForText('Time', 10);
  I.see('Time');
  I.see('Narration');
  I.see('Source');
  I.see('Debit');
  I.see('Credit');
  I.see('Balance');
  
  // Ageing
  I.waitForText('Ageing', 2);
  I.click('Ageing');
  I.waitForText('Ageing Report Filters', 5);
  I.see('Ageing Report Filters');
  I.click('Apply');
  I.see('As On Date');
  I.see('Group');
  I.waitForText('Ledger Name', 10);
  I.see('Ledger Name');
  I.see('0-30 Days');
  I.see('0-30 Days Fine');
  I.see('31-60 Days');
  I.see('31-60 Days Fine');
  I.see('61-90 Days');
  I.see('61-90 Fine');
  I.see('90+ Days');
  I.see('90+ Days Fine');
  I.see('Total');
  I.see('Total Fine');
  
  // TDS Report
  I.waitForText('TDS Report', 2);
  I.click('TDS Report');
  I.waitForText('Report Filters', 5);
  I.see('Report Filters');
  I.click('Apply');
  I.click('button[name="ledger_id"]');
  I.click(locate('span').withText('TDS Payable'));
  I.click('Apply');
  I.see('Date Range');
  I.see('Ledger');
  I.see('Client/supplier');
  I.see('Group By');
});