import React, { useState, useEffect } from 'react';
import './App.css';
import { useUser } from './UserContext';
import LoginPage from './LoginPage';

const App = () => {
  const { currentUser, logout } = useUser();


  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [isCartOpen, setIsCartOpen] = useState(false);

  useEffect(() => {
    if (currentUser) {
      const users = JSON.parse(localStorage.getItem('shopUsers') || '{}');
      if (users[currentUser] && users[currentUser].cart) {
        setCart(users[currentUser].cart);
      } else {
        setCart([]);
      }
    }
  }, [currentUser]);

  useEffect(() => {
    if (currentUser) {
      const users = JSON.parse(localStorage.getItem('shopUsers') || '{}');
      if (users[currentUser]) {
        users[currentUser].cart = cart;
        localStorage.setItem('shopUsers', JSON.stringify(users));
      }
    }
  }, [cart, currentUser]);

  if (!currentUser) {
    return <LoginPage />;
  }

  const products = [
    { 
      id: 1, 
      name: 'Wireless Headphones', 
      price: 99, 
      history: [120, 110, 105, 99],
      category: 'Audio', 
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80' 
    },
    { 
      id: 2, 
      name: 'Smart Watch', 
      price: 149, 
      history: [130, 140, 155, 149], 
      category: 'Wearables', 
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80' 
    },
    { 
      id: 3, 
      name: 'Gaming Mouse', 
      price: 49, 
      history: [55, 60, 45, 49], 
      category: 'Accessories', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTgKdFYRhv8MFnAvbBYzO9C86yCekapXizXzQ&s' 
    },
    { 
      id: 4, 
      name: 'Mechanical Keyboard', 
      price: 129, 
      history: [150, 140, 135, 129], 
      category: 'Accessories', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6ZH2tlAWeMpCMtNgvrdhTXl2hYLl7CHAE8w&s' 
    },
    { 
      id: 5, 
      name: 'Bluetooth Speaker', 
      price: 79, 
      history: [85, 85, 90, 79], 
      category: 'Audio', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9cYWSaBNIhOPF2gguIun1olGtIYrHAlOO7w&s' 
    },
    { 
      id: 6, 
      name: 'Laptop Stand', 
      price: 35, 
      history: [30, 35, 40, 35], 
      category: 'Office', 
      image: 'https://m.media-amazon.com/images/I/61AS07l2cBL._AC_UF1000,1000_QL80_.jpg' 
    },
    { 
      id: 8, 
      name: 'Desk Lamp', 
      price: 55, 
      history: [65, 60, 58, 55], 
      category: 'Office', 
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjs8JJLwf15qvNGRD8KPj1UkzacPJnlQYeOg&s' 
    },
    { 
      id: 9, 
      name: 'Noise Cancelling Earbuds', 
      price: 69, 
      history: [89, 80, 75, 69], 
      category: 'Audio', 
      image: 'https://www.boat-lifestyle.com/cdn/shop/files/ACCG6DS7WDJHGWSH_0_1024x.png?v=1727669669' 
    },
    { 
      id: 12, 
      name: 'Fitness Tracker Band', 
      price: 39, 
      history: [55, 49, 42, 39], 
      category: 'Wearables', 
      image: 'https://images.unsplash.com/photo-1575311373937-040b8e1fd5b6?w=500&q=80' 
    },
    { 
      id: 13, 
      name: 'Wireless Charging Pad', 
      price: 19, 
      history: [25, 22, 20, 19], 
      category: 'Accessories', 
      image: 'https://images.unsplash.com/photo-1615526675159-e248c3021d3f?w=500&q=80' 
    },
    { 
      id: 14, 
      name: 'Ergonomic Office Chair', 
      price: 289, 
      history: [320, 310, 299, 289], 
      category: 'Office', 
      image: 'https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=500&q=80' 
    },
    { 
      id: 15, 
      name: 'Studio Microphone', 
      price: 89, 
      history: [95, 99, 92, 89], 
      category: 'Audio', 
      image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=500&q=80' 
    },
    { 
      id: 16, 
      name: '4K Action Camera', 
      price: 159, 
      history: [180, 175, 165, 159], 
      category: 'Cameras', 
      image: 'https://images.unsplash.com/photo-1502920917128-1aa500764cbd?w=500&q=80' 
    },
    { 
      id: 18, 
      name: 'External SSD 1TB', 
      price: 79, 
      history: [99, 90, 85, 79], 
      category: 'Storage', 
      image: 'https://poojaelectronics.in/storage/2024/08/Samsung-2TB-T9-Portable-SSD-Black-Online-Buy-India_02.webp' 
    },
    { 
      id: 19, 
      name: 'Mini Projector', 
      price: 179, 
      history: [200, 195, 185, 179], 
      category: 'Displays', 
      image: 'https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=500&q=80' 
    },
    { 
      id: 20, 
      name: 'Wireless Mouse', 
      price: 59, 
      history: [65, 62, 60, 59], 
      category: 'Accessories', 
      image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80' 
    },
    { 
      id: 21, 
      name: 'Gaming Headset Pro', 
      price: 119, 
      history: [140, 135, 125, 119], 
      category: 'Audio', 
      image: 'https://images.unsplash.com/photo-1599669454699-248893623440?w=500&q=80' 
    },
    { 
      id: 23, 
      name: 'iPad M4 Pro', 
      price: 220, 
      history: [225, 230, 235, 220],
      category: 'Office', 
      image: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?w=500&q=80' 
    },
    { 
      id: 24, 
      name: 'Drone Mini 4K', 
      price: 249, 
      history: [299, 280, 265, 249], 
      category: 'Cameras', 
      image: 'https://images.unsplash.com/photo-1507582020474-9a35b7d455d9?w=500&q=80' 
    },
    { 
      id: 25, 
      name: 'Power Bank 20000mAh', 
      price: 34, 
      history: [42, 40, 38, 34], 
      category: 'Accessories', 
      image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=500&q=80' 
    },
    { 
      id: 26, 
      name: 'Curved Monitor 27"', 
      price: 329, 
      history: [380, 365, 345, 329], 
      category: 'Displays', 
      image: 'https://www.primeabgb.com/wp-content/uploads/2025/08/LC27T550FDWXXL-2.jpg' 
    },
    { 
      id: 27, 
      name: 'Wireless Keyboard Slim', 
      price: 59, 
      history: [70, 68, 62, 59], 
      category: 'Accessories', 
      image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80' 
    },
  ];

  const bestDealIds = [1, 7, 12, 18, 24, 26];

  const filteredProducts = products.filter((product) =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (indexToRemove) => {
    const newCart = cart.filter((_, index) => index !== indexToRemove);
    setCart(newCart);
  };

  const cartTotal = cart.reduce((total, item) => total + item.price, 0);

  const handleCheckout = () => {
    if (cart.length === 0) {
      alert("Your cart is empty! Add some items first.");
      return;
    }
    alert(`Checkout Successful! Total: $${cartTotal}. Thank you for shopping.`);
    setCart([]);
    setIsCartOpen(false);
  };

  return (
    <div className="shop-container">
      {/* --- NAVBAR --- */}
      <nav className="navbar">
        <div className="logo">TechStore</div>
        
        {/* Search Bar */}
        <div className="search-container">
          <span className="search-icon">🔍</span>
          <input 
            type="text" 
            placeholder="Search gadgets..." 
            className="search-input"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* User Greeting + Logout + Cart */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ fontWeight: 600, color: '#64748b', fontSize: '0.9rem' }}>
            Hi, {currentUser}
          </span>
          <button className="logout-btn" onClick={logout}>Logout</button>

          {/* Cart Trigger Button */}
          <div className="cart-trigger" onClick={() => setIsCartOpen(true)}>
            <span className="cart-icon">🛒</span>
            <span className="cart-count">{cart.length}</span>
          </div>
        </div>
      </nav>

      {/* --- HERO SECTION --- */}
      <header className="hero">
        <h1>Future Tech Today</h1>
        <p>Curated gadgets for the modern developer. Track prices and save.</p>
      </header>

      {/* --- PRODUCT GRID --- */}
      <main className="product-grid">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => {
            const isBestDeal = bestDealIds.includes(product.id);

            const maxPrice = Math.max(...product.history);
            const minPrice = Math.min(...product.history);
            const priceRange = maxPrice - minPrice;

            return (
              <div key={product.id} className="product-card">
                {/* Sale Badge — only for hand-picked items */}
                {isBestDeal && <div className="badge">BEST DEAL</div>}
                
                <img src={product.image} alt={product.name} />
                
                <div className="product-info">
                  <small>{product.category}</small>
                  <h3>{product.name}</h3>
                  <p className="price">${product.price}</p>

                  {/* Price Chart Visualization */}
                  <div className="price-chart-container">
                    <div className="chart-bars">
                      {product.history.map((pricePoint, index) => {
                        const barHeight = priceRange === 0 
                          ? 50
                          : 15 + ((pricePoint - minPrice) / priceRange) * 85;
                        
                        return (
                          <div 
                            key={index} 
                            className="price-bar" 
                            style={{ height: `${barHeight}%` }}
                            title={`Week ${index + 1}: $${pricePoint}`}
                          ></div>
                        );
                      })}
                    </div>
                    <span className="chart-label">Price Trend (4 Weeks)</span>
                  </div>

                  <button className="add-btn" onClick={() => addToCart(product)}>
                    Add to Cart
                  </button>
                </div>
              </div>
            );
          })
        ) : (
          <div className="no-results">
            <h3>No products found for "{searchQuery}"</h3>
            <button onClick={() => setSearchQuery("")}>Clear Search</button>
          </div>
        )}
      </main>

      {/* --- CART MODAL (POPUP) --- */}
      {isCartOpen && (
        <div className="cart-overlay">
          <div className="cart-modal">
            <div className="cart-header">
              <h2>Your Shopping Cart</h2>
              <button className="close-btn" onClick={() => setIsCartOpen(false)}>×</button>
            </div>
            
            {cart.length === 0 ? (
              <p className="empty-msg">Your cart is weightless.....</p>
            ) : (
              <div className="cart-body">
                {cart.map((item, index) => (
                  <div key={index} className="cart-item">
                    <span>{item.name}</span>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <span className="cart-item-price">${item.price}</span>
                      <button className="remove-btn" onClick={() => removeFromCart(index)}>Delete</button>
                    </div>
                  </div>
                ))}
                
                <div className="cart-footer">
                  <div className="total-row">
                    <span>Total:</span>
                    <span>${cartTotal}</span>
                  </div>
                  <button className="checkout-btn" onClick={handleCheckout}>
                    Checkout Now
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default App;