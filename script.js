// DOM Elements
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const contactForm = document.getElementById('contactForm');

// Mobile Navigation Toggle
hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    hamburger.classList.toggle('active');
});

// Close mobile menu when clicking on a link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.classList.remove('active');
    });
});

// Smooth scrolling for navigation links
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            const offsetTop = targetSection.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Navbar background change on scroll
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = 'none';
    }
});

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const scrollPos = window.scrollY + 100;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        const correspondingLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

        if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
            navLinks.forEach(link => link.classList.remove('active'));
            if (correspondingLink) {
                correspondingLink.classList.add('active');
            }
        }
    });
});

// Contact form handling
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');
    const message = formData.get('message');
    
    // Simple validation
    if (!name || !email || !subject || !message) {
        showNotification('Please fill in all fields.', 'error');
        return;
    }
    
    if (!isValidEmail(email)) {
        showNotification('Please enter a valid email address.', 'error');
        return;
    }
    
    // Simulate form submission
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.textContent;
    
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    
    // Simulate API call
    setTimeout(() => {
        showNotification('Thank you for your message! I\'ll get back to you soon.', 'success');
        contactForm.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }, 2000);
});

// Email validation function
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.notification');
    existingNotifications.forEach(notification => notification.remove());
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    
    // Add styles
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        padding: 15px 20px;
        border-radius: 8px;
        color: white;
        font-weight: 500;
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
        word-wrap: break-word;
    `;
    
    // Set background color based on type
    if (type === 'success') {
        notification.style.background = '#10b981';
    } else if (type === 'error') {
        notification.style.background = '#ef4444';
    } else {
        notification.style.background = '#3b82f6';
    }
    
    // Add to DOM
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    // Remove after 5 seconds
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) {
                notification.parentNode.removeChild(notification);
            }
        }, 300);
    }, 5000);
}

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.skill-category, .project-card, .stat, .contact-method');
    
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
});

// Typing animation for hero title
function typeWriter(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = '';
    
    function type() {
        if (i < text.length) {
            element.innerHTML += text.charAt(i);
            i++;
            setTimeout(type, speed);
        }
    }
    
    type();
}

// Initialize typing animation when page loads
window.addEventListener('load', () => {
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        const originalText = heroTitle.innerHTML;
        // Uncomment the line below to enable typing animation
        // typeWriter(heroTitle, originalText, 50);
    }
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Skill items hover effect
document.addEventListener('DOMContentLoaded', () => {
    const skillItems = document.querySelectorAll('.skill-item');
    
    skillItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            item.style.transform = 'translateY(-5px) scale(1.05)';
        });
        
        item.addEventListener('mouseleave', () => {
            item.style.transform = 'translateY(0) scale(1)';
        });
    });
});

// Project cards tilt effect
document.addEventListener('DOMContentLoaded', () => {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        card.addEventListener('mousemove', (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(10px)`;
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateZ(0)';
        });
    });
});

// Scroll to top functionality
function createScrollToTopButton() {
    const scrollBtn = document.createElement('button');
    scrollBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
    scrollBtn.className = 'scroll-to-top';
    scrollBtn.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        width: 50px;
        height: 50px;
        border: none;
        border-radius: 50%;
        background: #2563eb;
        color: white;
        font-size: 1.2rem;
        cursor: pointer;
        opacity: 0;
        visibility: hidden;
        transition: all 0.3s ease;
        z-index: 1000;
        box-shadow: 0 4px 12px rgba(37, 99, 235, 0.3);
    `;
    
    document.body.appendChild(scrollBtn);
    
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollBtn.style.opacity = '1';
            scrollBtn.style.visibility = 'visible';
        } else {
            scrollBtn.style.opacity = '0';
            scrollBtn.style.visibility = 'hidden';
        }
    });
    
    // Scroll to top when clicked
    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Hover effects
    scrollBtn.addEventListener('mouseenter', () => {
        scrollBtn.style.background = '#1d4ed8';
        scrollBtn.style.transform = 'scale(1.1)';
    });
    
    scrollBtn.addEventListener('mouseleave', () => {
        scrollBtn.style.background = '#2563eb';
        scrollBtn.style.transform = 'scale(1)';
    });
}

// Initialize scroll to top button
createScrollToTopButton();

// Loading animation
window.addEventListener('load', () => {
    document.body.classList.add('loaded');
});

// Add loaded class to body for CSS animations
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        document.body.classList.add('loaded');
    }, 100);

    const pacmanCanvas = document.getElementById('pacmanCanvas');
    if (pacmanCanvas) {
        const scoreEl = document.getElementById('pacmanScore');
        const statusEl = document.getElementById('pacmanStatus');
        new PacmanGame(pacmanCanvas, scoreEl, statusEl);
    }
});

// Console welcome message
console.log(`
🚀 Welcome to Rocky Shao's Personal Website!
✨ Built with modern web technologies
💻 Feel free to explore the code
📧 Contact: rocky.shao@email.com
`);

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(() => {
    // Your scroll handling code here
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Pac-Man mini game
class PacmanGame {
    constructor(canvas, scoreEl, statusEl) {
        this.canvas = canvas;
        this.ctx = canvas.getContext('2d');
        this.tileSize = 24;
        this.scoreEl = scoreEl;
        this.statusEl = statusEl;
        this.baseLayout = this.createLayout();
        this.resetLevel();
        this.pacman = { x: 1, y: 1, direction: { x: 1, y: 0 }, nextDirection: { x: 1, y: 0 } };
        this.ghosts = [
            this.createGhost(13, 1, { x: -1, y: 0 }, '#f87171'),
            this.createGhost(13, 13, { x: -1, y: 0 }, '#60a5fa')
        ];
        this.lastUpdate = 0;
        this.moveInterval = 160;
        this.running = true;
        this.bindControls();
        this.loop = this.loop.bind(this);
        requestAnimationFrame(this.loop);
        this.updateStatus('Collect every dot without getting caught!');
    }

    createLayout() {
        return [
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
            [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 0, 0, 3, 0, 0, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1],
            [1, 0, 0, 0, 1, 0, 0, 2, 0, 0, 1, 0, 0, 0, 1],
            [1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1, 1, 1, 0, 1],
            [1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1],
            [1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1],
            [1, 0, 1, 0, 0, 0, 0, 3, 0, 0, 0, 0, 1, 0, 1],
            [1, 0, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1],
            [1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1],
            [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]
        ];
    }

    resetLevel() {
        this.level = this.baseLayout.map(row => [...row]);
        this.score = this.score || 0;
        if (this.pacman) {
            this.pacman.x = 1;
            this.pacman.y = 1;
            this.pacman.direction = { x: 1, y: 0 };
            this.pacman.nextDirection = { x: 1, y: 0 };
        }
        if (this.ghosts) {
            this.ghosts[0].x = 13;
            this.ghosts[0].y = 1;
            this.ghosts[1].x = 13;
            this.ghosts[1].y = 13;
        }
        this.running = true;
        this.updateScore(0);
    }

    createGhost(x, y, direction, color) {
        return { x, y, direction: { ...direction }, color, frightened: 0 };
    }

    bindControls() {
        window.addEventListener('keydown', (event) => {
            const keyMap = {
                ArrowUp: { x: 0, y: -1 },
                ArrowDown: { x: 0, y: 1 },
                ArrowLeft: { x: -1, y: 0 },
                ArrowRight: { x: 1, y: 0 }
            };

            const direction = keyMap[event.key];
            if (direction) {
                event.preventDefault();
                this.pacman.nextDirection = direction;
                if (!this.running) {
                    this.resetLevel();
                    this.updateStatus('Back in the maze. Let\'s go!');
                }
            }
        });
    }

    loop(timestamp) {
        if (!this.lastUpdate) {
            this.lastUpdate = timestamp;
        }

        const delta = timestamp - this.lastUpdate;
        if (delta > this.moveInterval) {
            if (this.running) {
                this.update();
            }
            this.lastUpdate = timestamp;
        }

        this.draw();
        requestAnimationFrame(this.loop);
    }

    update() {
        this.movePacman();
        this.moveGhosts();
        this.checkCollisions();
    }

    movePacman() {
        const targetX = this.wrap(this.pacman.x + this.pacman.nextDirection.x, this.level[0].length);
        const targetY = this.wrap(this.pacman.y + this.pacman.nextDirection.y, this.level.length);

        if (this.canMove(targetX, targetY)) {
            this.pacman.direction = { ...this.pacman.nextDirection };
        }

        const nextX = this.wrap(this.pacman.x + this.pacman.direction.x, this.level[0].length);
        const nextY = this.wrap(this.pacman.y + this.pacman.direction.y, this.level.length);

        if (this.canMove(nextX, nextY)) {
            this.pacman.x = nextX;
            this.pacman.y = nextY;
            const tile = this.level[nextY][nextX];
            if (tile === 0) {
                this.level[nextY][nextX] = 2;
                this.updateScore(10);
            } else if (tile === 3) {
                this.level[nextY][nextX] = 2;
                this.updateScore(50);
                this.frightenGhosts();
            }

            if (this.isLevelCleared()) {
                this.updateScore(100);
                this.updateStatus('Level cleared! Speeding things up...');
                this.moveInterval = Math.max(100, this.moveInterval - 10);
                this.resetLevel();
            }
        }
    }

    moveGhosts() {
        this.ghosts.forEach(ghost => {
            if (ghost.frightened > 0) {
                ghost.frightened -= 1;
            }

            const potentialDirections = [
                { x: 1, y: 0 },
                { x: -1, y: 0 },
                { x: 0, y: 1 },
                { x: 0, y: -1 }
            ].filter(dir => this.canMove(
                this.wrap(ghost.x + dir.x, this.level[0].length),
                this.wrap(ghost.y + dir.y, this.level.length)
            ));

            const canContinue = this.canMove(
                this.wrap(ghost.x + ghost.direction.x, this.level[0].length),
                this.wrap(ghost.y + ghost.direction.y, this.level.length)
            );
            if (!canContinue || Math.random() < 0.25) {
                ghost.direction = potentialDirections[Math.floor(Math.random() * potentialDirections.length)] || ghost.direction;
            }

            ghost.x = this.wrap(ghost.x + ghost.direction.x, this.level[0].length);
            ghost.y = this.wrap(ghost.y + ghost.direction.y, this.level.length);
        });
    }

    checkCollisions() {
        for (const ghost of this.ghosts) {
            if (ghost.x === this.pacman.x && ghost.y === this.pacman.y) {
                if (ghost.frightened > 0) {
                    this.updateScore(200);
                    ghost.x = 7;
                    ghost.y = 7;
                    ghost.frightened = 0;
                    this.updateStatus('Ghost chomped! Keep going.');
                } else {
                    this.running = false;
                    this.updateStatus('Caught by a ghost! Press any arrow key to retry.');
                }
            }
        }
    }

    frightenGhosts() {
        this.ghosts.forEach(ghost => {
            ghost.frightened = 30;
        });
        this.updateStatus('Power pellet activated! Ghosts are on the run.');
    }

    canMove(x, y) {
        return this.level[y] && this.level[y][x] !== 1;
    }

    wrap(value, limit) {
        if (value < 0) return limit - 1;
        if (value >= limit) return 0;
        return value;
    }

    isLevelCleared() {
        return this.level.flat().filter(cell => cell === 0 || cell === 3).length === 0;
    }

    updateScore(increment) {
        this.score = (this.score || 0) + increment;
        if (this.scoreEl) {
            this.scoreEl.textContent = this.score;
        }
    }

    updateStatus(message) {
        if (this.statusEl) {
            this.statusEl.textContent = message;
        }
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.drawBoard();
        this.drawPacman();
        this.drawGhosts();
    }

    drawBoard() {
        for (let y = 0; y < this.level.length; y++) {
            for (let x = 0; x < this.level[y].length; x++) {
                const tile = this.level[y][x];
                const px = x * this.tileSize;
                const py = y * this.tileSize;

                if (tile === 1) {
                    this.ctx.fillStyle = '#312e81';
                    this.ctx.fillRect(px, py, this.tileSize, this.tileSize);
                    this.ctx.strokeStyle = '#6366f1';
                    this.ctx.lineWidth = 2;
                    this.ctx.strokeRect(px + 2, py + 2, this.tileSize - 4, this.tileSize - 4);
                } else {
                    this.ctx.fillStyle = '#0f172a';
                    this.ctx.fillRect(px, py, this.tileSize, this.tileSize);
                    if (tile === 0) {
                        this.drawDot(px, py, 3, '#fcd34d');
                    } else if (tile === 3) {
                        this.drawDot(px, py, 6, '#fbbf24');
                    }
                }
            }
        }
    }

    drawDot(px, py, radius, color) {
        this.ctx.beginPath();
        this.ctx.fillStyle = color;
        this.ctx.arc(px + this.tileSize / 2, py + this.tileSize / 2, radius, 0, Math.PI * 2);
        this.ctx.fill();
    }

    drawPacman() {
        const centerX = this.pacman.x * this.tileSize + this.tileSize / 2;
        const centerY = this.pacman.y * this.tileSize + this.tileSize / 2;
        const angle = Math.atan2(this.pacman.direction.y, this.pacman.direction.x);
        const mouth = Math.PI / 6;

        this.ctx.fillStyle = '#fde047';
        this.ctx.beginPath();
        this.ctx.moveTo(centerX, centerY);
        this.ctx.arc(centerX, centerY, this.tileSize / 2 - 2, angle + mouth, angle - mouth, false);
        this.ctx.closePath();
        this.ctx.fill();
    }

    drawGhosts() {
        this.ghosts.forEach(ghost => {
            const px = ghost.x * this.tileSize + this.tileSize / 2;
            const py = ghost.y * this.tileSize + this.tileSize / 2;
            const radius = this.tileSize / 2 - 4;
            const color = ghost.frightened > 0 ? '#38bdf8' : ghost.color;

            this.ctx.fillStyle = color;
            this.ctx.beginPath();
            this.ctx.arc(px, py, radius, Math.PI, 0, false);
            this.ctx.lineTo(px + radius, py + radius);
            this.ctx.lineTo(px + radius * 0.5, py + radius * 0.6);
            this.ctx.lineTo(px, py + radius);
            this.ctx.lineTo(px - radius * 0.5, py + radius * 0.6);
            this.ctx.lineTo(px - radius, py + radius);
            this.ctx.closePath();
            this.ctx.fill();

            // Eyes
            this.ctx.fillStyle = '#0f172a';
            const eyeOffsetX = this.pacman.x < ghost.x ? -4 : 4;
            this.ctx.beginPath();
            this.ctx.arc(px - 6 + eyeOffsetX * 0.2, py - 2, 3, 0, Math.PI * 2);
            this.ctx.arc(px + 6 + eyeOffsetX * 0.2, py - 2, 3, 0, Math.PI * 2);
            this.ctx.fill();
        });
    }
}

