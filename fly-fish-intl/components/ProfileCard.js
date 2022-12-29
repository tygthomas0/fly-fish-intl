import { storyblokEditable } from "@storyblok/react"

const ProfileCard = ({ blok }) => {
    return (
        <div {...storyblokEditable(blok)}>
            <img src={blok.image.filename} className="w-[200px] mx-auto rounded-full h-[200px] mb-5"/>
            <h5 className="text-center text-white font-bold text-2xl">{blok.name}</h5>
            <h6 className="text-center text-orange-500 text-xl">{blok.title}</h6>
        </div>
    )
}

export default ProfileCard;