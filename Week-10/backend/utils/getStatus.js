const getItemStatus = (item) => {

  // manual statuses stay fixed
  if (item.status === "used" || item.status === "wasted") {
    return item.status;
  }

  const now = new Date();

  const expiry = new Date(item.expiryDate);

  const diffInDays =
    (expiry - now) / (1000 * 60 * 60 * 24);

  if (diffInDays < 0) {
    return "expired";
  }

  if (diffInDays <= 3) {
    return "expiring-soon";
  }

  return "fresh";
};

export {
    getItemStatus
}