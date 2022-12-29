import { storyblokEditable } from "@storyblok/react"

const ArticleCard = ({ blok }) => {
    return (
        <div {...storyblokEditable(blok)} className={"rounded border-[1px] border-black hover:shadow-xl"}>
            <img src={blok.featured.filename} className="w-full h-[300px]"/>
            <div className="p-[15px]">
                <h3 className="text-2xl font-bold">{blok.title}</h3>
                <h3 className="text-2xl font-bold">{blok.secondarytitle}</h3>
                <div className="inline-block w-1/2 py-[10px]">
                    <img src={blok.datesymbol.filename} className="inline w-[12.5%] mr-[5px]"/>
                    <p className="text-base inline">{blok.date}</p>
                </div>
                <div className="inline-block w-1/2 py-[10px]">
                    <img src={blok.categorysymbol.filename} className="inline w-[12.5%] mr-[5px]"/>
                    <p className="text-base inline">{blok.category}</p>
                </div>
                <p className="text-base">{blok.intro}</p>
                <a href={blok.attentiongrabber} className="text-lg text-orange-500 font-bold italic underline">{blok.attention}</a>
            </div>
        </div>
    )
}

export default ArticleCard;