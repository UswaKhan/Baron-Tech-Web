function handleHeadingBreak() {
  const heading = document.querySelector('h2');
  if (!heading) return;
  const br = heading.querySelector('span');
  if (!br) return;
  if (window.innerWidth < 379) {
    br.style.display = 'none';
  } else {
    br.style.display = 'inline';
  }
}

window.addEventListener('resize', handleHeadingBreak);
window.addEventListener('DOMContentLoaded', handleHeadingBreak);

// Expanding Panel Interactivity
window.addEventListener('DOMContentLoaded', function () {
  const panels = document.querySelectorAll('.industry-panel');
  const panelContents = document.querySelectorAll('.industry-panel-content');
  const panelLabels = document.querySelectorAll('.industry-panel-label');
  const panelImages = document.querySelectorAll('.industry-panel img');
  const panelOverlays = document.querySelectorAll('.industry-panel-overlay');
  let openIdx = 0;

  function updatePanels(idx) {
    panels.forEach((panel, i) => {
      if (i === idx) {
        panel.classList.add('z-10', 'w-[40%]');
        panel.classList.remove('w-[12%]');
        panelImages[i].classList.remove('blur-sm', 'brightness-75');
        panelContents[i].classList.add('opacity-100', 'pointer-events-auto');
        panelContents[i].classList.remove('opacity-0', 'pointer-events-none');
        panelLabels[i].classList.add('opacity-0', 'pointer-events-none');
        panelLabels[i].classList.remove('opacity-100', 'pointer-events-auto');
        panel.classList.add('border-section-accent');
        panelOverlays[i].classList.add('opacity-0');
        panelOverlays[i].classList.remove('opacity-100');
      } else {
        panel.classList.remove('z-10', 'w-[40%]');
        panel.classList.add('w-[12%]');
        panelImages[i].classList.add('blur-sm', 'brightness-75');
        panelContents[i].classList.remove('opacity-100', 'pointer-events-auto');
        panelContents[i].classList.add('opacity-0', 'pointer-events-none');
        panelLabels[i].classList.remove('opacity-0', 'pointer-events-none');
        panelLabels[i].classList.add('opacity-100', 'pointer-events-auto');
        panel.classList.remove('border-section-accent');
        panelOverlays[i].classList.remove('opacity-0');
        panelOverlays[i].classList.add('opacity-100');
      }
    });
  }

  // Set initial state
  updatePanels(openIdx);

  panels.forEach((panel, idx) => {
    panel.addEventListener('mouseenter', () => {
      openIdx = idx;
      updatePanels(openIdx);
    });
    panel.addEventListener('focus', () => {
      openIdx = idx;
      updatePanels(openIdx);
    });
    panel.addEventListener('click', () => {
      openIdx = idx;
      updatePanels(openIdx);
    });
  });
}); 
  function applyResponsiveStyles() {
    const grid = document.getElementById('awardsGrid');
    const width = window.innerWidth;

    // Reset defaults
    grid.style.gridTemplateColumns = 'repeat(2, 1fr)';
    grid.style.marginRight = '0px';

    if (width >= 640 && width < 768) {
      // Tablet: 3 columns -> 4 rows (12 items)
      grid.style.gridTemplateColumns = 'repeat(4, 1fr)';
    } else if (width >= 768 && width < 1024) {
      // Small laptop: 4 columns -> 3 rows, reduce right margin
      grid.style.gridTemplateColumns = 'repeat(4, 1fr)';
      grid.style.marginRight = '20px';
    } else if (width >= 1024) {
      // Large screens
      grid.style.gridTemplateColumns = 'repeat(6, 1fr)';
      grid.style.marginRight = '0px';
    }
  }
  window.addEventListener('resize', applyResponsiveStyles);
  window.addEventListener('DOMContentLoaded', applyResponsiveStyles);
 
  window.addEventListener('scroll', function () {
  const navbar = document.getElementById('navbar');
  const getQuoteBtn = document.getElementById('getQuoteBtn');
  const arrow = document.getElementById('arrow');

  if (window.scrollY > 10) {
    // Navbar changes
    navbar.classList.add('bg-white', 'text-black', 'shadow-md');
    navbar.classList.remove('text-white');

    // Button changes
    getQuoteBtn.classList.remove('border-white', 'text-white');
    getQuoteBtn.classList.add('border-logo-blue-0', 'text-logo-blue-0');

     arrow.classList.remove('invert', 'brightness-0', 'contrast-200');
  } else {
    // Reset Navbar
    navbar.classList.remove('bg-white', 'text-black', 'shadow-md');
    navbar.classList.add('text-white');

    // Reset Button
    getQuoteBtn.classList.remove('bg-logo-blue-0', 'border-logo-blue-0');
    getQuoteBtn.classList.add('border-white', 'text-white');

     arrow.classList.add('invert', 'brightness-0', 'contrast-200');
  }
});

const sidebar = document.getElementById('mobileSidebar');
  const overlay = document.getElementById('sidebarOverlay');
  const menuBtn = document.getElementById('menu-btn'); // make sure this button exists in your navbar
  const closeSidebar = document.getElementById('closeSidebar');

  const servicesToggle = document.getElementById('servicesToggle');
  const servicesMenu = document.getElementById('servicesMenu');
  const servicesArrow = document.getElementById('servicesArrow');

  const companyToggle = document.getElementById('companyToggle');
  const companyMenu = document.getElementById('companyMenu');
  const companyArrow = document.getElementById('companyArrow');

  // Open Sidebar
  menuBtn.addEventListener('click', () => {
    sidebar.classList.remove('translate-x-full');
    overlay.classList.remove('hidden');
    document.body.classList.add('overflow-hidden'); // optional: prevent background scroll
  });

  // Close Sidebar
  function closeSidebarMenu() {
    sidebar.classList.add('translate-x-full');
    overlay.classList.add('hidden');
    document.body.classList.remove('overflow-hidden');
  }

  closeSidebar.addEventListener('click', closeSidebarMenu);
  overlay.addEventListener('click', closeSidebarMenu);

  // Toggle Services Dropdown
  servicesToggle.addEventListener('click', () => {
    servicesMenu.classList.toggle('hidden');
    servicesArrow.classList.toggle('rotate-180');
  });

  // Toggle Our Company Dropdown
  companyToggle.addEventListener('click', () => {
    companyMenu.classList.toggle('hidden');
    companyArrow.classList.toggle('rotate-180');
  });
  
      fetch('footer.html')
      .then(res => res.text())
      .then(data => {
        document.getElementById('footer').innerHTML = data;
      });

      fetch('years.html')
      .then(res => res.text())
      .then(data => {
        document.getElementById('years').innerHTML = data;
      });

      fetch('work.html')
      .then(res => res.text())
      .then(data => {
        document.getElementById('work').innerHTML = data;
      });

      fetch('slider.html')
      .then(res => res.text())
      .then(data => {
        document.getElementById('slider').innerHTML = data;
      });

      fetch('hero.html')
      .then(res => res.text())
      .then(data => {
        document.getElementById('hero').innerHTML = data;
      });   