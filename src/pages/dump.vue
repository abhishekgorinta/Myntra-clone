<template>
  <div>
    <h1 style="margin: 50px;">Products</h1>

    <!-- Search Input -->
    <input v-model="search" type="text" placeholder="Search products..." class="search-input" />

    <!-- Results -->
    <div v-if="data.length === 0" style="text-align: center; margin: 50px;">Loading...</div>
    <div v-else-if="filteredProducts.length" style="display: flex; flex-wrap: wrap; gap: 10px; margin: 50px;">
      
      <div v-for="product in shownProducts" :key="product.id" class="product-card">

        <!-- Image -->
        <div class="product-img">
          <img :src="product.image" :alt="product.title" />
        </div>

        <!-- Details -->
        <div class="product-info">
          <p class="product-category">{{ product.category }}</p>

          <h3 class="product-price">
            ₹{{ Math.round(product.price * 80) }}
          </h3>

          <div class="product-rating">
            ⭐ {{ product.rating.rate }}
            <span>({{ product.rating.count }})</span>
          </div>

          <button class="shop-btn">Add to Bag</button>
        </div>

      </div>

    </div>

    <!-- No Results -->
    <p v-else class="no-results">
      No products found
    </p>
      <div style="text-align:center; margin:20px 0;">
        <button v-if="shownProducts.length < filteredProducts.length" @click="loadMore" class="shop-btn">Load more</button>
      </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      data: [],
      search: "",
      visibleCount: 8
    }
  },

  computed: {
    filteredProducts() {
      // If search is empty → return all
      if (!this.search) {
        return this.data;
      }

      // Filter logic
      return this.data.filter(product =>
        product.category
          .toLowerCase()
          .includes(this.search.toLowerCase())
      );
    }
    ,
    shownProducts() {
      return this.filteredProducts.slice(0, this.visibleCount)
    }
  },

  methods: {
    loadMore() {
      this.visibleCount += 8
    }
  },

  mounted() {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => {
        this.data = data;
        console.log(data);
      });
  }
}
</script>

<style scoped>

.search-input {
  max-width: 400px;
  margin: 0 50px 20px 50px;
  padding: 10px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 14px;
  width: calc(100% - 100px);
}

.search-input:focus {
  outline: none;
  border-color: #ff3f6c;
  box-shadow: 0 0 5px rgba(255, 63, 108, 0.3);
}

.no-results {
  text-align: center;
  margin: 50px;
  color: #777;
  font-size: 16px;
}

.product-card {
  width: 230px;
  background: #fff;
  border-radius: 8px;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0,0,0,0.15);
}

/* Image section */
.product-img {
  width: 100%;
  height: 260px;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
}

.product-img img {
  width: 80%;
  height: 80%;
  object-fit: contain;
}

/* Info section */
.product-info {
  padding: 12px;
  text-align: left;
}

.product-category {
  font-size: 12px;
  color: #777;
  margin-bottom: 4px;
  text-transform: uppercase;
}

.product-price {
  font-size: 18px;
  font-weight: 700;
  color: #282c3f;
  margin: 6px 0;
}

.product-rating {
  font-size: 13px;
  color: #388e3c;
  margin-bottom: 10px;
}

.product-rating span {
  color: #777;
}

/* Button */
.shop-btn {
  width: 100%;
  padding: 8px;
  border: none;
  border-radius: 4px;
  background: #ff3f6c;
  color: white;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
}

.shop-btn:hover {
  background: #e73362;
}

@media (max-width: 1024px) {
  h1 {
    margin: 30px;
  }

  .search-input {
    max-width: 350px;
    margin: 0 30px 15px 30px;
    width: calc(100% - 60px);
  }

  div[style*="display: flex"] {
    margin: 30px !important;
  }

  .product-card {
    width: 200px;
  }

  .product-img {
    height: 240px;
  }
}

@media (max-width: 768px) {
  h1 {
    margin: 20px;
    font-size: 22px;
  }

  .search-input {
    max-width: 100%;
    margin: 0 15px 15px 15px;
    width: calc(100% - 30px);
    padding: 8px 10px;
    font-size: 13px;
  }

  div[style*="display: flex"] {
    margin: 15px !important;
    gap: 12px !important;
  }

  .no-results {
    margin: 30px;
    font-size: 14px;
  }

  .product-card {
    width: 160px;
  }

  .product-img {
    height: 180px;
  }

  .product-info {
    padding: 10px;
  }

  .product-category {
    font-size: 11px;
  }

  .product-price {
    font-size: 15px;
  }

  .product-rating {
    font-size: 11px;
  }

  .shop-btn {
    padding: 6px;
    font-size: 12px;
  }
}

@media (max-width: 480px) {
  h1 {
    margin: 15px;
    font-size: 18px;
  }

  .search-input {
    max-width: 100%;
    margin: 0 10px 12px 10px;
    width: calc(100% - 20px);
    padding: 8px 8px;
    font-size: 12px;
  }

  div[style*="display: flex"] {
    margin: 10px !important;
    gap: 8px !important;
  }

  .no-results {
    margin: 20px;
    font-size: 12px;
  }

  .product-card {
    width: 130px;
  }

  .product-img {
    height: 150px;
  }

  .product-info {
    padding: 8px;
  }

  .product-category {
    font-size: 10px;
  }

  .product-price {
    font-size: 13px;
  }

  .product-rating {
    font-size: 10px;
  }

  .shop-btn {
    padding: 5px;
    font-size: 11px;
  }
}

</style>