import React from "react";
import Link from "next/link";
import mongoose from "mongoose";
import Product from "models/Product";

const Sneaker = ({ products }) => {
  console.log(products);
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center">
            {products.map((item) => {
              return (
                <>
                  <Link
                    passHref={true}
                    key={item._id}
                    href={`/product/${item.slug}`}
                  >
                    <div className="lg:w-1/1 md:w-1/2 p-4 w-full  cursor-pointer  shadow-lg m-5">
                      <a className="block relative  rounded overflow-hidden">
                        <img
                          alt="ecommerce"
                          className="m-auto md:mx-0 h-[30vh] md:h-[36vh] block"
                          src={item.img}
                        />
                      </a>
                      <div className="mt-4 text-center md:text-left ">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                          Snaekers
                        </h3>
                        <h2 className="text-gray-900 title-font text-lg font-medium">
                          {item.name}
                        </h2>
                        <p className="mt-1">{item.title}</p>
                        <p className="mt-1"> S, M, L, XL, XXL</p>
                      </div>
                    </div>
                  </Link>
                  <div className="flex  flex-wrap -m-4 justify-center">
                    <Link
                      href={"/product/wear-with-pride"}
                      className="w-1/4 md:w-1/3"
                    >
                      {" "}
                      <div className="lg:w-1/1 p-4 w-full  cursor-pointer  shadow-lg m-5">
                        <a className="block relative  rounded overflow-hidden flex justify-center">
                          <img
                            alt="ecommerce"
                            className="m-auto md:mx-0 h-[30vh] md:h-[36vh] md:mx-0 w-[24vh] md:w-[30vh] block"
                            src="https://source.unsplash.com/random/900×700/?formal-shoes"
                          />
                        </a>
                        <div className="mt-4 text-center md:text-left ">
                          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                            CATEGORY
                          </h3>
                          <h2 className="text-gray-900 title-font text-lg font-medium">
                            Formals
                          </h2>
                          <p className="mt-1">₹4990</p>
                          <p className="mt-1"> S, M, L, XL, XXL</p>
                        </div>
                      </div>
                    </Link>
                  </div>
                </>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URL);
  }

  let products = await Product.find({ category: "sports" });
  return {
    props: { products: JSON.parse(JSON.stringify(products)) }, // will be passed to the page component as props
  };
}

export default Sneaker;
