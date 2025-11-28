<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>The Four Official Namespaces Explained | UUID v5 Generator Blog</title>
  <meta name="description" content="Deep dive into DNS, URL, OID, and X.500 namespaces — their official UUIDs, history, and practical examples." />
  <meta property="og:title" content="The Four Official Namespaces Explained" />
  <meta property="og:description" content="Learn the canonical namespace UUIDs defined in RFC 4122 and how to use them correctly in your applications." />
  <meta property="og:url" content="{base}/blog/posts/post3" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>The Four Official Namespaces Explained</p>
  </div>

  <article class="prose">
    <h1>The Four Official Namespaces Explained</h1>
    <p class="post-meta">Published: November 30, 2025</p>

    <p>When RFC 4122 defined UUID v5, it also specified four canonical namespace UUIDs. These are sacred — hard-coded values that ensure global consistency when generating name-based IDs from common domains.</p>

    <h2>1. DNS Namespace</h2>
    <p><strong>UUID:</strong> <code>6ba7b810-9dad-11d1-80b4-00c04fd430c8</code></p>
    <p>Use when your name is a domain name.</p>
    <p class="font-monospace bg-light p-3 rounded">
      uuid_v5(DNS, "github.com") → <br>
      <strong>cfa3f64d-5d7f-5d0f-8a7b-9e8d8f8c8d9e</strong>
    </p>

    <h2>2. URL Namespace</h2>
    <p><strong>UUID:</strong> <code>6ba7b811-9dad-11d1-80b4-00c04fd430c8</code></p>
    <p>For full URLs — including protocol and path.</p>
    <p class="font-monospace bg-light p-3 rounded">
      uuid_v5(URL, "https://axelbase.dev/tools/uuid-v5") → same everywhere
    </p>

    <h2>3. OID Namespace</h2>
    <p><strong>UUID:</strong> <code>6ba7b812-9dad-11d1-80b4-00c04fd430c8</code></p>
    <p>For ISO Object Identifiers (used in SNMP, LDAP, etc.)</p>

    <h2>4. X.500 Namespace</h2>
    <p><strong>UUID:</strong> <code>6ba7b814-9dad-11d1-80b4-00c04fd430c8</code></p>
    <p>For X.500 Distinguished Names (DNs) in directories.</p>

    <h2>Why This Matters</h2>
    <p>Using these official namespaces means:</p>
    <ul>
      <li>Your generated IDs are interoperable with other systems</li>
      <li>Tools can recognize the input type</li>
      <li>You follow the standard exactly</li>
    </ul>

    <h2>Pro Tip</h2>
    <p>Always store both the name and namespace when using v5 — this allows reconstruction and debugging later.</p>

    <h2>FAQ</h2>
    <details>
      <summary>Can I create my own namespace?</summary>
      <p>Yes! Generate a random UUID v4 and use it as your private namespace. Just document it.</p>
    </details>
    <details>
      <summary>Are these namespaces "magic"?</summary>
      <p>No — they’re just well-known v4 UUIDs reserved by the RFC. Anyone can verify them.</p>
    </details>

    <p class="italic-note">
      The four namespaces are the foundation of interoperable, deterministic identifiers. Master them — master UUID v5.
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
