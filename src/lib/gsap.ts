import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export { gsap, ScrollTrigger }

export const EASE_OUT_EXPO = [0.22, 1, 0.36, 1] as const
export const EASE_IN_EXPO  = [0.55, 0, 1, 0.45] as const
