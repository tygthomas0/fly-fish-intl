import { storyblokEditable, StoryblokComponent } from "@storyblok/react"

const ImageGallery = ({ blok }) => {
    return (
        <div {...storyblokEditable(blok)} className="pb-10">
            <img src={blok.featured.filename} className="w-full h-[800px]"/>

            {blok.menu.map((nestedBlok) => (
                <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))}
        </div>
    )
}

export default ImageGallery;