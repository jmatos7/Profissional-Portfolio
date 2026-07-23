import Button from "@/components/ui/button/button";
import Container from "@/components/commons/Container/container";
import Section from "@/components/commons/Section/section";

import "./Hero.scss";

function Hero() {
    return (
        <Section id="home">
            <Container>
                <div className="hero">
                    <div className="hero__content">
                        <span className="hero__badge">
                            👋 Available for work
                        </span>

                        <h1 className="hero__title">
                            João Matos
                        </h1>

                        <h2 className="hero__subtitle">
                            Software Engineering Student
                            <br />
                            & Full Stack Developer
                        </h2>

                        <p className="hero__description">
                            Passionate about building modern web applications
                            with React, TypeScript and scalable architectures.
                            I enjoy solving complex problems and creating
                            intuitive user experiences.
                        </p>

                        <div className="hero__actions">
                            <Button>
                                View Projects
                            </Button>

                            <Button variant="secondary">
                                Download CV
                            </Button>
                        </div>
                    </div>

                    <div className="hero__image">
                        <div className="hero__image-placeholder">
                            Your Image
                        </div>
                    </div>
                </div>
            </Container>
        </Section>
    );
}

export default Hero;