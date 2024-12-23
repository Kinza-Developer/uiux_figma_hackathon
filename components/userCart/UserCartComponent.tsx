import ItemCard from "./ItemCard";

const UserCartComponent = () => {
  return (
    <div className="bg-lightGray h-[1466px] mx-auto w-[390px] md:w-[980px] lg:w-[1440px] md:h-[749px] lg:px-[5rem] md:px-[2rem] md:py-[2rem] py-4 px-6">
        <h3 className="font-clash font-normal leading-[33.6px] text-darkPrimary mb-4 my-4 text-2xl md:text-4xl">Your shopping cart</h3>

        <div className="hidden lg:block">
           <div className="flex relative md:top-[4.2rem] ">
           <p className="pl-[1rem]text-lg font-clash font-normal leading-[19.6px] text-darkPrimary">Product</p>
            <p className="relative left-[44rem] font-clash font-normal text-lg leading-[19.6px] text-darkPrimary">Quantity</p>
            <p className="relative left-[60rem] font-clash font-normal text-lg leading-[19.6px] text-darkPrimary">Total</p>
           </div>
            <hr className="bg-lightGray mt-[5rem]"/>
        </div>
     <div className="mt-12">
     <ItemCard image="graystoneVase" heading="Graystone vase" para="A timeless ceramic vase with 
a tri color grey glaze." />
     </div>
  <div className="mt-16 md:hidden">
  <ItemCard image="whiteVase" heading="Basic white vase" para="Beautiful and simple this is
one for the classics." />
  </div>

  <div className="mt-12 ">
     <ItemCard image="goldenLamp" heading="Graystone vase" para="A timeless ceramic vase with 
a tri color grey glaze." />
     </div>

     <div className="mt-12 ">
     <ItemCard image="3chairs" heading="Graystone vase" para="A timeless ceramic vase with 
a tri color grey glaze." />
     </div>
  <div className="md:hidden mt-16">
  <ItemCard image="Vase" heading="Basic white vase" para="Beautiful and simple this is
one for the classics." />
  </div>

  <hr className="bg-white mt-16"/>
  <div className="text-right h-[62px] mt-8 lg:pr-28 md:pr-[14rem]">
    <p className="h-[34px] font-clash font-normal left-7 text text-[#4E4D93] text-right text-xl">Subtotal <span className="text-darkPrimary">&#163; 425</span></p>
    <p className="font-satoshi font-normal leading-[21px] text-[#4E4D93] text-right">Taxes and shipping are calculated at checkout</p>
  </div>

  <button className="relative w-[342px] h-[56px] px-[32px] py-[16px] bg-darkPrimary font-satoshi font-normal leading-[24px] text-white hover:bg-navbarColor mt-12 lg:left-[60.6rem] md:left-[22rem] lg:w-[200px] lg:bottom-10">
  Go to checkout
  </button>
    </div>
  );
};

export default UserCartComponent;