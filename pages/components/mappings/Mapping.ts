export interface HeaderLink {
    name: string
    link: string
    color?: string
}

export const headerLinksList : HeaderLink[] = [
    {
        name: 'Home',
        link: '/'
    },
    {
        name: 'About',
        link: '/about-us'
    },
    {
        name: 'Services',
        link: '/services'
    },
    {
        name: 'Portfolio',
        link: '/portfolio'
    },
    {
        name: 'Careers',
        link: '/careers'
    },
    {
        name: 'Industries',
        link: '/industries'
    },
]