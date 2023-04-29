import { c as create_ssr_component, v as validate_component } from "../../chunks/index.js";
import { L as Logo } from "../../chunks/Logo.js";
const globals = "";
const Header_svelte_svelte_type_style_lang = "";
const css = {
  code: "nav.svelte-1w3hwta a.svelte-1w3hwta{@apply mx-1 text-sm text-Grayish_Blue capitalize pb-4 transition-all duration-200 border-b-4 border-b-transparent cursor-pointer;}nav.svelte-1w3hwta a.svelte-1w3hwta:hover{@apply text-black font-semibold border-b-Lime_Green;}.mobile-nav.svelte-1w3hwta a.svelte-1w3hwta{@apply my-1;}",
  map: null
};
const Header = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<header class="flex justify-between items-center px-6 md:px-10 shadow h-16 bg-white absolute w-full">
    ${validate_component(Logo, "Logo").$$render($$result, {}, {}, {})}

    
    <nav class="hidden md:inline-block svelte-1w3hwta"><a href="/" class="svelte-1w3hwta">Home</a>
        <a href="/" class="svelte-1w3hwta">About</a>
        <a href="/" class="svelte-1w3hwta">Contact</a>
        <a href="/" class="svelte-1w3hwta">Blog</a>
        <a href="/" class="svelte-1w3hwta">Careers</a></nav>

    
    <button class="btn hidden md:inline-block" aria-label="request invite">request invite</button>

    
    <button class="inline-block md:hidden cursor-pointer" aria-label="hamburger">${`<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6"><path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path></svg>`}</button>

    
    <div class="${[
    "absolute top-20 left-1/2 -translate-x-1/2 flex flex-col bg-white w-3/4 p-4 rounded-lg shadow-lg items-center mobile-nav md:hidden transition-all svelte-1w3hwta",
    "hidden"
  ].join(" ").trim()}"><a href="/" class="svelte-1w3hwta">Home</a>
        <a href="/" class="svelte-1w3hwta">About</a>
        <a href="/" class="svelte-1w3hwta">Contact</a>
        <a href="/" class="svelte-1w3hwta">Blog</a>
        <a href="/" class="svelte-1w3hwta">Careers</a></div>
</header>`;
});
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-ssk0ft_START -->${$$result.title = `<title>Easy Bank</title>`, ""}<!-- HEAD_svelte-ssk0ft_END -->`, ""}

${validate_component(Header, "Header").$$render($$result, {}, {}, {})}
<div>${slots.default ? slots.default({}) : ``}</div>`;
});
export {
  Layout as default
};
