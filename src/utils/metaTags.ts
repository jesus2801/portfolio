export const createMetaTags = (title: string, desc: string) => {
  return metas(desc, title).concat(
    ogMetas(title, desc) as any,
    twitterMetas(title, desc) as any
  );
};

const metas = (desc: string, title: string) => [
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
    name: 'DC.Language',
    content: 'English',
  },
  {
    name: 'Resource-type',
    content: 'Document',
  },
  {
    name: 'robots',
    content: 'ALL',
  },
  {
    name: 'title',
    content: title,
  },
];

//---------------------------------------------------

const ogMetas = (title: string, desc: string) => [
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
  {
    property: 'og:url',
    content: process.env.DOMAIN!,
  },
];

//---------------------------------------------------

const twitterMetas = (title: string, desc: string) => [
  {
    property: 'twitter:card',
    content: 'summary_large_image',
  },
  {
    property: 'twitter:url',
    content: process.env.DOMAIN!,
  },
  {
    property: 'twitter:title',
    content: title,
  },
  {
    property: 'twitter:description',
    content: desc,
  },
];
