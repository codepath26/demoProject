import React from "react";
import TableTitle from "../UI/TableTitle";
import DisplayData from "../UI/DisplayData";

const pageData = [
  {
    id: 1,
    text: "Pageviews",
    value: "356,928",
  },
  {
    id: 2,
    text: "Unique pageviews",
    value: "275,588",
  },
  {
    id: 3,
    text: "Avg. time on page",
    value: "00:03:51",
  },
  {
    id: 4,
    text: "Extrances",
    value: "315,643",
  },
  {
    id: 5,
    text: "%Exit",
    value: "39,84%",
  },
  {
    id: 6,
    text: "Page Value",
    value: "$19,982",
  },
];
const displayData = [
  {
    col1: "/Defect Arrival Rate",
    col2: "872,337 (15.82%)",
    col3: "574,332 (15.33%)",
    col4: "00:05:43",
    col5: "802,873 (16.75%)",
    col6: "25.96%",
    col7: "$1093 (5.11%)",
  },
  {
    col1: "/Fixed Rate",
    col2: "803,792 (14.39%)",
    col3: "456,792(13.39%)",
    col4: "00:05:24",
    col5: "793,982 (15.64%)",
    col6: "76.13%",
    col7: "$6,792 (36.16%)",
  },
  {
    col1: "/Fixed Rate",
    col2: "803,792 (14.39%)",
    col3: "456,792 (13.93%)",
    col4: "00:04:36",
    col5: "684,873 (14.33%)",
    col6: "41.54%",
    col7: "$702 (3.47%)",
  },
  {
    col1: "/Cycle time",
    col2: "8732,23 (10.82%)",
    col3: "574,434 (23.33%)",
    col4: "00:04:36",
    col5: "684,873 (16.75%)",
    col6: "41.54%",
    col7: "$702 (3.47%)",
  },
  {
    col1: "/Lead time",
    col2: "676,659 (10.29%)",
    col3: "340,765 (11.70%)",
    col4: "00:04:12",
    col5: "638,982 (13.02%)",
    col6: "46.42%",
    col7: "$2659 (11.64%)",
  },
  {
    col1: "/new features",
    col2: "508,837 (7.74%)",
    col3: "317,543 (10.66%)",
    col4: "00:04:11",
    col5: "555,982 (16.75%)",
    col6: "27.40%",
    col7: "$4,508 (23..43%)",
  },
  {
    col1: "/ready features",
    col2: "495,938 (7.38%)",
    col3: "310.554 (10.58%)",
    col4: "00:02:56",
    col5: "297,303 (6.07%)",
    col6: "28.40%",
    col7: "$495 (7.38%)",
  },
];

function PageView() {
  return (
    <div className=" mt-2 p-2 shadow-lg">
      <div className="flex justify-between">
        <h1 className="w-1/3">PAGEVIEWS</h1>
        <div className="w-2/3 flex">
          <div>
            <span className="border cursor-pointer border-black text-black px-2 py-1 rounded-s-lg">
              Today
            </span>
            <span className="border cursor-pointer border-black text-black px-2 py-1 ">
              Yesterday
            </span>
            <span className="border cursor-pointer border-black text-black px-2 py-1 ">
              Week
            </span>
            <span className="border cursor-pointer border-black text-black px-2 py-1 ">
              Month
            </span>
            <span className="border cursor-pointer border-black text-black px-2 py-1 ">
              Quarter
            </span>
            <span className="border cursor-pointer border-black text-black px-2 py-1 rounded-e-lg">
              Year
            </span>
          </div>
          <div>
            <select className="px-3" name="period" id="period">
              <option value="date">Select Period</option>
            </select>
          </div>
        </div>
      </div>
      <hr className="mt-4" />
      <div className="flex justify-between p-2">
        <h1 className="w-[20%]">Page</h1>
        <div className="w-[80%] flex justify-between">
          {pageData.map((data) => {
            return (
              <TableTitle key={data.id} text={data.text} value={data.value} />
            );
          })}
        </div>
      </div>
      <div className="flex flex-col mt-4  overflow-y-scroll">
        {displayData.map((data) => {
          return <DisplayData key={data.col5} data={data} />;
        })}
      </div>
    </div>
  );
}

export default PageView;
