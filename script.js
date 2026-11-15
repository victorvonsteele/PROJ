// Product Catalog Database with complete pricing for 12oz, 16oz, 20Oz
const productsData = [
  // Espresso Based (Iced)
  { id: 'p1', name: 'Americano', category: 'Espresso', img: 'https://scontent.fmnl7-1.fna.fbcdn.net/v/t39.30808-6/552825560_650299018147242_6828711406294409740_n.jpg?stp=dst-jpg_tt6&cstp=mx940x788&ctp=s940x788&_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEulE1GtawZiaYlp3DzK8f8lR2cE6y2bj2VHZwTrLZuPYuRF9oD5zAaMnka2AhiqJZx19JLpq4jotBwXBYRsbxM&_nc_ohc=kiLKY23SKPwQ7kNvwGQX57K&_nc_oc=AdqFDLl_QEowpsC9SEYf7EwPkfAOK39_xDnE5qOO9iz-UWFAyo6echaOtNT74sd_Gw8&_nc_zt=23&_nc_ht=scontent.fmnl7-1.fna&_nc_gid=otNe4-6txvutba9Pxw957w&_nc_ss=7b2a8&oh=00_AQT5rF4EuJadvzBSdGMJ2nsqAnMiIAKl6PGnVMCajGi-1g&oe=6AF643D4', prices: { '12oz': 65, '16oz': 85, '20Oz': 105 }, inStock: true },
  { id: 'p2', name: 'Kape Latte', category: 'Espresso', img: 'https://scontent.fmnl7-1.fna.fbcdn.net/v/t39.30808-6/552444544_650299138147230_8446330842192068059_n.jpg?stp=dst-jpg_tt6&cstp=mx940x788&ctp=s940x788&_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEJcNBYjeQxsqmaO6DdCSmVE--sk_u3v7wT76yT-7e_vEZDxEUlJAVYAQvSJI9kVgKXBE29tm_HgM54KvQcWNpv&_nc_ohc=lAmcQ-qV9tQQ7kNvwEXd3_H&_nc_oc=AdovbkAsoE8j5tHTeyCJOO_Jbm-Vh1UcHukAUgHNmEUdZdt_o8d32HrmU7LXCIrwr9U&_nc_zt=23&_nc_ht=scontent.fmnl7-1.fna&_nc_gid=zUX7mMiyortMkuQtV9pwkw&_nc_ss=7b2a8&oh=00_AQRoYQtjjqi-1jY2jKZcwgYh9q6XgSqUHpsKLxQ_QNaqXA&oe=6AF64218', prices: { '12oz': 75, '16oz': 95, '20Oz': 115 }, inStock: true },
  { id: 'p3', name: 'Spanish Latte', category: 'Espresso', img: 'https://scontent.fmnl33-6.fna.fbcdn.net/v/t39.30808-6/554541581_650299274813883_2079253591525020714_n.jpg?stp=dst-jpg_tt6&cstp=mx940x788&ctp=s940x788&_nc_cat=100&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGMJn3QxSIa7o08gM9p1wUAAJjdS9veEd0AmN1L294R3aw5WXAUZPHBIaT98LHiKIiHjQQLql7jliM4e0UqK5ch&_nc_ohc=Sc1XRQ6hbvwQ7kNvwHyC8x7&_nc_oc=AdrKlCTPkQ3N4H9lGhXvZu868qbi0ugYq3vwh8AIjyaYdmN4iFTCLiCoDHzf-lMfzAU&_nc_zt=23&_nc_ht=scontent.fmnl33-6.fna&_nc_gid=NGmI_LCW4tMHyrve-9oa1A&_nc_ss=7b2a8&oh=00_AQQrNlywcGYusCfFKcG5MjKzREMARfOWhErxvJB6glEMRg&oe=6AF621BA', prices: { '12oz': 85, '16oz': 105, '20Oz': 125 }, inStock: true },
  { id: 'p4', name: 'Mocha', category: 'Espresso', img: 'https://scontent.fmnl33-1.fna.fbcdn.net/v/t39.30808-6/554338613_650299218147222_6680603097871671539_n.jpg?stp=dst-jpg_tt6&cstp=mx940x788&ctp=s940x788&_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGNx5JBj5_SGeb4hxb46ELw57gpzeuX0lvnuCnN65fSW7ogz6TqNbkwAnGm2_zKTAF8cmMnROCF5QiIGLgr6R2l&_nc_ohc=mE1yvY4sPfAQ7kNvwGViqwf&_nc_oc=AdqmnQhodrhVXUok2kOh6BZlo8UUvHTxc3uiLvgvjvTV3TSPb70t-esSY_T35tc65BA&_nc_zt=23&_nc_ht=scontent.fmnl33-1.fna&_nc_gid=UYlh9htYqwZdcZq0rkBdZw&_nc_ss=7b2a8&oh=00_AQQc6HoU8mLLhgKKY3fTuAomgN3SjBH89x8M5YmhXOvWPw&oe=6AF61256', prices: { '12oz': 85, '16oz': 105, '20Oz': 125 }, inStock: true },
  { id: 'p5', name: 'Dark Chocolate Espresso', category: 'Espresso', img: 'https://scontent.fmnl33-4.fna.fbcdn.net/v/t39.30808-6/554106266_650299444813866_6383928518697200753_n.jpg?stp=dst-jpg_tt6&cstp=mx940x788&ctp=s940x788&_nc_cat=103&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEYp68ugBzqqaQYsh-MH7JzwiKWVGEOhFXCIpZUYQ6EVUm4B5yOHdbleEZJqzi3gq1pvsR2p4tLe6y44Lcbc7RC&_nc_ohc=-UKh5DHQ904Q7kNvwHjRDlX&_nc_oc=AdpHxMRiU6QD2BTK2MVtpdlrEJ-eiblaMMLpn4a47EJXnXPMJ8DGCeQcx2OBUZAV7aw&_nc_zt=23&_nc_ht=scontent.fmnl33-4.fna&_nc_gid=G_RB250t_U8iT1f6GaLDDA&_nc_ss=7b2a8&oh=00_AQT0me2rnZJRr5GFaD8d9ZMXS1lCFTYg9TDCrEPdiwamgg&oe=6AF62EB1', prices: { '12oz': 90, '16oz': 110, '20Oz': 130 }, inStock: true },
  { id: 'p6', name: 'Matcha Espresso', category: 'Espresso', img: 'https://scontent.fmnl33-2.fna.fbcdn.net/v/t39.30808-6/552567064_650299214813889_3603631408989874977_n.jpg?stp=dst-jpg_tt6&cstp=mx940x788&ctp=s940x788&_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeH5p-VhRjUNvcTLxUprEOLexqZYiViSkALGpliJWJKQAvcCfQfchJqWdbhxiZk7eJyVBtj1ystSILEe8I8NIcY-&_nc_ohc=cSU977XUnJoQ7kNvwH7RqyZ&_nc_oc=AdrUNvuFfzWNd484pm35IMwr-qonL9M6ZDK4CIXFiHEn9RzJj-b74AeUptbmLkvJmto&_nc_zt=23&_nc_ht=scontent.fmnl33-2.fna&_nc_gid=ihU7ALUO7yLH_ndXFG8bEQ&_nc_ss=7b2a8&oh=00_AQQ8z6kvpbf_U3m9buqgJb7PhA0AwH4hzj3ZdPvDBjuZtA&oe=6AF63440', prices: { '12oz': 95, '16oz': 115, '20Oz': 135 }, inStock: true },
  { id: 'p7', name: 'Caramel Macchiato', category: 'Espresso', img: 'https://scontent.fmnl7-1.fna.fbcdn.net/v/t39.30808-6/551986460_650299334813877_8766383431245418519_n.jpg?stp=dst-jpg_tt6&cstp=mx940x788&ctp=s940x788&_nc_cat=108&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGqrpYSRERv7og28QYVpr6BvUv4C_flwPS9S_gL9-XA9Pq4bvV_iJJ-798-9b1VKfIITDsvHjDGznxeeWY4jxYX&_nc_ohc=RvD0WEOe_bsQ7kNvwG6_8Zc&_nc_oc=AdqzO299yks7xAKDPEgVHVbk8pcFQunU4X_CeLlojF1ysd9OmboGoS1dgCuoOe7sAWg&_nc_zt=23&_nc_ht=scontent.fmnl7-1.fna&_nc_gid=JV5KvU8doyflqGu9TWrq7Q&_nc_ss=7b2a8&oh=00_AQRAVPuWJIfo0nAW2njQBuPJUcNTn75_Tz_C-n3CCLk-OA&oe=6AF644D6', prices: { '12oz': 85, '16oz': 105, '20Oz': 125 }, inStock: true },
  { id: 'p8', name: 'Sea Salt Latte', category: 'Espresso', img: 'https://static.vecteezy.com/system/resources/thumbnails/054/405/448/small/hot-coffee-in-a-rustic-ceramic-cup-with-steaming-aroma-free-vector.jpg', prices: { '12oz': 90, '16oz': 110, '20Oz': 130 }, inStock: true },
  { id: 'p9', name: 'Barista\'s Choice', category: 'Espresso', img: 'https://static.vecteezy.com/system/resources/thumbnails/054/405/448/small/hot-coffee-in-a-rustic-ceramic-cup-with-steaming-aroma-free-vector.jpg', prices: { '12oz': 100, '16oz': 120, '20Oz': 140 }, inStock: true },

  // Milk Based (Non-Coffee)
  { id: 'p10', name: 'Premium Chocolate', category: 'Milk', img: 'https://scontent.fmnl3-4.fna.fbcdn.net/v/t39.30808-6/554831015_650299338147210_8416857444036532150_n.jpg?stp=dst-jpg_tt6&cstp=mx940x788&ctp=s940x788&_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFovIzyKrLL8mRm6sPZboKYMdKmDc9ZC-Qx0qYNz1kL5KrxKdTZngqzSZNhUNM6JeXJ0pVUKimufKvW-T2gCEa-&_nc_ohc=ZauomKwvCncQ7kNvwH5b0xM&_nc_oc=AdozAOygBv8vZN_Q-zNQlY9w4rg_7WNionpXA68hqRmJuOKRAuoy-PmysoVl-s0Xnio&_nc_zt=23&_nc_ht=scontent.fmnl3-4.fna&_nc_gid=wG0IXh4eSkorMFrgsE-AdQ&_nc_ss=7b2a8&oh=00_AQSB7MR24LojTm1oVulF0e0eTJyG9rFaT8vI3x6gIxezZg&oe=6AF64784', prices: { '12oz': 65, '16oz': 85, '20Oz': 105 }, inStock: true },
  { id: 'p11', name: 'Strawberry Milk', category: 'Milk', img: 'https://scontent.fmnl7-1.fna.fbcdn.net/v/t39.30808-6/552377790_650299141480563_4448525756662662196_n.jpg?stp=dst-jpg_tt6&cstp=mx940x788&ctp=s940x788&_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHY_TXG-mIc_ACNe2OPb8NRl-BWEqOZcr6X4FYSo5lyvu1NnraGTe8M11A7Qkyovz0SN0PVMyTDbfZ2vMnJCfs6&_nc_ohc=WyLRvY6CH7QQ7kNvwHN0sLG&_nc_oc=AdodImqAmVFhcYjig_mqGsbBeAH0mxAqDUZYWC_SlWRVXi2Zsdskp19pE4NswHcWJjc&_nc_zt=23&_nc_ht=scontent.fmnl7-1.fna&_nc_gid=wG0IXh4eSkorMFrgsE-AdQ&_nc_ss=7b2a8&oh=00_AQSRIihu_oAV9dW9Q2oJ12mf1fv5aPpdBzPggy3mpWPCPg&oe=6AF62368', prices: { '12oz': 70, '16oz': 90, '20Oz': 110 }, inStock: true },
  { id: 'p12', name: 'Blueberry Milk', category: 'Milk', img: 'https://scontent.fmnl3-2.fna.fbcdn.net/v/t39.30808-6/552971298_650299404813870_4969909308988411767_n.jpg?stp=dst-jpg_tt6&cstp=mx940x788&ctp=s940x788&_nc_cat=106&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeHTT8zj7dRXfNAsbJ837SEdazn65Okdck9rOfrk6R1yT6kF0Njx6qZz7ezhcjNjOKIafUNHouXJvealnvHmCXeT&_nc_ohc=8EPQcEVXMwYQ7kNvwEF5u1f&_nc_oc=Ado3tujY0v0ALuz5N39ykrx3P8n_Gv5pA6ELE1a8SkyojcPh_1VRXIjsIQZd_nCs45U&_nc_zt=23&_nc_ht=scontent.fmnl3-2.fna&_nc_gid=KbNwb0lZ5GMdLR_Psc4h6w&_nc_ss=7b2a8&oh=00_AQSX2evqpJoh3p9ifaj0oljrmA6euPBmMf05zP1XcCm9sg&oe=6AF65195', prices: { '12oz': 70, '16oz': 90, '20Oz': 110 }, inStock: true },

  // Juice, Soda & Tea
  { id: 'p13', name: 'Strawberry / Blueberry Juice', category: 'Juice', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs2fmDF3dxbJskJs6Hmu19tOw5kNV0QqvedBoPjJK0dqCBcQoAbtJr2og5&s=10', prices: { '12oz': 60, '16oz': 80, '20Oz': 100 }, inStock: true },
  { id: 'p14', name: 'Besh Fruit Tea & Soda', category: 'Juice', img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs2fmDF3dxbJskJs6Hmu19tOw5kNV0QqvedBoPjJK0dqCBcQoAbtJr2og5&s=10', prices: { '12oz': 65, '16oz': 85, '20Oz': 105 }, inStock: true },

  // Matcha Series
  { id: 'p15', name: 'Matcha Latte', category: 'Matcha', img: 'https://scontent.fmnl37-1.fna.fbcdn.net/v/t39.30808-6/552582504_650299278147216_436880854720482997_n.jpg?stp=dst-jpg_tt6&cstp=mx940x788&ctp=s940x788&_nc_cat=109&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGERgUB9ONWPQeV_Iyr_SF00MwY8K9vIiHQzBjwr28iIXEwA4e_Nf1aF2RenRZ2lTtMc2ILMn-eQbsayk_KwHHR&_nc_ohc=wFTpSbnqjE4Q7kNvwFe-mYO&_nc_oc=AdpCCFhWHRL5c7k-UmKp7RGU0khVKk_XZiGiT_GSrR1O6XE349dEajhpOWxb74q0pRc&_nc_zt=23&_nc_ht=scontent.fmnl37-1.fna&_nc_gid=x1uZLZh4KE6D72QlohqOlg&_nc_ss=7b2a8&oh=00_AQTV7VXh324O_Bgw-Jw5kJXBc4aGIgAHl755GpCL_OOHsQ&oe=6AF64F42', prices: { '12oz': 85, '16oz': 105, '20Oz': 125 }, inStock: true },
  { id: 'p16', name: 'Dark / Pink Matcha', category: 'Matcha', img: 'https://scontent.fmnl3-3.fna.fbcdn.net/v/t39.30808-6/553514797_650299074813903_7461057705901215400_n.jpg?stp=dst-jpg_tt6&cstp=mx940x788&ctp=s940x788&_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeEA-rMq5uh5FUqzC4y8KhAhedqFbdsFFdx52oVt2wUV3DEuPXGgglGvQQqQpcop3zOdmJ36fODrB-UY41Q90mdL&_nc_ohc=mz5V44lD-cgQ7kNvwFGa_1v&_nc_oc=AdpnaSlVcNwmnuaI7p8CmzTQAikHb2hsTaboEkK6uN9mXqQ9TdECs4qUAaPk1evAkVo&_nc_zt=23&_nc_ht=scontent.fmnl3-3.fna&_nc_gid=S4_Sjmcrz6oOTrJa4AkyzA&_nc_ss=7b2a8&oh=00_AQTACaBhrB3HpW6z1eg9jmkZRv64-wPab6RJ3hHPr7jugg&oe=6AF63125', prices: { '12oz': 90, '16oz': 110, '20Oz': 130 }, inStock: true }
];

// Available Add-ons
const addOnsData = [
  { id: 'add1', name: 'Espresso Shot', price: 25 },
  { id: 'add2', name: 'Milk Syrup', price: 20 },
  { id: 'add3', name: 'Extra Milk', price: 20 },
  { id: 'add4', name: 'Caramel Syrup', price: 15 },
  { id: 'add5', name: 'Chocolate Syrup', price: 15 },
  { id: 'add6', name: 'Pearls / Crystal', price: 15 },
  { id: 'add7', name: 'Extra Sugar', price: 10 }
];

// App State Management
let cart = [];
let activeFilter = 'All';
let currentSelectedProduct = null;
let selectedSize = '16oz';
let selectedAddons = [];
let modalQuantity = 1;
let activeHighlight = 0;
let highlightsTimer = null;
let highlightsAutoplay = true;

// Initialize Page
document.addEventListener('DOMContentLoaded', () => {
  renderProducts();
  updateCartUI();
  startHighlightsAutoplay();
});

function formatCupSize(size) {
  return `${size.slice(0, -2)}<span class="text-[0.7em]">oz</span>`;
}

// Render Product Catalog Cards
function renderProducts() {
  const grid = document.getElementById('productGrid');
  grid.innerHTML = '';

  const filtered = activeFilter === 'All' 
    ? productsData 
    : productsData.filter(p => p.category === activeFilter);

  filtered.forEach(product => {
    const minPrice = product.prices['12oz'];
    const card = document.createElement('div');
    card.className = "group relative bg-gray-50 rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-300 transition-all duration-300 flex flex-col justify-between hover:shadow-xl cursor-pointer";
    card.onclick = () => openProductModal(product);

    card.innerHTML = `
      <div>
        <div class="relative h-60 w-full overflow-hidden bg-gray-200">
          <img src="${product.img}" alt="${product.name}" class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" onerror="this.src='https://placehold.co/400x400/222/fff?text=${encodeURIComponent(product.name)}'" />
          <span class="absolute top-3 left-3 bg-white/90 backdrop-blur-md text-black text-[10px] font-black uppercase px-2.5 py-1 rounded-full shadow-sm">
            ${product.category}
          </span>
          ${product.inStock ? '' : '<span class="absolute top-3 right-3 bg-red-600 text-white text-[10px] font-black uppercase px-2 py-0.5 rounded-full">Out of Stock</span>'}
        </div>
        <div class="p-5">
          <h3 class="font-extrabold text-lg uppercase tracking-tight text-gray-900 group-hover:text-gray-600 transition-colors">${product.name}</h3>
          <p class="text-xs text-gray-500 mt-1">Sizes: 12<span class="text-[0.7em]">oz</span> • 16<span class="text-[0.7em]">oz</span> • 20<span class="text-[0.7em]">oz</span></p>
        </div>
      </div>
      <div class="p-5 pt-0 flex justify-between items-center">
        <div>
          <span class="text-[10px] uppercase text-gray-400 font-bold block">Starts at</span>
          <span class="text-lg font-black text-black">₱${minPrice}</span>
        </div>
        <button class="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors shadow-md">
          <i class="fa-solid fa-plus text-xs"></i>
        </button>
      </div>
    `;
    grid.appendChild(card);
  });
}

function showHighlight(index) {
  const slides = document.querySelectorAll('.highlight-slide');
  const dots = document.querySelectorAll('.highlight-dot');
  if (!slides.length) return;

  activeHighlight = (index + slides.length) % slides.length;
  slides.forEach((slide, i) => {
    const isActive = i === activeHighlight;
    slide.classList.toggle('opacity-100', isActive);
    slide.classList.toggle('opacity-0', !isActive);
    slide.classList.toggle('pointer-events-none', !isActive);
    slide.setAttribute('aria-hidden', String(!isActive));
  });
  dots.forEach((dot, i) => {
    const isActive = i === activeHighlight;
    dot.classList.toggle('bg-white', isActive);
    dot.classList.toggle('bg-white/50', !isActive);
    dot.setAttribute('aria-current', String(isActive));
  });
}

function changeHighlight(direction) {
  showHighlight(activeHighlight + direction);
  startHighlightsAutoplay();
}

function startHighlightsAutoplay() {
  clearInterval(highlightsTimer);
  if (highlightsAutoplay) {
    highlightsTimer = setInterval(() => showHighlight(activeHighlight + 1), 5000);
  }
}

function toggleHighlightsAutoplay() {
  highlightsAutoplay = !highlightsAutoplay;
  const icon = document.getElementById('highlightsPlayIcon');
  if (icon) {
    icon.classList.toggle('fa-pause', highlightsAutoplay);
    icon.classList.toggle('fa-play', !highlightsAutoplay);
  }
  startHighlightsAutoplay();
}

// Category Filter Handler
function filterCategory(cat) {
  activeFilter = cat;
  document.querySelectorAll('.cat-btn').forEach(btn => {
    if (btn.innerText.toUpperCase().includes(cat.toUpperCase()) || (cat==='All' && btn.innerText.includes('ALL'))) {
      btn.className = "cat-btn active px-6 py-2.5 rounded-full text-xs font-extrabold tracking-wide uppercase transition-all bg-black text-white shadow-md";
    } else {
      btn.className = "cat-btn px-6 py-2.5 rounded-full text-xs font-extrabold tracking-wide uppercase transition-all bg-gray-100 text-gray-700 hover:bg-gray-200";
    }
  });
  renderProducts();
}

function scrollToMenu(cat = null) {
  if (cat) filterCategory(cat);
  document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
}

// Open Product Details Customization Modal
function openProductModal(product) {
  currentSelectedProduct = product;
  selectedSize = '16oz';
  selectedAddons = [];
  modalQuantity = 1;

  document.getElementById('modalImg').src = product.img;
  document.getElementById('modalTitle').innerText = product.name;
  document.getElementById('modalCategory').innerText = product.category;
  document.getElementById('modalQty').innerText = modalQuantity;

  // Size Options Render
  const sizeContainer = document.getElementById('sizeSelectorContainer');
  sizeContainer.innerHTML = '';
  Object.keys(product.prices).forEach(size => {
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.onclick = () => selectModalSize(size);
    btn.id = `size-btn-${size}`;
    btn.className = `p-3 rounded-xl border text-center transition-all ${size === selectedSize ? 'border-black bg-black text-white font-black' : 'border-gray-200 bg-gray-50 text-gray-700 font-bold hover:bg-gray-100'}`;
    btn.innerHTML = `
      <div class="text-xs uppercase">${formatCupSize(size)}</div>
      <div class="text-xs opacity-80 mt-0.5">₱${product.prices[size]}</div>
    `;
    sizeContainer.appendChild(btn);
  });

  // Add-ons Render
  const addonsContainer = document.getElementById('addonsContainer');
  addonsContainer.innerHTML = '';
  addOnsData.forEach(addon => {
    const label = document.createElement('label');
    label.className = "flex items-center justify-between p-2.5 rounded-xl border border-gray-200 bg-gray-50 hover:bg-gray-100 cursor-pointer text-xs font-semibold";
    label.innerHTML = `
      <div class="flex items-center gap-2">
        <input type="checkbox" onchange="toggleAddon('${addon.id}')" class="accent-black rounded">
        <span>${addon.name}</span>
      </div>
      <span class="text-gray-500">+₱${addon.price}</span>
    `;
    addonsContainer.appendChild(label);
  });

  calculateModalTotal();

  const modal = document.getElementById('productModal');
  modal.classList.remove('opacity-0', 'pointer-events-none');
  modal.querySelector('div').classList.remove('scale-95');
}

function openProductById(id) {
  const p = productsData.find(item => item.id === id);
  if (p) openProductModal(p);
}

function closeProductModal() {
  const modal = document.getElementById('productModal');
  modal.classList.add('opacity-0', 'pointer-events-none');
  modal.querySelector('div').classList.add('scale-95');
}

function selectModalSize(size) {
  selectedSize = size;
  Object.keys(currentSelectedProduct.prices).forEach(s => {
    const btn = document.getElementById(`size-btn-${s}`);
    if (btn) {
      btn.className = `p-3 rounded-xl border text-center transition-all ${s === selectedSize ? 'border-black bg-black text-white font-black' : 'border-gray-200 bg-gray-50 text-gray-700 font-bold hover:bg-gray-100'}`;
    }
  });
  calculateModalTotal();
}

function toggleAddon(addonId) {
  const idx = selectedAddons.indexOf(addonId);
  if (idx > -1) {
    selectedAddons.splice(idx, 1);
  } else {
    selectedAddons.push(addonId);
  }
  calculateModalTotal();
}

function updateModalQty(delta) {
  if (modalQuantity + delta >= 1) {
    modalQuantity += delta;
    document.getElementById('modalQty').innerText = modalQuantity;
    calculateModalTotal();
  }
}

function calculateModalTotal() {
  if (!currentSelectedProduct) return 0;
  const base = currentSelectedProduct.prices[selectedSize];
  const addonsCost = selectedAddons.reduce((sum, id) => {
    const item = addOnsData.find(a => a.id === id);
    return sum + (item ? item.price : 0);
  }, 0);

  const singleTotal = base + addonsCost;
  const grandTotal = singleTotal * modalQuantity;

  document.getElementById('modalBasePrice').innerText = `₱${singleTotal}`;
  document.getElementById('modalTotalBtnPrice').innerText = `₱${grandTotal}`;
  return grandTotal;
}

// Add Customized Item to Cart
function submitModalAddToCart(isBuyNow = false) {
  const basePrice = currentSelectedProduct.prices[selectedSize];
  const selectedAddonsList = selectedAddons.map(id => addOnsData.find(a => a.id === id));
  const addonsCost = selectedAddonsList.reduce((acc, a) => acc + a.price, 0);
  const unitPrice = basePrice + addonsCost;

  const cartItem = {
    cartId: Date.now() + Math.random().toString(),
    productId: currentSelectedProduct.id,
    name: currentSelectedProduct.name,
    category: currentSelectedProduct.category,
    img: currentSelectedProduct.img,
    size: selectedSize,
    addons: selectedAddonsList,
    unitPrice: unitPrice,
    quantity: modalQuantity
  };

  cart.push(cartItem);
  updateCartUI();
  closeProductModal();

  if (isBuyNow) {
    toggleCartDrawer(true);
    openCheckoutModal();
  } else {
    toggleCartDrawer(true);
  }
}

// Toggle Cart Drawer
function toggleCartDrawer(forceOpen = false) {
  const drawer = document.getElementById('cartDrawer');
  const backdrop = document.getElementById('cartDrawerBackdrop');

  const isOpen = !drawer.classList.contains('translate-x-full');
  if (isOpen && !forceOpen) {
    drawer.classList.add('translate-x-full');
    backdrop.classList.add('opacity-0', 'pointer-events-none');
  } else {
    drawer.classList.remove('translate-x-full');
    backdrop.classList.remove('opacity-0', 'pointer-events-none');
  }
}

// Update Cart UI & Calculation
function updateCartUI() {
  const container = document.getElementById('cartItemsContainer');
  const cartBadge = document.getElementById('cartBadge');
  const checkoutBtn = document.getElementById('checkoutBtn');

  container.innerHTML = '';
  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  if (totalCount > 0) {
    cartBadge.innerText = totalCount;
    cartBadge.classList.remove('hidden');
    checkoutBtn.disabled = false;
  } else {
    cartBadge.classList.add('hidden');
    checkoutBtn.disabled = true;
    container.innerHTML = `
      <div class="text-center py-12 text-gray-400">
        <i class="fa-solid fa-bag-shopping text-5xl mb-3"></i>
        <p class="text-sm font-bold uppercase">Your cart is empty</p>
        <p class="text-xs text-gray-400 mt-1">Pick your favourite brew to get started!</p>
      </div>
    `;
  }

  let subtotal = 0;
  cart.forEach(item => {
    const itemTotal = item.unitPrice * item.quantity;
    subtotal += itemTotal;

    const addonsText = item.addons.length > 0 
      ? item.addons.map(a => a.name).join(', ') 
      : 'No extra add-ons';

    const elem = document.createElement('div');
    elem.className = "flex gap-3 bg-gray-50 p-3 rounded-2xl border border-gray-100 relative";
    elem.innerHTML = `
      <img src="${item.img}" class="w-16 h-16 rounded-xl object-cover" />
      <div class="flex-1">
        <div class="flex justify-between items-start">
          <h4 class="font-extrabold text-xs uppercase">${item.name}</h4>
          <button onclick="removeCartItem('${item.cartId}')" class="text-gray-400 hover:text-red-500 text-xs">
            <i class="fa-solid fa-trash"></i>
          </button>
        </div>
        <div class="text-[10px] text-gray-500 font-medium">Size: ${formatCupSize(item.size)}</div>
        <div class="text-[10px] text-gray-400 truncate max-w-[180px]">${addonsText}</div>
        
        <div class="flex justify-between items-center mt-2">
          <div class="flex items-center border rounded-full bg-white text-xs">
            <button onclick="changeCartQty('${item.cartId}', -1)" class="px-2 py-0.5 hover:bg-gray-100 font-bold">-</button>
            <span class="px-2 font-black">${item.quantity}</span>
            <button onclick="changeCartQty('${item.cartId}', 1)" class="px-2 py-0.5 hover:bg-gray-100 font-bold">+</button>
          </div>
          <span class="font-black text-xs">₱${itemTotal}</span>
        </div>
      </div>
    `;
    container.appendChild(elem);
  });

  const deliveryFee = subtotal > 0 ? 49 : 0;
  document.getElementById('cartSubtotal').innerText = `₱${subtotal}`;
  document.getElementById('cartTotal').innerText = `₱${subtotal + deliveryFee}`;
}

function removeCartItem(cartId) {
  cart = cart.filter(i => i.cartId !== cartId);
  updateCartUI();
}

function changeCartQty(cartId, delta) {
  const item = cart.find(i => i.cartId === cartId);
  if (item) {
    item.quantity += delta;
    if (item.quantity <= 0) {
      removeCartItem(cartId);
    } else {
      updateCartUI();
    }
  }
}

// Checkout Modal Handling
function openCheckoutModal() {
  if (cart.length === 0) return;
  
  const summaryContainer = document.getElementById('checkoutSummaryItems');
  summaryContainer.innerHTML = '';

  let subtotal = 0;
  cart.forEach(item => {
    const itemTotal = item.unitPrice * item.quantity;
    subtotal += itemTotal;
    const row = document.createElement('div');
    row.className = "flex justify-between py-1.5";
    row.innerHTML = `
      <span>${item.quantity}x ${item.name} (${formatCupSize(item.size)})</span>
      <span class="font-bold">₱${itemTotal}</span>
    `;
    summaryContainer.appendChild(row);
  });

  const total = subtotal + 49;
  document.getElementById('checkoutTotalPay').innerText = `₱${total}`;

  toggleCartDrawer(false);
  const modal = document.getElementById('checkoutModal');
  modal.classList.remove('opacity-0', 'pointer-events-none');
}

function closeCheckoutModal() {
  const modal = document.getElementById('checkoutModal');
  modal.classList.add('opacity-0', 'pointer-events-none');
}

// Handle Form Submit -> Launch Receipt & Live GPS Tracker
function handleCheckoutSubmit(e) {
  e.preventDefault();

  const name = document.getElementById('buyerName').value;
  const phone = document.getElementById('buyerPhone').value;
  const address = document.getElementById('buyerAddress').value;

  let subtotal = cart.reduce((acc, i) => acc + (i.unitPrice * i.quantity), 0);
  let grandTotal = subtotal + 49;

  document.getElementById('rcptCustomer').innerText = name || 'Besh Customer';
  document.getElementById('rcptPhone').innerText = phone || '0917-000-0000';
  document.getElementById('rcptAddress').innerText = address || 'Metro Manila Address';
  document.getElementById('rcptTotalPay').innerText = `₱${grandTotal}`;
  document.getElementById('receiptOrderNo').innerText = `Order ID: #BK-${Math.floor(1000 + Math.random() * 9000)}`;

  closeCheckoutModal();
  cart = [];
  updateCartUI();

  toggleTrackingModal(true);
}

// Toggle Tracking & Receipt Modal
function toggleTrackingModal(forceOpen = false) {
  const modal = document.getElementById('trackingModal');
  const isOpen = !modal.classList.contains('opacity-0');

  if (isOpen && !forceOpen) {
    modal.classList.add('opacity-0', 'pointer-events-none');
  } else {
    modal.classList.remove('opacity-0', 'pointer-events-none');
  }
}