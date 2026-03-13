// NERV Terminal Logic

document.addEventListener('DOMContentLoaded', () => {
    // Initialize Telegram WebApp
    const tg = window.Telegram?.WebApp;
    if (tg) {
        tg.ready();
        tg.expand();
    }

    const splash = document.getElementById('splash-screen');
    const activateBtn = document.getElementById('activate-btn');
    const bgMusic = document.getElementById('bg-music');
    const authStatus = document.getElementById('auth-status');
    const starBtn = document.getElementById('star-donation-btn');

    // Telegram Stars Payment Integration
    if (starBtn) {
        starBtn.addEventListener('click', () => {
            const profileUrl = 'https://t.me/SER_X_FEAR';
            
            if (tg && tg.openTelegramLink) {
                // Official way to open links in Telegram Mini App
                tg.openTelegramLink(profileUrl);
            } else {
                // Fallback for regular browsers
                window.open(profileUrl, '_blank');
            }
            
            console.log('%c [NERV] PERSONAL UPLINK TO @SER_X_FEAR ESTABLISHED ', 'background: #ffce00; color: #000; font-weight: bold;');
        });
    }

    // Update terminal with Telegram user info if available
    if (tg?.initDataUnsafe?.user) {
        const user = tg.initDataUnsafe.user;
        const userName = user.username || user.first_name || 'PILOT';
        if (authStatus) {
            authStatus.innerHTML = `> INCOMING CONNECTION: ${userName}<br>> ANALYZING BIOMETRICS...<br>> SYNC RATIO: 412.35%`;
        }
    }

    // Biometric Scanner Logic
    let scanInterval;
    let scanProgress = 0;
    const progressBar = document.querySelector('.scan-progress-bar');

    if (activateBtn) {
        activateBtn.addEventListener('mousedown', startScanning);
        activateBtn.addEventListener('touchstart', (e) => {
            e.preventDefault();
            startScanning(e);
        });
        document.addEventListener('mouseup', stopScanning);
        document.addEventListener('touchend', stopScanning);
    }

    function startScanning(e) {
        activateBtn.classList.add('scanning');
        activateBtn.innerText = 'SCANNING...';
        
        scanInterval = setInterval(() => {
            scanProgress += 2;
            if (progressBar) progressBar.style.width = `${scanProgress}%`;
            
            if (scanProgress >= 100) {
                stopScanning();
                grantAccess();
            }
        }, 30);
    }

    function stopScanning() {
        clearInterval(scanInterval);
        if (scanProgress < 100) {
            scanProgress = 0;
            if (progressBar) progressBar.style.width = '0%';
            if (activateBtn) {
                activateBtn.classList.remove('scanning');
                activateBtn.innerText = 'HOLD TO SCAN';
            }
        }
    }

    function grantAccess() {
        if (bgMusic) {
            bgMusic.play().catch(e => console.log("Audio play blocked:", e));
        }

        splash.classList.add('hidden');

        initTypingEffect();
        handleMagiVoting();
        initTetris(); 
        initEasterEggs(); 
        initAdvancedSystems(); 
        applyTimeTheme();
        initGitHubSync();
        initGitHubHeatmap(); // Bio-activity Grid
        initTelegramFeed();
        initParallax();
        initTacticalGlobe(); // Angel Tracker
        initSatelliteMap();
        initPilotLicense(); 
        initBatteryMonitor(); // Track internal power
        initAngelRadar(); // Search for Angels
        initMusicPlayer(); // Advanced SDAT
        initLCLBubbles(); // Ambient Environment
        initDepthMeter(); // Scroll Tracking
        initATFieldGame(); // Defense Mini-game
        initGitHubHeatmap(); // Bio-activity Grid
    }

    initBootSequence(); // Start First
    initCustomCursor(); // Always Active
});

/**
 * Simulates a typing effect for the authentication status
 */
function initTypingEffect() {
    const target = document.getElementById('auth-status');
    const text = target.innerHTML;
    target.innerHTML = '';

    let i = 0;
    const speed = 30; // ms

    function type() {
        if (i < text.length) {
            if (text.substring(i, i + 4) === '<br>') {
                target.innerHTML += '<br>';
                i += 4;
            } else {
                target.innerHTML += text.charAt(i);
                i++;
            }
            setTimeout(type, speed);
        } else {
            // Show access badge after typing
            const badge = document.querySelector('.access-badge');
            if (badge) {
                badge.style.display = 'inline-block';
                badge.style.opacity = '1';
            }
        }
    }

    type();
}

/**
 * Randomly flickers MAGI node statuses to simulate calculation
 */
function handleMagiVoting() {
    const nodes = document.querySelectorAll('.magi-node');

    nodes.forEach(node => {
        setInterval(() => {
            if (Math.random() > 0.95) {
                const decision = node.querySelector('.decision');
                decision.style.opacity = '0.3';
                setTimeout(() => {
                    decision.style.opacity = '1';
                }, 100);
            }
        }, 500);
    });
}

/**
 * Tactical Data Sorting (Tetris) Engine
 * NERV Tactical Interface
 */
function initTetris() {
    const canvas = document.getElementById('tetris-canvas');
    const context = canvas.getContext('2d');
    const scoreElement = document.getElementById('score');
    const syncElement = document.getElementById('tetris-sync');
    const startBtn = document.getElementById('start-tetris');

    context.scale(20, 20);

    function arenaSweep() {
        let rowCount = 1;
        outer: for (let y = arena.length - 1; y > 0; --y) {
            for (let x = 0; x < arena[y].length; ++x) {
                if (arena[y][x] === 0) {
                    continue outer;
                }
            }

            const row = arena.splice(y, 1)[0].fill(0);
            arena.unshift(row);
            ++y;

            player.score += rowCount * 10;
            rowCount *= 2;
        }
        updateScore();
    }

    function collide(arena, player) {
        const [m, o] = [player.matrix, player.pos];
        for (let y = 0; y < m.length; ++y) {
            for (let x = 0; x < m[y].length; ++x) {
                if (m[y][x] !== 0 &&
                   (arena[y + o.y] && arena[y + o.y][x + o.x]) !== 0) {
                    return true;
                }
            }
        }
        return false;
    }

    function createMatrix(w, h) {
        const matrix = [];
        while (h--) {
            matrix.push(new Array(w).fill(0));
        }
        return matrix;
    }

    function createPiece(type) {
        if (type === 'I') {
            return [
                [0, 1, 0, 0],
                [0, 1, 0, 0],
                [0, 1, 0, 0],
                [0, 1, 0, 0],
            ];
        } else if (type === 'L') {
            return [
                [0, 2, 0],
                [0, 2, 0],
                [0, 2, 2],
            ];
        } else if (type === 'J') {
            return [
                [0, 3, 0],
                [0, 3, 0],
                [3, 3, 0],
            ];
        } else if (type === 'O') {
            return [
                [4, 4],
                [4, 4],
            ];
        } else if (type === 'Z') {
            return [
                [5, 5, 0],
                [0, 5, 5],
                [0, 0, 0],
            ];
        } else if (type === 'S') {
            return [
                [0, 6, 6],
                [6, 6, 0],
                [0, 0, 0],
            ];
        } else if (type === 'T') {
            return [
                [0, 7, 0],
                [7, 7, 7],
                [0, 0, 0],
            ];
        }
    }

    function draw() {
        context.fillStyle = '#111';
        context.fillRect(0, 0, 12, 20); // Correct dimensions for arena drawing

        drawMatrix(arena, {x: 0, y: 0});
        drawMatrix(player.matrix, player.pos);
    }

    function drawMatrix(matrix, offset) {
        const colors = [
            null,
            '#ff6b35', // Orange (I)
            '#ff4500', // Red (L)
            '#50c878', // Green (J)
            '#4b0082', // Purple (O)
            '#ffd700', // Gold (Z)
            '#00ffff', // Cyan (S)
            '#ff00ff', // Magenta (T)
        ];

        matrix.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value !== 0) {
                    context.fillStyle = colors[value];
                    context.fillRect(x + offset.x, y + offset.y, 1, 1);
                    
                    context.lineWidth = 0.05;
                    context.strokeStyle = '#000';
                    context.strokeRect(x + offset.x, y + offset.y, 1, 1);
                }
            });
        });
    }

    function merge(arena, player) {
        player.matrix.forEach((row, y) => {
            row.forEach((value, x) => {
                if (value !== 0) {
                    arena[y + player.pos.y][x + player.pos.x] = value;
                }
            });
        });
    }

    function rotate(matrix, dir) {
        for (let y = 0; y < matrix.length; ++y) {
            for (let x = 0; x < y; ++x) {
                [
                    matrix[x][y],
                    matrix[y][x],
                ] = [
                    matrix[y][x],
                    matrix[x][y],
                ];
            }
        }
        if (dir > 0) {
            matrix.forEach(row => row.reverse());
        } else {
            matrix.reverse();
        }
    }

    function playerDrop() {
        player.pos.y++;
        if (collide(arena, player)) {
            player.pos.y--;
            merge(arena, player);
            playerReset();
            arenaSweep();
            updateScore();
        }
        dropCounter = 0;
    }

    function playerMove(offset) {
        player.pos.x += offset;
        if (collide(arena, player)) {
            player.pos.x -= offset;
        }
    }

    function playerReset() {
        const pieces = 'TJLOSZI';
        player.matrix = createPiece(pieces[pieces.length * Math.random() | 0]);
        player.pos.y = 0;
        player.pos.x = (arena[0].length / 2 | 0) -
                       (player.matrix[0].length / 2 | 0);
        if (collide(arena, player)) {
            arena.forEach(row => row.fill(0));
            player.score = 0;
            updateScore();
        }
    }

    function playerRotate(dir) {
        const pos = player.pos.x;
        let offset = 1;
        rotate(player.matrix, dir);
        while (collide(arena, player)) {
            player.pos.x += offset;
            offset = -(offset + (offset > 0 ? 1 : -1));
            if (offset > player.matrix[0].length) {
                rotate(player.matrix, -dir);
                player.pos.x = pos;
                return;
            }
        }
    }

    let dropCounter = 0;
    let dropInterval = 1000;

    let lastTime = 0;
    function update(time = 0) {
        const deltaTime = time - lastTime;

        dropCounter += deltaTime;
        if (dropCounter > dropInterval) {
            playerDrop();
        }

        lastTime = time;

        draw();
        requestAnimationFrame(update);
    }

    function updateScore() {
        scoreElement.innerText = player.score.toString().padStart(4, '0');
        const syncValue = (10 + (player.score / 50)).toFixed(1);
        syncElement.innerText = syncValue + '%';
        
        dropInterval = Math.max(100, 1000 - (player.score / 10) * 50);
    }

    const arena = createMatrix(12, 20);

    const player = {
        pos: {x: 0, y: 0},
        matrix: null,
        score: 0,
    };

    document.addEventListener('keydown', event => {
        if (event.keyCode === 37) playerMove(-1);
        else if (event.keyCode === 39) playerMove(1);
        else if (event.keyCode === 40) playerDrop();
        else if (event.keyCode === 87) playerRotate(1);
    });

    document.getElementById('ctrl-left').addEventListener('click', () => playerMove(-1));
    document.getElementById('ctrl-right').addEventListener('click', () => playerMove(1));
    document.getElementById('ctrl-down').addEventListener('click', () => playerDrop());
    document.getElementById('ctrl-rot').addEventListener('click', () => playerRotate(1));

    startBtn.addEventListener('click', () => {
        playerReset();
        updateScore();
        update();
        startBtn.style.display = 'none';
    });
}

/**
 * NERV SECRET ARCHIVE: Easter Egg System
 * Total: 10 Hidden Protocols
 */
function initEasterEggs() {
    console.log('%c [NERV] HIDDEN PROTOCOLS LOADED ', 'background: #4b0082; color: #fff; font-weight: bold;');

    const msgBox = document.getElementById('hidden-msg');
    const showMsg = (text, duration = 3000) => {
        msgBox.innerHTML = `<h2 class="glitch-text">${text}</h2>`;
        msgBox.style.display = 'block';
        setTimeout(() => { msgBox.style.display = 'none'; }, duration);
    };

    // 1. KONAMI CODE (Berserk Mode)
    let konamiCode = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a'];
    let konamiPos = 0;
    document.addEventListener('keydown', (e) => {
        if (e.key === konamiCode[konamiPos]) {
            konamiPos++;
            if (konamiPos === konamiCode.length) {
                document.body.classList.add('berserk-mode');
                showMsg("BERSERK MODE: 400% SYNC REACHED", 5000);
                setTimeout(() => { document.body.classList.remove('berserk-mode'); }, 10000);
                konamiPos = 0;
            }
        } else { konamiPos = 0; }
    });

    // 2. NERV LOGO DOUBLE-CLICK (Gendo Quote)
    const logo = document.querySelector('.banner-img') || document.querySelector('.splash-logo');
    if (logo) {
        logo.addEventListener('dblclick', () => {
            showMsg("GENDO: \"Humanity's fate is in our hands.\"");
        });
    }

    // 3. MAGI 3-2-1 CLICKS (Self-Destruct)
    let magiSequence = [];
    document.querySelectorAll('.magi-node').forEach(node => {
        node.addEventListener('click', () => {
            const id = node.getAttribute('data-node');
            magiSequence.push(id);
            if (magiSequence.join('-').includes('CASPER-BALTHASAR-MELCHIOR')) {
                showMsg("CRITICAL: SELF-DESTRUCT INITIATED (ERROR 606)", 4000);
                magiSequence = [];
            }
        });
    });

    // 4. REI CLONE CLICK (3 times on Rei)
    const reiCard = document.querySelector('.dossier-card img[alt="Rei Ayanami"]');
    if (reiCard) {
        let reiClicks = 0;
        reiCard.addEventListener('click', () => {
            reiClicks++;
            if (reiClicks === 3) {
                reiCard.style.opacity = '0.1';
                setTimeout(() => { reiCard.style.opacity = '1'; }, 2000);
                showMsg("REI: \"I am me. But I am also someone else.\"");
                reiClicks = 0;
            }
        });
    }

    // 5. PEN-PEN WALK (Click Footer Copyright)
    const footer = document.querySelector('.main-footer');
    if (footer) {
        footer.addEventListener('click', () => {
            const penpen = document.createElement('img');
            penpen.src = 'https://upload.wikimedia.org/wikipedia/en/b/b3/Pen-Pen_%2BEvangelion%2B.png';
            penpen.className = 'penpen-walk';
            document.body.appendChild(penpen);
            setTimeout(() => { penpen.style.transform = 'translateX(-150vw)'; }, 100);
            setTimeout(() => { penpen.remove(); }, 6000);
        });
    }

    // 6. LCL MODE (Double click on "LCL PRESSURE" card)
    const lclCard = document.querySelector('.green-glow');
    if (lclCard) {
        lclCard.addEventListener('dblclick', () => {
            document.body.classList.toggle('lcl-active');
            showMsg("LCL DEPTH: 100% - INTERFACE TUNED");
        });
    }

    // 7. TABRIS GHOST (Type "17" for 17th Angel)
    let ghostTrigger = '';
    document.addEventListener('keydown', (e) => {
        ghostTrigger += e.key;
        if (ghostTrigger.includes('17')) {
            const h2 = document.querySelector('.section-title');
            const original = h2.innerText;
            h2.innerText = "TABRIS PROTOCOL // KAWORU NAGISA";
            h2.classList.add('secret-data');
            setTimeout(() => { 
                h2.innerText = original; 
                h2.classList.remove('secret-data');
            }, 3000);
            ghostTrigger = '';
        }
        if (ghostTrigger.length > 5) ghostTrigger = '';
    });

    // 8. SYNC LIMIT (Hold Start Button for 3 seconds)
    const startTetris = document.getElementById('start-tetris');
    if (startTetris) {
        let holdTimer;
        startTetris.addEventListener('mousedown', () => {
            holdTimer = setTimeout(() => {
                showMsg("SYNC RATIO: INFINITE - A-T FIELD COLLAPSING", 3000);
            }, 3000);
        });
        startTetris.addEventListener('mouseup', () => clearTimeout(holdTimer));
    }

    // 9. BAKA MODE (Secret word)
    let bakaSeq = '';
    document.addEventListener('keydown', (e) => {
        bakaSeq += e.key.toLowerCase();
        if (bakaSeq.includes('baka')) {
            showMsg("ASUKA: \"Anta Baka?!\"", 2000);
            bakaSeq = '';
        }
        if (bakaSeq.length > 10) bakaSeq = '';
    });

    // 10. TERMINAL "STATUS" (Double click auth-status)
    const auth = document.getElementById('auth-status');
    if (auth) {
        auth.addEventListener('dblclick', () => {
            showMsg("CONNECTION: SECURE // GOD'S IN HIS HEAVEN");
        });
    }
}

// Log connection to terminal with enhanced diagnostics
const logStyle = 'background: #0d0d0d; color: #ff6b35; font-weight: bold; border: 1px solid #ff6b35; padding: 2px 5px;';
const successStyle = 'background: #0d0d0d; color: #50c878; font-weight: bold; border: 1px solid #50c878; padding: 2px 5px;';

/**
 * ADVANCED SYSTEMS: A-T Field, Sync Graph, Emergency & Themes
 */
function initAdvancedSystems() {
    initATField();
    initSyncGraph();
    startEmergencyCycle();
}

function applyTimeTheme() {
    const hour = new Date().getHours();
    const body = document.body;
    body.classList.remove('theme-rei', 'theme-shinji', 'theme-asuka');
    
    if (hour >= 6 && hour < 18) {
        body.classList.add('theme-rei'); // Day: Orange
    } else if (hour >= 18 && hour < 22) {
        body.classList.add('theme-shinji'); // Evening: Purple
    } else {
        body.classList.add('theme-asuka'); // Night: Red
    }
}

function initATField() {
    const canvas = document.getElementById('at-field-canvas');
    const ctx = canvas.getContext('2d');
    let points = [];

    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
    window.dispatchEvent(new Event('resize'));

    document.addEventListener('mousemove', (e) => {
        points.push({ x: e.clientX, y: e.clientY, r: 10, a: 1 });
        if (points.length > 20) points.shift();
    });

    function drawHexagon(x, y, size) {
        ctx.beginPath();
        for (let i = 0; i < 6; i++) {
            ctx.lineTo(x + size * Math.cos(i * Math.PI / 3), y + size * Math.sin(i * Math.PI / 3));
        }
        ctx.closePath();
        ctx.stroke();
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.strokeStyle = getComputedStyle(document.body).getPropertyValue('--accent');
        ctx.lineWidth = 2;

        points.forEach((p, i) => {
            ctx.globalAlpha = p.a;
            drawHexagon(p.x, p.y, p.r);
            p.r += 2;
            p.a -= 0.05;
            if (p.a <= 0) points.splice(i, 1);
        });
        requestAnimationFrame(animate);
    }
    animate();
}

function initSyncGraph() {
    const canvas = document.getElementById('sync-graph');
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    let data = new Array(50).fill(50);

    function resize() {
        const rect = canvas.parentNode.getBoundingClientRect();
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
        ctx.scale(dpr, dpr);
    }
    window.addEventListener('resize', resize);
    resize();

    function draw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.beginPath();
        ctx.strokeStyle = getComputedStyle(document.body).getPropertyValue('--accent');
        ctx.lineWidth = 2;

        const step = canvas.width / dpr / (data.length - 1);
        data.forEach((val, i) => {
            const x = i * step;
            const y = (val / 100) * (canvas.height / dpr);
            if (i === 0) ctx.moveTo(x, y);
            else ctx.lineTo(x, y);
        });
        ctx.stroke();

        data.push(40 + Math.random() * 40);
        data.shift();
        requestAnimationFrame(draw);
    }
    draw();
}

function startEmergencyCycle() {
    setInterval(() => {
        document.body.classList.add('emergency-mode');
        setTimeout(() => {
            document.body.classList.remove('emergency-mode');
        }, 5000);
    }, 60000); // Every minute for 5 seconds
}

/**
 * GITHUB LIVE SYNC: Code Integrity
 */
async function initGitHubSync() {
    const list = document.getElementById('github-commits');
    const repo = 'marsianin206/marsianin206';
    
    // Simulated data for fallback (NERV Immersion)
    const simulatedCommits = [
        { msg: "Neural Link Stabilization Patch", hash: "e1a05af", status: "STABLE" },
        { msg: "MAGI Connectivity Optimization", hash: "b4c2d91", status: "STABLE" },
        { msg: "LCL Pressure Control Logic", hash: "f9e8a72", status: "STABLE" },
        { msg: "A-T Field Generator Calibration", hash: "d3b4c5e", status: "STABLE" },
        { msg: "Human Instrumentality Core v6.0", hash: "a1b2c3d", status: "STABLE" }
    ];

    try {
        console.log('[NERV] INITIATING GITHUB UPLINK...');
        const response = await fetch(`https://api.github.com/repos/${repo}/commits?per_page=5`, {
            method: 'GET',
            mode: 'cors',
            headers: { 'Accept': 'application/vnd.github.v3+json' }
        });
        
        if (!response.ok) {
            throw new Error(`INTERNAL_STATUS_${response.status}`);
        }

        const commits = await response.json();
        
        list.innerHTML = '';
        commits.forEach(item => {
            const date = new Date(item.commit.author.date).toLocaleDateString();
            const message = (item.commit.message || 'NO RECORD').split('\n')[0];
            const hash = (item.sha || 'XXXXXXX').substring(0, 7);
            
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td>> ${message.toUpperCase()}</td>
                <td class="commit-hash">[${hash}]</td>
                <td class="status-success">STABLE</td>
                <td>${date}</td>
            `;
            list.appendChild(tr);
        });
        
        console.log('%c [NERV] GITHUB TELEMETRY: SYNC COMPLETE ', 'background: #000; color: #50c878; border: 1px solid #50c878; padding: 2px;');
    } catch (e) {
        console.warn('[NERV] GITHUB UPLINK FAILED. ACTIVATING SIMULATED TACTICAL DATA.');
        
        // Fallback to simulated data to keep the UI looking cool
        list.innerHTML = '';
        simulatedCommits.forEach(item => {
            const tr = document.createElement('tr');
            tr.innerHTML = `
                <td style="color: #ff6b35;">> ${item.msg.toUpperCase()} (SIM)</td>
                <td class="commit-hash">[${item.hash}]</td>
                <td style="color: #ff4500;">ENCRYPTED</td>
                <td>--.--.--</td>
            `;
            list.appendChild(tr);
        });

        // Add a small warning in the footer of the table
        const warningTr = document.createElement('tr');
        warningTr.innerHTML = `<td colspan="4" style="color: #ff4500; font-size: 0.7rem; text-align: center;">SIGNAL JAMMING DETECTED: SHOWING CACHED TACTICAL DATA</td>`;
        list.appendChild(warningTr);
    }
}

/**
 * TELEGRAM BROADCAST: News Feed
 */
function initTelegramFeed() {
    const ticker = document.getElementById('telegram-ticker');
    const messages = [
        "PILOT MARSIANIN206 HAS ENTERED THE GEORFRONT",
        "PATTERN BLUE DETECTED NEAR TOKYO-3 SUBURBS",
        "EVA-01 SYNCHRONIZATION RATIO AT 412.35% (OVERLOAD)",
        "NERV HQ: ALL SYSTEMS TRANSFERRED TO INTERNAL POWER",
        "MAGI SYSTEM STATUS: UNANIMOUS APPROVAL FOR COUNTER-ATTACK",
        "NEW CODE UPDATE DETECTED: PROJECT 'HUMAN INSTRUMENTALITY' v6.2.0",
        "LCL PRESSURE STABILIZED... NEURAL LINK ESTABLISHED",
        "FOLLOW @XFEARinfo FOR REAL-TIME TACTICAL UPDATES"
    ];
    
    let i = 0;
    function cycleTicker() {
        ticker.innerText = messages[i];
        i = (i + 1) % messages.length;
        
        // Reset animation to sync with text change
        ticker.style.animation = 'none';
        ticker.offsetHeight; // force reflow
        ticker.style.animation = null;
    }
    
    setInterval(cycleTicker, 20000); // Change news every time the animation repeats
    cycleTicker();
}

console.log('%c [NERV] SYSTEM BOOT INITIALIZED ', logStyle);

/**
 * GEOFRONT PARALLAX: Background Shift
 */
function initParallax() {
    const layers = [
        { el: document.querySelector('.layer-back'), speed: 0.02 },
        { el: document.querySelector('.layer-mid'), speed: 0.05 },
        { el: document.querySelector('.layer-front'), speed: 0.1 }
    ];

    document.addEventListener('mousemove', (e) => {
        const x = (window.innerWidth / 2 - e.clientX) * 0.01;
        const y = (window.innerHeight / 2 - e.clientY) * 0.01;

        layers.forEach(layer => {
            if (layer.el) {
                layer.el.style.transform = `translate(${x * layer.speed * 100}px, ${y * layer.speed * 100}px)`;
            }
        });
    });

    // Mobile Gyroscope support
    if (window.DeviceOrientationEvent) {
        window.addEventListener('deviceorientation', (e) => {
            const x = e.gamma * 0.5; // Left/Right
            const y = e.beta * 0.5;  // Front/Back
            
            layers.forEach(layer => {
                if (layer.el) {
                    layer.el.style.transform = `translate(${x * layer.speed * 10}px, ${y * layer.speed * 10}px)`;
                }
            });
        });
    }
}

/**
 * SATELLITE MAP: NERV Base Generation
 */
function initSatelliteMap() {
    const map = document.getElementById('world-map');
    if (!map) return;

    const baseLocations = [
        { top: '35%', left: '80%' }, // Tokyo-3
        { top: '40%', left: '20%' }, // Nevada
        { top: '45%', left: '48%' }, // Berlin
        { top: '80%', left: '15%' }, // Antarctica
        { top: '25%', left: '30%' }, // London
        { top: '60%', left: '85%' }, // Sydney
    ];

    baseLocations.forEach(loc => {
        const dot = document.createElement('div');
        dot.className = 'map-dot';
        dot.style.top = loc.top;
        dot.style.left = loc.left;
        map.appendChild(dot);
    });

    // Random noise dots
    setInterval(() => {
        const tempDot = document.createElement('div');
        tempDot.className = 'map-dot';
        tempDot.style.top = Math.random() * 80 + 10 + '%';
        tempDot.style.left = Math.random() * 80 + 10 + '%';
        tempDot.style.opacity = '0.4';
        map.appendChild(tempDot);
        setTimeout(() => tempDot.remove(), 2000);
    }, 3000);
}

/**
 * PILOT LICENSE: Load User Data for 2026 Credentials
 */
function initPilotLicense() {
    const nameLabel = document.getElementById('license-name');
    const photoArea = document.getElementById('user-photo');
    const downloadBtn = document.getElementById('download-id');
    const tg = window.Telegram?.WebApp;

    if (tg?.initDataUnsafe?.user) {
        const user = tg.initDataUnsafe.user;
        const fullName = `${user.first_name || ''} ${user.last_name || ''}`.trim() || user.username || 'PILOT_04';
        
        if (nameLabel) nameLabel.innerText = fullName.toUpperCase();
        
        if (user.photo_url && photoArea) {
            photoArea.innerHTML = `<img src="${user.photo_url}" style="width:100%; height:100%; object-fit:cover; filter: grayscale(1) contrast(1.2) sepia(0.5) hue-rotate(-20deg);">`;
        }
    }

    if (downloadBtn) {
        downloadBtn.addEventListener('click', () => {
            // Simple ripple animation on click
            downloadBtn.style.transform = 'scale(0.95)';
            setTimeout(() => downloadBtn.style.transform = 'scale(1)', 100);
            
            if (tg) {
                tg.showAlert('ACCESS GRANTED: SECURITY CREDENTIALS LINKED TO YOUR TG_ID. [STATUS: ENCRYPTED_2026]');
            } else {
                alert('ACCESS GRANTED: SECURITY CREDENTIALS LINKED TO YOUR SYSTEM. [STATUS: ENCRYPTED_2026]');
            }
        });
    }

    console.log('%c [NERV] PILOT LICENSE 2026 GENERATED ', 'background: #000; color: #ff6b35; border: 1px solid #ff6b35; padding: 2px;');
}

/**
 * BATTERY MONITOR: Real-time Device Power
 */
function initBatteryMonitor() {
    const levelBar = document.getElementById('battery-level');
    const percentText = document.getElementById('battery-percent');

    if (navigator.getBattery) {
        navigator.getBattery().then(battery => {
            function updateAll() {
                const level = battery.level * 100;
                if (levelBar) levelBar.style.width = level + '%';
                if (percentText) percentText.innerText = Math.round(level) + '%';
                
                // Color shift based on energy
                if (level < 20) {
                    levelBar.style.background = '#ff0000'; // RED ALERT
                } else if (level < 50) {
                    levelBar.style.background = '#ffce00'; // CAUTION
                } else {
                    levelBar.style.background = '#50c878'; // OPTIMAL
                }
            }
            
            updateAll();
            battery.addEventListener('levelchange', updateAll);
        });
    }
}

/**
 * ANGEL RADAR: Oscilloscope Animation
 */
function initAngelRadar() {
    const canvas = document.getElementById('radar-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const status = document.getElementById('radar-status');
    
    let angle = 0;
    const points = [];

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        // Draw Grid
        ctx.strokeStyle = 'rgba(255, 69, 0, 0.2)';
        ctx.beginPath();
        ctx.arc(canvas.width/2, canvas.height/2, 40, 0, Math.PI * 2);
        ctx.stroke();
        
        // Draw Sweep
        ctx.strokeStyle = 'rgba(255, 69, 0, 0.8)';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(canvas.width/2, canvas.height/2);
        const x = canvas.width/2 + Math.cos(angle) * 50;
        const y = canvas.height/2 + Math.sin(angle) * 50;
        ctx.lineTo(x, y);
        ctx.stroke();
        
        // Randomly "Detect" something
        if (Math.random() > 0.99 && points.length < 3) {
            points.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                life: 100
            });
            if (status) {
                status.innerText = 'PATTERN BLUE!';
                status.style.color = '#ff0000';
                setTimeout(() => {
                    status.innerText = 'SCANNING...';
                    status.style.color = 'inherit';
                }, 3000);
            }
        }
        
        // Draw Points
        points.forEach((p, idx) => {
            ctx.fillStyle = `rgba(255, 0, 0, ${p.life / 100})`;
            ctx.beginPath();
            ctx.arc(p.x, p.y, 3, 0, Math.PI * 2);
            ctx.fill();
            p.life -= 0.5;
            if (p.life <= 0) points.splice(idx, 1);
        });

        angle += 0.05;
        requestAnimationFrame(animate);
    }
    animate();
}

/**
 * BOOT SEQUENCE: Fake Terminal Booting
 */
function initBootSequence() {
    const bootScreen = document.getElementById('boot-screen');
    const log = document.getElementById('boot-log');
    const lines = [
        "MAGI SYSTEM v6.2.0 INITIALIZING...",
        "CHECKING MELCHIOR-1... OK",
        "CHECKING BALTHASAR-2... OK",
        "CHECKING CASPER-3... OK",
        "LCL CONDUCTIVITY: 99.8%",
        "NEURAL LINK: ESTABLISHED",
        "ENTRY PLUG STATUS: READY",
        "CONNECTING TO NERV HQ...",
        "ACCESS GRANTED."
    ];
    
    let i = 0;
    function addLine() {
        if (i < lines.length) {
            log.innerHTML += `> ${lines[i]}<br>`;
            i++;
            setTimeout(addLine, 200);
        } else {
            setTimeout(() => {
                bootScreen.style.opacity = '0';
                setTimeout(() => bootScreen.style.display = 'none', 500);
            }, 500);
        }
    }
    addLine();
}

/**
 * CUSTOM CURSOR: NERV Crosshair
 */
function initCustomCursor() {
    const cursor = document.getElementById('nerv-cursor');
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
    });

    const interactive = document.querySelectorAll('button, a, .dossier-card');
    interactive.forEach(el => {
        el.addEventListener('mouseenter', () => cursor.classList.add('cursor-hover'));
        el.addEventListener('mouseleave', () => cursor.classList.remove('cursor-hover'));
    });
}

/**
 * LCL BUBBLES: Ambient Particles
 */
function initLCLBubbles() {
    const container = document.getElementById('lcl-bubbles');
    setInterval(() => {
        if (!document.body.classList.contains('lcl-active')) return;
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        const size = Math.random() * 10 + 5;
        bubble.style.width = size + 'px';
        bubble.style.height = size + 'px';
        bubble.style.left = Math.random() * 100 + 'vw';
        bubble.style.animationDuration = Math.random() * 3 + 2 + 's';
        container.appendChild(bubble);
        setTimeout(() => bubble.remove(), 5000);
    }, 300);
}

/**
 * MUSIC PLAYER: Advanced SDAT Interface
 */
function initMusicPlayer() {
    const bgMusic = document.getElementById('bg-music');
    const playPause = document.getElementById('play-pause');
    const trackInfo = document.querySelector('.track-info');
    const nextBtn = document.getElementById('next-track');
    const prevBtn = document.getElementById('prev-track');

    const playlist = [
        { name: "DECISIVE_BATTLE", src: "assets/audio/music.mp3" },
        { name: "A_CRUEL_ANGELS_THESIS", src: "assets/audio/music.mp3" }, // Fallback to same file
        { name: "THANATOS", src: "assets/audio/music.mp3" }
    ];
    let currentTrack = 0;

    if (playPause) {
        playPause.addEventListener('click', () => {
            if (bgMusic.paused) {
                bgMusic.play();
                playPause.innerText = 'PAUSE';
            } else {
                bgMusic.pause();
                playPause.innerText = 'PLAY';
            }
        });
    }

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            currentTrack = (currentTrack + 1) % playlist.length;
            trackInfo.innerText = `TRACK_0${currentTrack+1}: ${playlist[currentTrack].name}`;
        });
    }
}

/**
 * DEPTH METER: Scroll-based tracking
 */
function initDepthMeter() {
    const pointer = document.getElementById('meter-pointer');
    const value = document.getElementById('depth-value');
    const maxDepth = 1500; // max meters

    window.addEventListener('scroll', () => {
        const scrollPercent = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
        const currentDepth = Math.round((scrollPercent / 100) * maxDepth);
        
        if (pointer) pointer.style.top = `${scrollPercent}%`;
        if (value) value.innerText = `${currentDepth.toString().padStart(4, '0')}m`;
    });
}

/**
 * A-T FIELD DEFENSE: Clicker game
 */
function initATFieldGame() {
    const canvas = document.getElementById('at-game-canvas');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const startBtn = document.getElementById('start-at-game');
    const overlay = document.getElementById('game-overlay');
    const integrityLabel = document.getElementById('at-integrity');
    
    let integrity = 100;
    let targets = [];
    let gameActive = false;

    function spawnTarget() {
        if (!gameActive) return;
        targets.push({
            x: Math.random() * (canvas.width - 20) + 10,
            y: Math.random() * (canvas.height - 20) + 10,
            r: 0,
            maxR: 15,
            speed: 0.2 + (Math.random() * 0.3)
        });
        setTimeout(spawnTarget, 1000 - (100 - integrity) * 5);
    }

    function update() {
        if (!gameActive) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        ctx.strokeStyle = 'rgba(255, 107, 53, 0.2)';
        ctx.beginPath();
        for(let i=0; i<canvas.width; i+=20) { ctx.moveTo(i, 0); ctx.lineTo(i, canvas.height); }
        for(let i=0; i<canvas.height; i+=20) { ctx.moveTo(0, i); ctx.lineTo(canvas.width, i); }
        ctx.stroke();

        targets.forEach((t, i) => {
            t.r += t.speed;
            
            // Draw Target (Angel Core)
            ctx.beginPath();
            ctx.arc(t.x, t.y, t.r, 0, Math.PI * 2);
            ctx.strokeStyle = '#ff0000';
            ctx.stroke();
            
            if (t.r > t.maxR) {
                targets.splice(i, 1);
                integrity -= 5;
                updateIntegrity();
            }
        });

        if (integrity <= 0) endGame();
        else requestAnimationFrame(update);
    }

    function updateIntegrity() {
        integrity = Math.max(0, integrity);
        integrityLabel.innerText = integrity + '%';
        if (integrity < 30) integrityLabel.style.color = '#ff0000';
        else if (integrity < 60) integrityLabel.style.color = '#ffce00';
    }

    function endGame() {
        gameActive = false;
        overlay.style.display = 'block';
        startBtn.innerText = 'REBOOT SYSTEM';
        alert('CRITICAL FAILURE: A-T FIELD COLLAPSED');
    }

    canvas.addEventListener('mousedown', (e) => {
        if (!gameActive) return;
        const rect = canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        targets.forEach((t, i) => {
            const dist = Math.sqrt((mouseX - t.x)**2 + (mouseY - t.y)**2);
            if (dist < t.r + 10) {
                targets.splice(i, 1);
                integrity = Math.min(100, integrity + 1);
                updateIntegrity();
            }
        });
    });

    startBtn.addEventListener('click', () => {
        integrity = 100;
        targets = [];
        gameActive = true;
        overlay.style.display = 'none';
        updateIntegrity();
        spawnTarget();
        update();
    });
}



/**
 * TACTICAL GLOBE: Angel Tracking System
 */
function initTacticalGlobe() {
    const markersContainer = document.getElementById('globe-markers');
    const nameEl = document.getElementById('target-name');
    const coordsEl = document.getElementById('target-coords');
    const alertEl = document.getElementById('target-alert');
    
    if (!markersContainer) return;

    const angels = [
        { name: 'SACHIEL', coords: '35°15\'00"N 139°10\'00"E', top: '40%', left: '70%', alert: 'S' },
        { name: 'SHAMSHIEL', coords: '34°40\'00"N 139°30\'00"E', top: '60%', left: '80%', alert: 'A' },
        { name: 'RAMIEL', coords: '35°25\'00"N 138°50\'00"E', top: '30%', left: '40%', alert: 'S' },
        { name: 'GAGHIEL', coords: '54°00\'00"N 10°00\'00"E', top: '20%', left: '30%', alert: 'B' },
        { name: 'ZERUEL', coords: '35°00\'00"N 139°00\'00"E', top: '50%', left: '50%', alert: 'GOD' }
    ];

    let currentIdx = 0;

    function updateTargetInfo(angel) {
        if (!nameEl || !coordsEl || !alertEl) return;
        nameEl.innerText = angel.name;
        coordsEl.innerText = angel.coords;
        alertEl.innerText = `LEVEL ${angel.alert} / CODE RED`;
        alertEl.className = 'val color-red';
    }

    function spawnMarker() {
        if (!markersContainer) return;
        const angel = angels[currentIdx];
        markersContainer.innerHTML = '';
        
        const marker = document.createElement('div');
        marker.className = 'globe-marker';
        marker.style.top = angel.top;
        marker.style.left = angel.left;
        
        markersContainer.appendChild(marker);
        updateTargetInfo(angel);
        
        currentIdx = (currentIdx + 1) % angels.length;
        setTimeout(spawnMarker, 5000);
    }

    spawnMarker();
}

/**
 * GITHUB HEATMAP: Bio-activity Grid Generation
 */
function initGitHubHeatmap() {
    const grid = document.getElementById('github-heatmap');
    if (!grid) return;

    // Generate 52 weeks * 7 days = 364 cells
    const totalCells = 52 * 7;
    let html = '';

    for (let i = 0; i < totalCells; i++) {
        const randomFactor = Math.random();
        let level = 0;

        if (randomFactor > 0.95) level = 4;
        else if (randomFactor > 0.85) level = 3;
        else if (randomFactor > 0.70) level = 2;
        else if (randomFactor > 0.50) level = 1;

        const weekIndex = Math.floor(i / 7);
        if (weekIndex % 4 === 0 && level > 0) level = Math.min(4, level + 1);
        if (weekIndex % 10 === 0) level = 0;

        html += `<div class="cell" data-level="${level}" title="TACTICAL ACTIVITY LEVEL: ${level}"></div>`;
    }

    grid.innerHTML = html;
}

setTimeout(() => {
    console.log('%c [NERV] OS: MAGI v6.2.0-NERV ', logStyle);
    console.log('%c [NERV] CONNECTION: SECURE_UPLINK_ESTABLISHED ', successStyle);
    console.log('%c [NERV] LCL CONDUCTIVITY: OPTIMAL ', successStyle);
    console.log('%c [NERV] SYNC RATE: 412.35% (OVER-SYNC DETECTED) ', 'background: #ff4500; color: #0d0d0d; font-weight: bold; padding: 2px 5px;');
    console.log('%c [NERV] PILOT: marsianin206 ', logStyle);
    console.log('%c [NERV] STATUS: ACCESS_GRANTED_TO_ALL_LEVELS ', successStyle);
}, 500);
