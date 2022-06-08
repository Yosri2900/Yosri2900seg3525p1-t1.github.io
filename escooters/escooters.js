var page = window.location.pathname.split('/').pop();

let shop = document.getElementById("e-scooters");

let items = [
    [
        {
            id: "hbys5",
            name: "Hiboy S5",
            img: "",
            description: "A fast light weight e-scooter up to 25km/h",
            price: "$239"
        },

        {
            id: "apr",
            name: "Apollo Runner",
            img: "",
            description: "A fast light weight e-scooter up to 30km/h",
            price: "$649"
        },

        {
            id: "xam",
            name: "Xiao Chiao",
            img: "",
            description: "A fast light weight e-scooter up to 27km/h",
            price: "$569"
        },

        {
            id: "bbo",
            name: "Big-Bot U6",
            img: "",
            description: "A fast light weight e-scooter up to 32km/h",
            price: "$659"
        },
    ],
    [

        {
            id: "apr",
            name: "Apollo Runner",
            img: "",
            description: "A fast light weight e-scooter up to 30km/h",
            price: "$649"
        },
        {
            id: "hbys5",
            name: "Hiboy S5",
            img: "",
            description: "A fast light weight e-scooter up to 25km/h",
            price: "$239"
        },
        
        {
            id: "bbo",
            name: "Big-Bot U6",
            img: "",
            description: "A fast light weight e-scooter up to 32km/h",
            price: "$659"
        },

        {
            id: "xam",
            name: "Xiao Chiao",
            img: "",
            description: "A fast light weight e-scooter up to 27km/h",
            price: "$569"
        },
    ],
    
    [
        {
          id: "jd101",
          name: "Jane Doe",
          img: "",
          description: "Very talented in her domain over 10 years of experience",
          price: "$169"
        },

        {
        id: "jd100",
        name: "John Doe",
        img: "",
        description: "Very talented in his domain over 15 years of experience",
        price: "$179"
        },

        
        {
        id: "jw200",
        name: "Joe Wealer",
        img: "",
        description: "Very talented in her domain over 20 years of experience",
        price: "$229"
        },

        {
        id: "bs200",
        name: "Bob Smith",
        img: "",
        description: "Very talented in her domain over 6 years of experience",
        price: "$369"
        },
    
    ]
];

const DISABLED = 'page-item disabled';
const NORMAL = 'page-item';
const more = document.querySelector("#more")
const less = document.querySelector("#less");

let cart = [];
let toShow = [];

var modalWrapBuy = null;
function showModalToBuy(name) {
    if (modalWrapBuy !== null) modalWrapBuy.remove();

    modalWrapBuy = document.createElement('div');
    modalWrapBuy.innerHTML = `
    <div class="modal fade" id="buy-now" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
    <div class="modal-content">
    <div class="modal-header">
    <h5 class="modal-title" id="exampleModalLabel">Buy ${name}</h5>
    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    </div>
    <div class="modal-body">
    <form>
    <div class="mb-3">
    <input type="text" id="name" class="form-control form-contol-sm" placeholder="john" required>
    </div>
    <div class="mb-3">
    <input type="text" id="email" class="form-control form-contol-sm" placeholder="johndoe@gmail.com" required>
    </div>
        </form>
        <div class="mb-3">
        <button type="button" class="btn btn-sm btn-success btn-block" data-bs-dismiss="modal" onclick="showConfirmation()">Confirm</button>
          <button type="button" class="btn btn-sm btn-success btn-block" data-bs-dismiss="modal" onclick="addCart('${name}')">Add to Cart</button>
          </div>
          </div>
          </div>
          </div>
          </div>`;
          
    document.body.append(modalWrapBuy);
    var modal = new bootstrap.Modal(modalWrapBuy.querySelector('.modal'));
    modal.show();
}

var modalWrapRent = null;
function showModalToRent(name) {
    if (modalWrapRent !== null) modalWrapRent.remove();

   modalWrapRent = document.createElement('div');
   modalWrapRent.innerHTML = `<div class="modal fade" id="buy-now" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
   <div class="modal-dialog">
     <div class="modal-content">
       <div class="modal-header">
         <h5 class="modal-title" id="exampleModalLabel">Rent ${name}</h5>
         <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
       </div>
       <div class="modal-body">
         <form>
           <div class="mb-3">
             <input type="text" id="name" class="form-control form-contol-sm" placeholder="name" required>
           </div>
           <div class="mb-3">
             <input type="text" id="email" class="form-control form-contol-sm" placeholder="name@gmail.com" required>
           </div>
         </form>
         <div class="mb-3">
            <button type="button" class="btn btn-sm btn-success btn-block" data-bs-dismiss="modal" onclick="showConfirmation()">Confirm</button>
           <button type="button" class="btn btn-sm btn-success btn-block" data-bs-dismiss="modal" onclick="addCart('${name}')">Add to Cart</button>
           <button type="button" class="btn btn-sm btn-block">
               <label for="">Until: </label>
               <input type="datetime-local" class="form-control-sm">
           </button>
         </div>
       </div>
     </div>
   </div>
 </div>`

 document.body.append(modalWrapRent);
 var modal = new bootstrap.Modal(modalWrapRent.querySelector('.modal'));
 modal.show();   
}

function showConfirmation () {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    
    if (!name || !email) {
        alert('fill all fields');
    } else {
        alert(`Confirmation for ${name} at ${email}`);
    }  
}

function addCart(pName) {
    cart.push(pName);
    let target = document.getElementById("cart");
    target.innerText = cart.length;
}

if (page === 'buyescooters.html') {

    function generateShopToBuy() {
        return shop.innerHTML = items[0].map( (x) => {
            return `<div class="col">
            <div class="card" id=${x.id}>
              <img src="${x.img}" class="card-img-top" alt="image...">
              <div class="card-body">
                <h5 class="card-title">${x.name}</h5>
                <p class="card-text">${x.description}</p>
              </div>
              <button type="button" class="btn btn-success btn-lg" onclick="showModalToBuy('${x.name}')">${x.price}</button>
            </div>
          </div>`
        }).join("");
    }
    // generateShopToBuy();

    // function error() {
    //   return `<!-- Flexbox container for aligning the toasts -->
    //   <div aria-live="polite" aria-atomic="true" class="d-flex justify-content-center align-items-center w-100">
      
    //     <!-- Then put toasts within -->
    //     <div class="toast" role="alert" aria-live="assertive" aria-atomic="true">
    //       <div class="toast-header">
    //         <strong class="me-auto">E-Scooters</strong>
    //         <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
    //       </div>
    //       <div class="toast-body">
    //         Ouch, we don't have any E-Scooters to buy at the moment...
    //         Try later!
    //       </div>
    //     </div>
    //   </div>`
    // }

    // error();

    let page = 0;

    const content = items[0].map( (e) => {
      return `<div class="col">
      <div class="card" id=${e.id}>
        <img src="${e.img}" class="card-img-top" alt="image...">
        <div class="card-body">
          <h5 class="card-title">${e.name}</h5>
          <p class="card-text">${e.description}</p>
        </div>
        <button type="button" class="btn btn-success btn-lg" onclick="showModalToBuy('${e.name}')">${e.price}</button>
      </div>
    </div>`
    } );


    for (let i = 0; i < 2; i++) {
      toShow.push(content[i])
      shop.innerHTML += content[i];
    }

    more.addEventListener("click", () => {
      console.log('clicked more');
      if (page <= items[0].length-2) {
        page+=2;
        less.setAttribute("class", NORMAL);
      } else {
        page = 0;
        less.setAttribute("class", DISABLED);
      }
      if (page == items[0].length-2) {
        more.setAttribute("class", DISABLED);
        return;
      }
      for (let i = page; i < page+2; i++) {
        toShow.push(content[i]);
        shop.innerHTML += content[i]; 
      }
    });

    less.addEventListener("click", () => {
      location.reload();
    });

} else if (page === 'rentescooter.html') {
    function generateShopToRent() {
        return shop.innerHTML = items[1].map( (x) => {
            return `<div class="col">
            <div class="card" id=${x.id}>
              <img src="${x.img}" class="card-img-top" alt="image...">
              <div class="card-body">
                <h5 class="card-title">${x.name}</h5>
                <p class="card-text">${x.description}</p>
              </div>
              <button type="button" class="btn btn-success btn-lg" onclick="showModalToRent('${x.name}')">${x.price}</button>
            </div>
          </div>`
        } ).join("");
    }

    // generateShopToRent();

    let page = 0;

    const content = items[1].map( (e) => {
      return `<div class="col">
      <div class="card" id=${e.id}>
        <img src="${e.img}" class="card-img-top" alt="image...">
        <div class="card-body">
          <h5 class="card-title">${e.name}</h5>
          <p class="card-text">${e.description}</p>
        </div>
        <button type="button" class="btn btn-success btn-lg" onclick="showModalToRent('${e.name}')">${e.price}</button>
      </div>
    </div>`
    } );


    for (let i = 0; i < 2; i++) {
      toShow.push(content[i])
      shop.innerHTML += content[i];
    }

    more.addEventListener("click", () => {
      if (page <= items[1].length-2) {
        page+=2;
        less.setAttribute("class", NORMAL);
      } else {
        page = 0;
        less.setAttribute("class", DISABLED);
      }
      if (page == items[1].length) {
        more.setAttribute("class", DISABLED);
        return;
      }
      for (let i = page; i < page+2; i++) {
        toShow.push(content[i]);
        shop.innerHTML += content[i]; 
      }
    });

    less.addEventListener("click", () => {
      location.reload();
    });

} else if (page === 'repairescooter.html') {
    function generateShopToRepair() {
        return shop.innerHTML = items[2].map( (x) => {
            return `<div class="col">
            <div class="card" id=${x.id}>
              <img src="${x.img}" class="card-img-top" alt="image...">
              <div class="card-body">
                <h5 class="card-title">${x.name}</h5>
                <p class="card-text">${x.description}</p>
              </div>
              <button type="button" class="btn btn-success btn-lg" onclick="showModalToRent('${x.name}')">${x.price}</button>
            </div>
          </div>`
        }).join("");
    }

    // generateShopToRepair();
    let page = 0;

    const content = items[2].map( (e) => {
      return `<div class="col">
      <div class="card" id=${e.id}>
        <img src="${e.img}" class="card-img-top" alt="image...">
        <div class="card-body">
          <h5 class="card-title">${e.name}</h5>
          <p class="card-text">${e.description}</p>
        </div>
        <button type="button" class="btn btn-success btn-lg" onclick="showModalToRent('${e.name}')">${e.price}</button>
      </div>
    </div>`
    } );


    for (let i = 0; i < 2; i++) {
      toShow.push(content[i])
      shop.innerHTML += content[i];
    }

    more.addEventListener("click", () => {
      if (page <= items[2].length-2) {
        page+=2;
        less.setAttribute("class", NORMAL);
      } else {
        page = 0;
        less.setAttribute("class", DISABLED);
      }
      if (page == items[2].length) {
        more.setAttribute("class", DISABLED);
        return;
      }
      for (let i = page; i < page+2; i++) {
        toShow.push(content[i]);
        shop.innerHTML += content[i]; 
      }
    });

    less.addEventListener("click", () => {
      location.reload();
    });
}