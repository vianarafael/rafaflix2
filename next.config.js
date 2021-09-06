module.exports = {
  i18n: {
    locales: ["en-US", "ja-JP", "pt-BR"],
    defaultLocale: "en-US",
  },
    sitemap: [
    {
      i18n: 'en-US',
      routes: [
        {
          url: 'film',
          links: ['en-US', 'ja-JP', 'pt-BR'].map((lang) => ({ lang, url: `${lang}/test` })),
        },
      ],
    },
};
