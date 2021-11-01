const stayInBrowser = (queryString) => {
  const searchParams = new URLSearchParams(queryString)

  return searchParams.has("browser")
}

const openInMacApp = () => {
  const { pathname, search } = window.location
  if (pathname == null) {
    return
  }

  if (stayInBrowser(search)) {
    return
  }

  const notionAppPrefix = "notion:"

  window.location = notionAppPrefix + pathname
}

openInMacApp()
