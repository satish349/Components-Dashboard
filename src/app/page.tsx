"use client";

import { useState } from "react";
import NavBar from "@/components/navBar";

import Account from "@/components/account";
import Clamable from "@/components/clamable";
import ContributionHistory from "@/components/constributionHistory";
import DistributeTrack from "@/components/distributeTrack";
import Inverstment from "@/components/inverstment";
import Notification from "@/components/notification";
import Payout from "@/components/payOut";
import PayoutPreference from "@/components/preference";
import SavingTarget from "@/components/saving";
import QrGenerator from "@/components/scan";
import UpcommingPayment from "@/components/upcommingPayment";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  // Array grouping components with custom searchable keywords mapping
  const dashboardItems = [
    { id: "notification", component: <Notification />, keywords: ["notification", "alerts", "messages", "notice"] },
    { id: "upcoming", component: <UpcommingPayment />, keywords: ["upcoming", "payment", "due", "bills", "invoice"] },
    { id: "preference", component: <PayoutPreference />, keywords: ["preference", "payout", "settings", "config", "options"] },
    { id: "account", component: <Account />, keywords: ["account", "profile", "user", "balance", "wallet"] },
    { id: "investment", component: <Inverstment />, keywords: ["investment", "stocks", "portfolio", "growth", "shares"] },
    { id: "saving", component: <SavingTarget />, keywords: ["saving", "target", "goal", "budget", "vault"] },
    { id: "payout", component: <Payout />, keywords: ["payout", "withdraw", "transfer", "cash", "bank"] },
    { id: "history", component: <ContributionHistory />, keywords: ["contribution", "history", "transactions", "past", "logs"] },
    { id: "track", component: <DistributeTrack />, keywords: ["distribute", "track", "delivery", "status", "shipment"] },
    { id: "qr", component: <QrGenerator />, keywords: ["qr", "generator", "scan", "code", "barcode"] },
    { id: "claimable", component: <Clamable />, keywords: ["claimable", "rewards", "bonus", "free", "vouchers"] },
  ];

  // Dynamic filter processing block running on client updates
  const filteredItems = dashboardItems.filter((item) => {
    const cleanQuery = searchQuery.toLowerCase().trim();
    if (!cleanQuery) return true; 

    return (
      item.id.toLowerCase().includes(cleanQuery) ||
      item.keywords.some((word) => word.toLowerCase().includes(cleanQuery))
    );
  });

  return (
    <>
      {/* Shared state parameters injection link */}
      <NavBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

      {/* Dynamic Masonry column configuration layer handling structural item variations */}
      <main className=" p-6 max-w-7xl mx-auto">
        {filteredItems.length > 0 ? (
          <section className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 [column-fill:_balance]">
            {filteredItems.map((item) => (
              <div key={item.id} className="break-inside-avoid mb-10 transition-all duration-300">
                {item.component}
              </div>
            ))}
          </section>
        ) : (
          /* Missing content element notification fallback alert */
          <div className="text-center py-20 bg-gray-50 rounded-2xl border border-dashed border-gray-200 max-w-md mx-auto">
            <p className="text-gray-500 font-medium text-sm">No cards match {searchQuery}</p>
            <button
              onClick={() => setSearchQuery("")}
              className="mt-3 text-xs bg-black text-white px-3 py-1.5 rounded-md hover:bg-gray-800 transition-colors font-semibold"
            >
              Reset Search Filter
            </button>
          </div>
        )}
      </main>
    </>
  );
}
