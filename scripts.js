document.getElementById('toggleBook').addEventListener('click', function() {
    const leftPage = document.getElementById('leftPage');
    const rightPage = document.getElementById('rightPage');
    const frontCover = document.getElementById('frontCover');

    frontCover.classList.toggle('hidden');
    leftPage.classList.remove('hidden');
    rightPage.classList.remove('hidden');

    leftPage.style.transform = 'translateX(0)';
    rightPage.style.transform = 'translateX(0)';
});

// Countdown Timer
const countdown = document.getElementById('countdown');
const targetDate = new Date('2024-08-11T18:30:00Z'); // 12th August 12:00 AM IST (IST is UTC+5:30)

function updateCountdown() {
    const now = new Date();
    const timeDifference = targetDate - now;

    if (timeDifference < 0) {
        clearInterval(timerInterval);
        countdown.textContent = 'Happy Anniversary!';
        triggerCelebration();
        return;
    }

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    countdown.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
}

const timerInterval = setInterval(updateCountdown, 1000);

// Confetti Celebration
function triggerCelebration() {
    // Example: Use confetti library or any custom code to show confetti
    console.log("Celebration triggered!");
}

// Music Control
document.getElementById('playButton').addEventListener('click', function() {
    document.getElementById('backgroundMusic').play();
});

document.getElementById('pauseButton').addEventListener('click', function() {
    document.getElementById('backgroundMusic').pause();
});
