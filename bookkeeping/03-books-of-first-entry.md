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
VAT: €2.80
Net: €12.20
Signed: John
```

**Entry in Petty Cash Book:**
```
Date | Vouch No | Detail     | Gross | VAT  | Net   | Total
Jan 4| 12       | Stationery | 15.00 | 2.80 | 12.20 | 15.00
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


---

## Worked Examples & Deep Dive

### Complete Worked Example — Full Transaction Set

**Transactions for Jones Ltd, January 2026:**

| Date | Transaction |
|------|-------------|
| Jan 2 | Sold goods to A Ltd on credit — €2,000 net + €460 VAT = €2,460. Inv 101 |
| Jan 3 | Bought goods from B Ltd on credit — €1,500 net + €345 VAT = €1,845. Inv B001 |
| Jan 4 | Cash sales — €800 net + €184 VAT = €984 |
| Jan 5 | Paid rent by cheque — €1,000 (no VAT) |
| Jan 6 | A Ltd returned damaged goods — €200 net + €46 VAT = €246. CN 01 |
| Jan 7 | Bought stationery on credit from C Ltd — €100 net + €23 VAT = €123. Inv C001 |

### Step-by-Step: Recording Each Transaction

**Jan 2 — Credit sale to A Ltd:**
```
Sales Day Book entry:
Date   Inv   Customer   Gross    VAT    Net
Jan 2  101   A Ltd      2,460    460    2,000
```

**Jan 3 — Credit purchase from B Ltd:**
```
Purchases Day Book entry:
Date   Inv    Supplier   Gross    VAT    Net
Jan 3  B001   B Ltd      1,845    345    1,500
```

**Jan 4 — Cash sales:**
```
Cash Book entry (Receipts side):
Date   Detail      Bank
Jan 4  Cash sales  984
```
Also note in Sales Day Book (or a separate Cash Sales Day Book).

**Jan 5 — Rent payment:**
```
Cash Book entry (Payments side):
Date   Detail         Cheque   Bank
Jan 5  Rent — Landlord  001     1,000
```

**Jan 6 — Credit note to A Ltd:**
```
Sales Returns Day Book entry:
Date  CN   Customer   Gross   VAT    Net
Jan 6 01   A Ltd      246     46     200
```

**Jan 7 — Stationery credit purchase:**
```
Purchases Day Book entry:
Date   Inv    Supplier   Gross   VAT    Net
Jan 7  C001   C Ltd      123     23     100
```

### Departmental Analysis Example

**Business:** Two departments — Retail and Wholesale.

| Date | Inv | Customer | Total | VAT | Net | Retail | Wholesale |
|------|-----|----------|-------|-----|-----|--------|-----------|
| Jan 2 | 101 | A Ltd | 2,460 | 460 | 2,000 | 800 | 1,200 |
| Jan 3 | 102 | B Ltd | 1,845 | 345 | 1,500 | 500 | 1,000 |

The department columns must add up to the Net column.

### Edge Cases

**Edge Case 1: Discounts**
If a customer gets a 5% prompt payment discount:
- Invoice net: €1,000
- Discount: €50 (5%)
- Amount actually paid: €1,000 − €50 + €230 VAT = €1,180
- The discount allowed goes into a Discount Allowed account

**Edge Case 2: Mixed VAT rates on one invoice**
If an invoice has standard rate (23%) and reduced rate (13.5%) items:
- Record each line separately with its VAT rate
- Total the VAT columns

### Common Mistakes

| Mistake | Consequence |
|---------|-------------|
| Entering gross in the net column | VAT calculated on wrong amount |
| Forgetting credit notes | Sales overstated, VAT overpaid |
| Mixing cash and credit transactions | Wrong daybook, wrong posting |
| Not dating entries | Can't trace transactions |
| Arithmetic error in totals | Trial balance won't balance |

### Practice Questions

1. A supplier invoice shows €2,460 gross at 23% VAT. What are the net and VAT amounts?
2. A credit note for €615 gross at 23% is issued. Record it in the correct daybook.
3. A cash purchase of €492 (including €92 VAT) is made. Which daybook(s) does this affect?

**Answers:**
1. Net = €2,460 ÷ 1.23 = €2,000, VAT = €460
2. Sales Returns Day Book: Gross €615, VAT €115, Net €500
3. Cash Book (payments side) — it's a cash transaction. Also note the purchase details.
