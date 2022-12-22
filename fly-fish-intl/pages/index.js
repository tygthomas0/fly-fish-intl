import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
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
    <div className={styles.container}>
      <Head>
        <title>Fly Fishing International</title>
        <link rel="icon" href="/favicon.ico" />
        
      </Head>

      <header>
        <h1>
          { story ? story.name : 'Fly Fishing International' }
        </h1>
      </header>
      
      {story.content.body.map(item => (
        <StoryblokComponent blok={item} key={item._uid}/>
      ))}
      
    </div>
  )
}