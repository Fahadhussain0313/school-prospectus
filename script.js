let current = 0;
let pages = document.querySelectorAll(".page");

function showPage(index) {
    pages.forEach((page, i) => {
        if (i < index) {
            page.style.transform = "rotateY(-180deg)";
        } else {
            page.style.transform = "rotateY(0deg)";
        }
    });
}

function nextPage() {
    if (current < pages.length) {
        current++;
        showPage(current);
    }
}

function prevPage() {
    if (current > 0) {
        current--;
        showPage(current);
    }
}