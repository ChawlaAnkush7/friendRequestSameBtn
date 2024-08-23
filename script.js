let btn = document.querySelector("#add-remove-friend")
let friendShipStatus = document.querySelector("#friendShipStatus")
btn.style.cursor = "pointer"

btn.addEventListener("click", () => {
    if (btn.innerText === "Add Friend") {
        friendShipStatus.innerText = "Friends"
        friendShipStatus.style.color = "green"
        btn.innerText = "Remove Friend"
    }
    else {
        friendShipStatus.innerText = "Stranger"
        friendShipStatus.style.color = "red"
        btn.innerText = "Add Friend"
    }
})