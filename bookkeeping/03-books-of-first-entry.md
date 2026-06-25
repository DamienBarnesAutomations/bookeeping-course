# Learning Outcome 3 — Books of First Entry

**Objective:** Complete the books of first entry with appropriate VAT and departmental analysis from source documents.

---

## The Books of First Entry (Daybooks)

### 1. Sales Day Book (Sales Book)
Records all credit sales invoices issued.

| Date | Invoice No. | Customer | Gross Amount | VAT | Net Amount |
|------|-------------|----------|-------------|-----|-----------|
| 01/01 | 001 | ABC Ltd | €1,230 | €230 | €1,000 |
| 02/01 | 002 | XYZ Ltd | €615 | €115 | €500 |

### 2. Sales Returns Day Book
Records credit notes issued to customers for returned goods.

### 3. Purchases Day Book (Purchase Book)
Records all credit purchase invoices received.

### 4. Purchases Returns Day Book
Records credit notes received from suppliers.

### 5. Cash Book
Records all cash and bank receipts and payments.

### 6. Petty Cash Book
Records small cash expenses using the imprest system.

### 7. General Journal
Records non-regular transactions (corrections, depreciation, accruals).

---

## Source Documents → Daybook Entries

### From an Invoice
```
INVOICE No. 123
ABC Ltd
Goods: €1,000
VAT (23%): €230
Total: €1,230
```

**Entry in Sales Day Book:**
```
Date | Inv No | Customer | Gross  | VAT  | Net
Jan 1| 123    | ABC Ltd  | 1,230  | 230  | 1,000
```

### From a Credit Note
```
CREDIT NOTE No. 45
ABC Ltd
Returns: €200
VAT (23%): €46
Total: €246
```

**Entry in Sales Returns Day Book:**
```
Date | CN No | Customer | Gross | VAT | Net
Jan 5| 45    | ABC Ltd  | 246   | 46  | 200
```

### From Bank Statement
```
Date | Detail        | Lodgements | Payments | Balance
Jan 1| Balance b/d   |             |          | 5,000
Jan 3| Customer A    | 1,230       |          | 6,230
Jan 5| Supplier B    |             | 500      | 5,730
```

**Entry in Cash Book:**
```
Date | Detail     | Receipts | Payments | Balance
Jan 3| Customer A | 1,230    |          | 6,230
Jan 5| Supplier B |          | 500      | 5,730
```

### Petty Cash Voucher
```
Petty Cash Voucher No. 12
Date: Jan 4
Description: Stationery
Amount: €15.00
VAT: €3.45
Net: €11.55
Signed: John
```

**Entry in Petty Cash Book:**
```
Date | Vouch No | Detail     | Gross | VAT  | Net   | Total
Jan 4| 12       | Stationery | 15.00 | 3.45 | 11.55 | 15.00
```

---

## VAT Analysis

| VAT Rate | Type |
|----------|------|
| 23% | Standard rate (most goods/services) |
| 13.5% | Reduced rate (building, tourism, food) |
| 0% | Zero-rated (exports, basic food) |
| Exempt | Financial services, education |

### VAT Calculation
```
Net × 23% = VAT
Net + VAT = Gross (Invoice Total)
VAT ÷ 23 × 100 = Net
Gross ÷ 1.23 = Net
```

## Departmental Analysis

If a business has multiple departments (e.g., Retail, Wholesale, Online), each daybook column splits amounts by department:

| Date | Inv No | Customer | Total | VAT | Net | Retail | Wholesale |
|------|--------|----------|-------|-----|-----|--------|-----------|
| Jan 1 | 001 | ABC Ltd | 1,230 | 230 | 1,000 | 600 | 400 |
