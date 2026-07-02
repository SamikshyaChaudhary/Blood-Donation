function saveProfile() {
    alert("Profile Updated Successfully!");
}

const menuItems = document.querySelectorAll(".si");

menuItems.forEach(item => {
    item.addEventListener("click", () => {

        menuItems.forEach(i => {
            i.classList.remove("active");
        });

        item.classList.add("active");
    });
});