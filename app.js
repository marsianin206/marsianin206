// NERV Terminal Logic

document.addEventListener('DOMContentLoaded', () => {
    const splash = document.getElementById('splash-screen');
    const activateBtn = document.getElementById('activate-btn');
    const bgMusic = document.getElementById('bg-music');

    activateBtn.addEventListener('click', () => {
        // Play music
        bgMusic.play().catch(e => console.log("Audio play blocked:", e));

        // Hide splash screen
        splash.classList.add('hidden');

        // Start typing effects
        initTypingEffect();
        handleMagiVoting();
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

// Log connection to terminal
console.log('%c [NERV] CONNECTION ESTABLISHED ', 'background: #ff6b35; color: #000; font-weight: bold;');
console.log('%c [NERV] SYNC RATE: 412.35% ', 'color: #50c878; font-weight: bold;');
console.log('%c [NERV] DATA SOURCE: marsianin206 ', 'color: #ff6b35;');
