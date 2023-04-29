<script lang="ts">
    import type { Feature } from '../interfaces';
    import FeatureCard from './FeatureCard.svelte';

    const features: Feature[] = [
        {
            src: '/images/icon-online.svg',
            name: 'Online Banking',
            description:
                'Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.'
        },
        {
            src: '/images/icon-online.svg',
            name: 'Simple Budgeting',
            description:
                'See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.'
        },
        {
            src: '/images/icon-online.svg',
            name: 'Fast Onboarding',
            description:
                'We don’t do branches. Open your account in minutes online and start taking control of your finances right away.'
        },
        {
            src: '/images/icon-online.svg',
            name: 'Open API',
            description:
                'Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.'
        }
    ];
</script>

<section class="bg-Very_Light_Gray flex flex-col items-center md:items-start md:pt-10 md:pb-20">
    <h2 class="text-Dark_Blue font-semibold text-2xl mb-5 md:text-4xl">Why choose Easybank?</h2>
    <p class="text-Grayish_Blue text-center md:text-left md:w-1/2">
        We leverage Open Banking to turn your bank account into your financial hub. Control your
        finances like never before.
    </p>

    <div class="mt-5 md:mt-10 flex flex-col justify-center items-center md:flex-row">
        {#each features as feature}
            <FeatureCard {...feature} />
        {/each}
    </div>
</section>
