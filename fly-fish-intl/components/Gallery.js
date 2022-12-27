import { storyblokEditable, StoryblokComponent } from "@storyblok/react"
import Grid from "./Grid";

const Gallery = ({ blok }) => {
    return (
        <div {...storyblokEditable(blok)}>
            <h1>{blok.title}</h1>
            <img src={blok.featured.filename} width='100px'/> {/*temporary sizing*/}

            {blok.menu.map((nestedBlok) => (
                <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))}
        </div>
    )
}

export default Gallery;