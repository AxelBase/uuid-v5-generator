<script lang="ts">
  import { base } from '$app/paths';
  import { page } from '$app/stores';
</script>

<svelte:head>
  <title>404 – Not Found | UUID v5 Generator</title>
  <meta name="description" content="Page not found. Return to the most accurate UUID v5 generator on the internet." />
  <meta property="og:title" content="404 – Page Not Found" />
  <meta property="og:description" content="The requested page could not be found. But the UUID v5 generator is still here." />
  <meta property="og:url" content="{base}{$page.url.pathname}" />
  <meta property="og:type" content="website" />
  <meta name="robots" content="noindex" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="d-flex align-items-center justify-content-center min-vh-100 text-center px-4">
  <div>
    <h1 class="display-1 fw-bold text-white mb-4" style="font-size: 8rem; opacity: 0.9;">
      404
    </h1>
    
    <h2 class="display-5 fw-light text-white mb-4">
      This isn’t a valid UUID v5 either.
    </h2>

    <p class="lead text-white-75 mb-5" style="max-width: 600px; margin: 0 auto;">
      The page you’re looking for doesn’t exist — but the world’s most private,<br>
      accurate, and offline-ready UUID v5 generator is just one click away.
    </p>

    <div class="d-flex gap-3 justify-content-center flex-wrap">
      <a href="{base}/" class="btn btn-primary btn-lg px-5">
        Back to Generator
      </a>
      <a href="{base}/blog" class="btn btn-outline-light btn-lg px-5">
        Read the Blog
      </a>
    </div>

    <div class="mt-5 text-white-50 small">
      <p class="mb-1">Still lost? Try one of these:</p>
      <div class="d-flex gap-4 justify-content-center flex-wrap mt-3">
        <a href="{base}/privacy" class="text-white-50 hover-text-white">Privacy Policy</a>
        <span>•</span>
        <a href="{base}/terms" class="text-white-50 hover-text-white">Terms</a>
        <span>•</span>
        <a href="https://github.com/axelbase/uuid-v5-generator" target="_blank" rel="noopener" class="text-white-50 hover-text-white">
          GitHub
        </a>
      </div>
    </div>

    <p class="italic-note mt-5 text-white-75">
      <em>Even 404 pages should respect your privacy.<br>
      No tracking. No logs. Just a friendly redirect.</em>
    </p>
  </div>
</div>

<style>
  .hover-text-white:hover {
    color: white !important;
    text-decoration: underline;
  }
  .italic-note {
    font-size: 1.1rem;
    opacity: 0.9;
  }
  @media (max-width: 576px) {
    h1.display-1 {
      font-size: 5rem;
    }
    .btn-lg {
      width: 100%;
      margin-bottom: .5rem;
    }
  }
</style>