import { storyblokEditable } from "@storyblok/react"

const ActionButton = ({ blok }) => {
    return (
        <div {...storyblokEditable(blok)}>
            <a href={blok.link} className="bg-orange-500 rounded-xl text-white">{blok.title}</a>
        </div>
    )
}

export default ActionButton;