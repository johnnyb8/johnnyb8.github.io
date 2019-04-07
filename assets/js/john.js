function imageModalSetup() {
  var modal = document.getElementById('myModal');
  var modal1 = document.getElementById('myModal1');

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img = document.getElementById('myImg');
  var modalImg = document.getElementById("img01");
  img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = "images/rugby.jpg";
  }

  var img1 = document.getElementById('myImg1');
  var modalImg1 = document.getElementById("img02");
  img1.onclick = function(){
    modal1.style.display = "block";
    modalImg1.src = "images/guitar.jpg";
  }

  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];

  // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }
    // Get the <span> element that closes the modal
  var span1 = document.getElementsByClassName("close1")[0];

  // When the user clicks on <span> (x), close the modal
  span1.onclick = function() {
    modal1.style.display = "none";
  }
}

$(document).ready(function pageSetup() {
  imageModalSetup();
})
