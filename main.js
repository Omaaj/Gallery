// selecting all required elements;
const gallery = document.querySelectorAll('.gallery .image');
const previewBox = document.querySelector('.preview-box');
const previewImg = document.querySelector('.preview-box img');
const closeIcon = document.querySelector('.preview-box .icon');
const currentImg = document.querySelector('.preview-box .current-img');
const totalImg = document.querySelector('.preview-box .total-img'); 
const shadow = document.querySelector('.shadow');
const prevBtn = document.querySelector('.preview-box .prev');
const nextBtn = document.querySelector('.preview-box .next');
const closer = document.querySelector('body');

closer.addEventListener('click', glader);

function glader() {
    shadow.style.display = 'none';
    console.log('done')
}

window.onload = (() => {
    for(let i = 0; i< gallery.length; i++) {
        totalImg.textContent = gallery.length; // the total amout of the image
        let newIndex = i;
        let clickIndeximg;
        gallery[i].onclick = () => {
            clickIndeximg = newIndex;
            console.log(i);
            function preview() { // basically for selecting of image
                currentImg.textContent = newIndex + 1; // picking the current number to a particular picture
                let selectedImgUrl = gallery[newIndex].querySelector("img").src; // calling the image directly from the index
                previewImg.src = selectedImgUrl; // selecting each image from the box
            };

            // working on prev and next button
            if(newIndex === 0) { // to remove the arrow from the first picture
                prevBtn.style.display = "none";
            }

            if(newIndex >= gallery.length - 1) { // to remove the arrow from the last picture
                nextBtn.style.display = "none";
            }

            
            prevBtn.onclick = () => { // working on the previous arrow
                newIndex--;
                if(newIndex === 0) {
                    preview();
                    prevBtn.style.display = "none";
                } else {
                    preview()
                    nextBtn.style.display = "block";
                }

            }
            nextBtn.onclick = () => { // working on the next arrow
                newIndex++;
                if(newIndex >= gallery.length - 1) {
                    preview();
                    nextBtn.style.display = "none";
                } else {
                    preview()
                    prevBtn.style.display = "block";
                }

            }

            preview();


            previewBox.classList.add('active') // clicking the particular image
            shadow.style.display = "block";
            document.querySelector('body').style.overflow = "hidden";

            closeIcon.onclick = () => { // cancelling the particular image
                newIndex = clickIndeximg;
                prevBtn.style.display = "block"; // reappering after the prev arrow has been remvove
                nextBtn.style.display = "block"; // reappering after the next arrow has been remvove
                previewBox.classList.remove('active')
                shadow.style.display = "none";
                document.querySelector('body').style.overflow = "auto";
            }
        }

        
    }
})