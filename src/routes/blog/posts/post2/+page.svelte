<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>UUID v5 vs v4 vs v1: When to Use Each | UUID v5 Generator Blog</title>
  <meta name="description" content="Complete comparison of UUID versions 1, 4, and 5 — understand randomness, sortability, determinism, and privacy implications." />
  <meta property="og:title" content="UUID v5 vs v4 vs v1: When to Use Each" />
  <meta property="og:description" content="Stop guessing which UUID version to use. This guide shows exactly when v1, v4, or v5 is the right choice in 2025." />
  <meta property="og:url" content="{base}/blog/posts/post2" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>UUID v5 vs v4 vs v1: When to Use Each</p>
  </div>

  <article class="prose">
    <h1>UUID v5 vs v4 vs v1: When to Use Each</h1>
    <p class="post-meta">Published: November 29, 2025</p>

    <p>Choosing the right UUID version isn't about preference — it's about matching your system's actual requirements. Here’s the definitive 2025 guide.</p>

    <h2>UUID v1 – Time-Based (Sortable)</h2>
    <p>Uses timestamp + MAC address/node + clock sequence. Great when you need:</p>
    <ul>
      <li>Natural chronological ordering</li>
      <li>Timestamp extraction from ID</li>
      <li>Low collision risk at high frequency</li>
    </ul>
    <p>Downside: Leaks creation time and (potentially) hardware address.</p>

    <h2>UUID v4 – Pure Random</h2>
    <p>128 bits of cryptographically strong randomness.</p>
    <ul>
      <li>Perfect for public tokens, session IDs, API keys</li>
      <li>No information leakage</li>
      <li>Universal support</li>
    </ul>
    <p>Downside: No ordering, no reproducibility.</p>

    <h2>UUID v5 – Name-Based (Deterministic)</h2>
    <p>The hybrid champion. Combines a namespace UUID with any string via SHA-1.</p>
    <ul>
      <li>Same input → same output forever</li>
      <li>No central coordination needed</li>
      <li>Perfect for distributed consistency</li>
      <li>Still globally unique</li>
    </ul>

    <h2>Decision Matrix (2025)</h2>
    <table class="table table-bordered">
      <thead>
        <tr>
          <th>Use Case</th>
          <th>Best Version</th>
          <th>Why</th>
        </tr>
      </thead>
      <tbody>
        <tr><td>Public API tokens</td><td>v4</td><td>No leakage</td></tr>
        <tr><td>Database primary keys (distributed)</td><td>v5 or v7</td><td>No merge conflicts</td></tr>
        <tr><td>Event sourcing / logs</td><td>v1 or v7</td><td>Chronological order</td></tr>
        <tr><td>Cache keys from URLs</td><td>v5</td><td>Deterministic</td></tr>
        <tr><td>User IDs from email</td><td>v5</td><td>Same user = same ID everywhere</td></tr>
      </tbody>
    </table>

    <h2>FAQ</h2>
    <details>
      <summary>Is UUID v5 "broken" because of SHA-1?</summary>
      <p>No. Collision attacks don’t apply here — we only need first 128 bits of hash, not cryptographic security.</p>
    </details>
    <details>
      <summary>Will UUID v7 replace v5?</summary>
      <p>Not entirely. v7 is time-sortable + random. v5 remains superior for pure determinism.</p>
    </details>

    <p class="italic-note">
      The best UUID version is the one that matches your actual requirements — not the newest one.
    </p>
  </article>
</div>

<style>
  .post-layout {
    max-width: 800px;
    padding-top: 2rem;
    padding-bottom: 4rem;
  }

  .breadcrumbs {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-bottom: 1.5rem;
    font-size: 0.9rem;
    color: var(--text-secondary);
  }
  .breadcrumbs a {
    color: var(--accent-secondary);
  }
  .breadcrumbs a:hover {
    text-decoration: underline;
  }
  .breadcrumbs p {
    margin: 0;
  }

  .prose {
    line-height: 1.8;
  }

  .prose .post-meta {
    color: var(--text-secondary);
    font-size: 0.9rem;
    margin-bottom: 2rem;
    border-bottom: 1px solid var(--border-color);
    padding-bottom: 1rem;
  }

  .prose h1, .prose h2 {
    color: var(--accent-secondary);
  }

  .prose h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
  }

  .prose h2 {
    margin-top: 2.5rem;
    border-bottom: 1px solid var(--secondary-bg);
    padding-bottom: 0.5rem;
  }
  
  .prose p {
    color: var(--text-primary);
  }

  .prose ul {
    list-style-type: '→ ';
    padding-left: 1.5rem;
    color: var(--text-primary);
  }
  .prose ul li::marker {
    color: var(--accent-primary);
  }
  .prose ul li {
    padding-left: 0.5rem;
    margin-bottom: 0.5rem;
  }

  .prose details {
    background: var(--secondary-bg);
    border: 1px solid var(--border-color);
    border-radius: 6px;
    padding: 1rem;
    margin-bottom: 1rem;
    transition: background-color 0.2s ease;
  }
  
  .prose details[open] {
    background-color: var(--card-bg);
  }

  .prose summary {
    cursor: pointer;
    font-weight: 600;
    color: var(--accent-secondary);
    list-style: none;
  }
  
  .prose summary::-webkit-details-marker {
    display: none;
  }
  
  .prose summary::before {
    content: '+';
    margin-right: 0.75rem;
    color: var(--accent-primary);
    font-weight: bold;
    display: inline-block;
    transition: transform 0.2s ease;
  }

  .prose details[open] summary::before {
    transform: rotate(45deg);
  }
  
  .prose details p {
    margin-top: 1rem;
    padding-left: 1.5rem;
    border-left: 2px solid var(--accent-primary);
    color: var(--text-secondary);
  }

  .prose .italic-note {
    font-style: italic;
    color: var(--text-secondary);
    text-align: center;
    margin-top: 3rem;
  }
</style>
