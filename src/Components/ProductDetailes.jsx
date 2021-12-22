import React from "react";
// import PerPieceTable from "./PerPieceTable";
import RegLargeTable from "./RegLargeTable";
import ScoopTable from "./ScoopTable";
export default function ProductDetailes({ product }) {
  return product.category === "Ice Cream -Scoop" ? (
    <ScoopTable product={product} />
  ) : (
    <RegLargeTable product={product} />
  );
}
//   return product.category === "FALOODA" ||
//     product.category === "FRESH JUICES" ||
//     product.category === "SHAKES" ||
//     product.category === "HAMZA SPECIAL JUICE" ||
//     product.category === "CHAAT" ||
//     product.category === "SOUP" ? (
//     <RegLargeTable product={product} />
//   ) : product.category === "Ice Cream - Tubs 120ml" ||
//     product.category === "Family Tub 1l" ? (
//     <PerPieceTable product={product} />
//   ) : product.category === `Ice Cream - Karen's Kulfi` ||
//     product.category === "HAMZA SPECIAL TEA" ||
//     product.category === "PAAN" ||
//     product.category === "FOOD" ? (
//     <PerPieceTable product={product} />
//   ) : product.category === "Ice Cream -Scoop" ? (
//     <ScoopTable product={product} />
//   ) : (
//     ""
//   );
// }
