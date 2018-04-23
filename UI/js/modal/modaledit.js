    

    var modal = document.querySelector(".mymodaledit");
    var trigger = document.querySelector(".triggermodaledit");
    var closeButton = document.querySelector(".close-button-edit");


    trigger.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);


    function toggleModal() {
        modal.classList.toggle("show-mymodal-edit");
    }

    function windowOnClick(e) {
        if (e.target == modal) {
            toggleModal();
        }
    }

    trigger.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);
