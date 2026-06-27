import { chromium } from 'playwright';
import path from 'path';

// Samsung Galaxy S23 Ultra: 412x915 CSS pixels, deviceScaleFactor 3.75, touch
const DEVICE = {
  viewport: { width: 412, height: 915 },
  deviceScaleFactor: 3,
  isMobile: true,
  hasTouch: true,
  userAgent: 'Mozilla/5.0 (Linux; Android 13; SM-S918B) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Mobile Safari/537.36'
};

const BASE = 'http://localhost:4321';
const SHOTS = 'C:/Users/damie/AppData/Local/Temp/claude/c--Users-damie-projects-bookeeping-course/c940ecaf-9b95-4a42-8ac9-64e0f9985aa0/scratchpad/shots';

const browser = await chromium.launch({ headless: true });
const ctx = await browser.newContext(DEVICE);
const page = await ctx.newPage();

// Capture helper
let n = 1;
async function shot(name) {
  const file = `${SHOTS}/${String(n).padStart(2,'0')}-${name}.png`;
  await page.screenshot({ path: file, fullPage: false });
  console.log(`📸 ${file}`);
  n++;
}

// Check for overflow
async function checkOverflow() {
  const overflow = await page.evaluate(() => {
    const els = document.querySelectorAll('*');
    const bad = [];
    for (const el of els) {
      if (el.scrollWidth > document.documentElement.clientWidth + 2) {
        bad.push(`${el.tagName}.${[...el.classList].join('.')} scrollWidth=${el.scrollWidth}`);
      }
    }
    return bad.slice(0, 10);
  });
  if (overflow.length) console.warn('⚠️  OVERFLOW DETECTED:', overflow);
  else console.log('✅ No horizontal overflow');
  return overflow;
}

import { mkdirSync } from 'fs';
mkdirSync(SHOTS, { recursive: true });

// ── 1. DASHBOARD ──────────────────────────────────────────
console.log('\n── Dashboard ──');
await page.goto(BASE, { waitUntil: 'networkidle' });
await page.waitForTimeout(800);
await shot('dashboard');
await checkOverflow();

// Stats visible?
const statsVisible = await page.locator('#totalReadCount').isVisible();
console.log(`✅ Stats visible: ${statsVisible}`);

// Bottom nav visible?
const bottomNav = await page.locator('.mobile-bottom-nav').isVisible();
console.log(`✅ Bottom nav visible: ${bottomNav}`);

// ── 2. SIDEBAR DRAWER ──────────────────────────────────────
console.log('\n── Sidebar Drawer ──');
await page.locator('#menuToggleBtn').tap();
await page.waitForTimeout(400);
await shot('sidebar-open');
await checkOverflow();

// Sidebar groups visible?
const sidebarGroups = await page.locator('.sidebar-group').count();
console.log(`✅ Sidebar groups: ${sidebarGroups}`);

// Close sidebar
await page.locator('#closeSidebarBtn').tap();
await page.waitForTimeout(300);

// ── 3. LESSON PAGE ─────────────────────────────────────────
console.log('\n── Lesson Page ──');
await page.goto(`${BASE}/#bookkeeping/01-bookkeeping-terminology.md`, { waitUntil: 'networkidle' });
await page.waitForTimeout(800);
await shot('lesson-page');
await checkOverflow();

// Check prose text is readable (font-size)
const fontSize = await page.evaluate(() => {
  const p = document.querySelector('.prose p');
  return p ? getComputedStyle(p).fontSize : 'no prose found';
});
console.log(`ℹ️  Prose font-size: ${fontSize}`);

// Check mark-complete button visible
const markBtn = await page.locator('#markReadBtn').isVisible();
console.log(`✅ Mark complete button visible: ${markBtn}`);

// Scroll to bottom and check pagination
await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
await page.waitForTimeout(300);
await shot('lesson-pagination');

// ── 4. JOURNAL ENTRY PRACTICE ──────────────────────────────
console.log('\n── Journal Entry Practice ──');
await page.goto(`${BASE}/#tools/journal-practice`, { waitUntil: 'networkidle' });
await page.waitForTimeout(1200);
await shot('journal-top');
await checkOverflow();

// Table visible and inputs tappable?
const jeTable = await page.locator('.je-table').isVisible();
console.log(`✅ Journal table visible: ${jeTable}`);

const accountInputs = await page.locator('.je-account').count();
console.log(`✅ Account inputs: ${accountInputs}`);

// Check input min height (tap target — should be >= 44px)
const inputH = await page.evaluate(() => {
  const inp = document.querySelector('.je-account');
  return inp ? inp.getBoundingClientRect().height : 0;
});
console.log(`ℹ️  Input tap height: ${inputH}px ${inputH >= 40 ? '✅' : '⚠️ small'}`);

// Try filling one entry
await page.locator('.je-account').first().fill('Debtors');
await page.locator('.je-debit').first().fill('2460');
await shot('journal-filled');
await checkOverflow();

// Tap Check Entry
await page.locator('#jeCheckBtn').tap();
await page.waitForTimeout(400);
await shot('journal-feedback');

// Check feedback visible
const feedback = await page.locator('#jeFeedback').isVisible();
console.log(`✅ Journal feedback visible: ${feedback}`);

// ── 5. PAYROLL WORKSHEET ───────────────────────────────────
console.log('\n── Payroll Worksheet ──');
await page.goto(`${BASE}/#tools/payroll-worksheet`, { waitUntil: 'networkidle' });
await page.waitForTimeout(1200);
await shot('payroll-top');
await checkOverflow();

const pwTable = await page.locator('.pw-table').isVisible();
console.log(`✅ Payroll table visible: ${pwTable}`);

// Check pw-input width fits screen
const pwInputW = await page.evaluate(() => {
  const inp = document.querySelector('.pw-input');
  if (!inp) return 0;
  const r = inp.getBoundingClientRect();
  return { w: r.width, right: r.right, screenW: window.innerWidth };
});
console.log(`ℹ️  Payroll input: width=${pwInputW.w}px right=${pwInputW.right}px screen=${pwInputW.screenW}px ${pwInputW.right <= pwInputW.screenW + 2 ? '✅' : '⚠️ overflows'}`);

// Scroll to see step inputs
await page.evaluate(() => window.scrollTo(0, 400));
await page.waitForTimeout(200);
await shot('payroll-steps');

// Fill one step and blur to trigger live check
const firstPwInput = page.locator('.pw-input').first();
await firstPwInput.fill('700');
await firstPwInput.press('Tab');
await page.waitForTimeout(300);
await shot('payroll-live-check');

// ── 6. BANK REC ────────────────────────────────────────────
console.log('\n── Bank Reconciliation ──');
await page.goto(`${BASE}/#tools/bank-rec-practice`, { waitUntil: 'networkidle' });
await page.waitForTimeout(1200);
await shot('bank-rec-top');
await checkOverflow();

const brTable = await page.locator('.br-items-table').isVisible();
console.log(`✅ Bank rec items table visible: ${brTable}`);

// Check the select dropdowns fit
const selectW = await page.evaluate(() => {
  const sel = document.querySelector('.br-select');
  if (!sel) return {};
  const r = sel.getBoundingClientRect();
  return { w: r.width, right: r.right, screenW: window.innerWidth };
});
console.log(`ℹ️  Dropdown: width=${selectW.w}px right=${selectW.right}px screen=${selectW.screenW}px ${selectW.right <= selectW.screenW + 2 ? '✅' : '⚠️ overflows'}`);

// Scroll to see step 2
await page.evaluate(() => window.scrollTo(0, 600));
await page.waitForTimeout(200);
await shot('bank-rec-step2');

// ── 7. GLOSSARY FLASHCARDS ─────────────────────────────────
console.log('\n── Glossary / Flashcard ──');
await page.goto(`${BASE}/#reference/glossary.md`, { waitUntil: 'networkidle' });
await page.waitForTimeout(800);
await shot('glossary');

// Switch to flashcard mode
await page.locator('#flashcardModeBtn').tap();
await page.waitForTimeout(600);
await shot('flashcard-mode');
await checkOverflow();

const flashcard = await page.locator('.flashcard-scene').isVisible();
console.log(`✅ Flashcard visible: ${flashcard}`);

// Tap card to flip
await page.locator('.flashcard-scene').tap();
await page.waitForTimeout(600);
await shot('flashcard-flipped');

// ── DONE ───────────────────────────────────────────────────
console.log('\n✅ All screenshots captured');
await browser.close();
