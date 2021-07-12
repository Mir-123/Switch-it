

var url = document.location.href;
var myParam = location.search.split('name=')[1];
const list=document.getElementById('displayproducts');
function sans(){
    console.log('clicked');
    var owner_name=document.querySelector('.owner-name').innerHTML;
    var shop_name=document.querySelector('.shop-name').innerHTML;
    var shop_address=document.querySelector('.shop-address').innerHTML;
    var shop_mobile=document.querySelector('.shop-mobile').innerHTML;
    var myParam = location.search.split('name=')[1];
    Swal.fire({
            title: 'Edit Shop Details',
            html:`<form id="shop-form" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
                Shop Name
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="shop-name" type="text" placeholder="Product Name" value="${shop_name}">
            </div>
            <div class="mb-4">
                Owner Name
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="owner-name" type="text" placeholder="Product Name" value="${owner_name}">
            </div>

            <div class="mb-4">
                Mobile No
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="shop-mobile" type="text" placeholder="package quantity gr/mL" value="${shop_mobile}">
            </div>
            <div class="mb-4">
                 Shop Address
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="shop-address" type="text" placeholder="99" value="${shop_address}">
            </div>


            </form>`,

            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Edit it!'

            }).then((result) => {

            if (result.value) {
            	const createprodForm = document.querySelector('#shop-form');

//            	console.log("user",user.uid);
//                console.log(createprodForm['product-name'].value);
                Swal.fire(
                'Edited! ',
                'Your Shop is Edited.',
                'success'
                )
                console.log(myParam);
                db.collection('shop').doc(myParam).update({
                    mobile:createprodForm['shop-mobile'].value,
                    address: createprodForm['shop-address'].value,
                    name:createprodForm['shop-name'].value,
                })
                db.collection('users').doc(myParam).update({
                  name: createprodForm['owner-name'].value,
                  mobile: createprodForm['shop-mobile'].value,

              }).then(() => {
                createprodForm.reset();
                location.reload();
              }).catch(err => {
                console.log(err.message);
              });
            }
            })
}



const lt=document.getElementById('storename');
const cc=document.getElementById('contactcard');
db.collection('users').doc(myParam).get().then(s1=>{
db.collection('shop').doc(myParam).get().then(doc=>{

	let ht=`

	<h1 class="sm:text-4xl text-2xl font-medium title-font mb-2 text-gray-900">${doc.data().name}</h1>`;
  lt.innerHTML += ht;
  let cch=`

  

    <div class="lg:w-1/2 md:w-1/1 sm:w-2/3 px-6">
      <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm ">STORE NAME</h2>
      <p class="leading-relaxed"><span class='shop-name'>${doc.data().name}</span></p>
      <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mt-4">STORE OWNER NAME</h2>
      <p class="leading-relaxed"><span class='owner-name'>${s1.data().name}</span></p>
       <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mt-4">STORE ADDRESS</h2>
      <p class="leading-relaxed"><span class='shop-address'>${doc.data().address}</span></p>
      <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mt-4">STORE EMAIL</h2>
      <a class="text-purple-500 leading-relaxed"><span class='shop-email'>${doc.data().email}</span></a>
      <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mt-4">STORE PHONE</h2>
      <p class="leading-relaxed"><span class='shop-mobile'>${doc.data().mobile}</span></p>
    </div>
`;
  cc.innerHTML += cch;
});

});


console.log(myParam);
firebase.auth().onAuthStateChanged( user => {
  list.innerHTML='';
  if(user)
  {
      if(user.uid==myParam)
      {

        cc.innerHTML=`<button class="float-right bg-gray-100 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center setting-click" id="setting_yes" onclick = "sans()"><svg class="svg-icon" viewBox="0 0 20 20">
        <path
          d="M17.498,11.697c-0.453-0.453-0.704-1.055-0.704-1.697c0-0.642,0.251-1.244,0.704-1.697c0.069-0.071,0.15-0.141,0.257-0.22c0.127-0.097,0.181-0.262,0.137-0.417c-0.164-0.558-0.388-1.093-0.662-1.597c-0.075-0.141-0.231-0.22-0.391-0.199c-0.13,0.02-0.238,0.027-0.336,0.027c-1.325,0-2.401-1.076-2.401-2.4c0-0.099,0.008-0.207,0.027-0.336c0.021-0.158-0.059-0.316-0.199-0.391c-0.503-0.274-1.039-0.498-1.597-0.662c-0.154-0.044-0.32,0.01-0.416,0.137c-0.079,0.106-0.148,0.188-0.22,0.257C11.244,2.956,10.643,3.207,10,3.207c-0.642,0-1.244-0.25-1.697-0.704c-0.071-0.069-0.141-0.15-0.22-0.257C7.987,2.119,7.821,2.065,7.667,2.109C7.109,2.275,6.571,2.497,6.07,2.771C5.929,2.846,5.85,3.004,5.871,3.162c0.02,0.129,0.027,0.237,0.027,0.336c0,1.325-1.076,2.4-2.401,2.4c-0.098,0-0.206-0.007-0.335-0.027C3.001,5.851,2.845,5.929,2.77,6.07C2.496,6.572,2.274,7.109,2.108,7.667c-0.044,0.154,0.01,0.32,0.137,0.417c0.106,0.079,0.187,0.148,0.256,0.22c0.938,0.936,0.938,2.458,0,3.394c-0.069,0.072-0.15,0.141-0.256,0.221c-0.127,0.096-0.181,0.262-0.137,0.416c0.166,0.557,0.388,1.096,0.662,1.596c0.075,0.143,0.231,0.221,0.392,0.199c0.129-0.02,0.237-0.027,0.335-0.027c1.325,0,2.401,1.076,2.401,2.402c0,0.098-0.007,0.205-0.027,0.334C5.85,16.996,5.929,17.154,6.07,17.23c0.501,0.273,1.04,0.496,1.597,0.66c0.154,0.047,0.32-0.008,0.417-0.137c0.079-0.105,0.148-0.186,0.22-0.256c0.454-0.453,1.055-0.703,1.697-0.703c0.643,0,1.244,0.25,1.697,0.703c0.071,0.07,0.141,0.15,0.22,0.256c0.073,0.098,0.188,0.152,0.307,0.152c0.036,0,0.073-0.004,0.109-0.016c0.558-0.164,1.096-0.387,1.597-0.66c0.141-0.076,0.22-0.234,0.199-0.393c-0.02-0.129-0.027-0.236-0.027-0.334c0-1.326,1.076-2.402,2.401-2.402c0.098,0,0.206,0.008,0.336,0.027c0.159,0.021,0.315-0.057,0.391-0.199c0.274-0.5,0.496-1.039,0.662-1.596c0.044-0.154-0.01-0.32-0.137-0.416C17.648,11.838,17.567,11.77,17.498,11.697 M16.671,13.334c-0.059-0.002-0.114-0.002-0.168-0.002c-1.749,0-3.173,1.422-3.173,3.172c0,0.053,0.002,0.109,0.004,0.166c-0.312,0.158-0.64,0.295-0.976,0.406c-0.039-0.045-0.077-0.086-0.115-0.123c-0.601-0.6-1.396-0.93-2.243-0.93s-1.643,0.33-2.243,0.93c-0.039,0.037-0.077,0.078-0.116,0.123c-0.336-0.111-0.664-0.248-0.976-0.406c0.002-0.057,0.004-0.113,0.004-0.166c0-1.75-1.423-3.172-3.172-3.172c-0.054,0-0.11,0-0.168,0.002c-0.158-0.312-0.293-0.639-0.405-0.975c0.044-0.039,0.085-0.078,0.124-0.115c1.236-1.236,1.236-3.25,0-4.486C3.009,7.719,2.969,7.68,2.924,7.642c0.112-0.336,0.247-0.664,0.405-0.976C3.387,6.668,3.443,6.67,3.497,6.67c1.75,0,3.172-1.423,3.172-3.172c0-0.054-0.002-0.11-0.004-0.168c0.312-0.158,0.64-0.293,0.976-0.405C7.68,2.969,7.719,3.01,7.757,3.048c0.6,0.6,1.396,0.93,2.243,0.93s1.643-0.33,2.243-0.93c0.038-0.039,0.076-0.079,0.115-0.123c0.336,0.112,0.663,0.247,0.976,0.405c-0.002,0.058-0.004,0.114-0.004,0.168c0,1.749,1.424,3.172,3.173,3.172c0.054,0,0.109-0.002,0.168-0.004c0.158,0.312,0.293,0.64,0.405,0.976c-0.045,0.038-0.086,0.077-0.124,0.116c-0.6,0.6-0.93,1.396-0.93,2.242c0,0.847,0.33,1.645,0.93,2.244c0.038,0.037,0.079,0.076,0.124,0.115C16.964,12.695,16.829,13.021,16.671,13.334 M10,5.417c-2.528,0-4.584,2.056-4.584,4.583c0,2.529,2.056,4.584,4.584,4.584s4.584-2.055,4.584-4.584C14.584,7.472,12.528,5.417,10,5.417 M10,13.812c-2.102,0-3.812-1.709-3.812-3.812c0-2.102,1.71-3.812,3.812-3.812c2.102,0,3.812,1.71,3.812,3.812C13.812,12.104,12.102,13.812,10,13.812">
        </path>
      </svg></button>`+cc.innerHTML;
        document.querySelector('#setting_yes').onclick=sans;

      }
  }
  var count=0;
  db.collection('shop/'+myParam+'/product').get().then((snapshot) => {
    var len=Object.keys(snapshot.docs).length
    snapshot.docs.forEach(doc => {
        var ui=firebase.auth().currentUser,user_id;
        if(!ui)
        {
            user_id=null;
        }
        else
        {
            user_id=ui.uid;
        }
        count+=1;
        dispProduct(doc.data(),doc.id,user_id,count,len);
    })
});
  if (user) {
    if (myParam == firebase.auth().currentUser.uid)
    {
      document.querySelector('#addbtn').style.display = 'block';
    } 
  }
});

function dispProduct(product,idpro,user,count,final)
{
  let html;
  console.log(myParam,user);
  if (myParam == user){

    html=`
    <div class="lg:w-1/4 md:w-1/2 p-10 w-full block-${user}-${idpro}">
        <a class="block relative h-48 rounded overflow-hidden">
        <img alt="ecommerce"  class="object-contain object-center w-full h-full block" src="${product.image}">
        </a>
        <div class="mt-4">
        <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1" id="desc-${idpro}">${product.description}</h3>
        <h2 class="prodname text-gray-900 title-font text-lg font-medium" id="name-${idpro}">${product.name}</h2>
        <p class="mt-1" id="price-${idpro}">₹ ${product.price}</p>
        <div class="dropdown inline-block relative">
          <button class="bg-gray-300 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center edit_yes" id="edit-${user}-${idpro}">
            <span class="mr-1">Edit</span>
          </button>


          <button class="bg-red-500 text-black font-semibold py-2 px-4 rounded inline-flex items-center edit_yes45" id="edit1-${user}-${idpro}" >
            <span class="mr-1">Delete</span>
          </button>
        </div>
    </div>
	`;
  }
  else{
    html=`
    <div class="lg:w-1/4 md:w-1/2 p-10 w-full block-${user}-${idpro}">
        <a class="block relative h-48 rounded overflow-hidden">
        <img alt="ecommerce" class="object-contain object-center w-full h-full block" src="${product.image}">
        </a>
        <div class="mt-4">

        <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1" id="desc-${idpro}">${product.description}</h3>
        <h2 class="prodname text-gray-900 title-font text-lg font-medium" id="name-${idpro}">${product.name}</h2>
        <p class="mt-1" id="price-${idpro}">₹ ${product.price}</p>
        <button class="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded cart " id="${idpro}" >Add to Cart</button>
        </div>
    </div>
	`;
  }

	list.innerHTML +=html;




	document.querySelectorAll('.edit_yes').forEach((x)=>{

        x.onclick = function(event){
            event.preventDefault();
            console.log(x.id)
            content=x.id.split("-");
            var name=document.querySelector("#name-"+content[2]).innerHTML;
            var price=document.querySelector("#price-"+content[2]).innerHTML.split(" ")[1];
            var desc=document.querySelector("#desc-"+content[2]).innerHTML;
            Swal.fire({
            title: 'Edit',
            html:`<form id="product-form-${content[1]}-${content[2]}" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
            <div class="mb-4">
                Name
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="product-name" type="text" placeholder="Product Name" value="${name}">
            </div>
            <div class="mb-4">
                Description
              <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="product-desc" type="text" placeholder="package quantity gr/mL" value="${desc}">
            </div>
            <div class="mb-4">
                 Price
                <input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="product-price" type="text" placeholder="99" value=${price}>
            </div>


            </form>`,

            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, Edit it!'

            }).then((result) => {

            if (result.value) {
            	const createprodForm = document.querySelector('#product-form-'+content[1]+"-"+content[2]);

            	console.log(content[1],content[2]);
                console.log(createprodForm['product-name'].value);
                Swal.fire(
                'Edited! ',
                'Your Product is Edited.',
                'success'
                )
                db.collection('shop/'+content[1]+'/product').doc(content[2]).update({
                  name: createprodForm['product-name'].value,
                  description: createprodForm['product-desc'].value,
                  price: createprodForm['product-price'].value
              }).then(() => {
                createprodForm.reset();
                location.reload();
              }).catch(err => {
                console.log(err.message);
              });
            }
            })

        }
        }
    )
//    console.log($('.delete_yes'));

    document.querySelectorAll('.edit_yes45').forEach((x)=>{

         x.onclick= function(event){
            event.preventDefault();
            Swal.fire({
            title: 'Are you sure? ',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
            }).then((result) => {
            if (result.value) {
                content=this.id.split("-");
                console.log(content);

                document.querySelector(".block-"+content[1]+'-'+content[2]).style.display='none';
                db.collection('shop/'+content[1]+'/product').doc(content[2]).delete();
                Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
                )
            }
            })
    };
    })


	$('.cart').click(function(){
	    if(user==null)
	    {
	        return alert("You are not logged in");
	    }

    var cart,size;

     const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: false,
          timer: 2000,
          onOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })

    Toast.fire({
      icon: 'success',
      title: 'added to cart',
    })

    if(window.localStorage.getItem(myParam)==null)
    {
        cart={};
        if(window.localStorage.length==0)
        {
            size=0;
        }
        else
        {
             size=JSON.parse(localStorage.getItem("size"));
        }
//        size=1;
    }
    else
    {
        cart=JSON.parse(localStorage.getItem(myParam));
        size=JSON.parse(localStorage.getItem("size"));
    }
    if(cart[this.id]!=1)
    {
        size=JSON.parse(localStorage.getItem("size"));
        size++;
        cart[this.id]=1;
    }
    window.localStorage.setItem("size",JSON.stringify(size));
    window.localStorage.setItem(myParam,JSON.stringify(cart));

    })
    }




// add new product

function cp()
{
const createprodForm = document.querySelector('#product-form');
createprodForm.addEventListener('submit', (e) => {
  e.preventDefault();

  var timestamp = Number(new Date());
  var fn = timestamp.toString();
  var file = document.getElementById("product_photo").files[0];
  var url="";
  firebase.storage().ref('images/' + fn + '.jpg').put(file).then(function() {
    firebase.storage().ref('images/' + fn + '.jpg').getDownloadURL().then(imgUrl => {
    url = imgUrl.toString();
    console.log(url);
  }).then(function(){
    console.log(createprodForm);
    db.collection('shop/'+myParam+'/product').add({
      name: createprodForm['product-name'].value,
      description: createprodForm['product-desc'].value,
      price: createprodForm['product-price'].value,
      image: url
  }).then(() => {
    createprodForm.reset();
    location.reload();
  }).catch(err => {
    console.log(err.message);
  });
  });
  });
});
}


const prsearch = document.querySelector('#prodsearch input');
const plist = document.querySelector('#displayproducts');

const filterProds = (term) => {
  Array.from(plist.children)
    .filter((prod) => !prod.querySelector(".prodname").textContent.toLowerCase().includes(term))
    .forEach((prod) => prod.classList.add('filtered'));

  Array.from(plist.children)
    .filter((prod) => prod.querySelector(".prodname").textContent.toLowerCase().includes(term))
    .forEach((prod) => prod.classList.remove('filtered'));
};

prsearch.addEventListener('keyup', () => {

  const term = search.value.trim().toLowerCase();
  filterProds(term);

});