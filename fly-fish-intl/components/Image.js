import { storyblokEditable, StoryblokComponent } from "@storyblok/react"

const Image = ({ blok }) => {
    return (
        <div {...storyblokEditable(blok)}>
            <img src={blok.image.filename}/>
        </div>
    )
    
    
}

export default Image;