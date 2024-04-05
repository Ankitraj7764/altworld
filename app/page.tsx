'use client'
import React from 'react'
import { HiPencil } from "react-icons/hi2";

import ProgressBar from "@ramonak/react-progress-bar";
import { FaHome } from "react-icons/fa";
import { MdOutlineAddHomeWork } from "react-icons/md";
import Image from 'next/image';

const page = () => {
  const data = [
    { name: "Sourav Singh", email: "sourrav@gmail.com", percentage: 78 },
    { name: "John Doe", email: "john.doe@example.com", percentage: 85 },
    { name: "Jane Smith", email: "jane.smith@example.com", percentage: 92 },
    { name: "Alice Johnson", email: "alice.johnson@example.com", percentage: 63 },
    { name: "Bob Williams", email: "bob.williams@example.com", percentage: 70 }
  ];
  return (
    <div><div className="flex h-screen w-full bg-gray-100">
      <div className="w-1/6 bg-gray-100 p-2">
        <div className="my-12 flex">
          <MdOutlineAddHomeWork className='mx-3 text-[24px]' />
          <p className="text-sm font-semibold">Hi, AltWorld</p>
        </div>
        <div className="my-12 flex">
          <FaHome color='#4fd1c5' className='mx-4' />
          <span className="text-sm font-semibold">Dashboard</span>
        </div>
        <div className="my-12 bg-teal-400  text-white p-4 rounded-xl">
          <div className="mb-4">
            <p className='bg-white text-gray-700 w-10 rounded-xl flex justify-center font-semibold text-[22px]'>+</p>
          </div>
          <div className="mb-4">
            <p className="textmd font-semibold">New Assignment?</p>

          </div>
          <div className="mb-4">

            <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, nemo.</p>
          </div>
          <button className="bg-white  rounded-xl text-gray-800 py-2 px-4 text-[14px] font-semibold">Create New Assignment</button>
        </div>
      </div>

      <div className="w-2/6 bg-gray-100 p-4">
        <div className='my-4'>
          <span className='text-gray-500'>Pages <span className='text-black'>/Assignment</span></span>
          <h3 className='font-semibold my-2'>sales BDE</h3>
        </div>
        {/* 2nd div */}
        <div className='bg-white flex flex-col p-4 rounded-lg'>
          <div className='flex justify-between'>
            <div className='w-1/2'>
              <h2 className='font-semibold text-lg my-4'>Sales BDE</h2>
              <p className='text-sm my-3 text-gray-700 font-medium'>Assignment Link</p>
              <p className='text-sm my-3 text-gray-700 font-medium'>Assignment Hour </p>
              <p className='text-sm my-3 text-gray-700 font-medium'>Assignment Ends at </p>
            </div>
            <div className='w-1/2 '>
              <div className='flex justify-end  text-md font-semibold my-4' >
                <h2 className='mx-2 text-teal-500 font-bold '>Active  </h2><HiPencil className='bg-white rounded-lg shadow-md p-1 w-5 h-5 text-black' />
              </div>
              <div className='flex flex-col justify-end text-right'>
                <h3 className=' text-sm text-blue-700  ont-medium'>bjhdgjhvc</h3>
                <p className='my-2 text-sm ont-medium'>3 hours</p>
                <p className='my-2 text-sm ont-medium'>11 march  2024</p>
              </div>
            </div>
          </div>
          <div className='my-8'>
            <button className='mr-4 shadow-md p-2 px-4 rounded-lg font-semibold text-[11px]'>
              TO REVIEW
            </button>
            <button className='shadow-md p-2 px-4 rounded-lg font-semibold text-[11px]'>SHORTLISTED</button>
          </div>
          <div className='flex justify-between my-4'>
            <h3 className=' text-gray-500 text-[12px] font-[500]'>CONDIDATE</h3>
            <h3 className='text-gray-500 text-[12px] font-[500]'>SCORE</h3>
          </div>
         <div className='flex flex-col'>
         <div className='flex justify-around bg-slate-100 p-1 rounded-md'>
            <div className='flex'>
              <Image src={"/profile.jpg"} alt="alt" width={40} height={40} className='mr-2 rounded-lg'/>
              <div className='flex flex-col'>
                <h3 className='font-[500] text-[14px]'>
                  Sourav singh
                </h3>
                <p className='text-sm text-gray-500'>sourrav@gmail.com</p>
              </div>
            </div>
            <div className='flex justify-end text-right w-full align-middle'>
              <h2 className='text-green-500 font-semibold flex mt-2 '>
                78%
              </h2>
            </div>

          </div>
          <div>
      {data.map((item, index) => (
        <div key={index} className='flex justify-around mt-2'>
          <div className='flex'>
          <Image src={"/profile.jpg"} alt="alt" width={40} height={40} className='mr-2 rounded-lg'/>
            <div className='flex flex-col'>
              <h3 className='font-[500] text-[14px]'>
                {item.name}
              </h3>
              <p className='text-[12px] text-gray-500'>{item.email}</p>
            </div>
          </div>
          <div className='flex justify-end text-right w-full'>
            <h2 className='text-green-500 font-semibold'>
              {item.percentage}%
            </h2>
          </div>
        </div>
      ))}
    </div>
         </div>
        </div>


      </div>
      <div className="w-3/6  flex mt-[104px] bg-black  rounded-md">
        <div className='w-1/2 flex flex-col bg-white p-4 rounded-md'>
          <div className='flex justify-between'>
            <div className='flex' >
              <Image src={"/profile.jpg"} alt='alt' width={70} height={60} className='rounded-md mr-3' />

              <div className='flex flex-col mx-2'>
                <h3 className='font-bold'>
                  Sourav Singh
                </h3>
                <p className='text-sm text-gray-500 font-[450]'>saurav@gmail.com</p>
              </div>
            </div>
            <h1 className='text-[#4fd1c5] text-xl font-bold'>78%</h1>

          </div>
          <div className='flex'>
            <div className='w-1/2 flex flex-col'>
              <span className='text-sm mt-6 text-gray-500'>Behavioural</span>
              <span className='text-sm mt-2 text-gray-500'>Communication</span>
              <span className='text-sm mt-2 text-gray-500'>Situation handling</span>
            </div>
            <div  className='w-2/3'>
              <ProgressBar completed={80} className='w-48 mt-7 ' height='10px' bgColor='#4fd1c5'/>
              <ProgressBar completed={70} className='w-48 mt-5 ' height='10px' bgColor='#4fd1c5' />
              <ProgressBar completed={60} className='w-48 mt-5 ' height='10px' bgColor='yellow'/>
            </div>
          </div>
          <div>
            <h2 className='font-bold mt-6 mb-2'>
              About
            </h2>
            <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore ad voluptas debitis et saepe odit.</p>
          </div>
          <div>
            <h2 className='font-bold mt-6 mb-2'>
              Experience
            </h2>
            <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore ad voluptas debitis et saepe odit.</p>
          </div>
          <div>
            <h2 className='font-bold mt-6 mb-2'>
              Hobbies
            </h2>
            <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore ad voluptas debitis et saepe odit.</p>
          </div>
          <div>
            <h2 className='font-bold mt-6 mb-2'>
              Introduction
            </h2>
            <p className='text-sm text-gray-600'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Labore ad voluptas debitis et saepe odit.</p>
          </div>
          <div className='flex justify-center mb-8'>
            <button className='bg-teal-400 text-white rounded-md py-1 text-sm font-semibold mt-8 w-64 h-8'>
              SHORTLIST
            </button>
          </div>
        </div>
        <div className='w-1/2 p-2'>
          <div style={{ height: '100vh' }}>
            <video autoPlay style={{ height: '100%', width: '100%' }}>
              <source src="/exp.mp4" type="video/mp4" />
            </video>
          </div>


        </div>


      </div>
    </div>
    </div>
  )
}

export default page