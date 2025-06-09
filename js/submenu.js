//SubMenu
document.addEventListener("DOMContentLoaded", function () {
  const links = document.querySelectorAll(".subMenu-link");

  links.forEach((link) => {
    const subMenu = link.nextElementSibling;

    link.addEventListener("click", function (e) {
      e.preventDefault();
      e.stopPropagation();

      document.querySelectorAll(".subMenu").forEach((menu) => {
        // Hide all others
        if (menu !== subMenu) {
          menu.style.display = "none";
        }
      });

      // Toggle current
      subMenu.style.display =
        subMenu.style.display === "block" ? "none" : "block";
    });

    subMenu.addEventListener("click", function (e) {
      e.stopPropagation();
    });
  });

  // Click outside closes all
  document.addEventListener("click", function () {
    document.querySelectorAll(".subMenu").forEach((menu) => {
      menu.style.display = "none";
    });
  });
});
