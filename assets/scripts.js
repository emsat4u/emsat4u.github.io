$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

// Notification 
let notifyBar = document.getElementById('notificationBar');
function closeNotificationBar() {
    notificationBar.style.display = 'none';
}

let windowHeight = window.innerHeight;
let scrollThreshold = windowHeight * 0.4;

function updateNotificationBar() {
    let scrollPosition = window.scrollY;

    if (scrollPosition >= scrollThreshold) {
        notifyBar.style.display = 'block';
        window.removeEventListener('scroll', updateNotificationBar);
    } else {
        notifyBar.style.display = 'none';
    }
}

window.addEventListener('scroll', updateNotificationBar);

// Call the function initially to set the initial state of the notification bar
updateNotificationBar();
