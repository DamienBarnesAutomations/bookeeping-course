// QQI Level 5 Bookkeeping & Payroll Course - SPA Core Logic

// State Management
const state = {
    manifest: null,
    completedLessons: [],
    theme: 'dark',
    currentPath: '',
    interactiveMode: false,
    glossaryTerms: [],
    _rawGlossaryMarkdown: ''
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

// Returns 'bk', 'py', or null based on which module a file belongs to
function getModuleTag(categoryKey, file) {
    if (categoryKey === 'bookkeeping') return 'bk';
    if (categoryKey === 'payroll') return 'py';
    const text = (file.title + ' ' + file.path).toLowerCase();
    const hasBk = /bookkeeping|5n1354|journal|bank.rec|cash.book|ledger|daybook|petty.cash|trial.balance|vat.return|purchases|quickbooks|sage\s*50|full.project/.test(text);
    const hasPy = /payroll|5n1546|paye|p30|thesaurus/.test(text);
    if (hasBk && hasPy) return null;
    if (hasPy) return 'py';
    if (hasBk) return 'bk';
    return null;
}

// Render Sidebar Navigation
function renderSidebar() {
    const navContainer = document.getElementById('sidebarNav');
    navContainer.innerHTML = ''; // Clear loading spinner

    const collapsedGroups = new Set(JSON.parse(localStorage.getItem('collapsedSidebarGroups') || '[]'));
    const activeCategoryKey = state.currentPath ? state.currentPath.split('/')[0] : null;

    // Group Categories in Sidebar
    for (const [key, category] of Object.entries(state.manifest.categories)) {
        const groupEl = document.createElement('div');
        groupEl.className = 'sidebar-group';
        groupEl.dataset.categoryKey = key;

        // Collapse if user previously collapsed it, but always expand the active category
        if (collapsedGroups.has(key) && key !== activeCategoryKey) {
            groupEl.classList.add('collapsed');
        }

        const titleEl = document.createElement('div');
        titleEl.className = 'sidebar-group-title';
        titleEl.innerHTML = `<span>${category.title.split('(')[0].trim()}</span><i data-lucide="chevron-down" class="sidebar-group-chevron"></i>`;
        titleEl.addEventListener('click', () => {
            const nowCollapsed = groupEl.classList.toggle('collapsed');
            if (nowCollapsed) collapsedGroups.add(key); else collapsedGroups.delete(key);
            localStorage.setItem('collapsedSidebarGroups', JSON.stringify([...collapsedGroups]));
            lucide.createIcons();
        });
        groupEl.appendChild(titleEl);

        const listEl = document.createElement('ul');
        listEl.className = 'sidebar-group-list';

        category.files.forEach(file => {
            const isCompleted = state.completedLessons.includes(file.path);
            const tag = getModuleTag(key, file);
            const badgeHtml = tag ? `<span class="module-badge ${tag}">${tag.toUpperCase()}</span>` : '';
            const itemEl = document.createElement('li');
            itemEl.innerHTML = `
                <a href="#${file.path}" class="sidebar-link ${isCompleted ? 'completed' : ''}" data-path="${file.path}">
                    <span class="sidebar-link-text">${file.title}</span>
                    ${badgeHtml}
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
        
        // Highlight active link in sidebar and expand its group
        document.querySelectorAll('.sidebar-link').forEach(link => {
            if (link.getAttribute('href') === `#${hash}`) {
                link.classList.add('active');
                // Expand the parent group if collapsed
                const group = link.closest('.sidebar-group');
                if (group && group.classList.contains('collapsed')) {
                    group.classList.remove('collapsed');
                    const key = group.dataset.categoryKey;
                    if (key) {
                        const stored = new Set(JSON.parse(localStorage.getItem('collapsedSidebarGroups') || '[]'));
                        stored.delete(key);
                        localStorage.setItem('collapsedSidebarGroups', JSON.stringify([...stored]));
                    }
                }
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
        
        // Check for quiz scores for this category
        const savedScores = JSON.parse(localStorage.getItem('quiz_scores') || '{}');
        let quizScoreBadge = '';
        if (key === 'quizzes') {
            const scores = category.files.map(f => savedScores[f.path]).filter(Boolean);
            if (scores.length > 0) {
                const bestPct = Math.max(...scores.map(s => s.percentage));
                quizScoreBadge = `<span class="quiz-badge">Best: ${bestPct}%</span>`;
            }
        }

        const moduleTags = [...new Set(category.files.map(f => getModuleTag(key, f)).filter(Boolean))];
        const cardBadgesHtml = moduleTags.map(t => `<span class="module-badge ${t}">${t.toUpperCase()}</span>`).join('');

        const card = document.createElement('div');
        card.className = 'bento-card';
        card.innerHTML = `
            <div class="bento-card-header">
                <div class="bento-card-icon-wrapper">
                    <i data-lucide="${category.icon || 'book-open'}"></i>
                </div>
                <div class="bento-card-progress">${completed}/${category.files.length} Done${quizScoreBadge}</div>
            </div>
            <div class="bento-card-body">
                <h4>${category.title}</h4>
                <p>${category.description}</p>
                ${cardBadgesHtml ? `<div class="bento-card-modules">${cardBadgesHtml}</div>` : ''}
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

    // Handle special non-file routes (no fetch needed)
    if (path === 'tools/paye-calculator') { renderPAYECalculator(); return; }
    if (path === 'tools/journal-practice') { renderJournalPractice(); return; }
    if (path === 'tools/payroll-worksheet') { renderPayrollWorksheet(); return; }
    if (path === 'tools/bank-rec-practice') { renderBankRecPractice(); return; }
    if (path === 'tools/full-project') { renderInteractiveProject(); return; }

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

        // Intercept JSON quiz files
        if (path.endsWith('.json')) {
            const quizData = JSON.parse(markdownText);
            const categoryKey = path.split('/')[0];
            const categoryTitle = state.manifest.categories[categoryKey]?.title || 'Knowledge Checks';
            const fileObj = state.manifest.categories[categoryKey]?.files.find(f => f.path === path);
            updateBreadcrumbs(categoryTitle, fileObj?.title || 'Quiz');
            setupPagination(path);
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
            renderQuizPage(quizData, path);
            lucide.createIcons();
            return;
        }

        // Intercept and load custom glossary UI if it is the glossary file
        if (path === 'reference/glossary.md') {
            document.getElementById('interactiveModeContainer').style.display = 'none';
            document.getElementById('resetInteractiveBtn').style.display = 'none';
            state._rawGlossaryMarkdown = markdownText;
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
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px; flex-wrap: wrap;">
            <div class="glossary-search-container" style="flex: 1; margin-bottom: 0;">
                <div class="glossary-input-wrapper">
                    <i data-lucide="search"></i>
                    <input type="text" class="glossary-search-input" id="glossarySearch" placeholder="Type a term to filter (e.g. VAT, PRSI, Ledger)...">
                </div>
            </div>
            <button class="btn btn-outline" id="flashcardModeBtn" title="Switch to Flashcard mode">
                <i data-lucide="layers"></i> Flashcard Mode
            </button>
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

    document.getElementById('flashcardModeBtn')?.addEventListener('click', () => {
        renderGlossaryFlashcards(state.glossaryTerms);
    });

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

// =============================================
// JOURNAL ENTRY PRACTICE
// =============================================

async function renderJournalPractice() {
    const renderArea = document.getElementById('renderedMarkdown');
    document.getElementById('readerToc').style.display = 'none';
    document.getElementById('interactiveModeContainer').style.display = 'none';
    document.getElementById('resetInteractiveBtn').style.display = 'none';
    updateBreadcrumbs('Interactive Tools', 'Journal Entry Practice');
    setupMarkReadBtn(state.currentPath);

    renderArea.innerHTML = `<div style="padding:60px;text-align:center;color:var(--text-secondary)"><div class="spinner"></div><p style="margin-top:12px">Loading scenarios...</p></div>`;

    const data = await fetch('./tools/journal-scenarios.json').then(r => r.json());
    let currentIdx = 0;
    let score = 0;

    function renderScenario() {
        const s = data.scenarios[currentIdx];
        const progress = Math.round((currentIdx / data.scenarios.length) * 100);
        const rowsHTML = s.entries.map((_, i) => `
            <tr class="je-row" data-row="${i}">
                <td><input type="text" class="je-input je-account" placeholder="Account name..." data-row="${i}" autocomplete="off"></td>
                <td><input type="number" class="je-input je-debit" placeholder="" step="0.01" data-row="${i}"></td>
                <td><input type="number" class="je-input je-credit" placeholder="" step="0.01" data-row="${i}"></td>
            </tr>
        `).join('');

        renderArea.innerHTML = `
            <div class="quiz-container">
                <div class="quiz-header">
                    <h2>${data.title}</h2>
                    <p>${data.description}</p>
                    <div class="quiz-progress-track"><div class="quiz-progress-fill" style="width:${progress}%"></div></div>
                    <div class="quiz-meta">Transaction ${currentIdx + 1} of ${data.scenarios.length}</div>
                </div>
                <div class="quiz-question-card">
                    <p class="je-transaction-label">Transaction</p>
                    <p class="quiz-question-text">${s.scenario}</p>
                    ${s.hint ? `<div class="je-hint"><i data-lucide="lightbulb"></i><span>${s.hint}</span></div>` : ''}
                    <div class="je-table-wrap">
                        <table class="je-table">
                            <thead><tr><th>Account Name</th><th>Debit (€)</th><th>Credit (€)</th></tr></thead>
                            <tbody id="jeBody">${rowsHTML}</tbody>
                        </table>
                    </div>
                    <div class="je-footer">
                        <div class="je-balance-bar" id="jeBalanceBar">
                            <span>Dr: <strong id="jeDr">€0.00</strong></span>
                            <span class="je-sep">|</span>
                            <span>Cr: <strong id="jeCr">€0.00</strong></span>
                            <span class="je-balance-status" id="jeBalStatus"></span>
                        </div>
                        <button class="btn btn-primary" id="jeCheckBtn"><i data-lucide="check-circle"></i> Check Entry</button>
                    </div>
                    <div id="jeFeedback" style="display:none;margin-top:20px;"></div>
                    <div id="jeNextWrap" style="display:none;margin-top:16px;justify-content:flex-end;display:none">
                        <button class="btn btn-primary" id="jeNextBtn">
                            ${currentIdx + 1 < data.scenarios.length ? 'Next Transaction' : 'See Results'}
                            <i data-lucide="arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>`;

        lucide.createIcons();
        document.querySelector('.app-main').scrollTop = 0;

        // Live debit/credit balance tracker
        renderArea.addEventListener('input', updateBalance);
        function updateBalance() {
            let dr = 0, cr = 0;
            renderArea.querySelectorAll('.je-debit').forEach(i => dr += parseFloat(i.value) || 0);
            renderArea.querySelectorAll('.je-credit').forEach(i => cr += parseFloat(i.value) || 0);
            document.getElementById('jeDr').textContent = `€${dr.toFixed(2)}`;
            document.getElementById('jeCr').textContent = `€${cr.toFixed(2)}`;
            const balanced = dr > 0 && Math.abs(dr - cr) < 0.02;
            const statusEl = document.getElementById('jeBalStatus');
            statusEl.textContent = dr === 0 ? '' : balanced ? '✓ Balanced' : '✗ Not balanced';
            statusEl.className = `je-balance-status ${balanced ? 'balanced' : dr > 0 ? 'unbalanced' : ''}`;
        }

        document.getElementById('jeCheckBtn').addEventListener('click', () => checkEntry(s));
    }

    function checkEntry(s) {
        const rowEls = renderArea.querySelectorAll('.je-row');
        const studentEntries = Array.from(rowEls).map(row => ({
            account: (row.querySelector('.je-account').value || '').toLowerCase().trim(),
            debit: parseFloat(row.querySelector('.je-debit').value) || 0,
            credit: parseFloat(row.querySelector('.je-credit').value) || 0,
        }));

        // Match each student row to an expected entry (greedy, first match wins)
        const usedExpected = new Array(s.entries.length).fill(false);
        const results = studentEntries.map(se => {
            for (let i = 0; i < s.entries.length; i++) {
                if (usedExpected[i]) continue;
                const exp = s.entries[i];
                const kwMatch = exp.acceptedKeywords.some(kw => se.account.includes(kw));
                const studentAmt = exp.side === 'debit' ? se.debit : se.credit;
                const wrongSide = exp.side === 'debit' ? se.credit : se.debit;
                const amtMatch = Math.abs(studentAmt - exp.amount) <= 0.02;
                const sideOk = studentAmt > 0 && wrongSide === 0;
                if (kwMatch && amtMatch && sideOk) { usedExpected[i] = true; return { correct: true }; }
            }
            return { correct: false };
        });

        const correctCount = results.filter(r => r.correct).length;
        if (correctCount === s.entries.length) score++;

        // Disable inputs and colour rows
        renderArea.querySelectorAll('.je-input').forEach(el => el.disabled = true);
        document.getElementById('jeCheckBtn').disabled = true;
        rowEls.forEach((row, i) => row.classList.add(results[i]?.correct ? 'je-correct' : 'je-incorrect'));

        // Model answer
        const modelRows = s.entries.map(e => `
            <div class="je-model-row">
                <span class="je-model-account">${e.accountLabel}</span>
                <span class="je-model-amt">${e.side === 'debit' ? `€${e.amount.toFixed(2)}` : ''}</span>
                <span class="je-model-amt">${e.side === 'credit' ? `€${e.amount.toFixed(2)}` : ''}</span>
            </div>`).join('');

        const feedbackEl = document.getElementById('jeFeedback');
        feedbackEl.style.display = 'block';
        feedbackEl.innerHTML = `
            <div class="quiz-explanation ${correctCount === s.entries.length ? 'correct-exp' : 'incorrect-exp'}">
                <span class="exp-label">${correctCount === s.entries.length ? '✓ Correct entry!' : `${correctCount} of ${s.entries.length} entries correct`}</span>
                <p style="margin-bottom:12px">${s.explanation}</p>
                <div class="je-model-header"><span>Model Answer</span><span>Dr</span><span>Cr</span></div>
                ${modelRows}
            </div>`;

        const nextWrap = document.getElementById('jeNextWrap');
        nextWrap.style.display = 'flex';
        document.getElementById('jeNextBtn').addEventListener('click', () => {
            currentIdx++;
            currentIdx >= data.scenarios.length ? renderJournalScore() : renderScenario();
        });
    }

    function renderJournalScore() {
        const pct = Math.round((score / data.scenarios.length) * 100);
        const passed = pct >= 70;
        renderArea.innerHTML = `
            <div class="quiz-score-card">
                <div class="score-circle ${passed ? 'pass' : 'fail'}">${pct}%</div>
                <h2>${passed ? 'Good Work!' : 'Keep Practising!'}</h2>
                <p>You got <strong>${score} of ${data.scenarios.length}</strong> entries fully correct.</p>
                <div class="score-breakdown">
                    <div class="score-stat"><div class="score-stat-value" style="color:var(--accent-success)">${score}</div><div class="score-stat-label">Correct</div></div>
                    <div class="score-stat"><div class="score-stat-value" style="color:#ef4444">${data.scenarios.length - score}</div><div class="score-stat-label">Incorrect</div></div>
                </div>
                <div class="score-actions">
                    <button class="btn btn-outline" id="retryJournalBtn"><i data-lucide="rotate-ccw"></i> Try Again</button>
                </div>
            </div>`;
        lucide.createIcons();
        document.getElementById('retryJournalBtn').addEventListener('click', () => { currentIdx = 0; score = 0; renderScenario(); });
        document.querySelector('.app-main').scrollTop = 0;
    }

    renderScenario();
    setupPagination(state.currentPath);
}

// =============================================
// MANUAL PAYROLL WORKSHEET
// =============================================

async function renderPayrollWorksheet() {
    const renderArea = document.getElementById('renderedMarkdown');
    document.getElementById('readerToc').style.display = 'none';
    document.getElementById('interactiveModeContainer').style.display = 'none';
    document.getElementById('resetInteractiveBtn').style.display = 'none';
    updateBreadcrumbs('Interactive Tools', 'Manual Payroll Worksheet');
    setupMarkReadBtn(state.currentPath);

    renderArea.innerHTML = `<div style="padding:60px;text-align:center;color:var(--text-secondary)"><div class="spinner"></div><p style="margin-top:12px">Loading...</p></div>`;

    const data = await fetch('./tools/payroll-scenarios.json').then(r => r.json());
    let currentIdx = 0;

    function renderScenario() {
        const s = data.scenarios[currentIdx];
        const g = s.given;
        const progress = Math.round((currentIdx / data.scenarios.length) * 100);

        const givenData = [
            ['Employee', g.employee],
            ['PPS Number', g.ppsNumber],
            ['Pay Week', `Week ${g.week}`],
            ['Weekly SRCOP', `€${g.weeklySRCOP.toFixed(2)}`],
            ['Weekly Tax Credits', `€${g.weeklyCredits.toFixed(2)}`],
            ['PRSI Class', `Class A — ${g.prsiRate}%`],
            ...(g.prevCumulativeGross > 0 ? [[`Previous Cumulative Gross (Weeks 1–${g.week - 1})`, `€${g.prevCumulativeGross.toFixed(2)}`]] : []),
            ...(g.prevPAYEPaid ? [['PAYE Already Paid (Previous Weeks)', `€${g.prevPAYEPaid.toFixed(2)}`]] : [])
        ];
        const givenRows = givenData.map(([k, v]) => `<tr><td class="pw-given-label">${k}</td><td class="pw-given-value">${v}</td></tr>`).join('');

        const stepRows = s.steps.map((step, i) => step.given
            ? `<tr class="pw-row pw-given-row">
                <td class="pw-step-label">${step.label}</td>
                <td class="pw-step-cell"><span class="pw-given-amt">€${step.value.toFixed(2)}</span></td>
               </tr>`
            : `<tr class="pw-row" data-idx="${i}" data-answer="${step.value}">
                <td class="pw-step-label">${step.label}</td>
                <td class="pw-step-cell">
                    <div class="pw-input-wrap">
                        <span class="pw-euro">€</span>
                        <input type="number" step="0.01" class="pw-input" data-idx="${i}" placeholder="0.00">
                        <span class="pw-status" id="pwStatus${i}"></span>
                    </div>
                </td>
               </tr>`
        ).join('');

        renderArea.innerHTML = `
            <div class="quiz-container">
                <div class="quiz-header">
                    <h2>${data.title}</h2>
                    <p>${data.description}</p>
                    <div class="quiz-progress-track"><div class="quiz-progress-fill" style="width:${progress}%"></div></div>
                    <div class="quiz-meta">Scenario ${currentIdx + 1} of ${data.scenarios.length}: ${s.title}</div>
                </div>
                <div class="quiz-question-card">
                    <p style="font-size:0.8rem;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:var(--text-muted);margin-bottom:8px">Context</p>
                    <p style="margin-bottom:20px;color:var(--text-secondary)">${s.context}</p>
                    <table class="pw-given-table">
                        <thead><tr><th colspan="2">Employee Details (Given)</th></tr></thead>
                        <tbody>${givenRows}</tbody>
                    </table>
                    <p style="font-size:0.8rem;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:var(--text-muted);margin:24px 0 8px">Complete the Payslip</p>
                    <table class="pw-table">
                        <thead><tr><th>Calculation</th><th>Amount (€)</th></tr></thead>
                        <tbody>${stepRows}</tbody>
                    </table>
                    <div class="je-footer" style="margin-top:20px">
                        <div></div>
                        <button class="btn btn-primary" id="pwCheckBtn"><i data-lucide="check-circle"></i> Check Payslip</button>
                    </div>
                    <div id="pwFeedback" style="display:none;margin-top:20px"></div>
                    <div id="pwNextWrap" style="display:none;justify-content:flex-end;margin-top:16px">
                        <button class="btn btn-primary" id="pwNextBtn">
                            ${currentIdx + 1 < data.scenarios.length ? 'Next Scenario' : 'Finish'}
                            <i data-lucide="arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>`;

        lucide.createIcons();
        document.querySelector('.app-main').scrollTop = 0;

        // Live check on each input as user types
        renderArea.querySelectorAll('.pw-input').forEach(input => {
            input.addEventListener('blur', () => liveCheckField(input));
        });

        document.getElementById('pwCheckBtn').addEventListener('click', () => checkPayslip(s));
    }

    function liveCheckField(input) {
        const idx = parseInt(input.dataset.idx);
        const answer = parseFloat(input.closest('tr').dataset.answer);
        const val = parseFloat(input.value);
        const statusEl = document.getElementById(`pwStatus${idx}`);
        if (isNaN(val) || input.value === '') { statusEl.textContent = ''; statusEl.className = 'pw-status'; return; }
        const correct = Math.abs(val - answer) <= 0.02;
        statusEl.textContent = correct ? '✓' : '✗';
        statusEl.className = `pw-status ${correct ? 'pw-correct' : 'pw-incorrect'}`;
    }

    function checkPayslip(s) {
        let correctCount = 0;
        let totalInputs = 0;
        const explanations = [];

        s.steps.forEach((step, i) => {
            if (step.given) return;
            totalInputs++;
            const input = renderArea.querySelector(`.pw-input[data-idx="${i}"]`);
            const val = parseFloat(input?.value) || 0;
            const correct = Math.abs(val - step.value) <= 0.02;
            if (correct) correctCount++;

            input.disabled = true;
            const statusEl = document.getElementById(`pwStatus${i}`);
            statusEl.textContent = correct ? '✓' : `✗ → €${step.value.toFixed(2)}`;
            statusEl.className = `pw-status ${correct ? 'pw-correct' : 'pw-incorrect'}`;

            if (!correct) {
                explanations.push(`<div class="pw-exp-item"><strong>${step.label}:</strong> ${step.explanation}</div>`);
            }
        });

        document.getElementById('pwCheckBtn').disabled = true;

        const feedbackEl = document.getElementById('pwFeedback');
        feedbackEl.style.display = 'block';
        const allCorrect = correctCount === totalInputs;
        feedbackEl.innerHTML = `
            <div class="quiz-explanation ${allCorrect ? 'correct-exp' : 'incorrect-exp'}">
                <span class="exp-label">${allCorrect ? '✓ Perfect payslip!' : `${correctCount} of ${totalInputs} steps correct`}</span>
                ${explanations.length > 0 ? `<p style="margin-bottom:10px">Review the highlighted steps:</p>${explanations.join('')}` : '<p>Every calculation is spot on — well done!</p>'}
            </div>`;

        const nextWrap = document.getElementById('pwNextWrap');
        nextWrap.style.display = 'flex';
        document.getElementById('pwNextBtn').addEventListener('click', () => {
            currentIdx++;
            currentIdx >= data.scenarios.length ? renderPayrollDone() : renderScenario();
        });
    }

    function renderPayrollDone() {
        renderArea.innerHTML = `
            <div class="quiz-score-card">
                <div class="score-circle pass">Done</div>
                <h2>Payroll Scenarios Complete</h2>
                <p>You've worked through both the Week 1 (simple) and Week 3 (cumulative) scenarios. The key difference: PAYE is cumulative, PRSI and USC are not.</p>
                <div class="score-actions">
                    <button class="btn btn-outline" id="retryPayrollBtn"><i data-lucide="rotate-ccw"></i> Start Over</button>
                </div>
            </div>`;
        lucide.createIcons();
        document.getElementById('retryPayrollBtn').addEventListener('click', () => { currentIdx = 0; renderScenario(); });
    }

    renderScenario();
    setupPagination(state.currentPath);
}

// =============================================
// BANK RECONCILIATION BUILDER
// =============================================

async function renderBankRecPractice() {
    const renderArea = document.getElementById('renderedMarkdown');
    document.getElementById('readerToc').style.display = 'none';
    document.getElementById('interactiveModeContainer').style.display = 'none';
    document.getElementById('resetInteractiveBtn').style.display = 'none';
    updateBreadcrumbs('Interactive Tools', 'Bank Reconciliation Builder');
    setupMarkReadBtn(state.currentPath);

    renderArea.innerHTML = `<div style="padding:60px;text-align:center;color:var(--text-secondary)"><div class="spinner"></div><p style="margin-top:12px">Loading...</p></div>`;

    const data = await fetch('./tools/bank-rec-scenarios.json').then(r => r.json());
    let currentIdx = 0;

    function renderScenario() {
        const s = data.scenarios[currentIdx];
        const progress = Math.round((currentIdx / data.scenarios.length) * 100);

        const itemRows = s.items.map(item => `
            <tr class="br-item-row" data-id="${item.id}" data-type="${item.type}">
                <td class="br-item-ref">${item.id}</td>
                <td class="br-item-desc">${item.description}</td>
                <td>
                    <select class="br-select" data-id="${item.id}">
                        <option value="">— Select category —</option>
                        <option value="unpresented_cheque">Unpresented Cheque</option>
                        <option value="outstanding_lodgement">Outstanding Lodgement</option>
                        <option value="not_in_cashbook_deduction">Not in Cash Book (deduction)</option>
                        <option value="not_in_cashbook_addition">Not in Cash Book (addition)</option>
                        <option value="in_both">In both — no action needed</option>
                    </select>
                </td>
            </tr>`).join('');

        // Build blank bank rec statement rows
        const cb = s.cashBookAdjustments;
        const br = s.bankRecStatement;

        renderArea.innerHTML = `
            <div class="quiz-container">
                <div class="quiz-header">
                    <h2>${data.title}</h2>
                    <p>${data.description}</p>
                    <div class="quiz-progress-track"><div class="quiz-progress-fill" style="width:${progress}%"></div></div>
                    <div class="quiz-meta">Scenario ${currentIdx + 1} of ${data.scenarios.length}: ${s.title}</div>
                </div>
                <div class="quiz-question-card">
                    <p style="color:var(--text-secondary);margin-bottom:20px">${s.context}</p>

                    <div class="br-balances">
                        <div class="br-balance-card">
                            <div class="br-balance-label">Cash Book Balance</div>
                            <div class="br-balance-value">€${s.cashBookBalance.toFixed(2)}</div>
                        </div>
                        <div class="br-balance-card">
                            <div class="br-balance-label">Bank Statement Balance</div>
                            <div class="br-balance-value">€${s.bankStatementBalance.toFixed(2)}</div>
                        </div>
                    </div>

                    <p style="font-size:0.8rem;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:var(--text-muted);margin:24px 0 10px">Step 1 — Categorise Each Item</p>
                    <table class="br-items-table">
                        <thead><tr><th>Ref</th><th>Description</th><th>Category</th></tr></thead>
                        <tbody>${itemRows}</tbody>
                    </table>

                    <p style="font-size:0.8rem;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:var(--text-muted);margin:28px 0 10px">Step 2 — Update the Cash Book Balance</p>
                    <table class="pw-table">
                        <thead><tr><th>Description</th><th>Amount (€)</th></tr></thead>
                        <tbody>
                            <tr class="pw-given-row"><td class="pw-step-label">Balance per Cash Book</td><td class="pw-step-cell"><span class="pw-given-amt">€${cb.startBalance.toFixed(2)}</span></td></tr>
                            ${cb.additions.map((a, i) => `
                            <tr class="pw-row" data-answer="${a.amount}">
                                <td class="pw-step-label">${a.label}</td>
                                <td class="pw-step-cell"><div class="pw-input-wrap"><span class="pw-euro">€</span><input type="number" step="0.01" class="pw-input br-cb-add" data-i="${i}" placeholder="0.00"><span class="pw-status" id="cbAddStatus${i}"></span></div></td>
                            </tr>`).join('')}
                            ${cb.deductions.map((d, i) => `
                            <tr class="pw-row" data-answer="${d.amount}">
                                <td class="pw-step-label">${d.label}</td>
                                <td class="pw-step-cell"><div class="pw-input-wrap"><span class="pw-euro">(€</span><input type="number" step="0.01" class="pw-input br-cb-ded" data-i="${i}" placeholder="0.00"><span class="pw-euro">)</span><span class="pw-status" id="cbDedStatus${i}"></span></div></td>
                            </tr>`).join('')}
                            <tr class="pw-given-row" style="border-top:2px solid var(--border-color)">
                                <td class="pw-step-label" style="font-weight:700;color:var(--text-primary)">Updated Cash Book Balance</td>
                                <td class="pw-step-cell"><div class="pw-input-wrap"><span class="pw-euro">€</span><input type="number" step="0.01" class="pw-input" id="cbFinalInput" placeholder="0.00"><span class="pw-status" id="cbFinalStatus"></span></div></td>
                            </tr>
                        </tbody>
                    </table>

                    <p style="font-size:0.8rem;font-weight:700;text-transform:uppercase;letter-spacing:.06em;color:var(--text-muted);margin:28px 0 10px">Step 3 — Bank Reconciliation Statement</p>
                    <table class="pw-table">
                        <thead><tr><th>Description</th><th>Amount (€)</th></tr></thead>
                        <tbody>
                            <tr class="pw-given-row"><td class="pw-step-label">Balance per Bank Statement</td><td class="pw-step-cell"><span class="pw-given-amt">€${br.startBalance.toFixed(2)}</span></td></tr>
                            ${br.additions.map((a, i) => `
                            <tr class="pw-row" data-answer="${a.amount}">
                                <td class="pw-step-label">${a.label}</td>
                                <td class="pw-step-cell"><div class="pw-input-wrap"><span class="pw-euro">€</span><input type="number" step="0.01" class="pw-input br-bs-add" data-i="${i}" placeholder="0.00"><span class="pw-status" id="bsAddStatus${i}"></span></div></td>
                            </tr>`).join('')}
                            ${br.deductions.map((d, i) => `
                            <tr class="pw-row" data-answer="${d.amount}">
                                <td class="pw-step-label">${d.label}</td>
                                <td class="pw-step-cell"><div class="pw-input-wrap"><span class="pw-euro">(€</span><input type="number" step="0.01" class="pw-input br-bs-ded" data-i="${i}" placeholder="0.00"><span class="pw-euro">)</span><span class="pw-status" id="bsDedStatus${i}"></span></div></td>
                            </tr>`).join('')}
                            <tr class="pw-given-row" style="border-top:2px solid var(--border-color)">
                                <td class="pw-step-label" style="font-weight:700;color:var(--text-primary)">Adjusted Bank Balance (should equal updated Cash Book)</td>
                                <td class="pw-step-cell"><div class="pw-input-wrap"><span class="pw-euro">€</span><input type="number" step="0.01" class="pw-input" id="bsFinalInput" placeholder="0.00"><span class="pw-status" id="bsFinalStatus"></span></div></td>
                            </tr>
                        </tbody>
                    </table>

                    <div class="je-footer" style="margin-top:24px"><div></div>
                        <button class="btn btn-primary" id="brCheckBtn"><i data-lucide="check-circle"></i> Check Reconciliation</button>
                    </div>
                    <div id="brFeedback" style="display:none;margin-top:20px"></div>
                    <div id="brNextWrap" style="display:none;justify-content:flex-end;margin-top:16px">
                        <button class="btn btn-primary" id="brNextBtn">
                            ${currentIdx + 1 < data.scenarios.length ? 'Next Scenario' : 'Finish'}
                            <i data-lucide="arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>`;

        lucide.createIcons();
        document.querySelector('.app-main').scrollTop = 0;
        document.getElementById('brCheckBtn').addEventListener('click', () => checkBankRec(s));
    }

    function checkBankRec(s) {
        let correct = 0;
        let total = 0;
        const feedback = [];

        // Check item categorisation
        const selects = renderArea.querySelectorAll('.br-select');
        selects.forEach(sel => {
            const id = sel.dataset.id;
            const item = s.items.find(i => i.id === id);
            const row = sel.closest('tr');
            total++;
            if (sel.value === item.type) {
                correct++;
                row.classList.add('je-correct');
            } else {
                row.classList.add('je-incorrect');
                feedback.push(`<div class="pw-exp-item"><strong>Item ${id} — ${item.label}:</strong> ${s.explanations[item.type]}</div>`);
            }
            sel.disabled = true;
        });

        // Check cash book adjustments
        const checkInput = (inputEl, statusId, answer) => {
            if (!inputEl) return;
            total++;
            const val = parseFloat(inputEl.value) || 0;
            const ok = Math.abs(val - answer) <= 0.02;
            if (ok) correct++;
            inputEl.disabled = true;
            const st = document.getElementById(statusId);
            if (st) { st.textContent = ok ? '✓' : `✗ → €${answer.toFixed(2)}`; st.className = `pw-status ${ok ? 'pw-correct' : 'pw-incorrect'}`; }
        };

        s.cashBookAdjustments.additions.forEach((a, i) => checkInput(renderArea.querySelector(`.br-cb-add[data-i="${i}"]`), `cbAddStatus${i}`, a.amount));
        s.cashBookAdjustments.deductions.forEach((d, i) => checkInput(renderArea.querySelector(`.br-cb-ded[data-i="${i}"]`), `cbDedStatus${i}`, d.amount));
        checkInput(document.getElementById('cbFinalInput'), 'cbFinalStatus', s.cashBookAdjustments.updatedBalance);

        s.bankRecStatement.additions.forEach((a, i) => checkInput(renderArea.querySelector(`.br-bs-add[data-i="${i}"]`), `bsAddStatus${i}`, a.amount));
        s.bankRecStatement.deductions.forEach((d, i) => checkInput(renderArea.querySelector(`.br-bs-ded[data-i="${i}"]`), `bsDedStatus${i}`, d.amount));
        checkInput(document.getElementById('bsFinalInput'), 'bsFinalStatus', s.bankRecStatement.adjustedBalance);

        document.getElementById('brCheckBtn').disabled = true;

        const feedbackEl = document.getElementById('brFeedback');
        feedbackEl.style.display = 'block';
        const allOk = correct === total;
        feedbackEl.innerHTML = `
            <div class="quiz-explanation ${allOk ? 'correct-exp' : 'incorrect-exp'}">
                <span class="exp-label">${allOk ? '✓ Perfect reconciliation!' : `${correct} of ${total} items correct`}</span>
                ${feedback.length ? `<p style="margin-bottom:10px">Review the incorrect items:</p>${feedback.join('')}` : '<p>Outstanding — all items correctly categorised and calculated!</p>'}
                <p style="margin-top:12px"><strong>Key principle:</strong> The updated Cash Book balance and the adjusted Bank Statement balance must agree. If they don't, keep looking for differences!</p>
            </div>`;

        const nextWrap = document.getElementById('brNextWrap');
        nextWrap.style.display = 'flex';
        document.getElementById('brNextBtn').addEventListener('click', () => {
            currentIdx++;
            currentIdx >= data.scenarios.length ? renderBankRecDone() : renderScenario();
        });
    }

    function renderBankRecDone() {
        renderArea.innerHTML = `
            <div class="quiz-score-card">
                <div class="score-circle pass">Done</div>
                <h2>Bank Rec Scenarios Complete</h2>
                <p>Both scenarios done. The golden rule: <strong>Updated Cash Book = Adjusted Bank Statement</strong>. Always.</p>
                <div class="score-actions">
                    <button class="btn btn-outline" id="retryBrBtn"><i data-lucide="rotate-ccw"></i> Start Over</button>
                </div>
            </div>`;
        lucide.createIcons();
        document.getElementById('retryBrBtn').addEventListener('click', () => { currentIdx = 0; renderScenario(); });
    }

    renderScenario();
    setupPagination(state.currentPath);
}

// Shared helper: set Mark Complete button state
function setupMarkReadBtn(path) {
    const markReadBtn = document.getElementById('markReadBtn');
    const isDone = state.completedLessons.includes(path);
    markReadBtn.classList.toggle('btn-primary', isDone);
    markReadBtn.classList.toggle('btn-outline', !isDone);
    markReadBtn.innerHTML = isDone
        ? '<i data-lucide="check-circle"></i> <span id="markReadText">Completed</span>'
        : '<i data-lucide="circle"></i> <span id="markReadText">Mark Complete</span>';
    lucide.createIcons();
}

// Window resize TOC handling
window.addEventListener('resize', () => {
    const readerToc = document.getElementById('readerToc');
    if (readerToc && state.currentPath && state.currentPath !== 'reference/glossary.md') {
        const headings = document.getElementById('renderedMarkdown').querySelectorAll('h2, h3');
        readerToc.style.display = (window.innerWidth > 1024 && headings.length > 0) ? 'block' : 'none';
    }
});

// =============================================
// QUIZ SYSTEM
// =============================================

function renderQuizPage(quizData, path) {
    const renderArea = document.getElementById('renderedMarkdown');
    document.getElementById('readerToc').style.display = 'none';
    document.getElementById('interactiveModeContainer').style.display = 'none';
    document.getElementById('resetInteractiveBtn').style.display = 'none';

    const savedScores = JSON.parse(localStorage.getItem('quiz_scores') || '{}');
    let currentQuestion = 0;
    let score = 0;
    let answered = false;

    function renderQuestion() {
        if (currentQuestion >= quizData.questions.length) {
            renderScore();
            return;
        }

        const q = quizData.questions[currentQuestion];
        const progress = Math.round((currentQuestion / quizData.questions.length) * 100);

        renderArea.innerHTML = `
            <div class="quiz-container">
                <div class="quiz-header">
                    <h2>${quizData.title}</h2>
                    <p>${quizData.description}</p>
                    <div class="quiz-progress-track">
                        <div class="quiz-progress-fill" style="width: ${progress}%"></div>
                    </div>
                    <div class="quiz-meta">Question ${currentQuestion + 1} of ${quizData.questions.length}</div>
                </div>
                <div class="quiz-question-card">
                    <p class="quiz-question-text">${q.question}</p>
                    <div class="quiz-options">
                        ${q.options.map((opt, i) => `
                            <button class="quiz-option" data-idx="${i}">
                                <span class="quiz-option-letter">${String.fromCharCode(65 + i)}</span>
                                <span>${opt}</span>
                            </button>
                        `).join('')}
                    </div>
                    <div class="quiz-explanation" id="quizExplanation" style="display:none"></div>
                    <div class="quiz-action" id="quizAction" style="display:none">
                        <button class="btn btn-primary" id="nextQuestionBtn">
                            ${currentQuestion + 1 < quizData.questions.length ? 'Next Question' : 'See My Score'}
                            <i data-lucide="arrow-right"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;

        renderArea.querySelectorAll('.quiz-option').forEach(btn => {
            btn.addEventListener('click', () => handleAnswer(parseInt(btn.dataset.idx), q));
        });

        lucide.createIcons();
        document.querySelector('.app-main').scrollTop = 0;
    }

    function handleAnswer(selectedIdx, q) {
        if (answered) return;
        answered = true;

        const isCorrect = selectedIdx === q.answer;
        if (isCorrect) score++;

        renderArea.querySelectorAll('.quiz-option').forEach((btn, i) => {
            btn.disabled = true;
            if (i === q.answer) {
                btn.classList.add('correct');
            } else if (i === selectedIdx && !isCorrect) {
                btn.classList.add('incorrect');
            }
        });

        const explanationEl = document.getElementById('quizExplanation');
        explanationEl.className = `quiz-explanation ${isCorrect ? 'correct-exp' : 'incorrect-exp'}`;
        explanationEl.style.display = 'block';
        explanationEl.innerHTML = `
            <span class="exp-label">${isCorrect ? '✓ Correct!' : '✗ Incorrect'}</span>
            ${q.explanation}
        `;

        document.getElementById('quizAction').style.display = 'flex';
        document.getElementById('nextQuestionBtn').addEventListener('click', () => {
            currentQuestion++;
            answered = false;
            renderQuestion();
        });
    }

    function renderScore() {
        const percentage = Math.round((score / quizData.questions.length) * 100);
        const passed = percentage >= (quizData.passMark || 70);

        const scores = JSON.parse(localStorage.getItem('quiz_scores') || '{}');
        const prevBest = scores[path] ? scores[path].percentage : null;
        scores[path] = { score, total: quizData.questions.length, percentage, date: new Date().toISOString() };
        localStorage.setItem('quiz_scores', JSON.stringify(scores));

        const isNewBest = prevBest === null || percentage > prevBest;

        renderArea.innerHTML = `
            <div class="quiz-score-card">
                <div class="score-circle ${passed ? 'pass' : 'fail'}">${percentage}%</div>
                <h2>${passed ? 'Well Done!' : 'Keep Studying!'}</h2>
                <p>You scored <strong>${score} out of ${quizData.questions.length}</strong> questions correctly${isNewBest && prevBest !== null ? ' — a new personal best!' : ''}.</p>
                <div class="score-breakdown">
                    <div class="score-stat">
                        <div class="score-stat-value" style="color: var(--accent-success)">${score}</div>
                        <div class="score-stat-label">Correct</div>
                    </div>
                    <div class="score-stat">
                        <div class="score-stat-value" style="color: #ef4444">${quizData.questions.length - score}</div>
                        <div class="score-stat-label">Incorrect</div>
                    </div>
                    <div class="score-stat">
                        <div class="score-stat-value" style="color: var(--accent-primary)">${quizData.passMark || 70}%</div>
                        <div class="score-stat-label">Pass Mark</div>
                    </div>
                </div>
                <div class="score-actions">
                    <button class="btn btn-outline" id="retryQuizBtn">
                        <i data-lucide="rotate-ccw"></i> Retry Quiz
                    </button>
                </div>
            </div>
        `;

        document.getElementById('retryQuizBtn').addEventListener('click', () => {
            currentQuestion = 0;
            score = 0;
            answered = false;
            renderQuestion();
        });

        lucide.createIcons();
        document.querySelector('.app-main').scrollTop = 0;
    }

    renderQuestion();
}

// =============================================
// PAYE CALCULATOR
// =============================================

function renderPAYECalculator() {
    const renderArea = document.getElementById('renderedMarkdown');
    document.getElementById('readerToc').style.display = 'none';
    document.getElementById('interactiveModeContainer').style.display = 'none';
    document.getElementById('resetInteractiveBtn').style.display = 'none';
    updateBreadcrumbs('Interactive Tools', 'PAYE & Payroll Calculator');

    const markReadBtn = document.getElementById('markReadBtn');
    const isDone = state.completedLessons.includes(state.currentPath);
    if (isDone) {
        markReadBtn.classList.remove('btn-outline');
        markReadBtn.classList.add('btn-primary');
        markReadBtn.innerHTML = '<i data-lucide="check-circle"></i> <span id="markReadText">Completed</span>';
    } else {
        markReadBtn.classList.remove('btn-primary');
        markReadBtn.classList.add('btn-outline');
        markReadBtn.innerHTML = '<i data-lucide="circle"></i> <span id="markReadText">Mark Complete</span>';
    }

    renderArea.innerHTML = `
        <div class="calc-container">
            <h1>PAYE & Payroll Calculator</h1>
            <p>Calculate Irish income tax (PAYE), PRSI, and USC for 2025. Adjust the inputs to see a live payroll breakdown.</p>
            <div class="calc-grid">
                <div class="calc-inputs-card">
                    <div class="calc-card-title">
                        <i data-lucide="settings"></i> Inputs
                    </div>
                    <div class="calc-field">
                        <label>Annual Gross Salary (€)</label>
                        <input type="number" id="calcGross" value="42000" min="0" step="100">
                    </div>
                    <div class="calc-field">
                        <label>Standard Rate Cut-Off Point (€/year)</label>
                        <input type="number" id="calcCutOff" value="42000" min="0" step="500">
                        <div class="field-hint">Default: €42,000 (single person, 2025)</div>
                    </div>
                    <div class="calc-field">
                        <label>Annual Tax Credits (€)</label>
                        <input type="number" id="calcCredits" value="3750" min="0" step="50">
                        <div class="field-hint">Default: €3,750 (Personal + PAYE credit combined)</div>
                    </div>
                    <div class="calc-field">
                        <label>Pay Frequency</label>
                        <select id="calcFrequency">
                            <option value="52">Weekly (÷ 52)</option>
                            <option value="26">Fortnightly (÷ 26)</option>
                            <option value="12" selected>Monthly (÷ 12)</option>
                            <option value="1">Annual</option>
                        </select>
                    </div>
                    <div class="calc-field">
                        <label>PRSI Class</label>
                        <select id="calcPRSI">
                            <option value="A" selected>Class A — 4% (most employees)</option>
                            <option value="0">Exempt (earnings below €352/week)</option>
                        </select>
                    </div>
                </div>
                <div class="calc-results-card">
                    <div class="calc-card-title">
                        <i data-lucide="bar-chart-2"></i> Payroll Breakdown
                    </div>
                    <div id="calcResults">
                        <div style="padding: 40px 0; text-align: center; color: var(--text-muted);">
                            <div class="spinner"></div>
                            <p style="margin-top: 12px;">Calculating...</p>
                        </div>
                    </div>
                    <div class="calc-usc-breakdown" id="calcUSCBreakdown" style="display:none">
                        <h4>USC Band Breakdown</h4>
                        <div id="calcUSCRows"></div>
                    </div>
                    <p class="calc-tax-year-note">Based on 2025 Irish tax bands. Standard employee tax credits applied. For official calculations, always verify with Revenue.</p>
                </div>
            </div>
        </div>
    `;

    lucide.createIcons();

    function calculatePAYE() {
        const gross = parseFloat(document.getElementById('calcGross').value) || 0;
        const cutOff = parseFloat(document.getElementById('calcCutOff').value) || 42000;
        const credits = parseFloat(document.getElementById('calcCredits').value) || 3750;
        const freq = parseInt(document.getElementById('calcFrequency').value) || 12;
        const prsiClass = document.getElementById('calcPRSI').value;

        // --- PAYE Calculation (Annual) ---
        const incomeAtStd = Math.min(gross, cutOff);
        const incomeAtHigher = Math.max(0, gross - cutOff);
        let annualPAYE = (incomeAtStd * 0.20) + (incomeAtHigher * 0.40) - credits;
        annualPAYE = Math.max(0, annualPAYE);

        // --- PRSI Calculation ---
        const weeklyGross = gross / 52;
        let annualPRSI = 0;
        if (prsiClass === 'A' && weeklyGross > 352) {
            annualPRSI = gross * 0.04;
        }

        // --- USC Calculation (Annual) ---
        const uscBands = [
            { limit: 12012, rate: 0.005, label: '0.5% on first €12,012' },
            { limit: 25760, rate: 0.02, label: '2% on €12,013 – €25,760' },
            { limit: 70044, rate: 0.045, label: '4.5% on €25,761 – €70,044' },
            { limit: Infinity, rate: 0.08, label: '8% above €70,044' }
        ];

        let annualUSC = 0;
        let uscRows = [];
        let remaining = gross;
        let prevLimit = 0;

        if (gross > 13000) {
            for (const band of uscBands) {
                if (remaining <= 0) break;
                const taxable = Math.min(remaining, band.limit - prevLimit);
                const tax = taxable * band.rate;
                if (taxable > 0) {
                    annualUSC += tax;
                    uscRows.push({ label: band.label, taxable, tax });
                }
                remaining -= taxable;
                prevLimit = band.limit;
            }
        }

        // --- Totals ---
        const totalDeductions = annualPAYE + annualPRSI + annualUSC;
        const netAnnual = gross - totalDeductions;

        const periodLabel = freq === 1 ? 'Annual' : freq === 52 ? 'Weekly' : freq === 26 ? 'Fortnightly' : 'Monthly';
        const fmt = (n) => `€${(n / freq).toFixed(2)}`;
        const fmtAnnual = (n) => `€${n.toFixed(2)}`;

        const resultsEl = document.getElementById('calcResults');
        resultsEl.innerHTML = `
            <div class="calc-result-row">
                <span class="calc-result-label">Gross Pay (${periodLabel})</span>
                <span class="calc-result-value">${fmt(gross)}</span>
            </div>
            <div class="calc-result-row deduction">
                <span class="calc-result-label">PAYE Income Tax</span>
                <span class="calc-result-value">−${fmt(annualPAYE)}</span>
            </div>
            <div class="calc-result-row deduction">
                <span class="calc-result-label">PRSI (${prsiClass === 'A' ? '4%' : 'Exempt'})</span>
                <span class="calc-result-value">−${fmt(annualPRSI)}</span>
            </div>
            <div class="calc-result-row deduction">
                <span class="calc-result-label">USC</span>
                <span class="calc-result-value">−${fmt(annualUSC)}</span>
            </div>
            <div class="calc-result-row total">
                <span class="calc-result-label">Total Deductions</span>
                <span class="calc-result-value" style="color: #ef4444">−${fmt(totalDeductions)}</span>
            </div>
            <div class="calc-result-row net">
                <span class="calc-result-label" style="color: var(--text-primary); font-weight: 700; font-size: 0.95rem;">Net Pay (${periodLabel})</span>
                <span class="calc-result-value">${fmt(netAnnual)}</span>
            </div>
            <div style="margin-top: 12px; padding-top: 12px; border-top: 1px solid var(--border-color); font-size: 0.8rem; color: var(--text-muted);">
                <div style="display: flex; justify-content: space-between;"><span>Effective tax rate</span><span style="font-weight: 600; color: var(--text-secondary);">${gross > 0 ? ((totalDeductions / gross) * 100).toFixed(1) : '0.0'}%</span></div>
                <div style="display: flex; justify-content: space-between; margin-top: 4px;"><span>Annual net pay</span><span style="font-weight: 600; color: var(--accent-success);">${fmtAnnual(netAnnual)}</span></div>
            </div>
        `;

        const uscBreakdownEl = document.getElementById('calcUSCBreakdown');
        const uscRowsEl = document.getElementById('calcUSCRows');
        if (uscRows.length > 0) {
            uscBreakdownEl.style.display = 'block';
            uscRowsEl.innerHTML = uscRows.map(r => `
                <div class="usc-band-row">
                    <span>${r.label}</span>
                    <span>€${r.tax.toFixed(2)}</span>
                </div>
            `).join('');
        } else {
            uscBreakdownEl.style.display = 'none';
        }
    }

    calculatePAYE();

    ['calcGross', 'calcCutOff', 'calcCredits', 'calcFrequency', 'calcPRSI'].forEach(id => {
        document.getElementById(id)?.addEventListener('input', calculatePAYE);
        document.getElementById(id)?.addEventListener('change', calculatePAYE);
    });

    setupPagination(state.currentPath);
    document.querySelector('.app-main').scrollTop = 0;
}

// =============================================
// GLOSSARY FLASHCARD MODE
// =============================================

function renderGlossaryFlashcards(terms) {
    const renderArea = document.getElementById('renderedMarkdown');
    let currentIdx = 0;
    let flipped = false;
    let seen = new Set();

    function shuffleArray(arr) {
        const a = [...arr];
        for (let i = a.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [a[i], a[j]] = [a[j], a[i]];
        }
        return a;
    }

    let deck = [...terms];

    function renderCard() {
        const term = deck[currentIdx];
        seen.add(currentIdx);
        flipped = false;

        const dots = deck.map((_, i) => `
            <div class="progress-dot ${i === currentIdx ? 'current' : seen.has(i) ? 'seen' : ''}"></div>
        `).join('');

        renderArea.innerHTML = `
            <div class="quiz-container">
                <div class="quiz-header">
                    <h2>Glossary Flashcards</h2>
                    <p>Click the card to reveal the definition. Use the arrows to navigate.</p>
                    <div class="quiz-progress-track">
                        <div class="quiz-progress-fill" style="width: ${Math.round(((currentIdx + 1) / deck.length) * 100)}%"></div>
                    </div>
                </div>
                <div class="flashcard-controls-bar">
                    <div class="view-toggle">
                        <button class="btn btn-outline active" id="flashcardViewBtn">
                            <i data-lucide="layers"></i> Flashcards
                        </button>
                        <button class="btn btn-outline" id="listViewBtn">
                            <i data-lucide="list"></i> List View
                        </button>
                        <button class="btn btn-outline" id="shuffleBtn">
                            <i data-lucide="shuffle"></i> Shuffle
                        </button>
                    </div>
                    <div class="flashcard-counter">${currentIdx + 1} / ${deck.length}</div>
                </div>
                <div class="flashcard-progress-dots">${dots}</div>
                <div class="flashcard-scene" id="flashcardScene">
                    <div class="flashcard" id="theFlashcard">
                        <div class="flashcard-face flashcard-front">
                            <span class="flashcard-category-badge" style="background: ${term.category === 'Payroll' ? 'var(--accent-secondary)' : 'var(--accent-primary)'}; color: #fff;">${term.category}</span>
                            <div class="flashcard-label">Term</div>
                            <div class="flashcard-term">${term.word}</div>
                            <div class="flashcard-hint">Click to reveal definition</div>
                        </div>
                        <div class="flashcard-face flashcard-back">
                            <span class="flashcard-category-badge" style="background: ${term.category === 'Payroll' ? 'var(--accent-secondary)' : 'var(--accent-primary)'}; color: #fff;">${term.category}</span>
                            <div class="flashcard-label">Definition</div>
                            <div class="flashcard-definition">${term.definition}</div>
                        </div>
                    </div>
                </div>
                <div class="flashcard-nav">
                    <button class="btn btn-outline" id="prevCardBtn" ${currentIdx === 0 ? 'disabled' : ''}>
                        <i data-lucide="arrow-left"></i> Previous
                    </button>
                    <button class="btn btn-primary" id="nextCardBtn" ${currentIdx === deck.length - 1 ? 'disabled' : ''}>
                        Next <i data-lucide="arrow-right"></i>
                    </button>
                </div>
            </div>
        `;

        lucide.createIcons();

        document.getElementById('flashcardScene').addEventListener('click', () => {
            flipped = !flipped;
            document.getElementById('theFlashcard').classList.toggle('is-flipped', flipped);
        });

        document.getElementById('prevCardBtn')?.addEventListener('click', () => {
            if (currentIdx > 0) { currentIdx--; renderCard(); }
        });

        document.getElementById('nextCardBtn')?.addEventListener('click', () => {
            if (currentIdx < deck.length - 1) { currentIdx++; renderCard(); }
        });

        document.getElementById('shuffleBtn')?.addEventListener('click', () => {
            deck = shuffleArray(terms);
            currentIdx = 0;
            seen = new Set();
            renderCard();
        });

        document.getElementById('listViewBtn')?.addEventListener('click', () => {
            renderGlossaryPage(state._rawGlossaryMarkdown || '');
        });
    }

    renderCard();
}

// =============================================
// INTERACTIVE PROJECT — FULL BOOKKEEPING CYCLE
// =============================================

async function renderInteractiveProject() {
    const renderArea = document.getElementById('renderedMarkdown');
    setupMarkReadBtn('tools/full-project');
    document.getElementById('readerToc').style.display = 'none';
    renderArea.innerHTML = `<div style="padding:60px;text-align:center;color:var(--text-secondary)"><div class="spinner"></div><p style="margin-top:12px">Loading project...</p></div>`;

    let data;
    try {
        data = await fetch('./tools/project-scenario.json').then(r => r.json());
    } catch (e) {
        renderArea.innerHTML = `<p style="padding:24px;color:#ef4444">Could not load project data.</p>`;
        return;
    }

    const PROGRESS_KEY = 'projProgress_v1';
    const getProgress = () => JSON.parse(localStorage.getItem(PROGRESS_KEY) || '{}');
    const saveProgress = p => localStorage.setItem(PROGRESS_KEY, JSON.stringify(p));

    function buildShell(activeIdx) {
        const progress = getProgress();
        const done = data.stages.filter(s => progress[s.id]).length;

        // Reference data HTML
        const obRows = data.openingBalances.map(r => `
            <tr>
                <td>${r.account}</td>
                <td style="text-align:right">${r.dr != null ? '€' + r.dr.toFixed(2) : ''}</td>
                <td style="text-align:right">${r.cr != null ? '€' + r.cr.toFixed(2) : ''}</td>
            </tr>`).join('');

        const txRows = data.transactions.map(t => `
            <tr><td style="white-space:nowrap;padding-right:12px">${t.no}.</td><td style="white-space:nowrap;padding-right:12px">${t.date}</td><td>${t.detail}</td></tr>`).join('');

        const bsRows = data.bankStatement.entries.map(e => `
            <tr>
                <td>${e.date}</td><td>${e.detail}</td>
                <td style="text-align:right">${e.lodgement != null ? '€' + e.lodgement.toFixed(2) : ''}</td>
                <td style="text-align:right">${e.payment != null ? '€' + e.payment.toFixed(2) : ''}</td>
                <td style="text-align:right">€${e.balance.toFixed(2)}</td>
            </tr>`).join('');

        const tabs = data.stages.map((s, i) => {
            const isDone = progress[s.id];
            return `<button class="proj-tab ${i === activeIdx ? 'active' : ''} ${isDone ? 'done' : ''}" data-stage="${i}">
                <span class="proj-tab-num">${isDone ? '✓' : i + 1}</span>
                <span class="proj-tab-label">${s.title}</span>
            </button>`;
        }).join('');

        renderArea.innerHTML = `
        <div class="proj-container">
            <div class="proj-header">
                <div class="proj-title-row">
                    <div>
                        <h1 class="proj-title">${data.title}</h1>
                        <p class="proj-subtitle">${data.subtitle}</p>
                    </div>
                    <div class="proj-badge-wrap">
                        <div class="proj-score-circle ${done === data.stages.length ? 'complete' : ''}">
                            <span class="proj-score-num">${done}</span>
                            <span class="proj-score-den">/ ${data.stages.length}</span>
                        </div>
                        <div class="proj-score-label">Stages<br>Complete</div>
                    </div>
                </div>
                <p class="proj-intro">${data.intro}</p>
                <div class="proj-progress-track">
                    <div class="proj-progress-fill" style="width:${Math.round((done / data.stages.length) * 100)}%"></div>
                </div>
            </div>

            <details class="proj-reference">
                <summary><strong>Reference Data</strong> — Opening Balances, Transactions &amp; Bank Statement</summary>
                <div class="proj-ref-grid">
                    <div>
                        <p class="proj-ref-heading">Opening Trial Balance — 1 March 2026</p>
                        <table class="proj-ref-table">
                            <thead><tr><th>Account</th><th>Dr (€)</th><th>Cr (€)</th></tr></thead>
                            <tbody>${obRows}</tbody>
                        </table>
                    </div>
                    <div>
                        <p class="proj-ref-heading">March Transactions</p>
                        <table class="proj-ref-table">
                            <tbody>${txRows}</tbody>
                        </table>
                    </div>
                    <div>
                        <p class="proj-ref-heading">Bank Statement — March 2026</p>
                        <p class="proj-ref-note">${data.bankStatement.note}</p>
                        <table class="proj-ref-table">
                            <thead><tr><th>Date</th><th>Detail</th><th>Lodgement</th><th>Payment</th><th>Balance</th></tr></thead>
                            <tbody>${bsRows}</tbody>
                        </table>
                    </div>
                </div>
            </details>

            <div class="proj-tabs" id="projTabs">${tabs}</div>
            <div class="proj-stage-wrap" id="projStageWrap"></div>
        </div>`;

        // Tab events
        renderArea.querySelectorAll('.proj-tab').forEach(btn => {
            btn.addEventListener('click', () => buildShell(parseInt(btn.dataset.stage)));
        });

        // Render active stage
        buildStage(data.stages[activeIdx], activeIdx);
    }

    function buildStage(stage, idx) {
        const wrap = document.getElementById('projStageWrap');
        if (!wrap) return;
        const progress = getProgress();

        const doneHtml = progress[stage.id] ? `<div class="proj-stage-done">✓ Stage complete — you can still review your answers below.</div>` : '';

        if (stage.type === 'daybook') wrap.innerHTML = doneHtml + buildDaybookHtml(stage, idx);
        else if (stage.type === 'cashbook') wrap.innerHTML = doneHtml + buildCashbookHtml(stage, idx);
        else if (stage.type === 'trialbalance') wrap.innerHTML = doneHtml + buildTrialBalanceHtml(stage, idx);
        else if (stage.type === 'bankrec') wrap.innerHTML = doneHtml + buildBankRecHtml(stage, idx);
        else if (stage.type === 'vatreturn') wrap.innerHTML = doneHtml + buildVATReturnHtml(stage, idx);

        // Wire up check button
        const btn = document.getElementById(`projCheck_${idx}`);
        if (btn) btn.addEventListener('click', () => checkStage(stage, idx));

        // Wire up reset button
        const rBtn = document.getElementById(`projReset_${idx}`);
        if (rBtn) rBtn.addEventListener('click', () => {
            const p = getProgress();
            delete p[stage.id];
            saveProgress(p);
            buildShell(idx);
        });
    }

    // ── DAYBOOK ──────────────────────────────────────────────
    function buildDaybookHtml(stage, idx) {
        const refLabel = stage.refLabel || 'Inv No';
        const rows = stage.rows.map((r, ri) => `
            <tr data-ri="${ri}">
                <td class="proj-cell-fixed">${r.date}</td>
                <td class="proj-cell-fixed">${r.ref}</td>
                <td class="proj-cell-fixed">${r.party}</td>
                <td><input class="proj-input db-gross" data-ri="${ri}" type="number" step="0.01" placeholder="0.00"></td>
                <td><input class="proj-input db-vat"   data-ri="${ri}" type="number" step="0.01" placeholder="0.00"></td>
                <td><input class="proj-input db-net"   data-ri="${ri}" type="number" step="0.01" placeholder="0.00"></td>
            </tr>`).join('');

        return `
        <div class="proj-stage">
            <div class="proj-stage-header">
                <h2 class="proj-stage-title">${stage.title}</h2>
                <p class="proj-stage-intro">${stage.intro}</p>
            </div>
            <div class="proj-table-wrap">
                <table class="proj-table">
                    <thead>
                        <tr>
                            <th>Date</th><th>${refLabel}</th><th>${stage.partyLabel}</th>
                            <th>Gross (€)</th><th>VAT (€)</th><th>Net (€)</th>
                        </tr>
                    </thead>
                    <tbody>${rows}</tbody>
                    <tfoot>
                        <tr class="proj-totals-row">
                            <td colspan="3"><strong>Totals</strong></td>
                            <td><input class="proj-input db-total-gross" type="number" step="0.01" placeholder="0.00"></td>
                            <td><input class="proj-input db-total-vat"   type="number" step="0.01" placeholder="0.00"></td>
                            <td><input class="proj-input db-total-net"   type="number" step="0.01" placeholder="0.00"></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <div class="proj-actions">
                <button class="btn btn-primary" id="projCheck_${idx}"><i data-lucide="check-circle"></i> Check Stage</button>
                <button class="btn btn-outline" id="projReset_${idx}"><i data-lucide="rotate-ccw"></i> Reset</button>
            </div>
            <div class="proj-feedback" id="projFeedback_${idx}"></div>
        </div>`;
    }

    function checkDaybook(stage, idx) {
        let allOk = true;
        const fb = [];

        stage.rows.forEach((r, ri) => {
            const gEl = document.querySelector(`.db-gross[data-ri="${ri}"]`);
            const vEl = document.querySelector(`.db-vat[data-ri="${ri}"]`);
            const nEl = document.querySelector(`.db-net[data-ri="${ri}"]`);
            [gEl, vEl, nEl].forEach(el => el && el.classList.remove('proj-correct', 'proj-incorrect'));

            const check = (el, ans, label) => {
                const val = parseFloat(el?.value || 0);
                const ok = Math.abs(val - ans) < 0.015;
                if (el) el.classList.add(ok ? 'proj-correct' : 'proj-incorrect');
                if (!ok) { allOk = false; fb.push(`${r.party} ${label}: expected €${ans.toFixed(2)}, got €${val.toFixed(2)}`); }
                return ok;
            };
            check(gEl, r.gross, 'Gross');
            check(vEl, r.vat, 'VAT');
            check(nEl, r.net, 'Net');
        });

        const tgEl = document.querySelector('.db-total-gross');
        const tvEl = document.querySelector('.db-total-vat');
        const tnEl = document.querySelector('.db-total-net');
        [tgEl, tvEl, tnEl].forEach(el => el && el.classList.remove('proj-correct', 'proj-incorrect'));

        const checkTotal = (el, ans, label) => {
            const val = parseFloat(el?.value || 0);
            const ok = Math.abs(val - ans) < 0.015;
            if (el) el.classList.add(ok ? 'proj-correct' : 'proj-incorrect');
            if (!ok) { allOk = false; fb.push(`Totals ${label}: expected €${ans.toFixed(2)}, got €${val.toFixed(2)}`); }
        };
        checkTotal(tgEl, stage.totals.gross, 'Gross');
        checkTotal(tvEl, stage.totals.vat, 'VAT');
        checkTotal(tnEl, stage.totals.net, 'Net');

        return { allOk, fb };
    }

    // ── CASH BOOK ─────────────────────────────────────────────
    function buildCashbookHtml(stage, idx) {
        const recRows = stage.receipts.map((r, ri) => `
            <tr>
                <td class="proj-cell-fixed">${r.date}</td>
                <td class="proj-cell-fixed">${r.detail}</td>
                <td><input class="proj-input cb-rec" data-ri="${ri}" type="number" step="0.01" placeholder="0.00"></td>
            </tr>`).join('');

        const payRows = stage.payments.map((r, ri) => `
            <tr>
                <td class="proj-cell-fixed">${r.date}</td>
                <td class="proj-cell-fixed">${r.detail}</td>
                <td class="proj-cell-fixed">${r.chq}</td>
                <td><input class="proj-input cb-pay" data-ri="${ri}" type="number" step="0.01" placeholder="0.00"></td>
            </tr>`).join('');

        return `
        <div class="proj-stage">
            <div class="proj-stage-header">
                <h2 class="proj-stage-title">${stage.title}</h2>
                <p class="proj-stage-intro">${stage.intro}</p>
            </div>
            <div class="proj-cb-grid">
                <div>
                    <p class="proj-cb-side-label">Receipts (Dr)</p>
                    <div class="proj-table-wrap">
                        <table class="proj-table">
                            <thead><tr><th>Date</th><th>Detail</th><th>Bank (€)</th></tr></thead>
                            <tbody>${recRows}</tbody>
                            <tfoot>
                                <tr class="proj-totals-row">
                                    <td colspan="2"><strong>Total Receipts</strong></td>
                                    <td><input class="proj-input" id="cbTotalRec" type="number" step="0.01" placeholder="0.00"></td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
                <div>
                    <p class="proj-cb-side-label">Payments (Cr)</p>
                    <div class="proj-table-wrap">
                        <table class="proj-table">
                            <thead><tr><th>Date</th><th>Detail</th><th>Chq</th><th>Bank (€)</th></tr></thead>
                            <tbody>${payRows}</tbody>
                            <tfoot>
                                <tr class="proj-totals-row">
                                    <td colspan="3"><strong>Total Payments</strong></td>
                                    <td><input class="proj-input" id="cbTotalPay" type="number" step="0.01" placeholder="0.00"></td>
                                </tr>
                            </tfoot>
                        </table>
                    </div>
                </div>
            </div>
            <div class="proj-cb-balance">
                <span>Opening Balance: <strong>€${stage.openingBalance.toFixed(2)}</strong></span>
                <span>+ Total Receipts − Total Payments =</span>
                <span>Closing Balance: <input class="proj-input" id="cbClosing" type="number" step="0.01" placeholder="0.00" style="width:100px"></span>
            </div>
            <div class="proj-actions">
                <button class="btn btn-primary" id="projCheck_${idx}"><i data-lucide="check-circle"></i> Check Stage</button>
                <button class="btn btn-outline" id="projReset_${idx}"><i data-lucide="rotate-ccw"></i> Reset</button>
            </div>
            <div class="proj-feedback" id="projFeedback_${idx}"></div>
        </div>`;
    }

    function checkCashbook(stage, idx) {
        let allOk = true;
        const fb = [];

        const checkAmt = (el, ans, label) => {
            if (!el) return;
            el.classList.remove('proj-correct', 'proj-incorrect');
            const val = parseFloat(el.value || 0);
            const ok = Math.abs(val - ans) < 0.015;
            el.classList.add(ok ? 'proj-correct' : 'proj-incorrect');
            if (!ok) { allOk = false; fb.push(`${label}: expected €${ans.toFixed(2)}, got €${val.toFixed(2)}`); }
        };

        stage.receipts.forEach((r, ri) => checkAmt(document.querySelector(`.cb-rec[data-ri="${ri}"]`), r.amount, `Receipt — ${r.detail}`));
        stage.payments.forEach((r, ri) => checkAmt(document.querySelector(`.cb-pay[data-ri="${ri}"]`), r.amount, `Payment — ${r.detail}`));
        checkAmt(document.getElementById('cbTotalRec'), stage.answers.totalReceipts, 'Total Receipts');
        checkAmt(document.getElementById('cbTotalPay'), stage.answers.totalPayments, 'Total Payments');
        checkAmt(document.getElementById('cbClosing'),  stage.answers.closingBalance, 'Closing Balance');

        return { allOk, fb };
    }

    // ── TRIAL BALANCE ─────────────────────────────────────────
    function buildTrialBalanceHtml(stage, idx) {
        const rows = stage.accounts.map((a, ai) => `
            <tr data-ai="${ai}">
                <td class="proj-cell-fixed">${a.account}</td>
                <td><input class="proj-input tb-dr" data-ai="${ai}" type="number" step="0.01" placeholder="${a.dr != null ? 'enter amount' : '—'}" ${a.dr == null ? 'tabindex="-1"' : ''}></td>
                <td><input class="proj-input tb-cr" data-ai="${ai}" type="number" step="0.01" placeholder="${a.cr != null ? 'enter amount' : '—'}" ${a.cr == null ? 'tabindex="-1"' : ''}></td>
            </tr>`).join('');

        return `
        <div class="proj-stage">
            <div class="proj-stage-header">
                <h2 class="proj-stage-title">${stage.title}</h2>
                <p class="proj-stage-intro">${stage.intro}</p>
            </div>
            <div class="proj-table-wrap">
                <table class="proj-table">
                    <thead><tr><th>Account</th><th>Debit (€)</th><th>Credit (€)</th></tr></thead>
                    <tbody>${rows}</tbody>
                    <tfoot>
                        <tr class="proj-totals-row">
                            <td><strong>Totals</strong></td>
                            <td><input class="proj-input" id="tbTotalDr" type="number" step="0.01" placeholder="0.00"></td>
                            <td><input class="proj-input" id="tbTotalCr" type="number" step="0.01" placeholder="0.00"></td>
                        </tr>
                    </tfoot>
                </table>
            </div>
            <div class="proj-actions">
                <button class="btn btn-primary" id="projCheck_${idx}"><i data-lucide="check-circle"></i> Check Stage</button>
                <button class="btn btn-outline" id="projReset_${idx}"><i data-lucide="rotate-ccw"></i> Reset</button>
            </div>
            <div class="proj-feedback" id="projFeedback_${idx}"></div>
        </div>`;
    }

    function checkTrialBalance(stage, idx) {
        let allOk = true;
        const fb = [];

        stage.accounts.forEach((a, ai) => {
            const drEl = document.querySelector(`.tb-dr[data-ai="${ai}"]`);
            const crEl = document.querySelector(`.tb-cr[data-ai="${ai}"]`);
            [drEl, crEl].forEach(el => el && el.classList.remove('proj-correct', 'proj-incorrect'));

            const drVal = parseFloat(drEl?.value || 0);
            const crVal = parseFloat(crEl?.value || 0);

            if (a.dr != null) {
                const ok = Math.abs(drVal - a.dr) < 0.015 && (crVal === 0 || crEl?.value === '');
                if (drEl) drEl.classList.add(ok ? 'proj-correct' : 'proj-incorrect');
                if (!ok) { allOk = false; fb.push(`${a.account} Dr: expected €${a.dr.toFixed(2)}`); }
            } else {
                const ok = Math.abs(crVal - a.cr) < 0.015 && (drVal === 0 || drEl?.value === '');
                if (crEl) crEl.classList.add(ok ? 'proj-correct' : 'proj-incorrect');
                if (!ok) { allOk = false; fb.push(`${a.account} Cr: expected €${a.cr.toFixed(2)}`); }
            }
        });

        const tdEl = document.getElementById('tbTotalDr');
        const tcEl = document.getElementById('tbTotalCr');
        [tdEl, tcEl].forEach(el => el && el.classList.remove('proj-correct', 'proj-incorrect'));
        const tdOk = Math.abs(parseFloat(tdEl?.value || 0) - stage.totals.dr) < 0.015;
        const tcOk = Math.abs(parseFloat(tcEl?.value || 0) - stage.totals.cr) < 0.015;
        if (tdEl) tdEl.classList.add(tdOk ? 'proj-correct' : 'proj-incorrect');
        if (tcEl) tcEl.classList.add(tcOk ? 'proj-correct' : 'proj-incorrect');
        if (!tdOk) { allOk = false; fb.push(`Total Dr: expected €${stage.totals.dr.toFixed(2)}`); }
        if (!tcOk) { allOk = false; fb.push(`Total Cr: expected €${stage.totals.cr.toFixed(2)}`); }

        return { allOk, fb };
    }

    // ── BANK REC ──────────────────────────────────────────────
    function buildBankRecHtml(stage, idx) {
        return `
        <div class="proj-stage">
            <div class="proj-stage-header">
                <h2 class="proj-stage-title">${stage.title}</h2>
                <p class="proj-stage-intro">${stage.intro}</p>
            </div>
            <div class="proj-bankrec-grid">
                <div class="proj-bankrec-card">
                    <p class="proj-cb-side-label">Step 1 — Update Cash Book</p>
                    <table class="proj-table">
                        <tr><td>Cash Book Balance (before update)</td><td class="proj-cell-fixed" style="text-align:right">€${stage.cashBookBalance.toFixed(2)}</td></tr>
                        <tr>
                            <td>${stage.cbAdjustment.label}</td>
                            <td><input class="proj-input" id="brCBAdj" type="number" step="0.01" placeholder="0.00" style="width:90px"></td>
                        </tr>
                        <tr class="proj-totals-row">
                            <td><strong>Updated Cash Book Balance</strong></td>
                            <td><input class="proj-input" id="brCBUpdated" type="number" step="0.01" placeholder="0.00" style="width:90px"></td>
                        </tr>
                    </table>
                </div>
                <div class="proj-bankrec-card">
                    <p class="proj-cb-side-label">Step 2 — Bank Reconciliation Statement</p>
                    <table class="proj-table">
                        <tr><td>Bank Statement Balance</td><td class="proj-cell-fixed" style="text-align:right">€${stage.statementBalance.toFixed(2)}</td></tr>
                        <tr>
                            <td>${stage.unpresentedCheque.label}</td>
                            <td><input class="proj-input" id="brUnpres" type="number" step="0.01" placeholder="0.00" style="width:90px"></td>
                        </tr>
                        <tr class="proj-totals-row">
                            <td><strong>Adjusted Statement Balance</strong></td>
                            <td><input class="proj-input" id="brReconciled" type="number" step="0.01" placeholder="0.00" style="width:90px"></td>
                        </tr>
                    </table>
                    <p class="proj-ref-note" style="margin-top:8px">Both balances must agree ✓</p>
                </div>
            </div>
            <div class="proj-actions">
                <button class="btn btn-primary" id="projCheck_${idx}"><i data-lucide="check-circle"></i> Check Stage</button>
                <button class="btn btn-outline" id="projReset_${idx}"><i data-lucide="rotate-ccw"></i> Reset</button>
            </div>
            <div class="proj-feedback" id="projFeedback_${idx}"></div>
        </div>`;
    }

    function checkBankRec(stage, idx) {
        let allOk = true;
        const fb = [];
        const check = (id, ans, label) => {
            const el = document.getElementById(id);
            if (!el) return;
            el.classList.remove('proj-correct', 'proj-incorrect');
            const val = parseFloat(el.value || 0);
            const ok = Math.abs(val - ans) < 0.015;
            el.classList.add(ok ? 'proj-correct' : 'proj-incorrect');
            if (!ok) { allOk = false; fb.push(`${label}: expected €${ans.toFixed(2)}`); }
        };
        check('brCBAdj',     stage.cbAdjustment.amount,  'Bank charges amount');
        check('brCBUpdated', stage.updatedCBBalance,      'Updated Cash Book balance');
        check('brUnpres',    stage.unpresentedCheque.amount, 'Unpresented cheque amount');
        check('brReconciled',stage.reconciledBalance,     'Reconciled balance');
        return { allOk, fb };
    }

    // ── VAT RETURN ────────────────────────────────────────────
    function buildVATReturnHtml(stage, idx) {
        const rows = stage.lines.map(line => `
            <tr>
                <td class="proj-cell-fixed" style="font-size:0.9rem">${line.label}</td>
                <td style="width:110px">
                    <input class="proj-input vat-line" id="vat_${line.id}" type="number" step="0.01" placeholder="0.00"
                        ${line.calculated ? 'style="background:var(--bg-secondary)"' : ''}>
                </td>
                <td class="proj-ref-note" style="font-size:0.78rem;padding-left:10px">${line.hint}</td>
            </tr>`).join('');

        return `
        <div class="proj-stage">
            <div class="proj-stage-header">
                <h2 class="proj-stage-title">${stage.title}</h2>
                <p class="proj-stage-intro">${stage.intro}</p>
            </div>
            <div class="proj-table-wrap" style="max-width:680px">
                <table class="proj-table">
                    <thead><tr><th>Description</th><th>Amount (€)</th><th>Hint</th></tr></thead>
                    <tbody>${rows}</tbody>
                </table>
            </div>
            <div class="proj-actions">
                <button class="btn btn-primary" id="projCheck_${idx}"><i data-lucide="check-circle"></i> Check Stage</button>
                <button class="btn btn-outline" id="projReset_${idx}"><i data-lucide="rotate-ccw"></i> Reset</button>
            </div>
            <div class="proj-feedback" id="projFeedback_${idx}"></div>
        </div>`;
    }

    function checkVATReturn(stage, idx) {
        let allOk = true;
        const fb = [];
        stage.lines.forEach(line => {
            const el = document.getElementById(`vat_${line.id}`);
            if (!el) return;
            el.classList.remove('proj-correct', 'proj-incorrect');
            const val = parseFloat(el.value || 0);
            const ok = Math.abs(val - line.answer) < 0.015;
            el.classList.add(ok ? 'proj-correct' : 'proj-incorrect');
            if (!ok) { allOk = false; fb.push(`${line.label}: expected €${line.answer.toFixed(2)}`); }
        });
        return { allOk, fb };
    }

    // ── MASTER CHECK ─────────────────────────────────────────
    function checkStage(stage, idx) {
        let result;
        if (stage.type === 'daybook')      result = checkDaybook(stage, idx);
        else if (stage.type === 'cashbook')     result = checkCashbook(stage, idx);
        else if (stage.type === 'trialbalance') result = checkTrialBalance(stage, idx);
        else if (stage.type === 'bankrec')      result = checkBankRec(stage, idx);
        else if (stage.type === 'vatreturn')    result = checkVATReturn(stage, idx);
        else return;

        const fbEl = document.getElementById(`projFeedback_${idx}`);
        if (!fbEl) return;

        if (result.allOk) {
            fbEl.innerHTML = `<div class="proj-fb-pass">
                <strong>✓ Stage ${idx + 1} complete!</strong> All entries are correct. Well done.
            </div>`;
            const p = getProgress();
            p[stage.id] = true;
            saveProgress(p);
            // Update tab to show checkmark
            const tab = document.querySelector(`.proj-tab[data-stage="${idx}"]`);
            if (tab) { tab.classList.add('done'); tab.querySelector('.proj-tab-num').textContent = '✓'; }
            // Update progress display
            const done = Object.values(getProgress()).filter(Boolean).length;
            const circle = document.querySelector('.proj-score-circle');
            if (circle) {
                circle.querySelector('.proj-score-num').textContent = done;
                if (done === data.stages.length) circle.classList.add('complete');
            }
            const fill = document.querySelector('.proj-progress-fill');
            if (fill) fill.style.width = `${Math.round((done / data.stages.length) * 100)}%`;
        } else {
            fbEl.innerHTML = `<div class="proj-fb-fail">
                <strong>✗ Not quite — ${result.fb.length} item${result.fb.length !== 1 ? 's' : ''} to fix:</strong>
                <ul>${result.fb.map(m => `<li>${m}</li>`).join('')}</ul>
            </div>`;
        }

        lucide.createIcons();
    }

    // Initial render
    buildShell(0);
}
