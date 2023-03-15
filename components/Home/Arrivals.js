import useFetch from "../../hooks/useFetch";
import Loader from "../Shared/Loader";
import Product from "../Shared/Product";

const Arrivals = () => {
  const { loading, data: products } = useFetch(
    "https://fakestoreapi.com/products?limit=6"
  );
  return (
    <div className="py-10">
      <div className="container">
        <h1 className="text-2xl text-black px-10 mb-6">
          <span className="text-secondaryLight">New</span> Arrivals
        </h1>

        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 items-end justify-between gap-5">
            <Loader />
            <Loader />
            <Loader />
            <Loader />
            <Loader />
            <Loader />
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 items-end justify-between gap-5">
            {products?.map((product) => (
              <Product key={product.id} {...product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Arrivals;
