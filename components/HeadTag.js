import React from 'react'
import Head from 'next/head'

export default function HeadTag({ title = false, robotContent, description = false, keywords = false }) {


    return (
        <div>
            <Head>
                <meta charSet="utf-8" />

                {title ? (<title>{title}</title>) : null}
                {description ? (<meta name="description" content={description} />) : null}

                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <meta name="robots" content={robotContent.toString()} />

                {keywords ? (<meta name="keywords" content={keywords.toString()} />) : null}

            </Head>
        </div>
    )
}
