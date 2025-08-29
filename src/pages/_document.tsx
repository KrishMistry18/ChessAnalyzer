import { Head, Html, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="apple-touch-icon" sizes="180x180" href="/ca-icon.svg?v=5" />
        <link rel="icon" type="image/svg+xml" href="/ca-icon.svg?v=5" />
        <link rel="shortcut icon" href="/ca-icon.svg?v=5" />
        <link
          rel="alternate icon"
          type="image/x-icon"
          href="/favicon.ico?v=5"
        />
        <link
          rel="alternate icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png?v=5"
        />
        <link
          rel="alternate icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png?v=5"
        />
        <meta
          name="description"
          content="Advanced chess analysis tool powered by Stockfish engines - analyze your games with precision!"
        />

        {/* OG (Social networks) */}
        <meta property="og:title" content="ChessAnalyzer" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="ChessAnalyzer" />
        <meta property="og:url" content="https://chessanalyzer.com/" />
        <meta
          property="og:image"
          content="https://chessanalyzer.com/social-networks-1200x630.png"
        />
        <meta
          property="og:description"
          content="Advanced chess analysis tool powered by Stockfish engines - analyze your games with precision!"
        />

        {/* Twitter */}
        <meta name="twitter:title" content="ChessAnalyzer" />
        <meta name="twitter:domain" content="chessanalyzer.com" />
        <meta name="twitter:url" content="https://chessanalyzer.com/" />
        <meta
          name="twitter:description"
          content="Advanced chess analysis tool powered by Stockfish engines - analyze your games with precision!"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:image"
          content="https://chessanalyzer.com/social-networks-1200x630.png"
        />
        {/* Inline data-URI favicon to bypass cache */}
        <link
          rel="icon"
          href={
            "data:image/svg+xml," +
            encodeURIComponent(
              '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64"><circle cx="32" cy="32" r="30" fill="#0f0f10"/><g fill="#fff"><path d="M24 22c0-4 4-7 8-7s7 3 7 7v3h-4c-1.3 0-2 .7-2 2v2h-4c-3 0-5-2-5-5z"/><path d="M22 33h20c2 0 3 1.5 3 3.2V39H19v-2.8C19 34.5 20 33 22 33z"/><rect x="18" y="39" width="28" height="4" rx="1"/><rect x="17" y="45" width="30" height="4" rx="1"/></g></svg>'
            )
          }
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
