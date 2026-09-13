import Image from "next/image";
import {
  BrainCircuit,
  Blocks,
  CheckCheck,
  FileText,
  AudioLines,
  Stethoscope,
  Users,
  CalendarDays,
  Leaf,
  ScanLine,
  Layers,
  ArrowRight,
  GitBranch,
  Database,
  ShieldCheck,
} from "lucide-react";
export default function ProjectVisual({ id }: { id: string }) {
  if (id === "forgeai")
    return (
      <div
        className="project-visual forge-visual"
        role="img"
        aria-label="Conceptual ForgeAI workflow with product, backend, testing, and documentation agents."
      >
        <div className="visual-toolbar">
          <b>
            <Blocks size={18} /> forgeai
          </b>
          <span>ENGINEERING WORKFLOW</span>
        </div>
        <div className="forge-content">
          <div className="visual-eyebrow">ONE BRIEF. SPECIALIZED MINDS.</div>
          <h4>From idea to implementation.</h4>
          <div className="workflow-start">
            <GitBranch size={18} />
            <span>Project brief</span>
          </div>
          <div className="agent-grid">
            {[
              [BrainCircuit, "Product", "Plan the work"],
              [Blocks, "Backend", "Build the system"],
              [CheckCheck, "Testing", "Verify behavior"],
              [FileText, "Documentation", "Explain decisions"],
            ].map(([Icon, title, desc]) => {
              const I = Icon as typeof BrainCircuit;
              return (
                <div className="agent-node" key={title as string}>
                  <I size={26} />
                  <strong>{title as string}</strong>
                  <span>{desc as string}</span>
                </div>
              );
            })}
          </div>
          <div className="workflow-memory">
            <span>LANGGRAPH ORCHESTRATION</span>
            <i />
            <span>OLLAMA INFERENCE</span>
            <i />
            <span>SQLITE CHECKPOINTS</span>
          </div>
        </div>
        <div className="visual-footer">
          <span>Multi-agent engineering</span>
          <span>Conceptual workflow</span>
        </div>
      </div>
    );
  if (id === "dentos-ai")
    return (
      <div
        className="project-visual dentos-visual"
        role="img"
        aria-label="Conceptual DentOS AI workspace connecting clinic records and clinician-reviewed dictation."
      >
        <div className="visual-toolbar">
          <b>
            <Stethoscope size={18} /> DentOS AI
          </b>
          <span>THE CONNECTED CLINIC</span>
        </div>
        <div className="dentos-content">
          <div className="clinic-rail">
            <span>CLINIC WORKSPACE</span>
            {[
              [Users, "Patients"],
              [CalendarDays, "Appointments"],
              [FileText, "Clinical notes"],
              [ShieldCheck, "Access & roles"],
            ].map(([Icon, label]) => {
              const I = Icon as typeof Users;
              return (
                <div key={label as string}>
                  <I size={18} />
                  {label as string}
                </div>
              );
            })}
            <div className="clinic-rail-foot">
              <Database size={17} /> Clinic-owned records
            </div>
          </div>
          <div className="dictation-preview">
            <div className="visual-eyebrow">AI-ASSISTED DICTATION</div>
            <h4>
              More time for
              <br />
              the person.
            </h4>
            <div className="audio-wave" aria-hidden="true">
              {Array.from({ length: 35 }, (_, i) => (
                <i
                  key={i}
                  style={{
                    height: `${12 + Math.abs(Math.sin(i * 1.1) * Math.cos(i * 0.3)) * 45}px`,
                  }}
                />
              ))}
            </div>
            <div className="dictation-steps">
              <span>Voice</span>
              <ArrowRight size={13} />
              <span>Transcript</span>
              <ArrowRight size={13} />
              <span>Draft note</span>
            </div>
            <p>
              <ShieldCheck size={15} /> Clinician review before approval
            </p>
          </div>
        </div>
        <div className="visual-footer">
          <span>Operations meet intelligence</span>
          <span>Conceptual workflow</span>
        </div>
      </div>
    );
  if (id === "agriai")
    return (
      <div
        className="project-visual agri-visual"
        role="img"
        aria-label="AgriAI product concept for crop health, pest identification, soil guidance, and farming assistance."
      >
        <div className="visual-toolbar">
          <b>
            <Leaf size={18} /> AgriAI
          </b>
          <span>INTELLIGENCE, ROOTED IN REALITY</span>
        </div>
        <div className="agri-content">
          <div className="crop-image">
            <Image
              fill
              sizes="(max-width: 800px) 40vw, 400px"
              src="/images/agriai-crops.webp"
              alt="Healthy green crop leaves in natural light"
              loading="lazy"
            />
            <span className="crop-label">
              <ScanLine size={16} /> CROP HEALTH
            </span>
          </div>
          <div className="agri-copy">
            <div className="visual-eyebrow">A MORE INFORMED NEXT STEP.</div>
            <h4>
              Understand.
              <br />
              Cultivate.
              <br />
              <span>Grow.</span>
            </h4>
            <div className="agri-capabilities">
              <span>Crop health</span>
              <span>Pest identification</span>
              <span>Soil guidance</span>
              <span>Farming assistance</span>
            </div>
          </div>
        </div>
        <div className="visual-footer">
          <span>AI-assisted agriculture</span>
          <span>Product concept</span>
        </div>
      </div>
    );
  return (
    <div
      className="project-visual lip-visual"
      role="img"
      aria-label="Illustrative LipSpeak pipeline from video frames through mouth regions to a predicted label."
    >
      <div className="visual-toolbar">
        <b>
          <AudioLines size={18} /> LipSpeak
        </b>
        <span>VISUAL SPEECH RECOGNITION</span>
      </div>
      <div className="lip-content">
        <div className="vision-crop">
          <Image
            fill
            sizes="(max-width: 800px) 40vw, 400px"
            src="/images/santhosh-suit.webp"
            alt="Portrait used to illustrate face-region preprocessing"
            loading="lazy"
          />
          <div className="vision-corners" aria-hidden="true" />
          <span>VISUAL INPUT</span>
        </div>
        <div className="lip-copy">
          <div className="visual-eyebrow">SEEING THE UNSPOKEN.</div>
          <h4>
            Communication
            <br />
            beyond sound.
          </h4>
          <div className="vision-pipeline">
            {[
              ["01", "Video frames"],
              ["02", "Mouth region"],
              ["03", "Temporal features"],
              ["04", "Predicted label"],
            ].map(([n, text]) => (
              <div key={n}>
                <span>{n}</span>
                {text}
                {n !== "04" && <ArrowRight size={14} />}
              </div>
            ))}
          </div>
          <p>
            <Layers size={16} /> Learning from movement across frames
          </p>
        </div>
      </div>
      <div className="visual-footer">
        <span>Research for accessibility</span>
        <span>Illustrative pipeline</span>
      </div>
    </div>
  );
}
