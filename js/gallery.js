function showImage(img) {
    var overlay = document.getElementById('overlay');
    var overlayImage = document.getElementById('overlayImage');

    overlayImage.src = img.src;
    overlay.style.display = 'flex';
}

function hideImage() {
    var overlay = document.getElementById('overlay');
    overlay.style.display = 'none';
}