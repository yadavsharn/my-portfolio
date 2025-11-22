import Projects from "@/components/Projects";
import SectionWrapper from "@/components/SectionWrapper";

const ProjectsPage = () => {
    return (
        <div className="min-h-screen bg-transparent font-inter pt-20">
            <SectionWrapper>
                <Projects />
            </SectionWrapper>
        </div>
    );
};

export default ProjectsPage;
