<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Generating Consistent IDs Across Systems | UUID v5 Generator Blog</title>
  <meta name="description" content="Learn how UUID v5 eliminates ID conflicts in distributed databases, microservices, and data migrations using deterministic naming." />
  <meta property="og:title" content="Generating Consistent IDs Across Systems" />
  <meta property="og:description" content="Say goodbye to duplicate keys during merges. UUID v5 ensures the same entity always gets the same ID — no matter where it's created." />
  <meta property="og:url" content="{base}/blog/posts/post4" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Generating Consistent IDs Across Systems</p>
  </div>

  <article class="prose">
    <h1>Generating Consistent IDs Across Systems</h1>
    <p class="post-meta">Published: December 1, 2025</p>

    <p>In distributed systems, one of the hardest problems is <strong>identity</strong>. When the same entity (user, document, product) is created independently in multiple services or regions, traditional auto-increment IDs or random UUIDs cause conflicts during reconciliation.</p>

    <p>UUID v5 solves this elegantly through <strong>deterministic generation</strong>.</p>

    <h2>The Problem with Random IDs</h2>
    <p>With UUID v4:</p>
    <ul>
      <li>User Alice signs up in US → gets <code>f47ac10b-...</code></li>
      <li>Alice signs up in EU (before sync) → gets <code>8a2e7d9f-...</code></li>
      <li>Merge conflict → manual resolution required</li>
    </ul>

    <h2>The UUID v5 Solution</h2>
    <p>With UUID v5 + a canonical namespace:</p>
    <ul>
      <li>US service: <code>uuid_v5(DNS, "alice@example.com")</code> → <code>9f8e2d1a-...</code></li>
      <li>EU service: same input → <code>9f8e2d1a-...</code></li>
      <li>No conflict. Ever.</li>
    </ul>

    <h2>Real-World Patterns</h2>
    <p>Leading companies use this approach for:</p>
    <ul>
      <li><strong>Multi-region databases</strong> (CockroachDB, Yugabyte)</li>
      <li><strong>Offline-first apps</strong> (generate IDs before sync)</li>
      <li><strong>Event sourcing</strong> (aggregate roots from stream names)</li>
      <li><strong>CI/CD pipelines</strong> (build IDs from git commit + branch)</li>
    </ul>

    <h2>Implementation Tips</h2>
    <ul>
      <li>Use a shared namespace UUID across all services</li>
      <li>Standardize name formatting (lowercase, trimmed)</li>
      <li>Document your naming conventions</li>
      <li>Store the source name alongside the UUID for debugging</li>
    </ul>

    <h2>FAQ</h2>
    <details>
      <summary>What if two teams use different namespaces?</summary>
      <p>You’ll get collisions. Always define organization-wide canonical namespaces.</p>
    </details>
    <details>
      <summary>Can I change the name later?</summary>
      <p>Only if you accept a new ID. v5 IDs are immutable by design.</p>
    </details>

    <p class="italic-note">
      UUID v5 doesn’t just generate identifiers — it creates consensus without coordination.
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
