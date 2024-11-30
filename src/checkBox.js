// Function to handle checkbox toggle
function setupCheckbox(checkboxId, infoId) {
  const checkbox = document.getElementById(checkboxId);
  const info = document.getElementById(infoId);

  checkbox.addEventListener("change", function () {
    info.classList.toggle("hidden", !this.checked);
  });

  // Initialize visibility based on initial checkbox state
  document.addEventListener("DOMContentLoaded", function () {
    info.classList.toggle("hidden", !checkbox.checked);
  });
}

// Setup inbound travel checkbox
setupCheckbox("transit-checkbox", "transit-info");

// Setup outbound travel checkbox
setupCheckbox("outbound-transit-checkbox", "outbound-transit-info");
