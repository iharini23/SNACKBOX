const offerCards = [
  { 
    title: "First Order Discount", 
    badge: "-30%", 
    image: "https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  { 
    title: "Vegan Discount", 
    badge: "-20%", 
    image: "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=400"
  },
  { 
    title: "Free Ice Cream Offer", 
    badge: "-100%", 
    image: "https://images.pexels.com/photos/1362534/pexels-photo-1362534.jpeg?auto=compress&cs=tinysrgb&w=400"
  }
];

const menuTabs = [
  "Offers",
  "Burgers",
  "Fries",
  "Snacks",
  "Salads",
  "Cold drinks",
  "Happy Meal",
  "Desserts",
  "Hot drinks",
  "Sauces",
  "Other"
];

const burgerImages = [
  "https://images.pexels.com/photos/1633578/pexels-photo-1633578.jpeg?auto=compress&cs=tinysrgb&w=200",
  "https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=200",
  "https://images.pexels.com/photos/1556688/pexels-photo-1556688.jpeg?auto=compress&cs=tinysrgb&w=200",
  "https://images.pexels.com/photos/1639565/pexels-photo-1639565.jpeg?auto=compress&cs=tinysrgb&w=200",
  "https://images.pexels.com/photos/580612/pexels-photo-580612.jpeg?auto=compress&cs=tinysrgb&w=200",
  "https://images.pexels.com/photos/1552641/pexels-photo-1552641.jpeg?auto=compress&cs=tinysrgb&w=200"
];

const friesImages = [
  "https://images.pexels.com/photos/1893555/pexels-photo-1893555.jpeg?auto=compress&cs=tinysrgb&w=200",
  "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg?auto=compress&cs=tinysrgb&w=200",
  "https://images.pexels.com/photos/115740/pexels-photo-115740.jpeg?auto=compress&cs=tinysrgb&w=200",
  "https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg?auto=compress&cs=tinysrgb&w=200",
  "https://images.pexels.com/photos/1907228/pexels-photo-1907228.jpeg?auto=compress&cs=tinysrgb&w=200",
  "https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=200"
];

const drinkImages = [
  "https://images.pexels.com/photos/338713/pexels-photo-338713.jpeg?auto=compress&cs=tinysrgb&w=200",
  "https://images.pexels.com/photos/1552630/pexels-photo-1552630.jpeg?auto=compress&cs=tinysrgb&w=200",
  "https://images.pexels.com/photos/434295/pexels-photo-434295.jpeg?auto=compress&cs=tinysrgb&w=200",
  "https://images.pexels.com/photos/1571878/pexels-photo-1571878.jpeg?auto=compress&cs=tinysrgb&w=200",
  "https://images.pexels.com/photos/2853226/pexels-photo-2853226.jpeg?auto=compress&cs=tinysrgb&w=200",
  "https://images.pexels.com/photos/1938347/pexels-photo-1938347.jpeg?auto=compress&cs=tinysrgb&w=200"
];

const menuItems = Array.from({ length: 6 }, (_, index) => ({
  title: "The classics for 3",
  desc: "1 Big Mac, 1 fries, 1 drink",
  price: "GBP 23.10",
  id: index
}));

const reviews = [
  {
    name: "Emily",
    date: "24th September, 2023",
    rating: 4.8,
    text: "The product quality was outstanding; the efficiency of the delivery was impressive."
  },
  {
    name: "John",
    date: "24th September, 2023",
    rating: 4.6,
    text: "The order arrived quickly, the staff was polite, and the food was warm."
  },
  {
    name: "Sara",
    date: "24th September, 2023",
    rating: 4.7,
    text: "Great experience overall. The offer section helped me save a lot."
  }
];

const similar = ["McDonald's", "Papa Johns", "KFC", "Texas Chicken", "Burger King", "Shawarma"];

export default function Home() {
  return (
    <div className="pb-8">
      <section className="relative overflow-hidden bg-slate-900 text-white">
        <div className="container-max grid gap-6 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div className="flex flex-col justify-center gap-6">
            <div className="flex items-center gap-3 text-sm text-slate-300">
              <span className="font-medium">I'm lovin' it!</span>
            </div>
            <div>
              <h1 className="text-4xl font-bold sm:text-5xl">McDonald's East London</h1>
            </div>
            <div className="flex items-center gap-4 text-sm">
              <span className="rounded-full bg-brand-500 px-4 py-2 font-medium">Minimum Order: 12 GBP</span>
              <span className="rounded-full border border-white/30 px-4 py-2">Delivery in 20-25 minutes</span>
            </div>
          </div>
          <div className="relative flex items-center justify-center lg:justify-end">
            <div className="absolute right-4 top-4 z-10 rounded-2xl bg-white px-6 py-4 text-slate-900 shadow-lg">
              <p className="text-3xl font-bold">3.4</p>
              <p className="text-sm text-slate-500">1,360 reviews</p>
            </div>
            <img 
              src="https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=600" 
              alt="McDonald's burger meal"
              className="h-64 w-full rounded-3xl object-cover"
            />
          </div>
        </div>
      </section>

      <div className="container-max px-4 sm:px-6 lg:px-8">

      <section className="mt-8">
        <h2 className="mb-4 text-xl font-bold">All Offers from McDonald's East London</h2>
        <div className="mb-6 flex items-center justify-between gap-4 overflow-x-auto rounded-full bg-brand-500 p-2">
          {menuTabs.map((tab, idx) => (
            <button
              key={tab}
              className={`whitespace-nowrap rounded-full px-4 py-2 text-sm font-medium ${
                idx === 0 ? "bg-white text-brand-600" : "text-white hover:bg-white/10"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        <div className="mb-6 flex justify-end">
          <input
            className="w-full max-w-xs rounded-full border border-slate-300 bg-white px-4 py-2 text-sm"
            placeholder="Search from menu..."
          />
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {offerCards.map((offer) => (
            <div key={offer.title} className="card overflow-hidden relative">
              <div className="absolute right-3 top-3 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md">
                <span className="text-xl">+</span>
              </div>
              <img 
                src={offer.image} 
                alt={offer.title}
                className="h-44 w-full object-cover"
              />
              <div className="p-4">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-sm font-bold">{offer.title}</p>
                  <span className="rounded-full bg-yellow-400 px-2 py-1 text-xs font-bold">
                    {offer.badge}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="mb-4 text-xl font-bold">Burgers</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {menuItems.map((item) => (
            <div key={item.id} className="card flex items-center gap-4 p-4">
              <img 
                src={burgerImages[item.id]} 
                alt={item.title}
                className="h-20 w-20 flex-shrink-0 rounded-xl object-cover"
              />
              <div className="flex-1">
                <p className="text-sm font-bold">{item.title}</p>
                <p className="text-xs text-slate-500">{item.desc}</p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-sm font-bold">{item.price}</span>
                  <button className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-lg text-white">+</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="mb-4 text-xl font-bold">Fries</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {menuItems.map((item) => (
            <div key={`fries-${item.id}`} className="card flex items-center gap-4 p-4">
              <img 
                src={friesImages[item.id]} 
                alt={item.title}
                className="h-20 w-20 flex-shrink-0 rounded-xl object-cover"
              />
              <div className="flex-1">
                <p className="text-sm font-bold">{item.title}</p>
                <p className="text-xs text-slate-500">{item.desc}</p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-sm font-bold">{item.price}</span>
                  <button className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-lg text-white">+</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-10">
        <h2 className="mb-4 text-xl font-bold">Cold Drinks</h2>
        <div className="grid gap-4 md:grid-cols-3">
          {menuItems.map((item) => (
            <div key={`drinks-${item.id}`} className="card flex items-center gap-4 p-4">
              <img 
                src={drinkImages[item.id]} 
                alt={item.title}
                className="h-20 w-20 flex-shrink-0 rounded-xl object-cover"
              />
              <div className="flex-1">
                <p className="text-sm font-bold">{item.title}</p>
                <p className="text-xs text-slate-500">{item.desc}</p>
                <div className="mt-2 flex items-center justify-between">
                  <span className="text-sm font-bold">{item.price}</span>
                  <button className="flex h-8 w-8 items-center justify-center rounded-full bg-slate-900 text-lg text-white">+</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-12 grid gap-6 lg:grid-cols-3">
        <div className="card p-6">
          <div className="mb-3 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-500 text-white">📍</div>
            <p className="font-bold">Delivery Information</p>
          </div>
          <ul className="space-y-1 text-sm text-slate-600">
            <li><span className="font-medium">Monday:</span> 12:00 AM–8:00 AM, 8:00 AM–2:00 AM</li>
            <li><span className="font-medium">Tuesday:</span> 8:00 AM–3:00 AM</li>
            <li><span className="font-medium">Wednesday:</span> 8:00 AM–2:00 AM</li>
            <li><span className="font-medium">Thursday:</span> 8:00 AM–3:00 AM</li>
            <li><span className="font-medium">Friday:</span> 8:00 AM–3:00 AM</li>
          </ul>
        </div>
        <div className="card p-6">
          <div className="mb-3 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-500 text-white">📞</div>
            <p className="font-bold">Contact Information</p>
          </div>
          <ul className="space-y-1 text-sm text-slate-600">
            <li><span className="font-medium">Phone:</span> +934443-43</li>
            <li><span className="font-medium">Website:</span> http://mcdonalds.uk/</li>
            <li><span className="font-medium">WhatsApp:</span> Available</li>
          </ul>
        </div>
        <div className="card bg-slate-900 p-6 text-white">
          <div className="mb-3 flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/20 text-white">⏰</div>
            <p className="font-bold">Operational Times</p>
          </div>
          <ul className="space-y-1 text-sm text-slate-300">
            <li><span className="font-medium">Monday:</span> 8:00 AM–2:00 AM</li>
            <li><span className="font-medium">Tuesday:</span> 8:00 AM–2:00 AM</li>
            <li><span className="font-medium">Wednesday:</span> 8:00 AM–2:00 AM</li>
            <li><span className="font-medium">Thursday:</span> 8:00 AM–2:00 AM</li>
            <li><span className="font-medium">Friday:</span> 8:00 AM–2:00 AM</li>
          </ul>
        </div>
      </section>

      <section className="mt-10 grid gap-6 lg:grid-cols-[1fr_2fr]">
        <div className="card bg-slate-900 p-6 text-white">
          <p className="text-lg font-bold">McDonald's</p>
          <p className="mt-2 text-sm">South London</p>
          <p className="mt-4 text-sm text-slate-300">Tooley St, London Bridge, London SE1 2TF, United Kingdom</p>
          <p className="mt-2 text-sm text-slate-300">Phone number</p>
          <p className="text-sm font-medium">+934443-43</p>
          <p className="mt-2 text-sm text-slate-300">Website</p>
          <p className="text-sm font-medium">http://mcdonalds.uk/</p>
        </div>
        <div className="card relative h-64 overflow-hidden bg-slate-200 lg:h-auto">
          <div className="absolute right-4 top-4 flex h-12 w-12 items-center justify-center rounded-full bg-brand-500 text-white shadow-lg">
            ↗
          </div>
          <div className="h-full w-full bg-gradient-to-br from-blue-100 to-green-100"></div>
        </div>
      </section>

      <section className="mt-10">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-xl font-bold">Customer Reviews</h2>
          <div className="flex gap-2">
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500 text-white">←</button>
            <button className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-500 text-white">→</button>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3">
          {reviews.map((review) => (
            <div key={review.name} className="card border-2 border-slate-200 p-6">
              <div className="mb-3 flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-orange-200 to-yellow-200 font-bold">
                  {review.name[0]}
                </div>
                <div>
                  <p className="font-bold">{review.name}</p>
                  <p className="text-xs text-slate-400">{review.date}</p>
                </div>
              </div>
              <div className="mb-2 flex gap-1">
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i} className="text-yellow-400">★</span>
                ))}
              </div>
              <p className="text-sm text-slate-600">{review.text}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 flex items-center justify-center">
          <div className="rounded-2xl bg-slate-100 px-8 py-6 text-center">
            <p className="text-4xl font-bold text-slate-900">3.4</p>
            <p className="text-sm text-slate-500">1,360 reviews</p>
          </div>
        </div>
      </section>

      <section className="mt-10">
        <h2 className="mb-4 text-xl font-bold">Similar Restaurants</h2>
        <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-6">
          <div className="card overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/5920742/pexels-photo-5920742.jpeg?auto=compress&cs=tinysrgb&w=200" 
              alt="McDonald's"
              className="h-24 w-full object-cover"
            />
            <p className="p-2 text-center text-xs font-bold">McDonald's</p>
          </div>
          <div className="card overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/1566837/pexels-photo-1566837.jpeg?auto=compress&cs=tinysrgb&w=200" 
              alt="Papa Johns"
              className="h-24 w-full object-cover"
            />
            <p className="p-2 text-center text-xs font-bold">Papa Johns</p>
          </div>
          <div className="card overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/2271107/pexels-photo-2271107.jpeg?auto=compress&cs=tinysrgb&w=200" 
              alt="KFC"
              className="h-24 w-full object-cover"
            />
            <p className="p-2 text-center text-xs font-bold">KFC</p>
          </div>
          <div className="card overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/2338407/pexels-photo-2338407.jpeg?auto=compress&cs=tinysrgb&w=200" 
              alt="Texas Chicken"
              className="h-24 w-full object-cover"
            />
            <p className="p-2 text-center text-xs font-bold">Texas Chicken</p>
          </div>
          <div className="card overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/1639557/pexels-photo-1639557.jpeg?auto=compress&cs=tinysrgb&w=200" 
              alt="Burger King"
              className="h-24 w-full object-cover"
            />
            <p className="p-2 text-center text-xs font-bold">Burger King</p>
          </div>
          <div className="card overflow-hidden">
            <img 
              src="https://images.pexels.com/photos/2233729/pexels-photo-2233729.jpeg?auto=compress&cs=tinysrgb&w=200" 
              alt="Shawarma"
              className="h-24 w-full object-cover"
            />
            <p className="p-2 text-center text-xs font-bold">Shawarma</p>
          </div>
        </div>
      </section>
      </div>
    </div>
  );
}
