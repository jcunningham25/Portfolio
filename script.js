// Smooth scrolling for internal navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Skill cards interaction
document.querySelectorAll('.skill-card').forEach(card => {
    card.addEventListener('click', function() {
        // Hide all other skill details
        document.querySelectorAll('.skill-details').forEach(details => {
            if (details.parentElement !== this) {
                details.classList.add('hidden');
            }
        });

        // Toggle current skill details
        const details = this.querySelector('.skill-details');
        details.classList.toggle('hidden');
    });
});

// Close skill details when clicking outside
document.addEventListener('click', function(e) {
    if (!e.target.closest('.skill-card')) {
        document.querySelectorAll('.skill-details').forEach(details => {
            details.classList.add('hidden');
        });
    }
});

// Project details buttons
document.querySelectorAll('.project-details-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        e.stopPropagation();
        const projectTitle = this.parentElement.querySelector('h3').textContent;
        const projectDescription = this.parentElement.querySelector('p').textContent;
        
        alert(`${projectTitle}\n\n${projectDescription}\n\nThis is a placeholder for a modal or expanded view of project details.`);
    });
});

// Add scroll-triggered animations for sections
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
    observer.observe(section);
});
