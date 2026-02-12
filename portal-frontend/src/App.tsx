import MagicBento from "./components/MagicBento";
import Squares from "./components/Squares";

function App() {
  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      
      {/* Background Squares */}
      <div className="absolute inset-0 z-0">
        <Squares
          speed={0.33}
          squareSize={46}
          direction="up"
          borderColor="#271E37"
          hoverFillColor="#423e3e"
        />
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen px-6">
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
            particleCount={14}
            glowColor="132, 0, 255"
            disableAnimations={false}
          />
        </div>
      </div>

    </div>
  );
}

export default App;
