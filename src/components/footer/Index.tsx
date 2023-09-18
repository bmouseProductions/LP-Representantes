
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';

export default function Footer() {
    return(
        <footer className="w-full py-5 flex flex-col items-center gap-3 lg:flex-row justify-center lg:gap-20 text-white bg-slate-900">
            <div className='flex gap-2 justify-center items-center'>
                <a href="https://www.facebook.com/zoomiesbr" target='_blank'> <FacebookIcon className='fill-white'/> </a>
                <a href="https://www.instagram.com/zoomiesbr/" target='_blank'> <InstagramIcon className='fill-white'/> </a>
                <a href="https://www.youtube.com/channel/UCrpmqsDowU19j26UiIIlJfg" target='_blank'> <YouTubeIcon className='fill-white'/> </a>
                <a href="" target='_blank'> <svg className='fill-white ' stroke-width="0" viewBox="0 0 448 512" height="18" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"></path></svg> </a>
            </div>

            <p>Copyright Ⓒ 2023 Zoomies.</p>

            <a href="https://www.bmouseproductions.com/" target="_blank" rel="noopener noreferrer"> Desenvolvido por <strong>BMOUSE PPRODUCTIONS</strong> </a>
        </footer>
    )
}