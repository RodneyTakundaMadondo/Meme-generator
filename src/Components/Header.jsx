import logo from '../Assets/logo.png'
export default function Header(){
    return (
        <header className='bg-amber-400 px-2 min-w-[224px]'>
            <nav className='flex items-center  gap-4 '>
                <div className='h-12  w-12 shrink-0'>
                    <img src={logo} alt="Meme Face" />
                </div>
                <h1 className='font-bold text-nowrap text-lg sm:text-xl md:text-3xl'>Meme Generator</h1>
            </nav>
        </header>
    )
}