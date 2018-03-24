import React from "react"

let stylesStr
if (process.env.NODE_ENV === `production`) {
    try {
        stylesStr = require(`!raw-loader!../public/styles.css`)
    } catch (e) {
        console.log(e)
    }
}

module.exports = class HTML extends React.Component {
    render() {
        let css
        if (process.env.NODE_ENV === `production`) {
            css = (
                <style
                    id="gatsby-inlined-css"
                    dangerouslySetInnerHTML={{ __html: stylesStr }}
                />
            )
        }
        return (
            <html {...this.props.htmlAttributes}>
                <head>
                    <title>Franco Esparza</title>
                    <meta charSet="utf-8" />
                    <meta httpEquiv="x-ua-compatible" content="ie=edge" />
                    <meta
                        name="viewport"
                        content="width=device-width, initial-scale=1, shrink-to-fit=no"
                    />
                    <link href="https://fonts.googleapis.com/css?family=Lato:300,400" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css?family=Roboto:100,300" rel="stylesheet" />
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bulma/0.6.2/css/bulma.min.css" />
                    <script src="https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js"></script>
                    <script src="https://cdn.jsdelivr.net/npm/typeit@5.5.0/dist/typeit.min.js"></script>
                    <script defer src="https://use.fontawesome.com/releases/v5.0.6/js/all.js"></script>
                    {css}
                    {this.props.headComponents}
                </head>
                <body {...this.props.bodyAttributes}>
                    {this.props.preBodyComponents}
                    <div
                        key={`body`}
                        id="___gatsby"
                        dangerouslySetInnerHTML={{ __html: this.props.body }}
                    />
                    {this.props.postBodyComponents}
                </body>
            </html>
        )
    }
}
