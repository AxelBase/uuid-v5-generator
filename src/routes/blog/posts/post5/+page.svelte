<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Using Custom Namespaces Securely | UUID v5 Generator Blog</title>
  <meta name="description" content="Best practices for creating and managing private namespace UUIDs while avoiding common security pitfalls." />
  <meta property="og:title" content="Using Custom Namespaces Securely" />
  <meta property="og:description" content="Learn how to safely create your own namespace UUIDs for internal systems without leaking information or risking collisions." />
  <meta property="og:url" content="{base}/blog/posts/post5" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Using Custom Namespaces Securely</p>
  </div>

  <article class="prose">
    <h1>Using Custom Namespaces Securely</h1>
    <p class="post-meta">Published: December 2, 2025</p>

    <p>While the four official namespaces cover most public use cases, many teams need <strong>private namespaces</strong> for internal identifiers. Here's how to do it right.</p>

    <h2>How to Create a Custom Namespace</h2>
    <p>Simple and secure:</p>
    <ol>
      <li>Generate a random UUID v4 once: <code>550e8400-e29b-41d4-a716-446655440000</code></li>
      <li>Document it as your organization's namespace</li>
      <li>Use it forever for internal v5 generation</li>
    </ol>

    <h2>Security Best Practices</h2>
    <ul>
      <li><strong>Never derive namespaces from secrets</strong> — they don’t need to be secret</li>
      <li><strong>Do make them random</strong> — prevents guessing attacks</li>
      <li><strong>Never reuse official namespaces</strong> for private data</li>
      <li><strong>Version your namespaces</strong> if semantics change</li>
    </ul>

    <h2>Example: Multi-Tenant SaaS</h2>
    <p>Company A wants tenant-scoped IDs:</p>
    <ul>
      <li>Namespace: <code>1a2b3c4d-...</code> (their private v4)</li>
      <li>Name: <code>tenant:acme-co/user:jane</code></li>
      <li>Result: consistent, isolated, predictable IDs</li>
    </ul>

    <h2>FAQ</h2>
    <details>
      <summary>Should my namespace be secret?</summary>
      <p>No. Security comes from the name, not the namespace. Treat it like a public constant.</p>
    </details>
    <details>
      <summary>How many custom namespaces do I need?</summary>
      <p>One per logical domain (users, orders, documents, etc.) is typical.</p>
    </details>

    <p class="italic-note">
      A well-designed custom namespace is the foundation of clean, scalable identity architecture.
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
