//creates dynamic routes based on what is in storyblok

import Head from "next/head";
import styles from "../dist/output.css"

import { useStoryblokState, getStoryblokApi, StoryblokComponent } from "@storyblok/react";

export default function Page({ story }) {
    story = useStoryblokState(story)

    return (
        <div className={styles.container}>
            <Head>
                <title>{story ? story.name : "Fly Fishing International"}</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <header>
                <h1>{story ? story.name : "Fly Fishing International"}</h1>
            </header>

            <StoryblokComponent blok={story.content} />
        </div>
    )
}

export async function getStaticProps({ params }) {
    let slug = params.slug ? params.slug.join("/") : "home"

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

export async function getStaticPaths() {
    const storyblokApi = getStoryblokApi()
    let { data } = await storyblokApi.get("cdn/links/", { version: 'draft' })

    let paths = []
    Object.keys(data.links).forEach((linkKey) => {
        if (data.links[linkKey].is_folder || data.links[linkKey].slug === "home") {
            return
        }

        const slug = data.links[linkKey].slug
        let splittedSlug = slug.split("/")

        paths.push({ params: { slug: splittedSlug } })
    })

    return {
        paths: paths,
        fallback: false
    }
}