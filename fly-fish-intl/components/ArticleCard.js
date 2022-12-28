import { storyblokEditable } from "@storyblok/react"

const ArticleCard = ({ blok }) => {
    return (
        <div {...storyblokEditable(blok)} className="w-1/5 rounded border-2 border-slate-400 hover:shadow-xl">
            <img src={blok.featured.filename} className="w-full"/>
            <h3 className="text-sm font-bold">{blok.title}</h3>
            <h3 className="text-sm font-bold">{blok.secondarytitle}</h3>
            <div className="inline-block w-1/3">
                <img src={blok.datesymbol.filename} className="inline"/>
                <p className="text-xs inline">{blok.date}</p>
            </div>
            <div className="inline-block w-1/3">
                <img src={blok.categorysymbol.filename} className="inline"/>
                <p className="text-xs inline">{blok.category}</p>
            </div>
            <p className="text-xs">{blok.intro}</p>
            <a href={blok.attentiongrabber}>{blok.attention}</a>
        </div>
    )
}

export default ArticleCard;