// el menu de mierda (para que no se rompa nada mas de lo que ya esta roto)
function toggleDropdown(header) {
  const dropdown = header.parentElement;
  dropdown.classList.toggle("open");
}


// las portadas (haces click y se abren corte spotify)
function openModal(event, src) {
  event.stopPropagation(); // evita que se dispare el toggle del dropdown
  const modal = document.getElementById("imageModal");
  const modalImg = document.getElementById("modalImage");
  modalImg.src = src;
  modal.classList.add("show");
}

function closeModal() {
  document.getElementById("imageModal").classList.remove("show");
}
