<template>
  <div class="mens-page">
    <!-- Sidebar -->
    <aside class="sidebar">
      <h3>FILTERS</h3>

      <!-- Category Filter -->
      <div class="filter-block">
        <h4>Categories</h4>
        <label v-for="cat in menCategories" :key="cat.value">
          <input
            type="checkbox"
            :value="cat.value"
            v-model="selectedCategories"
          />
          {{ cat.label }}
        </label>
      </div>

      <!-- Price Filter -->
      <div class="filter-block">
        <h4>Price</h4>
        <input type="range" min="0" max="3000" v-model="maxPrice" />
        <p>Up to ₹{{ maxPrice }}</p>
      </div>

      <!-- Rating Filter -->
      <div class="filter-block">
        <h4>Rating</h4>
        <select v-model="minRating">
          <option value="0">All</option>
          <option value="3">3 ★ & above</option>
          <option value="4">4 ★ & above</option>
        </select>
      </div>
    </aside>

    <!-- Products -->
    <section class="products">
      <h2>Men's Fashion</h2>
      <p>{{ filteredProducts.length }} items found</p>

      <div class="grid">
        <div class="card" v-for="p in filteredProducts" :key="p.id">
          <div class="card-image">
            <img :src="p.thumbnail" />
            <button 
              class="wishlist-btn" 
              :class="{ active: isInWishlist(p.id) }"
              @click="toggleWishlist(p)"
              :title="isInWishlist(p.id) ? 'Remove from wishlist' : 'Add to wishlist'"
            >
              <i class="fa-solid fa-heart"></i>
            </button>
          </div>
          <div class="info">
            <h4>{{ p.brand }}</h4>
            <p>{{ p.title }}</p>
            <div class="rating">⭐ {{ p.rating }}</div>
            <div class="price">
              ₹{{ p.price }}
              <span>{{ p.discountPercentage }}% OFF</span>
            </div>
            <button class="add-to-bag-btn" @click="addToBag(p)">
              <i class="fa-solid fa-bag-shopping" style="color: white;"></i>  Add to Bag
            </button>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { store } from '../store.js'

export default {
  name: "MensCategory",

  data() {
    return {
      products: [],
      selectedCategories: [],
      maxPrice: 3000,
      minRating: 0,
      store,

      menCategories: [
        { label: "Shirts", value: "mens-shirts" },
        { label: "Shoes", value: "mens-shoes" },
        { label: "Watches", value: "mens-watches" }
      ]
    };
  },

  mounted() {
    this.fetchMensProducts();
  },

  computed: {
    filteredProducts() {
      return this.products.filter(p => {
        const categoryMatch =
          this.selectedCategories.length === 0 ||
          this.selectedCategories.includes(p.category);

        const priceMatch = p.price <= this.maxPrice;
        const ratingMatch = p.rating >= this.minRating;

        return categoryMatch && priceMatch && ratingMatch;
      });
    }
  },

  methods: {
    async fetchMensProducts() {
      try {
        const urls = [
          "https://dummyjson.com/products/category/mens-shirts",
          "https://dummyjson.com/products/category/mens-shoes",
          "https://dummyjson.com/products/category/mens-watches"
        ];

        const responses = await Promise.all(
          urls.map(url => fetch(url).then(res => res.json()))
        );

        this.products = responses.flatMap(r => r.products);
      } catch (err) {
        console.error("Error fetching men products", err);
      }
    },

    toggleWishlist(item) {
      this.store.toggleWishlist(item);
    },

    isInWishlist(itemId) {
      return this.store.isInWishlist(itemId);
    },

    addToBag(item) {
      this.store.addToBag(item);
      alert('Item added to bag!');
    }
  }
};
</script>
<style scoped>
.mens-page {
  display: flex;
  background: #f5f5f5;
  font-family: Arial, sans-serif;
}

/* Sidebar */
.sidebar {
  width: 240px;
  padding: 20px;
  background: #fff;
}

.filter-block {
  margin-bottom: 20px;
}

.filter-block h4 {
  margin-bottom: 10px;
}

.filter-block label {
  display: block;
  font-size: 14px;
  margin-bottom: 6px;
}

/* Products */
.products {
  flex: 1;
  padding: 20px;
}

.products h2 {
  font-size: 24px;
}

.grid {
  margin-top: 20px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 20px;
}

/* Card */
.card {
  background: #fff;
  border-radius: 6px;
  overflow: hidden;
  transition: transform 0.3s;
  cursor: pointer;
}

.card:hover {
  transform: translateY(-5px);
}

.card-image {
  position: relative;
  width: 100%;
  height: 260px;
  overflow: hidden;
}

.card-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.wishlist-btn {
  position: absolute;
  top: 10px;
  right: 10px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: white;
  border: none;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 18px;
  color: #6C6F7B;
  transition: 0.3s ease;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.wishlist-btn:hover {
  background: #FF3F6C;
  color: white;
  transform: scale(1.1);
}

.wishlist-btn.active {
  background: #FF3F6C;
  color: white;
}

.info {
  padding: 10px;
}

.info h4 {
  font-size: 14px;
  font-weight: bold;
}

.info p {
  font-size: 13px;
  color: #555;
}

.rating {
  font-size: 12px;
  margin: 5px 0;
}

.price {
  font-weight: bold;
  margin-bottom: 8px;
}

.price span {
  color: #ff3f6c;
  font-size: 12px;
  margin-left: 5px;
}

.add-to-bag-btn {
  width: 100%;
  padding: 8px;
  background: #FF3F6C;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s ease;
}

.add-to-bag-btn:hover {
  background: #E63A5C;
}

@media (max-width: 1200px) {
  .mens-page {
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
    height: auto;
    padding: 15px;
    border-bottom: 1px solid #e5e5e5;
    border-right: none;
  }

  .products {
    padding: 15px;
  }

  .grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 15px;
  }
}

@media (max-width: 768px) {
  .mens-page {
    display: flex;
    flex-direction: column;
  }

  .sidebar {
    width: 100%;
    height: auto;
    padding: 12px;
    display: none;
  }

  .sidebar.open {
    display: block;
  }

  .products {
    padding: 10px;
  }

  .products h2 {
    font-size: 20px;
  }

  .grid {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 12px;
  }

  .card-image {
    height: 200px;
  }

  .info {
    padding: 8px;
  }

  .info h4 {
    font-size: 12px;
  }

  .info p {
    font-size: 11px;
  }

  .add-to-bag-btn {
    padding: 6px;
    font-size: 11px;
  }
}

@media (max-width: 480px) {
  .products {
    padding: 8px;
  }

  .products h2 {
    font-size: 18px;
  }

  .grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  .card-image {
    height: 160px;
  }

  .info {
    padding: 6px;
  }

  .info h4 {
    font-size: 11px;
  }

  .info p {
    font-size: 10px;
  }

  .rating {
    font-size: 11px;
  }

  .price {
    font-size: 10px;
  }

  .add-to-bag-btn {
    padding: 5px;
    font-size: 10px;
  }

  .wishlist-btn {
    width: 35px;
    height: 35px;
    font-size: 16px;
  }
}
</style>

