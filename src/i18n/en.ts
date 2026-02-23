export default {
  shared: {
    langs: {
      en: "English",
      de: "German",
    },
  },
  home: {
    title: "Home {{test}}",
    heading: "Hello, I'm Joscha Egloff.",
    slogan: "A software developer from Switzerland",
    "src-link": "Source code of this Site.",
  },
  aboutme: {
    title: "About me",
    heading: "Currently (02.2026)",
    summary: "My name is Joscha Egloff and I'm currently 16 Years old and very passionate about programming. I've been programming for already 5 years as a hobby.",
    interest: "I'm interested in all kinds of areas, from OS development to web development, and I'm currently doing a practical year.",
    today: `I am currently doing a practical year at Autismuslink, while also searching for an apprenticeship as an application developer.`,
  },
  notfound: {
    title: "Not Found",
    backlink: "Go back to homepage."
  },
  projects: {
    title: "Projects",
    projects: [
      {
        name: "AntOS",
        desc: "Simple operating system written from scratch",
        links: {
          Github: "https://github.com/ant-os/zAntOS",
        },
      },
      {
        name: "Flake Programing Language",
        desc: "Simple programming lanuage and compiler in Rust",
        links: {
          Github: "https://github.com/flake-lang",
        },
      },
      {
        name: "tuple-types",
        desc: "Rust crate to extract the types from a tuple",
        links: {
          Github: "https://github.com/joschatom/tuple-types",
          "Crates.io": "https://crates.io/crates/tuple-types",
        },
      },
      {
        name: "Simple Writer",
        desc: "simple terminal based text-editor inspired by ed",
        links: {
          Github: "https://github.com/joschatom/simple-writer",
        },
      },
    ],
  },
};
