<template>
  <div class="page">
    <!-- Page Header -->
    <div class="header">
      <h2>Men's Shirts</h2>
      <p>{{ products.length }} styles found</p>
    </div>

    <!-- Product Grid -->
    <div class="grid">
      <div
        class="card"
        v-for="product in products"
        :key="product.id"
      >
        <!-- Image -->
        <div class="image-box">
          <img :src="product.thumbnail" :alt="product.title" />
          <button 
            class="wishlist-btn" 
            :class="{ active: isInWishlist(product.id) }"
            @click="toggleWishlist(product)"
            :title="isInWishlist(product.id) ? 'Remove from wishlist' : 'Add to wishlist'"
          >
            <i class="fa-solid fa-heart"></i>
          </button>
        </div>

        <!-- Details -->
        <div class="details">
          <h4 class="brand">{{ product.brand }}</h4>
          <p class="title">{{ product.title }}</p>

          <div class="rating">
            ⭐ {{ product.rating }}
          </div>

          <div class="price">
            <span class="current">₹{{ product.price }}</span>
            <span class="discount">{{ product.discountPercentage }}% OFF</span>
          </div>

          <button class="add-to-bag-btn" @click="addToBag(product)">
            <i class="fa-solid fa-bag-shopping"></i> Add to Bag
          </button>
        </div>
      </div>
    </div>

    <!-- Loader -->
    <div v-if="loading" class="loader">Loading products...</div>
  </div>
</template>
<script>
import { store } from '../store.js'

export default {
  name: "MensShirts",

  data() {
    return {
      products: [],
      loading: false,
      store
    };
  },

  mounted() {
    this.fetchProducts();
  },

  methods: {
    async fetchProducts() {
      try {
        this.loading = true;

        const res = await fetch(
          "https://dummyjson.com/products/category/mens-shoes"
        );

        const data = await res.json();
        this.products = data.products;
        console.log(this.products);

      } catch (error) {
        console.error("Failed to load products", error);
      } finally {
        this.loading = false;
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
.page {
  padding: 20px 40px;
  font-family: Arial, sans-serif;
  background: #f5f5f5;
}

/* Header */
.header {
  margin-bottom: 20px;
}

.header h2 {
  font-size: 24px;
  font-weight: 600;
}

.header p {
  color: #777;
}

/* Grid */
.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 20px;
}

/* Card */
.card {
  background: #fff;
  border-radius: 6px;
  overflow: hidden;
  transition: transform 0.3s ease;
  cursor: pointer;
}

.card:hover {
  transform: translateY(-5px);
}

/* Image */
.image-box {
  position: relative;
  height: 280px;
  overflow: hidden;
}

.image-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;
}

.card:hover img {
  transform: scale(1.08);
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

/* Details */
.details {
  padding: 12px;
}

.brand {
  font-size: 14px;
  font-weight: 700;
  margin-bottom: 4px;
}

.title {
  font-size: 13px;
  color: #555;
  margin-bottom: 6px;
}

/* Rating */
.rating {
  font-size: 12px;
  background: #e8f5e9;
  display: inline-block;
  padding: 2px 6px;
  border-radius: 4px;
  margin-bottom: 8px;
}

/* Price */
.price {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-bottom: 8px;
}

.current {
  font-weight: 700;
}

.discount {
  color: #ff3f6c;
  font-size: 12px;
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

/* Loader */
.loader {
  text-align: center;
  margin-top: 40px;
  font-size: 18px;
}

@media (max-width: 1024px) {
  .page {
    padding: 15px 20px;
  }

  .grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 15px;
  }

  .header h2 {
    font-size: 20px;
  }
}

@media (max-width: 768px) {
  .page {
    padding: 10px;
  }

  .header {
    margin-bottom: 15px;
  }

  .header h2 {
    font-size: 18px;
  }

  .header p {
    font-size: 12px;
  }

  .grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  .image-box {
    height: 200px;
  }

  .details {
    padding: 10px;
  }

  .brand {
    font-size: 12px;
  }

  .title {
    font-size: 11px;
  }

  .rating {
    font-size: 11px;
  }

  .price {
    font-size: 12px;
  }

  .add-to-bag-btn {
    padding: 6px;
    font-size: 11px;
  }

  .wishlist-btn {
    width: 35px;
    height: 35px;
    font-size: 16px;
  }
}

@media (max-width: 480px) {
  .page {
    padding: 8px;
  }

  .header h2 {
    font-size: 16px;
  }

  .header p {
    font-size: 11px;
  }

  .grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
  }

  .image-box {
    height: 160px;
  }

  .details {
    padding: 8px;
  }

  .brand {
    font-size: 11px;
  }

  .title {
    font-size: 10px;
  }

  .rating {
    font-size: 10px;
  }

  .discount {
    font-size: 10px !important;
  }

  .current {
    font-size: 11px;
  }

  .add-to-bag-btn {
    padding: 5px;
    font-size: 10px;
  }

  .wishlist-btn {
    width: 32px;
    height: 32px;
    font-size: 14px;
  }

  .loader {
    font-size: 14px;
    margin-top: 30px;
  }
}
</style>
