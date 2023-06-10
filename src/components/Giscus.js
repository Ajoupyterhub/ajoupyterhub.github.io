import React from 'react'
import Giscus from '@giscus/react'

export default function GiscusWrapper({ slug, title }) {
  return (
    <Giscus
      id="comments"
      repo="Ajoupyterhub/ajoupyterhub.github.io"
      repoId="R_kgDOIBi64g"
      category="Announcements"
      categoryId="DIC_kwDOIBi64s4CWg5I"
      mapping="pathname"
      term="Welcome to Ajoupyterhub"
      reactionsEnabled="1"
      emitMetadata="0"
      inputPosition="bottom"
      theme="light_protanopia" /* light */
      lang="ko"
      loading="lazy"
      crossorigin="anonymous"
      async
    />
  )
}

/*
<script src="https://giscus.app/client.js"
        data-repo="Ajoupyterhub/ajoupyterhub.github.io"
        data-repo-id="R_kgDOIBi64g"
        data-category="Announcements"
        data-category-id="DIC_kwDOIBi64s4CWg5I"
        data-mapping="pathname"
        data-strict="0"
        data-reactions-enabled="1"
        data-emit-metadata="0"
        data-input-position="bottom"
        data-theme="light_protanopia"
        data-lang="ko"
        crossorigin="anonymous"
        async>
</script>
*/
