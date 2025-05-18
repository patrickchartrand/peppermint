export default function() {
    return useHead({
        title: 'Portfolio - Patrick Chartrand',
        meta: [
            { name: 'description', content: 'Portfolio website showcasing projects, skills, and experience as a frontend developer.' },
            { name: 'keywords', content: 'frontend developer, web developer, portfolio, HTML, CSS, JavaScript, Vue, Nuxt' },
            { name: 'author', content: 'Patrick Chartrand' },
            
            // Open Graph (for Facebook, LinkedIn, etc.)
            { property: 'og:title', content: 'Portfolio - Patrick Chartrand' },
            { property: 'og:description', content: 'Check out my web development projects and skills.' },
            { property: 'og:image', content: '/media.png' },
            { property: 'og:url', content: '/media.png' },
            { property: 'og:type', content: 'website' },

            // Twitter Card
            { name: 'twitter:card', content: 'summary_large_image' },
            { name: 'twitter:title', content: 'Portfolio - Patrick Chartrand' },
            { name: 'twitter:description', content: 'See my work as a web developer.' },
            { name: 'twitter:image', content: '/media.png' }
        ],
        link: [
            { rel: 'icon', type: 'image/png', href: '/favicon.png' }
        ]
    })
}