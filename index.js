"use strict"

let menu = {
    Cocktails : [
     "Old Fashioned", "Daiquiri", "Dry Martini",
        "Rum and Coke", "Margarita", "Espresso Martini"],
    SmallMeals: [
        "Wings and tings",
        "Loaded Tater Tots",
        "Chicken Slidders",
        "Personal Pizza",
        "Fried Fish on Brioche",
        "Veggie Plate"],
    SweetsandTreats: [
        "New York Style Cheesecake", "Blackout Chocolate Cake", "Snickerdoodle Cookie Cake with Ice Cream"
  ]
};
  window.onload = function () {
    document.getElementById("list").style.display = "none";
    let menuItems = document.getElementById("menu");
    menuItems.onchange = list

  }

function list(){
      
    let menuItems = document.getElementById("menu");
    let lists = document.getElementById("list");
    lists.length = 0;

     
    let index = menuItems.selectedIndex;
      
    console.log(index)
      if( index == 1){
        lists.style.display = "block"
        for (let i = 0; i < (menu.drinks).length ; i ++){
        
          let options = document.createElement ("option");
          options.textContent = menu.drinks[i];
    
          lists.appendChild(options);
        }
      } 
      else if ( index == 2){
        lists.style.display = "block"
        for (let i = 0; i < (menu.entrees).length ; i ++){
        
          let options = document.createElement ("option");
          options.textContent = menu.entrees[i];
    
          lists.appendChild(options);

        }
      }
      else if ( index == 3){
        lists.style.display = "block"
        for (let i = 0; i < (menu.desserts).length ; i ++){
        
          let options = document.createElement ("option");
          options.textContent = menu.desserts[i];
    
          lists.appendChild(options);

        }
      }
      else{
        lists.style.display = "none";
      }
}