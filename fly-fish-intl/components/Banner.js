import { storyblokEditable } from "@storyblok/react"
import Grid from "./Grid";

const Banner = ({ blok }) => {
    return (
        <div {...storyblokEditable(blok)} className="w-full border-t-4 border-black px-[10%] mb-10">
            <div className="mx-auto w-1/2 my-12 flex justify-center">
                <div>
                    <img src={blok.logo.filename} className='w-24 inline mx-5 '/>
                    <h1 className="inline font-bold mx-5 text-3xl tracking-widest">{blok.title}</h1>
                </div>
            </div>
            <div className="w-1/6 float-right relative -mt-[6rem] -mr-[5rem]">
                <div className="inline-block w-1/3 mr-5">
                    <img src={blok.account.filename} className="w-1/3 mx-auto mb-[5px]"/>
                    <p className="text-sm text-center">{blok.accountTitle}</p>
                </div>
                <div className="inline-block w-1/3">
                    <img src={blok.cart.filename} className="w-1/3 mx-auto mb-[5px]"/>
                    <p className="text-sm text-center">{blok.cartTitle}</p>
                </div>
            </div>
            {<Grid blok={blok.navigation[0]} />}
        </div>
    )
}

export default Banner;