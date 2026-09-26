'use client'

import { useState, useRef, useEffect } from 'react'
import { Play, Pause, Volume2, VolumeX } from 'lucide-react'

export function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [volume, setVolume] = useState(0.3)
  const [isMuted, setIsMuted] = useState(false)

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
        className="fixed bottom-5 right-5 z-50 flex h-12 w-12 items-center justify-center rounded-full bg-accent-cyan text-background shadow-lg transition-transform hover:-translate-y-0.5"
        aria-label={isPlaying ? 'Pause music' : 'Play music'}
      >
        {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
      </button>
      <div className="fixed bottom-5 right-20 z-50 flex items-center gap-2 bg-card/80 backdrop-blur-md rounded-full px-3 py-2 border border-border/40">
        <button
          type="button"
          onClick={toggleMute}
          className="text-muted-foreground hover:text-foreground transition-colors"
          aria-label={isMuted ? 'Unmute' : 'Mute'}
        >
          {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
        </button>
        <input
          type="range"
          min="0"
          max="1"
          step="0.05"
          value={isMuted ? 0 : volume}
          onChange={handleVolumeChange}
          className="h-1 w-20 cursor-pointer accent-accent-cyan"
        />
      </div>
    </>
  )
}