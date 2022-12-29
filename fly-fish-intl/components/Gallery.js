import { storyblokEditable, StoryblokComponent } from "@storyblok/react"

const Gallery = ({ blok }) => {
    return (
        <div {...storyblokEditable(blok)} className="py-20 px-[10%]
            [&>div:nth-child(3)]:w-1/4 [&>div:nth-child(3)]:mt-10 [&>div:nth-child(3)]:text-2xl [&>div:nth-child(3)]:font-bold [&>div:nth-child(3)]:p-5
        "> {/*[&>div:nth-child(3)] styles the action button component present in some gallery components*/}
            <h1 className="mb-12 text-6xl font-bold mb-28">{blok.title}</h1>

            {blok.menu.map((nestedBlok) => (
                <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))}
        </div>
    )
}

export default Gallery;