import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";
import tailwind from "@astrojs/tailwind";
import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://docs-rake-engine.netlify.app",
  integrations: [
    starlight({
      title: "RakeDocs",
      logo: {
        src: "./src/assets/RakeLogo.webp",
        replacesTitle: false,
      },
      social: {
        github: "https://github.com/WilliamKarolDiCioccio/Rake.git",
        youtube: "https://www.youtube.com/channel/UCWdujV0-F19ZcMaHuf3yCwA",
        discord: "https://discord.gg/qyXCKPDUWx",
      },
      sidebar: [
        {
          label: "Get Started",
          translations: {
            it: "Inizia",
            fr: "Mise en route",
          },
          autogenerate: {
            directory: "get-started",
          },
        },
        {
          label: "Architecture",
          translations: {
            it: "Motore Grafico",
            fr: "Moteur Graphique",
          },
          autogenerate: {
            directory: "architecture",
          },
        },
      ],
      defaultLocale: "root",
      locales: {
        root: {
          label: "English",
          lang: "en",
        },
        it: {
          label: "Italian",
          lang: "it",
        },
        fr: {
          label: "French",
          lang: "fr",
        },
      },
      customCss: ["./src/tailwind.css", "./src/styles/global.css"],
    }),
    tailwind({
      applyBaseStyles: false,
    }),
    partytown(),
  ],
});
