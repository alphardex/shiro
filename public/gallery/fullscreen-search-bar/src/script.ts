const searchBar = document.querySelector('.search-bar')
const searchInput = document.querySelector('.search-input')
const searchBtn = document.querySelector('.search-btn')
searchBtn.addEventListener('click', ()=>{
  if(!searchBar.classList.contains('active')) {
    searchBar.classList.add('active')
    searchInput.focus()
  } else {
    searchBar.classList.remove('active')
  }
})