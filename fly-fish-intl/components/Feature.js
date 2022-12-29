import { storyblokEditable } from "@storyblok/react";
 
const Feature = ({ blok }) => (
  <div {...storyblokEditable(blok)} className="text-xl font-bold text-center tracking-wider">
    {blok.name}
  </div>
);
 
export default Feature;