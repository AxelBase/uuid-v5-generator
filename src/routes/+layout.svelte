<script lang="ts">
  import { base } from '$app/paths';
  import { browser } from '$app/environment';
  import { fly } from 'svelte/transition';
  import '../app.css';

  // Inject <base> tag for GitHub Pages compatibility
  if (browser) {
    const baseTag = document.createElement('base');
    baseTag.href = base + '/';
    document.head.appendChild(baseTag);
  }

  // --- Buy Me A Coffee Logic ---
  const paypalUsername = 'AxelLab427'; // TODO: Enter your PayPal username
  const donationAmounts = [1, 3, 5, 10];
  let isDropdownOpen = false;

  function toggleDropdown() {
    isDropdownOpen = !isDropdownOpen;
  }

  function closeDropdown() {
    isDropdownOpen = false;
  }

  // Click Outside Action
  function clickOutside(node: HTMLElement) {
    const handleClick = (event: MouseEvent) => {
      if (node && !node.contains(event.target as Node)) {
        node.dispatchEvent(new CustomEvent('click_outside'));
      }
    };

    document.addEventListener('click', handleClick, true);
    return {
      destroy() {
        document.removeEventListener('click', handleClick, true);
      }
    };
  }
</script>

<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css">

<header class="custom-navbar">
  <nav class="container d-flex justify-content-between align-items-center">
    
    <div class="d-flex align-items-center gap-3">
      <a href="{base}/" aria-label="Home">
        <img src="{base}/AxelLab-Logo.ico" alt="AxelBase Logo" class="navbar-brand-logo" />
      </a>
      <a class="navbar-brand-text text-decoration-none" href="{base}/">AxelBase</a>
    </div>

    <div class="d-flex align-items-center gap-4">
      <ul class="d-none d-lg-flex list-unstyled m-0 gap-4 align-items-center">
        <li><a class="nav-link" href="{base}/">Home</a></li>
        <li><a class="nav-link" href="{base}/#about">About</a></li>
        <li><a class="nav-link" href="{base}/#how-to-use">How to use</a></li>
        <li><a class="nav-link" href="{base}/#faq">FAQ</a></li>
        <li><a class="nav-link" href="{base}/blog">Blog</a></li>
      </ul>

      <div class="bmac-nav-item" use:clickOutside on:click_outside={closeDropdown}>
        <button class="bmac-button shadow-sm" on:click={toggleDropdown}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <path d="M12.35,22.2L12,22A10,10,0,0,1,2,12V10A2,2,0,0,1,4,8H7.2A5.13,5.13,0,0,1,12,3A5.13,5.13,0,0,1,16.8,8H20A2,2,0,0,1,22,10V12A10,10,0,0,1,12.35,22.2M4,10V12A8,8,0,0,0,12,20A8,8,0,0,0,20,12V10H16.8A5.11,5.11,0,0,1,12.5,5.12A5.15,5.15,0,0,1,7.2,10H4Z" />
          </svg>
          Buy Coffee
        </button>

        {#if isDropdownOpen}
          <div class="bmac-dropdown" transition:fly={{ y: -10, duration: 250 }}>
            {#each donationAmounts as amount}
              <a 
                href="https://paypal.me/{paypalUsername}/{amount}" 
                target="_blank" 
                rel="noopener noreferrer" 
                on:click={closeDropdown}
              >
                ${amount}
              </a>
            {/each}
          </div>
        {/if}
      </div>
    </div>

  </nav>
</header>

<main class="flex-grow-1">
  <slot />
</main>

<footer class="text-center py-4 mt-auto">
  <div class="container">
    <p class="mb-2 text-white-50">
      AxelBase UUID v5 (Namespace) Generator – {new Date().getFullYear()}
    </p>
    <div class="d-flex justify-content-center gap-3">
      <a href="{base}/privacy">Privacy Policy</a>
      <span class="text-white-50">•</span>
      <a href="{base}/terms">Terms of Service</a>
    </div>
  </div>
</footer>