import { storyblokEditable } from "@storyblok/react"

const ImageWithLink = ({ blok }) => {
    return (
        <div {...storyblokEditable(blok)}>
            <a href={blok.link}>
                <img src={blok.img.filename}/>
            </a>
        </div>
    )
}

export default ImageWithLink;