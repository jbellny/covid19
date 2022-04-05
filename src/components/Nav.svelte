<script>
    let isOpen = false
    import { page } from '$app/stores'

    function toggleNav() {
        isOpen = !isOpen
    }
</script>

<nav class="navbar" aria-label="main navigation">
    <div class="navbar-brand">
        <a href="/" class="navbar-item">
            <img src="logo.jpg" alt="covid icon">
        </a>
        <span 
            class="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            on:click={toggleNav}
            class:is-active={isOpen}
        >
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        </span>
    </div>
    <div class="navbar-menu" class:is-active={isOpen}>
        <div class="navbar-start">
            <a 
                href="/" 
                class="navbar-item"
                class:is-active={$page.url.pathname === '/'}>
                Home
            </a>
            <a 
                href="/about" 
                class="navbar-item" 
                class:is-active={$page.url.pathname === '/about'}>
                About
            </a>
        </div>
    </div>
</nav>


<style>
    @media(min-width: 769px) {
        nav {
            border-bottom: solid gray 1px;
        }
    }
</style>