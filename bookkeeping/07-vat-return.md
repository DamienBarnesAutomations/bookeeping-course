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
| 9% | Second reduced rate (newspapers, certain cultural events) |
| 0% | Zero-rated (exports, most food, children's clothes) |
| Exempt | Finance, insurance, education, healthcare |

**Note:** Hospitality (hotels, restaurants) moved from 9% to 13.5% in November 2023.

### VAT Registration Thresholds (2025)

| Supply Type | Threshold |
|-------------|-----------|
| Services | €37,500 per annum |
| Goods | €75,000 per annum |

Businesses below these thresholds may register voluntarily (e.g., to reclaim input VAT). Above the threshold, registration is mandatory.

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


---

## Worked Examples & Deep Dive

### Complete VAT Period Example

**Bi-monthly period: January-February 2026**

### Output VAT Calculation

| Source | Net (€) | VAT Rate | VAT (€) |
|--------|---------|----------|---------|
| Standard rate sales | 45,000 | 23% | 10,350.00 |
| Reduced rate sales (13.5%) | 8,000 | 13.5% | 1,080.00 |
| Zero-rated sales | 6,000 | 0% | 0.00 |
| Credit notes issued (standard) | (2,000) | 23% | (460.00) |
| **Total Output VAT (T3)** | | | **10,970.00** |

### Input VAT Calculation

| Source | Net (€) | VAT Rate | VAT (€) |
|--------|---------|----------|---------|
| Standard rate purchases | 28,000 | 23% | 6,440.00 |
| Reduced rate purchases | 4,000 | 13.5% | 540.00 |
| Zero-rated purchases | 3,000 | 0% | 0.00 |
| Credit notes received (standard) | (1,000) | 23% | (230.00) |
| Petty cash (standard rate items) | 500 | 23% | 115.00 |
| **Total Input VAT (T4)** | | | **6,865.00** |

### VAT Return Summary

| Box | Description | Amount (€) |
|-----|-------------|-----------|
| T1 | Total Sales excl. VAT (45,000 + 8,000 + 6,000 − 2,000) | 57,000.00 |
| T2 | Total Purchases excl. VAT (28,000 + 4,000 + 3,000 − 1,000 + 500) | 34,500.00 |
| T3 | Output VAT | 10,970.00 |
| T4 | Input VAT | 6,865.00 |
| **T5** | **VAT Payable (T3 − T4)** | **4,105.00** |

### VAT on Imports and Exports

**Exports:** Zero-rated (0% VAT) — you can reclaim input VAT on costs related to exports.

**Imports from EU:** Reverse charge VAT — the buyer accounts for both output and input VAT (net effect is zero for VAT-registered businesses).

**Imports from non-EU:** VAT is paid at customs. Claim as input VAT on the VAT return.

### VAT and Capital Goods

When buying capital equipment (e.g., a van for €30,000 + €6,900 VAT):
- The full input VAT of €6,900 is reclaimable in the period of purchase
- This can result in a VAT refund for that period

### Partial Exemption

If a business makes both taxable and exempt supplies:
- Can only reclaim input VAT on the taxable portion
- Must apportion input VAT using the standard method:
  ```
  Recoverable % = Taxable supplies / Total supplies × 100
  ```

### Common VAT Errors in Exams

| Error | Mark Lost |
|-------|-----------|
| Mixing up T1/T2 totals (net vs gross) | Usually penalised |
| Forgetting credit notes in VAT calculation | Output/input VAT overstated |
| Claiming input VAT on exempt purchases | Wrong — can't claim |
| Using wrong VAT rate | Calculation error |
| Not apportioning mixed-rate invoices | Have to split VAT by line item |

### Practice VAT Return

Calculate VAT payable:

| | Net (€) | Rate |
|---|---------|------|
| Sales — standard | 60,000 | 23% |
| Sales — exports | 15,000 | 0% |
| Purchases — standard | 35,000 | 23% |
| Purchases — reduced | 5,000 | 13.5% |
| Purchases — exempt (financial services) | 2,000 | Exempt |
| Credit notes issued (standard) | (3,000) | 23% |

**Answer:**
- Output VAT: (60,000 × 23%) − (3,000 × 23%) = 13,800 − 690 = **€13,110**
- Input VAT: (35,000 × 23%) + (5,000 × 13.5%) = 8,050 + 675 = **€8,725** (exempt purchases: €0 input VAT)
- **VAT Payable:** €13,110 − €8,725 = **€4,385**
