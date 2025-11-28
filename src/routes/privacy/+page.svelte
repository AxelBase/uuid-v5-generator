<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Privacy Policy | UUID v5 Generator – AxelBase</title>
  <meta name="description" content="We collect nothing. Your data never leaves your browser. Full privacy policy for the client-side UUID v5 generator." />
  <meta property="og:title" content="Privacy Policy | UUID v5 Generator" />
  <meta property="og:description" content="100% client-side. Zero tracking. Zero data collection. This is privacy by design." />
  <meta property="og:url" content="{base}/privacy" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <p>Privacy Policy</p>
  </div>

  <article class="prose">
    <h1>Privacy Policy</h1>
    <p class="post-meta">Effective Date: November 29, 2025</p>

    <p>Welcome to the <strong>UUID v5 (Namespace-Based) Generator</strong> by AxelBase. This tool runs <strong>100% in your browser</strong>. We are deeply committed to your privacy — so much so that we built this utility with <strong>zero data collection by design</strong>.</p>

    <h2>We Collect Nothing</h2>
    <p>This tool does <strong>not</strong> collect, store, transmit, or process any personal data. Specifically:</p>
    <ul>
      <li><strong>No IP addresses</strong> are logged</li>
      <li><strong>No browser fingerprinting</strong> or device information</li>
      <li><strong>No input data</strong> (namespaces, names, generated UUIDs) ever leaves your device</li>
      <li><strong>No cookies, localStorage persistence, or session tracking</strong></li>
      <li><strong>No analytics, pixels, or third-party scripts</strong></li>
    </ul>
    <p>All UUID generation happens using the native Web Crypto API (<code>crypto.subtle.digest('SHA-1', ...)</code>) entirely on your machine. Even if you generate 10,000 IDs, nothing is sent anywhere.</p>

    <h2>How the Tool Works</h2>
    <p>Every feature — single generation, bulk download, copy-to-clipboard — is executed <strong>client-side only</strong>. The site is a Progressive Web App (PWA) that works fully offline after the first visit. No backend. No database. No logs.</p>

    <h2>Third-Party Services</h2>
    <p>We use only <strong>Bootstrap 5.3.3 via jsDelivr CDN</strong> for styling. This CDN does not track users or set cookies when used statically. No other external services are loaded.</p>

    <h2>Your Data Security</h2>
    <p>Since no data is transmitted, the strongest security guarantee possible is provided: <em>if it never leaves your device, it can’t be intercepted</em>. You control everything.</p>

    <h2>Children’s Privacy</h2>
    <p>This tool is not directed at children under 13. We do not knowingly collect any personal information from children.</p>

    <h2>Changes to This Policy</h2>
    <p>We may update this policy if new features are added that change data practices. Any changes will be reflected here with an updated effective date.</p>

    <h2>Contact</h2>
    <p>Questions? Open an issue on our <a href="https://github.com/axelbase/uuid-v5-generator" target="_blank" rel="noopener">GitHub repository</a>.</p>

    <p class="italic-note">
      <strong>Privacy isn’t a feature — it’s the foundation.</strong><br>
      Thank you for trusting a tool that respects you completely.
    </p>
  </article>
</div>

<style>
  /* Same shared styles as blog posts */
  .post-layout { max-width: 800px; padding: 2rem 1rem 4rem; }
  .breadcrumbs { display: flex; align-items: center; gap: .5rem; margin-bottom: 1.5rem; font-size: .9rem; color: #aaa; }
  .breadcrumbs a { color: #a78bfa; }
  .breadcrumbs a:hover { text-decoration: underline; }
  .prose h1 { font-size: 2.8rem; color: #e0e7ff; }
  .prose h2 { margin-top: 2.5rem; color: #c4b5fd; border-bottom: 1px solid rgba(255,255,255,.1); padding-bottom: .5rem; }
  .post-meta { color: #94a3b8; font-size: .9rem; margin-bottom: 2rem; }
  .prose ul { padding-left: 1.5rem; }
  .prose ul li::marker { color: #a78bfa; }
  .italic-note { font-style: italic; text-align: center; margin-top: 3rem; color: #94a3b8; font-size: 1.1rem; }
</style>