<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Why This Tool Exists (And Why It’s 100% Client-Side) | UUID v5 Generator Blog</title>
  <meta name="description" content="The story behind building the most private, accurate, and offline-capable UUID v5 generator on the internet." />
  <meta property="og:title" content="Why This Tool Exists" />
  <meta property="og:description" content="No tracking. No servers. No compromises. Just pure, standards-compliant UUID v5 generation in your browser." />
  <meta property="og:url" content="{base}/blog/posts/post7" />
  <meta property="og:type" content="article" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/blog">Blog</a>
    <span>/</span>
    <p>Why This Tool Exists</p>
  </div>

  <article class="prose">
    <h1>Why This Tool Exists (And Why It’s 100% Client-Side)</h1>
    <p class="post-meta">Published: December 4, 2025</p>

    <p>I built this UUID v5 generator for one simple reason: <strong>every other tool was wrong</strong>.</p>

    <p>Most online generators only offer v4. Some claim v5 but use flawed implementations. Almost all send your data to servers. None work offline.</p>

    <p>This one fixes all of that.</p>

    <h2>What Makes This Different</h2>
    <ul>
      <li>100% RFC 4122 compliant (verified with official test vectors)</li>
      <li>Runs entirely in your browser — zero network requests after load</li>
      <li>Full offline support via PWA</li>
      <li>No cookies, no analytics, no fingerprinting</li>
      <li>Bulk generation up to 10,000 IDs</li>
      <li>Open source, auditable, MIT licensed</li>
    </ul>

    <h2>Built for Real Engineers</h2>
    <p>This isn’t a toy. It’s the tool I wish existed when:</p>
    <ul>
      <li>Debugging distributed tracing</li>
      <li>Seeding test databases</li>
      <li>Building offline-first prototypes</li>
      <li>Working in secure environments</li>
    </ul>

    <h2>The Future</h2>
    <p>Planned features:</p>
    <ul>
      <li>UUID v7 support (when stable)</li>
      <li>Namespace manager</li>
      <li>CLI version</li>
      <li>Browser extension</li>
    </ul>

    <h2>FAQ</h2>
    <details>
      <summary>Why not just use a library?</summary>
      <p>Most online tools are black boxes. This one is transparent — and works without npm install.</p>
    </details>

    <p class="italic-note">
      Privacy isn't a feature. It's the default.<br>
      Thank you for using a tool that respects you.
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
