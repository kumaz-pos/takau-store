import React from 'react'
import Navbar from '@/components/navbar';
import Car from './car';

async function Page() {

  return (
    <html>
    <body>
      
    <Navbar/>
   <div className='flex flex-row'>
    <Car/>
    
    </div>
</body>
</html>
  
  )
}

export default Page