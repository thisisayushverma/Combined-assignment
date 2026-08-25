import React from "react";
import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState } from "react";

function Landing() {
  const features = [
    {
      title: "Inventory Tracking",
      description:
        "Track groceries, medicines, and household products in one place.",
      icon: "📦",
    },
    {
      title: "Expiry Alerts",
      description:
        "Get notified before products expire and avoid unnecessary waste.",
      icon: "⏰",
    },
    {
      title: "Smart Dashboard",
      description: "See expiring, expired, and low-stock items instantly.",
      icon: "📊",
    },
    {
      title: "Category Management",
      description:
        "Organize items into groceries, medicines, personal care, and more.",
      icon: "🏷️",
    },
    {
      title: "Search & Filter",
      description: "Quickly find products using powerful search and filtering.",
      icon: "🔍",
    },
    {
      title: "Usage Insights",
      description: "Understand consumption patterns and reduce waste.",
      icon: "📈",
    },
  ];

  // const navigate = useNavigate();
  // const user = useSelector((state) => state.user);
  // const [isLoading, setIsLoading] = useState(true);
  // useEffect(()=>{
  //   // setIsLoading(true);
  //   console.log("in landing page user details - ",user);
  //   if(user?.user && user?.user.email && user?.user._id){
  //     navigate('/dashboard');
  //   }
  //   setIsLoading(false);
  // },[])

  return (
    <div className="pt-16 bg-slate-50">
      {/* HERO SECTION */}
      <section className="min-h-[90vh] flex items-center">
        <div className="max-w-7xl mx-auto px-6 py-16 grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-medium text-green-700">
              Household Inventory Tracker
            </span>

            <h1 className="mt-6 text-5xl font-bold leading-tight text-slate-900">
              Never Let Your Products
              <span className="text-green-600"> Expire Again</span>
            </h1>

            <p className="mt-6 text-lg text-slate-600">
              Manage groceries, medicines, and household items with smart
              inventory tracking and expiry reminders.
            </p>

            <div className="mt-8 flex gap-4">
              <Link
                to="/register"
                className="rounded-xl bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700"
              >
                Get Started
              </Link>
              <button className="rounded-xl border px-6 py-3 font-semibold hover:bg-slate-100">
                Learn More
              </button>
            </div>
          </div>

          <div className="rounded-3xl bg-white p-8 shadow-xl">
            <h3 className="text-xl font-bold mb-6">ShelfLife Dashboard</h3>

            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-green-50 p-4">
                <p className="text-sm text-slate-500">Total Items</p>
                <p className="text-3xl font-bold">142</p>
              </div>

              <div className="rounded-xl bg-yellow-50 p-4">
                <p className="text-sm text-slate-500">Expiring Soon</p>
                <p className="text-3xl font-bold">12</p>
              </div>

              <div className="rounded-xl bg-red-50 p-4">
                <p className="text-sm text-slate-500">Expired</p>
                <p className="text-3xl font-bold">3</p>
              </div>

              <div className="rounded-xl bg-blue-50 p-4">
                <p className="text-sm text-slate-500">Low Stock</p>
                <p className="text-3xl font-bold">7</p>
              </div>
            </div>

            <div className="mt-6 border-t pt-4">
              <h4 className="font-semibold mb-3">Expiring Soon</h4>

              <div className="space-y-3">
                <div className="flex justify-between rounded-lg bg-slate-100 p-3">
                  <span>Milk</span>
                  <span>2 Days</span>
                </div>

                <div className="flex justify-between rounded-lg bg-slate-100 p-3">
                  <span>Bread</span>
                  <span>1 Day</span>
                </div>

                <div className="flex justify-between rounded-lg bg-slate-100 p-3">
                  <span>Paneer</span>
                  <span>4 Days</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold">Everything You Need</h2>

            <p className="mt-4 text-slate-600">
              Manage household inventory efficiently.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl bg-white p-6 shadow-sm hover:shadow-lg transition"
              >
                <div className="text-4xl">{feature.icon}</div>

                <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>

                <p className="mt-3 text-slate-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="bg-white py-24">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold">How It Works</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-2xl font-bold">
                1
              </div>

              <h3 className="mt-4 text-xl font-semibold">Add Products</h3>

              <p className="mt-2 text-slate-600">
                Enter product details, quantity, and expiry date.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-2xl font-bold">
                2
              </div>

              <h3 className="mt-4 text-xl font-semibold">Track Inventory</h3>

              <p className="mt-2 text-slate-600">
                Organize and monitor all items from one dashboard.
              </p>
            </div>

            <div className="text-center">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-green-100 text-2xl font-bold">
                3
              </div>

              <h3 className="mt-4 text-xl font-semibold">Get Reminders</h3>

              <p className="mt-2 text-slate-600">
                Receive alerts before products expire.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="dashboard-preview" className="bg-slate-100 py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <h2 className="text-4xl font-bold text-slate-900">
              Dashboard Preview
            </h2>

            <p className="mt-4 text-lg text-slate-600">
              Monitor inventory, track expiry dates, and manage household
              products from one centralized dashboard.
            </p>
          </div>

          <div className="mt-16 overflow-hidden rounded-3xl border bg-white shadow-2xl">
            {/* Top Bar */}
            <div className="flex items-center gap-2 border-b px-6 py-4">
              <div className="h-3 w-3 rounded-full bg-red-400"></div>
              <div className="h-3 w-3 rounded-full bg-yellow-400"></div>
              <div className="h-3 w-3 rounded-full bg-green-400"></div>
            </div>

            <div className="grid lg:grid-cols-[260px_1fr]">
              {/* Sidebar */}
              <aside className="border-r bg-slate-50 p-6">
                <h3 className="text-xl font-bold text-green-600">ShelfLife</h3>

                <nav className="mt-8 space-y-3">
                  <div className="rounded-lg bg-green-100 p-3 font-medium text-green-700">
                    Dashboard
                  </div>

                  <div className="rounded-lg p-3 hover:bg-slate-100">
                    Inventory
                  </div>

                  <div className="rounded-lg p-3 hover:bg-slate-100">
                    Categories
                  </div>

                  <div className="rounded-lg p-3 hover:bg-slate-100">
                    Expiry Alerts
                  </div>

                  <div className="rounded-lg p-3 hover:bg-slate-100">
                    Profile
                  </div>
                </nav>
              </aside>

              {/* Main Content */}
              <main className="p-8">
                {/* Stats */}
                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
                  <div className="rounded-2xl border p-5">
                    <p className="text-sm text-slate-500">Total Items</p>

                    <h3 className="mt-2 text-3xl font-bold">142</h3>
                  </div>

                  <div className="rounded-2xl border p-5">
                    <p className="text-sm text-slate-500">Expiring Soon</p>

                    <h3 className="mt-2 text-3xl font-bold text-yellow-600">
                      12
                    </h3>
                  </div>

                  <div className="rounded-2xl border p-5">
                    <p className="text-sm text-slate-500">Expired</p>

                    <h3 className="mt-2 text-3xl font-bold text-red-600">3</h3>
                  </div>

                  <div className="rounded-2xl border p-5">
                    <p className="text-sm text-slate-500">Low Stock</p>

                    <h3 className="mt-2 text-3xl font-bold text-blue-600">7</h3>
                  </div>
                </div>

                {/* Expiring Items */}
                <div className="mt-10">
                  <h3 className="mb-5 text-xl font-semibold">Expiring Soon</h3>

                  <div className="overflow-hidden rounded-2xl border">
                    <table className="w-full">
                      <thead className="bg-slate-50">
                        <tr>
                          <th className="p-4 text-left">Product</th>
                          <th className="p-4 text-left">Category</th>
                          <th className="p-4 text-left">Quantity</th>
                          <th className="p-4 text-left">Expires In</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr className="border-t">
                          <td className="p-4">Milk</td>
                          <td className="p-4">Dairy</td>
                          <td className="p-4">2</td>
                          <td className="p-4 text-red-500">2 Days</td>
                        </tr>

                        <tr className="border-t">
                          <td className="p-4">Bread</td>
                          <td className="p-4">Bakery</td>
                          <td className="p-4">1</td>
                          <td className="p-4 text-red-500">1 Day</td>
                        </tr>

                        <tr className="border-t">
                          <td className="p-4">Paneer</td>
                          <td className="p-4">Dairy</td>
                          <td className="p-4">3</td>
                          <td className="p-4 text-yellow-500">4 Days</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </main>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-6">
          <div className="rounded-3xl bg-green-600 p-12 text-center text-white">
            <h2 className="text-4xl font-bold">Ready to Start Tracking?</h2>

            <p className="mt-4 text-lg">
              Save money, reduce waste, and stay organized.
            </p>

            <button
              className="mt-8 rounded-xl bg-white px-8 py-3 font-semibold text-green-700"
              onClick={() => navigate("/login")}
            >
              Get Started Free
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Landing;
