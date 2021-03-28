export const createMetaTags = (title: string, desc: string) => {
  return [
    {
      httpEquiv: 'content-type',
      content: 'text/html',
      charSet: 'UTF-8',
    },
    {
      httpEquiv: 'cache-control',
      content: 'public, max-age=3024000',
    },
    {
      name: 'viewport',
      content:
        'width=device-width, initial-scale=1.0, maximum-scale=1, minimum-scale=1',
    },
    {
      name: 'description',
      content:
        'Full stack web developer portfolio by Jesús García, application development, programming, React, Next JS, Gatsby, libraries and frameworks',
    },
    {
      name: 'keywords',
      content: desc,
    },
    {
      name: 'author',
      content: 'Jesús García',
    },
    {
      name: 'copyright',
      content: 'Jesús García',
    },
    {
      property: 'og:type',
      content: 'website',
    },
    {
      property: 'og:title',
      content: title,
    },
    {
      property: 'og:locale',
      content: 'en_US',
    },
    {
      property: 'og:description',
      content: desc,
    },
  ];
};

export const linkTags = [
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
  },
  {
    rel: 'stylesheet',
    href:
      'https://fonts.googleapis.com/css2?family=Montserrat:wght@300;600&family=Nunito:wght@300;700&display=swap',
  },
  {
    rel: 'canonical',
    href: process.env.DOMAIN!,
  },
  {
    rel: 'shortcut icon',
    href: '/favicon.ico',
    type: 'image/x-icon',
  },
];

export const blue = '#3279ff';
export const black = '#2d374a';
export const white = '#fafcff';
export const grey = '#4e5561';

export const objectError = 'Your browser not support objects';
