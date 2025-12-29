import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';

export default function Landing({ onStart }: { onStart: () => void }) {
  return (
    <>
      <Navbar />
      <HeroSection onStart={onStart} />
    </>
  );
}
