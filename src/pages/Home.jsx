import React from "react";
import Table from "../components/Table";
import Card from "../components/Card";
import SalesChart from "../components/SalesChart";

const Home = () => {
  return (
    <div className="flex flex-col overflow-y-scroll gap-5 px-5">
      {/* Cards */}
      <div className="flex flex-wrap justify-center md:justify-between gap-2">
        <Card variant={"text-[#f59232]"} />
        <Card variant={"text-[#653EFE]"} />
        <Card variant={"text-[#E5746A]"} />
        <Card variant={"text-[#34BD63]"} />
      </div>
      {/* Chart Section */}
      <div className="flex flex-col md:flex-row w-full gap-4">
        <div className="w-full md:w-2/3">
          <SalesChart />
        </div>
        <div className="w-full md:w-1/3 bg-white p-4 rounded-lg shadow-md pt-9">
          <div className="flex justify-between items-center">
            <h1 className="text-lg font-bold text-black">
              Expense By Category
            </h1>
            <p className="text-lg font-bold text-black">$500</p>
          </div>
          <div className="flex flex-col gap-5 lg:gap-4 pt-12">
            <div className="bg-[#fdf2e8] p-5 rounded-lg shadow-md flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div
                  className="radial-progress text-[#f59232] text-sm p-2"
                  style={{
                    "--value": 20,
                    "--size": "2rem",
                    "--thickness": "3px",
                  }}
                  role="progressbar"
                >
                  20%
                </div>
                <div>
                  <p className="text-lg text-black">Food and Beverages</p>
                  <p className="font-bold text-gray-400">$120.00</p>
                </div>
              </div>
              <div className="text-black">20%</div>
            </div>
            <div className="bg-[#e8e3fc] p-5 rounded-lg shadow-md flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div
                  className="radial-progress text-[#653EFE] text-sm p-2"
                  style={{
                    "--value": 30,
                    "--size": "2rem",
                    "--thickness": "3px",
                  }}
                  role="progressbar"
                >
                  30%
                </div>
                <div>
                  <p className="text-lg text-black">Transport</p>
                  <p className="font-bold text-gray-400">$150.00</p>
                </div>
              </div>
              <div className="text-black">30%</div>
            </div>
            <div className="bg-[#f9efed] p-5 rounded-lg shadow-md flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div
                  className="radial-progress text-[#34BD63] text-sm p-2"
                  style={{
                    "--value": 60,
                    "--size": "2rem",
                    "--thickness": "3px",
                  }}
                  role="progressbar"
                >
                  60%
                </div>
                <div>
                  <p className="text-lg text-black">Entertainment</p>
                  <p className="font-bold text-gray-400">$230.00</p>
                </div>
              </div>
              <div className="text-black">60%</div>
            </div>
          </div>
        </div>
      </div>
      {/* Table Section */}
      <div className="w-full">
        <Table />
      </div>
    </div>
  );
};

export default Home;
