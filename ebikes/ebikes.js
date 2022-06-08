var page = window.location.pathname.split('/').pop();

let shop = document.getElementById("eb-shop");
const DISABLED = 'page-item disabled';
const NORMAL = 'page-item';

const more = document.querySelector("#more")
const less = document.querySelector("#less");
let cart = [];
let toShow = [];

let items = [
    [
        {
            id: "addm100",
            name: "Addmotor 100",
            img: "",
            description: "This electric bike can go up to 100km/h",
            price: "$1499"
        },

        {
            id: "anc250",
            name: "Ancheer 250",
            img: "",
            description: "This electric bike can go up to 120km/h",
            price: "$2699"
        },

        {
            id: "amg790",
            name: "Amego 790",
            img: "",
            description: "This electric bike can go up to 120km/h",
            price: "$4999"
        },

        {
            id: "bnl350",
            name: "Benelli 350",
            img: "",
            description: "This electric bike can go up to 120km/h",
            price: "$3799"
        }
    ],

    [
        {
            id: "anc250",
            name: "Ancheer 250",
            img: "",
            description: "This electric bike can go up to 120km/h",
            price: "$249"
        },

        {
            id: "addm100",
            name: "Addmotor 100",
            img: "",
            description: "This electric bike can go up to 100km/h",
            price: "$399"
        },

        {
            id: "bnl350",
            name: "Benelli 350",
            img: "",
            description: "This electric bike can go up to 120km/h",
            price: "$789"
        },

        {
            id: "amg790",
            name: "Amego 790",
            img: "",
            description: "This electric bike can go up to 120km/h",
            price: "$499"
        }
    ],

    [
        {
            id: "jd100",
            name: "John Doe",
            img: "",
            description: "Very talented in his domain over 15 years of experience",
            price: "$269"
          },
    
          {
            id: "jd101",
            name: "Jane Doe",
            img: "",
            description: "Very talented in her domain over 10 years of experience",
            price: "$279"
          },
    
          {
            id: "bs200",
            name: "Bob Smith",
            img: "",
            description: "Very talented in her domain over 6 years of experience",
            price: "$369"
          },
    
          {
            id: "jw200",
            name: "Joe Wealer",
            img: "",
            description: "Very talented in her domain over 20 years of experience",
            price: "$559"
          }
    ]
];

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

function addCart(pName) {
  cart.push(pName);
  let target = document.getElementById("cart");
  target.innerText = cart.length;
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


if (page === 'buyebikes.html') {
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
    // generateShpToBuy();

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
      if (page <= items[0].length-2) {
        page+=2;
        less.setAttribute("class", NORMAL);
      } else {
        page = 0;
        less.setAttribute("class", DISABLED);
      }
      if (page == items[0].length) {
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

} else if (page === 'rentebikes.html') {

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

} else if (page === 'repairebikes.html') {

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