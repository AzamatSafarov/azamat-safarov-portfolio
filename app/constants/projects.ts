import { Project } from "../types";

export const PROJECTS: Project[] = [
  {
    title: 'Hessen Collected Works',
    date: 'Oct 2024',
    subtext: '8-volume digital archive of Sergei Gessen\'s collected works. Thematic structuring, full-text search, 236+ works catalog.',
    url: 'https://hessen-collected-works.vercel.app',
    image: './project-screenshots/hessen.png',
  },
  {
    title: 'Shchedrovitsky Wiki',
    date: 'Mar 2025',
    subtext: 'Digital archive of P.G. Shchedrovitsky\'s methodological texts. Thematic categorization, content-type folders, search.',
    url: 'https://shchedrovitsky-wiki-app.vercel.app',
    image: './project-screenshots/shchedrovitsky.png',
  },
  {
    title: 'Sankey Diagram',
    date: 'Dec 2024',
    subtext: 'Interactive sankey diagram showing translation flows of Gessen\'s works between languages and countries. Bidirectional toggle.',
    url: 'https://gessen-sankey-diagram.vercel.app',
    image: './project-screenshots/sankey.png',
  },
  {
    title: 'Chronotope of Ideas',
    date: 'Jan 2025',
    subtext: 'Network graph mapping 221 works across 6 thematic tracks (1909-1994). Force simulation, zoom, dark theme.',
    url: 'https://gessen-ideas-v2.vercel.app',
    image: './project-screenshots/chronotope.png',
  },
  {
    title: 'Translations Map',
    date: 'Jan 2025',
    subtext: 'Leaflet map showing 33 editions in 13 languages across 16 European cities. Clustered markers, language filters.',
    url: 'https://gessen-translations-map.vercel.app',
    image: './project-screenshots/translations.png',
  },
  {
    title: 'Life Map',
    date: 'Dec 2024',
    subtext: 'Interactive Leaflet map of Gessen\'s life journey across European cities. Life Path / Academic Path toggle.',
    url: 'https://gessen-life-map.vercel.app',
    image: './project-screenshots/life-map.png',
  },
  {
    title: 'Timeline v1',
    date: 'Nov 2024',
    subtext: 'Scrollable timeline of 238 works with category filtering, search, color-coded tracks.',
    url: 'https://gessen-timeline.vercel.app',
    image: './project-screenshots/timeline.png',
  },
  {
    title: 'Habr Articles',
    date: '2025',
    subtext: 'Three published articles: blockchain voting, e-health infrastructure, state archive architecture.',
    url: 'https://habr.com/ru/users/Azamat_Safarov/',
    image: './project-screenshots/habr.png',
  },
  {
    title: 'Podster Podcast',
    date: '2024',
    subtext: 'Conversations about state, technology, and crypto-sovereignty.',
    url: 'https://podster.fm/my/podcasts/98031',
  },
  {
    title: 'Portfolio',
    date: 'Aug 2025',
    subtext: 'This very website. Built with Next.js, React Three Fiber, and GSAP.',
    url: 'https://azamatsafarov.vercel.app',
  },
];
