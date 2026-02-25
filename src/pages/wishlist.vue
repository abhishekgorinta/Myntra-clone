<template>
  <div class="wishlist-page">
    <div class="wishlist-container">
      <h1>My Wishlist</h1>

      <div v-if="wishlistItems.length === 0" class="empty-wishlist">
        <p>Your wishlist is empty</p>
        <router-link to="/mens" class="continue-shopping">Start Shopping</router-link>
      </div>

      <div v-else class="wishlist-content">
        <p class="item-count">{{ wishlistItems.length }} items in your wishlist</p>

        <div class="grid">
          <div class="card" v-for="item in wishlistItems" :key="item.id">
            <div class="card-image">
              <img :src="item.thumbnail" :alt="item.title" />
              <button 
                class="wishlist-btn active" 
                @click="toggleWishlist(item)"
                title="Remove from wishlist"
              >
                <i class="fa-solid fa-heart " ></i>
              </button>
            </div>

            <div class="card-info">
              <h3>{{ item.brand }}</h3>
              <p class="title">{{ item.title }}</p>
              
              <div class="rating">
                ⭐ {{ item.rating }}
              </div>

              <div class="price">
                <span class="current">₹{{ item.price }}</span>
                <span class="discount">{{ item.discountPercentage }}% OFF</span>
              </div>

              <div class="action-buttons">
                <button class="add-to-bag-btn" @click="addToBag(item)">
                  <i class="fa-solid fa-bag-shopping" style="color: white;"></i> Add to Bag
                </button>
                <button class="move-btn" @click="moveWishlistToBag(item.id)">
                  Move to Bag
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { store } from '../store.js'

export default {
  name: 'WishlistPage',
  
  data() {
    return {
      store
    }
  },

  computed: {
    wishlistItems() {
      return this.store.wishlist
    }
  },

  methods: {
    toggleWishlist(item) {
      this.store.toggleWishlist(item)
    },

    addToBag(item) {
      this.store.addToBag(item)
      alert('Item added to bag!')
    },

    moveWishlistToBag(itemId) {
      this.store.moveWishlistToBag(itemId)
      alert('Item moved to bag!')
    }
  }
}
</script>

<style scoped>
.wishlist-page {
  padding-top: 10px;
  background: #f5f5f5;
  min-height: 80vh;
  font-family: Arial, sans-serif;
}

.wishlist-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px;
}

h1 {
  font-size: 28px;
  margin-bottom: 20px;
  color: #282C3F;
}

.empty-wishlist {
  text-align: center;
  padding: 60px 20px;
  background: white;
  border-radius: 8px;
}

.empty-wishlist p {
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

.wishlist-content {
  background: white;
  border-radius: 8px;
  padding: 20px;
}

.item-count {
  color: #999;
  margin-bottom: 20px;
  font-size: 14px;
}

.grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 20px;
}

.card {
  background: white;
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;
}

.card:hover {
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.card-image {
  position: relative;
  width: 100%;
  height: 220px;
  overflow: hidden;
  background: #f5f5f5;
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
  color: #FF3F6C;
  transition: 0.3s ease;
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

.card-info {
  padding: 12px;
}

.card-info h3 {
  font-size: 14px;
  margin: 0 0 5px 0;
  color: #282C3F;
  font-weight: 600;
}

.title {
  font-size: 13px;
  color: #6C6F7B;
  margin: 5px 0;
  height: 36px;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
}

.rating {
  font-size: 12px;
  color: #FF9F43;
  margin: 5px 0;
}

.price {
  display: flex;
  gap: 8px;
  align-items: center;
  margin: 8px 0;
  font-size: 14px;
}

.current {
  font-weight: bold;
  color: #282C3F;
}

.discount {
  color: #5FDB92;
  font-weight: bold;
}

.action-buttons {
  display: flex;
  gap: 8px;
  margin-top: 12px;
}

.add-to-bag-btn,
.move-btn {
  flex: 1;
  padding: 8px;
  border: none;
  border-radius: 4px;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s ease;
}

.add-to-bag-btn {
  background: #FF3F6C;
  color: white;
}

.add-to-bag-btn:hover {
  background: #E63A5C;
}

.move-btn {
  background: #f5f5f5;
  color: #282C3F;
  border: 1px solid #ddd;
}

.move-btn:hover {
  background: #efefef;
}

@media (max-width: 1200px) {
  .grid {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 15px;
  }

  .action-buttons {
    flex-direction: column;
  }

  .add-to-bag-btn,
  .move-btn {
    padding: 10px 5px;
    font-size: 11px;
  }
}

@media (max-width: 768px) {
  .wishlist-page {
    padding-top: 80px;
  }

  .wishlist-container {
    padding: 10px;
  }

  h1 {
    font-size: 22px;
  }

  .item-count {
    font-size: 12px;
  }

  .grid {
    grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
    gap: 15px;
  }

  .action-buttons {
    flex-direction: column;
  }
}
</style>
