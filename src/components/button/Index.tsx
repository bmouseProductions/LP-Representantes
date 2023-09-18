import { ReactElement } from "react"

import WhatsAppIcon from '@mui/icons-material/WhatsApp';

interface botaoProps{
    children: ReactElement | string
}

export default function Botao( {children}:botaoProps){
    return (
        <button className="w-full md:max-w-[22.8rem] py-5 rounded font-bold text-white text-[26px] bg-[#e70000] shadow-[0px_0px_20px_#e7004c] hover:bg-[#f17908] hover:shadow-[0px_0px_20px_#f17908] transition-all duration-200">
            
            <a href="https://api.whatsapp.com/send/?phone=5517996264206&text=Ol%C3%A1+%2C+gostaria+de+saber+mais+sobre+como+revender+Zoomies.+Voc%C3%AA+pode+me+passar+mais+informa%C3%A7%C3%B5es%3F&app_absent=0" target='_blank'>
                <WhatsAppIcon className='fill-white !w-[40px] !h-[40px] mr-2 animate-bounce'/>
                {children}
            </a>
            
        </button>
    )
}