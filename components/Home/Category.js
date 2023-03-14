import CategoryBox from "../Shared/CategoryBox";

const Category = () => {
  const categoriesData = [
    { id: 1, title: "Electronics", img: "/images/categories/cate1.png" },
    { id: 2, title: "Fashion", img: "/images/categories/cate2.png" },
    { id: 3, title: "Appliances", img: "/images/categories/cate3.png" },
    { id: 4, title: "Babies Store", img: "/images/categories/cate4.png" },
  ];

  return (
    <div className="py-5">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-center justify-center px-6">
          {categoriesData?.map((item) => (
            <CategoryBox key={item.id} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;
