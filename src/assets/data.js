import '../pages/en/index.astro' 
import '../pages/gr/index.astro'

export const socials = [
    {
        logo: 'bx bxl-linkedin',
        link: 'https://www.linkedin.com/in/grigorios-paschalidis-b62944167/',
    },
    {
        logo: 'bx bxl-github',
        link: 'https://github.com/GrigPasch'
    }
]

export const info = [
    {
        text: 'About',
    },
    {
        text: 'Projects',
    },
    {
        text: 'Contact',
    },
]

export const locales = [
    {
        text: 'Greek',
        link: 'https://astro-svelte-portfolio.vercel.app/gr/#home'
    },
    {
        text: 'English',
        link: 'https://astro-svelte-portfolio.vercel.app/en/#home'
    }
]