import { HStripe } from '@/components/ui/HStripe'

export default function HomePage() {
  return (
    <div className="flex-1 flex flex-col items-center justify-center gap-8 min-h-[calc(100vh-68px)] bg-canvas">
      <h1
        className="font-inter font-bold uppercase text-text-primary text-center px-6"
        style={{
          fontSize: 'clamp(3rem, 8vw, 6rem)',
          letterSpacing: 'var(--tracking-machined)',
          lineHeight: 1,
        }}
      >
        Coming Thursday
      </h1>
      <div className="w-64">
        <HStripe />
      </div>
    </div>
  )
}
