import { storyblokEditable } from "@storyblok/react"
import Grid from "./Grid";

const Banner = ({ blok }) => {
    return (
        <div {...storyblokEditable(blok)}>
            <img src={blok.logo.filename} width='100px'/> {/*temporary sizing*/}
            <h1>{blok.title}</h1>
            <div>
                <img src={blok.account.filename} />
                <p>{blok.accountTitle}</p>
            </div>
            <div>
                <img src={blok.cart.filename} />
                <p>{blok.cartTitle}</p>
            </div>
            {<Grid blok={blok.navigation[0]}/>}
        </div>
    )
}

export default Banner;