// let data = {
//   name: "누나네 식당",
//   category: "western",
//   address: {
//     city: "incheon",
//     detail: "somewhere",
//     zipCode: 2342352,
//   },
//   menu: [
//     { name: "rose pasta", price: 2000, category: "PASTA" },
//     { name: "garlic steak", price: 3000, category: "PASTA" },
//   ],
// };

// 타입 만들기 : interface, type
// 큰차이는 없는데 사용할 수 있는 메서드와 구문이 좀 다름

export type Restaurant = {
  name: string;
  category: string;
  address: Address;
  menu: Menu[];
};
// 디벨롭 하기
export type Address = {
  city: string;
  detail: string;
  zipCode?: number;
};
// ? : 있을수도 있고 없을수도 있다
// 주의점 : 없어도 괜찮다는 의미라서 반드시 있어야 하는데 없어도 된다는 상황을 일으킬 수 있다.
export type Menu = {
  name: string;
  price: number;
  category: string;
};

// Omit
export type AddressWithoutZipCode = Omit<Address, "zipCode">;

// Pick
export type RestaurantOnlyCategory = Pick<Restaurant, "category">;

// API
export type ApiResponse<T> = {
  data: T[];
  totalPage: number;
  page: number;
};

export type RestaurantResponse = ApiResponse<Restaurant>;
export type MenuResponse = ApiResponse<Menu>;
