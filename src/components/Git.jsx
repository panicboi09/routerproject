import React, { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'
function Git () {
    const data = useLoaderData();
    return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>Github followers: {data.followers}
    <img src={data.avatar_url} alt="Git picture" width={300} />
    </div>
  )
}
export default Git;
export const loader = async () => {
const res = await fetch('https://api.github.com/users/panicboi09');
return res.json();
}