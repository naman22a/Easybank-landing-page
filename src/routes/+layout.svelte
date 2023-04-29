<script lang="ts">
    import '../styles/globals.scss';
    import Header from '../components/Header.svelte';
</script>

<svelte:head>
    <title>Easy Bank</title>
</svelte:head>

<Header />
<div>
    <slot />
</div>
