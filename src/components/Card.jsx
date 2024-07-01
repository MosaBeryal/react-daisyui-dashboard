import { ArrowUpRight, CircleDollarSign } from "lucide-react";

const Card = ({ variant }) => {
  return (
    <div className="card bg-white w-full md:max-w-[20rem] text-black shadow-md">
      <div className="card-body p-0">
        <div className="flex items-center justify-between">
          {/* Title */}
          <div>
            <h2 className="card-title">Total Customers</h2>
          </div>
          {/* logo */}
          <div>
            <CircleDollarSign className={`${variant}`} />
          </div>
        </div>
        <p className="text-lg font-bold">$123,400</p>
        <div className="card-actions justify-between">
          <div className={`flex gap-2 ${variant} items-center`}>
            <p className="text-xs">10%</p>
            <ArrowUpRight size={14} />
          </div>
          <button className="text-xs">See Details</button>
        </div>
      </div>
    </div>
  );
};

export default Card;
