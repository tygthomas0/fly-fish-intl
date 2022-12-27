import { storyblokEditable, StoryblokComponent } from "@storyblok/react"
import Grid from "./Grid";

const Gallery = ({ blok }) => {
    return (
        <div {...storyblokEditable(blok)}>
            <img src={blok.featured.filename}/>
            {<Grid blok={blok.menu[0]}/>}
        </div>
    )
    
    
}

export default Gallery;