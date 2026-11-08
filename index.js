const express = require('express');
const http = require('http');
const { Server } = require('socket.io');


const app = express();
const server = http.createServer(app);
const io = new Server(server);


const PORT = process.env.PORT || 3000;


app.use(express.json());




const menu = [
  { id: 'esp-1', name: 'Americano', category: 'coffee', prices: { '12oz': 50, '16oz': 65, '20oz': 80 }, status: 'in_stock', image: 'https://scontent.fmnl30-2.fna.fbcdn.net/v/t39.30808-6/554106266_650299444813866_6383928518697200753_n.jpg' },
  { id: 'esp-2', name: 'Kape Latte', category: 'coffee', prices: { '12oz': 60, '16oz': 75, '20oz': 90 }, status: 'in_stock', image: 'https://scontent.fmnl30-2.fna.fbcdn.net/v/t39.30808-6/552971298_650299404813870_4969909308988411767_n.jpg' },
  { id: 'esp-3', name: 'Spanish Latte', category: 'coffee', prices: { '12oz': 60, '16oz': 75, '20oz': 90 }, status: 'in_stock', image: 'https://scontent.fmnl30-2.fna.fbcdn.net/v/t39.30808-6/557597075_654110364432774_997547291093332550_n.jpg' },
  { id: 'esp-4', name: 'Mocha', category: 'coffee', prices: { '12oz': 65, '16oz': 80, '20oz': 95 }, status: 'in_stock', image: 'https://scontent.fmnl30-3.fna.fbcdn.net/v/t39.30808-6/552612276_650299401480537_6362648923000505226_n.jpg' },
  { id: 'esp-5', name: 'Caramel Macchiato', category: 'coffee', prices: { '12oz': 65, '16oz': 80, '20oz': 95 }, status: 'in_stock', image: 'https://scontent.fmnl30-2.fna.fbcdn.net/v/t39.30808-6/554831015_650299338147210_8416857444036532150_n.jpg' },
  { id: 'esp-6', name: 'Barista\'s Choice', category: 'coffee', prices: { '12oz': 70, '16oz': 85, '20oz': 100 }, status: 'in_stock', image: 'https://scontent.fmnl30-1.fna.fbcdn.net/v/t39.30808-6/551986460_650299334813877_8766383431245418519_n.jpg' },
  { id: 'milk-1', name: 'Chocolate Milk', category: 'non_caffeine', prices: { '12oz': 60, '16oz': 75, '20oz': 90 }, status: 'in_stock', image: 'https://scontent.fmnl30-2.fna.fbcdn.net/v/t39.30808-6/552582504_650299278147216_436880854720482997_n.jpg' },
  { id: 'milk-2', name: 'Strawberry Milk', category: 'non_caffeine', prices: { '12oz': 60, '16oz': 75, '20oz': 90 }, status: 'in_stock', image: 'https://scontent.fmnl30-2.fna.fbcdn.net/v/t39.30808-6/554541581_650299274813883_2079253591525020714_n.jpg' },
  { id: 'matcha-1', name: 'Matcha Latte', category: 'frappe', prices: { '12oz': 60, '16oz': 75, '20oz': 90 }, status: 'in_stock', image: 'https://scontent.fmnl30-2.fna.fbcdn.net/v/t39.30808-6/554338613_650299218147222_6680603097871671539_n.jpg' },
  { id: 'tea-1', name: 'Besh Tea', category: 'milktea', prices: { '12oz': 55, '16oz': 70, '20oz': 85 }, status: 'in_stock', image: 'https://scontent.fmnl30-1.fna.fbcdn.net/v/t39.30808-6/552377790_650299141480563_4448525756662662196_n.jpg' }
];


const addOnsList = {
  'espresso_shot': { name: 'Espresso Shot', price: 25 },
  'milk_syrup': { name: 'Milk Syrup', price: 20 },
  'milk': { name: 'Milk', price: 20 },
  'caramel_syrup': { name: 'Caramel Syrup', price: 15 },
  'chocolate_syrup': { name: 'Chocolate Syrup', price: 15 },
  'pearls_crystal': { name: 'Pearls or Crystal', price: 15 },
  'sugar': { name: 'Sugar', price: 10 }
};


const orders = [];
const STORE_LOCATION = { lat: 14.6025, lng: 121.0135, address: "V. Mapa St., Sta. Mesa, Manila" };






app.get('/api/menu', (req, res) => {
  res.json({ menu, addOnsList });
});


app.post('/api/orders/checkout', (req, res) => {
  const { buyer, items, deliveryOption, paymentMethod } = req.body;
  if (!buyer || !items || items.length === 0) {
    return res.status(400).json({ error: 'Invalid order details.' });
  }


  let subtotal = 0;
  const processedItems = items.map(item => {
    const menuItem = menu.find(m => m.id === item.productId || m.name === item.name);
    const size = item.size || '16oz';
    const basePrice = menuItem ? menuItem.prices[size] : 75;
   
    let addonsTotal = 0;
    if (item.selectedAddons) {
      item.selectedAddons.forEach(a => { if (addOnsList[a]) addonsTotal += addOnsList[a].price; });
    }


    const itemTotal = (basePrice + addonsTotal) * (item.quantity || 1);
    subtotal += itemTotal;
    return { name: item.name, size, quantity: item.quantity, totalPrice: itemTotal };
  });


  const deliveryFee = deliveryOption === 'pickup' ? 0 : 49;
  const orderId = `BK-${Math.floor(100000 + Math.random() * 900000)}`;


  const newOrder = {
    orderId,
    createdAt: new Date(),
    status: 'On The Way',
    buyer,
    items: processedItems,
    pricing: { subtotal, deliveryFee, grandTotal: subtotal + deliveryFee },
    rider: { name: 'Kuya Mark (Besh Rider)', lat: STORE_LOCATION.lat, lng: STORE_LOCATION.lng }
  };


  orders.push(newOrder);




  simulateGpsTracker(orderId);


  res.status(201).json({ message: 'Success', order: newOrder });
});




app.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Besh Kape | Official Store</title>
      <script src="https://cdn.tailwindcss.com"></script>
      <script src="/socket.io/socket.io.js"></script>
    </head>
    <body class="bg-white text-black font-sans antialiased">


      <!-- TOP BANNER -->
      <div class="bg-neutral-100 text-xs py-2 text-center font-medium tracking-wide">
        FREE DELIVERY FOR ORDERS OVER ₱500 • VISIT US AT V. MAPA ST., STA. MESA
      </div>


      <!-- NAVBAR -->
      <nav class="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-neutral-200 px-6 py-4 flex items-center justify-between">
        <div class="flex items-center space-x-3">
          <img src="https://scontent.fmnl30-1.fna.fbcdn.net/v/t39.30808-6/599744491_715442981632845_8117399899905375086_n.jpg" class="w-10 h-10 rounded-full object-cover">
          <span class="font-black text-xl tracking-tighter">BESH KAPE</span>
        </div>
        <button onclick="openCart()" class="bg-black text-white px-5 py-2 rounded-full font-medium text-sm hover:bg-neutral-800 transition">
          Cart (<span id="cart-count">0</span>)
        </button>
      </nav>


      <!-- HERO BANNER -->
      <header class="relative bg-neutral-900 text-white py-24 px-6 text-center overflow-hidden">
        <div class="absolute inset-0 opacity-40 bg-cover bg-center" style="background-image: url('https://scontent.fmnl30-2.fna.fbcdn.net/v/t39.30808-6/557597075_654110364432774_997547291093332550_n.jpg');"></div>
        <div class="relative z-10 max-w-2xl mx-auto">
          <h1 class="text-5xl font-black uppercase tracking-tight mb-4">A LOVE LANGUAGE IN EVERY CUP.</h1>
          <p class="text-neutral-300 text-lg mb-8">Handcrafted espresso, milk teas, and refreshers made fresh in Sta. Mesa.</p>
          <a href="#menu-section" class="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-neutral-200 transition">ORDER NOW</a>
        </div>
      </header>


      <!-- MENU CATALOG -->
      <main id="menu-section" class="max-w-7xl mx-auto px-6 py-16">
        <h2 class="text-3xl font-black tracking-tight mb-8">EXPLORE MENU</h2>
        <div id="product-grid" class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <!-- Dynamically Loaded from Backend -->
        </div>
      </main>


      <!-- SLIDING CART DRAWER -->
      <div id="cart-drawer" class="fixed inset-y-0 right-0 z-50 w-full max-w-md bg-white shadow-2xl p-6 transform translate-x-full transition-transform duration-300 flex flex-col justify-between">
        <div>
          <div class="flex justify-between items-center mb-6">
            <h3 class="text-xl font-black">YOUR CART</h3>
            <button onclick="closeCart()" class="text-neutral-500 font-bold text-lg">&times;</button>
          </div>
          <div id="cart-items" class="space-y-4 overflow-y-auto max-h-[60vh]"></div>
        </div>
        <div class="border-t pt-4">
          <div class="flex justify-between font-bold text-lg mb-4">
            <span>Total:</span>
            <span id="cart-total">₱0.00</span>
          </div>
          <button onclick="openCheckout()" class="w-full bg-black text-white py-3 rounded-full font-bold hover:bg-neutral-800">CHECKOUT NOW</button>
        </div>
      </div>


      <!-- CHECKOUT MODAL -->
      <div id="checkout-modal" class="fixed inset-0 z-50 bg-black/50 hidden flex items-center justify-center p-4">
        <div class="bg-white w-full max-w-lg rounded-2xl p-6">
          <h3 class="text-xl font-black mb-4">SHOPSHOPEE CHECKOUT</h3>
          <input id="buyer-name" type="text" placeholder="Full Name" class="w-full border p-3 rounded-lg mb-3">
          <input id="buyer-phone" type="text" placeholder="Phone Number (09XXXXXXXXX)" class="w-full border p-3 rounded-lg mb-3">
          <textarea id="buyer-address" placeholder="Complete Delivery Address in Sta. Mesa" class="w-full border p-3 rounded-lg mb-4"></textarea>
          <div class="flex space-x-3">
            <button onclick="submitOrder()" class="flex-1 bg-black text-white py-3 rounded-lg font-bold">PLACE ORDER</button>
            <button onclick="closeCheckout()" class="border px-4 py-3 rounded-lg font-bold">Cancel</button>
          </div>
        </div>
      </div>


      <!-- GPS LIVE TRACKING MODAL -->
      <div id="gps-modal" class="fixed inset-0 z-50 bg-black/80 hidden flex items-center justify-center p-4">
        <div class="bg-white w-full max-w-2xl rounded-2xl p-6 text-center">
          <h3 class="text-2xl font-black mb-2">LIVE RIDER GPS TRACKING</h3>
          <p id="gps-status" class="text-sm text-neutral-600 mb-4">Rider is on the way from V. Mapa St., Sta. Mesa...</p>
          <div class="relative h-64 bg-neutral-100 rounded-xl overflow-hidden border">
            <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=800&q=80" class="w-full h-full object-cover opacity-60">
            <div id="rider-pin" class="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black text-white px-3 py-1 rounded-full text-xs font-bold animate-bounce">
              🛵 Besh Rider
            </div>
          </div>
          <button onclick="closeGps()" class="mt-6 bg-black text-white px-6 py-2 rounded-full font-bold">Close Tracking</button>
        </div>
      </div>


      <script>
        let cart = [];
        let menuData = [];


        async function loadMenu() {
          const res = await fetch('/api/menu');
          const data = await res.json();
          menuData = data.menu;
          const grid = document.getElementById('product-grid');
          grid.innerHTML = menuData.map(item => \`
            <div class="group cursor-pointer">
              <div class="bg-neutral-100 rounded-xl overflow-hidden mb-4 aspect-square">
                <img src="\${item.image}" class="w-full h-full object-cover group-hover:scale-105 transition duration-300">
              </div>
              <h3 class="font-bold text-lg">\${item.name}</h3>
              <p class="text-neutral-500 text-sm mb-3">Starts at ₱\${item.prices['12oz']}</p>
              <button onclick="addToCart('\${item.id}')" class="bg-black text-white w-full py-2 rounded-full text-sm font-medium hover:bg-neutral-800">Add to Cart</button>
            </div>
          \`).join('');
        }


        function addToCart(id) {
          const item = menuData.find(m => m.id === id);
          cart.push({ productId: item.id, name: item.name, size: '16oz', quantity: 1, basePrice: item.prices['16oz'] });
          updateCartUI();
          openCart();
        }


        function updateCartUI() {
          document.getElementById('cart-count').innerText = cart.length;
          const container = document.getElementById('cart-items');
          let total = 0;
          container.innerHTML = cart.map((item, idx) => {
            total += item.basePrice * item.quantity;
            return \`
              <div class="flex justify-between items-center border-b pb-3">
                <div>
                  <h4 class="font-bold">\${item.name}</h4>
                  <p class="text-xs text-neutral-500">₱\${item.basePrice} (16oz)</p>
                </div>
                <button onclick="removeFromCart(\${idx})" class="text-red-500 font-bold text-sm">Remove</button>
              </div>
            \`;
          }).join('');
          document.getElementById('cart-total').innerText = \`₱\${total.toFixed(2)}\`;
        }


        function removeFromCart(idx) { cart.splice(idx, 1); updateCartUI(); }
        function openCart() { document.getElementById('cart-drawer').classList.remove('translate-x-full'); }
        function closeCart() { document.getElementById('cart-drawer').classList.add('translate-x-full'); }
        function openCheckout() { closeCart(); document.getElementById('checkout-modal').classList.remove('hidden'); }
        function closeCheckout() { document.getElementById('checkout-modal').classList.add('hidden'); }
        function closeGps() { document.getElementById('gps-modal').classList.add('hidden'); }


        async function submitOrder() {
          const buyer = {
            name: document.getElementById('buyer-name').value,
            phone: document.getElementById('buyer-phone').value,
            address: document.getElementById('buyer-address').value
          };
          if(!buyer.name || !buyer.phone) { alert('Please fill in your details.'); return; }


          const res = await fetch('/api/orders/checkout', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ buyer, items: cart, deliveryOption: 'standard', paymentMethod: 'GCash' })
          });
          const data = await res.json();
          closeCheckout();
         
          // Open GPS Tracker Modal
          document.getElementById('gps-modal').classList.remove('hidden');
          const socket = io();
          socket.on('rider_update', (update) => {
            document.getElementById('gps-status').innerText = update.message;
          });
        }


        loadMenu();
      </script>
    </body>
    </html>
  `);
});




function simulateGpsTracker(orderId) {
  let step = 0;
  const interval = setInterval(() => {
    step++;
    if (step > 5) {
      io.emit('rider_update', { message: '🎉 Rider has arrived at your address in Sta. Mesa!' });
      clearInterval(interval);
      return;
    }
    io.emit('rider_update', { message: `🛵 Rider is on the way (${step * 20}% completed)...` });
  }, 3000);
}


server.listen(PORT, () => {
 
  console.log(`☕ BESH KAPE SERVER RUNNING AT: http://localhost:${PORT}`);



});