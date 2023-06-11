import React from "react";
import DefaultLayout from "../../layouts/Default";
import {
  FaCalendar,
  FaChevronDown,
  FaChevronRight,
} from "react-icons/fa";

export default function Statistics() {
  return (
    <DefaultLayout>
      <div className="" style={{ height: "100vh" }}>
        <div className="flex items-start justify-between ">
          <div className="text-white">
            <p className="text-4xl">Overview</p>
            <p className="uppercase text-gray-400">Statistics</p>
          </div>
          <button className="flex items-center justify-between gap-2 rounded bg-blue-700 hover:bg-blue-500 active:bg-blue-600 px-4 py-3 uppercase text-white">
            <span>statistic overview</span>
            <FaChevronDown />
          </button>
        </div>

        <div className="my-4 grid w-full grid-cols-4 py-4">
          <div className="border-2 border-indigo-700 bg-indigo-600 p-6">
            <p className="uppercase text-gray-400">all time sales</p>
            <p className="text-3xl text-white">$ 11,060.92</p>
          </div>
          <div className="border-2 border-indigo-700 bg-indigo-600 p-6">
            <p className="uppercase text-gray-400">year to date</p>
            <p className="text-3xl text-white">$ 5,011.23</p>
          </div>
          <div className="border-2 border-indigo-700 bg-indigo-600 p-6">
            <p className="uppercase text-gray-400">month to date</p>
            <p className="text-3xl text-white">$ 400.62</p>
          </div>
          <div className="border-2 border-indigo-700 bg-indigo-600 p-6">
            <p className="uppercase text-gray-400">today</p>
            <p className="text-3xl text-white">$ 9.80</p>
          </div>
        </div>

        <div className="bg-indigo-600 p-4 text-white">
          <div className="mb-4 flex items-center gap-4">
            <div className="relative my-2 w-2/5">
              <div
                className="absolute flex h-[50px] w-[50px] items-center justify-center rounded-s bg-gray-500 p-[4px] text-gray-300 "
                style={{
                  boxSizing: "border-box",
                  top: "50%",
                  left: 0,
                  transform: "translateY(-50%)",
                }}
              >
                <FaCalendar />
              </div>
              <input
                style={{
                  height: 50,
                  boxSizing: "border-box",
                  paddingLeft: 52,
                }}
                type="date"
                className="w-full rounded bg-indigo-700"
              />
            </div>
            <div className="relative my-2 w-2/5">
              <div
                className="absolute flex h-[50px] w-[50px] items-center justify-center rounded-s bg-gray-500 p-[4px] text-gray-300 "
                style={{
                  boxSizing: "border-box",
                  top: "50%",
                  left: 0,
                  transform: "translateY(-50%)",
                }}
              >
                <FaCalendar />
              </div>
              <input
                style={{
                  height: 50,
                  boxSizing: "border-box",
                  paddingLeft: 52,
                }}
                type="date"
                className="w-full rounded bg-indigo-700"
              />
            </div>

            <div className="my-2 w-1/5">
              <button className="h-[50px] flex w-full items-center justify-center gap-4 bg-lime-600 hover:bg-lime-400 active:bg-lime-700 px-3 py-2 text-white rounded">
                <span className="uppercase">generate</span>
                <FaChevronRight />
              </button>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="my-4">
              <p className="font-bold capitalize">popular packages</p>
              <table className="mt-2 w-full">
                <thead>
                  <tr className="bg-indigo-700">
                    <th className="w-1/2 p-2 text-left uppercase">package</th>
                    <th className="w-1/4 p-2 text-left uppercase">purchases</th>
                    <th className="w-1/4 p-2 text-left uppercase">value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan={3} className="bg-indigo-500 p-2">
                      Not enough data to display in this statistic
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="my-4">
              <p className="font-bold capitalize">popular customers</p>
              <table className="mt-2 w-full">
                <thead>
                  <tr className="bg-indigo-700">
                    <th className="w-1/2 p-2 text-left uppercase">customer</th>
                    <th className="w-1/4 p-2 text-left uppercase">purchases</th>
                    <th className="w-1/4 p-2 text-left uppercase">value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan={3} className="bg-indigo-500 p-2">
                      Not enough data to display in this statistic
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="my-4">
              <p className="font-bold capitalize">popular categories</p>
              <table className="mt-2 w-full">
                <thead>
                  <tr className="bg-indigo-700">
                    <th className="w-1/2 p-2 text-left uppercase">category</th>
                    <th className="w-1/4 p-2 text-left uppercase">purchases</th>
                    <th className="w-1/4 p-2 text-left uppercase">value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan={3} className="bg-indigo-500 p-2">
                      Not enough data to display in this statistic
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="my-4">
              <p className="font-bold capitalize">popular emails</p>
              <table className="mt-2 w-full">
                <thead>
                  <tr className="bg-indigo-700">
                    <th className="w-1/2 p-2 text-left uppercase">package</th>
                    <th className="w-1/4 p-2 text-left uppercase">purchases</th>
                    <th className="w-1/4 p-2 text-left uppercase">value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan={3} className="bg-indigo-500 p-2">
                      Not enough data to display in this statistic
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="col-span-2 my-4">
              <p className="font-bold capitalize">popular servers</p>
              <table className="mt-2 w-full">
                <thead>
                  <tr className="bg-indigo-700">
                    <th className="w-1/2 text-left uppercase">package</th>
                    <th className="w-1/4 text-left uppercase">purchases</th>
                    <th className="w-1/4 text-left uppercase">value</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td colSpan={3} className="bg-indigo-500 p-2">
                      Not enough data to display in this statistic
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </DefaultLayout>
  );
}
