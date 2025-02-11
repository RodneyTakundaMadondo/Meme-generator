import { useState, useEffect } from "react"

export default function MainContent() {
    const [memeInfo, setMemeInfo] = useState({
        topText: 'One does not simply',
        bottomText: 'Walk into Mordor',
        imageUrl: 'http://i.imgflip.com/1bij.jpg'
    })
    function handleChange(e) {
        const {value,name}= e.currentTarget;
        setMemeInfo(prev => {
            return {
                ...prev,
                [name]:value
            }
        })
    }
    const [allMemes,setAllMemes] = useState([]);

    useEffect(()=>{
        fetch('https://api.imgflip.com/get_memes')
        .then(res => res.json())
        .then(data =>setAllMemes(data.data.memes) )
    },[])

    function handleClick(){
        const randomNumber = Math.floor(Math.random() * allMemes.length);
        setMemeInfo(prev =>{
            return {
                ...prev,
                imageUrl: allMemes[randomNumber].url
            }
        });
    }


    return (
        <main>
            <section className="mt-12 flex flex-col items-center min-[700px]:flex-row min-[700px]:justify-between min-[700px]:gap-8 max-w-[700px] mx-auto">

                <div className="flex flex-col justify-center mb-8 min-[700px]:mb-0 w-[min(calc(100%-2rem),20rem)]  min-[700px]:w-[15rem]">
                    <label className="text-start" htmlFor="top-text">Top Text</label>
                    <input
                        onChange={handleChange}
                        className="outline-0 pl-2  border-solid border-2 border-amber-500"
                        type="text"
                        name="topText"
                        id="top-text"

                        placeholder="One does not simply" />
                </div>
                <div className="flex flex-col justify-center min-[700px]:w-[15rem] min-[700px]:mb-0 w-[min(calc(100%-2rem),20rem)]">
                    <label className="text-start" htmlFor="bottom-text">Bottom Text</label>
                    <input
                        onChange={handleChange}
                        className="outline-0 pl-2 border-solid border-2 border-amber-500"
                        type="text"
                        name="bottomText"
                        id="bottomText"
                        placeholder="walk into mordor" />
                </div>
            </section>

            <section className="mt-12 flex flex-col items-center">
                <button
                    onClick={handleClick}
                    className="bg-black border-solid border-2 border-red-500 text-amber-500 py-2 min px-4 rounded-sm active:translate-y-2 flex items-center">
                    Get a new meme image
                    <i className=' ml-2 bx bx-image text-white bg-amber-500'></i>
                </button>

                {/* image container  */}
                <div className="min-w-[10rem] max-w-[30rem] border-solid border-2 border-red-500 mt-8 relative min-h-[12rem] h-44 md:h-66 lg:h-" >
                    <img className="w-full h-full object-cover" src={memeInfo.imageUrl} alt="Meme" />
                    <span className="absolute meme-words text-xl md:text-4xl  font-bold text-white uppercase  top-0 left-0 right-0 m-auto  text-center">{memeInfo.topText}</span>
                    <span className="absolute meme-words text-xl md:text-4xl font-bold text-white uppercase  bottom-0 left-0 right-0 m-auto  text-center ">{memeInfo.bottomText}</span>
                </div>
            </section>
        </main>
    )
}                      