const randomInt = (min, max) => Math.floor(Math.random() * (min ** max));

const booksArray = [
  {
    id: randomInt(4, 8),
    title: 'Factulness',
    category: 'Learning',
  },
  {
    id: randomInt(4, 8),
    title: 'We are going to need more wine',
    category: 'Biography',
  },
  {
    id: randomInt(4, 8),
    title: 'Stranger',
    category: 'Horror',
  },
];

const categories = [
  'Action',
  'Biography',
  'History',
  'Horror',
  'Kids',
  'Learning',
  'Sci-Fi',
];


export { randomInt, categories, booksArray };
