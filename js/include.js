document.addEventListener("DOMContentLoaded", () => {
  const loadComponent = async (selector, file) => {
    try {
      const res = await fetch(file);
      const html = await res.text();
      document.querySelector(selector).innerHTML = html;
    } catch (err) {
      console.error(`Error loading ${file}:`, err);
    }
  };

  // Detect if page is in /pages or root
  const basePath = window.location.pathname.includes("/pages/") ? ".." : ".";

  loadComponent("header", `${basePath}/components/header.html`);
  loadComponent("footer", `${basePath}/components/footer.html`);
});
