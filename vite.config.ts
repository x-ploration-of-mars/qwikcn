import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { qwikReact } from "@builder.io/qwik-react/vite";
import { partytownVite } from "@builder.io/partytown/utils";
import path, { join } from "path";
import { getHighlighter, loadTheme } from "shiki";

export default defineConfig(async () => {
  const { default: rehypePrettyCode } = await import("rehype-pretty-code");

  const setHighlighter = async () => {
    const theme = await loadTheme(
      path.join(process.cwd(), "src/lib/themes/dark.json")
    );
    return await getHighlighter({ theme });
  };

  return {
    preview: {
      headers: {
        "Cache-Control": "public, max-age=600",
      },
    },
    plugins: [
      qwikCity({
        mdxPlugins: {
          rehypeSyntaxHighlight: false,
          remarkGfm: true,
          rehypeAutolinkHeadings: true,
        },
        mdx: {
          rehypePlugins: [
            [
              rehypePrettyCode,
              {
                getHighlighter: setHighlighter,
                onVisitLine(node: any) {
                  // Prevent lines from collapsing in `display: grid` mode, and allow empty
                  // lines to be copy/pasted
                  if (node.children.length === 0) {
                    node.children = [{ type: "text", value: " " }];
                  }
                },
                onVisitHighlightedLine(node: any) {
                  // Each line node by default has `class="line"`.
                  if (node.properties.className) {
                    node.properties.className.push("line--highlighted");
                  }
                },
                onVisitHighlightedWord(node: any) {
                  if (node.properties.className) {
                    node.properties.className = ["word--highlighted"];
                  }
                },
              },
            ],
          ],
        },
      }),
      qwikVite(),
      tsconfigPaths(),
      qwikReact(),
      partytownVite({ dest: join(__dirname, "dist", "~partytown") }),
    ],
  };
});
