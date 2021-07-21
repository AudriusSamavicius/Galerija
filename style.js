const newImages = [
{src: "https://images.unsplash.com/photo-1462331940025-496dfbfc7564",
  alt: "nebula cloud",},
{src: "https://images.unsplash.com/photo-1570032257806-7272438f38da",
  alt: "mountains reflection on water",},
{src: "https://images.unsplash.com/photo-1525054098605-8e762c017741",
  alt: "strong waves"},
{src: "https://images.unsplash.com/photo-1562207520-19c0ebd8264f",
  alt: "green mountains and blue sky",},
{src: "https://images.unsplash.com/photo-1617191519105-d07b98b10de6",
  alt: "blue and purple galaxy",},
{src: "https://images.unsplash.com/photo-1441829266145-6d4bfbd38eb4",
  alt: "blue wavy ocean with horizon",},
{src: "https://images.unsplash.com/photo-1615114814213-a245ffc79e9a",
  alt: "brown and black galaxy",},
{src: "https://images.unsplash.com/photo-1552604660-a8c4dde15b2e",
  alt: "person on clif in canyon",},
{src: "https://images.unsplash.com/photo-1564295644023-16f14ac50b93",
  alt: "whale tale above water surface",},
]

let lastImage
let newImg;

newImages.forEach(function(image){
  let img = document.createElement("img");
  img.src = image.src;
  document.getElementById("mygallery").appendChild(img);

  

  img.addEventListener("click", function(){
    const newDiv = document.createElement("div");
    newDiv.classList.add("fullimage");
    document.querySelector("body").appendChild(newDiv);
    newDiv.setAttribute("ondblclick", "closeImg()");

    const newFullImg = document.createElement("img");
    newDiv.appendChild(newFullImg);
    newFullImg.src = image.src;
    newFullImg.classList.add("currentimage");

    newFullImg.onload = function(){

    const prevButton = document.createElement("button") 
    const prevButtonImg = document.createElement("img")
    const nextButton = document.createElement("button") 
    const nextButtonImg = document.createElement("img")
    prevButton.append(prevButtonImg);
    prevButton.classList.add("back-button");
    prevButtonImg.src="image 1.jpg"; 
    document.querySelector(".fullimage").prepend(prevButton);
    nextButton.append(nextButtonImg);
    nextButton.classList.add("next-button");
    nextButtonImg.src="image 2.jpg";
    document.querySelector(".fullimage").append(nextButton);
  

    nextButton.addEventListener("click", () => {
      document.querySelector(".currentimage").remove();
        if (nextButton){
        newImg= lastImage + 1;
        if(newImg>newImages.length){
          newImg = 1;
        }} 
    })
    prevButton.addEventListener("click", () => {
      document.querySelector(".currentimage").remove();
        if (prevButton){
        newImg= lastImage - 1;
        if (newImg<newImages.length){
          newImg = newImages.length;
        }} 
    })
      let getNewWindow= document.querySelector(".fullimage");
      let followingImg= document.createElement("img");
      followingImg.classList.add("next-img");
      getNewWindow.append(followingImg);
    
      followingImg.src = newImages[indexnewImg].src;

    }
  })
})


function closeImg(){
  document.querySelector(".fullimage").remove();
}

  
  
