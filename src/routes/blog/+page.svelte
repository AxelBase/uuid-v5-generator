<script lang="ts">
  import { base } from '$app/paths';

  const posts = [
    {
      href: '/blog/posts/post1',
      title: 'What is a UUID v5 and Why Use It?',
      description: 'An introduction to namespace-based UUIDs, their deterministic nature, and why they’re perfect for distributed systems.'
    },
    {
      href: '/blog/posts/post2',
      title: 'UUID v5 vs v4 vs v1: When to Use Each',
      description: 'A clear comparison of the three most relevant UUID versions in 2025 — randomness, sortability, and reproducibility.'
    },
    {
      href: '/blog/posts/post3',
      title: 'The Four Official Namespaces Explained',
      description: 'Deep dive into DNS, URL, OID, and X.500 namespaces — including their official UUIDs and real-world use cases.'
    },
    {
      href: '/blog/posts/post4',
      title: 'Generating Consistent IDs Across Systems',
      description: 'How UUID v5 ensures the same input always produces the same output — ideal for migrations, caching, and replication.'
    },
    {
      href: '/blog/posts/post5',
      title: 'Using Custom Namespaces Securely',
      description: 'Best practices for creating and managing your own namespace UUIDs without exposing sensitive information.'
    },
    {
      href: '/blog/posts/post6',
      title: 'UUID v5 in Databases and APIs',
      description: 'Real-world patterns for using name-based UUIDs as primary keys, cache keys, or message identifiers.'
    },
    {
      href: '/blog/posts/post7',
      title: 'Why This Tool Exists (And Why It’s 100% Client-Side)',
      description: 'The story behind building the most private, accurate, and offline-capable UUID v5 generator on the internet.'
    }
  ];
</script>

<svelte:head>
  <title>Blog | UUID v5 Generator – AxelBase</title>
  <meta name="description" content="Learn about UUID v5, namespace-based identifiers, best practices, and why deterministic IDs matter in modern systems." />
</svelte:head>

<div class="container fade-in blog-index py-5">
  <header class="blog-header text-center mb-5">
    <h1 class="display-5 fw-bold mb-4">
      UUID v5 Insights
    </h1>
    <p class="subtitle lead text-white-75">
      Tutorials, deep dives, and best practices for namespace-based identifiers.<br>
      Everything you need to master deterministic UUIDs in distributed systems.
    </p>
  </header>

  <div class="posts-grid">
    {#each posts as post}
      <a href="{base}{post.href}" class="card post-card h-100 text-decoration-none border-0 shadow-sm">
        <div class="card-body d-flex flex-column">
          <h2 class="post-title h5 fw-bold text-primary mb-3">{post.title}</h2>
          <p class="post-description text-muted flex-grow-1 small">{post.description}</p>
          <span class="read-more text-primary fw-semibold mt-3">
            Read Article
          </span>
        </div>
      </a>
    {/each}
  </div>

  <div class="text-center mt-5 text-white-75 small">
    All articles written and maintained by <strong>AxelBase</strong> • Open source • No tracking
  </div>
</div>

<style>
  .blog-index {
    min-height: 80vh;
  }

  .blog-header {
    padding-bottom: 2rem;
    border-bottom: 1px solid rgba(255,255,255,0.2);
  }

  .posts-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
  }

  .post-card {
    transition: transform 0.2s ease, box-shadow 0.2s ease;
    background: rgba(255,255,255,0.95);
    backdrop-filter: blur(10px);
  }

  .post-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0,0,0,0.15) !important;
  }

  .post-card:hover .read-more {
    transform: translateX(8px);
  }

  .read-more {
    transition: transform 0.2s ease;
    align-self: flex-start;
  }
</style>