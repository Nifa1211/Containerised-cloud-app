

import MagicBento from './components/MagicBento';

function App() {
  return (
    <div className="min-h-screen bg-black flex items-center justify-center px-6">
      {/* Layout constraint wrapper */}
      <div className="w-full max-w-6xl">
        <MagicBento
          textAutoHide={true}
          enableStars
          enableSpotlight
          enableBorderGlow={true}
          enableTilt={false}
          enableMagnetism={false}
          clickEffect
          spotlightRadius={400}
          particleCount={12}
          glowColor="132, 0, 255"
          disableAnimations={false}
        />
      </div>
    </div>
  )
}

export default App
