<script lang="ts">
  import { base } from '$app/paths';
</script>

<svelte:head>
  <title>Terms & Conditions | UUID v5 Generator – AxelBase</title>
  <meta name="description" content="Legal terms for using the free, open-source, client-side UUID v5 generator by AxelBase." />
  <meta property="og:title" content="Terms & Conditions" />
  <meta property="og:description" content="Free to use, modify, and distribute under the MIT license. No warranties expressed or implied." />
  <meta property="og:url" content="{base}/terms" />
  <meta property="og:type" content="website" />
  <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<div class="container fade-in post-layout">
  <div class="breadcrumbs">
    <a href="{base}/">Home</a>
    <span>/</span>
    <p>Terms & Conditions</p>
  </div>

  <article class="prose">
    <h1>Terms & Conditions</h1>
    <p class="post-meta">Last Updated: November 29, 2025</p>

    <p>By using the <strong>UUID v5 (Namespace-Based) Generator</strong> ("the Tool") provided by AxelBase, you agree to these Terms & Conditions.</p>

    <h2>1. Nature of the Tool</h2>
    <p>This is a <strong>free, open-source</strong>, client-side web application licensed under the <strong>MIT License</strong>. It runs entirely in your browser with no server-side processing or data collection.</p>

    <h2>2. License to Use</h2>
    <p>You are granted a worldwide, royalty-free, perpetual license to:</p>
    <ul>
      <li>Use the Tool for personal or commercial purposes</li>
      <li>Generate unlimited UUID v5 identifiers</li>
      <li>Fork, modify, and redistribute the source code (per MIT license)</li>
      <li>Embed the logic in your own projects</li>
    </ul>

    <h2>3. No Warranty</h2>
    <p>The Tool is provided <strong>"as is"</strong> without any warranties, expressed or implied. While we strive for RFC 4122 compliance and accuracy, we do <strong>not guarantee</strong>:</p>
    <ul>
      <li>Correctness of generated UUIDs in all edge cases</li>
      <li>Availability or uptime of the hosted version</li>
      <li>Fitness for any particular purpose</li>
    </ul>
    <p>Use at your own risk.</p>

    <h2>4. Limitation of Liability</h2>
    <p>AxelBase shall not be liable for any direct, indirect, incidental, or consequential damages arising from use of the Tool — including but not limited to data loss, security breaches, or business interruption.</p>

    <h2>5. Accuracy of Implementation</h2>
    <p>The underlying algorithm follows RFC 4122 §4.3 exactly and uses the browser’s native Web Crypto API. You may verify correctness by reviewing the open-source code on GitHub.</p>

    <h2>6. Changes to the Tool</h2>
    <p>We may update, modify, or discontinue the hosted version at any time without notice.</p>

    <h2>7. Governing Law</h2>
    <p>These terms are governed by the laws of common sense and open-source goodwill.</p>

    <p class="italic-note">
      <strong>You are free.</strong><br>
      Use this tool with confidence — it was built to serve, not to surveil.
    </p>
  </article>
</div>

<style>
  /* Same styles as Privacy Policy */
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