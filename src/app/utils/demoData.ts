export const page_navigation = [
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
        sub_route: "/seller/become-seller",
        privacy: "public",
      },
      {
        sub_id: 2,
        sub_title: "Create Shop",
        sub_route: "/seller/create-shop",
        privacy: "public",
      },
      {
        sub_id: 3,
        sub_title: "Manage Shops",
        sub_route: "/seller/manage-shops",
        privacy: "private",
      },
      {
        sub_id: 4,
        sub_title: "Profile",
        sub_route: "/seller/profile",
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
        sub_route: "/buyer/track-order",
        privacy: "private",
      },
      {
        sub_id: 2,
        sub_title: "Shopping Cart",
        sub_route: "/buyer/shopping-cart",
        privacy: "private",
      },
      {
        sub_id: 3,
        sub_title: "Wish List",
        sub_route: "/buyer/wish-list",
        privacy: "private",
      },
      {
        sub_id: 4,
        sub_title: "Profile",
        sub_route: "/buyer/profile",
        privacy: "private",
      },
    ],
  },
];

export const create_shop_info_left = [
  {
    field_name: "Shop Name",
    field_label: "shop_name",
    placehold: "Enter new shop name",
  },
  {
    field_name: "Shop Location",
    field_label: "shop_location",
    placehold: "Enter shop location",
  },
  {
    field_name: "Contact Number",
    field_label: "contact",
    placehold: "Enter contact number",
  },
  {
    field_name: "Description",
    field_label: "shop_details",
    placehold: "Short description about your shop....",
  },
];

export const create_shop_info_right = [
  {
    field_name: "Bank Name",
    field_label: "bank_name",
    placehold: "Enter bank name for transaction",
  },
  {
    field_name: "Branch Name",
    field_label: "branch_name",
    placehold: "Enter bank-branch name",
  },
  {
    field_name: "Bank Account Number",
    field_label: "account_no",
    placehold: "Enter bank account number",
  },
  {
    field_name: "Facebook Page",
    field_label: "facebook",
    placehold: "Enter facebook shop page url",
  },
  {
    field_name: "Instagram Page",
    field_label: "instagram",
    placehold: "Enter instagram shop page url",
  },
];

export const new_products_left = [
  {
    field_name: "Product Name",
    field_label: "product_name",
    placehold: "Enter new product name",
  },
  {
    field_name: "Description",
    field_label: "description",
    placehold: "Enter product's description",
  },
];

export const new_products_right = [
  {
    field_name: "SKU",
    field_label: "sku",
    placehold: "Enter SKU",
  },
  {
    field_name: "Unit Price",
    field_label: "unit_price",
    placehold: "Enter unit price",
  },
  {
    field_name: "Discount Price",
    field_label: "discount",
    placehold: "Enter Discount price",
  },
  {
    field_name: "Units In Stock",
    field_label: "in_stock",
    placehold: "Enter units in stock",
  },
  {
    field_name: "Units On Order",
    field_label: "on_order",
    placehold: "Enter units on order",
  },
  {
    field_name: "Reorder Level",
    field_label: "reorder_level",
    placehold: "Enter unit price",
  },
];

export const category = [
  {
    name: "Sharee",
    image:
      "https://i.pinimg.com/236x/d7/2d/78/d72d786fd0a66b4264e7a95ab1b73bf7.jpg",
  },
  {
    name: "Lahenga",
    image:
      "https://i.pinimg.com/236x/d7/2d/78/d72d786fd0a66b4264e7a95ab1b73bf7.jpg",
  },
  {
    name: "Skirt",
    image:
      "https://i.pinimg.com/236x/d7/2d/78/d72d786fd0a66b4264e7a95ab1b73bf7.jpg",
  },
  {
    name: "Pant",
    image:
      "https://i.pinimg.com/236x/d7/2d/78/d72d786fd0a66b4264e7a95ab1b73bf7.jpg",
  },
  {
    name: "Gown",
    image:
      "https://i.pinimg.com/236x/d7/2d/78/d72d786fd0a66b4264e7a95ab1b73bf7.jpg",
  },
  {
    name: "Shirt",
    image:
      "https://i.pinimg.com/236x/d7/2d/78/d72d786fd0a66b4264e7a95ab1b73bf7.jpg",
  },
  {
    name: "Coat",
    image:
      "https://i.pinimg.com/236x/d7/2d/78/d72d786fd0a66b4264e7a95ab1b73bf7.jpg",
  },
];

export const sizes = [
  {
    name: "Small",
  },
  {
    name: "Medium",
  },
  {
    name: "Large",
  },
  {
    name: "Extra Large",
  },
  {
    name: "Extra Extra Large",
  },
];
export const rating = [
  {
    name: "five",
    option: 5,
  },
  {
    name: "four",
    option: 4,
  },
  {
    name: "three",
    option: 3,
  },
  {
    name: "two",
    option: 2,
  },
  {
    name: "one",
    option: 1,
  },
];

export const color = [
  {
    name: "Blue",
    value: "blue",
  },
  {
    name: "Red",
    value: 'red'
  },
  {
    name: "Green",
    value: 'green'
  },
  {
    name: "Yellow",
    value: 'yellow'
  },
  {
    name: "White",
    value: 'white'
  },
];
