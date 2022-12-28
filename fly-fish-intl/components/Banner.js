import { storyblokEditable } from "@storyblok/react"
import Grid from "./Grid";

const Banner = ({ blok }) => {
    return (
        <div {...storyblokEditable(blok)} className="w-full border-t-4 border-black">
            <div className="mx-auto w-1/2 my-6">
                <img src={blok.logo.filename} className='w-20 inline mx-5'/>
                <h1 className="inline font-bold">{blok.title}</h1>
            </div>
            <div className="w-1/5 float-right relative -mt-20">
                <div className="inline-block w-1/3 mr-5">
                    <img src={blok.account.filename} className="w-1/2 mx-auto"/>
                    <p className="text-xs text-center">{blok.accountTitle}</p>
                </div>
                <div className="inline-block w-1/3">
                    <img src={blok.cart.filename} className="w-1/2 mx-auto"/>
                    <p className="text-xs text-center">{blok.cartTitle}</p>
                </div>
            </div>
            {<Grid blok={blok.navigation[0]} />}
        </div>
    )
}

export default Banner;