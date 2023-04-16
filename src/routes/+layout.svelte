<script>
    import { page } from '$app/stores';
</script>

<style>
    .container {
        padding: 0 0.5rem;
        max-width: 600px;
        margin: 1rem auto;
    }

    nav {
        display: flex;
        gap: 1.5rem;
        align-items: center;
        margin: 0 0.5rem;
    }

    a {
        color: var(--primary-color);
        text-decoration: none;
        font-weight: 600;
        padding: 3px 6px;
        border-radius: 5px;
    }

    a.active {
        color: white;
        background-color: var(--primary-color);
    }

    .title {
        font-weight: 700;
        font-size: 1.5rem;
    }

</style>

<nav>
    <div class="title">MLB 2023</div>
    <a href="/" class:active={$page.url.pathname==='/'}>Standings</a>
    <a href="/stats" class:active={$page.url.pathname==='/stats'}>Stats</a>
</nav>

<div class="container">
    <slot />
</div>