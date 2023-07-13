import React, { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  AiOutlineShoppingCart,
  AiFillCloseCircle,
  AiOutlinePlusCircle,
  AiOutlineMinusCircle,
} from "react-icons/ai";

import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import CategoryIcon from "@mui/icons-material/Category";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import PersonIcon from "@mui/icons-material/Person";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const NavBar = ({ cart, addtoCart, removeFromCart, clearCart, subTotal }) => {
  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };

  const ref = useRef();

  return (
    <div className="flex flex-col md:flex-row md:justify-start justify-center items-center  py-2 shadow-md sticky top-0 bg-white z-10 ">
      <div className="logo mx-5">
        <Link href={"/"}>
          {" "}
          <Image
            src="/shoeKart.png"
            width="80"
            height="30"
            alt="shoeKart"
          />{" "}
        </Link>
      </div>

      <div className="nav">
        <ul className="flex items-center space-x-6 font-bold md:text-md">
          <Link href={"/sneaker"}>
            {" "}
            <li>Sneaker</li>{" "}
          </Link>
          <Link href={"/formals"}>
            {" "}
            <li>Formals</li>{" "}
          </Link>
          <Link href={"/sports"}>
            {" "}
            <li>Sports</li>{" "}
          </Link>
        </ul>
      </div>

      <div
        
        className="cart cursor-pointer absolute right-0 top-4 mx-5 flex"
      >
        <Link href={'/login'} > <a> <PersonIcon className="text-xl  md:text-3xl my-3" /> </a> </Link>
        <ShoppingCartIcon onClick={toggleCart} className="text-xl  md:text-3xl my-3 " />
      </div>

      <div
        ref={ref}
        className={`sidebar lg:absolute fixed lg:top-0 bottom-20 right-0 bg-yellow-100 dark:bg-rose-900 dark:text-white transition-transform transform translate-x-full translate-x-0'} md:rounded-b-xl rounded-xl lg:h-[90vh] shadow-md z-10 overflow-y-scroll`}
      >
        <CloseIcon
          className="text-red-600 rounded-full border-2 p-1 text-3xl absolute top-0 right-0 border-red-600 m-4 cursor-pointer"
          onClick={toggleCart}
        ></CloseIcon>

        <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 text-gray-800 dark:text-white">
          <h2 className="text-xl font-semibold">Your cart</h2>
          <ul className="flex flex-col divide-y divide-gray-300">
            {/* to display no itmes in the cart message  */}
            {Object.keys(cart).length == 0 && (
              <div className="mb-10">No Items in the cart</div>
            )}

            {/* mapping cart items  */}
            {Object.keys(cart).map((k) => {
              return (
                <li
                  key={k}
                  className="flex flex-col py-6 sm:flex-row sm:justify-between"
                >
                  <div className="flex w-full space-x-2 sm:space-x-4">
                    {/* <img
                            className="flex-shrink-0 object-cover w-20 h-20 border-transparent rounded outline-none sm:w-32 sm:h-32 bg-gray-500"
                            src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?ixlib=rb-1.2.1&amp;ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;auto=format&amp;fit=crop&amp;w=1350&amp;q=80"
                            alt="Polaroid camera"
                          /> */}
                    <div className="flex flex-col justify-between w-full pb-4">
                      <div className="flex justify-between w-full pb-2 space-x-2">
                        <div className="space-y-1">
                          <h3 className="text-lg font-semibold leading-snug sm:pr-8">
                            <span>{cart[k].productName}</span>{" "}
                            <span>{cart[k].size}</span>
                          </h3>
                          <p className="">
                            Items:{" "}
                            <span className="font-semibold">
                              {cart[k].quantity}
                            </span>
                          </p>
                          <p className="">₹{cart[k].price}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-lg font-semibold">
                            ₹{cart[k].price * cart[k].quantity}
                          </p>
                        </div>
                      </div>
                      <div className="flex text-lg divide-x">
                        <button
                          type="button"
                          className="flex items-center px-2 py-1 pl-0 space-x-1"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 512 512"
                            className="w-4 h-4 fill-current"
                          >
                            <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                            <rect
                              width="32"
                              height="200"
                              x="168"
                              y="216"
                            ></rect>
                            <rect
                              width="32"
                              height="200"
                              x="240"
                              y="216"
                            ></rect>
                            <rect
                              width="32"
                              height="200"
                              x="312"
                              y="216"
                            ></rect>
                            <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                          </svg>
                          <span>Remove</span>
                        </button>
                        <div className="flex items-center flex-row px-2 py-1 space-x-1">
                          <RemoveIcon
                            onClick={() => {
                              removeFromCart(
                                k,
                                1,
                                cart[k].price,
                                cart[k].productName,
                                cart[k].size,
                                cart[k].variant
                              );
                            }}
                            className="cursor-pointer"
                          ></RemoveIcon>
                          <span>{cart[k].quantity}</span>
                          <AddIcon
                            onClick={() => {
                              addtoCart(
                                k,
                                1,
                                cart[k].price,
                                cart[k].productName,
                                cart[k].size,
                                cart[k].variant
                              );
                            }}
                            className="cursor-pointer"
                          ></AddIcon>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              );
            })}
          </ul>

          <div className="space-y-1 text-right">
            <p>
              Total amount:
              <span className="">₹{subTotal}</span>
            </p>
            {!Object.keys(cart).length == 0 && (
              <p className="text-sm ">
                *not including taxes and shipping costs
              </p>
            )}
          </div>

          <div className="flex justify-end space-x-4">
            <button
              type="button"
              className="px-6 py-2 border rounded-md border-rose-600 dark:bg-white dark:text-black"
              onClick={toggleCart}
            >
              Back <span className="sr-only sm:not-sr-only">to shop</span>
            </button>

            {!Object.keys(cart).length == 0 && (
              <button
                type="button"
                className="px-6 py-2 border rounded-md border-rose-600 dark:bg-white dark:text-black"
                onClick={() => {
                  clearCart();
                  setTimeout(() => toggleCart(), 500);
                }}
              >
                <span className="">
                  <DeleteOutlineIcon></DeleteOutlineIcon>
                </span>
              </button>
            )}

            {!Object.keys(cart).length == 0 && (
              <button
                type="button"
                className="px-6 py-2 border rounded-md bg-rose-600 text-gray-50 border-rose-600"
              >
                <Link href="/checkout">
                  <span className="sr-only sm:not-sr-only">Continue to </span>
                  Checkout
                </Link>
              </button>
            )}
          </div>

          <div className="flex">
            <Link href="/checkout">
              <button className="flex mr-2 text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded text-sm">
                <BookmarkIcon className="m-1" /> Checkout
              </button>{" "}
            </Link>

            <button
              onClick={clearCart}
              className="flex mr-2 text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded text-sm"
            >
              <BookmarkIcon className="m-1" /> Clear Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
