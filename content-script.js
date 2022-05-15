// All the DOM manipulation logic takes place in here.
// Cleans all <video> and <source> elements, then swaps <img> sources.

/** All source elements on the page. */
const originalEls = {
  imgs: document.getElementsByTagName('img'),
  sources: document.getElementsByTagName('source'),
  videos: document.getElementsByTagName('video'),
}
/** All original source image paths. */
const originalImgSrcs = []
for (let i = 0; i < originalEls.imgs.length; i++) {
  const imgEl = originalEls.imgs[i]
  originalImgSrcs.push(imgEl.src)
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
    const newPath = `http://placekitten.com/${width}/${height}`

    // If the image is already assigned, skip it
    if (imgEl.src.indexOf('placekitten.com') !== -1) {
      continue
    }

    imgEl.srcset = ''

    if (imgEl.src) {
      imgEl.src = newPath
    } else {
      imgEl.style.backgroundImage = `url(${newPath})`
    }
  }
}

/**
 * Apply the image swap effect.
 */
function applyEffect() {
  const { imgs, sources, videos } = originalEls

  cleanSourceEls(sources)
  cleanVideoEls(videos)
  replaceImageEls(imgs)

  // run the effect every second to get lazy loaded pictures
  setTimeout(applyEffect, 1000)
}

// Initially call the effect
applyEffect()
