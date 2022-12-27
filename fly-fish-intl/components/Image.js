import { storyblokEditable } from "@storyblok/react"

const Image = ({ blok }) => {
    return (
        <div {...storyblokEditable(blok)}>
            <img src={blok.image.filename} width='100px'/> {/*temporary sizing*/}
        </div>
    )
}

export default Image;