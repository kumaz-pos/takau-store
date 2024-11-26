import React from 'react'
import Navbar from '@/components/navbar';
import Parts from './parts';

async function Page() {

  return (
    <html>
    <body>
      
    <Navbar/>
   <div className='flex flex-row'>
    <Parts/>
    
    </div>
</body>
</html>
  
  )
}

export default Page