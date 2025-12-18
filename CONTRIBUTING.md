# Contributing to Solarized Chandrian VSCODE

## Prerequisites

```
npm install --location=global vsce
npm install
```

## Debugging

Bump version in `package.json`.

```
npm run code-test-install
```

and reload window

## Publishing

```
vsce login
```

to log into the `jackkenney` publishing account.

```
npm run publish
```

which uses [vsce](https://code.visualstudio.com/api/working-with-extensions/publishing-extension) to build and submit.

## Resources

- https://code.visualstudio.com/api/references/theme-color
- https://code.visualstudio.com/api/extension-guides/color-theme

# Condtributing to Solarized Chandrian IntelliJ IDEA

## Build the Plugin JAR file

1. To compile the templates into the `dist/` directory, run 

```
npm run compile
```

2. Using IDEA, build the project to populate the `out/` directory.

3. Prepare the "solarized-chandrian-theme" plugin module for deployment.

## Testing

To test the plugin,

1. Go to "Settings > Plugins"
2. Click "Install Plugin from Disk..."
3. Select the newly built JAR.

NOTE: You may now need to refresh the theme with its defaults:
1. Go to "Settings > Editor > Color Scheme"
2. Select "Restore Defaults" from the settings cog. (UI note from 1/15/23)

![screenshot](doc_assets/idea-restore-defaults-screenshot.png)

## Resources

- https://github.com/JetBrains/intellij-community/blob/master/platform/platform-resources/src/themes/metadata/IntelliJPlatform.themeMetadata.json
- https://github.com/zed-industries/zed/discussions/13631
- https://github.com/zed-industries/zed/blob/03d8e54fd4e46ba4837bda5b4dcb0e49507c1634/docs/src/extensions/languages.md#syntax-highlighting
