import { storyblokEditable } from "@storyblok/react"

const ArticleCard = ({ blok }) => {
    return (
        <div {...storyblokEditable(blok)}>
            <img src={blok.featured.filename} width='100px'/> {/*temporary sizing*/}
            <h3>{blok.title}</h3>
            <h3>{blok.secondarytitle}</h3>
            <div>
                <img src={blok.datesymbol.filename} />
                <p>{blok.date}</p>
            </div>
            <div>
                <img src={blok.categorysymbol.filename} />
                <p>{blok.category}</p>
            </div>
            <p>{blok.intro}</p>
            <a href={blok.attentiongrabber}>{blok.attention}</a>
        </div>
    )
}

export default ArticleCard;