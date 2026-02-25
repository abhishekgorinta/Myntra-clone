<template>
    <div class="men-items">

        <!-- Top navigation -->
        <div class="i-nav">
            <div class="fil">
                <h1>Filters</h1>
            </div>
            <div class="fil-links">
                <div class="dropdown">
                    <button class="dropbtn">Sort by: Recomended</button>
                    <div class="dropdown-content">
                        <a href="#">Link 1</a>
                        <a href="#">Link 2</a>
                        <a href="#">Link 3</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Main content -->
        <div class="men-i">

            <!-- Left Filters -->
            <aside class="i-left">

                <div class="filter-section">
                    <h4>Categories</h4>
                    <label><input type="checkbox" /> Shirts</label>
                    <label><input type="checkbox" /> T-Shirts</label>
                    <label><input type="checkbox" /> Jeans</label>
                    <label><input type="checkbox" /> Jackets</label>
                </div>
                <hr>

                <div class="filter-section">
                    <h4>Brand</h4>
                    <label><input type="checkbox" /> Roadster</label>
                    <label><input type="checkbox" /> Puma</label>
                    <label><input type="checkbox" /> HRX</label>
                </div>
                <hr>
                <div class="filter-section">

                    <h4>Price</h4>
                    <label><input type="checkbox" /> Under ₹999</label>
                    <label><input type="checkbox" /> ₹1000 - ₹1999</label>
                    <label><input type="checkbox" /> Above ₹2000</label>
                </div>

            </aside>

            <!-- Right Products -->
            <section class="i-right">
                <!-- <div class="product-grid"> -->
                <div v-if="data.length === 0" style="text-align: center; margin: 50px;">Loading...</div>
                <div v-else class="product-grid">
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
                    <!-- </div> -->
                </div>
                <div style="text-align:center; margin:20px 0;">
                    <button v-if="shownProducts.length < filteredProducts.length" @click="loadMore" class="shop-btn">Load more</button>
                </div>
            </section>

        </div>
    </div>
</template>

<style>
.men-items {
    padding: 20px 40px;
    background: #fafafa;
}

/* Top bar */
.i-nav {
    height: 50px;
    display: flex;
    align-items: center;
    padding-left: 20px;
    font-weight: 600;
    background: #fff;
    border-bottom: 1px solid #ddd;
    display: flex;
    justify-content: space-between;
}

/* Main layout */
.men-i {
    display: flex;
    /* gap: 20px; */
    /* margin-top: 20px; */
}

/* Left sidebar */
.i-left {
    width: 22%;
    background: #fff;
    border: 1px solid #edecef;
    padding: 16px;
    height: calc(100vh - 120px);
    overflow-y: auto;
}

/* Filter blocks */
.filter-section {
    margin-bottom: 24px;
}

.filter-section h4 {
    font-size: 14px;
    font-weight: 700;
    margin-bottom: 10px;
    color: #282c3f;
}

/* Checkbox styling */
.filter-section label {
    display: flex;
    align-items: center;
    gap: 8px;
    font-size: 13px;
    color: #444;
    margin-bottom: 8px;
    cursor: pointer;
}

.filter-section input[type="checkbox"] {
    accent-color: #ff3f6c;
}

/* Right products area */
.i-right {
    width: 78%;
    background: #fff;
    padding: 20px;
    border: 1px solid #edecef;
}

/* Product grid */
.product-grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;

}

product-card {
    width: 230px;
    background: #fff;
    border-radius: 8px;
    overflow: hidden;
    cursor: pointer;
    transition: all 0.3s ease;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
}

.product-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
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
/* drop down css */
 .dropbtn {
  
  color: black;
   border: 3px solid black;
   
  padding: 6px;
  font-size: 16px;
  border: none;
  cursor: pointer;
}
.dropdown button {
    border: 1px solid black;
    
}
.dropdown {
  position: relative;
 
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 200px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #f1f1f1;
}

.dropdown:hover .dropdown-content {
  display: block;
}

/* .dropdown:hover .dropbtn {
  background-color: #3e8e41;
} */

@media (max-width: 1024px) {
  .men-items {
    padding: 15px 20px;
  }

  .men-i {
    flex-direction: column;
  }

  .i-left {
    width: 100%;
    height: auto;
    border-bottom: 1px solid #edecef;
    border-right: none;
    padding: 12px;
  }

  .i-right {
    width: 100%;
    padding: 15px;
  }

  .product-grid {
    grid-template-columns: repeat(3, 1fr);
    gap: 20px;
  }
}

@media (max-width: 768px) {
  .men-items {
    padding: 10px;
  }

  .i-nav {
    height: auto;
    flex-direction: column;
    gap: 10px;
    padding: 10px;
  }

  .i-left {
    display: none;
    width: 100%;
    padding: 10px;
  }

  .i-left.open {
    display: block;
  }

  .i-right {
    width: 100%;
    padding: 10px;
    border: none;
    background: #fafafa;
  }

  .product-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
  }

  .product-card {
    width: 100%;
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
    font-size: 16px;
  }

  .shop-btn {
    padding: 6px;
    font-size: 12px;
  }

  .dropbtn {
    padding: 5px;
    font-size: 13px;
  }
}

@media (max-width: 480px) {
  .men-items {
    padding: 8px;
  }

  .i-nav {
    padding: 8px;
  }

  .fil h1 {
    font-size: 16px;
  }

  .i-left {
    padding: 8px;
  }

  .filter-section h4 {
    font-size: 13px;
  }

  .filter-section label {
    font-size: 12px;
  }

  .i-right {
    padding: 8px;
  }

  .product-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
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
    font-size: 14px;
  }

  .product-rating {
    font-size: 11px;
  }

  .shop-btn {
    padding: 5px;
    font-size: 11px;
  }

  .dropbtn {
    padding: 4px;
    font-size: 12px;
  }
}
</style>
<script>
export default {
    data() {
        return {
            data: [],
            visibleCount: 8
        }
    },
    computed: {
        filteredProducts() {
            // no filter implemented here; placeholder for future filters
            return this.data
        },
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