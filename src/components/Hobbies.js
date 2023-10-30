import React from "react";
import {HeartIcon, PlayIcon, PlusCircleIcon } from "@heroicons/react/solid";
import { hobbies } from "../data";
import { BadgeCheckIcon, ChipIcon } from "@heroicons/react/solid";

export default function App() {
    return (
        <section id='hobbies' className="text-gray-400 bg-gray-900 body-font" >
            <div class='container' >
					<div class='row' >
						<div class='col-md-6 col-md-offset-3' >
							<div class='section-header text-center' >
							<HeartIcon className="w-10 inline-block mb-4" />	
                            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                            My Hobbies
                            </h1>
							</div>
						</div>
					</div>
				</div>
                <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
          {hobbies.map((hobby) => (
            <div key={hobby} className="p-5">
              <div className="bg-gray-800 rounded flex p-4 h-full items-center">
                <PlusCircleIcon className="text-green-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {hobby}
                </span>
              </div>
            </div>
          ))}
        </div>
    </section>
    );
  }