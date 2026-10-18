function notImplemented() {
  throw new Error('Корзина ещё не реализована. Сначала прочитайте тесты.');
}

function addToCart(cart, product, quantity) {
  // test 3. нулевое количество
  if (quantity <= 0 || !quantity) {
    throw new RangeError('Quantity value cannot be zero!');
  }
  // test 4. не позволяет добавить больше товара, чем есть на складе
  if (quantity > product.stock) {
    throw new RangeError('Cannot add more product than available!');
  }
  const existing = cart.find((item) => item.id === product.id);
  
  // test 2. увеличивает количество
  if (existing) {
    if (existing.quantity + quantity > product.stock) {
      throw new RangeError('Cannot add more product than available!');
    } 
    existing.quantity += quantity;
  } else {
    cart.push({...product, quantity});
  }
  return cart;
}
function changeQuantity(cart, productId, quantity) {
  // test 2. не принимает нулевое количество
  if (quantity <= 0) {
    throw new RangeError('Quantity value cannot be zero!');
  }
  const item = cart.find((item) => item.id === productId);
  // test 4. оставляет корзину без изменений для отсутствующего товара
  if (!item) {
    return cart;
  }
  // test 3. не позволяет указать количество больше остатка
  if (quantity > item.stock) {
    throw new RangeError("Cannot add more product than available!")
  }
  // test 1
  item.quantity = quantity;
  return cart;
}
function removeFromCart(cart, productId) {
  return cart.filter(({id}) => id !== productId);
}
function calculateCartSubtotal() { return notImplemented(); }
function calculateOrderTotal() { return notImplemented(); }

const cartApi = { addToCart, changeQuantity, removeFromCart, calculateCartSubtotal, calculateOrderTotal };

if (typeof module !== 'undefined') module.exports = cartApi;
if (typeof window !== 'undefined') window.cartApi = cartApi;
