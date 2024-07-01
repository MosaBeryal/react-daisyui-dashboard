import React from "react";
import { Filter, SlidersHorizontal } from "lucide-react";

const Table = () => {
  return (
    <div className="rounded-lg bg-white p-5 shadow-md">
      <div className="flex justify-between p-0 md:p-5">
        <div className="flex items-center gap-3 md:gap-4">
          <p className="text-xs md:text-lg font-bold  text-black">
            Recent Orders
          </p>
          <p className="bg-[#E6F9F5] text-[#27a95b] text-xs rounded-xl px-2">
            +2 Orders
          </p>
        </div>
        <div className="flex gap-3 md:gap-5">
          <button className="md:btn bg-white md:bg-gray-200 md:hover:bg-gray-300 border-none hover:bg-none md:btn-sm text-black flex items-center gap-2">
            <SlidersHorizontal className="w-3 h-3 font-bold text-gray-700 hidden md:visible" />
            <Filter className="w-3 h-3 font-bold text-gray-700 visible md:hidden" />
            <p className="hidden md:block lg:block text-black">Filters</p>
          </button>
          <button className="text-xs md:text-md md:btn bg-white md:bg-[#653EFE] text-[#653EFE] md:text-white hover:bg-none md:hover:bg-[#5227ff] md:btn-sm">
            See More
          </button>
        </div>
      </div>
      <div className="overflow-x-auto bg-white">
        <table className="table w-full text-black">
          <thead>
            <tr className="text-black">
              <th>
                <label>
                  <input
                    type="checkbox"
                    className="checkbox border-[#653EFE]"
                  />
                </label>
              </th>
              <th>Order Id</th>
              <th>Product</th>
              <th>Date</th>
              <th>Customer</th>
              <th>Total</th>
              <th>Payment</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th>
                <label>
                  <input
                    type="checkbox"
                    className="checkbox border-[#653EFE]"
                  />
                </label>
              </th>
              <td>#32434</td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://img.daisyui.com/tailwind-css-component-profile-2@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Hart Hagerty</div>
                    <div className="text-sm opacity-50">United States</div>
                  </div>
                </div>
              </td>

              <td>1 min ago</td>
              <td>
                Carroll Group
                <br />
                <p className="text-xs text-gray-400">Carroll@example.com</p>
              </td>
              <td>$121.00</td>
              <td>Master Card</td>
              <td>
                <div className="badge badge-sm bg-[#FFF5E7] text-[#eeb633]">
                  Processing
                </div>
              </td>
              <td>
                <button className="btn btn-xs">Details</button>
              </td>
            </tr>
            <tr>
              <th>
                <label>
                  <input
                    type="checkbox"
                    className="checkbox border-[#653EFE]"
                  />
                </label>
              </th>
              <td>#32434</td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://img.daisyui.com/tailwind-css-component-profile-3@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Brice Swyre</div>
                    <div className="text-sm opacity-50">China</div>
                  </div>
                </div>
              </td>
              <td>1 min ago</td>
              <td>
                Carroll Group
                <br />
                <p className="text-xs text-gray-400">Carroll@example.com</p>
              </td>
              <td>$121.00</td>
              <td>Visa</td>
              <td>
                <div className="badge badge-sm bg-[#FFF5E7] text-[#eeb633]">
                  Processing
                </div>
              </td>
              <td>
                <button className="btn btn-xs">Details</button>
              </td>
            </tr>
            <tr>
              <th>
                <label>
                  <input
                    type="checkbox"
                    className="checkbox border-[#653EFE]"
                  />
                </label>
              </th>
              <td>#32434</td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://img.daisyui.com/tailwind-css-component-profile-4@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Marjy Ferencz</div>
                    <div className="text-sm opacity-50">Russia</div>
                  </div>
                </div>
              </td>
              <td>1 min ago</td>
              <td>
                Carroll Group
                <br />
                <p className="text-xs text-gray-400">Carroll@example.com</p>
              </td>
              <td>$121.00</td>
              <td>Transfer</td>
              <td>
                <div className="badge badge-sm bg-[#F6F6FE] text-[#653EFE]">
                  Shipped
                </div>
              </td>
              <td>
                <button className="btn btn-xs">Details</button>
              </td>
            </tr>
            <tr>
              <th>
                <label>
                  <input
                    type="checkbox"
                    className="checkbox border-[#653EFE]"
                  />
                </label>
              </th>
              <td>#32434</td>
              <td>
                <div className="flex items-center gap-3">
                  <div className="avatar">
                    <div className="mask mask-squircle h-12 w-12">
                      <img
                        src="https://img.daisyui.com/tailwind-css-component-profile-5@56w.png"
                        alt="Avatar Tailwind CSS Component"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="font-bold">Yancy Tear</div>
                    <div className="text-sm opacity-50">Brazil</div>
                  </div>
                </div>
              </td>
              <td>1 min ago</td>
              <td>
                Carroll Group
                <br />
                <p className="text-xs text-gray-400">Carroll@example.com</p>
              </td>
              <td>$121.00</td>
              <td>Visa</td>
              <td>
                <div className="badge badge-sm text-[#91C8A8] bg-[#E7FCF6]">
                  Delivered
                </div>
              </td>
              <td>
                <button className="btn btn-xs">Details</button>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th></th>
              <th>Order Id</th>
              <th>Product</th>
              <th>Date</th>
              <th>Customer</th>
              <th>Total</th>
              <th>Payment</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default Table;
