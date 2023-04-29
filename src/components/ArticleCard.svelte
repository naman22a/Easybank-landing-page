<script lang="ts">
    import type { Article } from '../interfaces';

    export let article: Article;

    const { src, author, name, description } = article;
</script>

<div class="shadow rounded mb-7 md:mb-7 md:mr-7">
    <img {src} alt={name} class="rounded mb-3" />
    <div class="p-3">
        <h3 class="text-Grayish_Blue text-sm mb-2">{author}</h3>
        <h4 class="text-lg hover:text-Lime_Green cursor-pointer">{name}</h4>
        <p class="text-Grayish_Blue">
            {description}
        </p>
    </div>
</div>
