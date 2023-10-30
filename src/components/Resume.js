import React from "react";
import { BadgeCheckIcon, BookOpenIcon, ChipIcon, DesktopComputerIcon, MenuAlt1Icon } from "@heroicons/react/solid";
export default function Resume(){
    return(
        <section id='resume' className="text-gray-400 bg-gray-900 body-font" >
            
				<div class='container' >
					<div class='row' >
						<div class='col-md-6 col-md-offset-3' >
							<div class='section-header text-center' >
							<BookOpenIcon className="w-10 inline-block mb-4" />	
                            <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
                                Past Work
                            </h1>
                            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
                            Experience</p>
							</div>
						</div>
					</div>
				</div>
				
				<div class='timeline-block section-block' >
					<div class='container' >
                        
<ul class="pl-10 max-w-6xl divide-y divide-gray-200 dark:divide-gray-700">
<li class="pb-3 pt-3 sm:pb-4">
      <div class="flex items-center space-x-4">
         <div class="flex-shrink-0">
         <DesktopComputerIcon className="w-10 inline-block mb-4" />	
         </div>
         <div class="flex-1 min-w-0">
         <p class="text-lg font-semibold text-white-1000">
         Genpact
            </p>
            <p class="text-sm font-medium text-white-700">
               Lead Consultant
            </p>
            <p class="text-sm text-gray-500">
            Just Started... </p>
         </div>
         <div class="inline-flex items-center text-base font-semibold text-white-900 dark:text-white">
            10 2023 - Persent  </div>
      </div>
   </li>
   <li class="pb-3 pt-3 sm:pb-4">
      <div class="flex items-center space-x-4">
      <div class="flex-shrink-0">
         <DesktopComputerIcon className="w-10 inline-block mb-4" />	
         </div>
         <div class="flex-1 min-w-0">
         <p class="text-lg font-semibold text-white-1000">
         Coforge
            </p>
            <p class="text-sm font-medium text-white-900">
               Senior Software Engineer
            </p>
            <p class="text-sm text-gray-500">
			Developing and delivering E2E feature/functionality/Rest APIs as per given business requirement [Emirates Mobile Web Application]. Working on creating service using spring boot and microservice architecture. Handling the defects/bug and debugging code on server and client level.
            Working in Safe Agile. Handling new service integration request and involved in java 8 code migration and SOAP to Rest Migration.  </p>
         </div>
         <div class="inline-flex items-center text-base font-semibold text-white-900 dark:text-white">
            08 2022 - 10 2023         </div>
      </div>
   </li>
   <li class="pb-3 pt-3 sm:pb-4">
      <div class="flex items-center space-x-4">
      <div class="flex-shrink-0">
         <DesktopComputerIcon className="w-10 inline-block mb-4" />	
         </div>
         <div class="flex-1 min-w-0">
         <p class="text-lg font-semibold text-white-1000">
         Ericsson Global India Ltd
            </p>
            <p class="text-sm font-medium text-white-900">
               Software Engineer
            </p>
            <p class="text-sm text-gray-500">
            Developing s/w solutions using python, groovy, core java, shell, extjs/snecha (UI). Working on telecom industy usecases. Imporving current solution and services. Got several awards in domain
            </p>
         </div>
         <div class="inline-flex items-center text-base font-semibold text-white-900 dark:text-white">
         01 2019 - 08 2022 
         </div>
      </div>
   </li>
   <li class="pb-3 pt-3 sm:pb-4">
      <div class="flex items-center space-x-4">
      <div class="flex-shrink-0">
         <DesktopComputerIcon className="w-10 inline-block mb-4" />	
         </div>
         <div class="flex-1 min-w-0">
         <p class="text-lg font-semibold text-white-1000">
         Eternal HR Services Pvt Ltd
            </p>
            <p class="text-sm font-medium text-white-900">
               Android Developer
            </p>
            <p class="text-sm text-gray-500">
			Designed and developed HRMS Mobile and web App for Admin and user level. Involved in writing rest APIs i.e. used in mobile App and web App. Implemented Authentication in application. Tunned Database.  </p>
         </div>
         <div class="inline-flex items-center text-base font-semibold text-white-900 dark:text-white">
            01 2019 - 08 2022 
         </div>
      </div>
   </li>
   <li class="pb-3 pt-3 sm:pb-4">
      <div class="flex items-center space-x-4">
      <div class="flex-shrink-0">
         <DesktopComputerIcon className="w-10 inline-block mb-4" />	
         </div>
         <div class="flex-1 min-w-0">
		 <p class="text-lg font-semibold text-white-1000">
         Ansyst Consulting
            </p>
            <p class="text-sm font-medium text-white-900">
               Software Engineer
            </p>
            <p class="text-sm text-gray-500">
            Developed Bluetooth functioned app, controlling appliances with mob app. Handling various technical aspects like coding of modules using the given design specifications, debugging, fixing the defects. </p>
         </div>
         <div class="inline-flex items-center text-base font-semibold text-white-900 dark:text-white">
           10 2017 - 07 2018
         </div>
      </div>
   </li>
   </ul>
					</div>
				</div>
	
			</section>
    );

}