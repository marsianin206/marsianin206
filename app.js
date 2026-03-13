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

    activateBtn.addEventListener('click', () => {
        // Play local music (Single Click Autoplay)
        if (bgMusic) {
            bgMusic.play().catch(e => console.log("Audio play blocked:", e));
        }

        // Hide splash screen
        splash.classList.add('hidden');

        // Start typing effects
        initTypingEffect();
        handleMagiVoting();
        initTetris(); // Initialize the tactical sorting system
        initEasterEggs(); // SECRET SYSTEM ACTIVATED
        initAdvancedSystems(); // A-T Field, Sync Graph & Emergency Mode
        applyTimeTheme(); // Dynamic Theme based on hour
        initGitHubSync(); // Code Integrity Status
        initTelegramFeed(); // Tactical News Broadcast
    });
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
    
    try {
        const response = await fetch(`https://api.github.com/repos/${repo}/commits?per_page=5`);
        const commits = await response.json();
        
        list.innerHTML = '';
        commits.forEach(item => {
            const date = new Date(item.commit.author.date).toLocaleDateString();
            const message = item.commit.message.split('\n')[0];
            const hash = item.sha.substring(0, 7);
            
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
        list.innerHTML = '<tr><td colspan="4" style="color: #ff4500;">CONNECTION INTERRUPTED: GITHUB_API_OFFLINE</td></tr>';
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
setTimeout(() => {
    console.log('%c [NERV] OS: MAGI v6.2.0-NERV ', logStyle);
    console.log('%c [NERV] CONNECTION: SECURE_UPLINK_ESTABLISHED ', successStyle);
    console.log('%c [NERV] LCL CONDUCTIVITY: OPTIMAL ', successStyle);
    console.log('%c [NERV] SYNC RATE: 412.35% (OVER-SYNC DETECTED) ', 'background: #ff4500; color: #0d0d0d; font-weight: bold; padding: 2px 5px;');
    console.log('%c [NERV] PILOT: marsianin206 ', logStyle);
    console.log('%c [NERV] STATUS: ACCESS_GRANTED_TO_ALL_LEVELS ', successStyle);
}, 500);
