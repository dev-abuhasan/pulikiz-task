import Img from "@/components/atoms/img";
import CustomSelect from "@/components/atoms/select";
import cartImg from '@/services/image/placeholder/car.png';
import { v1_check_box, v1_check_circle, v1_location_on } from "@/services/svg/svg";
import React from "react";

const Home = () => {
  return (
    <div>
      <div className="bg-light px-4 py-5 rounded-b-3xl shadow-sm">
        <div className="grid grid-cols-12 gap-4">
          <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2">
            <CustomSelect />
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2">
            <label htmlFor="" className="flex flex-col">
              <span className="text-gray-400 uppercase px-5">Form</span>
              <input type="text" className="bg-gray-200 px-4 py-3 font-semibold rounded-full" placeholder="location" />
            </label>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2">
            <label htmlFor="" className="flex flex-col">
              <span className="text-gray-400 uppercase px-5">To</span>
              <input type="text" className="bg-gray-200 px-4 py-3 font-semibold rounded-full" placeholder="location" />
            </label>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2">
            <label htmlFor="" className="flex flex-col">
              <span className="text-gray-400 uppercase px-5">To</span>
              <input type="date" className="bg-gray-200 px-4 py-3 font-semibold rounded-full" />
            </label>
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2">
            <CustomSelect label="Pick-up Time" defaultSelected="03:00 AM" width />
          </div>
          <div className="col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-3 xl:col-span-2">
            <div className="flex items-end h-full ml-0 xl:ml-8">
              <button className="bg-error text-light font-semibold w-full rounded-full px-2 py-3 mb-[2px]">Search&nbsp;Flight</button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-4 mt-6 mx-0 lg:mx-6">
        <div className="col-span-12 xl:col-span-9 lg:col-span-7">
          <div className="bg-gray-50 flex flex-wrap items-center justify-between px-4 pb-3 rounded-lg overflow-hidden shadow-sm">
            <h2 className="text-2xl font-semibold mt-3">Car Details</h2>
            <div className="flex flex-wrap items-center justify-between space-4">
              <button className="bg-dark text-light font-semibold rounded-full px-3 py-2 mt-3">Your Details</button>
              <button className="bg-none font-semibold rounded-full px-3 py-1  mt-3">Booking Details</button>
              <button className="bg-none font-semibold rounded-full px-3 py-1  mt-3">Location</button>
            </div>
          </div>
          <div className="mt-2 bg-light rounded-lg overflow-hidden shadow-sm flex flex-col items-center justify-center px-0 md:px-10 md:flex-row">
            <div className="flex items-center w-full p-3" style={{ maxWidth: '165px' }}>
              <span className="text-brand">{React.cloneElement(v1_check_circle, { height: '30px', width: '30px' })}</span>
              <span className="text-sm font-light mx-2">Taxi - Selected</span>
            </div>
            <hr className="h-1 w-full mt-1" />
            <div className="flex items-center w-full p-3" style={{ maxWidth: '165px' }}>
              <span className="text-brand">{React.cloneElement(v1_check_circle, { height: '30px', width: '30px' })}</span>
              <span className="text-sm font-light mx-2">Taxi - Selected</span>
            </div>
            <hr className="h-1 w-full mt-1" />
            <div className="flex items-center w-full p-3" style={{ maxWidth: '165px' }}>
              <span className="text-brand">{React.cloneElement(v1_check_circle, { height: '30px', width: '30px' })}</span>
              <span className="text-sm font-light mx-2">Taxi - Selected</span>
            </div>
          </div>
          <div className="bg-light rounded-lg overflow-hidden shadow-sm mt-1 px-3 lg:px-14 py-5">
            <h1 className="text-3xl font-semibold">Your Details</h1>
            <p className="text-gray-400 font-light py-3">Whether you are in town for business or leisure, San Francisco Marriott Marquis welcomes travelers to Northern California with exceptional service, spacious</p>
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 xl:col-span-3">
                <CustomSelect padding rounded="rounded-lg" label="Title" uppercase="capitalize" />
              </div>
              <div className="col-span-12  md:col-span-6 xl:col-span-5">
                <label htmlFor="" className="flex flex-col">
                  <span className="text-gray-400">First Name</span>
                  <input type="text" className="bg-gray-200 px-4 py-3 font-semibold rounded-lg" placeholder="location" />
                </label>
              </div>
              <div className="col-span-12 md:col-span-6 xl:col-span-4">
                <label htmlFor="" className="flex flex-col">
                  <span className="text-gray-400">Last Name</span>
                  <input type="text" className="bg-gray-200 px-4 py-3 font-semibold rounded-lg" placeholder="location" />
                </label>
              </div>
              <div className="col-span-12">
                <label htmlFor="" className="flex flex-col">
                  <span className="text-gray-400">Email</span>
                  <input type="text" className="bg-gray-200 px-4 py-3 font-semibold rounded-lg" placeholder="location" />
                </label>
              </div>
              <div className="col-span-12 xl:col-span-4">
                <CustomSelect rounded="rounded-lg" padding="" label="Title" uppercase="capitalize" />
              </div>
              <div className="col-span-12 xl:col-span-8">
                <label htmlFor="" className="flex flex-col">
                  <span className="text-gray-400">First Name</span>
                  <input type="text" className="bg-gray-200 px-4 py-3 font-semibold rounded-lg" placeholder="location" />
                </label>
              </div>
              <div className="col-span-12">
                <label htmlFor="" className="flex flex-col bg-blue-50 rounded-lg p-5">
                  <div className="flex items-center">
                    <span className="text-brand mr-2">{v1_check_box}</span>
                    <span className="font-semibold">I have coupon</span>
                  </div>
                  <input type="text" className="py-3 ml-8 focus:outline-none bg-transparent border-b !focus:border-b" placeholder="Enter your coupon number" />
                </label>
                <br />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-light col-span-12 xl:col-span-3 lg:col-span-5 rounded-lg overflow-hidden shadow-sm">
          <h1 className="font-semibold text-lg bg-gray-50/25 p-3">Fare Summary</h1>
          <div className="bg-light p-3">
            <Img src={cartImg} alt="flight" />
            <h2 className="font-semibold">White Jaguar XF 2 Car</h2>
            <p className="text-sm flex items-center text-gray-400 mt-1">
              <span className="text-brand mr-2">{v1_location_on}</span>
              780 Mission Street, San Francisco
            </p>
            <div>
              <h3 className="font-semibold my-4 ">Base Fare</h3>
              <label htmlFor="" className="flex items-center justify-between border-2 rounded-md overflow-hidden">
                <input className="text-xs w-full p-3" type="text" placeholder="Adult (1 X $120)" />
                <span className="font-semibold text-xs px-3">$120</span>
              </label>
            </div>
            <div>
              <h3 className="font-semibold my-4 ">Others</h3>
              <label htmlFor="" className="flex items-center justify-between border-2 rounded-md  overflow-hidden">
                <input className="text-xs w-full p-3" type="text" placeholder="Others service" />
                <span className="font-semibold text-xs px-3">$30</span>
              </label>
            </div>
            <h4 className="text-3xl font-semibold mt-8 mb-6 text-right">
              150
              <span className="text-sm font-light text-gray-300"> USD</span>
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;