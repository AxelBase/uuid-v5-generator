<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>UUID v5 in Databases and APIs | UUID v5 Generator Blog</title>
  <meta name="description" content="Practical patterns for using name-based UUIDs as primary keys, foreign keys, and cache identifiers in real applications." />
  <meta property="og:title" content="UUID v5 in Databases and APIs" />
  <meta property="og:description" content="From PostgreSQL to Redis to REST APIs — see how top teams use UUID v5 in production today." />
  <meta property="og:url" content="{base}/blog/posts/post6" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>UUID v5 in Databases and APIs</p>
  </div>

  <article class="prose">
    <h1>UUID v5 in Databases and APIs</h1>
    <p class="post-meta">Published: December 3, 2025</p>

    <p>UUID v5 isn't just theoretical — it's battle-tested in production at scale. Here are the patterns that actually work.</p>

    <h2>Primary Keys in Distributed Databases</h2>
    <p>CockroachDB, Yugabyte, TiDB all recommend UUID v5 for:</p>
    <ul>
      <li>Hotspot-free writes</li>
      <li>Safe multi-region replication</li>
      <li>Zero-conflict merges</li>
    </ul>

    <h2>Cache Key Generation</h2>
    <p>Perfect pattern:</p>
    <pre><code>cache.set(
  uuid_v5(URL_NAMESPACE, request.url),
  response,
  ttl=3600
)</code></pre>

    <h2>REST API Design</h2>
    <p>Use v5 IDs in URLs when the resource is addressable by name:</p>
    <ul>
      <li><code>/users/9f8e2d1a-5b8c-5d0f-8a7b-9e8d8f8c8d9e</code> (from email)</li>
      <li>Predictable, reproducible, no DB lookup needed to validate existence</li>
    </ul>

    <h2>Performance Note</h2>
    <p>UUID v5 is slightly slower than v4 due to SHA-1, but the difference is negligible at scale and worth the consistency gains.</p>

    <h2>FAQ</h2>
    <details>
      <summary>Should I index the source name too?</summary>
      <p>Yes! For lookups when you have the name but not the ID.</p>
    </details>

    <p class="italic-note">
      In modern systems, predictable beats random — when you can afford it.
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
