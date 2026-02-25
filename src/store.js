import { reactive } from 'vue'

export const store = reactive({
  bag: [],
  wishlist: [],

  // Add item to bag
  addToBag(item) {
    // Check if item already exists in bag
    const existingItem = this.bag.find(i => i.id === item.id)
    if (existingItem) {
      existingItem.quantity += 1
    } else {
      this.bag.push({
        ...item,
        quantity: 1
      })
    }
  },

  // Remove item from bag
  removeFromBag(itemId) {
    this.bag = this.bag.filter(i => i.id !== itemId)
  },

  // Update item quantity in bag
  updateBagQuantity(itemId, quantity) {
    const item = this.bag.find(i => i.id === itemId)
    if (item) {
      item.quantity = Math.max(1, quantity)
    }
  },

  // Toggle wishlist
  toggleWishlist(item) {
    const existingIndex = this.wishlist.findIndex(i => i.id === item.id)
    if (existingIndex > -1) {
      this.wishlist.splice(existingIndex, 1)
    } else {
      this.wishlist.push({
        ...item,
        quantity: 1
      })
    }
  },

  // Check if item is in wishlist
  isInWishlist(itemId) {
    return this.wishlist.some(i => i.id === itemId)
  },

  // Remove from wishlist
  removeFromWishlist(itemId) {
    this.wishlist = this.wishlist.filter(i => i.id !== itemId)
  },

  // Get total price of bag
  getBagTotal() {
    return this.bag.reduce((total, item) => {
      return total + (item.price * item.quantity)
    }, 0)
  },

  // Get bag item count
  getBagCount() {
    return this.bag.reduce((count, item) => count + item.quantity, 0)
  },

  // Clear bag
  clearBag() {
    this.bag = []
  },

  // Move from wishlist to bag
  moveWishlistToBag(itemId) {
    const item = this.wishlist.find(i => i.id === itemId)
    if (item) {
      this.addToBag(item)
      this.removeFromWishlist(itemId)
    }
  }
})
