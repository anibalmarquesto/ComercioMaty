import { Grid } from "@mui/material";
import { array } from "./product-data";
import Products from "./Products";
import CheckoutCard from "./CheckoutCard";
import { useEffect, useState } from "react";

export default function ProductoDeLaCard(props) {
  const { productosCarrito, onCarritoChange } = props;

  return (
    <div className="row">
      <div className="clumn">
        <Grid container spacing={2}>
          {productosCarrito.map((product, idx) => {
            return (
              <Grid item xs={12} sm={6} md={4}>
                <CheckoutCard
                  product={product}
                  onCarritoChange={onCarritoChange}
                />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
}
