const imageInput = document.getElementById("imageInput");
const imageContainer = document.getElementById("uploadedImg");
const downloadLink = document.getElementById("downloadLink");
const resBtn = document.querySelector('.resBtn')

imageInput.addEventListener("change", function (event) {
  const file = event.target.files[0];
  if (!(file.name.toLowerCase().endsWith('.png')|| file.name.toLowerCase().endsWith('.jpeg') || file.name.toLowerCase().endsWith('.jpg'))) {
    alert("Please Upload An Image");
}else if (file) {
    const reader = new FileReader();
    reader.onload = function (event) {
      const img = document.createElement("img");
      img.src = event.target.result; // Set the src attribute of the img element
      img.alt = "Uploaded Image";
      img.classList.add("w-full", "h-full"); // Add the CSS classes

      // Clear previous content and append the img element
      imageContainer.innerHTML = "";
      imageContainer.appendChild(img);
    };
    reader.readAsDataURL(file);
  }
});

const out = document.getElementById("outputImg");

document.querySelector(".encodeBtn").addEventListener("click", () => {
  const a = document.querySelector(".inputText").value;
  const file = imageInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (event) {
      const img = document.createElement("img");
      img.src = steg.encode(a, event.target.result);
      img.alt = "output";
      out.innerHTML = "";
      img.classList.add("w-full", "h-full");
      out.appendChild(img);

      downloadLink.style.display = "block";
      downloadLink.href = img.src;
      downloadLink.download = file.name;
      resBtn.style.display = "block";
      resBtn.addEventListener('click', ()=>{
        img.remove();
        imageContainer.removeChild(imageContainer.firstChild);
      })
    };
    reader.readAsDataURL(file);
  }
});

const msg = document.querySelector(".outputText");
document.querySelector(".decodeBtn").addEventListener("click", () => {
  const file = imageInput.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (event) {
      msg.innerHTML = steg.decode(event.target.result);
    };
    reader.readAsDataURL(file);
  }
});
