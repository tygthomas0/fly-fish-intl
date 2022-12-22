import '../styles/globals.css'
import { storyblokInit, apiPlugin } from "@storyblok/react"
import Feature from '../components/Feature'
import Grid from '../components/Grid'
import Page from '../components/Page'
import Teaser from '../components/Teaser'

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page
}

storyblokInit({
  accessToken: process.env.storyblokToken,
  use: [apiPlugin],
  apiOptions: { region: 'us' },
  components
})

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
