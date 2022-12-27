import { storyblokEditable } from "@storyblok/react"

const ActionButton = ({ blok }) => {
    return (
        <div {...storyblokEditable(blok)}>
            <a href={blok.link}>{blok.title}</a>
        </div>
    )
}

export default ActionButton;