import React from "react";
import Table from "../components/Table";
import Card from "../components/Card";
import SalesChart from "../components/SalesChart";
import ExpenseCard from "../components/ExpenseCard";

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
        <div className="w-full md:w-1/2 bg-white p-4 rounded-lg shadow-md pt-9">
          <div className="flex justify-between items-center">
            <h1 className="text-lg font-bold text-black">
              Expense By Category
            </h1>
            <p className="text-lg font-bold text-black">$500</p>
          </div>
          <div className="flex flex-col gap-5 lg:gap-4 pt-12">
            <ExpenseCard
              category={"Food and Beverages"}
              value={"20%"}
              amount={"$120.00"}
              color={"[#fdf2e8]"}
              textColor={"[#f59232]"}
              percentage={20}
            />
            <ExpenseCard
              category={"Transport"}
              value={"30%"}
              amount={"$120.00"}
              color={"[#e8e3fc]"}
              textColor={"[#653EFE]"}
              percentage={30}
            />
             <ExpenseCard
              category={"Entertainment"}
              value={"30%"}
              amount={"$230.00"}
              color={"[#f9efed]"}
              textColor={"[#34BD63]"}
              percentage={60}
            />
    
    
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
