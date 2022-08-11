var CONST = require("./const");

module.exports = {
  title: `Today Eunji Learned`,
  description: `Eunji's Personal Wiki (Today I Learned)`,
  base: "/TIL/",
  dest: "build",
  plugins: [["sitemap", { hostname: "https://kim-eun-ji.github.io/TIL/" }], ["@vuepress/back-to-top"], ["@vuepress/last-updated"]],
  head: [
    [
      "link",
      {
        rel: "icon",
        href: "/logo.png",
      },
    ],
    [
      "script",
      {
        async: true,
        src: "https://www.googletagmanager.com/gtag/js?id=G-MQSTKVVWY0",
      },
    ],
    ["script", {}, ["window.dataLayer = window.dataLayer || []; function gtag(){dataLayer.push(arguments);} gtag('js', new Date()); gtag('config', 'G-MQSTKVVWY0');"]],
    [
      "script",
      {
        async: true,
        src: "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8737576293731551",
        crossorigin: "anonymous"
      },
    ],
  ],
  themeConfig: {
    sidebar: [
      {
        title: "Monthly I Learned",
        children: CONST.MILList,
      },
      {
        title: "TypeScript",
        children: CONST.TypescriptList,
      },
      {
        title: "JavaScript",
        children: CONST.JavaScriptList,
      },
      {
        title: "NodeJs",
        children: CONST.NodeJsList,
      },
      {
        title: "React",
        children: CONST.ReactList,
      },
      {
        title: "Python",
        children: CONST.PythonList,
      },
      {
        title: "형상관리 관련",
        children: CONST.GitList,
      },
      {
        title: "DB",
        children: CONST.DBList,
      },
      {
        title: "Design Pattern",
        children: CONST.DesignPatternList,
      },
      {
        title: "Algorithm",
        children: CONST.AlgorithmList,
      },
      {
        title: "미분류",
        children: CONST.ETCList,
      },
    ],
    nav: [
      {
        text: "GitHub",
        link: "https://github.com/kim-eun-ji/",
      },
      {
        text: "Blog",
        link: "https://kim-eun-ji.github.io/",
      },
    ],
  },
};
