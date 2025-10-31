document.addEventListener('DOMContentLoaded', () => {
  console.log("¡Proyecto inicializado! El DOM está listo.");

  // Seleccionar elementos del DOM
  const mobileMenu = document.getElementById('mobile-menu');
  const openMenuBtn = document.getElementById('open-menu-btn');
  const closeMenuBtn = document.getElementById('close-menu-btn');
  const menuOverlay = document.querySelector('.mobile-menu-overlay');

  // Función para abrir el menú
  const openMenu = () => {
    if (mobileMenu) {
      mobileMenu.classList.add('is-open');
      document.body.style.overflow = 'hidden';
    }
  };

  // Función para cerrar el menú
  const closeMenu = () => {
    if (mobileMenu) {
      mobileMenu.classList.remove('is-open');
      document.body.style.overflow = '';
    }
  };

  if (openMenuBtn) openMenuBtn.addEventListener('click', openMenu);
  if (closeMenuBtn) closeMenuBtn.addEventListener('click', closeMenu);
  if (menuOverlay) menuOverlay.addEventListener('click', closeMenu);


  // Lógica para cambiar la imagen principal al hacer clic en las miniaturas
  const mainImage = document.getElementById('main-product-image');
  const thumbnailBtns = document.querySelectorAll('.thumbnail-btn');

  if (mainImage && thumbnailBtns.length > 0) {
    thumbnailBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const newImageUrl = btn.dataset.imageUrl;

        mainImage.src = newImageUrl;

        thumbnailBtns.forEach(otherBtn => otherBtn.classList.remove('active'));
        btn.classList.add('active');
      });
    });
  }


  // Lógica para tabulaciones
  const tabBtns = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');

  if (tabBtns.length > 0 && tabPanels.length > 0) {
    tabBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetPanelId = btn.dataset.tabTarget;
        const targetPanel = document.querySelector(targetPanelId);

        tabBtns.forEach(otherBtn => otherBtn.classList.remove('active'));
        tabPanels.forEach(panel => panel.classList.remove('active'));

        btn.classList.add('active');
        if (targetPanel) {
          targetPanel.classList.add('active');
        }
      });
    });
  }

});