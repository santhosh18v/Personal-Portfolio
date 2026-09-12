import Navigation from "@/components/Navigation";
import HeroScene from "@/components/scenes/HeroScene";
import AboutScene from "@/components/scenes/AboutScene";
import EngineeringUniverse from "@/components/scenes/EngineeringUniverse";
import ProjectUniverse from "@/components/scenes/ProjectUniverse";
import JourneyScene from "@/components/scenes/JourneyScene";
import EducationScene from "@/components/scenes/EducationScene";
import PhilosophyScene from "@/components/scenes/PhilosophyScene";
import ContactScene from "@/components/scenes/ContactScene";
import SceneProgress from "@/components/SceneProgress";
import LoadingScreen from "@/components/LoadingScreen";
import CinematicMotion from "@/components/CinematicMotion";
export default function Home(){return <><a className="skip-link" href="#about">Skip to content</a><Navigation/><LoadingScreen/><main><HeroScene/><AboutScene/><EngineeringUniverse/><ProjectUniverse/><JourneyScene/><EducationScene/><PhilosophyScene/><ContactScene/></main><SceneProgress/><CinematicMotion/></>}
