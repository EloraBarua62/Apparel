const page_navigation = [
  {
    id: 1,
    title: "Home",
    route: "/",
  },
  {
    id: 2,
    title: "Products",
    route: "/products",
  },
  {
    id: 3,
    title: "Seller",
    sub_route: [
      {
        sub_id: 1,
        sub_title: "Become Seller",
        sub_route: "/become-seller",
        privacy: "public",
      },
      {
        sub_id: 2,
        sub_title: "Shop List",
        sub_route: "/shop-list",
        privacy: "public",
      },
      {
        sub_id: 3,
        sub_title: "Manage Shop",
        sub_route: "/manage-shop",
        privacy: "private",
      },
      {
        sub_id: 4,
        sub_title: "Profile",
        sub_route: "/profile",
        privacy: "private",
      },
    ],
  },
  {
    id: 4,
    title: "Buyer",
    sub_route: [
      {
        sub_id: 1,
        sub_title: "Track Order",
        sub_route: "/track-order",
        privacy: "private",
      },
      {
        sub_id: 2,
        sub_title: "Shopping Cart",
        sub_route: "/shopping-cart",
        privacy: "private",
      },
      {
        sub_id: 3,
        sub_title: "Wish List",
        sub_route: "/wish-list",
        privacy: "private",
      },
      {
        sub_id: 4,
        sub_title: "Profile",
        sub_route: "/profile",
        privacy: "private",
      },
    ],
  },
];

export default page_navigation;