// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="communityguide.html"><strong aria-hidden="true">1.</strong> Community Guidelines</a></li><li class="chapter-item expanded "><a href="Glossary.html"><strong aria-hidden="true">2.</strong> Glossary</a></li><li class="chapter-item expanded "><a href="ZKP.html"><strong aria-hidden="true">3.</strong> Zero Knowledge Proofs</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="curatedzk.html"><strong aria-hidden="true">3.1.</strong> Curated Resources</a></li><li class="chapter-item expanded "><a href="zkpseries.html"><strong aria-hidden="true">3.2.</strong> Video Lecture Series</a></li><li class="chapter-item expanded "><a href="introzkp.html"><strong aria-hidden="true">3.3.</strong> Articles</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="zkbeginner.html"><strong aria-hidden="true">3.3.1.</strong> ZK Introductory</a></li><li class="chapter-item expanded "><a href="Ingoblogs.html"><strong aria-hidden="true">3.3.2.</strong> Ingonyama Blogs</a></li><li class="chapter-item expanded "><a href="zksnarks.html"><strong aria-hidden="true">3.3.3.</strong> ZKSNARKS</a></li><li class="chapter-item expanded "><a href="starks.html"><strong aria-hidden="true">3.3.4.</strong> STARKS</a></li><li class="chapter-item expanded "><a href="applicationszk.html"><strong aria-hidden="true">3.3.5.</strong> Applications</a></li><li class="chapter-item expanded "><a href="vulnerabilities.html"><strong aria-hidden="true">3.3.6.</strong> Vulnerabilities</a></li></ol></li><li class="chapter-item expanded "><a href="handsonzk.html"><strong aria-hidden="true">3.4.</strong> Hands-On ZK</a></li><li class="chapter-item expanded "><a href="protocolszk.html"><strong aria-hidden="true">3.5.</strong> Protocols</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="protocolsSNARK.html"><strong aria-hidden="true">3.5.1.</strong> SNARK Protocols</a></li><li class="chapter-item expanded "><a href="protocolsSTARK.html"><strong aria-hidden="true">3.5.2.</strong> STARK Protocols</a></li><li class="chapter-item expanded "><a href="protocolsLookup.html"><strong aria-hidden="true">3.5.3.</strong> Lookup Protocols</a></li><li class="chapter-item expanded "><a href="protocolsFoldingSchemes.html"><strong aria-hidden="true">3.5.4.</strong> Folding Scheme Protocols</a></li><li class="chapter-item expanded "><a href="protocolsOther.html"><strong aria-hidden="true">3.5.5.</strong> Other Protocols</a></li></ol></li><li class="chapter-item expanded "><a href="mathzkp.html"><strong aria-hidden="true">3.6.</strong> Mathematics</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="ff.html"><strong aria-hidden="true">3.6.1.</strong> Finite fields</a></li><li class="chapter-item expanded "><a href="cryptoprimzk.html"><strong aria-hidden="true">3.6.2.</strong> Cryptographic primitives</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="elliptic.html"><strong aria-hidden="true">3.6.2.1.</strong> Elliptic curves</a></li><li class="chapter-item expanded "><a href="hashzk.html"><strong aria-hidden="true">3.6.2.2.</strong> Hash functions</a></li><li class="chapter-item expanded "><a href="VDFzk.html"><strong aria-hidden="true">3.6.2.3.</strong> Verifiable Delay functions</a></li><li class="chapter-item expanded "><a href="Arithmzk.html"><strong aria-hidden="true">3.6.2.4.</strong> Arithmetization</a></li><li class="chapter-item expanded "><a href="commitmentzk.html"><strong aria-hidden="true">3.6.2.5.</strong> Commitment Schemes</a></li><li class="chapter-item expanded "><a href="MPC.html"><strong aria-hidden="true">3.6.2.6.</strong> Secure Multi Party Computation</a></li><li class="chapter-item expanded "><a href="provingzk.html"><strong aria-hidden="true">3.6.2.7.</strong> Proving Methods</a></li></ol></li><li class="chapter-item expanded "><a href="compprimzk.html"><strong aria-hidden="true">3.6.3.</strong> Computational Primitives</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="hwzk.html"><strong aria-hidden="true">3.6.3.1.</strong> Hardware acceleration</a></li><li class="chapter-item expanded "><a href="fft.html"><strong aria-hidden="true">3.6.3.2.</strong> Discrete Fourier Transforms</a></li><li class="chapter-item expanded "><a href="msm.html"><strong aria-hidden="true">3.6.3.3.</strong> Multi Scalar Multiplications</a></li></ol></li></ol></li></ol></li><li class="chapter-item expanded "><a href="lattice.html"><strong aria-hidden="true">4.</strong> Lattice based cryptography</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="HE.html"><strong aria-hidden="true">4.1.</strong> Fully Homomorphic Encryption</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="introfhe.html"><strong aria-hidden="true">4.1.1.</strong> Articles</a></li><li class="chapter-item expanded "><a href="schemesfhe.html"><strong aria-hidden="true">4.1.2.</strong> Schemes</a></li><li class="chapter-item expanded "><a href="fhelibraries.html"><strong aria-hidden="true">4.1.3.</strong> Libraries</a></li><li class="chapter-item expanded "><a href="mathfhe.html"><strong aria-hidden="true">4.1.4.</strong> Mathematics</a></li></ol></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString();
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
