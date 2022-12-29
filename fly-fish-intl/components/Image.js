import { storyblokEditable } from "@storyblok/react"

const Image = ({ blok }) => {
    return (
        <div {...storyblokEditable(blok)} className="w-1/6">
            <img src={blok.image.filename} className=""/>
        </div>
    )
}

export default Image;