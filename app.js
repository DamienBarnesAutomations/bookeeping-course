// QQI Level 5 Bookkeeping & Payroll Course - SPA Core Logic

// State Management
const state = {
    manifest: null,
    completedLessons: [],
    theme: 'dark',
    currentPath: '',
    interactiveMode: false,
    glossaryTerms: []
};

// Initialize Application
document.addEventListener('DOMContentLoaded', () => {
    initTheme();
    loadManifest();
    setupEventListeners();
});

// Theme Management
function initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    setTheme(savedTheme);
}

function setTheme(theme) {
    state.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
}

// Load Course Manifest and Progress
async function loadManifest() {
    try {
        const response = await fetch('./manifest.json');
        if (!response.ok) throw new Error('Failed to fetch course manifest.');
        state.manifest = await response.json();
        
        // Load progress
        const savedProgress = localStorage.getItem('completed_lessons');
        if (savedProgress) {
            state.completedLessons = JSON.parse(savedProgress);
        }
        
        // Render UI Components
        renderSidebar();
        updateProgress();
        
        // Route initial page
        handleRoute();
        window.addEventListener('hashchange', handleRoute);
        
    } catch (error) {
        console.error('Error initializing application:', error);
        document.getElementById('sidebarNav').innerHTML = `
            <div class="nav-error" style="padding: 20px; color: var(--accent-warning); text-align: center;">
                <i data-lucide="alert-triangle"></i>
                <p style="margin-top: 8px;">Failed to load course contents. Please ensure manifest.json exists.</p>
            </div>
        `;
        lucide.createIcons();
    }
}

// Setup Event Listeners
function setupEventListeners() {
    // Theme Toggle
    document.getElementById('themeToggleBtn').addEventListener('click', () => {
        const nextTheme = state.theme === 'dark' ? 'light' : 'dark';
        setTheme(nextTheme);
    });

    // Mobile Sidebar Drawer Controls
    const menuToggleBtn = document.getElementById('menuToggleBtn');
    const closeSidebarBtn = document.getElementById('closeSidebarBtn');
    const appSidebar = document.getElementById('appSidebar');
    const sidebarBackdrop = document.getElementById('sidebarBackdrop');

    const toggleSidebar = (show) => {
        appSidebar.classList.toggle('open', show);
        sidebarBackdrop.classList.toggle('active', show);
    };

    menuToggleBtn.addEventListener('click', () => toggleSidebar(true));
    closeSidebarBtn.addEventListener('click', () => toggleSidebar(false));
    sidebarBackdrop.addEventListener('click', () => toggleSidebar(false));

    // Close mobile drawer on navigation
    appSidebar.addEventListener('click', (e) => {
        if (e.target.closest('.sidebar-link')) {
            toggleSidebar(false);
        }
    });

    // Mobile Bottom Nav Routing
    const bottomNavItems = document.querySelectorAll('.mobile-bottom-nav button');
    bottomNavItems.forEach(btn => {
        btn.addEventListener('click', () => {
            const target = btn.dataset.target;
            bottomNavItems.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            if (target === 'home') {
                window.location.hash = '';
            } else {
                // Navigate to the first lesson of that category
                const cat = state.manifest.categories[target];
                if (cat && cat.files.length > 0) {
                    window.location.hash = `#${cat.files[0].path}`;
                }
            }
        });
    });

    // Mark as Complete Button
    const markReadBtn = document.getElementById('markReadBtn');
    markReadBtn.addEventListener('click', () => {
        toggleLessonCompletion(state.currentPath);
    });

    // Interactive Practice Mode Toggle
    const interactiveModeSwitch = document.getElementById('interactiveModeSwitch');
    interactiveModeSwitch.addEventListener('change', (e) => {
        state.interactiveMode = e.target.checked;
        const resetBtn = document.getElementById('resetInteractiveBtn');
        resetBtn.style.display = state.interactiveMode ? 'inline-flex' : 'none';
        renderCurrentLesson();
    });

    // Reset Worksheet Button
    document.getElementById('resetInteractiveBtn').addEventListener('click', () => {
        if (confirm('Are you sure you want to reset all inputs in this worksheet?')) {
            renderCurrentLesson();
        }
    });
}

// Render Sidebar Navigation
function renderSidebar() {
    const navContainer = document.getElementById('sidebarNav');
    navContainer.innerHTML = ''; // Clear loading spinner
    
    // Group Categories in Sidebar
    for (const [key, category] of Object.entries(state.manifest.categories)) {
        const groupEl = document.createElement('div');
        groupEl.className = 'sidebar-group';
        
        const titleEl = document.createElement('div');
        titleEl.className = 'sidebar-group-title';
        titleEl.innerText = category.title.split('(')[0].trim(); // Clean QQI code for sidebar brevity
        groupEl.appendChild(titleEl);
        
        const listEl = document.createElement('ul');
        listEl.className = 'sidebar-group-list';
        
        category.files.forEach(file => {
            const isCompleted = state.completedLessons.includes(file.path);
            const itemEl = document.createElement('li');
            itemEl.innerHTML = `
                <a href="#${file.path}" class="sidebar-link ${isCompleted ? 'completed' : ''}" data-path="${file.path}">
                    <span class="sidebar-link-text">${file.title}</span>
                    <i data-lucide="${isCompleted ? 'check-circle' : 'circle'}" class="sidebar-status-icon"></i>
                </a>
            `;
            listEl.appendChild(itemEl);
        });
        
        groupEl.appendChild(listEl);
        navContainer.appendChild(groupEl);
    }
    
    lucide.createIcons();
}

// Calculate and Update Progress Statistics
function updateProgress() {
    if (!state.manifest) return;
    
    // Count total files in manifest
    let totalFiles = 0;
    let completedCount = 0;
    
    let bookkeepingTotal = 0;
    let bookkeepingCompleted = 0;
    
    let payrollTotal = 0;
    let payrollCompleted = 0;
    
    for (const [key, category] of Object.entries(state.manifest.categories)) {
        const filesCount = category.files.length;
        totalFiles += filesCount;
        
        category.files.forEach(f => {
            const done = state.completedLessons.includes(f.path);
            if (done) completedCount++;
            
            if (key === 'bookkeeping') {
                bookkeepingTotal++;
                if (done) bookkeepingCompleted++;
            } else if (key === 'payroll') {
                payrollTotal++;
                if (done) payrollCompleted++;
            }
        });
    }
    
    // Calculate Percentages
    const overallPercent = totalFiles > 0 ? Math.round((completedCount / totalFiles) * 100) : 0;
    const bkPercent = bookkeepingTotal > 0 ? Math.round((bookkeepingCompleted / bookkeepingTotal) * 100) : 0;
    const pyPercent = payrollTotal > 0 ? Math.round((payrollCompleted / payrollTotal) * 100) : 0;
    
    // Update Header Progress
    document.getElementById('progressPercent').innerText = overallPercent;
    document.getElementById('progressBarFill').style.width = `${overallPercent}%`;
    
    // Update Dashboard Stats
    document.getElementById('totalReadCount').innerText = `${completedCount}/${totalFiles}`;
    document.getElementById('bookkeepingReadPercent').innerText = `${bkPercent}%`;
    document.getElementById('payrollReadPercent').innerText = `${pyPercent}%`;
    
    // Sync completed checkmarks in sidebar
    document.querySelectorAll('.sidebar-link').forEach(link => {
        const path = link.dataset.path;
        const icon = link.querySelector('.sidebar-status-icon');
        if (icon) {
            const isDone = state.completedLessons.includes(path);
            if (isDone) {
                link.classList.add('completed');
                if (icon.tagName.toLowerCase() !== 'i' || icon.getAttribute('data-lucide') !== 'check-circle') {
                    icon.outerHTML = '<i data-lucide="check-circle" class="sidebar-status-icon"></i>';
                }
            } else {
                link.classList.remove('completed');
                if (icon.tagName.toLowerCase() !== 'i' || icon.getAttribute('data-lucide') !== 'circle') {
                    icon.outerHTML = '<i data-lucide="circle" class="sidebar-status-icon"></i>';
                }
            }
        }
    });
    lucide.createIcons();
}

// Toggle Lesson Completion State
function toggleLessonCompletion(path) {
    if (!path) return;
    
    const index = state.completedLessons.indexOf(path);
    const markReadBtn = document.getElementById('markReadBtn');
    
    if (index > -1) {
        // Remove completion
        state.completedLessons.splice(index, 1);
        markReadBtn.classList.remove('btn-primary');
        markReadBtn.classList.add('btn-outline');
        markReadBtn.innerHTML = '<i data-lucide="circle"></i> <span id="markReadText">Mark Complete</span>';
    } else {
        // Add completion
        state.completedLessons.push(path);
        markReadBtn.classList.remove('btn-outline');
        markReadBtn.classList.add('btn-primary');
        markReadBtn.innerHTML = '<i data-lucide="check-circle"></i> <span id="markReadText">Completed</span>';
    }
    
    localStorage.setItem('completed_lessons', JSON.stringify(state.completedLessons));
    updateProgress();
    
    // Also highlight progress in sidebar link immediately
    const sidebarLink = document.querySelector(`.sidebar-link[data-path="${path}"]`);
    if (sidebarLink) {
        if (state.completedLessons.includes(path)) {
            sidebarLink.classList.add('completed');
        } else {
            sidebarLink.classList.remove('completed');
        }
    }
    lucide.createIcons();
}

// Hash Router Router Handler
function handleRoute() {
    const hash = window.location.hash.substring(1);
    
    // Update active state in mobile bottom bar
    const bottomNavItems = document.querySelectorAll('.mobile-bottom-nav button');
    bottomNavItems.forEach(b => b.classList.remove('active'));
    
    if (!hash || hash === 'home' || hash === '') {
        // Show Dashboard
        state.currentPath = '';
        document.getElementById('dashboardView').style.display = 'block';
        document.getElementById('readerView').style.display = 'none';
        document.getElementById('markReadBtn').style.display = 'none';
        
        // Hide interactive toggles
        document.getElementById('interactiveModeContainer').style.display = 'none';
        document.getElementById('resetInteractiveBtn').style.display = 'none';
        
        // Highlight Home in bottom nav
        document.querySelector('.mobile-bottom-nav button[data-target="home"]')?.classList.add('active');
        
        // Render Category Bento Cards
        renderCategoryCards();
        
        // Highlight active sidebar links (remove active)
        document.querySelectorAll('.sidebar-link').forEach(l => l.classList.remove('active'));
        
        // Scroll to top
        document.querySelector('.app-main').scrollTop = 0;
    } else {
        // Show Reader
        state.currentPath = hash;
        document.getElementById('dashboardView').style.display = 'none';
        document.getElementById('readerView').style.display = 'block';
        document.getElementById('markReadBtn').style.display = 'inline-flex';
        
        // Update Bottom Nav active indicator based on path prefix
        const catPrefix = hash.split('/')[0];
        const matchBtn = document.querySelector(`.mobile-bottom-nav button[data-target="${catPrefix}"]`);
        if (matchBtn) {
            matchBtn.classList.add('active');
        }
        
        // Highlight active link in sidebar
        document.querySelectorAll('.sidebar-link').forEach(link => {
            if (link.getAttribute('href') === `#${hash}`) {
                link.classList.add('active');
                // Scroll link into view inside sidebar if not visible
                link.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
            } else {
                link.classList.remove('active');
            }
        });
        
        // Load and Render MD
        renderCurrentLesson();
    }
}

// Render Dashboard Bento Cards
function renderCategoryCards() {
    const grid = document.getElementById('categoryGrid');
    grid.innerHTML = '';
    
    for (const [key, category] of Object.entries(state.manifest.categories)) {
        // Calculate progress for this category
        let completed = 0;
        category.files.forEach(f => {
            if (state.completedLessons.includes(f.path)) completed++;
        });
        
        const card = document.createElement('div');
        card.className = 'bento-card';
        card.innerHTML = `
            <div class="bento-card-header">
                <div class="bento-card-icon-wrapper">
                    <i data-lucide="${category.icon || 'book-open'}"></i>
                </div>
                <div class="bento-card-progress">${completed}/${category.files.length} Done</div>
            </div>
            <div class="bento-card-body">
                <h4>${category.title}</h4>
                <p>${category.description}</p>
            </div>
        `;
        
        card.addEventListener('click', () => {
            // Go to the first file in this category
            if (category.files.length > 0) {
                window.location.hash = `#${category.files[0].path}`;
            }
        });
        
        grid.appendChild(card);
    }
    
    lucide.createIcons();
}

// Load Markdown and Render to Document Pane
async function renderCurrentLesson() {
    const path = state.currentPath;
    const renderArea = document.getElementById('renderedMarkdown');
    
    renderArea.innerHTML = `
        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 100px 0; color: var(--text-secondary);">
            <div class="spinner" style="width: 40px; height: 40px;"></div>
            <p style="margin-top: 16px; font-weight: 500;">Fetching course document...</p>
        </div>
    `;
    
    try {
        const response = await fetch(`./${path}`);
        if (!response.ok) throw new Error('Document not found or load failed.');
        let markdownText = await response.ok ? await response.text() : '';
        
        // Intercept and load custom glossary UI if it is the glossary file
        if (path === 'reference/glossary.md') {
            document.getElementById('interactiveModeContainer').style.display = 'none';
            document.getElementById('resetInteractiveBtn').style.display = 'none';
            renderGlossaryPage(markdownText);
            updateBreadcrumbs('Reference Materials', 'Glossary');
            setupPagination(path);
            return;
        }

        // Configure breadcrumbs
        const categoryKey = path.split('/')[0];
        const categoryTitle = state.manifest.categories[categoryKey]?.title.split('(')[0].trim() || 'Course';
        
        let lessonTitle = 'Lesson';
        const fileObj = state.manifest.categories[categoryKey]?.files.find(f => f.path === path);
        if (fileObj) lessonTitle = fileObj.title;
        
        updateBreadcrumbs(categoryTitle, lessonTitle);
        
        // Show/hide templates interactive practice toggle
        const isTemplate = categoryKey === 'templates';
        const interactiveToggle = document.getElementById('interactiveModeContainer');
        interactiveToggle.style.display = isTemplate ? 'flex' : 'none';
        
        const resetBtn = document.getElementById('resetInteractiveBtn');
        resetBtn.style.display = (isTemplate && state.interactiveMode) ? 'inline-flex' : 'none';
        
        // Set Mark Read Button state
        const markReadBtn = document.getElementById('markReadBtn');
        const isDone = state.completedLessons.includes(path);
        if (isDone) {
            markReadBtn.classList.remove('btn-outline');
            markReadBtn.classList.add('btn-primary');
            markReadBtn.innerHTML = '<i data-lucide="check-circle"></i> <span id="markReadText">Completed</span>';
        } else {
            markReadBtn.classList.remove('btn-primary');
            markReadBtn.classList.add('btn-outline');
            markReadBtn.innerHTML = '<i data-lucide="circle"></i> <span id="markReadText">Mark Complete</span>';
        }
        
        // Parse and render markdown
        const htmlContent = marked.parse(markdownText);
        renderArea.innerHTML = htmlContent;
        
        // Build floating table of contents
        buildTableOfContents(renderArea);
        
        // Setup bottom pagination (Next/Prev)
        setupPagination(path);
        
        // If interactive practice is enabled (and it is a template), transform tables into interactive inputs
        if (isTemplate && state.interactiveMode) {
            transformTablesToWorksheets(renderArea, path);
        }
        
        // Scroll content area back to top
        document.querySelector('.app-main').scrollTop = 0;
        
    } catch (error) {
        console.error('Error fetching markdown file:', error);
        renderArea.innerHTML = `
            <div style="padding: 40px; text-align: center; color: var(--accent-warning);">
                <i data-lucide="alert-circle" style="width: 48px; height: 48px;"></i>
                <h3 style="margin-top: 16px; font-family: Outfit, sans-serif; font-size: 1.5rem;">Document Unavailable</h3>
                <p style="margin-top: 8px; color: var(--text-secondary);">The file <code>${path}</code> could not be retrieved from the server. Check if it was moved or deleted.</p>
                <a href="#" class="btn btn-primary" style="margin-top: 24px;">Return to Dashboard</a>
            </div>
        `;
    }
    
    lucide.createIcons();
}

// Update Breadcrumbs
function updateBreadcrumbs(category, title) {
    document.getElementById('breadcrumbCategory').innerText = category;
    document.getElementById('breadcrumbTitle').innerText = title;
}

// Build Floating Table of Contents from headings
function buildTableOfContents(contentContainer) {
    const tocList = document.getElementById('tocList');
    tocList.innerHTML = '';
    
    // Find all h2 and h3 elements
    const headings = contentContainer.querySelectorAll('h2, h3');
    
    if (headings.length === 0) {
        document.getElementById('readerToc').style.display = 'none';
        return;
    }
    
    // On wide screens, display outline
    document.getElementById('readerToc').style.display = window.innerWidth > 1024 ? 'block' : 'none';
    
    headings.forEach((heading, idx) => {
        // Create an ID if not present
        if (!heading.id) {
            heading.id = `heading-ref-${idx}`;
        }
        
        const li = document.createElement('li');
        li.innerHTML = `
            <a href="#${heading.id}" class="toc-link ${heading.tagName.toLowerCase() === 'h3' ? 'h3-link' : ''}">
                ${heading.innerText}
            </a>
        `;
        
        li.querySelector('a').addEventListener('click', (e) => {
            e.preventDefault();
            heading.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
        
        tocList.appendChild(li);
    });
}

// Setup Next / Previous pagination links
function setupPagination(currentPath) {
    // Flatten manifest files to find current index
    const flatFiles = [];
    for (const category of Object.values(state.manifest.categories)) {
        category.files.forEach(f => flatFiles.push(f));
    }
    
    const idx = flatFiles.findIndex(f => f.path === currentPath);
    const prevBtn = document.getElementById('prevLessonBtn');
    const nextBtn = document.getElementById('nextLessonBtn');
    
    if (idx > 0) {
        prevBtn.style.display = 'inline-flex';
        prevBtn.onclick = () => {
            window.location.hash = `#${flatFiles[idx - 1].path}`;
        };
    } else {
        prevBtn.style.display = 'none';
    }
    
    if (idx > -1 && idx < flatFiles.length - 1) {
        nextBtn.style.display = 'inline-flex';
        nextBtn.onclick = () => {
            window.location.hash = `#${flatFiles[idx + 1].path}`;
        };
        nextBtn.querySelector('span').innerText = `Next: ${flatFiles[idx + 1].title.split('—')[0].trim()}`;
    } else {
        nextBtn.style.display = 'none';
    }
}

// Render Specialized Glossary UI with Search Filter
function renderGlossaryPage(rawMarkdown) {
    const renderArea = document.getElementById('renderedMarkdown');
    
    // Parse words if empty
    if (state.glossaryTerms.length === 0) {
        const rows = rawMarkdown.match(/\| \*\*(.*?)\*\* \| (.*?) \|/g);
        if (rows) {
            state.glossaryTerms = rows.map(r => {
                const parts = r.split('|');
                const word = parts[1].replace(/\*\*/g, '').trim();
                const definition = parts[2].trim();
                // Determine module based on position in markdown
                const index = rawMarkdown.indexOf(r);
                const payrollHeaderIndex = rawMarkdown.indexOf('## Payroll Terms');
                const category = index > payrollHeaderIndex ? 'Payroll' : 'Bookkeeping';
                
                return { word, definition, category };
            });
        }
    }
    
    // Render search container and list placeholder
    renderArea.innerHTML = `
        <h1>Glossary — Bookkeeping & Payroll</h1>
        <p>Search and filter over 70+ QQI Level 5 curriculum definitions below.</p>
        <hr>
        <div class="glossary-search-container">
            <div class="glossary-input-wrapper">
                <i data-lucide="search"></i>
                <input type="text" class="glossary-search-input" id="glossarySearch" placeholder="Type a term to filter definitions (e.g. VAT, PRSI, Ledger)...">
            </div>
        </div>
        <div class="glossary-list" id="glossaryList"></div>
    `;
    
    const searchInput = document.getElementById('glossarySearch');
    const listContainer = document.getElementById('glossaryList');
    
    const filterTerms = (query = '') => {
        const cleanQuery = query.toLowerCase().trim();
        const filtered = state.glossaryTerms.filter(t => 
            t.word.toLowerCase().includes(cleanQuery) || 
            t.definition.toLowerCase().includes(cleanQuery)
        );
        
        if (filtered.length === 0) {
            listContainer.innerHTML = `
                <div style="padding: 40px; text-align: center; color: var(--text-secondary);">
                    <p>No matches found for "${query}". Try searching another bookkeeping or payroll term.</p>
                </div>
            `;
            return;
        }
        
        listContainer.innerHTML = filtered.map(t => `
            <div class="glossary-card">
                <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                    <div class="glossary-word">${t.word}</div>
                    <span class="brand-badge" style="font-size: 0.65rem; background: ${t.category === 'Payroll' ? 'var(--accent-secondary)' : 'var(--accent-primary)'};">${t.category}</span>
                </div>
                <div class="glossary-definition">${t.definition}</div>
            </div>
        `).join('');
    };
    
    // Initial display
    filterTerms();
    
    searchInput.addEventListener('input', (e) => filterTerms(e.target.value));
    searchInput.focus();
    lucide.createIcons();
    
    // Hide table of contents outline for glossary
    document.getElementById('readerToc').style.display = 'none';
}

// Convert static Markdown tables into Interactive Worksheets
function transformTablesToWorksheets(renderArea, path) {
    const tables = renderArea.querySelectorAll('table');
    
    tables.forEach((table, tableIdx) => {
        table.classList.add('interactive-table');
        
        // Scan headers to understand numeric vs text columns
        const headers = Array.from(table.querySelectorAll('thead th')).map(th => th.innerText.toLowerCase().trim());
        const rows = table.querySelectorAll('tbody tr');
        
        rows.forEach((row, rowIdx) => {
            const cells = row.querySelectorAll('td');
            
            // Check if this row is a "Totals" or summary row
            const isTotalsRow = Array.from(cells).some(c => 
                c.innerText.toLowerCase().includes('total') || 
                c.innerText.toLowerCase().includes('totals') ||
                c.innerText.toLowerCase().includes('balance c/d') ||
                c.innerText.toLowerCase().includes('balance per')
            );
            
            cells.forEach((cell, colIdx) => {
                const cellText = cell.innerText.trim();
                const colHeader = headers[colIdx] || '';
                
                // If it is a totals row, style it or handle formula target
                if (isTotalsRow) {
                    if (cellText === '€' || cellText === '(€)' || cellText === '' || cellText === '**€**' || cellText === '**(€)**') {
                        cell.classList.add('col-total');
                        cell.dataset.table = tableIdx;
                        cell.dataset.col = colIdx;
                        cell.innerHTML = '€0.00';
                    }
                    return;
                }
                
                // For other rows, determine if the cell should contain an input
                // Empty cell or underscores mean blank practice cell
                const isBlankCell = cellText === '' || cellText === '____' || cellText === '_______' || cellText === '____________________';
                
                if (isBlankCell) {
                    // Check column header to decide numeric vs text
                    const isNumeric = colHeader.includes('gross') || 
                                      colHeader.includes('vat') || 
                                      colHeader.includes('net') || 
                                      colHeader.includes('amount') || 
                                      colHeader.includes('€') || 
                                      colHeader.includes('debit') || 
                                      colHeader.includes('credit') || 
                                      colHeader.includes('receipts') || 
                                      colHeader.includes('payments') || 
                                      colHeader.includes('balance') ||
                                      colHeader.includes('box');
                    
                    if (isNumeric) {
                        cell.innerHTML = `<input type="number" step="0.01" placeholder="0.00" class="form-input num-input" data-table="${tableIdx}" data-row="${rowIdx}" data-col="${colIdx}">`;
                    } else {
                        cell.innerHTML = `<input type="text" placeholder="..." class="form-input text-input" data-table="${tableIdx}" data-row="${rowIdx}" data-col="${colIdx}">`;
                    }
                }
            });
        });
        
        // Listen for input changes in the table
        table.addEventListener('input', (e) => {
            if (e.target.classList.contains('num-input')) {
                // Trigger recalculation of totals for this table
                recalculateTotalsForTable(table, tableIdx);
                
                // If it is the VAT Return Worksheet, run custom VAT math
                if (path.includes('blank-vat-return.md')) {
                    calculateVATReturnWorksheet(renderArea);
                }
                
                // If it is a Day Book, auto-fill standard VAT/Gross
                if (path.includes('blank-sales-daybook.md') || path.includes('blank-purchases-daybook.md')) {
                    calculateDaybookRow(e.target, table);
                }
            }
        });
    });
}

// Recalculate Column Totals for standard worksheets
function recalculateTotalsForTable(table, tableIdx) {
    const totalsCells = table.querySelectorAll(`.col-total[data-table="${tableIdx}"]`);
    
    totalsCells.forEach(totalCell => {
        const colIdx = parseInt(totalCell.dataset.col);
        let sum = 0;
        
        // Find all numeric inputs in the same column
        const colInputs = table.querySelectorAll(`input.num-input[data-table="${tableIdx}"][data-col="${colIdx}"]`);
        
        colInputs.forEach(input => {
            const val = parseFloat(input.value);
            if (!isNaN(val)) {
                sum += val;
            }
        });
        
        // Display value formatted
        totalCell.innerText = `€${sum.toFixed(2)}`;
    });
}

// Custom Helper: Auto Calculate Daybook Rows (Gross = Net + VAT)
function calculateDaybookRow(changedInput, table) {
    const rowIdx = changedInput.dataset.row;
    const colIdx = parseInt(changedInput.dataset.col);
    
    // Sales/Purchases Daybook columns: 
    // index 4: Gross, index 5: VAT, index 6: Net
    const netInput = table.querySelector(`input[data-row="${rowIdx}"][data-col="6"]`);
    const vatInput = table.querySelector(`input[data-row="${rowIdx}"][data-col="5"]`);
    const grossInput = table.querySelector(`input[data-row="${rowIdx}"][data-col="4"]`);
    
    if (!netInput || !vatInput || !grossInput) return;
    
    if (changedInput === netInput) {
        const netVal = parseFloat(netInput.value);
        if (!isNaN(netVal)) {
            // Auto fill 23% standard VAT and calculate gross
            const vatVal = Math.round(netVal * 23) / 100;
            vatInput.value = vatVal.toFixed(2);
            grossInput.value = (netVal + vatVal).toFixed(2);
        }
    } else if (changedInput === vatInput) {
        const netVal = parseFloat(netInput.value);
        const vatVal = parseFloat(vatInput.value);
        if (!isNaN(netVal) && !isNaN(vatVal)) {
            grossInput.value = (netVal + vatVal).toFixed(2);
        }
    } else if (changedInput === grossInput) {
        const grossVal = parseFloat(grossInput.value);
        if (!isNaN(grossVal)) {
            // Back calculate standard VAT
            const netVal = Math.round((grossVal / 1.23) * 100) / 100;
            netInput.value = netVal.toFixed(2);
            vatInput.value = (grossVal - netVal).toFixed(2);
        }
    }
    
    // Re-sum columns since row values changed programmatically
    const tableIdx = changedInput.dataset.table;
    recalculateTotalsForTable(table, parseInt(tableIdx));
}

// Custom Helper: VAT Return Worksheet Calculator (T1-T6 Boxes)
function calculateVATReturnWorksheet(renderArea) {
    // VAT on Sales (Table 0)
    // Categories:
    // row 0: Standard Sales (23%) Net (col 1), VAT (col 3)
    // row 1: Reduced Sales (13.5%) Net (col 1), VAT (col 3)
    // row 2: Second Reduced Sales (9%) Net (col 1), VAT (col 3)
    // row 3: Zero-Rated Net (col 1)
    
    const tables = renderArea.querySelectorAll('table');
    if (tables.length < 3) return;
    
    const salesTable = tables[0];
    const purchasesTable = tables[1];
    const summaryTable = tables[2];
    
    // 1. Sales Math
    const salesRows = salesTable.querySelectorAll('tbody tr');
    let t1_totalSales = 0;
    let t3_totalOutputVat = 0;
    
    // Standard Sales (row 0)
    const stdSalesNet = parseFloat(salesRows[0].querySelector('input[data-col="1"]')?.value || 0);
    const stdSalesVatInput = salesRows[0].querySelector('input[data-col="3"]');
    if (stdSalesNet && stdSalesVatInput && document.activeElement !== stdSalesVatInput) {
        stdSalesVatInput.value = (stdSalesNet * 0.23).toFixed(2);
    }
    const stdSalesVat = parseFloat(stdSalesVatInput?.value || 0);
    
    // Reduced Sales (row 1)
    const redSalesNet = parseFloat(salesRows[1].querySelector('input[data-col="1"]')?.value || 0);
    const redSalesVatInput = salesRows[1].querySelector('input[data-col="3"]');
    if (redSalesNet && redSalesVatInput && document.activeElement !== redSalesVatInput) {
        redSalesVatInput.value = (redSalesNet * 0.135).toFixed(2);
    }
    const redSalesVat = parseFloat(redSalesVatInput?.value || 0);
    
    // Second Reduced (row 2)
    const secSalesNet = parseFloat(salesRows[2].querySelector('input[data-col="1"]')?.value || 0);
    const secSalesVatInput = salesRows[2].querySelector('input[data-col="3"]');
    if (secSalesNet && secSalesVatInput && document.activeElement !== secSalesVatInput) {
        secSalesVatInput.value = (secSalesNet * 0.09).toFixed(2);
    }
    const secSalesVat = parseFloat(secSalesVatInput?.value || 0);
    
    // Zero-Rated (row 3)
    const zeroSalesNet = parseFloat(salesRows[3].querySelector('input[data-col="1"]')?.value || 0);
    
    t1_totalSales = stdSalesNet + redSalesNet + secSalesNet + zeroSalesNet;
    t3_totalOutputVat = stdSalesVat + redSalesVat + secSalesVat;
    
    // Render Sales Totals
    const salesTotalsCells = salesTable.querySelectorAll('.col-total');
    if (salesTotalsCells.length >= 2) {
        salesTotalsCells[0].innerText = `€${t1_totalSales.toFixed(2)}`; // Total Sales (T1)
        salesTotalsCells[1].innerText = `€${t3_totalOutputVat.toFixed(2)}`; // Total Output VAT (T3)
    }
    
    // 2. Purchases Math
    const purRows = purchasesTable.querySelectorAll('tbody tr');
    let t2_totalPurchases = 0;
    let t4_totalInputVat = 0;
    
    // Standard Purchases (row 0)
    const stdPurNet = parseFloat(purRows[0].querySelector('input[data-col="1"]')?.value || 0);
    const stdPurVatInput = purRows[0].querySelector('input[data-col="3"]');
    if (stdPurNet && stdPurVatInput && document.activeElement !== stdPurVatInput) {
        stdPurVatInput.value = (stdPurNet * 0.23).toFixed(2);
    }
    const stdPurVat = parseFloat(stdPurVatInput?.value || 0);
    
    // Reduced Purchases (row 1)
    const redPurNet = parseFloat(purRows[1].querySelector('input[data-col="1"]')?.value || 0);
    const redPurVatInput = purRows[1].querySelector('input[data-col="3"]');
    if (redPurNet && redPurVatInput && document.activeElement !== redPurVatInput) {
        redPurVatInput.value = (redPurNet * 0.135).toFixed(2);
    }
    const redPurVat = parseFloat(redPurVatInput?.value || 0);
    
    // Second Reduced Purchases (row 2)
    const secPurNet = parseFloat(purRows[2].querySelector('input[data-col="1"]')?.value || 0);
    const secPurVatInput = purRows[2].querySelector('input[data-col="3"]');
    if (secPurNet && secPurVatInput && document.activeElement !== secPurVatInput) {
        secPurVatInput.value = (secPurNet * 0.09).toFixed(2);
    }
    const secPurVat = parseFloat(secPurVatInput?.value || 0);
    
    // Zero Rated Purchases (row 3)
    const zeroPurNet = parseFloat(purRows[3].querySelector('input[data-col="1"]')?.value || 0);
    
    t2_totalPurchases = stdPurNet + redPurNet + secPurNet + zeroPurNet;
    t4_totalInputVat = stdPurVat + redPurVat + secPurVat;
    
    // Render Purchases Totals
    const purTotalsCells = purchasesTable.querySelectorAll('.col-total');
    if (purTotalsCells.length >= 2) {
        purTotalsCells[0].innerText = `€${t2_totalPurchases.toFixed(2)}`; // Total Purchases (T2)
        purTotalsCells[1].innerText = `€${t4_totalInputVat.toFixed(2)}`; // Total Input VAT (T4)
    }
    
    // 3. Summary Box Math (Table 2)
    // rows in summary:
    // row 0 (T1): Net Sales - col 2
    // row 1 (T2): Net Purchases - col 2
    // row 2 (T3): Output VAT - col 2
    // row 3 (T4): Input VAT - col 2
    // row 4 (T5): VAT Payable - col 2
    // row 5 (T6): VAT Refundable - col 2
    
    const summaryRows = summaryTable.querySelectorAll('tbody tr');
    
    // We can auto-render the summary box rows as read-only values based on T1-T4
    summaryRows[0].querySelectorAll('td')[2].innerText = `€${t1_totalSales.toFixed(2)}`;
    summaryRows[1].querySelectorAll('td')[2].innerText = `€${t2_totalPurchases.toFixed(2)}`;
    summaryRows[2].querySelectorAll('td')[2].innerText = `€${t3_totalOutputVat.toFixed(2)}`;
    summaryRows[3].querySelectorAll('td')[2].innerText = `€${t4_totalInputVat.toFixed(2)}`;
    
    let t5_payable = 0;
    let t6_refundable = 0;
    
    if (t3_totalOutputVat > t4_totalInputVat) {
        t5_payable = t3_totalOutputVat - t4_totalInputVat;
    } else {
        t6_refundable = t4_totalInputVat - t3_totalOutputVat;
    }
    
    summaryRows[4].querySelectorAll('td')[2].innerText = `€${t5_payable.toFixed(2)}`;
    summaryRows[5].querySelectorAll('td')[2].innerText = `€${t6_refundable.toFixed(2)}`;
}

// Window resize TOC handling
window.addEventListener('resize', () => {
    const readerToc = document.getElementById('readerToc');
    if (readerToc && state.currentPath && state.currentPath !== 'reference/glossary.md') {
        const headings = document.getElementById('renderedMarkdown').querySelectorAll('h2, h3');
        readerToc.style.display = (window.innerWidth > 1024 && headings.length > 0) ? 'block' : 'none';
    }
});
