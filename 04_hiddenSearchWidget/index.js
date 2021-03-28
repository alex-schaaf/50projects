const searchBtn = document.getElementById("search-btn")
const searchField = document.getElementById("search-field")

let searchHidden = true

function toggleSearch() {
  searchHidden = !searchHidden
  if (searchHidden) {
    searchField.style.width = "100px"
    searchField.placeholder = "Search ..."
  } else {
    searchField.style.width = 0
    searchField.placeholder = ""
  }
}