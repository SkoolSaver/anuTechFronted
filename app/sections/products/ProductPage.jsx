import GradientCard from "../common/GradientCard";
import { products, webDesign2 } from "../components/helpers/content";

const ProductPage = () => {
  return (
    <GradientCard
      style={{ gridTemplateColumns: "repeat(1, 1fr)" }}
      header={products.header}
      content={products.content}
      cardDetails={products}
    >
      {/* <img
        src="/coming-soon.png"
        alt="comming-soon"
        height={100}
        width="100%"
      /> */}
    </GradientCard>
  );
};

export default ProductPage;
