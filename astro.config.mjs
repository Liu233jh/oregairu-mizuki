import { unified } from "@astrojs/markdown-remark";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import svelte, { vitePreprocess } from "@astrojs/svelte";
import { pluginCollapsibleSections } from "@expressive-code/plugin-collapsible-sections";
import { pluginLineNumbers } from "@expressive-code/plugin-line-numbers";
import swup from "@swup/astro";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig, fontProviders } from "astro/config";
import expressiveCode from "astro-expressive-code";
import icon from "astro-icon";
import { pluginLanguageLogo } from "ec-lang-logo";
import "katex/dist/contrib/mhchem.mjs";
import { oddmisc } from "oddmisc";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeCodeGroup from "rehype-code-group";
import rehypeComponents from "rehype-components";
import rehypeKatex from "rehype-katex";
import rehypeSlug from "rehype-slug";
import remarkDirective from "remark-directive";
import remarkMath from "remark-math";
import remarkSectionize from "remark-sectionize";

import {
	expressiveCodeConfig,
	markdownConfig,
	permalinkConfig,
	siteConfig,
} from "./src/config/index.ts";
import { buildIconInclude } from "./src/plugins/astro-icon-include.mjs";
import { pluginCustomCopyButton } from "./src/plugins/expressive-code/custom-copy-button.js";
import { pluginLanguageBadge } from "./src/plugins/expressive-code/language-badge.ts";
import { AdmonitionComponent } from "./src/plugins/rehype-component-admonition.mjs";
import { GithubCardComponent } from "./src/plugins/rehype-component-github-card.mjs";
import { ImageGridComponent } from "./src/plugins/rehype-component-image-grid.mjs";
import { rehypeContentLinks } from "./src/plugins/rehype-content-links.mjs";
import { rehypeMarkdownImages } from "./src/plugins/rehype-markdown-images.mjs";
import { rehypeMermaid } from "./src/plugins/rehype-mermaid.mjs";
import { rehypePlantuml } from "./src/plugins/rehype-plantuml.mjs";
import { rehypeWrapTable } from "./src/plugins/rehype-wrap-table.mjs";
import { remarkAutoImageGrid } from "./src/plugins/remark-auto-image-grid.mjs";
import { remarkContent } from "./src/plugins/remark-content.mjs";
import { parseDirectiveNode } from "./src/plugins/remark-directive-rehype.js";
import { remarkEscapeNumericColons } from "./src/plugins/remark-escape-numeric-colons.mjs";
import { remarkFixGithubAdmonitions } from "./src/plugins/remark-fix-github-admonitions.js";
import { remarkMarkSectionized } from "./src/plugins/remark-mark-sectionized.mjs";
import { remarkMermaid } from "./src/plugins/remark-mermaid.js";
import { remarkPlantuml } from "./src/plugins/remark-plantuml.mjs";
import { remarkWikiLink } from "./src/plugins/remark-wiki-link.mjs";
import { resolveFontMode } from "./src/utils/fontMode.ts";

const customFontsEnabled = resolveFontMode(siteConfig) === "custom";

// https://astro.build/config
export default defineConfig({
	fonts: customFontsEnabled
		? [
				{
					name: "JetBrains Mono",
					cssVariable: "--font-jetbrains-mono",
					provider: fontProviders.fontsource(),
					styles: ["normal", "italic"],
				},
				{
					name: "ZenMaruGothic-Medium",
					cssVariable: "--font-body",
					provider: fontProviders.local(),
					options: {
						variants: [
							{
								src: ["./src/assets/fonts/ZenMaruGothic-Medium.woff2"],
								weight: "500",
								style: "normal",
							},
						],
					},
					fallbacks: [],
					optimizedFallbacks: false,
				},
				{
					name: "Loli",
					cssVariable: "--font-cjk",
					provider: fontProviders.local(),
					options: {
						variants: [
							{
								src: ["./src/assets/fonts/loli.woff2"],
								weight: "400",
								style: "normal",
							},
						],
					},
					fallbacks: [],
					optimizedFallbacks: false,
				},
			]
		: [],

	site: siteConfig.siteURL,
	base: "/",
	trailingSlash: "always",
	compressHTML: true,

	output: "static",

	image: {
		layout: "constrained",
	},

	server: {
		port: 3000,
	},

	integrations: [
		oddmisc({
			umami: {
				shareUrl: false,
			},
		}),
		swup({
			theme: false,
			animationClass: "transition-swup-",
			containers: ["main"],
			smoothScrolling: false,
			cache: true,
			preload: false,
			accessibility: true,
			updateHead: process.env.NODE_ENV === "production",
			updateBodyClass: false,
			globalInstance: true,
			resolveUrl: (url) => url,
			animateHistoryBrowsing: false,
			skipPopStateHandling: (event) => {
				return event.state?.url?.includes("#");
			},
		}),
		icon({
			include: buildIconInclude(),
		}),
		expressiveCode({
			themes: [expressiveCodeConfig.lightTheme, expressiveCodeConfig.darkTheme],
			plugins: [
				pluginCollapsibleSections(),
				pluginLineNumbers(),
				...(expressiveCodeConfig.languageBadge.enable
					? [pluginLanguageBadge()]
					: []),
				...(expressiveCodeConfig.languageLogo.enable
					? [
							pluginLanguageLogo({
								color: expressiveCodeConfig.languageLogo.color ?? "mono",
								excludedLangs:
									expressiveCodeConfig.languageLogo.excludedLangs ?? [],
							}),
						]
					: []),
				pluginCustomCopyButton(),
			],
			defaultProps: {
				wrap: expressiveCodeConfig.defaultWrap,
				overridesByLang: {
					shellsession: { showLineNumbers: false },
					bash: { frame: "code" },
					shell: { frame: "code" },
					sh: { frame: "code" },
					zsh: { frame: "code" },
				},
			},
			styleOverrides: {
				codeBackground: "var(--codeblock-bg)",
				borderRadius: "0.75rem",
				borderColor: "none",
				codeFontSize: "0.875rem",
				codeFontFamily:
					"var(--font-jetbrains-mono, ui-monospace), SFMono-Regular, Menlo, Monaco, Consolas, 'Liberation Mono', 'Courier New', monospace",
				codeLineHeight: "1.5rem",
				frames: {
					editorBackground: "var(--codeblock-bg)",
					terminalBackground: "var(--codeblock-bg)",
					terminalTitlebarBackground: "var(--codeblock-bg)",
					editorTabBarBackground: "var(--codeblock-bg)",
					editorActiveTabBackground: "none",
					editorActiveTabIndicatorBottomColor: "var(--primary)",
					editorActiveTabIndicatorTopColor: "none",
					editorTabBarBorderBottomColor: "var(--codeblock-bg)",
					terminalTitlebarBorderBottomColor: "none",
				},
				textMarkers: {
					delHue: 0,
					insHue: 180,
					markHue: 250,
				},
			},
			frames: {
				showCopyToClipboardButton: false,
			},
		}),
		svelte({
			preprocess: vitePreprocess(),
		}),
		sitemap(),
		mdx(),
	],
	markdown: {
		processor: unified({
			remarkPlugins: [
				remarkMath,
				remarkContent,
				remarkFixGithubAdmonitions,
				remarkDirective,
				remarkEscapeNumericColons,
				...(markdownConfig.wikiLink.enable
					? [
							[
								remarkWikiLink,
								{
									...markdownConfig.wikiLink,
									permalink: permalinkConfig,
									imageApi: siteConfig.banner.imageApi,
									noReferrerDomains:
										siteConfig.imageOptimization?.noReferrerDomains ?? [],
								},
							],
						]
					: []),
				...(markdownConfig.autoImageGrid.enable
					? [[remarkAutoImageGrid, markdownConfig.autoImageGrid]]
					: []),
				parseDirectiveNode,
				remarkMermaid,
				[remarkPlantuml, markdownConfig.plantuml],
				remarkSectionize,
				remarkMarkSectionized,
			],
			rehypePlugins: [
				rehypeKatex,
				[
					rehypeContentLinks,
					{
						siteUrl: siteConfig.siteURL,
						target: "_blank",
						rel: ["nofollow", "noopener", "noreferrer"],
					},
				],
				rehypeSlug,
				...(expressiveCodeConfig.codeGroup.enable ? [rehypeCodeGroup] : []),
				rehypeWrapTable,
				rehypeMermaid,
				rehypePlantuml,
				[
					rehypeComponents,
					{
						components: {
							github: GithubCardComponent,
							grid: ImageGridComponent,
							note: (x, y) => AdmonitionComponent(x, y, "note"),
							tip: (x, y) => AdmonitionComponent(x, y, "tip"),
							important: (x, y) => AdmonitionComponent(x, y, "important"),
							caution: (x, y) => AdmonitionComponent(x, y, "caution"),
							warning: (x, y) => AdmonitionComponent(x, y, "warning"),
							info: (x, y) => AdmonitionComponent(x, y, "note"),
							abstract: (x, y) => AdmonitionComponent(x, y, "note"),
							summary: (x, y) => AdmonitionComponent(x, y, "note"),
							tldr: (x, y) => AdmonitionComponent(x, y, "note"),
							todo: (x, y) => AdmonitionComponent(x, y, "note"),
							hint: (x, y) => AdmonitionComponent(x, y, "tip"),
							success: (x, y) => AdmonitionComponent(x, y, "tip"),
							check: (x, y) => AdmonitionComponent(x, y, "tip"),
							done: (x, y) => AdmonitionComponent(x, y, "tip"),
							question: (x, y) => AdmonitionComponent(x, y, "important"),
							help: (x, y) => AdmonitionComponent(x, y, "important"),
							faq: (x, y) => AdmonitionComponent(x, y, "important"),
							attention: (x, y) => AdmonitionComponent(x, y, "warning"),
							failure: (x, y) => AdmonitionComponent(x, y, "caution"),
							fail: (x, y) => AdmonitionComponent(x, y, "caution"),
							missing: (x, y) => AdmonitionComponent(x, y, "caution"),
							danger: (x, y) => AdmonitionComponent(x, y, "caution"),
							error: (x, y) => AdmonitionComponent(x, y, "caution"),
							bug: (x, y) => AdmonitionComponent(x, y, "caution"),
							example: (x, y) => AdmonitionComponent(x, y, "note"),
							quote: (x, y) => AdmonitionComponent(x, y, "note"),
							cite: (x, y) => AdmonitionComponent(x, y, "note"),
						},
					},
				],
				[
					rehypeAutolinkHeadings,
					{
						behavior: "append",
						properties: {
							className: ["anchor"],
						},
						content: {
							type: "element",
							tagName: "span",
							properties: {
								className: ["anchor-icon"],
								"data-pagefind-ignore": true,
							},
							children: [{ type: "text", value: "#" }],
						},
					},
				],
				[
					rehypeMarkdownImages,
					{
						noReferrerDomains:
							siteConfig.imageOptimization?.noReferrerDomains ?? [],
					},
				],
			],
		}),
	},
	vite: {
		plugins: [tailwindcss()],
		optimizeDeps: {
			include: [
				"@iconify/svelte",
				"svelte",
				"svelte/transition",
				"svelte/easing",
				"overlayscrollbars",
				"@fancyapps/ui",
				"marked",
				"sanitize-html",
				"qrcode",
			],
		},
		server: {
			warmup: {
				clientFiles: [
					"src/layouts/Layout.astro",
					"src/pages/index.astro",
					"src/components/widgets/music-player/MusicPlayer.svelte",
					"src/components/organisms/navigation/Search.svelte",
					"src/components/control/ThemeSwitch.svelte",
					"src/components/features/settings/DisplaySettings.svelte",
					"src/scripts/swup-manager.ts",
				],
			},
		},
		build: {
			assetsInlineLimit: 4096,
			cssCodeSplit: true,
			cssMinify: "esbuild",
			inlineStylesheets: "auto",
			minify: "esbuild",
			rollupOptions: {
				onwarn(warning, warn) {
					if (
						warning.message.includes("is dynamically imported by") &&
						warning.message.includes("but also statically imported by")
					) {
						return;
					}
					warn(warning);
				},
			},
		},
		esbuildOptions: {
			drop:
				process.env.NODE_ENV === "production" ? ["console", "debugger"] : [],
		},
	},
});
