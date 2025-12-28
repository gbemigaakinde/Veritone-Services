// script.js (FULL UPDATED CODE - REPLACE YOUR ENTIRE script.js WITH THIS)

// Blog Data (updated dates to late 2025, newest first when sorted)
const blogPosts = [
    {
        id: 1,
        title: "Leadership in a Divided Age",
        category: "politics",
        excerpt: "Reflections on governance, accountability, and the quiet courage required to lead with integrity in turbulent times.",
        date: "December 20, 2025",
        author: "Alex Chen",
        readTime: "6 min read",
        content: `
            <p>In an era of polarization, true leadership is measured not by volume but by principle. The most effective leaders are those who can hold complexity without fracturing under its weight.</p>
            <h2>The Cost of Conviction</h2>
            <p>Standing for something often means standing apart. Yet history shows that lasting change rarely comes from consensus alone—it emerges from those willing to speak uncomfortable truths kindly.</p>
            <blockquote>"The ultimate measure of a man is not where he stands in moments of comfort, but where he stands at times of challenge and controversy." — Martin Luther King Jr.</blockquote>
            <p>Good governance begins with self-governance. Before we can guide nations, we must learn to guide ourselves.</p>
        `
    },
    {
        id: 2,
        title: "The Lost Art of Conversation",
        category: "writing",
        excerpt: "Why deep dialogue matters more than ever, and how to cultivate meaningful exchanges in a fragmented world.",
        date: "November 15, 2025",
        author: "Alex Chen",
        readTime: "8 min read",
        content: `
            <p>We have more ways to communicate than ever before, yet genuine conversation feels increasingly rare. The art of listening—truly listening—has become revolutionary.</p>
            <h2>Listening as Resistance</h2>
            <p>In a culture that rewards hot takes and quick replies, choosing to listen deeply is a quiet act of rebellion. It creates space for understanding where algorithms create echo chambers.</p>
            <blockquote>"Most people do not listen with the intent to understand; they listen with the intent to reply." — Stephen R. Covey</blockquote>
            <p>Great writing begins with great listening. The best communicators are first the best observers of human experience.</p>
        `
    },
    {
        id: 3,
        title: "Raising Resilient Children",
        category: "family",
        excerpt: "Thoughts on parenting with intention, fostering independence, and protecting childhood in a hyper-connected age.",
        date: "October 28, 2025",
        author: "Alex Chen",
        readTime: "7 min read",
        content: `
            <p>Modern parenting often feels like a balancing act between protection and preparation. How do we shield our children from harm while equipping them to navigate a complex world?</p>
            <h2>The Gift of Boredom</h2>
            <p>In our rush to enrich every moment, we risk depriving children of the quiet spaces where creativity and self-reliance grow. Boredom is not the enemy—it's the soil where imagination takes root.</p>
            <blockquote>"The highest form of love is allowing someone to become who they truly are."</blockquote>
            <p>Resilient children are not those who never fall, but those who know how to rise—and know they are loved whether they succeed or stumble.</p>
        `
    },
    {
        id: 4,
        title: "The Art of Digital Minimalism",
        category: "design",
        excerpt: "Why removing clutter from our digital lives creates space for more meaningful work and deeper thinking.",
        date: "October 12, 2025",
        author: "Alex Chen",
        readTime: "5 min read",
        content: `
            <p>In a world screaming for our attention, silence is a luxury. Digital minimalism isn't just about having fewer apps on your phone or a cleaner desktop wallpaper; it's a philosophy of intentionality.</p>
            <p>When we strip away the non-essential, we aren't losing features—we're gaining focus. The interfaces we interact with daily shape our cognitive habits. A cluttered UI leads to a cluttered mind.</p>
            <h2>The Cost of Distraction</h2>
            <p>Every notification is a context switch. Research suggests it takes an average of 23 minutes to get back on task after an interruption.</p>
            <blockquote>"Perfection is achieved, not when there is nothing more to add, but when there is nothing left to take away." - Antoine de Saint-Exupéry</blockquote>
            <p>As we build the next generation of web experiences, let us prioritize clarity over novelty, and depth over breadth.</p>
        `
    },
    {
        id: 5,
        title: "Why Typography Matters More Than You Think",
        category: "design",
        excerpt: "Typography is not just about choosing a font. It's about voice, rhythm, and the invisible architecture of information.",
        date: "September 5, 2025",
        author: "Alex Chen",
        readTime: "7 min read",
        content: `
            <p>Web design is 95% typography. This is a bold statement, but consider this: the primary purpose of the web is communication. Most of that communication happens through text.</p>
            <p>Good typography is invisible. It allows the reader to absorb the content without friction. Bad typography is an obstacle course for the eyes.</p>
            <h2>Rhythm and Scale</h2>
            <p>Vertical rhythm creates a sense of musicality in the layout. When line heights and margins follow a consistent scale, the page feels 'right' even if the user can't articulate why.</p>
            <p>In this blog, I've chosen a high-contrast serif for headings to create distinct visual anchors, paired with a highly legible sans-serif for UI elements.</p>
        `
    },
    {
        id: 6,
        title: "Slow Code: A Manifesto",
        category: "design",
        excerpt: "In an era of AI-generated boilerplate, writing code by hand with intention is an act of rebellion.",
        date: "August 1, 2025",
        author: "Alex Chen",
        readTime: "4 min read",
        content: `
            <p>Speed is often touted as the ultimate metric for developers. Ship fast, break things, iterate. But there is a growing movement for 'Slow Code'—code that is thoughtful, sustainable, and crafted.</p>
            <p>Slow code doesn't mean working lazily. It means taking the time to understand the problem deeply before typing a single character.</p>
            <h2>The Joy of Craft</h2>
            <p>There is a tactile joy in building a website with raw HTML, CSS, and vanilla JavaScript. It connects us to the fundamental materials of the web.</p>
            <p>This website is an experiment in that philosophy. No frameworks. No heavy libraries. Just semantic markup and the necessary styles to make it sing.</p>
        `
    }
];

// Main Application Logic
document.addEventListener('DOMContentLoaded', () => {
    initSidebar();
    
    const path = window.location.pathname;
    
    if (path.includes('post.html')) {
        initPostPage();
        highlightActiveCategory(); // Still highlight based on current post
    } else {
        initHomePage();
    }
});

/**
 * Sidebar Toggle Functionality
 */
function initSidebar() {
    const toggle = document.getElementById('sidebar-toggle');
    const sidebar = document.getElementById('sidebar');
    const mainContent = document.getElementById('main-content');
    
    mainContent.addEventListener('click', () => {
        if (window.innerWidth <= 768 && sidebar.classList.contains('active')) {
            sidebar.classList.remove('active');
        }
    });

    toggle.addEventListener('click', (e) => {
        e.stopPropagation();
        sidebar.classList.toggle('active');
    });

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            sidebar.classList.remove('active');
        }
    });

    // Category filtering on homepage
    document.querySelectorAll('.nav-links a[data-filter]').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const filter = link.getAttribute('data-filter');
            
            // Update active state
            document.querySelectorAll('.nav-links a[data-filter]').forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            // Filter posts
            filterPosts(filter);
            
            // Close mobile sidebar
            if (window.innerWidth <= 768) {
                sidebar.classList.remove('active');
            }
        });
    });
}

/**
 * Filter and render posts on homepage
 */
function filterPosts(category) {
    const container = document.getElementById('blog-posts-list');
    if (!container) return;

    let filtered = blogPosts;
    if (category !== 'all') {
        filtered = blogPosts.filter(post => post.category === category);
    }

    // Always sort newest first
    filtered = filtered.sort((a, b) => new Date(b.date) - new Date(a.date));

    container.innerHTML = '';

    if (filtered.length === 0) {
        container.innerHTML = '<p>No posts in this category yet.</p>';
        return;
    }

    filtered.forEach(post => {
        const article = document.createElement('article');
        article.className = 'post-preview';
        article.innerHTML = `
            <div class="post-meta">${post.author} • ${post.date} • ${post.readTime}</div>
            <h2><a href="post.html?id=${post.id}">${post.title}</a></h2>
            <p class="post-excerpt">${post.excerpt}</p>
            <a href="post.html?id=${post.id}" class="read-more">Read more</a>
        `;
        container.appendChild(article);
    });
}

/**
 * Home Page Logic
 */
function initHomePage() {
    // Get current filter from URL or default to all
    const urlParams = new URLSearchParams(window.location.search);
    const filter = urlParams.get('category') || 'all';

    // Set active link
    document.querySelectorAll('.nav-links a[data-filter]').forEach(l => l.classList.remove('active'));
    const activeLink = document.querySelector(`.nav-links a[data-filter="${filter}"]`) || document.querySelector('.nav-links a[data-filter="all"]');
    activeLink.classList.add('active');

    // Render posts
    filterPosts(filter);

    // Fake loading delay
    setTimeout(() => {}, 300);
}

/**
 * Post Page Logic
 */
function initPostPage() {
    const container = document.getElementById('blog-post-content');
    if (!container) return;

    const urlParams = new URLSearchParams(window.location.search);
    const postId = parseInt(urlParams.get('id'));
    
    const post = blogPosts.find(p => p.id === postId);

    if (!post) {
        container.innerHTML = `
            <div class="post-header">
                <h1>Post Not Found</h1>
                <p>The article you are looking for does not exist.</p>
            </div>
        `;
        return;
    }

    document.title = `${post.title} | The Minimalist`;

    setTimeout(() => {
        container.innerHTML = `
            <header class="post-header">
                <h1 class="post-title">${post.title}</h1>
                <div class="post-info">
                    <span>${post.author}</span>
                    <span class="separator">•</span>
                    <span>${post.date}</span>
                    <span class="separator">•</span>
                    <span>${post.readTime}</span>
                </div>
            </header>
            <div class="post-body">
                ${post.content}
            </div>
        `;
        
        initReadingProgress();
        highlightActiveCategory(post.category);
    }, 300);
}

/**
 * Highlight the correct category link when viewing a single post
 */
function highlightActiveCategory(currentCategory = null) {
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.classList.remove('active');
    });

    if (currentCategory) {
        const catLink = document.querySelector(`.nav-links a[data-filter="${currentCategory}"]`);
        if (catLink) catLink.classList.add('active');
    }
}

/**
 * Reading Progress Indicator
 */
function initReadingProgress() {
    const progressBar = document.getElementById('reading-progress');
    if (!progressBar) return;

    window.addEventListener('scroll', () => {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrollPercent = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
        
        progressBar.style.width = scrollPercent + '%';
    });
}
// script.js (ADD THIS NEW FUNCTION AT THE END OF YOUR FILE, BEFORE THE closing } of DOMContentLoaded if needed)

// Simple contact form handling (client-side only - shows success message)
if (document.getElementById('contact-form')) {
    const contactForm = document.getElementById('contact-form');
    const formMessage = document.getElementById('form-message');

    contactForm.addEventListener('submit', (e) => {
        e.preventDefault(); // Prevent actual submit for now

        // Basic validation (already required in HTML)
        formMessage.textContent = 'Thank you! Your message has been sent. We will get back to you soon.';
        formMessage.className = 'form-message success';

        // Reset form
        contactForm.reset();

        // In a real site, you would send this to an email service like Formspree, EmailJS, etc.
        // Example with Formspree: set action="https://formspree.io/f/your-id"
    });
}
// Dark/Light Mode Toggle
document.addEventListener('DOMContentLoaded', () => {
    const themeSwitch = document.getElementById('theme-switch');

    if (!themeSwitch) return;

    // Load saved theme or respect system preference
    if (localStorage.getItem('theme') === 'dark' || 
        (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark');
        themeSwitch.checked = true;
    }

    // Toggle event
    themeSwitch.addEventListener('change', () => {
        if (themeSwitch.checked) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    });
});