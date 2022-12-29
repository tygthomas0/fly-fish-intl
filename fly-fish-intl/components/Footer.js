import { storyblokEditable, StoryblokComponent } from "@storyblok/react"

const Footer = ({ blok }) => {
    return (
        <div {...storyblokEditable(blok)} className="bg-gray-800 text-white px-[10%] py-[50px]">
            {blok.grid.map((nestedBlok) => (
                <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
            ))}
            <div className="w-1/4 mx-auto mt-10 text-center">
                <img src={blok.copyrightsymbol.filename} className="inline"/>
                <p className="inline ml-[20px]">{blok.copyright}</p> 
            </div>
            
        </div>
    )
}

export default Footer;