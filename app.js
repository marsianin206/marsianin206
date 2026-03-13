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

// Log connection to terminal with enhanced diagnostics
const logStyle = 'background: #0d0d0d; color: #ff6b35; font-weight: bold; border: 1px solid #ff6b35; padding: 2px 5px;';
const successStyle = 'background: #0d0d0d; color: #50c878; font-weight: bold; border: 1px solid #50c878; padding: 2px 5px;';

console.log('%c [NERV] SYSTEM BOOT INITIALIZED ', logStyle);
setTimeout(() => {
    console.log('%c [NERV] OS: MAGI v6.2.0-NERV ', logStyle);
    console.log('%c [NERV] CONNECTION: SECURE_UPLINK_ESTABLISHED ', successStyle);
    console.log('%c [NERV] LCL CONDUCTIVITY: OPTIMAL ', successStyle);
    console.log('%c [NERV] SYNC RATE: 412.35% (OVER-SYNC DETECTED) ', 'background: #ff4500; color: #0d0d0d; font-weight: bold; padding: 2px 5px;');
    console.log('%c [NERV] PILOT: marsianin206 ', logStyle);
    console.log('%c [NERV] STATUS: ACCESS_GRANTED_TO_ALL_LEVELS ', successStyle);
}, 500);
