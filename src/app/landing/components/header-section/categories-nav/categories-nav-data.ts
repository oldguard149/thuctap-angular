export const items = [
  {
    name: 'home',
    link: '',
    level: 1,
    subLevel: {
      has: true,
      items: [
        { name: 'home 1', link: 'home1' },
        { name: 'home 2', link: 'home2' },
        { name: 'home 3', link: 'home3' },
        { name: 'home 4', link: 'home4' },
        { name: 'home 5', link: 'home5' },
        { name: 'home 6', link: 'home6' },
        { name: 'home 7', link: 'home7' },
      ],
    },
  },
  {
    name: 'catablog',
    link: 'catablog',
    level: 0,
    subLevel: {
      has: false,
      items: [],
    },
  },
  {
    name: 'shop',
    link: 'shop',
    level: 2,
    subLevel: {
      has: true,
      items: [
        {
          name: 'Women',
          link: 'women',
          subLevel: {
            has: true,
            items: [
              { name: 'Home', link: 'home', subLevel: { has: false } },
              { name: 'Catalog', link: 'catalog', subLevel: { has: false } },
              { name: 'shop', link: 'shop', subLevel: { has: false } },
              { name: 'blog', link: 'blog', subLevel: { has: false } },
              { name: 'page', link: 'page', subLevel: { has: false } },
            ],
          },
        },
        {
          name: 'Men',
          link: 'men',
          subLevel: {
            has: true,
            items: [
              { name: 'Home', link: 'home', subLevel: { has: false } },
              { name: 'Catalog', link: 'catalog', subLevel: { has: false } },
              { name: 'shop', link: 'shop', subLevel: { has: false } },
              { name: 'blog', link: 'blog', subLevel: { has: false } },
              { name: 'page', link: 'page', subLevel: { has: false } },
            ],
          },
        },
        {
          name: 'Kid',
          link: 'kid',
          subLevel: {
            has: true,
            items: [
              { name: 'Home', link: 'home', subLevel: { has: false } },
              { name: 'Catalog', link: 'catalog', subLevel: { has: false } },
              { name: 'shop', link: 'shop', subLevel: { has: false } },
              { name: 'blog', link: 'blog', subLevel: { has: false } },
              { name: 'page', link: 'page', subLevel: { has: false } },
            ],
          },
        },
        {
          name: 'Living',
          link: 'living',
          subLevel: {
            has: true,
            items: [
              { name: 'Home', link: 'home', subLevel: { has: false } },
              { name: 'Catalog', link: 'catalog', subLevel: { has: false } },
              { name: 'shop', link: 'shop', subLevel: { has: false } },
              { name: 'blog', link: 'blog', subLevel: { has: false } },
              { name: 'page', link: 'page', subLevel: { has: false } },
            ],
          },
        },
      ],
    },
  },
  {
    name: 'blog',
    link: 'blog',
    level: 0,
    subLevel: {
      has: false,
      items: [],
    },
  },
  {
    name: 'pages',
    link: 'pages',
    level: 1,
    subLevel: {
      has: true,
      items: [
        { name: 'contact us', link: 'contact' },
        { name: 'look book', link: 'lookbook' },
        { name: 'collection', link: 'collection' },
        { name: 'product page', link: 'product/:id' },
        { name: 'wishlist', link: 'wishlist' },
        { name: 'cart', link: 'cart' },
        { name: 'checkout', link: 'checkout' },
        { name: 'login', link: 'login' },
        { name: 'register', link: 'register' },
      ],
    },
  },
];
