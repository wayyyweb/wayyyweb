export type MenuItem = {
  id: string;
  name: string;
  price: string;
  /** Optional short badge — used sparingly, only where it adds real signal. */
  tag?: "Signature" | "Best Seller";
};

export type MenuCategory = {
  id: string;
  label: string;
  /** Short line shown under the category tab describing the section. */
  description: string;
  items: MenuItem[];
};

export const MENU: MenuCategory[] = [
  {
    id: "kopi-minuman",
    label: "Kopi & Minuman",
    description: "Racikan kopi, teh, dan matcha — panas atau dingin.",
    items: [
      { id: "km-01", name: "Fine Robusta Tubruk", price: "10k" },
      { id: "km-02", name: "Kopi Susu Panas", price: "12k" },
      {
        id: "km-03",
        name: "Es Kopi Susu Gula Aren",
        price: "15k",
        tag: "Signature",
      },
      { id: "km-04", name: "Es Kopi Susu Vanila", price: "17k" },
      { id: "km-05", name: "Es Kopi Susu Caramel", price: "17k" },
      { id: "km-06", name: "Es Kopi Susu Butterscotch", price: "17k" },
      { id: "km-07", name: "Es Teh Solo", price: "7k" },
      { id: "km-08", name: "Teh Panas", price: "5k" },
      { id: "km-09", name: "Es Lemon Tea", price: "7k" },
      { id: "km-10", name: "Matcha Original", price: "15k" },
      { id: "km-11", name: "Matcha Latte", price: "17k" },
    ],
  },
  {
    id: "makanan",
    label: "Makanan",
    description: "Menu berat dan camilan pendamping kopimu.",
    items: [
      {
        id: "mk-01",
        name: "Beef Teriyaki",
        price: "28k",
        tag: "Best Seller",
      },
      { id: "mk-02", name: "Beef Blackpepper", price: "28k" },
      { id: "mk-03", name: "Chicken Teriyaki", price: "25k" },
      { id: "mk-04", name: "Chicken Thai Sauce", price: "25k" },
      { id: "mk-05", name: "Chicken Blackpepper", price: "25k" },
      { id: "mk-06", name: "Lauk Gila", price: "15k" },
      { id: "mk-07", name: "Nasi Telur", price: "10k" },
      { id: "mk-08", name: "Nasi Ayam", price: "15k" },
      { id: "mk-09", name: "French Fries & Sosis", price: "15k" },
      { id: "mk-10", name: "Mendoan", price: "10k" },
      { id: "mk-11", name: "Pisang Goreng", price: "10k" },
    ],
  },
];
