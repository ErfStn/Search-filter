const showModalBtn = document.querySelector('.show-modal')
const modal = document.querySelector(".modal");
const backDrop = document.querySelector(".backdrop");
const closeModalBtn = document.querySelector(".close-modal");
const confirmModal = document.querySelector(".donfirm-modal");

showModalBtn.addEventListener('click', () => {
    modal.style.opacity = "1";
    modal.style.transform = "translateY(5vh)"
    backDrop.style.display = "block";
    showModalBtn.style.display = "none";
});

function closeModal() {
    modal.style.opacity = "0";
    modal.style.transform = "translateY(-100vh)"
    backDrop.style.display = "none";
    showModalBtn.style.display = "block";
}

closeModalBtn.addEventListener('click', closeModal);

backDrop.addEventListener('click', closeModal);


