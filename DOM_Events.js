// Document object model - programming interface for web documents , represents the page to change the structure, 
// style and content.

// window -> Document->HTML-> HEAD ,BODY

// document.getElementById
// document.getElementsByClassName
    // getAttribute
    // setAttribute
// title.style.backgroundColor - by accessing id 
// innerText - Returns the content of specific div
// innerContent - Returns the all text content 
// innerHTML - Returns 
// queryselector - access the first html element from the page  - can acces with class and ID
// queryselectorAll
// FirstElemetChild - Displays first child from the html tags.
// lastElementChild - Displays last child
// ParentElement - prints the whole div of parent element
// NextElementSibling
// Parent.ChildNodes - Returns all the child elements including spaces till parent div.
// div.className ="Qwert" - can assign the value to div
// appendchild
// createElement
// li:nth-child(2), first-child, last-child
// replacewith, remove

// Events 

document.getElementById("idname").addEventListener('click',function click_function{
    alert("Text clicked");
})

// Types - Browser events and environmental events

// Event propagation 

// Event bubbling and Event capturing 

// Event bubbling - It captures the event from current element to parent (top) - eg- li to ul
// Event capturing - It captures the event from top to bottom - eg: ul to li
// preventdefault - doesn't allow to run the event
// stoppropogation - Doesn't allow to capture event
