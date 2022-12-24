import { storyblokEditable, StoryblokComponent } from "@storyblok/react"
import Grid from "./Grid";

const Banner = ({ blok }) => {
    return (
        <div {...storyblokEditable(blok)}>
            <img src={blok.logo.filename}/>
            <h1>{blok.title}</h1>
            <div>
                <img src={blok.account.filename} />
                <p>Account</p>
            </div>
            <div>
                <img src={blok.cart.filename} />
                <p>cart</p>
            </div>
            {<Grid blok={blok.navigation[0]}/>}
        </div>
    )
    
    
}

export default Banner;