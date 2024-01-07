document.addEventListener("DOMContentLoaded", function () {
  const profileButton = document.getElementById("user-menu-button");
  const dropdownMenu = document.getElementById("dropdown-menu");

  // Function to toggle the dropdown menu
  function toggleDropdown() {
    dropdownMenu.classList.toggle("hidden");
  }

  // Event listener for profile button click
  profileButton.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevents the event from propagating to the document
    toggleDropdown();
  });

  // Event listener to close dropdown when clicking outside
  document.addEventListener("click", function (event) {
    const isClickInsideDropdown = dropdownMenu.contains(event.target);
    const isClickOnProfileButton = profileButton.contains(event.target);

    if (!isClickInsideDropdown && !isClickOnProfileButton) {
      dropdownMenu.classList.add("hidden");
    }
  });
});
