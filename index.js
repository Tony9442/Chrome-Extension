let myLeads = []
const inputEl = document.getElementById("input-el");
const inputBtn = document.querySelector("#input-btn");
const ulEl = document.querySelector("#ul-el");
const deleteBtn = document.querySelector("#delete-btn");

const leadsFromLocalStorage = JSON.parse(localStorage.getItem("myLeads"));

if (leadsFromLocalStorage) {
     myLeads = leadsFromLocalStorage;
     renderLeads();
}
// 2. Listen for double clicks on the delete button ()
// 3. When clicked, clear localStorage, myLeads, and the DOM
deleteBtn.addEventListener("dblclick", function () {
  localStorage.clear();
  myLeads = [];
  renderLeads();
});
  inputBtn.addEventListener("click", function () {
    // add array to input to page
    myLeads.push(inputEl.value);
    //    clear value from input once render to the page
     inputEl.value = "";

    localStorage.setItem("myLeads", JSON.stringify(myLeads));

    renderLeads();
  });



function renderLeads() {
    let listItems = "";
for (let i = 0; i < myLeads.length; i++){
    // displaying list items in javaScript
    listItems += `<li>
            <a href='${myLeads[i]}' target = '_blank'> 
            ${myLeads[i]} 
            </a>
      </li> `;
}
  ulEl.innerHTML = listItems
}