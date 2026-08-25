# ShelfLife Frontend Page Design

## Overview

The application should be organized around 3 major areas:

1. Authentication
2. Household Management
3. Inventory & Waste Tracking

---

# Layout Structure

## Public Layout

Used for:

* Login
* Register

Structure:

```text
+----------------------+
|      ShelfLife       |
|----------------------|
|                      |
|   Page Content       |
|                      |
+----------------------+
```

---

## App Layout (Private)

Used after login.

```text
+--------------------------------------------------+
| Logo | Dashboard | Items | Household | Profile   |
+--------------------------------------------------+
|                                                  |
|                Page Content                      |
|                                                  |
+--------------------------------------------------+
```

Mobile:

```text
Top Navbar
↓
Hamburger Menu
↓
Page Content
```

---

# Pages

## 1. Login Page

### Route

```text
/login
```

### Components

* Email Input
* Password Input
* Login Button
* Link to Register

### Actions

* Submit login
* Redirect to dashboard

---

## 2. Register Page

### Route

```text
/register
```

### Components

* Name Input
* Email Input
* Password Input
* Confirm Password Input
* Register Button

### Actions

* Create account
* Auto login

---

# Dashboard Module

## 3. Dashboard Page

### Route

```text
/dashboard
```

### Purpose

Main overview of household inventory.

### Sections

#### Status Cards

```text
Fresh            15
Expiring Soon     4
Expired           2
Used             25
Wasted            3
```

---

#### Waste Score Card

```text
Household Waste Score

85%
```

Progress bar visualization.

---

#### Expiring Within 24 Hours

```text
Milk
Bread
Yogurt
```

Clickable items.

---

#### Leaderboard

```text
1. Ayush - 18 Used
2. John  - 15 Used
3. Emma  - 12 Used
```

---

#### Recent Activity

```text
Ayush added Milk
John marked Bread used
Emma wasted Yogurt
```

---

# Inventory Module

## 4. Inventory Page

### Route

```text
/items
```

### Purpose

Display all household inventory.

### Top Actions

```text
+ Add Item

Search

Filter Category

Filter Status

Sort By Expiry Date
```

---

### Inventory Table

Columns:

```text
Name
Category
Quantity
Expiry Date
Status
Added By
Actions
```

Actions:

* Edit
* Delete
* Mark Used
* Mark Wasted

---

### Status Colors

```text
Fresh          Green
Expiring Soon  Yellow
Expired        Red
Used           Blue
Wasted         Gray
```

---

## 5. Add Item Page

### Route

```text
/add
```

### Form Fields

* Item Name
* Category
* Quantity
* Expiry Date

### Optional

* Barcode Scanner

### Buttons

```text
Save
Cancel
```

---

## 6. Edit Item Page

### Route

```text
/items/:id/edit
```

Same UI as Add Item.

Prefilled values.

---

# Household Module

## 7. Household Page

### Route

```text
/household
```

### Purpose

Manage household.

---

### Household Information Card

```text
Household Name

Roommates Apartment
```

Invite Code:

```text
AB12CD
```

Copy button.

---

### Members Section

```text
Ayush
John
Emma
Sarah
```

Show:

* Name
* Joined Date

---

### Join Household Section

Visible only when user is not in household.

```text
Invite Code Input

Join Household
```

---

### Create Household Section

Visible only when user has no household.

```text
Household Name

Create Household
```

---

### Leave Household

Danger Button:

```text
Leave Household
```

Confirmation Modal required.

---

# User Module

## 8. Profile Page

### Route

```text
/profile
```

### User Information

```text
Name
Email
Joined Date
```

---

### Household Information

```text
Current Household

Roommates Apartment
```

---

### Personal Stats

```text
Items Added
Items Used
Items Wasted
Contribution Score
```

---

### Logout Button

```text
Logout
```

---

# Notification Module

## 9. Notifications Page

### Route

```text
/notifications
```

### Sections

#### Expiring Soon

```text
Milk expires tomorrow
Bread expires in 12 hours
```

---

#### Expired

```text
Yogurt expired 2 days ago
```

---

### Actions

```text
Mark Read
Clear All
```

---

# Reusable Components

## Navigation

* Navbar
* Sidebar
* Mobile Drawer


## Inventory Components

* ItemCard
* ItemTable
* StatusBadge
* CategoryFilter
* ExpiryCountdown

---

## Household Components

* MemberCard
* InviteCodeCard
* LeaderboardCard

---

## Dashboard Components

* StatCard
* WasteScoreCard
* ActivityFeed
* ExpiringList

---

# Final Route Map

```text
/
├── /login
├── /register
│
├── /dashboard
├── /items
├── /add
├── /items/:id/edit
│
├── /household
├── /profile
├── /notifications
│
└── *
    └── 404 Page
```

# MVP Priority Order

1. Login
2. Register
3. Dashboard
4. Inventory Page
5. Add Item
6. Edit Item
7. Household Page
8. Profile
9. Notifications
10. Leaderboard Enhancements
11. Barcode Scanner
12. Email Alerts
13. Activity Feed
14. Advanced Analytics
