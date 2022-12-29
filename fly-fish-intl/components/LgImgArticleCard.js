import { storyblokEditable } from "@storyblok/react"

const LgImgArticleCard = ({ blok }) => {
    return (
        <div {...storyblokEditable(blok)} className={"rounded border-[1px] border-black hover:shadow-xl"}>
            <img src={blok.bgimg.filename} className="w-full h-80"/>
            <div className="absolute text-white -mt-[100px] ml-2">
                <h3 className="text-2xl font-bold">{blok.title}</h3>
                <div className="inline-block w-full py-[10px]">
                    <img src={blok.categoryimg.filename} className="inline w-[12.5%] mr-[5px]"/>
                    <p className="text-base inline">{blok.category}</p>
                </div> 
            </div>
            
        </div>
    )
}

export default LgImgArticleCard;