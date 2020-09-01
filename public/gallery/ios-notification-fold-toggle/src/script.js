const notificationList = document.querySelector('.ios-notifications')
const notificationItems = document.querySelectorAll('.ios-notifications__item')
notificationItems.forEach(item => item.addEventListener('click', () => {
  notificationList.classList.toggle('unfolded')
}))
