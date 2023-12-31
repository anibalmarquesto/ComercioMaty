import { Grid } from "@mui/material";
import { array } from "./product-data";
import Products from "./Products";

export default function Product1(props) {
  const { onCarritoChange } = props;

  return (
    <div className="row">
      <div className="clumn">
        <Grid container spacing={2}>
          {array.map((product, idx) => {
            return (
              <Grid item xs={12} sm={6} md={4}>
                <Products product={product} onCarritoChange={onCarritoChange} />
              </Grid>
            );
          })}
        </Grid>
      </div>
    </div>
  );
}
