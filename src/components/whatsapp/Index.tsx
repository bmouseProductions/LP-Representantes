
import imgWpp from '../../assets/whatsapp.png'

export default function Whatsapp(){
    return (
        <div className='fixed left-5 bottom-5 z-50 animate-bounce'>
            <a href="https://api.whatsapp.com/send/?phone=5517996264206&text=Ol%C3%A1+%2C+gostaria+de+saber+mais+sobre+como+revender+Zoomies.+Voc%C3%AA+pode+me+passar+mais+informa%C3%A7%C3%B5es%3F&app_absent=0" target='_blank' className=' '>
                <img src={imgWpp} alt='icone whatsapp' className='w-[54px] h-[54px] ' />
            </a>
        </div>
    )
}