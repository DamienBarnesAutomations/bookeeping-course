# Software Guide — Sage 50 / QuickBooks for Bookkeeping

> Note: Exact menu names vary by version. These instructions apply to **Sage 50 Accounts** and **QuickBooks Online/Desktop**.

---

## 1. Setting Up a New Company

### Sage 50
1. File → New Company
2. Enter company name, address, VAT number
3. Select accounting dates (e.g., 01/01/2026 – 31/12/2026)
4. Choose chart of accounts (use default or customise)
5. Set VAT scheme: Standard Rate (23%)

### QuickBooks
1. Create new company file → Add your business
2. Enter business details
3. Select start date
4. Choose accounting method (Accrual)
5. Add VAT settings

---

## 2. Entering Opening Balances

### Sage 50
1. File → Change Financial Year → Opening Balance Entry
2. Enter each account balance:
   - Debtors (Sales Ledger): Individual customer balances
   - Creditors (Purchase Ledger): Individual supplier balances
   - Nominal accounts: Bank, Capital, Equipment, etc.
3. Nominal → Trial Balance → Verify debits = credits

### QuickBooks
1. Click **Setup** → **Opening Balances**
2. For each account, enter the balance as of the start date
3. For Customers/Suppliers: Enter outstanding invoices and bills

---

## 3. Entering Sales Invoices

### Sage 50
1. Customers → Sales Invoices
2. Select customer from list (or create new)
3. Enter: Date, Invoice No., Reference
4. Enter product/service details:
   - Description, Net Amount, VAT Rate (23%)
5. Software auto-calculates VAT and total
6. Save → posted automatically to Sales Ledger and Nominal (Sales + VAT)

### QuickBooks
1. **+ New** → **Invoice**
2. Select Customer
3. Add product/service lines with amounts
4. VAT rate auto-applies if set up
5. Save

---

## 4. Entering Purchase Invoices

### Sage 50
1. Suppliers → Purchase Invoices
2. Select supplier
3. Enter invoice details (date, reference, net, VAT)
4. Post → auto-updates Purchase Ledger and Nominal

### QuickBooks
1. **+ New** → **Bill**
2. Select Supplier
3. Enter line items with VAT
4. Save

---

## 5. Recording Bank Receipts

### Sage 50
1. Customers → Receipts / Bank → Customer Receipts
2. Select customer
3. Enter amount received
4. Allocate to outstanding invoice(s)
5. Save → auto-debits Bank, auto-credits Debtor

### QuickBooks
1. **+ New** → **Receive Payment**
2. Select customer
3. Enter amount
4. Apply to outstanding invoices
5. Save

---

## 6. Recording Bank Payments

### Sage 50
1. Suppliers → Payments / Bank → Supplier Payments
2. Select supplier
3. Enter amount
4. Allocate to outstanding bill(s)
5. Save → auto-debits Creditor, auto-credits Bank

### QuickBooks
1. **+ New** → **Pay Bills**
2. Select bills to pay
3. Confirm payment account and amount
4. Save

---

## 7. Running Trial Balance

### Sage 50
1. Nominal → Trial Balance
2. Select date range
3. Click **Display** or **Print**

### QuickBooks
1. Reports → Accountant & Taxes → Trial Balance
2. Set date range
3. Run report

---

## 8. Bank Reconciliation

### Sage 50
1. Bank → Bank Reconciliation
2. Select bank account
3. Enter statement closing balance
4. Tick off matching items
5. Add reconciling items (bank charges, etc.)
6. Click **Reconcile** — software checks it balances

### QuickBooks
1. **+ New** → **Bank Deposit** (or reconcile from banking menu)
2. Tick off cleared transactions
3. Enter statement ending balance
4. Add adjustments (bank charges, interest)
5. Reconcile

---

## 9. VAT Return

### Sage 50
1. VAT → VAT Return
2. Select period
3. Review output/input VAT totals
4. Click **Print** for hard copy
5. Click **Export** for ROS upload

### QuickBooks
1. Taxes → VAT
2. Select return period
3. Review calculated figures
4. Submit or export

---

## 10. Backing Up

### Sage 50
1. File → Backup
2. Choose destination (USB / Cloud / Network)
3. Name the backup file (include date)
4. Verify backup by checking file size

### QuickBooks
1. File → Backup Company → Create Local Backup
2. Choose save location
3. Add password (optional)
4. Save

---

## Common Troubleshooting

| Issue | Solution |
|-------|----------|
| Trial Balance doesn't match manual | Check each posting, verify opening balances, check VAT treatment |
| VAT figure wrong | Check VAT rates on each transaction, verify VAT codes |
| Debtor/Creditor balance wrong | Check allocations: receipts against invoices, payments against bills |
| Can't reconcile bank | Check for uncleared items, bank charges not entered, date range correct |
