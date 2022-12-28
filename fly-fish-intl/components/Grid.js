import { storyblokEditable, StoryblokComponent } from "@storyblok/react";
 
const Grid = ({ blok }) => {
  return (
    <div className="w-4/5 mx-auto mb-2 flex flex-row flex-nowrap justify-between 
      [&>div>a]:font-bold [&>div>a]:text-xs [&>div>a]:-mt-2
      " 
      {...storyblokEditable(blok)}
    >
      {blok.columns.map((nestedBlok) => (
        <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
      ))}
    </div>
  );
};
 
export default Grid;