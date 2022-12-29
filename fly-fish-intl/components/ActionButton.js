import { storyblokEditable } from "@storyblok/react"

const ActionButton = ({ blok }) => {
    return (
        <div {...storyblokEditable(blok)} className="mx-auto -mt-[5px] bg-orange-500 rounded-full text-white text-center py-[5px]">
            <a href={blok.link} className="">{blok.title}</a>
        </div>
    )
}

export default ActionButton;