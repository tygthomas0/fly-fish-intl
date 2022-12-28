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
    <div>
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
