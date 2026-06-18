// components/InstagramEmbed.jsx
import React, { useEffect, useState, useRef } from 'react'

export default function InstagramEmbed({ url }) {
  const [isLoaded, setIsLoaded] = useState(false)
  const embedRef = useRef(null)

  useEffect(() => {
    // Limpa a URL removendo query parameters
    const cleanUrl = url.split('?')[0]

    // Carrega o script do Instagram se ainda não estiver carregado
    const loadInstagramEmbed = () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process()
        setTimeout(() => setIsLoaded(true), 1000)
      } else {
        const script = document.createElement('script')
        script.src = 'https://www.instagram.com/embed.js'
        script.async = true
        script.onload = () => {
          if (window.instgrm) {
            window.instgrm.Embeds.process()
            setTimeout(() => setIsLoaded(true), 1000)
          }
        }
        document.body.appendChild(script)
      }
    }

    loadInstagramEmbed()

    // Recarrega quando a URL muda
    return () => {
      if (window.instgrm) {
        window.instgrm.Embeds.process()
      }
    }
  }, [url])

  // Limpa a URL removendo query parameters
  const cleanUrl = url.split('?')[0]

  return (
    <div className="instagram-embed-wrapper" ref={embedRef}>
      <blockquote
        className="instagram-media"
        data-instgrm-permalink={cleanUrl}
        data-instgrm-version="14"
        data-instgrm-captioned
      />
      {!isLoaded && <div className="loading-placeholder">Carregando Instagram...</div>}
    </div>
  )
}