<template>
  <div class="bag-page">
    <div class="bag-container">
      <h1>My Bag</h1>

      <div v-if="bagItems.length === 0" class="empty-bag">
        <p>Your bag is empty</p>
        <router-link to="/mens" class="continue-shopping">Continue Shopping</router-link>
      </div>

      <div v-else class="bag-content">
        <!-- Items Section -->
        <div class="bag-items">
          <div class="bag-item" v-for="item in bagItems" :key="item.id">
            <img :src="item.thumbnail" :alt="item.title" class="item-image" />
            
            <div class="item-details">
              <h3>{{ item.brand }}</h3>
              <p>{{ item.title }}</p>
              <p class="price">₹{{ item.price }}</p>
              <p class="rating">⭐ {{ item.rating }}</p>
            </div>

            <div class="quantity-control">
              <button @click="decreaseQuantity(item.id)">-</button>
              <input type="number" v-model.number="item.quantity" min="1" />
              <button @click="increaseQuantity(item.id)">+</button>
            </div>

            <div class="item-total">
              <p>₹{{ (item.price * item.quantity).toFixed(2) }}</p>
            </div>

            <button class="remove-btn" @click="removeItem(item.id)">Remove</button>
          </div>
        </div>

        <!-- Summary Section -->
        <div class="bag-summary">
          <h2>Order Summary</h2>
          
          <div class="summary-row">
            <span>Subtotal</span>
            <span>₹{{ subtotal.toFixed(2) }}</span>
          </div>

          <div class="summary-row">
            <span>Shipping</span>
            <span class="free">FREE</span>
          </div>

          <div class="summary-row">
            <span>Tax (10%)</span>
            <span>₹{{ tax.toFixed(2) }}</span>
          </div>

          <hr />

          <div class="summary-row total">
            <span>Total Amount</span>
            <span>₹{{ total.toFixed(2) }}</span>
          </div>

          <button class="checkout-btn">Proceed to Checkout</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from '../store.js'

export default {
  name: 'BagPage',
  
  data() {
    return {
      store
    }
  },

  computed: {
    bagItems() {
      return this.store.bag
    },

    subtotal() {
      return this.store.bag.reduce((total, item) => {
        return total + (item.price * item.quantity)
      }, 0)
    },

    tax() {
      return this.subtotal * 0.1
    },

    total() {
      return this.subtotal + this.tax
    }
  },

  methods: {
    removeItem(itemId) {
      this.store.removeFromBag(itemId)
    },

    increaseQuantity(itemId) {
      const item = this.store.bag.find(i => i.id === itemId)
      if (item) {
        item.quantity += 1
      }
    },

    decreaseQuantity(itemId) {
      const item = this.store.bag.find(i => i.id === itemId)
      if (item && item.quantity > 1) {
        item.quantity -= 1
      }
    }
  }
}
</script>

<style scoped>
.bag-page {
  padding-top: 100px;
  background: #f5f5f5;
  min-height: 100vh;
  font-family: Arial, sans-serif;
}

.bag-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  font-size: 28px;
  margin-bottom: 20px;
  color: #282C3F;
}

.empty-bag {
  text-align: center;
  padding: 60px 20px;
  background: white;
  border-radius: 8px;
}

.empty-bag p {
  font-size: 18px;
  color: #999;
  margin-bottom: 20px;
}

.continue-shopping {
  display: inline-block;
  padding: 12px 30px;
  background: #FF3F6C;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
  transition: 0.3s ease;
}

.continue-shopping:hover {
  background: #E63A5C;
}

.bag-content {
  display: grid;
  grid-template-columns: 1fr 350px;
  gap: 20px;
}

.bag-items {
  background: white;
  border-radius: 8px;
  overflow: hidden;
}

.bag-item {
  display: grid;
  grid-template-columns: 100px 1fr 120px 100px auto;
  gap: 15px;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #e5e5e5;
}

.item-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
  border-radius: 4px;
}

.item-details {
  flex: 1;
}

.item-details h3 {
  font-size: 16px;
  margin: 0 0 5px 0;
  color: #282C3F;
}

.item-details p {
  margin: 3px 0;
  color: #6C6F7B;
  font-size: 14px;
}

.price {
  font-weight: bold;
  color: #282C3F;
  font-size: 16px !important;
}

.rating {
  color: #FF9F43;
}

.quantity-control {
  display: flex;
  align-items: center;
  gap: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  padding: 0;
}

.quantity-control button {
  width: 30px;
  height: 30px;
  border: none;
  background: #f5f5f5;
  cursor: pointer;
  font-weight: bold;
}

.quantity-control button:hover {
  background: #efefef;
}

.quantity-control input {
  width: 40px;
  border: none;
  text-align: center;
  font-weight: bold;
  outline: none;
}

.item-total {
  text-align: right;
  font-weight: bold;
  font-size: 16px;
  color: #282C3F;
}

.remove-btn {
  padding: 8px 15px;
  background: white;
  border: 1px solid #FF3F6C;
  color: #FF3F6C;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
  transition: 0.3s ease;
}

.remove-btn:hover {
  background: #FF3F6C;
  color: white;
}

.bag-summary {
  background: white;
  border-radius: 8px;
  padding: 20px;
  height: fit-content;
  position: sticky;
  top: 120px;
}

.bag-summary h2 {
  font-size: 18px;
  margin-bottom: 20px;
  color: #282C3F;
}

.summary-row {
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  font-size: 14px;
  color: #6C6F7B;
}

.summary-row span:last-child {
  font-weight: bold;
}

.free {
  color: #5FDB92 !important;
}

.summary-row.total {
  font-size: 16px;
  font-weight: bold;
  color: #282C3F;
  margin-top: 15px;
}

hr {
  margin: 15px 0;
  border: none;
  border-top: 1px solid #e5e5e5;
}

.checkout-btn {
  width: 100%;
  padding: 12px;
  background: #FF3F6C;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  margin-top: 15px;
  transition: 0.3s ease;
}

.checkout-btn:hover {
  background: #E63A5C;
}

@media (max-width: 1024px) {
  .bag-container {
    padding: 15px;
  }

  .bag-item {
    grid-template-columns: 80px 1fr 80px;
    gap: 10px;
  }

  .quantity-control {
    width: 80px;
  }

  .item-total {
    display: none;
  }

  .bag-summary {
    top: 110px;
  }
}

@media (max-width: 768px) {
  .bag-page {
    padding-top: 80px;
  }

  .bag-container {
    padding: 10px;
  }

  h1 {
    font-size: 22px;
  }

  .bag-content {
    grid-template-columns: 1fr;
    gap: 15px;
  }

  .bag-item {
    grid-template-columns: 70px 1fr;
    gap: 8px;
    padding: 10px;
  }

  .item-image {
    width: 70px;
    height: 70px;
  }

  .item-details h3 {
    font-size: 14px;
  }

  .item-details p {
    font-size: 12px;
  }

  .quantity-control,
  .item-total,
  .remove-btn {
    grid-column: 1 / -1;
    width: 100%;
    margin-top: 10px;
  }

  .remove-btn {
    margin-top: 0;
  }

  .bag-summary {
    position: static;
    margin-top: 20px;
    padding: 15px;
  }

  .bag-summary h2 {
    font-size: 16px;
  }

  .summary-row {
    font-size: 12px;
  }
}

@media (max-width: 480px) {
  .bag-page {
    padding-top: 70px;
  }

  .bag-container {
    padding: 8px;
  }

  h1 {
    font-size: 18px;
    margin-bottom: 15px;
  }

  .bag-item {
    grid-template-columns: 60px 1fr;
    gap: 6px;
    padding: 8px;
  }

  .item-image {
    width: 60px;
    height: 60px;
  }

  .item-details h3 {
    font-size: 13px;
    margin-bottom: 3px;
  }

  .item-details p {
    font-size: 11px;
  }

  .quantity-control input {
    width: 30px;
  }

  .quantity-control button {
    width: 25px;
    height: 25px;
    font-size: 12px;
  }

  .remove-btn {
    padding: 6px 10px;
    font-size: 11px;
  }

  .bag-summary {
    padding: 12px;
  }

  .checkout-btn {
    padding: 10px;
    font-size: 14px;
  }
}
</style>
