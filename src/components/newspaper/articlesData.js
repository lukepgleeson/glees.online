import exampleArticle from './articles/example-article.md?raw';

// slot: position of this snippet on the newspaper image (percentages of image dimensions)
const SLOTS = [
  { top: '5%',  left: '22%', width: '26%', height: '33%' }, // left page, upper-right (beside Smoke Bomb ad)
  { top: '43%', left: '3%',  width: '22%', height: '51%' }, // left page, lower-left
  { top: '43%', left: '26%', width: '22%', height: '51%' }, // left page, lower-right
  { top: '24%', left: '53%', width: '43%', height: '12%' }, // right page, above Coffry ad
  { top: '37%', left: '66%', width: '30%', height: '46%' }, // right page, right of Coffry ad
];

export default [
  {
    id: 1,
    title: 'Example Article',
    snippet: 'A short teaser for the article goes here — one or two sentences to hook the reader.',
    content: exampleArticle,
    slot: SLOTS[0],
  },
  {
    id: 2,
    title: 'Example Article',
    snippet: 'A short teaser for the article goes here — one or two sentences to hook the reader.',
    content: exampleArticle,
    slot: SLOTS[1],
  },
  {
    id: 3,
    title: 'Example Article',
    snippet: 'A short teaser for the article goes here — one or two sentences to hook the reader.',
    content: exampleArticle,
    slot: SLOTS[2],
  },
  {
    id: 4,
    title: 'Example Article',
    snippet: 'A short teaser for the article goes here — one or two sentences to hook the reader.',
    content: exampleArticle,
    slot: SLOTS[3],
  },
  {
    id: 5,
    title: 'Example Article',
    snippet: 'A short teaser for the article goes here — one or two sentences to hook the reader.',
    content: exampleArticle,
    slot: SLOTS[4],
  },
];
