/* ============================================================
   Basateen Greenhouse Group — shared header & footer partials
   Edit ONCE here to update the navbar/footer across all 20 pages.
   ============================================================ */

const HEADER_HTML = `
<a href="#main" class="skip-link">Skip to content</a>
<div class="hidden md:block bg-[var(--pine-950)] text-[var(--sand-100)] text-sm">
  <div class="max-w-7xl mx-auto px-6 lg:px-10 h-9 flex items-center justify-between">
    <div class="flex items-center gap-6">
      <a href="tel:+966500000000" class="hover:text-white transition-colors">+966 50 000 0000</a>
      <a href="mailto:info@basateengreenhouses.sa" class="hover:text-white transition-colors">info@basateengreenhouses.sa</a>
    </div>
    <div class="flex items-center gap-4">
      <a href="careers.html" class="hover:text-white transition-colors">Careers</a>
      <span class="opacity-30">|</span>
      <a href="contact.html" class="hover:text-white transition-colors">Branch Locator</a>
    </div>
  </div>
</div>

<header class="sticky top-0 z-50 bg-[var(--paper)]/95 backdrop-blur border-b border-[var(--line)]">
  <div class="max-w-7xl mx-auto px-6 lg:px-10">
    <div class="h-20 flex items-center justify-between">
      <a href="index.html" class="flex items-center shrink-0" aria-label="Basateen Greenhouse Group home">
        <img src="assets/images/logo.svg" alt="Basateen Greenhouse Group" class="h-9 w-auto"/>
      </a>

      <nav class="hidden lg:flex items-center gap-1" aria-label="Primary">
        <a data-nav="home" href="index.html" class="nav-link px-3 py-2 text-sm font-medium rounded-sm hover:bg-[var(--pine-100)] transition-colors">Home</a>
        <a data-nav="about" href="about.html" class="nav-link px-3 py-2 text-sm font-medium rounded-sm hover:bg-[var(--pine-100)] transition-colors">About</a>

        <div class="relative group">
          <button class="nav-link px-3 py-2 text-sm font-medium rounded-sm hover:bg-[var(--pine-100)] transition-colors flex items-center gap-1" aria-haspopup="true">
            Products
            <i class="fi fi-rr-angle-small-down text-xs mt-px"></i>
          </button>
          <div class="invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 transition-opacity absolute left-0 top-full pt-2 w-80">
            <div class="bg-white border border-[var(--line)] shadow-lg rounded-sm py-2">
              <a data-nav="products" href="products.html" class="block px-4 py-2 text-sm font-semibold hover:bg-[var(--pine-100)]">All Greenhouse Products</a>
              <div class="border-t border-[var(--line)] my-1"></div>
              <a data-nav="products-plastic" href="products-plastic-shadenet-fiberglass.html" class="block px-4 py-2 text-sm hover:bg-[var(--pine-100)]">Plastic, Shade-Net &amp; Fiberglass</a>
              <a data-nav="products-poly" href="products-polycarbonate-ac.html" class="block px-4 py-2 text-sm hover:bg-[var(--pine-100)]">Polycarbonate &amp; Air-Conditioned</a>
              <a data-nav="products-hydro" href="products-multiunit-hydroponic.html" class="block px-4 py-2 text-sm hover:bg-[var(--pine-100)]">Multi-Unit Halls &amp; Glass Hydroponic</a>
            </div>
          </div>
        </div>

        <div class="relative group">
          <button class="nav-link px-3 py-2 text-sm font-medium rounded-sm hover:bg-[var(--pine-100)] transition-colors flex items-center gap-1" aria-haspopup="true">
            Materials &amp; Systems
            <i class="fi fi-rr-angle-small-down text-xs mt-px"></i>
          </button>
          <div class="invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 transition-opacity absolute left-0 top-full pt-2 w-80">
            <div class="bg-white border border-[var(--line)] shadow-lg rounded-sm py-2">
              <a data-nav="materials" href="materials.html" class="block px-4 py-2 text-sm font-semibold hover:bg-[var(--pine-100)]">Materials &amp; Systems Overview</a>
              <div class="border-t border-[var(--line)] my-1"></div>
              <a data-nav="materials-coverings" href="materials-coverings-accessories.html" class="block px-4 py-2 text-sm hover:bg-[var(--pine-100)]">Coverings, Materials &amp; Accessories</a>
              <a data-nav="materials-climate" href="materials-climate-automation.html" class="block px-4 py-2 text-sm hover:bg-[var(--pine-100)]">Climate, Automation &amp; Hydroponics</a>
            </div>
          </div>
        </div>

        <div class="relative group">
          <button class="nav-link px-3 py-2 text-sm font-medium rounded-sm hover:bg-[var(--pine-100)] transition-colors flex items-center gap-1" aria-haspopup="true">
            Services
            <i class="fi fi-rr-angle-small-down text-xs mt-px"></i>
          </button>
          <div class="invisible opacity-0 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100 transition-opacity absolute left-0 top-full pt-2 w-80">
            <div class="bg-white border border-[var(--line)] shadow-lg rounded-sm py-2">
              <a data-nav="services" href="services.html" class="block px-4 py-2 text-sm font-semibold hover:bg-[var(--pine-100)]">Services Overview</a>
              <div class="border-t border-[var(--line)] my-1"></div>
              <a data-nav="services-turnkey" href="services-turnkey-partners.html" class="block px-4 py-2 text-sm hover:bg-[var(--pine-100)]">Turnkey Projects &amp; Technology Partners</a>
              <a data-nav="services-consultancy" href="services-consultancy-training.html" class="block px-4 py-2 text-sm hover:bg-[var(--pine-100)]">Consultancy, Training &amp; Advisory</a>
            </div>
          </div>
        </div>

        <a data-nav="farms" href="farms-projects.html" class="nav-link px-3 py-2 text-sm font-medium rounded-sm hover:bg-[var(--pine-100)] transition-colors">Farms &amp; Projects</a>
        <a data-nav="sustainability" href="sustainability-support.html" class="nav-link px-3 py-2 text-sm font-medium rounded-sm hover:bg-[var(--pine-100)] transition-colors">Sustainability</a>
        <a data-nav="blog" href="blog.html" class="nav-link px-3 py-2 text-sm font-medium rounded-sm hover:bg-[var(--pine-100)] transition-colors">Resources</a>
      </nav>

      <div class="flex items-center gap-3">
        <a href="contact.html" class="hidden md:inline-flex items-center px-4 py-2.5 bg-[var(--pine-700)] text-white text-sm font-medium rounded-sm hover:bg-[var(--pine-800)] transition-colors">
          Request a Quote
        </a>
        <button id="menuToggle" class="lg:hidden p-2 -mr-2" aria-label="Open menu" aria-expanded="false" aria-controls="mobileMenu">
          <i id="menuIcon" class="fi fi-rr-menu-burger text-2xl text-ink"></i>
        </button>
      </div>
    </div>
  </div>

  <div id="mobileMenu" class="lg:hidden border-t border-[var(--line)] bg-[var(--paper)]">
    <nav class="px-6 py-4 flex flex-col gap-1 text-sm" aria-label="Mobile">
      <a data-nav="home" href="index.html" class="py-2.5 border-b border-[var(--line)]">Home</a>
      <a data-nav="about" href="about.html" class="py-2.5 border-b border-[var(--line)]">About Us</a>
      <a data-nav="careers" href="careers.html" class="py-2.5 border-b border-[var(--line)]">Careers</a>
      <span class="pt-3 pb-1 text-xs uppercase tracking-wide text-[var(--ink-soft)]">Products</span>
      <a data-nav="products" href="products.html" class="py-2 border-b border-[var(--line)]">All Products</a>
      <a data-nav="products-plastic" href="products-plastic-shadenet-fiberglass.html" class="py-2 border-b border-[var(--line)] pl-3">Plastic, Shade-Net &amp; Fiberglass</a>
      <a data-nav="products-poly" href="products-polycarbonate-ac.html" class="py-2 border-b border-[var(--line)] pl-3">Polycarbonate &amp; Air-Conditioned</a>
      <a data-nav="products-hydro" href="products-multiunit-hydroponic.html" class="py-2 border-b border-[var(--line)] pl-3">Multi-Unit &amp; Glass Hydroponic</a>
      <span class="pt-3 pb-1 text-xs uppercase tracking-wide text-[var(--ink-soft)]">Materials &amp; Systems</span>
      <a data-nav="materials" href="materials.html" class="py-2 border-b border-[var(--line)]">Overview</a>
      <a data-nav="materials-coverings" href="materials-coverings-accessories.html" class="py-2 border-b border-[var(--line)] pl-3">Coverings &amp; Accessories</a>
      <a data-nav="materials-climate" href="materials-climate-automation.html" class="py-2 border-b border-[var(--line)] pl-3">Climate &amp; Automation</a>
      <span class="pt-3 pb-1 text-xs uppercase tracking-wide text-[var(--ink-soft)]">Services</span>
      <a data-nav="services" href="services.html" class="py-2 border-b border-[var(--line)]">Overview</a>
      <a data-nav="services-turnkey" href="services-turnkey-partners.html" class="py-2 border-b border-[var(--line)] pl-3">Turnkey &amp; Technology Partners</a>
      <a data-nav="services-consultancy" href="services-consultancy-training.html" class="py-2 border-b border-[var(--line)] pl-3">Consultancy &amp; Training</a>
      <a data-nav="farms" href="farms-projects.html" class="py-2.5 border-b border-[var(--line)] mt-2">Farms &amp; Projects</a>
      <a data-nav="sustainability" href="sustainability-support.html" class="py-2.5 border-b border-[var(--line)]">Sustainability &amp; Support</a>
      <a data-nav="blog" href="blog.html" class="py-2.5 border-b border-[var(--line)]">Resources</a>
      <a data-nav="contact" href="contact.html" class="py-2.5 border-b border-[var(--line)]">Contact Us</a>
      <a href="contact.html" class="mt-4 inline-flex justify-center items-center px-4 py-3 bg-[var(--pine-700)] text-white text-sm font-medium rounded-sm">Request a Quote</a>
    </nav>
  </div>
</header>
`;

const FOOTER_HTML = `
<footer class="bg-[var(--pine-950)] text-[var(--sand-100)]">
  <div class="max-w-7xl mx-auto px-6 lg:px-10 pt-16 pb-8">
    <div class="grid grid-cols-2 md:grid-cols-6 gap-8 pb-12 border-b border-white/10">
      <div class="col-span-2">
        <img src="assets/images/logo.svg" alt="Basateen Greenhouse Group" class="h-8 w-auto mb-4 brightness-0 invert opacity-90"/>
        <p class="text-sm text-[var(--sand-100)]/70 leading-relaxed max-w-xs">Designing, manufacturing and operating greenhouses across the Kingdom &mdash; from single plastic tunnels to large-scale glass hydroponic farms.</p>
        <div class="flex items-center gap-3 mt-5">
          <a href="#" aria-label="Instagram" class="w-9 h-9 flex items-center justify-center border border-white/20 rounded-full hover:bg-white/10 transition-colors">
            <i class="fi fi-brands-instagram text-sm"></i>
          </a>
          <a href="#" aria-label="LinkedIn" class="w-9 h-9 flex items-center justify-center border border-white/20 rounded-full hover:bg-white/10 transition-colors">
            <i class="fi fi-brands-linkedin text-sm"></i>
          </a>
          <a href="#" aria-label="YouTube" class="w-9 h-9 flex items-center justify-center border border-white/20 rounded-full hover:bg-white/10 transition-colors">
            <i class="fi fi-brands-youtube text-sm"></i>
          </a>
          <a href="#" aria-label="WhatsApp" class="w-9 h-9 flex items-center justify-center border border-white/20 rounded-full hover:bg-white/10 transition-colors">
            <i class="fi fi-brands-whatsapp text-sm"></i>
          </a>
        </div>
      </div>

      <div>
        <p class="text-xl font-semibold mb-3 text-white">Company</p>
        <ul class="space-y-2 text-sm text-[var(--sand-100)]/70">
          <li><a href="about.html" class="hover:text-white transition-colors">About Us</a></li>
          <li><a href="about.html#why-us" class="hover:text-white transition-colors">Why Choose Us</a></li>
          <li><a href="careers.html" class="hover:text-white transition-colors">Careers</a></li>
          <li><a href="blog.html" class="hover:text-white transition-colors">Resources</a></li>
        </ul>
      </div>

      <div>
        <p class="text-xl font-semibold mb-3 text-white">Products</p>
        <ul class="space-y-2 text-sm text-[var(--sand-100)]/70">
          <li><a href="products.html" class="hover:text-white transition-colors">All Products</a></li>
          <li><a href="products-plastic-shadenet-fiberglass.html" class="hover:text-white transition-colors">Plastic &amp; Shade-Net</a></li>
          <li><a href="products-polycarbonate-ac.html" class="hover:text-white transition-colors">Polycarbonate &amp; A/C</a></li>
          <li><a href="products-multiunit-hydroponic.html" class="hover:text-white transition-colors">Glass Hydroponic</a></li>
        </ul>
      </div>

      <div>
        <p class="text-xl font-semibold mb-3 text-white">Materials &amp; Services</p>
        <ul class="space-y-2 text-sm text-[var(--sand-100)]/70">
          <li><a href="materials.html" class="hover:text-white transition-colors">Materials &amp; Systems</a></li>
          <li><a href="services.html" class="hover:text-white transition-colors">Services Overview</a></li>
          <li><a href="farms-projects.html" class="hover:text-white transition-colors">Farms &amp; Projects</a></li>
          <li><a href="sustainability-support.html" class="hover:text-white transition-colors">Sustainability</a></li>
        </ul>
      </div>

      <div>
        <p class="text-xl font-semibold mb-3 text-white">Contact</p>
        <ul class="space-y-2 text-sm text-[var(--sand-100)]/70">
          <li><a href="tel:+966500000000" class="hover:text-white transition-colors">+966 50 000 0000</a></li>
          <li><a href="mailto:info@basateengreenhouses.sa" class="hover:text-white transition-colors">info@basateengreenhouses.sa</a></li>
          <li>Al-Kharj &amp; Qassim, Saudi Arabia</li>
          <li><a href="contact.html" class="hover:text-white transition-colors">Contact Us</a></li>
        </ul>
      </div>
    </div>

    <div class="pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs text-[var(--sand-100)]/60">
      <p>&copy; <span id="year"></span>  Lavista Marketing. All rights reserved.</p>
      <div class="flex items-center gap-5">
        <a href="privacy-policy.html" class="hover:text-white transition-colors">Privacy Policy</a>
        <a href="terms-conditions.html" class="hover:text-white transition-colors">Terms &amp; Conditions</a>
        <a href="sitemap.html" class="hover:text-white transition-colors">Sitemap</a>
      </div>
    </div>
  </div>
</footer>

<a href="https://wa.me/966500000000" target="_blank" rel="noopener" aria-label="Chat on WhatsApp"
   class="fixed bottom-5 right-5 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
  <i class="fi fi-brands-whatsapp text-2xl"></i>
</a>
`;
