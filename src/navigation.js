//import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';

export const headerData = {
  links: [
    // {
    //   text: 'Network',
    //   href: getPermalink('network'),
    // },
    // {
    //   text: 'Domains',
    //   href: getPermalink('domains'),
    // },
    // {
    //   text: 'About ',
    //   href: getPermalink('about'), 
    // },
  ],
  // actions: [{ text: 'Download', href: 'https://github.com/onwidget/astrowind', target: '_blank' }],
};

export const footerData = {
  // links: [

    
  //   {
  //     title: 'Navigation',
  //     links: [
  //       { text: 'Domains', href: '#' },
  //       { text: 'Network', href: '#' },
  //       { text: 'Fundraising', href: '#' },
  //       { text: 'About', href: '#' },
  //     ],
  //   },
  //   {
  //     title: 'Company',
  //     links: [
  //       { text: 'X.com', href: '#' },
  //       { text: 'Github', href: '#' },
  //       { text: 'Youtube', href: '#' },
  //       { text: 'Discord', href: '#' },
        
  //     ],
  //   },
  // ],
  secondaryLinks: [
    // { text: 'Terms', href: getPermalink('/terms') },
    // { text: 'Privacy Policy', href: getPermalink('/privacy') },
  ],
  socialLinks: [
    { ariaLabel: 'X', icon: 'tabler:brand-x', href: 'https://twitter.com/odininitiative' },
    { ariaLabel: 'Mastodon', icon: 'tabler:brand-mastodon', href: '#' },
    { ariaLabel: 'YouTube', icon: 'tabler:brand-youtube', href: 'https://www.youtube.com/@odininitiative' },
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'https://github.com/ODIN-Initiative ' },
  ],
  // footNote: `
  //   <img class="w-5 h-5 md:w-6 md:h-6 md:-mt-0.5 bg-cover mr-1.5 rtl:mr-0 rtl:ml-1.5 float-left rtl:float-right rounded-sm" src="https://onwidget.com/favicon/favicon-32x32.png" alt="onWidget logo" loading="lazy"></img>
  //   Made by <a class="text-blue-600 underline dark:text-muted" href="https://onwidget.com/"> onWidget</a> · All rights reserved.
  // `,
};
