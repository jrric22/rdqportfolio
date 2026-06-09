import { useState, useEffect } from "react";

export function useScrollSpy(sectionIds: string[]): string {

    const [activeId, setActiveId] = useState <string>(sectionIds[0]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        setActiveId(entry.target.id);
                    }
                })
            },
            {
                rootMargin: "-30% 0px -65%",
                threshold: 0, 
            }   
        )
        
    sectionIds.forEach((id) => {
        const element = document.getElementById(id);
        if (element) observer.observe(element)
        });

   
        return () => observer.disconnect();
    }, [sectionIds]);

    return activeId

}