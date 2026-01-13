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

  const currentYear = new Date().getFullYear();

  // Buy Me A Coffee + Crypto
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

      <!-- Buy Me a Coffee + Bitcoin Dropdown -->
      <div class="bmac-nav-item position-relative" use:clickOutside on:click_outside={closeDropdown}>
        <button
          class="bmac-button shadow-sm d-flex align-items-center gap-2"
          on:click={toggleDropdown}
          aria-label="Support AxelBase"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M2,21V19H20V21H2M20,8V5H4V8H20M20,10H4V13C4,14.38 4.5,15.63 5.31,16.58L11.64,19H12.36L18.69,16.58C19.5,15.63 20,14.38 20,13V10M16,2H8V4H16V2Z" />
          </svg>
          <span class="d-none d-sm-inline">Buy me a Coffee</span>
        </button>

        {#if isDropdownOpen}
          <div class="bmac-dropdown" transition:fly={{ y: -10, duration: 250 }}>
            <a
              href="https://buymeacoffee.com/axelbase"
              target="_blank"
              rel="noopener"
              on:click={closeDropdown}
            >
              <span class="amount">$3</span> One Coffee
            </a>
            <a
              href="https://buymeacoffee.com/axelbase"
              target="_blank"
              rel="noopener"
              on:click={closeDropdown}
            >
              <span class="amount">$5</span> Two Coffees
            </a>
            <a
              href="https://buymeacoffee.com/axelbase"
              target="_blank"
              rel="noopener"
              on:click={closeDropdown}
            >
              <span class="amount">$10</span> Three Coffees
            </a>

            <a
              href="https://buymeacoffee.com/axelbase"
              target="_blank"
              rel="noopener"
              on:click={closeDropdown}
              class="custom-amount"
            >
              Custom Amount
            </a>

            <a
              href="bitcoin:bc1q3p0e6vt492m4w4fpz5m2cl4zcfuqqkgaj6myc9?label=AxelBase&message=Buy%20me%20a%20coffee"
              target="_blank"
              rel="noopener"
              on:click={closeDropdown}
              class="custom-amount bitcoin-option"
            >
              Buy via Bitcoin
            </a>
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
      AxelBase Crypto Price Target Calculator – {currentYear}
    </p>
    <div class="d-flex justify-content-center gap-3">
      <a href="{base}/privacy">Privacy Policy</a>
      <span class="text-white-50">•</span>
      <a href="{base}/terms">Terms of Service</a>
    </div>
  </div>
</footer>

<style>
  /* Keep original File 1 button & dropdown style, but adapt colors to File 2 theme */
  .bmac-button {
    background: var(--white-pure);
    color: var(--olive-primary);
    border: none;
    border-radius: 50px;
    padding: 0.65rem 1.4rem;
    font-weight: 700;
    font-size: 0.95rem;
    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    box-shadow: 0 4px 15px rgba(0,0,0,0.12);
  }

  .bmac-button:hover {
    background-color: #f5f5f5;
    transform: scale(1.04);
    box-shadow: 0 6px 20px rgba(0,0,0,0.18);
  }

  .bmac-dropdown {
    position: absolute;
    top: 120%;
    right: 0;
    width: 240px;
    background: var(--white-pure);
    border-radius: 1.5rem;
    box-shadow: 0 12px 32px rgba(59, 60, 54, 0.18);
    overflow: hidden;
    border: 1px solid rgba(59, 60, 54, 0.08);
    padding: 0.75rem 0;
    z-index: 1001;
  }

  .bmac-dropdown a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem 1.25rem;
    color: var(--olive-primary);
    text-decoration: none;
    font-weight: 500;
    transition: all 0.2s ease;
  }

  .bmac-dropdown a:hover {
    background: rgba(59, 60, 54, 0.07);
    color: var(--olive-dark);
    padding-left: 1.5rem;
  }

  .bmac-dropdown .amount {
    font-weight: 700;
    color: var(--olive-primary);
    font-size: 1.1rem;
  }

  .bmac-dropdown .custom-amount {
    font-weight: 700;
    color: var(--olive-dark);
    border-top: 1px solid rgba(59, 60, 54, 0.1);
    margin-top: 0.35rem;
    padding-top: 0.85rem;
    justify-content: center !important;
  }

  .bmac-dropdown .bitcoin-option {
    color: #f7931a;
    font-weight: 600;
  }

  .bmac-dropdown .bitcoin-option:hover {
    background: rgba(247, 147, 26, 0.08);
    color: #e67e22;
  }
</style>