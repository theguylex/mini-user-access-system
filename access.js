let role = document.getElementById("userRole").value;
let age = Number(document.getElementById("userAge").value);

const checkAccessButton = document.querySelector(".checkAccess");
checkAccessButton.addEventListener("click", manageAccess);

let accessMessageParagraph = document.querySelector(".accessNotif");

function manageAccess() {
    // console.log(role, age);

    if (role === "admin" || role === "moderator") {
        // console.log(role, age);
        accessIndicator("Full Admin access granted.");
        accessMessageParagraph.classList.add("adminModerator");
    } else if (role === "member" && age > 18) {
        // console.log(role, age);
        accessIndicator("Member access granted");
        accessMessageParagraph.classList.add("member");
    } else if (role === "guest") {
        // console.log(role, age);
        accessIndicator("Guest access granted");
        accessMessageParagraph.classList.add("guest");
    } else {
        // console.log(role, age);
        accessIndicator("Access denied");
        accessMessageParagraph.classList.add("noCriteria");
    }
}

function accessIndicator(text) {
    const notif = document.querySelector(".accessNotif");
    notif.textContent = text;
}