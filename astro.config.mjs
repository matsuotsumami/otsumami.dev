// Full Astro Configuration API Documentation:
// https://docs.astro.build/reference/configuration-reference

// @type-check enabled!
// VSCode and other TypeScript-enabled text editors will provide auto-completion,
// helpful tooltips, and warnings if your exported object is invalid.
// You can disable this by removing "@ts-check" and `@type` comments below.

// @ts-check
export default /** @type {import('astro').AstroUserConfig} */ ({
	// Enable many renderers to support all different kinds of components.
  src: './src/',
	renderers: ['@astrojs/renderer-preact', '@astrojs/renderer-svelte', '@astrojs/renderer-vue', '@astrojs/renderer-solid'],
});
