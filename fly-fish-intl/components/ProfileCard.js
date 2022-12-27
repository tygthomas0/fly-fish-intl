import { storyblokEditable } from "@storyblok/react"

const ProfileCard = ({ blok }) => {
    return (
        <div {...storyblokEditable(blok)}>
            <img src={blok.image.filename} width='100px'/> {/*temporary sizing*/}
            <h5>{blok.name}</h5>
            <h6>{blok.title}</h6>
        </div>
    )
}

export default ProfileCard;