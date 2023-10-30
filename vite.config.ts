import { defineConfig } from "vite";
import { qwikVite } from "@builder.io/qwik/optimizer";
import { qwikCity } from "@builder.io/qwik-city/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { qwikReact } from "@builder.io/qwik-react/vite";
import { partytownVite } from "@builder.io/partytown/utils";
import path, { join } from "path";
import { getHighlighter, loadTheme } from "shiki";
import { recmaProvideComponents } from "./recma-provide-components";

export default defineConfig(async () => {
  const { default: rehypePrettyCode } = await import("rehype-pretty-code");
  const { visit } = await import("unist-util-visit");

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
          providerImportSource: "~/context/MDXProvider",
          recmaPlugins: [recmaProvideComponents as any],
          rehypePlugins: [
            () => (tree) => {
              visit(tree, (node) => {
                if (node?.type === "element" && node?.tagName === "pre") {
                  const [codeEl] = node.children;
                  if (codeEl.tagName !== "code") {
                    return;
                  }

                  if (codeEl.data?.meta) {
                    // Extract event from meta and pass it down the tree.
                    const regex = /event="([^"]*)"/;
                    const match = codeEl.data?.meta.match(regex);
                    if (match) {
                      node.__event__ = match ? match[1] : null;
                      codeEl.data.meta = codeEl.data.meta.replace(regex, "");
                    }
                  }

                  node.__rawString__ = codeEl.children?.[0].value;
                  node.__src__ = node.properties?.__src__;
                  node.__style__ = node.properties?.__style__;
                }
              });
            },
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
            () => (tree) => {
              visit(tree, (node) => {
                if (node?.type === "element" && node?.tagName === "div") {
                  if (
                    !("data-rehype-pretty-code-fragment" in node.properties)
                  ) {
                    return;
                  }

                  const preElement = node.children.at(-1);
                  if (preElement.tagName !== "pre") {
                    return;
                  }

                  preElement.properties["__withMeta__"] =
                    node.children.at(0).tagName === "div";
                  preElement.properties["__rawString__"] = node.__rawString__;

                  if (node.__src__) {
                    preElement.properties["__src__"] = node.__src__;
                  }

                  if (node.__event__) {
                    preElement.properties["__event__"] = node.__event__;
                  }

                  if (node.__style__) {
                    preElement.properties["__style__"] = node.__style__;
                  }
                }
              });
            },
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
