let table = document.getElementsByTagName("table")[0];
let cells = table.getElementsByTagName("td");
let input = document.getElementById("searchField");
let btn = document.getElementById("searchBtn");

function search() {
  //array of names
  let arr = [];
  let data = input.value.toLowerCase();
  console.log(data)
  if (data !== "") {
    for (const key in cells) {
      const element = cells[key];
      
      arr.push(element.innerText);
   
    }
  }
  
  for (let i = 0; i < arr.length - 3; i++) {
    cells[i].classList.remove("found");
    if(arr[i].toLowerCase().indexOf(data) === 0) {
      cells[i].classList.add("found");
    }
    
    let letters = arr[i].split("");
    console.log(letters);
    letters.forEach((el) => {
      el.toLowerCase();
      if (el.indexOf(data) === 0) {
        cells[i].classList.add("found");
      }
    });
  }

  //
}

btn.addEventListener("click", search);
