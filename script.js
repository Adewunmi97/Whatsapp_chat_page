const list = document.querySelector(".list");
const input = document.querySelector("#search_input");

let usersList = [
    "Victor",
    "Adewunmi",
    "Kenny",
    "Klemweb",
    "Oluwatise",
    "Bayo",
    "Tolu",
    "Bamidele",
    "Akanji"
];

usersList.forEach(item => {
    list.innerHTML += ` 
        <li class="user-item"><img src="./user_img.jpg" alt=""><p>${item}</p></li>
    `;
})

input.addEventListener("input", function () {
    let searchText = this.value;
    // this.value = "";
    const friends = [...document.querySelectorAll(".user-item")];
    const notFound = document.querySelector("#not-found");
    let searchedFriend = friends.filter(function (friend) {
        let text = friend.childNodes[1].textContent;
        if (text.toLowerCase().includes(searchText.toLowerCase())) return friend
    })
    friends.forEach(friend => {
        if (!searchedFriend.includes(friend)) {
            friend.classList.add("hide");
        } else {
            friend.classList.remove("hide");
        }
    })
    if (searchedFriend.length > 0) {
        notFound.classList.remove("open");
    } else {
        notFound.classList.add("open");
    }

})

