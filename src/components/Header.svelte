<script lang="ts">
    import Logo from './Logo.svelte';

    let open = false;

    const toggle = () => {
        open = !open;
    };
</script>

<header
    class="flex justify-between items-center px-6 md:px-10 shadow h-16 bg-white absolute w-full"
>
    <!-- logo -->
    <Logo />

    <!-- links -->
    <nav class="hidden md:inline-block">
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Blog</a>
        <a href="/">Careers</a>
    </nav>

    <!-- cta -->
    <button class="btn hidden md:inline-block" aria-label="request invite">request invite</button>

    <!-- hamburger -->
    <button class="inline-block md:hidden cursor-pointer" on:click={toggle} aria-label="hamburger">
        {#if open}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
            >
                <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
        {:else}
            <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
            >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
            </svg>
        {/if}
    </button>

    <!-- mobile nav -->
    <div
        class="absolute top-20 left-1/2 -translate-x-1/2 flex flex-col bg-white w-3/4 p-4 rounded-lg shadow-lg items-center mobile-nav md:hidden transition-all"
        class:hidden={!open}
    >
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Blog</a>
        <a href="/">Careers</a>
    </div>
</header>

<style>
    nav a {
        @apply mx-1 text-sm text-Grayish_Blue capitalize pb-4 transition-all duration-200 border-b-4 border-b-transparent cursor-pointer;
    }

    nav a:hover {
        @apply text-black font-semibold border-b-Lime_Green;
    }

    .mobile-nav a {
        @apply my-1;
    }
</style>
