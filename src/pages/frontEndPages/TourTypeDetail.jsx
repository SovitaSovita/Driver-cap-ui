import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import { get_popularById } from '../../redux/service/TableListService';
import { BASE_URL } from '../../redux/Constants';
import { Button } from 'flowbite-react';


function TourTypeDetail() {

  const { id } = useParams();
  const [data, setData] = useState({});
  const navigate = useNavigate()

  useEffect(() => {
    get_popularById(id).then((res) => {
      setData(res?.data?.payload)
    })

  }, [id])

  console.log(data)

  return (
    <div className='mt-10 lg:px-24 md:px-20 phone:px-8'>
      <Button onClick={() => {navigate('/')}} className="bg-root_low mb-3">Back</Button>
      <div class="flex flex-wrap bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
        <div className=''>
          <a href="#">
            <img class="rounded-t-lg" src={`${BASE_URL}/images?fileName=${data?.imageFile}`} alt="" />
          </a>
        </div>
        <div class="p-5">
          <a href="#">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              {data?.title}
            </h5>
          </a>
          <p class="mb-3 font-normal text-blue-700 dark:text-gray-400">
            {data?.price}
          </p>
          <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {data?.duration}
          </p>
        </div>
      </div>

    </div>
  )
}

export default TourTypeDetail