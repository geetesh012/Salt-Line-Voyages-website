import { useEffect } from 'react'

const SITE_NAME = 'Salt Line Voyages'
const SITE_URL = 'https://www.saltlinevoyages.com'
const DEFAULT_IMAGE = `${SITE_URL}/icon-512.png`

function setMeta(attr, key, value) {
  if (!value) return
  let tag = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!tag) {
    tag = document.createElement('meta')
    tag.setAttribute(attr, key)
    document.head.appendChild(tag)
  }
  tag.setAttribute('content', value)
}

function setCanonical(path) {
  let link = document.head.querySelector('link[rel="canonical"]')
  if (!link) {
    link = document.createElement('link')
    link.setAttribute('rel', 'canonical')
    document.head.appendChild(link)
  }
  link.setAttribute('href', `${SITE_URL}${path}`)
}

/**
 * Sets document.title plus meta description / canonical / Open Graph /
 * Twitter card tags for the current page. Call once per page component
 * with a title, description, and the route's path (for canonical + og:url).
 *
 * This is a small hand-rolled alternative to react-helmet — the app only
 * has a handful of routes, so a dependency wasn't worth the extra weight.
 */
export default function useDocumentHead({ title, description, path = '/', image = DEFAULT_IMAGE, noIndex = false }) {
  useEffect(() => {
    const fullTitle = title ? `${title} · ${SITE_NAME}` : SITE_NAME
    document.title = fullTitle

    setMeta('name', 'description', description)
    setMeta('name', 'robots', noIndex ? 'noindex, nofollow' : 'index, follow')
    setCanonical(path)

    setMeta('property', 'og:site_name', SITE_NAME)
    setMeta('property', 'og:type', 'website')
    setMeta('property', 'og:title', fullTitle)
    setMeta('property', 'og:description', description)
    setMeta('property', 'og:url', `${SITE_URL}${path}`)
    setMeta('property', 'og:image', image)

    setMeta('name', 'twitter:card', 'summary_large_image')
    setMeta('name', 'twitter:title', fullTitle)
    setMeta('name', 'twitter:description', description)
    setMeta('name', 'twitter:image', image)
  }, [title, description, path, image, noIndex])
}
