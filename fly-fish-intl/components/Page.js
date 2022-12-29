import { storyblokEditable, StoryblokComponent } from "@storyblok/react"

const Page = ({ blok }) => {
    <main {...storyblokEditable(blok)}>
        {blok.body.map((nestedBlok) => (
            <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid}/>
        ))}
    </main>
}

export default Page;
/*


const Page = ({ blok }) => {
    return (
        <main {...storyblokEditable(blok)}>
            <StoryblokComponent blok={blok} key={blok._uid} />
        </main>  
    )
}
*/