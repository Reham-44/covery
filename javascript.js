 //darkmode
 
 let darkmode = localStorage.getItem('darkmode')
const themeSwitch = document.getElementById('theme-switch')

const enableDarkmode = () => {
    document.body.classList.add('darkmode')
    localStorage.setItem('darkmode','active')
}

const disableDarkmode = () => {
    document.body.classList.remove('darkmode')
    localStorage.setItem('darkmode',null)
    const icon = document.getElementById("ic2");   
}

if(darkmode == "active") enableDarkmode()

themeSwitch.addEventListener("click", () => {
    darkmode = localStorage.getItem('darkmode')
    darkmode !== "active" ? enableDarkmode() : disableDarkmode()
})


//add to cart

let counter = 0; 
const counterDisplay = document.querySelector('.add'); 
const buttons = document.querySelectorAll('.cartbtn'); 

buttons.forEach(button => {
    button.addEventListener('click', () => {
        counter++; 
        counterDisplay.textContent = counter;
    });
});



//search bar
    const searchInput = document.getElementById("searchBar");
const sections = document.querySelectorAll("section");

searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();

  sections.forEach(section => {
    const items = section.querySelectorAll(".item");
    const noResultsMessage = section.querySelector("#noResults");
    let visibleCount = 0;

    items.forEach(item => {
      const name = item.querySelector(".name").textContent.toLowerCase();
      if (name.includes(searchTerm)) {
        item.style.display = "block";
        visibleCount++;
      } else {
        item.style.display = "none";
      }
    });

    if (visibleCount===0) {
      noResultsMessage.style.display = "block";
    }
    else{
              noResultsMessage.style.display = "none";
     }
  });
});



//filter

  const filterButton = document.querySelector(".filter"); 
  const priceRange = document.getElementById("priceRange");
  const items = document.querySelectorAll(".item");

  filterButton.addEventListener("click", () => {
    const maxPrice = parseInt(priceRange.value);

    items.forEach(item => {
      const priceText = item.querySelector(".price").textContent;
      const priceNumber = parseFloat(priceText.replace("EGP", "").replace(",", "").trim());

      if (priceNumber <= maxPrice) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });


