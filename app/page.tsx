import { Input } from '@/components/ui/input'
import { Search } from 'lucide-react'
import React from 'react'


export default function page() {
  return (
    <div className='pt-[3rem]'>
      <div className="flex items-center justify-center gap-[2rem]">
        <Input className='w-[50%]' placeholder='search...'/>
        <Search/>
      </div>
    
    </div>
  )
}

