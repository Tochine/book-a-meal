    

    var modal = document.querySelector(".mymodal");
    var trigger = document.querySelector(".triggermodal");
    var closeButton = document.querySelector(".close-button");


    trigger.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);


    function toggleModal() {
        modal.classList.toggle("show-mymodal");
    }

    function windowOnClick(e) {
        if (e.target == modal) {
            toggleModal();
        }
    }

    trigger.addEventListener("click", toggleModal);
    closeButton.addEventListener("click", toggleModal);
    window.addEventListener("click", windowOnClick);
