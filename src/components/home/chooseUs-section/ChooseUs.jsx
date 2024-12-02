import { IoShieldHalf } from "react-icons/io5";
import { IoMdCheckboxOutline } from "react-icons/io";
import { LuCalendarClock } from "react-icons/lu";
import { FaSearchDollar } from "react-icons/fa";

function ChooseUs() {
  return (
    <div
      style={{ minHeight: "100vh" }}
      className="relative flex flex-col bg-white px-4 py-16 font-sans sm:px-6 lg:px-8"
    >
      <div className="flex-1 space-y-6">
        <div
          style={{ top: "calc(1rem * 1)" }}
          className="sticky mx-auto w-full max-w-md space-y-6 rounded-xl border bg-white px-8 py-12 shadow-lg"
        >
          <div className="w-fit rounded-xl bg-orange-100 p-3">
            <IoShieldHalf color="#ea580c" size={"32px"} />
          </div>
          <h2 className="space-y-1 text-2xl font-bold leading-none">
            {/* <span className="block text-sm text-blue-700">Project #1 </span> */}

            <span className="block font-headings text-3xl">
              Licensed and Insured
            </span>
          </h2>
          <p className="font-body text-lg text-gray-700">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum,
            perspiciatis blanditiis accusamus commodi consectetur id tempora rem
            iure eligendi quos eos et autem ratione exercitationem earum laborum
            ad a sequi!
          </p>
        </div>
        <div
          style={{ top: "calc(1rem * 2)" }}
          className="sticky mx-auto w-full max-w-md space-y-4 rounded-xl border bg-white px-8 py-12 shadow-lg"
        >
          <div className="w-fit rounded-xl bg-orange-100 p-3">
            <IoMdCheckboxOutline color="#ea580c" size={"32px"} />
          </div>
          <h2 className="space-y-1 text-2xl font-bold leading-none">
            {/* <span className="block text-sm text-blue-700">Project #1 </span> */}

            <span className="block font-headings text-3xl">
              100% Satisfaction Guarantee
            </span>
          </h2>
          <p className="font-body text-lg text-gray-700">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum,
            perspiciatis blanditiis accusamus commodi consectetur id tempora rem
            iure eligendi quos eos et autem ratione exercitationem earum laborum
            ad a sequi!
          </p>
        </div>
        <div
          style={{ top: "calc(1rem * 3)" }}
          className="sticky mx-auto w-full max-w-md space-y-4 rounded-xl border bg-white px-8 py-12 shadow-lg"
        >
          <div className="w-fit rounded-xl bg-orange-100 p-3">
            <LuCalendarClock color="#ea580c" size={"32px"} />
          </div>
          <h2 className="space-y-1 text-2xl font-bold leading-none">
            {/* <span className="block text-sm text-blue-700">Project #1 </span> */}

            <span className="block font-headings text-3xl">
              Flexible Scheduling
            </span>
          </h2>
          <p className="font-body text-lg text-gray-700">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum,
            perspiciatis blanditiis accusamus commodi consectetur id tempora rem
            iure eligendi quos eos et autem ratione exercitationem earum laborum
            ad a sequi!
          </p>
        </div>
        <div
          style={{ top: "calc(1rem * 4)" }}
          className="sticky mx-auto w-full max-w-md space-y-4 rounded-xl border bg-white px-8 py-12 shadow-lg"
        >
          <div className="w-fit rounded-xl bg-orange-100 p-3">
            <FaSearchDollar color="#ea580c" size={"32px"} />
          </div>
          <h2 className="space-y-1 text-2xl font-bold leading-none">
            {/* <span className="block text-sm text-blue-700">Project #1 </span> */}

            <span className="block font-headings text-3xl">
              Transparent Pricing
            </span>
          </h2>
          <p className="font-body text-lg text-gray-700">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum,
            perspiciatis blanditiis accusamus commodi consectetur id tempora rem
            iure eligendi quos eos et autem ratione exercitationem earum laborum
            ad a sequi!
          </p>
        </div>
      </div>
    </div>
  );
}

export default ChooseUs;
