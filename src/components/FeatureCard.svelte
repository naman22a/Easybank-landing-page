<script lang="ts">
    export let src: string;
    export let name: string;
    export let description: string;
</script>

<div class="flex flex-col justify-center items-center md:items-start my-5 md:my-0 md:mr-7">
    <img {src} alt="Online Banking" />
    <h3 class="text-lg my-2">{name}</h3>
    <p class="text-center md:text-left text-Grayish_Blue">
        {description}
    </p>
</div>
