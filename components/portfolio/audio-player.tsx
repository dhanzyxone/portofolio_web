'use client'

import { useState, useRef, useEffect } from 'react'
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'

export function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(true)
  const [volume, setVolume] = useState(0.3)
  const [isMuted, setIsMuted] = useState(false)

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.volume = isMuted ? 0 : volume

    // Try autoplay on mount
    audio.play().then(() => {
      setIsPlaying(true)
    }).catch(() => {
      setIsPlaying(false)
      // Autoplay blocked: play on first user interaction
      const startAudio = () => {
        audio.play().then(() => {
          setIsPlaying(true)
          window.removeEventListener('click', startAudio)
          window.removeEventListener('scroll', startAudio)
          window.removeEventListener('keydown', startAudio)
          window.removeEventListener('touchstart', startAudio)
        }).catch(() => {})
      }
      window.addEventListener('click', startAudio, { once: true })
      window.addEventListener('scroll', startAudio, { once: true })
      window.addEventListener('keydown', startAudio, { once: true })
      window.addEventListener('touchstart', startAudio, { once: true })
    })
  }, [])

  useEffect(() => {
    const audio = audioRef.current
    if (!audio) return
    audio.volume = isMuted ? 0 : volume
    if (isPlaying) {
      audio.play().catch(() => setIsPlaying(false))
    } else {
      audio.pause()
    }
  }, [isPlaying, volume, isMuted])

  const togglePlay = () => {
    const audio = audioRef.current
    if (!audio) return
    if (isPlaying) {
      audio.pause()
      setIsPlaying(false)
    } else {
      audio.play().then(() => setIsPlaying(true)).catch(() => {})
    }
  }

  const toggleMute = () => {
    setIsMuted(!isMuted)
    if (audioRef.current) {
      audioRef.current.volume = isMuted ? 0 : volume
    }
  }

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = Number(e.target.value)
    setVolume(v)
    setIsMuted(v === 0)
    if (audioRef.current) {
      audioRef.current.volume = v === 0 ? 0 : v
    }
  }

  return (
    <>
      <audio ref={audioRef} src="/DJ SUDAH TERBIASA TERJADI TANTE TEMAN DATANG KETIKA BUTUH SAJA VIRAL TIKTOK TERBARU 2025.mp3" loop preload="auto" />
      <button
        type="button"
        onClick={togglePlay}
        className="fixed bottom-6 left-6 z-40 flex h-11 w-11 items-center justify-center rounded-full border border-border/80 bg-background/90 text-foreground shadow-xl backdrop-blur-md transition-all hover:border-accent-cyan hover:bg-accent-cyan/15 hover:text-accent-cyan"
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
        title={isPlaying ? 'Pause music' : 'Play music'}
      >
        {isPlaying ? <Pause className="h-5 w-5 text-accent-cyan" /> : <Play className="h-5 w-5 text-accent-cyan" />}
      </button>
      <div className="fixed bottom-6 left-20 z-40 hidden sm:flex items-center gap-2 rounded-full border border-border/80 bg-background/90 px-3 py-2 shadow-xl backdrop-blur-md">
        <button
          type="button"
          onClick={toggleMute}
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4 text-accent-cyan" />}
        </button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.05"
          value={isMuted ? 0 : volume}
          onChange={handleVolumeChange}
          className="h-1 w-16 cursor-pointer accent-accent-cyan"
        />
      </div>
    </>
  )
}
