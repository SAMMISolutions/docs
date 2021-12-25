document.addEventListener('DOMContentLoaded', () => {
  maintainScroll();
  initDrag();
  initTooltip();
  initPopOver();
  openLinksNewTab();
  editPasteBin();
  initDarkModeSwitcher();
});

/// maintain scroll position
function maintainScroll() {
  const sidebar = document.querySelector('.sidebar');
  const top = localStorage.getItem('sidebar-scroll');
  if (top !== null) {
    sidebar.scrollTop = parseInt(top, 10);
  }
  window.addEventListener('beforeunload', () => {
    localStorage.setItem('sidebar-scroll', sidebar.scrollTop);
  });
}

// initiate off canvas drag functionality
function initDrag() {
  let dragging = 0;
  let initWidth; let initX;
  const { body } = document;
  const canvas = document.querySelector('.offcanvas-end');
  const target = document.getElementById('dragbar');

  function clearJSEvents() {
    dragging = 0;
    body.removeEventListener('mousemove', resize);
    body.classList.remove('resizing');
  }

  function resize(e) {
    const diff = e.pageX - initX;
    canvas.style.setProperty('width', `${initWidth - diff}px`);
  }

  if (target) {
    target.onmousedown = function (e) {
      initX = e.pageX;
      initWidth = parseInt(getComputedStyle(canvas).width) || 200;
      e.preventDefault();
      dragging = 1;
      body.addEventListener('mousemove', resize);
      body.classList.add('resizing');
    };

    document.onmouseup = function () {
      dragging ? clearJSEvents() : '';
    };
  }
}

// initate tooltips on hovers DON'T TOUCH IT
function initTooltip() {
  const tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
  const tooltipList = tooltipTriggerList.map((tooltipTriggerEl) => new bootstrap.Tooltip(tooltipTriggerEl, {
    container: 'body',
    placement: 'auto',
    html: true,
    viewport: { selector: '.container', padding: 5 },
    boundary: 'viewport',
  }));
}

// initiate bootstrap popovers
function initPopOver() {
  const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
  const popoverList = popoverTriggerList.map((popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl));
}

// toggle sidebar on mobile devices
function sideBarToggle() {
  document.querySelector('.sidebar-toggle').addEventListener('click', () => {
    document.getElementById('sidebar').classList.remove('hidden-xs');
    document.getElementById('sidebarwrap').classList.toggle('d-none');
  });
}

// refresh scrollspy after loading page

function refreshScrollSpy() {
  const dataSpyList = [].slice.call(document.querySelectorAll('[data-bs-spy="scroll"]'));
  dataSpyList.forEach((dataSpyEl) => {
    bootstrap.ScrollSpy.getInstance(dataSpyEl)
      .refresh();
  });
}

// open all links in new tab
function openLinksNewTab() {
  const { links } = document;
  for (let i = 0; i < links.length; i++) {
    if (!links[i].href.includes('lioranboard.ca')) links[i].target = '_blank';
  }
}

// select all for embed pastebins and force text break
function editPasteBin() {
  const els = document.getElementsByClassName('de1');
  for (let i = 0; i < els.length; i++) {
    els[i].classList.add('user-select-all');
    els[i].classList.add('text-break');
  }
}

function initDarkModeSwitcher () {
const e = document.getElementById('DarkModeSwitch');

e.addEventListener('click', () => {
  document.getElementById('scheme').remove()
  if (e.checked) {
    document.head.insertAdjacentHTML('beforeend', '<style id="scheme">:root{color-scheme:dark}</style>');
    document.documentElement.setAttribute('data-theme', 'dark')
    window.localStorage.setItem('scheme', 'dark');
   }
   else {
     document.head.insertAdjacentHTML('beforeend', '<style id="scheme">:root{color-scheme:light}</style>');
     document.documentElement.setAttribute('data-theme', 'light')
     window.localStorage.setItem('scheme', 'light');
   }

})

} 