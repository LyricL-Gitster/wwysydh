/** @jsx jsx */
import { Box, Flex, Link, useColorMode, jsx } from "theme-ui"

const Footer = () => {
  const [colorMode, setColorMode] = useColorMode()
  console.log("colorMode: ", colorMode)
  const isDark = colorMode === `dark`
  const toggleColorMode = (e: any) => {
    setColorMode(isDark ? `light` : `dark`)
  }

  return (
    <Box as="footer" variant="footer">
      <button
        sx={{ variant: `buttons.toggle`, fontWeight: `semibold`, display: `block`, mx: `auto`, mb: 3 }}
        onClick={toggleColorMode}
        type="button"
        aria-label="Toggle dark mode"
      >
        {isDark ? `Light` : `Dark`}
      </button>
      Copyright &copy; {new Date().getFullYear()}. All rights reserved.
      <br />
      <Flex
        sx={{
          justifyContent: `center`,
          alignItems: `center`,
          mt: 3,
          color: `text`,
          fontWeight: `semibold`,
          a: { color: `text` },
        }}
      >
        {isDark ? (
          <img width="30" height="30" src="https://img.lekoarts.de/gatsby/logo_v2-light_w30.png" alt="LekoArts Logo" />
        ) : (
          <img width="30" height="30" src="https://img.lekoarts.de/gatsby/logo_v2_w30.png" alt="LekoArts Logo" />
        )}
        {` `}
        <Link
          aria-label="Link to the theme's GitHub repository"
          sx={{ ml: 2 }}
          href="https://github.com/LekoArts/gatsby-themes/tree/main/themes/gatsby-theme-cara"
        >
          Theme
        </Link>
      </Flex>
    </Box>
  )
}

export default Footer
