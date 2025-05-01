import React, { useRef, useEffect, useState } from "react";
import "./tags.css";

interface Tag {
  id: string;
  label: string;
  isSpecial?: boolean;
}

const Tags = () => {
    const [tags, setTags] = useState<Tag[]>([
        { id: '1', label: 'VW GOLF - VIII поколение, рестайлинг' },
        { id: '2', label: 'Машины из Китая', isSpecial: true },
        { id: '3', label: 'Volkswagen' },
        { id: '4', label: 'До ₽3 500 000' },
        { id: '5', label: 'Новые авто' },
        { id: '6', label: 'Хетчбеки' },
        { id: '7', label: 'Немецкие автомобили' },
        { id: '8', label: 'Немецкие автомобили' },
        { id: '9', label: 'Немецкие автомобили' },
        { id: '10', label: 'Volkswagen' },
        { id: '11', label: 'До ₽3 500 000' },
        { id: '12', label: 'Новые авто' },
        { id: '13', label: 'Хетчбеки' },
        { id: '14', label: 'Немецкие автомобили' },
        { id: '15', label: 'Немецкие автомобили' },
        { id: '16', label: 'Немецкие автомобили' }
    ]);

    const tagsRef = useRef<HTMLDivElement>(null);
    const listRef = useRef<HTMLUListElement>(null);
    const isDraggingRef = useRef(false);
    const startXRef = useRef(0);
    const scrollLeftRef = useRef(0);
    const animationRef = useRef<number>(0);
    const velocityRef = useRef(0);
    const lastXRef = useRef(0);
    const lastTimeRef = useRef(0);

    const handleMouseDown = (e: React.MouseEvent) => {
        if (!tagsRef.current) return;
        
        isDraggingRef.current = true;
        startXRef.current = e.pageX - tagsRef.current.offsetLeft;
        scrollLeftRef.current = tagsRef.current.scrollLeft;
        lastXRef.current = e.pageX;
        lastTimeRef.current = performance.now();
        
        cancelAnimationFrame(animationRef.current);
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (!isDraggingRef.current || !tagsRef.current) return;
        
        e.preventDefault();
        const x = e.pageX - tagsRef.current.offsetLeft;
        const walk = x - startXRef.current;
        tagsRef.current.scrollLeft = scrollLeftRef.current - walk;

        const now = performance.now();
        const timeDelta = now - lastTimeRef.current;
        if (timeDelta > 0) {
            const deltaX = e.pageX - lastXRef.current;
            velocityRef.current = deltaX / timeDelta;
            lastXRef.current = e.pageX;
            lastTimeRef.current = now;
        }
    };

    const handleMouseUp = () => {
        isDraggingRef.current = false;
        startInertia();
    };

    const handleMouseLeave = () => {
        isDraggingRef.current = false;
        startInertia();
    };

    const startInertia = () => {
        if (!tagsRef.current) return;
        
        const decay = 0.92; // Скорость замедления
        const minVelocity = 0.01; // Минимальная скорость для продолжения
        
        const animate = () => {
            if (Math.abs(velocityRef.current) < minVelocity || !tagsRef.current) {
                velocityRef.current = 0;
                return;
            }
            
            tagsRef.current.scrollLeft -= velocityRef.current * 15;
            velocityRef.current *= decay;
            
            animationRef.current = requestAnimationFrame(animate);
        };
        
        animationRef.current = requestAnimationFrame(animate);
    };

    useEffect(() => {
        return () => {
            cancelAnimationFrame(animationRef.current);
        };
    }, []);

    return (
        <div 
            className="tags"
            ref={tagsRef}
            onMouseDown={handleMouseDown}
            onMouseLeave={handleMouseLeave}
            onMouseUp={handleMouseUp}
            onMouseMove={handleMouseMove}
        >
            <ul className="tags__list" ref={listRef}>
                {tags.map(tag => (
                    <li key={tag.id} className={`tags__item ${tag.isSpecial ? 'tags__item_special' : ''}`}>
                        {tag.label}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Tags;