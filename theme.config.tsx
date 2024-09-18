import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Image from "next/image";

const config: DocsThemeConfig = {
  logo: <><Image src="/media/logo.png" alt="Maker logo" width="35" height="35" /> <p style={{ marginLeft: "10px", fontWeight: "bold" }}>Maker Society</p></>,
  // project: {
  //   link: "https://github.com/shuding/nextra-docs-template",
  // },
  chat: {
    link: "https://discord.com",
  },

  // docsRepositoryBase: "https://github.com/shuding/nextra-docs-template",
  footer: {
    text: "Made with ❤️ by Maker Society",
  },
};

export default config;
