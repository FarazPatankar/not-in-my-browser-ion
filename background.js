const openInMacApp = () => {
  const { pathname } = window.location
  if (pathname == null) {
    return
  }

  const notionAppPrefix = "notion:"

  window.location = notionAppPrefix + pathname
}

openInMacApp()
