declare module "astro:actions" {
	type Actions = typeof import("/Users/hugo/Google Drive/GitHub/games/src/actions")["server"];

	export const actions: Actions;
}