/** All source elements on the page. */
const originalElements = {
  imgs: document.getElementsByTagName('img'),
  sources: document.getElementsByTagName('source'),
  videos: document.getElementsByTagName('video'),
}

/**
 * Remove the srcset attribute from all <source> elements.
 * @param {HTMLSourceElement[]} sourceEls Array of <source> elements
 */
function cleanSourceEls(sourceEls) {
  for (let i = 0; i < sourceEls.length; i++) {
    const sourceEl = sourceEls[i]
    sourceEl.srcset = ''
  }
}

/**
 * Remove the src attribute from all <video> elements.
 * @param {HTMLVideoElement[]} videoEls Array of <video> elements
 */
function cleanVideoEls(videoEls) {
  for (let i = 0; i < videoEls.length; i++) {
    const videoEl = videoEls[i]
    videoEl.src = ''
  }
}

/**
 * Attempt to swap all image elements on the page.
 * @param {HTMLImageElement[]} imgEls Array of <img> elements
 */
function replaceImageEls(imgEls) {
  for (let i = 0; i < imgEls.length; i++) {
    const imgEl = imgEls[i]
    const width = imgEl.width
    const height = imgEl.height
    const url = `http://placekitten.com/${width}/${height}`

    // If the image is already assigned, skip it
    if (imgEl.src.indexOf('placekitten.com') !== -1) {
      continue
    }

    if (imgEl.src) {
      imgEl.src = url
    } else {
      imgEl.style.backgroundImage = `url(${url})`
    }

    imgEl.srcset = ''
  }
}

/**
 * Apply the image swap effect.
 */
function applyEffect() {
  const { imgs, sources, videos } = originalElements

  cleanSourceEls(sources)
  cleanVideoEls(videos)
  replaceImageEls(imgs)

  // run the effect every second to get lazy loaded pictures
  setTimeout(applyEffect, 1000)
}

// Initially call the effect
applyEffect()
