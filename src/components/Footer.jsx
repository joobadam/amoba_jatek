import React from "react";


export default function Footer() {


  return (
    <div>
      <div className="w-full mt-10 md:mt-20 absolute bottom-6">
        <div className="max-w-screen-2xl w-full text-xs flex flex-wrap md:flex-nowrap px-10 text-black/25">
          <div className="text-center md:text-start w-full md:w-1/2 mb-2">
            <h3>
              <span>joobadam &copy; 2023. All Rights Reserved.</span>
            </h3>
          </div>
          <div className="w-full md:w-1/2 text-center md:text-end ">
            <h3 className="text-xs uppercase">
            project work
            </h3>
          </div>
        </div>
      </div>
    </div>
  );
}
