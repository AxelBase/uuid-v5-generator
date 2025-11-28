<script lang="ts">
  import { base } from '$app/paths';
  import { slide } from 'svelte/transition'; // Added for smooth accordion animation
  import { generateUuidV5, generateBulkUuidV5, NAMESPACES, isValidUuid } from '$lib/uuid-v5';

  let name = 'my-resource';
  let namespace = NAMESPACES.DNS;
  let customNamespace = '';
  let uuid = '';
  let copied = false;
  let error = '';

  // Bulk
  let bulkCount = 10;
  let isGeneratingBulk = false;

  // FAQ State Logic
  let activeFaqIndex = 0; // Default open index (0 = first item)

  function toggleFaq(index: number) {
    // If clicking the one already open, close it (-1), otherwise open the new one
    activeFaqIndex = activeFaqIndex === index ? -1 : index;
  }

  const examples = [
    { label: 'example.com → DNS', ns: NAMESPACES.DNS, name: 'example.com' },
    { label: 'github.com → DNS', ns: NAMESPACES.DNS, name: 'github.com' },
    { label: 'https://axelbase.dev → URL', ns: NAMESPACES.URL, name: 'https://axelbase.dev' },
    { label: '1.3.6.1.4.1 → OID', ns: NAMESPACES.OID, name: '1.3.6.1.4.1' }
  ];

  async function generate() {
    error = '';
    try {
      const ns = customNamespace.trim() && isValidUuid(customNamespace.trim()) ? customNamespace.trim() : namespace;
      uuid = await generateUuidV5(ns, name.trim() || 'empty');
    } catch (e: any) {
      error = e.message;
    }
  }

  async function copyToClipboard() {
    if (!uuid) return;
    await navigator.clipboard.writeText(uuid);
    copied = true;
    setTimeout(() => copied = false, 2000);
  }

  async function downloadBulk() {
    if (bulkCount < 1 || bulkCount > 10000) return;
    isGeneratingBulk = true;
    error = '';
    try {
      const ns = customNamespace.trim() && isValidUuid(customNamespace.trim()) ? customNamespace.trim() : namespace;
      const list = await generateBulkUuidV5(ns, name.trim() || 'item', bulkCount);
      const blob = new Blob([list.join('\n')], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `uuid-v5-${name || 'items'}-${bulkCount}.txt`;
      a.click();
      URL.revokeObjectURL(url);
    } catch (e: any) {
      error = e.message;
    } finally {
      isGeneratingBulk = false;
    }
  }

  function useExample(ex: typeof examples[0]) {
    namespace = ex.ns;
    customNamespace = '';
    name = ex.name;
    generate();
  }
</script>

<section id="home" class="py-5">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-10">
        
        <div class="text-center mb-5">
          <h1 class="display-4 fw-bold" style="color: var(--olive-primary);">UUID v5 Generator</h1>
          <p class="lead" style="color: var(--olive-light);">
            Deterministic • RFC 4122 Compliant • 100% Client-Side • Offline Ready
          </p>
        </div>

        <div class="card p-4 p-md-5">
          <div class="row g-4">
            
            <div class="col-md-6">
              <label for="namespace-select" class="form-label fw-semibold">Namespace</label>
              <select id="namespace-select" class="form-select form-select-lg" bind:value={namespace} on:change={() => customNamespace = ''}>
                <option value={NAMESPACES.DNS}>DNS (6ba7b810-...)</option>
                <option value={NAMESPACES.URL}>URL (6ba7b811-...)</option>
                <option value={NAMESPACES.OID}>OID (6ba7b812-...)</option>
                <option value={NAMESPACES.X500}>X.500 (6ba7b814-...)</option>
              </select>
            </div>

            <div class="col-md-6">
              <label for="custom-namespace" class="form-label fw-semibold">Custom Namespace UUID (optional)</label>
              <input 
                id="custom-namespace" 
                type="text" 
                class="form-control form-control-lg" 
                placeholder="Leave empty to use selected"
                bind:value={customNamespace}
              />
            </div>

            <div class="col-12">
              <label for="name-input" class="form-label fw-semibold">Name (any string)</label>
              <input 
                id="name-input" 
                type="text" 
                class="form-control form-control-lg" 
                bind:value={name} 
                placeholder="e.g. users/alice"
              />
            </div>

            <div class="col-12 text-center mt-4">
              <button class="btn btn-primary btn-lg px-5 shadow-sm" on:click={generate}>
                Generate UUID v5
              </button>
            </div>

            {#if error}
              <div class="col-12">
                <div class="alert alert-danger rounded-4">{error}</div>
              </div>
            {/if}

            {#if uuid}
              <div class="col-12">
                <div class="input-group input-group-lg mt-3">
                  <input type="text" class="form-control font-monospace text-center" style="border-radius: 1.5rem 0 0 1.5rem;" value={uuid} readonly aria-label="Generated UUID v5" />
                  <button class="btn btn-outline-secondary" style="border-radius: 0 1.5rem 1.5rem 0; border-width: 2px;" on:click={copyToClipboard}>
                    {copied ? 'Copied!' : 'Copy'}
                  </button>
                </div>
              </div>
            {/if}
          </div>

          <hr class="my-5" style="opacity: 0.1;">

          <h4 class="text-center mb-4 text-muted">Quick Examples</h4>
          <div class="row g-3 justify-content-center">
            {#each examples as ex}
              <div class="col-auto">
                <button class="btn btn-outline-primary btn-sm" on:click={() => useExample(ex)}>
                  {ex.label}
                </button>
              </div>
            {/each}
          </div>

          <hr class="my-5" style="opacity: 0.1;">

          <h4 class="text-center mb-4 text-muted">Bulk Generation (1–10,000)</h4>
          <div class="row g-3 align-items-end justify-content-center">
            <div class="col-auto">
              <label for="bulk-count" class="visually-hidden">Number of UUIDs</label>
              <input 
                id="bulk-count" 
                type="number" 
                class="form-control form-control-lg text-center"
                bind:value={bulkCount}
                min="1" max="10000"
                style="width: 140px;"
              />
            </div>
            <div class="col-auto">
              <button class="btn btn-success btn-lg" style="border-radius: 50px;" on:click={downloadBulk} disabled={isGeneratingBulk}>
                {isGeneratingBulk ? 'Generating...' : 'Download .txt'}
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<section id="about" class="py-5" style="background: rgba(255,255,255,0.95); backdrop-filter: blur(10px);">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-10 text-center">
        <h2 class="display-5 fw-bold mb-4 text-primary">About This UUID v5 Generator</h2>
        <p class="lead text-muted mb-5">
          The most accurate, private, and standards-compliant UUID v5 tool on the internet — built for engineers who refuse to compromise.
        </p>

        <div class="row g-4 text-start">
          <div class="col-md-6">
            <h3 class="h4 fw-bold text-primary">Deterministic by Design</h3>
            <p>
              Unlike random UUID v4s, <strong>UUID v5 is fully deterministic</strong>. Feed it the same namespace and name — whether today, tomorrow, or ten years from now, on any device, in any browser — and you will <em>always</em> get the exact same 128-bit identifier. This makes v5 perfect for distributed systems, cache keys, entity mapping, and data migrations where consistency trumps randomness.
            </p>
          </div>
          <div class="col-md-6">
            <h3 class="h4 fw-bold text-primary">100% Client-Side & Offline-First</h3>
            <p>
              Every byte of computation happens in your browser using the native Web Crypto API. No data ever leaves your device. No tracking. No logs. No analytics. After the first visit, this site works completely offline as a Progressive Web App — generate UUIDs on planes, in secure environments, or during network outages.
            </p>
          </div>
          <div class="col-md-6">
            <h3 class="h4 fw-bold text-primary">RFC 4122 §4.3 Compliant</h3>
            <p>
              This isn’t an approximation. The core algorithm follows the official specification to the letter: SHA-1 hashing of namespace + name, correct version (5) and variant bit setting, proper handling of the four canonical namespaces (DNS, URL, OID, X.500), and support for custom private namespaces. You can verify correctness against the RFC test vectors.
            </p>
          </div>
          <div class="col-md-6">
            <h3 class="h4 fw-bold text-primary">Built for Real Engineering Work</h3>
            <p>
              Bulk generation up to 10,000 IDs with one-click download. Instant copy-to-clipboard feedback. Quick example presets. Full PWA manifest. Deployable as a static site on GitHub Pages. Open source under MIT. This isn’t a demo — it’s production-grade infrastructure you can trust and extend.
            </p>
          </div>
        </div>

        <p class="mt-5 text-muted">
          Built by <strong>AxelBase</strong> — because the world deserved a UUID v5 tool that respects both the standard and your privacy.
        </p>
      </div>
    </div>
  </div>
</section>
<section id="how-to-use" class="py-5">
  <div class="container">
    <div class="row justify-content-center">
      <div class="col-lg-10">
        <h2 class="display-5 fw-bold text-center mb-5 text-primary">How to Use the Generator</h2>

        <div class="card border-0 shadow-lg">
          <div class="card-body p-5">
            <ol class="list-group list-group-numbered list-group-flush fs-5">
              <li class="list-group-item py-3">
                <strong>Choose a Namespace</strong><br>
                <small class="text-muted">
                  Select one of the four official RFC 4122 namespaces (DNS, URL, OID, X.500) or enter your own custom namespace UUID. Use the official ones when generating IDs from domains, URLs, or directory names — they guarantee global interoperability.
                </small>
              </li>
              <li class="list-group-item py-3">
                <strong>Enter Your Name</strong><br>
                <small class="text-muted">
                  This is any string you want to turn into a deterministic identifier: a domain, email, file path, username, resource name, or configuration key. The same name + namespace will always produce the same UUID.
                </small>
              </li>
              <li class="list-group-item py-3">
                <strong>Click “Generate UUID v5”</strong><br>
                <small class="text-muted">
                  The tool instantly computes the SHA-1 hash, applies version 5 and RFC variant bits, and displays your perfectly formed UUID in lowercase hyphenated format.
                </small>
              </li>
              <li class="list-group-item py-3">
                <strong>Copy or Download</strong><br>
                <small class="text-muted">
                  Use the Copy button for single IDs. For bulk needs, enter a count (1–10,000) and download a clean .txt file with one UUID per line — ideal for seeding databases or test data.
                </small>
              </li>
              <li class="list-group-item py-3">
                <strong>Work Offline (Optional)</strong><br>
                <small class="text-muted">
                  Add this page to your home screen or save it locally. Because everything is client-side, it works forever without internet — perfect for air-gapped environments or travel.
                </small>
              </li>
            </ol>

            <div class="mt-5 p-4 bg-light rounded">
              <h4 class="fw-bold text-primary">Pro Tips</h4>
              <ul class="mb-0">
                <li>Use the “Quick Examples” buttons to see real outputs instantly</li>
                <li>Always document your namespace choices — future you will thank you</li>
                <li>Never use sensitive data as the name; the namespace acts as your salt</li>
                <li>For internal systems, generate one random v4 as your private namespace and reuse it forever</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
<section id="faq" class="py-5 mb-5" style="background-color: #f4f4f4;">
  <div class="container">
    <h2 class="fw-bold mb-5 text-center" style="color: var(--olive-primary);">Frequently Asked Questions</h2>
    <div class="row justify-content-center">
      <div class="col-lg-8">
        
        <div class="accordion" id="accordionExample">

          <!-- Q1 -->
          <div class="accordion-item rounded-3 mb-3 border-0 shadow-sm overflow-hidden">
            <h2 class="accordion-header">
              <button 
                class="accordion-button {activeFaqIndex !== 0 ? 'collapsed' : ''}" 
                type="button" 
                on:click={() => toggleFaq(0)}
              >
                Is any data sent to a server?
              </button>
            </h2>
            {#if activeFaqIndex === 0}
              <div class="accordion-collapse collapse show" transition:slide>
                <div class="accordion-body">
                  <strong>No — never.</strong> 100% of the computation happens in your browser using the native Web Crypto API. Namespaces, names, and generated UUIDs never leave your device. No logs, no analytics, no tracking.
                </div>
              </div>
            {/if}
          </div>

          <!-- Q2 -->
          <div class="accordion-item rounded-3 mb-3 border-0 shadow-sm overflow-hidden">
            <h2 class="accordion-header">
              <button 
                class="accordion-button {activeFaqIndex !== 1 ? 'collapsed' : ''}" 
                type="button" 
                on:click={() => toggleFaq(1)}
              >
                Can I use this offline or in secure environments?
              </button>
            </h2>
            {#if activeFaqIndex === 1}
              <div class="accordion-collapse collapse show" transition:slide>
                <div class="accordion-body">
                  Yes. After the first visit, this site works fully offline as a Progressive Web App. Save it to your home screen or download the /docs folder — it runs forever without internet, perfect for air-gapped networks.
                </div>
              </div>
            {/if}
          </div>

          <!-- Q3 -->
          <div class="accordion-item rounded-3 mb-3 border-0 shadow-sm overflow-hidden">
            <h2 class="accordion-header">
              <button 
                class="accordion-button {activeFaqIndex !== 2 ? 'collapsed' : ''}" 
                type="button" 
                on:click={() => toggleFaq(2)}
              >
                Is SHA-1 still safe for UUID v5?
              </button>
            </h2>
            {#if activeFaqIndex === 2}
              <div class="accordion-collapse collapse show" transition:slide>
                <div class="accordion-body">
                  Yes. SHA-1 collision attacks don’t apply here — you control both inputs. Collisions are astronomically unlikely and irrelevant for identification. The RFC still mandates SHA-1 for v5.
                </div>
              </div>
            {/if}
          </div>

          <!-- Q4 -->
          <div class="accordion-item rounded-3 mb-3 border-0 shadow-sm overflow-hidden">
            <h2 class="accordion-header">
              <button 
                class="accordion-button {activeFaqIndex !== 3 ? 'collapsed' : ''}" 
                type="button" 
                on:click={() => toggleFaq(3)}
              >
                Should I use a custom namespace?
              </button>
            </h2>
            {#if activeFaqIndex === 3}
              <div class="accordion-collapse collapse show" transition:slide>
                <div class="accordion-body">
                  Use official namespaces (DNS, URL, etc.) when possible for interoperability. For internal/private systems, generate one random UUID v4 as your private namespace and reuse it forever.
                </div>
              </div>
            {/if}
          </div>

          <!-- Q5 -->
          <div class="accordion-item rounded-3 mb-3 border-0 shadow-sm overflow-hidden">
            <h2 class="accordion-header">
              <button 
                class="accordion-button {activeFaqIndex !== 4 ? 'collapsed' : ''}" 
                type="button" 
                on:click={() => toggleFaq(4)}
              >
                Can I trust the generated UUIDs in production?
              </button>
            </h2>
            {#if activeFaqIndex === 4}
              <div class="accordion-collapse collapse show" transition:slide>
                <div class="accordion-body">
                  Absolutely. The implementation is open source and follows RFC 4122 §4.3 exactly. It has been verified against official test vectors and is used in real distributed systems today.
                </div>
              </div>
            {/if}
          </div>

          <!-- Q6 -->
          <div class="accordion-item rounded-3 mb-3 border-0 shadow-sm overflow-hidden">
            <h2 class="accordion-header">
              <button 
                class="accordion-button {activeFaqIndex !== 5 ? 'collapsed' : ''}" 
                type="button" 
                on:click={() => toggleFaq(5)}
              >
                Will UUID v7 replace v5?
              </button>
            </h2>
            {#if activeFaqIndex === 5}
              <div class="accordion-collapse collapse show" transition:slide>
                <div class="accordion-body">
                  No. UUID v7 adds time-ordering + randomness. UUID v5 remains the only version offering pure, reproducible determinism — essential for cache keys, migrations, and cross-system consistency.
                </div>
              </div>
            {/if}
          </div>

        </div>

      </div>
    </div>
  </div>
</section>