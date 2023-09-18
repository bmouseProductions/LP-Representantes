import { useEffect, useState } from 'react';

import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

export default function BackTop(){
    const [isSticky, setIsSticky] = useState(false);
    
    useEffect(() => {
        const handleScroll = () => {
          const scrollTop = window.scrollY;
          if (scrollTop > 0) {
            setIsSticky(true);
            document.querySelector('#backTop')?.classList.remove('hidding')
          } else {
            setIsSticky(false);
            document.querySelector('#backTop')?.classList.add('hidding')
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, [isSticky]);

    return(
      <div id='backTop' className='fixed right-3 bottom-5 z-50'>
        <a href="#"  className='flex justify-center items-center rounded-full p-1 bg-[#e70000] border border-[#f17908] shadow-[0px_0px_5px_#f17908]'>
          <ArrowUpwardIcon className='text-[30px] text-white'/>
        </a>
      </div>
    )
}