const categoryContainer =document.getElementById("Category-container");
const plantsContainer =document.getElementById("plantsContainer");
const cartsContainer =document.getElementById('cartContainer');
const detailsBox =document.getElementById("details-container");



const loadId =(id) =>{
 
  const url =`https://openapi.programming-hero.com/api/category/1${id}`;
  fetch(url)
  .then((res) =>res.json())
  .then((data) => console.log(data))
}

const loadCategory =()=>{
    fetch("https://openapi.programming-hero.com/api/categories")
    .then((res) =>res.json())
    .then((data) =>{
        console.log(data.categories)
        const categories =data.categories
        categories.forEach(cat => {
            categoryContainer.innerHTML +=`
            <li id="${cat.id}" class=" hover:bg-green-700 grid grid-cols-1 ">${cat.category_name}</li>
            `;
            
        })
        showLoading();
    })
    .catch((error) =>{
        console.log(error);
    }) 

  
  categoryContainer.addEventListener("click", (e) => {
    const allLi = document.querySelectorAll("li");
    allLi.forEach((li) => {
      li.classList.remove("active");
    });

    if (e.target.localName === "li") {
      
      
      e.target.classList.add("active");
      loadByCategory(e.target.id);
    }
  });  
};
const loadByCategory =(categoryId) =>{
    console.log(categoryId)

    fetch(categoryId?`https://openapi.programming-hero.com/api/category/${categoryId}`:"https://openapi.programming-hero.com/api/plants")
    .then(res =>res.json())
  .then(data =>{
    console.log(data.plants)
    showPlantsCategory(data.plants)
  })
  .catch(err =>{
 console.log(err)
  })
    showLoading();
}
const showPlantsCategory= (plants) => {
  plantsContainer.innerHTML="";
  plants.forEach(plant =>{
    plantsContainer.innerHTML +=`
    <div class =" max-w-full max-h-120 rounded-xl bg-white p-5 ">
    <img class="w-65 max-h-40 rounded-lg " src="${plant.image}">
    <h1  onclick="loadDetails(${plant.id})" class ="text-xl font-semibold pb-1">${plant.name}</h1>
    <p class="pb-1 text-sm">${plant.description}</p>
    <div class ="flex justify-between pb-1">
    <div>
    <p class ="rounded-lg bg-[#CFF0DC] px-2">${plant.category}</p>
    </div>
    <div>
    <p id ="plant-price">$${plant.price}</p>
    </div>
    </div>
    <button  class ="rounded-xl bg-green-600 w-full p-2 text-white call-btn ">Add to cart</button>
    </div>
    `;
  });
};
const showLoading = () => {
    plantsContainer.innerHTML = `
     
<span class="loading loading-dots loading-xl"></span>
    `
}




const loadDetails =async(id) =>{
  const url =`https://openapi.programming-hero.com/api/plant/${id}`;
  
  const res =await fetch(url);
  const details =await res.json();
  displayDetails(details.plants);
}

const displayDetails =(data) =>{
  console.log(data)
   
    detailsBox.innerHTML =`<h3 class="text-lg font-bold">${data.name}</h3>
    <img class="w-full mx-h-30" src="${data.image}" alt=""/>
    <p class="font-bold">${data.category}</p>
    <p class ="font-bold">${data.price}</p>
    <p>${data.description}</p>
    
    <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn">Close</button>
      </form>
    </div>`;
      
  
 
  document.getElementById("my_modal_1").showModal()
}



plantsContainer.addEventListener('click',(e) =>{
  
  if(e.target.innerText ==='Add to cart'){
    const title = e.target.parentNode.children[1].innerText;
    console.log(title);
    const price =document.getElementById('plant-price').innerText;
    console.log(price);
    alert(`${title} has been added to the card`)
    
    const add =document.createElement("add");
    add.innerHTML =`
    <div class=" bg-[#e2f5e0] p-1 my-2 mx-2 rounded-md flex justify-between ">
    <div>
    <h1 class="font-bold price">${title}</h1>
    <p class="text-sm">${price}X1</p>
    </div>
    <div>
    <button class="text-2xl text-red-500 delete-btn"><i class="fa-regular fa-rectangle-xmark"></i></button>
    </div>
    </div>
    `;

    cartsContainer.appendChild(add);
    const deleteBtn =add.querySelector(".delete-btn");
    deleteBtn.addEventListener('click',() =>{
      add.remove();
    })

    

  

  };
  
    // let total =0;
    // const totalEi =document.getElementById(total);
    // const prices =parseInt(document.getElementById('plant-price').innerText)
    // total +=prices;
    // totalEi.innerText =total;

 });
 

    
  
  

  

loadByCategory();
loadCategory();
