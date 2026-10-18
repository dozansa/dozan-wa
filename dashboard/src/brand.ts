// Dozan WA brand constants — single place to change product name / logos.
// Colors live in App.css (:root --primary* tokens).
export const BRAND = {
  name: 'Dozan WA',
  /** Square mark — sidebar, favicon. */
  logo: '/dozan_wa_icon.svg',
  /** Full ,dozan wordmark — login page. */
  wordmarkOnLight: '/dozan_logo_on_light.png',
  wordmarkOnDark: '/dozan_logo_on_dark.png',
} as const;
