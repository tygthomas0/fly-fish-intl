import { storyblokEditable } from "@storyblok/react";
 
const Feature = ({ blok }) => (
  <div {...storyblokEditable(blok)} className="text-xs font-bold">
    {blok.name}
  </div>
);
 
export default Feature;