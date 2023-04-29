<script lang="ts">
    import type { Article } from '../interfaces';
    import ArticleCard from './ArticleCard.svelte';

    const articles: Article[] = [
        {
            src: '/images/image-currency.jpg',
            author: 'By Claire Robinson',
            name: 'Receive money in any currency with no fees',
            description:
                'The world is getting smaller and we’re becoming more mobile. So why shouldyou be forced to only receive money in a single …'
        },
        {
            src: '/images/image-restaurant.jpg',
            author: 'By Wilson Hutton',
            name: 'Treat yourself without worrying about money',
            description:
                'Our simple budgeting feature allows you to separate out your spending and set realistic limits each month. That means you …'
        },
        {
            src: '/images/image-plane.jpg',
            author: 'By Wilson Hutton',
            name: 'Take your Easybank card wherever you go',
            description:
                'We want you to enjoy your travels. This is why we don’t charge any fees on purchases while you’re abroad. We’ll even show you …'
        },
        {
            src: '/images/image-confetti.jpg',
            author: 'By Claire Robinson',
            name: 'Our invite-only Beta accounts are now live!',
            description:
                'After a lot of hard work by the whole team, we’re excited to launch our closed beta. It’s easy to request an invite through the site ...'
        }
    ];
</script>

<section
    class="flex flex-col justify-center items-center md:items-start md:justify-stretch md:pb-10"
>
    <h2 class="text-Dark_Blue font-semibold text-2xl mb-5 md:mb-10 md:text-4xl">Latest Articles</h2>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {#each articles as article}
            <ArticleCard {article} />
        {/each}
    </div>
</section>
