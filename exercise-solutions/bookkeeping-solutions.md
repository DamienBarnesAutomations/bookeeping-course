# Bookkeeping Exercises — Solutions

---

## Exercise 1: Terminology Match

| Term | Definition |
|------|-----------|
| 1. Debtor | B. Person who owes the business money |
| 2. Creditor | C. Person the business owes money to |
| 3. VAT | A. Tax on goods/services |
| 4. Trial Balance | E. List of all ledger balances |
| 5. Daybook | D. Book of first entry |
| 6. Ledger | F. Set of accounts where transactions are posted |

---

## Exercise 2: Books of First Entry

### Sales Day Book

| Date | Inv No | Customer | Gross (€) | VAT @ 23% (€) | Net (€) |
|------|--------|----------|-----------|---------------|---------|
| Jan 1 | 101 | ABC Ltd | 2,460.00 | 460.00 | 2,000.00 |
| Jan 2 | 102 | XYZ Ltd | 1,845.00 | 345.00 | 1,500.00 |
| **Totals** | | | **4,305.00** | **805.00** | **3,500.00** |

### Sales Returns Day Book

| Date | CN No | Customer | Gross (€) | VAT @ 23% (€) | Net (€) |
|------|-------|----------|-----------|---------------|---------|
| Jan 5 | 01 | ABC Ltd | 246.00 | 46.00 | 200.00 |
| **Totals** | | | **246.00** | **46.00** | **200.00** |

### Purchases Day Book

| Date | Inv No | Supplier | Gross (€) | VAT @ 23% (€) | Net (€) |
|------|--------|----------|-----------|---------------|---------|
| Jan 3 | S001 | Supplier A | 984.00 | 184.00 | 800.00 |
| Jan 4 | S002 | Supplier B | 1,476.00 | 276.00 | 1,200.00 |
| **Totals** | | | **2,460.00** | **460.00** | **2,000.00** |

---

## Exercise 3: Post to Ledgers

### Sales Account (Nominal Ledger)

| Date | Detail | Folio | Debit (€) | Credit (€) | Balance (€) |
|------|--------|-------|-----------|------------|-------------|
| Jan 31 | Sales Day Book | SDB1 | | 3,500.00 | 3,500.00 Cr |
| Jan 31 | Sales Returns | SRDB1 | 200.00 | | 3,300.00 Cr |

### Purchases Account (Nominal Ledger)

| Date | Detail | Folio | Debit (€) | Credit (€) | Balance (€) |
|------|--------|-------|-----------|------------|-------------|
| Jan 31 | Purchases Day Book | PDB1 | 2,000.00 | | 2,000.00 Dr |

### ABC Ltd (Sales Ledger)

| Date | Detail | Folio | Debit (€) | Credit (€) | Balance (€) |
|------|--------|-------|-----------|------------|-------------|
| Jan 1 | Sales | SDB1 | 2,460.00 | | 2,460.00 Dr |
| Jan 5 | Returns | SRDB1 | | 246.00 | 2,214.00 Dr |

### Supplier A (Purchases Ledger)

| Date | Detail | Folio | Debit (€) | Credit (€) | Balance (€) |
|------|--------|-------|-----------|------------|-------------|
| Jan 3 | Purchases | PDB1 | | 984.00 | 984.00 Cr |

### VAT Control Account (Nominal Ledger)

| Date | Detail | Folio | Debit (€) | Credit (€) | Balance (€) |
|------|--------|-------|-----------|------------|-------------|
| Jan 31 | Output VAT (Sales) | SDB1 | | 805.00 | 805.00 Cr |
| Jan 31 | VAT on Returns | SRDB1 | 46.00 | | 759.00 Cr |
| Jan 31 | Input VAT (Purchases) | PDB1 | 460.00 | | 299.00 Cr |

---

## Exercise 4: Extract a Trial Balance

| Account | Debit (€) | Credit (€) |
|---------|-----------|------------|
| Bank | 12,000 | |
| Capital | | 25,000 |
| Sales | | 35,000 |
| Purchases | 18,000 | |
| Wages | 8,000 | |
| Rent | 3,000 | |
| VAT | | 2,300 |
| Debtors | 15,000 | |
| Creditors | | 8,000 |
| Equipment | 14,000 | |
| **Totals** | **70,000** | **70,300** |

**Result:** The trial balance does not balance — debit total €70,000, credit total €70,300. The **credit side is higher by €300**.

Since the underlying source of the error cannot be identified from the information given, the difference is placed in a **Suspense Account** on the debit side (to bring both columns to €70,300 while the error is investigated):

```
Dr Suspense   €300
```

**Corrected Trial Balance:**
| Account | Debit (€) | Credit (€) |
|---------|-----------|------------|
| Bank | 12,000 | |
| Capital | | 25,000 |
| Sales | | 35,000 |
| Purchases | 18,000 | |
| Wages | 8,000 | |
| Rent | 3,000 | |
| VAT | | 2,300 |
| Debtors | 15,000 | |
| Creditors | | 8,000 |
| Equipment | 14,000 | |
| Suspense | 300 | |
| **Totals** | **70,300** | **70,300** |

Once the error is found (e.g., a missing debit posting or a transposition), a correcting journal removes the suspense balance.

---

## Exercise 5: Bank Reconciliation

### Updated Cash Book

| Date | Detail | Receipts (€) | Payments (€) | Balance (€) |
|------|--------|-------------|-------------|-------------|
| | Balance b/d | | | 6,500.00 |
| Jan 31 | Bank charges | | 50.00 | 6,450.00 |
| Jan 31 | Direct debit — Insurance | | 150.00 | 6,300.00 |
| Jan 31 | Standing Order — Loan | | 200.00 | 6,100.00 |
| | **Balance c/d** | | | **6,100.00** |

### Bank Reconciliation Statement

```
Balance per Cash Book (updated)                  €6,100 Dr

Add: Unpresented Cheques
  Cheque 101                                     €900.00
                                                 €7,000.00

Less: Unlodged Lodgements                       (€1,200.00)

Balance per Bank Statement                       €5,800.00 Cr ✓
```

---

## Exercise 6: VAT Return

### Output VAT

| Category | Net (€) | Rate | VAT (€) |
|----------|---------|------|---------|
| Standard Rate Sales | 25,000 | 23% | 5,750.00 |
| Zero-Rated Sales | 5,000 | 0% | 0.00 |
| **Total Output VAT (T3)** | | | **5,750.00** |

### Input VAT

| Category | Net (€) | Rate | VAT (€) |
|----------|---------|------|---------|
| Standard Rate Purchases | 12,000 | 23% | 2,760.00 |
| Reduced Rate Purchases | 3,000 | 13.5% | 405.00 |
| Zero-Rated Purchases | 2,000 | 0% | 0.00 |
| **Total Input VAT (T4)** | | | **3,165.00** |

### VAT Return

| Box | Description | Amount (€) |
|-----|-------------|-----------|
| T1 | Total Sales excl. VAT (25,000 + 5,000) | 30,000.00 |
| T2 | Total Purchases excl. VAT (12,000 + 3,000 + 2,000) | 17,000.00 |
| T3 | Output VAT | 5,750.00 |
| T4 | Input VAT | 3,165.00 |
| **T5** | **VAT Payable** (5,750 − 3,165) | **2,585.00** |

---

## Exercise 7: Error Correction

### Error 1: Stationery posted to Motor Expenses
```
Dr Stationery              €150
   Cr Motor Expenses           €150
```

### Error 2: VAT omitted from sales invoice
The invoice was correctly entered as Dr ABC Ltd €2,460, Cr Sales €2,000 — but the VAT of €460 was never credited to the VAT Control account.

Correction:
```
Dr ABC Ltd                €460
   Cr VAT Control             €460
```
(Records the missing output VAT — the debtor and sales balances were already correct)

### Error 3: Computer posted to Purchases
```
Dr Equipment              €1,500
   Cr Purchases                €1,500
```

### Error 4: Rent omitted entirely
```
Dr Rent                    €2,000
   Cr Bank                     €2,000
```
