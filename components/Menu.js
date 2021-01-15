// This is the data we will be using, study it but don't change anything, yet.

import { menuItems } from '../modules/MenuData';

/* 
  Step 1: Write a component called 'menuMaker' to create a menu like the markup below:

  <div class="menu">
    <ul>
      {each menu item as an <li>}
    </ul>
  </div>

  The 'menuMaker' takes an array of menu items as its only argument.

  Step 2: Inside the function, iterate over the array creating a list item <li> element for each item in the array.
  Add those items to the <ul>

  Step 3: Still inside your function, select from the DOM the menu button (the element with a class of 'menu-button').

  Step 4: Add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on div.menu (your div with a 'menu' class).

  Step 5: Don't forget to return your div.menu.

  Step 6: Use 'menuMaker' to create a menu using the 'menuItems' array, and append the returned menu to the header.
*/

// Build menu HTML component
function menuMaker(list) {
  const div = document.createElement('div'),
        ul  = document.createElement('ul');
  
  // Create list items and links to insert into each list item
  list.map(item => {
    const li   = document.createElement('li'),
          link = document.createElement('a');
    
    link.textContent = item;
    link.href = "#";
    link.style.textDecoration = "none";
    link.style.color = "white";

    li.appendChild(link);
    ul.appendChild(li);
  })

  // Append the list item to the unordered list and add the class to the menu div
  div.appendChild(ul);
  div.classList.add('menu');

  // Select the menu button and add a click event listener to open menu
  const menuButton = document.querySelector('.menu-button');

  // Replace open menu functionality here with jQuery animation below
  // function openMenu(e) {
  //   div.classList.toggle('menu--open');
  // }
  // menuButton.addEventListener('click', openMenu);

  return div;
}

// Create a menu object from the given menu items, select the header div and append the menu
const menu = menuMaker(menuItems);
const divHeader = document.querySelector('.header');
divHeader.appendChild(menu);

// jQuery animation to open the menu
$(".menu-button").click( function(event) {
  $(".menu").toggle("fast");
});

