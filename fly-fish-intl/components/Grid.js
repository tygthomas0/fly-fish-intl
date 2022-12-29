import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
 
const Grid = ({ blok }) => {
  
  return (
    <div className={"sib" + blok.columns.length.toString() + " [&>div>a>img]:w-[200px] [&>div>a>img]:h-[200px]"}
      {...storyblokEditable(blok)}
    >
      {blok.columns.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};
 
export default Grid;

/*
w-full mx-auto mb-2 flex flex-row flex-nowrap justify-between 
      [&>div>a]:font-bold [&>div>a]:text-xl [&>div>a]:tracking-wider [&>div>a]:w-[12.5%] [&>div>a]:text-center
*/