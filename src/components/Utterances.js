import React from 'react'
import ReactUtterences from 'react-utterances'
import useSiteMetadata from '../hooks/use-site-config'

const UtternaceWrapper = props => {
  const {utterSiteUrl} = useSiteMetadata()

  return (
    <ReactUtterences repo={utterSiteUrl} type={'pathname'} />
  )
}

export default UtternaceWrapper

 