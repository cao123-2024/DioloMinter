// Student Data Structure
const totalStudents = 56;
const studentNamesMap = {
    'zh-CN': {
        1: "孙博杨", 2: "罗紫钰", 3: "李心怡", 4: "熊艺珍", 5: "陈烜",
        6: "陈译铭", 7: "刘丛瑞", 8: "闵锦鸿", 9: "彭熙诺", 10: "谢恩佑",
        11: "陈梓洋", 12: "文诗婷", 13: "王陈诺", 14: "张锦皓", 15: "易子铭",
        16: "郭杍旭", 17: "柯栩杰", 18: "齐宸轩", 19: "张肇轩", 20: "熊清可",
        21: "程凯恩", 22: "陈栩豪", 23: "谈槿一", 24: "樊碧杰", 25: "过怡媛",
        26: "吁宣儒", 27: "孙钰杨", 28: "袁迦萱", 29: "邓梓添", 30: "刘宸熙",
        31: "程琪", 32: "杨远航", 33: "曹沄凡", 34: "屈彦妤", 35: "杨雅琦",
        36: "周亦鸣", 37: "张容川", 38: "胡家玉", 39: "钱奕帆", 40: "罗佳玉",
        41: "夏语彤", 42: "邓梓睿", 43: "范欣瑶", 44: "胡皓天", 45: "谈鑫宸",
        46: "吴牧之", 47: "韩梓馨", 48: "吴芊芊", 49: "晏一壹", 50: "胡乐澄",
        51: "吴梓瑄", 52: "陈文瑞", 53: "王梓欣", 54: "姜立昕", 55: "黄晨旭",
        56: "老师自己讲"
    },
    'en-US': {
        1: "Sun Boyang", 2: "Luo Ziyu", 3: "Li Xinyi", 4: "Xiong Yizhen", 5: "Chen Xuan",
        6: "Chen Yiming", 7: "Liu Congrui", 8: "Min Jinhong", 9: "Peng Xinuo", 10: "Xie Enyou",
        11: "Chen Ziyang", 12: "Wen Shiting", 13: "Wang Chennuo", 14: "Zhang Jinhao", 15: "Yi Ziming",
        16: "Guo Zixu", 17: "Ke Xujie", 18: "Qi Chenxuan", 19: "Zhang Zhaoxuan", 20: "Xiong Qingke",
        21: "Cheng Kaien", 22: "Chen Xuhao", 23: "Tan Jinyi", 24: "Fan Bijie", 25: "Guo Yiyuan",
        26: "Yu Xuanru", 27: "Sun Yuyang", 28: "Yuan Jiaxuan", 29: "Deng Zitian", 30: "Liu Chenxi",
        31: "Cheng Qi", 32: "Yang Yuanhang", 33: "Cao Yunfan", 34: "Qu Yanyu", 35: "Yang Yaqi",
        36: "Zhou Yiming", 37: "Zhang Rongchuan", 38: "Hu Jiayu", 39: "Qian Yifan", 40: "Luo Jiayu",
        41: "Xia Yutong", 42: "Deng Zirui", 43: "Fan Xinyao", 44: "Hu Haotian", 45: "Tan Xinchen",
        46: "Wu Muzhi", 47: "Han Zixin", 48: "Wu Qianqian", 49: "Yan Yiyi", 50: "Hu Lecheng",
        51: "Wu Zixuan", 52: "Chen Wenrui", 53: "Wang Zixin", 54: "Jiang Lixin", 55: "Huang Chenxu",
        56: "Teacher"
    }
};
let students = [];

// Dictionary for i18n
const translations = {
    'zh-CN': {
        'system': '系统',
        'rollCallPanel': '点名面板',
        'classRollCall': '课堂点名',
        'randomMode': '随机模式',
        'noRepeatMode': '不重复模式',
        'waiting': '等待点名',
        'calledCount': '已点名',
        'startCall': '开始点名',
        'statistics': '统计数据',
        'totalCalls': '总点名次数',
        'mostCalled': '最常被点 (非酋)',
        'leastCalled': '最久未点 (欧皇)',
        'recentHistory': '最近记录',
        'streakInfo': '连续记录',
        'settings': '设置',
        'about': '关于',
        'resetAll': '重置所有',
        'generalSettings': '通用设置',
        'language': '语言',
        'theme': '背景模式',
        'accentColor': '组件配色',
        'probSettings': '概率设置',
        'allProbZero': '所有学生概率均为0，无法点名！',
        'batchEdit': '批量调整',
        'selectAll': '全选',
        'itemsSelected': '项已选',
        'cancel': '取消',
        'resetConfirm': '确定要重置所有学生点名状态吗？此操作不可撤销',
        'resetSuccess': '已重置56名学生点名状态',
        'resetStatus': '重置状态',
        'animDuration': '动画时长',
        'animNone': '无动画 (即时)',
        'dataManagement': '数据管理',
        'dataDesc': '导出或导入您的设置、历史记录和概率配置。',
        'checkUpdate': '检查更新',
        'updateAvailable': '发现新版本！请访问 GitHub 下载。',
        'noUpdate': '当前已是最新版本 (v1.28)',
        'checking': '检查中...',
        'githubLink': 'GitHub 仓库',
        'exportData': '导出',
        'importData': '导入',
        'clearData': '清除数据',
        'excluded': '已排除',
        'colorBlack': '黑色',
        'colorWhite': '白色',
        'colorBlue': '蓝色',
        'colorPurple': '紫色',
        'colorGreen': '绿色',
        'colorOrange': '橙色',
        'colorSilver': '银色'
    },
    'en-US': {
        'system': 'System',
        'rollCallPanel': 'Panel',
        'classRollCall': 'Roll Call',
        'randomMode': 'Random Mode',
        'noRepeatMode': 'No Repeat',
        'waiting': 'Waiting',
        'calledCount': 'Called',
        'startCall': 'Start Call',
        'statistics': 'Statistics',
        'totalCalls': 'Total Calls',
        'mostCalled': 'Most Called (Unlucky)',
        'leastCalled': 'Longest Gap (Lucky)',
        'recentHistory': 'Recent History',
        'streakInfo': 'Streak Info',
        'settings': 'Settings',
        'about': 'About',
        'resetAll': 'Reset All',
        'generalSettings': 'General',
        'language': 'Language',
        'theme': 'Background Mode',
        'accentColor': 'Accent Color',
        'probSettings': 'Probability',
        'allProbZero': 'All probabilities are 0, cannot start!',
        'batchEdit': 'Batch Edit',
        'selectAll': 'Select All',
        'itemsSelected': 'Selected',
        'cancel': 'Cancel',
        'resetConfirm': 'Reset all roll call status? This cannot be undone.',
        'resetSuccess': 'Reset status for 55 students',
        'resetStatus': 'Reset Status',
        'animDuration': 'Anim Duration',
        'animNone': 'No Animation (Instant)',
        'dataManagement': 'Data Management',
        'dataDesc': 'Export or import your settings, history, and probability configs.',
        'checkUpdate': 'Check Update',
        'updateAvailable': 'New version available! Visit GitHub.',
        'noUpdate': 'You are up to date (v1.28)',
        'checking': 'Checking...',
        'githubLink': 'GitHub Repo',
        'exportData': 'Export',
        'importData': 'Import',
        'clearData': 'Clear Data',
        'excluded': 'Excluded',
        'colorBlack': 'Black',
        'colorWhite': 'White',
        'colorBlue': 'Blue',
        'colorPurple': 'Purple',
        'colorGreen': 'Green',
        'colorOrange': 'Orange',
        'colorSilver': 'Silver'
    }
};

// DOM Elements
const numberDisplay = document.getElementById('student-number');
const nameDisplay = document.getElementById('student-name');
const startBtn = document.getElementById('start-btn');
const modeBtn = document.getElementById('mode-btn');
const resetStatusBtn = document.getElementById('reset-status-btn');
const modeText = document.getElementById('mode-text');
const countDisplay = document.getElementById('count');
const statsArea = document.getElementById('stats-area');

// View Switching Elements
const navHome = document.getElementById('nav-home');
const navStats = document.getElementById('nav-stats');
const navProb = document.getElementById('nav-prob');
const navSettings = document.getElementById('nav-settings');
const navAbout = document.getElementById('nav-about');
const homeView = document.getElementById('home-view');
const statsView = document.getElementById('stats-view');
const probView = document.getElementById('prob-view');
const settingsView = document.getElementById('settings-view');
const aboutView = document.getElementById('about-view');
const pageTitle = document.getElementById('page-title');
const settingsList = document.getElementById('settings-list');
const resetAllBtn = document.getElementById('reset-all-btn');
const batchEditBtn = document.getElementById('batch-edit-btn');
const batchControls = document.getElementById('batch-controls');
const selectAllCheckbox = document.getElementById('select-all-checkbox');
const selectedCountNum = document.getElementById('selected-count-num');
const cancelBatchBtn = document.getElementById('cancel-batch-btn');

// Settings Elements
const langSelect = document.getElementById('lang-select');
const animDurationSelect = document.getElementById('anim-duration-select');
const themeCircles = document.querySelectorAll('#bg-theme-options .theme-circle');
const accentCircles = document.querySelectorAll('#accent-theme-options .theme-circle');
const userArea = document.querySelector('.user-area');
const toastContainer = document.getElementById('toast-container');
const easterEggContainer = document.getElementById('easter-egg-container');

// Data Management Elements
const exportBtn = document.getElementById('export-btn');
const importBtn = document.getElementById('import-btn');
const importFile = document.getElementById('import-file');
const clearDataBtn = document.getElementById('clear-data-btn');
const checkUpdateBtn = document.getElementById('check-update-btn');
const githubBtn = document.getElementById('github-btn');

// State
let isNoRepeatMode = false;
let calledHistory = new Set();
let isAnimating = false;
let currentLang = 'zh-CN';
let currentBgMode = 'black'; // 'black' or 'white'
let currentAccent = 'blue';  // 'blue', 'purple', 'green', 'orange', 'silver'
let animDuration = 2000;
let callHistoryLog = []; // Stores {id, timestamp}
let isBatchMode = false;
let selectedStudentIds = new Set(); // For Batch Edit
let lastCalled100PercentId = 0; // For Round-Robin logic

// Initialize
function init() {
    try {
        loadSettings();
        loadStudents(); 
        loadStats();
        applySettings();
        updateUIForMode();
        setupEventListeners();
        console.log("DioloMinter initialized successfully.");
    } catch (e) {
        console.error("Initialization failed:", e);
        // alert("System initialization failed. Please refresh or check console.");
    }
}

// Persistence
function loadSettings() {
    const savedSettings = localStorage.getItem('diolo_settings_v1');
    if (savedSettings) {
        const settings = JSON.parse(savedSettings);
        isNoRepeatMode = settings.isNoRepeatMode || false;
        currentLang = settings.lang || 'zh-CN';
        currentBgMode = settings.bgMode || 'black';
        currentAccent = settings.accent || 'blue';
        animDuration = settings.animDuration || 2000;
        
        // Load history set if saved (optional, but good for persistence)
        if (settings.calledHistory) {
            calledHistory = new Set(settings.calledHistory);
        }
    } else {
        // Auto-detect Theme
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
            currentBgMode = 'white';
        } else {
            currentBgMode = 'black';
        }
    }
}

function saveSettings() {
    const settings = {
        isNoRepeatMode,
        lang: currentLang,
        bgMode: currentBgMode,
        accent: currentAccent,
        animDuration: animDuration,
        calledHistory: Array.from(calledHistory)
    };
    localStorage.setItem('diolo_settings_v1', JSON.stringify(settings));
}

function loadStats() {
    const savedStats = localStorage.getItem('diolo_stats_v1');
    if (savedStats) {
        callHistoryLog = JSON.parse(savedStats);
    }
}

function saveStats() {
    localStorage.setItem('diolo_stats_v1', JSON.stringify(callHistoryLog));
}

function loadStudents() {
    const savedData = localStorage.getItem('diolo_students_data_v1');
    if (savedData) {
        students = JSON.parse(savedData);
        // Force sync names from static map to ensure data integrity
        let needsSave = false;
        
        // Re-validate length
        if (students.length !== totalStudents) {
            initDefaultStudents();
            return;
        }

        students.forEach(s => {
            const correctName = studentNamesMap[s.id];
            if (correctName && s.name !== correctName) {
                s.name = correctName;
                needsSave = true;
            }
        });
        
        if (needsSave) saveStudents();
    } else {
        initDefaultStudents();
    }
}

function initDefaultStudents() {
    students = Array.from({ length: totalStudents }, (_, i) => {
        const id = i + 1;
        let defaultWeight = 50; 
        if (id === 33) defaultWeight = 25; 
        return { id, name: "等待点名", weight: defaultWeight };
    });
    saveStudents();
}

function saveStudents() {
    localStorage.setItem('diolo_students_data_v1', JSON.stringify(students));
}

// Applying Settings (Lang & Theme)
function applySettings() {
    // Language
    langSelect.value = currentLang;
    updateLanguageUI();

    // Background Mode
    document.body.className = ''; // Reset classes
    document.body.classList.add(`bg-${currentBgMode}`);
    document.body.classList.add(`accent-${currentAccent}`);
    
    // Update UI Selection State
    themeCircles.forEach(c => {
        c.classList.toggle('active', c.dataset.bg === currentBgMode);
    });
    accentCircles.forEach(c => {
        c.classList.toggle('active', c.dataset.accent === currentAccent);
    });
    
    // Animation Duration
    animDurationSelect.value = animDuration;
}

function updateLanguageUI() {
    const t = translations[currentLang];
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (t[key]) el.textContent = t[key];
    });
    
    // Specific updates that might need logic
    updateUIForMode(); 
}

// Event Listeners
function setupEventListeners() {
    // Mode Switch
    modeBtn.addEventListener('click', () => {
        isNoRepeatMode = !isNoRepeatMode;
        
        // Preserve current display state
        const currentId = numberDisplay.textContent;
        const currentName = nameDisplay.textContent;
        
        // Sync history logic:
        // If switching TO No-Repeat, we should ensure the currently displayed student (if any) is considered "called" 
        // IF they were just called. But `calledHistory` tracks unique IDs.
        // Actually, the user complaint is "display shows '--'". 
        // This might be because `updateUIForMode` or re-renders might be clearing the display?
        // Let's check `updateUIForMode`.
        
        updateUIForMode();
        
        // Restore display if it was valid (not '--')
        // Actually, updateUIForMode doesn't clear display. 
        // BUT, if the user means the "Count" (e.g. 0/56 vs 5/56) resets?
        // Or if the MAIN DISPLAY resets to default?
        // "他那里就显示两个杠" -> "It shows two dashes". This usually refers to `numberDisplay`.
        
        // Let's ensure we don't reset the main display on mode switch.
        // The current code for updateUIForMode ONLY updates the button text and stats area visibility.
        // It does NOT touch numberDisplay.
        // So why would it show '--'? 
        // Maybe the user is referring to the "Count" display? 
        // "I picked Zhang Rongchuan, then switched mode, it shows --".
        // If they mean the central number, it shouldn't change. 
        // If they mean the stats count?
        
        // Wait, if I switch to No-Repeat, `calledHistory` might be empty if I was in Repeat mode before?
        // In Repeat Mode, we DON'T add to `calledHistory` (see `finalizeSelection`).
        // So if I switch to No-Repeat, `calledHistory` is indeed empty (0/56).
        // This is LOGICALLY correct (Repeat mode doesn't consume students).
        // BUT the user wants "continuation".
        // "不会把这个东西骑进去" -> "Won't ride/carry this thing in". 
        // Likely means: If I just picked someone in Repeat Mode, and I switch to No-Repeat, 
        // that person should be marked as "Done" (added to history)?
        
        // Let's implement this: If there is a "current student" displayed on screen,
        // and we switch to No-Repeat, should we retroactively add them to history?
        // Yes, that seems to be the request.
        
        if (isNoRepeatMode) {
            // Check if a valid student is currently displayed
            // numberDisplay now holds ID (e.g. "37")
            const displayedId = parseInt(numberDisplay.textContent);
            if (!isNaN(displayedId) && displayedId > 0) {
                if (!calledHistory.has(displayedId)) {
                    calledHistory.add(displayedId);
                    saveSettings();
                }
            }
        }
        
        saveSettings();
        updateStatsDisplay(); // Refresh count
    });

    // Reset Status Button
    resetStatusBtn.addEventListener('click', () => {
        if (isAnimating) return; // Prevent reset during animation
        
        const t = translations[currentLang];
        // Direct reset without confirmation
        resetHistory();
        showToast(t['resetSuccess']);
        
        // Log (Simulated)
        console.log(`[Log] Reset Action | Time: ${new Date().toISOString()} | User: Admin`);
    });

    startBtn.addEventListener('click', handleRollCall);

    // Navigation
    navHome.addEventListener('click', () => switchView('home'));
    navStats.addEventListener('click', () => {
        switchView('stats');
        renderStats();
    });
    navProb.addEventListener('click', () => {
        switchView('prob');
        renderSettingsList();
    });
    navSettings.addEventListener('click', () => {
        switchView('settings');
    });
    if(navAbout) navAbout.addEventListener('click', () => switchView('about'));

    // Reset All Settings
    resetAllBtn.addEventListener('click', () => {
        const confirmMsg = currentLang === 'zh-CN' ? '确定要重置所有概率设置吗？' : 'Reset all probability settings?';
        if(confirm(confirmMsg)) {
            initDefaultStudents();
            renderSettingsList();
        }
    });

    // Batch Edit Controls
    batchEditBtn.addEventListener('click', toggleBatchMode);
    cancelBatchBtn.addEventListener('click', toggleBatchMode);
    
    selectAllCheckbox.addEventListener('change', (e) => {
        if (e.target.checked) {
            students.forEach(s => selectedStudentIds.add(s.id));
        } else {
            selectedStudentIds.clear();
        }
        updateBatchUI();
        renderSettingsList(); 
    });

    // Language Change
    langSelect.addEventListener('change', (e) => {
        currentLang = e.target.value;
        applySettings();
        saveSettings();
        renderSettingsList(); // Re-render to update units/titles if any
    });

    // Animation Duration Change
    animDurationSelect.addEventListener('change', (e) => {
        animDuration = parseInt(e.target.value);
        saveSettings();
    });

    // Theme (Background) Change
    themeCircles.forEach(circle => {
        circle.addEventListener('click', () => {
            currentBgMode = circle.dataset.bg;
            applySettings();
            saveSettings();
        });
    });

    // Accent Change
    accentCircles.forEach(circle => {
        circle.addEventListener('click', () => {
            currentAccent = circle.dataset.accent;
            applySettings();
            saveSettings();
        });
    });

    // Easter Egg
    userArea.addEventListener('click', triggerEasterEgg);

    if(githubBtn) {
        githubBtn.addEventListener('click', () => {
            window.open('https://github.com/cao123-2024/DioloMinter', '_blank');
        });
    }

    if(checkUpdateBtn) {
        checkUpdateBtn.addEventListener('click', async () => {
            if (checkUpdateBtn.disabled) return; // Prevent double click
            
            const t = translations[currentLang];
            const originalText = checkUpdateBtn.innerHTML;
            
            // Show checking state
            checkUpdateBtn.disabled = true;
            checkUpdateBtn.innerHTML = `<i class="ri-loader-4-line ri-spin"></i> ${t['checking']}`;
            
            // Minimum loading time for better UX (300ms req + animation)
            const minLoadTime = new Promise(resolve => setTimeout(resolve, 800));
            
            try {
                // Real GitHub API fetch to get latest release tag
                // Repo: cao123-2024/DioloMinter
                const response = await fetch('https://api.github.com/repos/cao123-2024/DioloMinter/releases/latest');
                await minLoadTime;

                if (response.ok) {
                    const data = await response.json();
                    const latestVersion = data.tag_name; // e.g., "v1.28"
                    const currentVersion = "v1.28"; 
                    
                    if (latestVersion && latestVersion !== currentVersion) {
                        if (confirm(`${t['updateAvailable']} (${latestVersion})`)) {
                            window.open('https://github.com/cao123-2024/DioloMinter/releases/latest', '_blank');
                        }
                    } else {
                        showToast(t['noUpdate']);
                    }
                } else {
                    // Fallback or network error handling
                    // If no releases found or rate limited, assume up to date or show simple toast
                    console.warn("Update check failed or no releases:", response.status);
                    showToast(t['noUpdate']); 
                }
            } catch (error) {
                console.error("Update check error:", error);
                await minLoadTime;
                showToast(t['noUpdate']); // Fail gracefully
            } finally {
                checkUpdateBtn.disabled = false;
                checkUpdateBtn.innerHTML = originalText;
            }
        });
    }
}

// Toast Notification
function showToast(message) {
    const toast = document.createElement('div');
    toast.className = 'toast';
    toast.innerHTML = `<i class="ri-checkbox-circle-line" style="color: #4cc9f0;"></i> <span>${message}</span>`;
    
    toastContainer.appendChild(toast);
    
    setTimeout(() => {
        toast.classList.add('fade-out');
        setTimeout(() => toast.remove(), 300);
    }, 3000);
}

// Easter Egg Logic
function triggerEasterEgg() {
    // Show Secret Input in About Page if active
    if (!aboutView.classList.contains('hidden')) {
        const secretArea = document.getElementById('secret-area');
        const secretInput = document.getElementById('secret-input');
        
        secretArea.classList.remove('hidden');
        secretInput.focus();
        
        // Bind enter key
        secretInput.onkeydown = (e) => {
            if (e.key === 'Enter') {
                handleSecretCommand(secretInput.value);
                secretInput.value = '';
                secretArea.classList.add('hidden');
            }
        };
        return;
    }

    const effects = ['emoji', 'confetti', 'fireworks']; // Simplified for now
    const effect = effects[Math.floor(Math.random() * effects.length)];
    
    if (effect === 'emoji') {
        createEmojiRain();
    } else if (effect === 'confetti') {
        createConfetti(); // reusing emoji logic for now with colors
    } else {
        createEmojiRain(['✨', '🎆', '🎇']); // Fireworks alternative
    }
}

function handleSecretCommand(cmd) {
    const command = cmd.trim().toLowerCase();
    // Placeholder for future commands
    if (command === 'hello') {
        showToast('Hello World!');
    } else {
        showToast('Secret command received: ' + command);
    }
}

function createEmojiRain(emojis = ['😀', '😎', '🎉', '🚀', '💻', '🤖', '👻', '🐱']) {
    for (let i = 0; i < 30; i++) {
        const el = document.createElement('div');
        el.className = 'emoji-drop';
        el.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        el.style.left = Math.random() * 100 + 'vw';
        el.style.animationDuration = (Math.random() * 2 + 1) + 's';
        el.style.opacity = Math.random();
        easterEggContainer.appendChild(el);
        
        setTimeout(() => el.remove(), 3000);
    }
}

function createConfetti() {
    const colors = ['#f00', '#0f0', '#00f', '#ff0', '#0ff', '#f0f'];
    for (let i = 0; i < 50; i++) {
        const el = document.createElement('div');
        el.className = 'emoji-drop';
        el.style.width = '10px';
        el.style.height = '10px';
        el.style.background = colors[Math.floor(Math.random() * colors.length)];
        el.style.left = Math.random() * 100 + 'vw';
        el.style.animationDuration = (Math.random() * 2 + 1) + 's';
        easterEggContainer.appendChild(el);
        
        setTimeout(() => el.remove(), 3000);
    }
}

// View Switching
function switchView(viewName) {
    // Hide all first
    [homeView, statsView, probView, settingsView, aboutView].forEach(el => {
        if(el) el.classList.add('hidden');
    });
    
    // Deactivate all navs
    [navHome, navStats, navProb, navSettings, navAbout].forEach(el => {
        if(el) el.classList.remove('active');
    });

    const t = translations[currentLang];

    // Show target
    if (viewName === 'home') {
        if(homeView) {
            homeView.classList.remove('hidden');
            homeView.classList.add('view-enter');
        }
        if(navHome) navHome.classList.add('active');
        if(pageTitle) pageTitle.textContent = t['rollCallPanel'];
    } else if (viewName === 'stats') {
        if(statsView) {
            statsView.classList.remove('hidden');
            statsView.classList.add('view-enter');
        }
        if(navStats) navStats.classList.add('active');
        if(pageTitle) pageTitle.textContent = t['statistics'];
        renderStats(); 
    } else if (viewName === 'prob') {
        if(probView) {
            probView.classList.remove('hidden');
            probView.classList.add('view-enter');
        }
        if(navProb) navProb.classList.add('active');
        if(pageTitle) pageTitle.textContent = t['probSettings'];
        renderSettingsList(); 
    } else if (viewName === 'settings') {
        if(settingsView) {
            settingsView.classList.remove('hidden');
            settingsView.classList.add('view-enter');
        }
        if(navSettings) navSettings.classList.add('active');
        if(pageTitle) pageTitle.textContent = t['settings'];
    } else if (viewName === 'about') {
        if(aboutView) {
            aboutView.classList.remove('hidden');
            aboutView.classList.add('view-enter');
        }
        if(navAbout) navAbout.classList.add('active');
        if(pageTitle) pageTitle.textContent = t['about'];
    }
    
    // Remove animation class after animation ends to allow re-triggering
    setTimeout(() => {
        document.querySelectorAll('.view-enter').forEach(el => el.classList.remove('view-enter'));
    }, 500);
}

// Mode UI Logic
function updateUIForMode() {
    const t = translations[currentLang];
    if (isNoRepeatMode) {
        modeText.textContent = t['noRepeatMode'];
        modeBtn.classList.add('active');
        statsArea.classList.remove('stats-hidden');
        resetStatusBtn.classList.remove('hidden');
    } else {
        modeText.textContent = t['randomMode'];
        modeBtn.classList.remove('active');
        statsArea.classList.add('stats-hidden');
        resetStatusBtn.classList.add('hidden');
    }
    updateStatsDisplay();
}

function updateStatsDisplay() {
    // Zero Probability Logic: Exclude from total count
    const activeStudents = students.filter(s => s.weight > 0).length;

    if (isNoRepeatMode) {
        countDisplay.textContent = `${calledHistory.size} / ${activeStudents}`;
    } else {
        countDisplay.textContent = `0 / ${activeStudents}`;
    }
}

function resetHistory() {
    calledHistory.clear();
    saveSettings();
    updateStatsDisplay();
}

// Roll Call Logic
function getWeightedRandomStudent(availableStudents) {
    // 1. Filter out 0 weight students
    let candidates = availableStudents.filter(s => s.weight > 0);
    
    // In No-Repeat mode, we must filter out already called history (passed in via availableStudents usually, 
    // but here availableStudents is raw or pre-filtered? Let's check handleRollCall)
    // handleRollCall passes pre-filtered 'validCandidates' (which already excludes history in no-repeat).
    // So 'candidates' here are valid to pick from.
    
    if (candidates.length === 0) return null;

    // 2. Check for "Priority Candidates" (Weight == 100)
    // The requirement says "When probability set to 100%, first click must select that option".
    // We treat weight 100 as an absolute override.
    const priorityCandidates = candidates.filter(s => s.weight === 100);

    if (priorityCandidates.length > 0) {
        // Priority Logic Active
        // Req: "Multiple 100% ... Repeat Mode: Random selection among them."
        // Req: "Multiple 100% ... No-Repeat Mode: Prioritize one by one."
        // Since No-Repeat naturally removes them one by one, Random selection works for both.
        // We simply pick one random 100% candidate.
        const index = Math.floor(Math.random() * priorityCandidates.length);
        return priorityCandidates[index];
    }

    // 3. Standard Selection (No 100% Priority)
    
    // If No Repeat Mode, use Uniform Random (1/N) as per previous requirement
    // Unless we want to respect relative weights even in No-Repeat?
    // "Ensure probability strictly calculated as (1/remaining)*100%" -> This implies Uniform.
    if (isNoRepeatMode) {
        const randomIndex = Math.floor(Math.random() * candidates.length);
        return candidates[randomIndex];
    }

    // Weighted Random for Random Mode
    const totalWeight = candidates.reduce((sum, s) => sum + s.weight, 0);
    let random = Math.random() * totalWeight;
    for (const student of candidates) {
        random -= student.weight;
        if (random <= 0) return student;
    }
    return candidates[candidates.length - 1];
}

function handleRollCall() {
    if (isAnimating) return;

    let validCandidates;
    if (isNoRepeatMode) {
         validCandidates = students.filter(s => !calledHistory.has(s.id) && s.weight > 0);
    } else {
         validCandidates = students.filter(s => s.weight > 0);
    }

    if (validCandidates.length === 0) {
        if (isNoRepeatMode) {
             resetHistory();
             if (isNoRepeatMode) {
                validCandidates = students.filter(s => !calledHistory.has(s.id) && s.weight > 0);
             } else {
                validCandidates = students.filter(s => s.weight > 0);
             }
             if (validCandidates.length === 0) {
                 alert(translations[currentLang]['allProbZero']);
                 return;
             }
        } else {
            alert(translations[currentLang]['allProbZero']);
            return;
        }
    }

    startBtn.classList.add('animating');
    isAnimating = true;

    const startTime = Date.now();
    let lastUpdate = startTime;
    const duration = animDuration;

    // Initial fast speed (small interval), slowing down to larger interval
    const minInterval = 50;
    const maxInterval = 400;

    function animate() {
        if (!isAnimating) return; // Safety check
        
        const now = Date.now();
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        // Easing function: Cubic Ease Out (starts fast, slows down)
        const easeProgress = progress * progress; 
        const currentInterval = minInterval + (maxInterval - minInterval) * easeProgress;

        if (now - lastUpdate > currentInterval) {
            const randomTempId = Math.floor(Math.random() * totalStudents) + 1;
            numberDisplay.textContent = randomTempId;
            lastUpdate = now;
        }

        if (progress < 1) {
            requestAnimationFrame(animate);
        } else {
            startBtn.classList.remove('animating');
            finalizeSelection(validCandidates);
        }
    }
    
    requestAnimationFrame(animate);
}

function finalizeSelection(candidates) {
    if (!isAnimating) return; // Prevent double finalize
    
    let selectedStudent = getWeightedRandomStudent(candidates);

    if (selectedStudent) {
        if (isNoRepeatMode) {
            calledHistory.add(selectedStudent.id);
            saveSettings();
        }
        
        // Visual Reveal Effect
        numberDisplay.classList.remove('number-pop');
        numberDisplay.classList.remove('special-effect-33'); // Reset special effect
        
        void numberDisplay.offsetWidth; // Trigger reflow
        
        // Get Localized Name
        const localizedName = studentNamesMap[currentLang][selectedStudent.id] || selectedStudent.name;
        
        // Show Name prominently, then ID
        numberDisplay.textContent = localizedName; // Use Number display area for Name (bigger)
        nameDisplay.textContent = `#${selectedStudent.id}`; // Use Name display area for ID (smaller)
        
        if (selectedStudent.id === 33) {
            numberDisplay.classList.add('special-effect-33');
            createConfetti(); // Celebration for 33
        } else {
            numberDisplay.classList.add('number-pop');
        }
        
        // Log to Stats
        addToHistory(selectedStudent.id);
    }

    // Animation Finish Feedback
    startBtn.classList.add('success-pulse');
    setTimeout(() => startBtn.classList.remove('success-pulse'), 500);

    updateStatsDisplay();
    isAnimating = false;
}

// Stats Logic
function addToHistory(id) {
    callHistoryLog.unshift({
        id: id,
        timestamp: new Date().toISOString()
    });
    // Keep only last 1000 records to avoid bloat
    if (callHistoryLog.length > 1000) callHistoryLog.pop();
    saveStats();
}

function renderStats() {
    const totalCalls = callHistoryLog.length;
    document.getElementById('total-calls-stat').textContent = totalCalls;

    // Calculate most called
    const counts = {};
    callHistoryLog.forEach(item => {
        counts[item.id] = (counts[item.id] || 0) + 1;
    });
    let maxId = '--';
    let maxCount = 0;
    for (const [id, count] of Object.entries(counts)) {
        if (count > maxCount) {
            maxCount = count;
            maxId = id;
        }
    }
    document.getElementById('most-called-stat').textContent = maxId === '--' ? '--' : `#${maxId} (${maxCount})`;

    // 2. Least Called / Longest Gap (Unlucky / 非酋) - Removed from UI but logic kept if needed later
    /*
    let maxGap = -1;
    let maxGapId = null;

    // Only consider active students (weight > 0)
    const activeStudents = students.filter(s => s.weight > 0);
    
    activeStudents.forEach(student => {
        // Find index of last call in history (0 is newest)
        const lastIndex = callHistoryLog.findIndex(item => item.id === student.id);
        
        let gap;
        if (lastIndex === -1) {
            gap = totalCalls; // Never called
        } else {
            gap = lastIndex; // 0 means just called. 5 means 5 calls ago.
        }

        if (gap > maxGap) {
            maxGap = gap;
            maxGapId = student.id;
        }
    });

    document.getElementById('least-called-stat').textContent = maxGapId ? `#${maxGapId}` : '--';
    document.getElementById('least-called-sub').textContent = maxGap > -1 ? `Gap: ${maxGap}` : '';
    */

    // Render list
    const historyList = document.getElementById('history-list');
    historyList.innerHTML = '';
    
    // Show top 10 recent
    callHistoryLog.slice(0, 10).forEach(item => {
        const li = document.createElement('li');
        li.className = 'history-item';
        
        const date = new Date(item.timestamp);
        const timeStr = date.toLocaleTimeString(currentLang === 'zh-CN' ? 'zh-CN' : 'en-US');
        
        li.innerHTML = `
            <span class="student-label">#${item.id}</span>
            <span class="history-time">${timeStr}</span>
        `;
        historyList.appendChild(li);
    });
}

// Settings UI Logic
function renderSettingsList() {
    settingsList.innerHTML = '';
    
    students.forEach(student => {
        const item = document.createElement('div');
        item.className = `setting-item ${student.id === 33 ? 'special-student' : ''}`;
        const isChecked = selectedStudentIds.has(student.id);
        
        item.innerHTML = `
            <div class="batch-select-wrapper item-checkbox">
                <label class="checkbox-container">
                    <input type="checkbox" class="student-batch-cb" data-id="${student.id}" ${isChecked ? 'checked' : ''}>
                    <span class="checkmark"></span>
                </label>
            </div>
            <div class="student-label">#${student.id}</div>
            ${student.weight === 0 ? '<span class="status-excluded" data-i18n="excluded">已排除</span>' : ''}
            <div class="slider-container">
                <input type="range" min="0" max="100" value="${student.weight}" data-id="${student.id}" class="prob-slider">
            </div>
            <div class="prob-input-group">
                <input type="number" min="0" max="100" value="${student.weight}" data-id="${student.id}" class="prob-input">
                <span class="prob-unit">%</span>
            </div>
            <button class="item-reset-btn" title="Reset" onclick="resetStudent(${student.id})">
                <i class="ri-refresh-line"></i>
            </button>
        `;
        
        settingsList.appendChild(item);
    });

    document.querySelectorAll('.prob-slider').forEach(el => {
        el.addEventListener('input', (e) => updateStudentWeight(e.target.dataset.id, e.target.value));
    });
    document.querySelectorAll('.prob-input').forEach(el => {
        el.addEventListener('change', (e) => updateStudentWeight(e.target.dataset.id, e.target.value));
    });
    
    // Bind checkbox events
    document.querySelectorAll('.student-batch-cb').forEach(cb => {
        cb.addEventListener('change', (e) => {
            const id = parseInt(e.target.dataset.id);
            if (e.target.checked) {
                selectedStudentIds.add(id);
            } else {
                selectedStudentIds.delete(id);
            }
            updateBatchUI();
        });
    });
}

function updateStudentWeight(id, value) {
    let val = parseInt(value);
    if (isNaN(val)) val = 0;
    if (val < 0) val = 0;
    if (val > 100) val = 100;

    const sourceId = parseInt(id);
    
    // If in batch mode and the source is selected, update all selected
    const targets = (isBatchMode && selectedStudentIds.has(sourceId)) 
        ? Array.from(selectedStudentIds) 
        : [sourceId];

    targets.forEach(tid => {
        const student = students.find(s => s.id == tid);
        if (student) {
            student.weight = val;
            
            // Update DOM elements for this student
            const slider = document.querySelector(`.prob-slider[data-id="${tid}"]`);
            const input = document.querySelector(`.prob-input[data-id="${tid}"]`);
            if(slider) slider.value = val;
            if(input) input.value = val;
        }
    });
    
    saveStudents();
}

// Batch Mode Logic
function toggleBatchMode() {
    isBatchMode = !isBatchMode;
    probView.classList.toggle('batch-mode', isBatchMode);
    
    if (isBatchMode) {
        batchControls.classList.remove('hidden');
        batchEditBtn.classList.add('hidden');
    } else {
        batchControls.classList.add('hidden');
        batchEditBtn.classList.remove('hidden');
        selectedStudentIds.clear();
        selectAllCheckbox.checked = false;
    }
    updateBatchUI();
    renderSettingsList();
}

function updateBatchUI() {
    selectedCountNum.textContent = selectedStudentIds.size;
    // Update Select All checkbox state based on selection
    if (selectedStudentIds.size === students.length && students.length > 0) {
        selectAllCheckbox.checked = true;
        selectAllCheckbox.indeterminate = false;
    } else if (selectedStudentIds.size > 0) {
        selectAllCheckbox.checked = false;
        selectAllCheckbox.indeterminate = true;
    } else {
        selectAllCheckbox.checked = false;
        selectAllCheckbox.indeterminate = false;
    }
}

window.resetStudent = function(id) {
    let defaultWeight = 50;
    if (id === 33) defaultWeight = 25;
    updateStudentWeight(id, defaultWeight);
};

// Start
init();