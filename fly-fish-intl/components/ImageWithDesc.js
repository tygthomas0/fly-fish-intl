import { storyblokEditable } from "@storyblok/react"

const ImageWithDesc = ({ blok }) => {
    return (
        <div {...storyblokEditable(blok)} className="">
            <img src={blok.logo.filename} className="w-1/3 mb-5"/>
            <p>{blok.description}</p>
        </div>
    )
}

export default ImageWithDesc;