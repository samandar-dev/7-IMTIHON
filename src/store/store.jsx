import create from "zustand";
import productObj from "../Object";

const useStore = create((set) => ({
  shopModal: false,
  saveModal: false,
  cartModal: false,
  shopModalFunc: () => set((state => ({
    cartCount: 1,
    shopModal: !state.shopModal,
    saveModal: false,
    cartModal: false,
  }))),
  saveModalFunc: () => set((state => ({
    saveModal: !state.saveModal,
    shopModal: false,
    cartModal: false,
  }))),
  cartModalFunc: () => set((state => ({
    cartModal: !state.cartModal,
    shopModal: false,
    saveModal: false,
  }))),

  cartModalItem: {
    id: 1,
    name: 'Cherry Tomatoes',
    weight: [250, 500, 1],
    price: [5, 9, 12],
    residue: 0,
    discount: 0,
    saleDays: 0,
    saleHours: 0,
    saleMinut: 0,
    soldPrice: 0,
    saleSecound: 0,
    productCount: 1,
    saveActive: false,
    shopCartActive: false,
    categor: ['Vegetables', 'seaFood'],
    stock: '99 in stock',
    sold: '8 sold in last 9 hours',
    desc: 'Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s.',
    productImg: [1, 2],
  },
  cartCount: 1,
  cartAddCount: () => set((state => ({
    cartCount: state.cartModalItem.productCount += 1,
  }))),

  cartCountChangeInput: (value) => set((state => ({
    cartCount: state.cartCount = value,
  }))),

  cartRemovCount: () => set((state => ({
    cartCount: state.cartModalItem.productCount > 1 ? state.cartModalItem.productCount -= 1 : 1,
  }))),

  cartModalItemsFunc: (id) => set((state => ({
    cartCount: 1,
    cartModalItem: productObj.filter(itm => itm.id === id)[0],
  }))),

  shopCart: [],
  addCartFunc: (id) => set((state => {
    let cart = state.shopCart
    cart.map(itm => itm.id === id && itm.shopCartActive == true ? (itm.productCount += 1, state.cartCount = itm.productCount) : itm.productCount)
    cart.push(...productObj.filter(item => item.id === id ? item.shopCartActive = true : item.shopCartActive))

    state.shopCart = cart.filter((elem, inex, obj) => obj.indexOf(elem) === inex)

    // localStorage.setItem('shopCarts', JSON.stringify(arr))
  })),

  removeCartCountFunc: (id) => set((state => {
    let cart = state.shopCart
    cart.map(itm => {
      if (itm.id === id && itm.productCount === 1) {
        return itm.shopCartActive = false
      }
      if (itm.id === id) {
        state.cartCount = itm.productCount
        return itm.productCount -= 1
      }
    })
    state.shopCart = cart.filter(itm => itm.shopCartActive !== false)

    // localStorage.setItem('shopCarts', JSON.stringify(arr))
  })),

  removeCartFunc: (id) => set((state => {
    let cart = state.shopCart
    cart.map(itm => itm.id === id && itm.shopCartActive == true ?
      (itm.shopCartActive = false, itm.productCount = 1) : itm.shopCartActive
    )
    state.shopCart = cart.filter(itm => itm.id !== id)

    // localStorage.setItem('shopCarts', JSON.stringify(arr))
  })),

  saveArr: [],
  saveCartFunc: (id) => set((state => {
    state.saveArr.push(...productObj.filter(item => item.id === id ? item.saveActive = true : item.saveActive))
    state.saveArr = state.saveArr.filter((elem, inex, obj) => obj.indexOf(elem) === inex)
  })),

  removeSaveCartFunc: (id) => set((state => {
    let saveCart = state.saveArr
    saveCart.map(itm => itm.id === id ? itm.saveActive = false : itm.saveActive)
    state.saveArr = saveCart.filter(item => item.saveActive !== false)
  }))
}))

export default useStore