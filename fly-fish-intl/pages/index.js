import Head from 'next/head'
import { getStoryblokApi, StoryblokComponent, useStoryblokState } from '@storyblok/react'

export async function getStaticProps() {
  let slug = "home"

  let sbParams = {
    version: "draft" //or published
  }

  const storyblokApi = getStoryblokApi()
  let { data } = await storyblokApi.get(`cdn/stories/${slug}`, sbParams)

  return {
    props: {
      story: data ? data.story : false,
      key: data ? data.story.id : false
    },
    revalidate: 3600
  }
}

export default function Home({ story }) {
  story = useStoryblokState(story)
  console.log(story)

  return (
    <div className="[&>div:nth-child(4)]:bg-gray-800 [&>div:nth-child(6)]:bg-gray-200 [&>div:nth-child(8)]:bg-gray-200
                    [&>div:nth-child(4)>h1]:text-white
    ">
      <Head>
        <title>Fly Fishing International</title>
        <link rel="icon" href="/favicon.ico" />
        
      </Head>
      
      {/*<StoryblokComponent blok={story.content}/>*/}
      {story.content.body.map(item => (
        <StoryblokComponent blok={item} key={item._uid}/>
      ))}
    </div>
  )
}
