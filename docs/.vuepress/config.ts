import { defineUserConfig } from "vuepress";
import type { DefaultThemeOptions } from "vuepress";

export default defineUserConfig<DefaultThemeOptions>({
  lang: "en-US",
  title: "箃宁",
  description: "箃宁 blog",

  themeConfig: {
    logo: "https://vuejs.org/images/logo.png",
  },
});
