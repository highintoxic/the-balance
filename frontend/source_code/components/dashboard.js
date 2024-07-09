import React from "react";
import { mockCompanyDetails } from "../constants/mock";
import Details from "./details";
import Header from "./header";
import Overview from "./overview";
import Chart from "./chart";
import Card from "./card";
const Dashboard=()=>{
    return <div className="h-screen grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 grid:rows-8 md:grid-rows-7 xl:grid-rows-5 auto-rows-fr gap-6 p-5 font-quicksand bg-neutral-100">
        <div className="col-span-1 md:col-span-2 xl:col-span-3 row-span-1 flex justify-start item-center">
            <Header name={mockCompanyDetails.name}/>
        </div>
        <div className="md:col-span-2 row-span-4 ">
            <Card/>
        </div>
        <div>
            <Overview symbol={mockCompanyDetails.ticker} price={300} change={5.23} changePercent={10.04} currency={mockCompanyDetails.currency}/>
        </div>
        <div className="row-span-2 xl:row-span-3">
            <Details details={mockCompanyDetails}/>
        </div>
    </div>
}

export default Dashboard;