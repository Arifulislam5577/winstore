import { useRouter } from "next/router";
import useFetch from "../../hooks/useFetch";

const SingleProduct = () => {
  const { query } = useRouter();

  const { loading, data: product } = useFetch(
    `https://fakestoreapi.com/products/${query?.id}`
  );

  if (loading) {
    return (
      <section className="product py-10">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 justify-center">
            <div className="col-span-1 text-center flex justify-center h-96 bg-gray-100"></div>
            <div className="col-span-1 space-y-4">
              <div className="bg-gray-100 h-10 w-1/2 animate-pulse"></div>
              <div className="bg-gray-100 h-10 animate-pulse"></div>
              <div className="bg-gray-100 h-32 animate-pulse"></div>

              <div className="grid grid-cols-2 gap-3">
                <div className="h-10 bg-gray-100 animate-pulse col-span-1"></div>
                <div className="h-10 bg-gray-100 animate-pulse col-span-1"></div>
              </div>
              <div className="bg-gray-100 h-10 w-3/4 animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="product py-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 justify-center">
          <div className="col-span-1 text-center flex justify-center ">
            <img src={product.image} className="h-96 " alt={product.title} />
          </div>
          <div className="col-span-1">
            <h1 className="text-xl font-bold">{product.title}</h1>
            <p className="text-gray-500 my-5">{product.description}</p>
            <h3 className="text-slate-700 font-bold mb-5">
              Rating - {product.rating?.rate} from {product.rating?.count}{" "}
              reviews
            </h3>
            <h3 className="text-slate-700 font-bold mb-5">
              Price - ${product.price}
            </h3>
            <button className="px-6 py-2  text-white bg-secondaryDeep uppercase transition-all">
              add to cart
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
