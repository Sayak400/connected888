let modal = document.getElementById("changeImageModal");
let modal1 = document.getElementById("changeImageModal1");
let modal2 = document.getElementById("changeImageModal2");
let modal3 = document.getElementById("changeImageModal3");
let previewModal = document.getElementById("previewModal");
let hostPreviewModal = document.getElementById("hostPreviewModal");
let imageLink = document.getElementsByClassName("changeImage");
let imageLink1 = document.getElementsByClassName("changeImage1");
let imageLink2 = document.getElementsByClassName("changeImage2");
let imageLink3 = document.getElementsByClassName("changeImage3");
let previewButton = document.getElementsByClassName("preview-button");
let hostPreviewButton = document.getElementsByClassName("host-preview-button");
let span = document.getElementsByClassName("close-button")[0];
let span1 = document.getElementsByClassName("close-button1")[0];
let span2 = document.getElementsByClassName("close-button2")[0];
let span3 = document.getElementsByClassName("close-button3")[0];
let spanPreview = document.getElementsByClassName("preview-close-button")[0];
let spanHostPreview = document.getElementsByClassName(
  "host-preview-close-button"
)[0];
imageLink.onclick = function () {
  modal.style.display = "block";
};
span.onclick = function () {
  modal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
//1
imageLink1.onclick = function () {
  modal1.style.display = "block";
};
span1.onclick = function () {
  modal1.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal) {
    modal1.style.display = "none";
  }
};
//2
imageLink2.onclick = function () {
  modal2.style.display = "block";
};
span2.onclick = function () {
  modal2.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal2) {
    modal2.style.display = "none";
  }
};
//3
imageLink3.onclick = function () {
  modal3.style.display = "block";
};
span3.onclick = function () {
  modal3.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == modal3) {
    modal3.style.display = "none";
  }
};
//Profile Preview
previewButton.onclick = function () {
  previewModal.style.display = "block";
};
spanPreview.onclick = function () {
  previewModal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == previewModal) {
    previewModal.style.display = "none";
  }
};
//Host Preview
hostPreviewButton.onclick = function () {
  hostPreviewModal.style.display = "block";
};
spanHostPreview.onclick = function () {
  hostPreviewModal.style.display = "none";
};
window.onclick = function (event) {
  if (event.target == hostPreviewModal) {
    hostPreviewModal.style.display = "none";
  }
};
$(document).ready(function () {
  $(".changeImage").click(function () {
    $("#changeImageModal").fadeIn(300);
  });
  $(".changeImage1").click(function () {
    $("#changeImageModal1").fadeIn(300);
  });
  $(".changeImage2").click(function () {
    $("#changeImageModal2").fadeIn(300);
  });
  $(".changeImage3").click(function () {
    $("#changeImageModal3").fadeIn(300);
  });
  $(".preview-button").click(function () {
    $("#previewModal").fadeIn(300);
  });
  $(".host-preview-button").click(function () {
    $("#hostPreviewModal").fadeIn(300);
  });
  $("#changeImageModal").click(function (e) {
    if (e.target === this) {
      $(this).fadeOut(300);
    }
  });
  $("#changeImageModal1").click(function (e) {
    if (e.target === this) {
      $(this).fadeOut(300);
    }
  });
  $("#changeImageModal2").click(function (e) {
    if (e.target === this) {
      $(this).fadeOut(300);
    }
  });
  $("#changeImageModal3").click(function (e) {
    if (e.target === this) {
      $(this).fadeOut(300);
    }
  });
  $("#previewModal").click(function (e) {
    if (e.target === this) {
      $(this).fadeOut(300);
    }
  });
  $("#hostPreviewModal").click(function (e) {
    if (e.target === this) {
      $(this).fadeOut(300);
    }
  });

  $("#uploadSubmitButton").click(function () {
    const file = $("#fileInput")[0].files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      $("#placeholderImage").attr("src", imageUrl);
      $("#changeImageModal").fadeOut(300);
    }
  });
  $("#uploadSubmitButton1").click(function () {
    const file = $("#fileInput1")[0].files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      $("#placeholderImage1").attr("src", imageUrl);
      $("#changeImageModal1").fadeOut(300);
    }
  });
  $("#uploadSubmitButton2").click(function () {
    const file = $("#fileInput2")[0].files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      $("#placeholderImage2").attr("src", imageUrl);
      $("#changeImageModal2").fadeOut(300);
    }
  });

  $("#uploadSubmitButton3").click(function () {
    const file = $("#fileInput3")[0].files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      $("#placeholderImage3").attr("src", imageUrl);
      $("#changeImageModal3").fadeOut(300);
    }
  });
});
