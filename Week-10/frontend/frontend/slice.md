# REDUX_SLICES.md

## 1. Auth Slice

Purpose:
Manage authenticated user information.

State:

```js
{
  user: null,
  isLoading: false
}
```

Reducers:

```js
setUser()
clearUser()
setLoading()
```

Used By:

* Login
* Register
* ProtectedRoute
* Profile
* Navbar

---

## 2. Inventory Slice

Purpose:
Manage inventory items.

State:

```js
{
  items: [],
  loading: false
}
```

Reducers:

```js
setItems()
addItem()
updateItem()
removeItem()
```

Used By:

* Dashboard
* Inventory Page
* Search
* Filters

---

## 3. Category Slice

Purpose:
Store product categories.

State:

```js
{
  categories: []
}
```

Reducers:

```js
setCategories()
addCategory()
updateCategory()
removeCategory()
```

Used By:

* Inventory Form
* Category Management

---

## 4. Notification Slice

Purpose:
Global notifications and alerts.

State:

```js
{
  message: "",
  type: "",
  isOpen: false
}
```

Reducers:

```js
showNotification()
hideNotification()
```

Used By:

* Success Messages
* Error Messages
* Expiry Alerts

---

## 5. UI Slice

Purpose:
Application UI state.

State:

```js
{
  sidebarOpen: true,
  theme: "light"
}
```

Reducers:

```js
toggleSidebar()
setTheme()
```

Used By:

* Sidebar
* Layout Components

---

# Initial Version Recommendation

Start with:

* authSlice
* inventorySlice
* uiSlice

Add later:

* categorySlice
* notificationSlice

Avoid creating slices until there is actual state to share across multiple components.

```
```
