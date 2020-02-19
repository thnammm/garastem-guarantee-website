import React from "react";
import { eachGuest as EachGuest } from "./EachGuest";

// Import Datas
import {guest as guestData} from "../../datatest/guestData"

export const searchList = () => (
  <div className="row searchResult">
    <EachGuest productData={guestData} />
  </div>
);