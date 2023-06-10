import React from 'react'
import styled from 'styled-components'
import ContentHeader from './ContentHeader'

//import "prismjs/themes/prism-coy.css";
//import "prismjs/themes/prism-dark.css";
//import "prismjs/themes/prism-funky.css";
//import "prismjs/themes/prism-okaidia.css";
//import "prismjs/themes/prism-solarizedlight.css";
//import "prismjs/themes/prism-tomorrow.css";
//import "prismjs/themes/prism-twilight.css";
//import "../prism-themes/prism-atom-dark.css";
import '../prism-themes/prism-vsc-dark-plus.css'

/*
<style>
    code[class="lang-python"] {
        font-size: 0.5rem !important;
    }
  </style>
*/
const ContentBody = styled.div`
  line-height: 1.6;

  & > h2 {
    color: var(--color-h2);
    padding-top: 3rem;
    margin-top: 3rem;
    border-top: 1px solid #ececec;
  }

  & > h3 {
    padding-top: 3rem;
  }

  & > p {
    margin: 1em 0 0 0;
  }

  & a {
    fill: var(--color-text);
    box-shadow: 0 2px 0 0 var(--color-secondary);

    &:hover {
      filter: brightness(150%);
      box-shadow: none;
    }

    &.anchor,
    &.gatsby-resp-image-link {
      box-shadow: none;
    }
  }

  h1 .anchor svg,
  h2 .anchor svg,
  h3 .anchor svg,
  h4 .anchor svg,
  h5 .anchor svg,
  h6 .anchor svg {
    visibility: hidden;
    margin-left: -16px;
  }

  h1:hover .anchor svg,
  h2:hover .anchor svg,
  h3:hover .anchor svg,
  h4:hover .anchor svg,
  h5:hover .anchor svg,
  h6:hover .anchor svg,
  h1 .anchor:focus svg,
  h2 .anchor:focus svg,
  h3 .anchor:focus svg,
  h4 .anchor:focus svg,
  h5 .anchor:focus svg,
  h6 .anchor:focus svg {
    visibility: visible;
  }

  & > blockquote {
    box-sizing: border-box;
    background-color: var(--color-secondaryContentBackground);
    border-left: 5px solid var(--color-secondary);
    margin: 30px 0px;
    padding: 5px 20px;
    border-radius: 0 8px 8px 0;
  }

  & > blockquote p {
    margin: 0.8em 0;
    font-style: italic;
  }

  & .gatsby-highlight {
    border-radius: 5px;
    font-size: 15px;
    line-height: 1.7;
    border-radius: 10px;
    overflow: auto;
    tab-size: 1.5em;
    margin: 1.5em -1.5em;

    @media (max-width: 500px) {
      border-radius: 0;
      margin-left: -25px;
      margin-right: -25px;
    }
  }

  & .gatsby-highlight > pre {
    border: 0;
    margin: 0;
    padding: 1;
  }

  & .gatsby-highlight pre[class*='language-'] {
    float: left;
    min-width: 100%;
  }

  & .gatsby-highlight-code-line {
    background-color: var(--color-darkBlue);
    display: block;
    margin-right: -1em;
    margin-left: -1em;
    padding-right: 1em;
    padding-left: 0.75em;
    border-left: 0.25em solid var(--color-yellow);
  }

  & h1 > code.language-text,
  & h2 > code.language-text,
  & h3 > code.language-text,
  & h4 > code.language-text,
  & h5 > code.language-text,
  & h6 > code.language-text,
  & a > code.language-text,
  & p > code.language-text,
  & li > code.language-text,
  & em > code.language-text,
  & strong > code.language-text,
  & span > code.language-text {
    font-family: 'Roboto Mono' !important;
    /* "Lucida Sans Typewriter", "Lucida Console", Consolas, Monaco, monospace */
    background: var(--color-wrapperBackground); /* var(--color-beige); */
    /* color: #222222cc; */
    color: var(--color-text);
    padding: 0 3px;
    font-size: 0.94em;
    border-radius: 0.3rem;
    word-wrap: break-word;
  }

  & code {
    word-wrap: break-word;
  }

  & table {
    margin: auto;
    margin-top: 1em;
    margin-bottom: 1em;
    border-collapse: collapse;
    overflow: hidden;

    & th,
    & td {
      padding: 0.5em;
      background-color: var(--color-secondaryContentBackground);
    }
    & tr {
      border-bottom: 2px solid var(--color-white);
    }
    & tbody tr:last-child {
      border-bottom: none;
    }
  }
`

const Content = ({ content, date, tags }) => {
  return (
    <section>
      {(tags || date) && <ContentHeader date={date} tags={tags} />}

      <ContentBody>{content}</ContentBody>
    </section>
  )
}

export default Content
