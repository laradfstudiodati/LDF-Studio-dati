
// Qui potrai inserire funzioni per mostrare i dettagli dei servizi

function toggleDetails(id) {
    var elem = document.getElementById(id);
    if (elem.classList.contains("hidden")) {
        elem.classList.remove("hidden");
    } else {
        elem.classList.add("hidden");
    }
}
