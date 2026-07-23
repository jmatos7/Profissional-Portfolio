import type { ReactNode } from "react";

import "./Section.scss";

interface SectionProps {
    id?: string;
    children: ReactNode;
}

function Section({ id, children }: SectionProps) {
    return (
        <section id={id} className="section">
            {children}
        </section>
    );
}

export default Section;