import { storyblokEditable, StoryblokComponent } from "@storyblok/react"

const Gallery = ({ blok }) => {
    return (
        <div {...storyblokEditable(blok)} className="my-10">
            <h1 className="ml-20">{blok.title}</h1>
            <img src={blok.featured.filename} className={blok.featured.filename !== "" ? "w-full" : "hidden"}/> {/*temporary sizing*/}

            {blok.menu.map((nestedBlok) => (
                <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))}
        </div>
    )
}

export default Gallery;