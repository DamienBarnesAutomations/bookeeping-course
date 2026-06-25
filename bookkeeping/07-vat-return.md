# Learning Outcome 7 — VAT Return

**Objective:** Prepare the end-of-period VAT Return in accordance with the requirements of the Revenue Commissioners.

---

## VAT Overview

VAT (Value Added Tax) is charged at each stage of production/distribution. Businesses:
- **Collect** VAT on sales (Output VAT)
- **Pay** VAT on purchases (Input VAT)
- **Remit** the difference to Revenue

### Current Irish VAT Rates (2025-2026)

| Rate | Category |
|------|----------|
| 23% | Standard rate |
| 13.5% | Reduced rate (construction, tourism, food, energy) |
| 9% | Second reduced rate (hotels, newspapers, theatre) |
| 0% | Zero-rated (exports, most food, children's clothes) |
| Exempt | Finance, insurance, education, healthcare |

---

## Calculating VAT Liability

```
Total Output VAT (VAT on Sales)         €X
Less: Input VAT (VAT on Purchases)     (€Y)
                                       ----
= VAT Payable/(Refund)                  €Z
```

If **Output VAT > Input VAT** → Pay the difference to Revenue
If **Input VAT > Output VAT** → Claim a refund

---

## VAT Return (Revenue Commissioners)

The VAT return (usually filed bi-monthly or monthly via ROS) requires:

| Box | Description |
|-----|-------------|
| T1 | Total sales/excl. VAT |
| T2 | Total purchases/excl. VAT |
| T3 | VAT on sales (Output VAT) |
| T4 | VAT on purchases (Input VAT) |
| T5 | VAT due (T3 - T4) |
| T6 | VAT refundable (T4 - T3) |

---

## Worked Example

### Transactions for Period

**Sales:**
- Standard rate sales (23%): €20,000 net → VAT €4,600
- Zero-rated sales: €5,000 net → VAT €0

**Purchases:**
- Standard rate purchases (23%): €8,000 net → VAT €1,840
- Reduced rate purchases (13.5%): €2,000 net → VAT €270
- Zero-rated purchases: €1,000 net → VAT €0

### VAT Calculation

```
Output VAT:
  Sales @ 23%: €20,000 × 23%     = €4,600
  Sales @ 0%:                     = €0
  Total Output VAT                = €4,600

Input VAT:
  Purchases @ 23%: €8,000 × 23%   = €1,840
  Purchases @ 13.5%: €2,000 × 13.5% = €270
  Total Input VAT                 = €2,110

VAT Payable: €4,600 - €2,110 = €2,490
```

### VAT Return Entry (via ROS)

```
T1: Sales excl. VAT         €25,000
T2: Purchases excl. VAT     €11,000
T3: Output VAT              €4,600
T4: Input VAT               €2,110
T5: VAT Payable             €2,490
```

---

## VAT on Daybooks (Recap)

| Source Document | VAT Treatment |
|----------------|--------------|
| Sales invoice | Output VAT — payable to Revenue |
| Purchase invoice | Input VAT — reclaimable from Revenue |
| Sales credit note | Reverse output VAT |
| Purchase credit note | Reverse input VAT |
| Petty cash (standard rate) | Input VAT reclaimable on receipt |

---

## Computerised VAT

- Software auto-calculates VAT on each transaction
- VAT control account tracks cumulative output/input VAT
- Most packages can generate VAT return data and export to ROS
- VAT rate codes should be set up for each rate type

## Deadlines

- **Bi-monthly**: Due by 23rd of the month following the period end
- **Annual**: Some small businesses file annually
- Payment via ROS (Revenue Online Service)

## Common Errors

| Error | Consequence |
|-------|-------------|
| Wrong VAT rate applied | Incorrect return |
| Claiming input VAT on exempt purchases | Revenue penalty |
| Not separating zero-rated from exempt | Misclassification |
| Missing credit notes | Overstated VAT |
| Arithmetic errors | Incorrect payment/refund |
