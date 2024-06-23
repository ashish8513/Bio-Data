import React, { useEffect, useState } from 'react'

const BacktoTop = () => {
    const [isVisible, setIsVisible] = useState(false)
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: "smooth"
            
        })
    }
    const listenToScroll = () => {
        let heightToHidden = 250;
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        // console.log(winScroll)
        if (winScroll > heightToHidden) {
            setIsVisible(true)
        } else {
            setIsVisible(false)
        }
    }
    useEffect(() => {
        window.addEventListener("scroll", listenToScroll)
        return ()=> window.removeEventListener("scroll", listenToScroll)// not loading the page when we scoll the button 
    }, [])
    return (
        <>
        {isVisible &&(
            <div onClick={scrollToTop} className=" m-2 font-lg w-7 h-7  fixed bottom-6 right-10  text-white font-bold  transform translate-y-0  bg-yellow-500 hover:bg-sky-500 flex justify-center items-center rounded-full ">
                <div className='cursor-pointer mr-1 '>
                    <lord-icon
                        src="https://cdn.lordicon.com/dwoxxgps.json"
                        trigger="loop"
                        delay='1000'
                        colors="primary:#ffffff"
                        style={{ "width": "35px", "height": "35px", "paddingTop": "3px", "paddingLeft": "4px" }}

                    >
                    </lord-icon>
                </div>
            </div>
        )}
        </>
    )

}

export default BacktoTop
