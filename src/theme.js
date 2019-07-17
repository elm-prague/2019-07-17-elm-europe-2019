import { merge } from 'lodash';
import {
  future as baseTheme,
  syntaxHighlighterPrism as syntaxHighlighter,
  aspect, // For aspectRatio: 16:9
  // aspect43 as aspect, // For aspectRatio: 4:3
} from '@mdx-deck/themes';
// import { nightOwlPartial as codeSurferTheme } from 'code-surfer';
// See all code highlighter styles: https://conorhastings.github.io/react-syntax-highlighter/demo/prism.html
import { tomorrow as prismStyle } from 'react-syntax-highlighter/dist/esm/styles/prism/';

console.log('baseTheme', baseTheme);

const customTheme = theme =>
  merge(theme, {
    colors: {
      background: '#042a45',
      preBackground: '#042a45',
      text: '#fff',
      link: '#e42344',
      pre: '#97cfd9',
      code: '#97cfd9',
    },
    css: {
      'input[type="checkbox"]': {
        zoom: 2,
      },
    },
    prism: {
      style: merge(prismStyle, {
        'pre[class*="language-"]': {
          background: '#042a45',
          padding: '0.5em', // Padding around code box
          fontSize: '0.6em', // Adjust code font size
          margin: '0',
        },
      }),
    },
  });

export const themes = [
  // keep multiline
  // baseTheme,
  // codeSurferTheme,
  customTheme,
  syntaxHighlighter,
  aspect,
];
