'use client'

import { useEffect, useRef } from 'react'
import * as THREE from 'three'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger)
}

export function Floating3dObjects() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReduced) return

    // Scene, Camera, Renderer
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      60,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    camera.position.z = 15

    const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    renderer.toneMapping = THREE.ACESFilmicToneMapping
    renderer.toneMappingExposure = 1.2
    container.appendChild(renderer.domElement)

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8)
    scene.add(ambientLight)

    const keyLight = new THREE.DirectionalLight(0xffffff, 2.0)
    keyLight.position.set(10, 20, 15)
    scene.add(keyLight)

    const cyanLight = new THREE.PointLight(0x06b6d4, 15, 50)
    cyanLight.position.set(-10, -10, 5)
    scene.add(cyanLight)

    // Master Group for 3D Objects
    const group = new THREE.Group()
    scene.add(group)

    // Materials
    const chromeMaterial = new THREE.MeshStandardMaterial({
      color: 0xdddddd,
      metalness: 0.95,
      roughness: 0.05,
    })

    const glassMaterial = new THREE.MeshPhysicalMaterial({
      color: 0x88ccff,
      transmission: 0.9,
      opacity: 1,
      transparent: true,
      roughness: 0.1,
      ior: 1.5,
    })

    const wireframeMaterial = new THREE.MeshStandardMaterial({
      color: 0x06b6d4,
      wireframe: true,
      roughness: 0.2,
    })

    const ringMaterial = new THREE.MeshStandardMaterial({
      color: 0x38bdf8,
      emissive: 0x06b6d4,
      emissiveIntensity: 0.4,
      roughness: 0.3,
    })

    const darkTechMaterial = new THREE.MeshStandardMaterial({
      color: 0x1f2937,
      metalness: 0.8,
      roughness: 0.2,
    })

    // Geometries & Objects creation (Multiple layers & diverse types)
    const geometries = [
      { geom: new THREE.SphereGeometry(1, 32, 32), mat: chromeMaterial },
      { geom: new THREE.BoxGeometry(1.2, 1.2, 1.2), mat: glassMaterial },
      { geom: new THREE.OctahedronGeometry(1.1, 0), mat: wireframeMaterial },
      { geom: new THREE.TorusGeometry(1.3, 0.2, 16, 100), mat: ringMaterial },
      { geom: new THREE.DodecahedronGeometry(1), mat: darkTechMaterial },
      { geom: new THREE.SphereGeometry(0.7, 24, 24), mat: glassMaterial },
      { geom: new THREE.BoxGeometry(0.9, 0.9, 0.9), mat: chromeMaterial },
      { geom: new THREE.OctahedronGeometry(0.8, 0), mat: ringMaterial },
    ]

    const objects: { mesh: THREE.Mesh; origPos: THREE.Vector3; speed: number }[] = []
    const count = 24

    for (let i = 0; i < count; i++) {
      const template = geometries[i % geometries.length]
      const mesh = new THREE.Mesh(template.geom, template.mat)

      // Scatter across 3D space with depth layers
      const x = (Math.random() - 0.5) * 24
      const y = (Math.random() - 0.5) * 35
      const z = (Math.random() - 0.5) * 15 - 2

      mesh.position.set(x, y, z)

      const scale = 0.5 + Math.random() * 1.2
      mesh.scale.set(scale, scale, scale)

      mesh.rotation.set(
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        Math.random() * Math.PI
      )

      group.add(mesh)
      objects.push({
        mesh,
        origPos: mesh.position.clone(),
        speed: 0.5 + Math.random() * 1.5,
      })
    }

    // GSAP ScrollTrigger timeline (scrub: 1)
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: document.body,
        start: 'top top',
        end: 'bottom bottom',
        scrub: 1,
      },
    })

    tl.to(group.rotation, {
      x: Math.PI * 1.5,
      y: Math.PI * 2,
      ease: 'none',
    })

    // Individual object movement along scroll
    objects.forEach((obj, index) => {
      tl.to(
        obj.mesh.position,
        {
          y: obj.origPos.y - (index % 2 === 0 ? 15 : 20) * obj.speed,
          z: obj.origPos.z + (index % 3 === 0 ? 8 : -5),
          ease: 'none',
        },
        0
      )
      tl.to(
        obj.mesh.rotation,
        {
          x: `+=${Math.PI * 2}`,
          y: `+=${Math.PI * 2}`,
          ease: 'none',
        },
        0
      )
    })

    // Render Loop
    let animId = 0
    const animate = () => {
      renderer.render(scene, camera)
      animId = requestAnimationFrame(animate)
    }
    animate()

    // Resize handler
    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }
    window.addEventListener('resize', onResize)

    return () => {
      window.removeEventListener('resize', onResize)
      cancelAnimationFrame(animId)
      tl.kill()
      ScrollTrigger.getAll().forEach((t) => t.kill())
      renderer.dispose()
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement)
      }
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-0 pointer-events-none overflow-hidden opacity-[0.15]"
      aria-hidden="true"
    />
  )
}
