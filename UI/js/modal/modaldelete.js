    

    var modal = document.querySelector(".mymodaldelete");
    var trigger = document.querySelector(".triggermodaldelete");
    var closeButton = document.querySelector(".close-button-delete");


    trigger.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);


    function toggleModal() {
        modal.classList.toggle("show-mymodal-delete");
    }

    function windowOnClick(e) {
        if (e.target == modal) {
            toggleModal();
        }
    }

    trigger.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);
