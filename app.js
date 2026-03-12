// NERV Terminal Logic

document.addEventListener('DOMContentLoaded', () => {
    const splash = document.getElementById('splash-screen');
    const activateBtn = document.getElementById('activate-btn');
    const bgMusic = document.getElementById('bg-music');

    activateBtn.addEventListener('click', () => {
        // Establish Spotify Uplink
        const spotifyContainer = document.getElementById('spotify-container');
        if (spotifyContainer) {
            spotifyContainer.classList.remove('hidden');
        }

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
