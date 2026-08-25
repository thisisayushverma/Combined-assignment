# ShelfLife Frontend Architecture

## Tech Stack

* React
* React Router DOM
* Axios
* Context API (or Redux Toolkit)
* Tailwind CSS
* React Hook Form
* Zod

---

# Folder Structure

```text
src/
│
├── assets/
│   ├── images/
│   ├── icons/
│   └── logos/
│
├── api/
│   ├── axios.js
│   ├── authApi.js
│   ├── householdApi.js
│   ├── itemApi.js
│   └── dashboardApi.js
│
├── components/
│
│   ├── common/
│   │   ├── Button.jsx
│   │   ├── Input.jsx
│   │   ├── Modal.jsx
│   │   ├── Loader.jsx
│   │   └── EmptyState.jsx
│   │
│   ├── layout/
│   │   ├── Navbar.jsx
│   │   ├── Sidebar.jsx
│   │   ├── MobileMenu.jsx
│   │   └── AppLayout.jsx
│   │
│   ├── dashboard/
│   │   ├── StatCard.jsx
│   │   ├── WasteScoreCard.jsx
│   │   ├── ExpiringList.jsx
│   │   ├── LeaderboardCard.jsx
│   │   └── ActivityFeed.jsx
│   │
│   ├── household/
│   │   ├── MemberCard.jsx
│   │   ├── InviteCodeCard.jsx
│   │   └── JoinHouseholdForm.jsx
│   │
│   └── inventory/
│       ├── ItemCard.jsx
│       ├── ItemTable.jsx
│       ├── ItemForm.jsx
│       ├── StatusBadge.jsx
│       └── Filters.jsx
│
├── pages/
│
│   ├── auth/
│   │   ├── Login.jsx
│   │   └── Register.jsx
│   │
│   ├── dashboard/
│   │   └── Dashboard.jsx
│   │
│   ├── household/
│   │   └── Household.jsx
│   │
│   ├── inventory/
│   │   ├── Inventory.jsx
│   │   ├── AddItem.jsx
│   │   └── EditItem.jsx
│   │
│   ├── profile/
│   │   └── Profile.jsx
│   │
│   ├── notifications/
│   │   └── Notifications.jsx
│   │
│   └── NotFound.jsx
│
├── context/
│   ├── AuthContext.jsx
│   └── HouseholdContext.jsx
│
├── hooks/
│   ├── useAuth.js
│   ├── useHousehold.js
│   └── useInventory.js
│
├── routes/
│   ├── AppRoutes.jsx
│   └── ProtectedRoute.jsx
│
├── utils/
│   ├── dateUtils.js
│   ├── statusUtils.js
│   └── constants.js
│
├── App.jsx
└── main.jsx
```

---

# Website Template

## Desktop Layout

```text
+------------------------------------------------------+
| LOGO                         User Avatar             |
+------------------------------------------------------+

+-----------+------------------------------------------+
|           |                                          |
| Dashboard |                                          |
|           |                                          |
| Inventory |                                          |
|           |                                          |
| Household |         Main Content Area                |
|           |                                          |
| Profile   |                                          |
|           |                                          |
| Alerts    |                                          |
|           |                                          |
+-----------+------------------------------------------+
```

---

# Navigation Menu

```text
Dashboard
Inventory
Household
Notifications
Profile
Logout
```

---

# Color Theme

## Fresh

```text
Green
#22C55E
```

---

## Expiring Soon

```text
Yellow
#EAB308
```

---

## Expired

```text
Red
#EF4444
```

---

## Used

```text
Blue
#3B82F6
```

---

## Wasted

```text
Gray
#6B7280
```

---

# Dashboard UI

```text
+------------------+
| Household Name   |
+------------------+

+---------+---------+---------+---------+
| Fresh   | Soon    | Expired | Wasted  |
| 15      | 4       | 2       | 3       |
+---------+---------+---------+---------+

+----------------------------------------+
| Waste Score                            |
|                                        |
| 85%                                    |
| ███████████████████                    |
+----------------------------------------+

+-------------------+--------------------+
| Expiring Soon     | Leaderboard        |
|                   |                    |
| Milk              | Ayush     20       |
| Bread             | John      15       |
| Yogurt            | Emma      11       |
+-------------------+--------------------+
```

---

# Inventory UI

```text
+--------------------------------------------------+
| Search                                            |
+--------------------------------------------------+

+-------------+-------------+----------------------+
| Category    | Status      | Sort By Expiry Date |
+-------------+-------------+----------------------+

+--------------------------------------------------+
| Name       Qty     Expiry     Status             |
+--------------------------------------------------+
| Milk        2      18 Jun     Expiring Soon      |
| Bread       1      17 Jun     Expired            |
| Rice        5      15 Jul     Fresh              |
+--------------------------------------------------+
```

---

# Add Item Page

```text
+-------------------------------------+
| Add New Item                        |
+-------------------------------------+

Item Name

Category Dropdown

Quantity

Expiry Date

[ Scan Barcode ]

[ Save Item ]
```

---

# Household Page

```text
+-------------------------------------+
| Household Information               |
+-------------------------------------+

Household Name:
Roommates Apartment

Invite Code:
AB12CD

[ Copy Code ]
```

---

```text
+-------------------------------------+
| Members                             |
+-------------------------------------+

Ayush
John
Emma
Sarah
```

---

# Profile Page

```text
+-------------------------------------+
| User Information                    |
+-------------------------------------+

Name
Email

Joined Household

Roommates Apartment
```

---

```text
+-------------------------------------+
| Personal Statistics                 |
+-------------------------------------+

Items Added: 35

Items Used: 22

Items Wasted: 4
```

---

# Mobile Layout

```text
+--------------------+
| Logo   ☰           |
+--------------------+

Dashboard

Stat Cards

Waste Score

Expiring Items

Leaderboard
```

Sidebar becomes Drawer.

---

# Route Structure

```text
/
│
├── /login
├── /register
│
├── /dashboard
│
├── /items
├── /items/add
├── /items/:id/edit
│
├── /household
│
├── /notifications
│
├── /profile
│
└── /404
```

---

# Recommended Build Order

Phase 1

* Authentication
* Layout
* Dashboard Skeleton

Phase 2

* Inventory CRUD
* Filters
* Status Badges

Phase 3

* Household Management

Phase 4

* Waste Score
* Leaderboard

Phase 5
* Notifications
* Barcode Scanner
* Email Alerts

This order ensures that every feature builds on top of previously completed functionality.

v