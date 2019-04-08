function imageModalSetup(modalId, modalLinkId, fileName, closeButton) {
  var modal = $(modalId);
  var modalAnchor = $(modalLinkId);

  modalAnchor.click(function toggleModal() {
    modal.show();
  })

  $('.close').click(function closeModals() {
    modal.hide();
  })

}

$(document).ready(function pageSetup() {
  imageModalSetup('#rugby-modal', '#rugby-modal-link');
  imageModalSetup('#guitar-modal', '#guitar-modal-link');
})
