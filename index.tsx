
import React, { useState, useEffect, useMemo, useRef } from 'react';
import ReactDOM from 'react-dom/client';
import { courseData } from './data/courseData';
import type { CourseData, Level, Module, Lesson, LessonContentItem, QuizItem, GlossaryItem, SafetyItem } from './types';

// --- Safe Animation Components ---
// This prevents a white screen if Framer Motion loads after React.
// It provides a non-animated fallback (a regular div, ul, etc.) if `motion` isn't available yet.
const motion = (window as any).motion;
const MotionDiv = motion ? motion.div : (({ initial, animate, transition, ...props }) => <div {...props} />);
const MotionUl = motion ? motion.ul : (({ initial, animate, transition, ...props }) => <ul {...props} />);
const MotionButton = motion ? motion.button : (({ initial, animate, transition, ...props }) => <button {...props} />);


// Utility to find a lesson by its ID
const findLessonById = (data: CourseData, id: string | null): Lesson | null => {
  if (!id) return null;
  for (const level of data) {
    for (const module of level.modules) {
      const found = module.lessons.find(lesson => lesson.id === id);
      if (found) return found;
    }
  }
  return null;
};

// --- Sub-components ---

const OilField3DBackground: React.FC = () => {
    const mountRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (!mountRef.current || !(window as any).THREE) return;

        const THREE = (window as any).THREE;
        let animationFrameId: number;

        // Scene setup
        const scene = new THREE.Scene();
        scene.fog = new THREE.FogExp2(0x000104, 0.0035);

        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        camera.position.set(0, 50, 100);

        const renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true });
        renderer.setSize(window.innerWidth, window.innerHeight);
        renderer.setClearColor(0x000000, 0);
        mountRef.current.appendChild(renderer.domElement);

        // Lighting
        scene.add(new THREE.AmbientLight(0x404040, 2));
        const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
        directionalLight.position.set(10, 30, 20);
        scene.add(directionalLight);

        // Ground plane
        const planeGeometry = new THREE.PlaneGeometry(1000, 1000, 50, 50);
        const planeMaterial = new THREE.MeshStandardMaterial({
            color: 0x050505,
            metalness: 0.8,
            roughness: 0.6,
            wireframe: true,
        });
        const plane = new THREE.Mesh(planeGeometry, planeMaterial);
        plane.rotation.x = -Math.PI / 2;
        plane.position.y = -5;
        scene.add(plane);

        // Cylinders (derricks)
        const derrickGroup = new THREE.Group();
        const derrickMaterial = new THREE.MeshStandardMaterial({
            color: 0x888888, metalness: 0.9, roughness: 0.4,
        });

        for (let i = 0; i < 50; i++) {
            const height = Math.random() * 40 + 10;
            const derrick = new THREE.Mesh(
                new THREE.CylinderGeometry(1, Math.random() * 2 + 0.5, height, 8),
                derrickMaterial
            );
            derrick.position.set(
                Math.random() * 800 - 400,
                height / 2 - 5,
                Math.random() * 800 - 400
            );
            derrickGroup.add(derrick);
        }
        scene.add(derrickGroup);
        
        // Particle system
        const particlesGeometry = new THREE.BufferGeometry();
        const particlesCnt = 5000;
        const posArray = new Float32Array(particlesCnt * 3);
        for (let i = 0; i < particlesCnt * 3; i++) {
            posArray[i] = (Math.random() - 0.5) * 800;
        }
        particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
        const particlesMaterial = new THREE.PointsMaterial({
            size: 0.2, color: 0x0088ff, transparent: true,
            blending: THREE.AdditiveBlending, depthWrite: false,
        });
        const particleMesh = new THREE.Points(particlesGeometry, particlesMaterial);
        scene.add(particleMesh);

        // Animation loop
        const clock = new THREE.Clock();
        const animate = () => {
            const elapsedTime = clock.getElapsedTime();
            particleMesh.position.y = (elapsedTime * 5) % 200 - 5;
            camera.position.x = Math.sin(elapsedTime * 0.1) * 50;
            camera.position.z = Math.cos(elapsedTime * 0.1) * 150;
            camera.lookAt(0, 20, 0);
            renderer.render(scene, camera);
            animationFrameId = requestAnimationFrame(animate);
        };
        animate();

        const handleResize = () => {
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
            renderer.setSize(window.innerWidth, window.innerHeight);
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
            cancelAnimationFrame(animationFrameId);
            if (mountRef.current) {
                mountRef.current.removeChild(renderer.domElement);
            }
             scene.traverse(object => {
                if ((object as any).geometry) (object as any).geometry.dispose();
                if ((object as any).material) {
                    if (Array.isArray((object as any).material)) {
                        (object as any).material.forEach((material: any) => material.dispose());
                    } else {
                        (object as any).material.dispose();
                    }
                }
            });
            renderer.dispose();
        };
    }, []);

    return (
        <div
            ref={mountRef}
            className="fixed top-0 left-0 w-full h-screen -z-10 opacity-20"
        ></div>
    );
};

const Loader: React.FC = () => (
  <div className="fixed inset-0 bg-gray-900 bg-opacity-90 flex items-center justify-center z-50">
    <div className="text-center text-white">
      <div className="w-16 h-16 border-4 border-dashed rounded-full animate-spin border-blue-400 mx-auto"></div>
      <h2 className="text-2xl mt-4 font-semibold">Well Intervention & Completion</h2>
      <p className="text-lg">Loading Course...</p>
    </div>
  </div>
);

const LessonImage: React.FC<{ item: { src: string; alt: string; caption: string } }> = ({ item }) => (
    <figure className="my-6 animate-fade-in" aria-label={item.alt}>
        <img 
            src={item.src} 
            alt={item.alt} 
            className="max-w-full lg:max-w-3xl mx-auto rounded-lg shadow-md border-4 border-white"
        />
        <figcaption className="mt-2 text-sm text-center text-gray-600 italic">{item.caption}</figcaption>
    </figure>
);

const LessonVideo: React.FC<{ item: { topic: string } }> = ({ item }) => (
    <div className="my-6 p-4 border-l-4 border-blue-500 bg-blue-50 rounded-r-lg animate-fade-in">
        <h4 className="font-bold text-blue-800">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline-block mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
            Suggested Video Topic
        </h4>
        <p className="ml-8 text-gray-700">{item.topic}</p>
        <p className="text-xs text-gray-500 ml-8 mt-2">Note: In a full implementation, a YouTube video player would be embedded here.</p>
    </div>
);

const LessonContentView: React.FC<{ content: LessonContentItem[] }> = ({ content }) => {
    return (
        <div>
            {content.map((item, index) => {
                switch (item.type) {
                    case 'text':
                        return <div key={index} className="prose max-w-none text-gray-800 leading-relaxed" dangerouslySetInnerHTML={{ __html: item.content }} />;
                    case 'image':
                        return <LessonImage key={index} item={item} />;
                    case 'video':
                         return <LessonVideo key={index} item={item} />;
                    default:
                        return null;
                }
            })}
        </div>
    );
};

const GlossarySection: React.FC<{ items: GlossaryItem[] }> = ({ items }) => (
    <div className="mt-8 p-6 bg-gray-50 rounded-lg border border-gray-200">
        <h3 className="text-xl font-bold text-gray-800 mb-4">Glossary of Terms</h3>
        <dl>
            {items.map((item, index) => (
                <div key={index} className="mb-3">
                    <dt className="font-semibold text-gray-700">{item.term}</dt>
                    <dd className="ml-4 text-gray-600">{item.definition}</dd>
                </div>
            ))}
        </dl>
    </div>
);

const SafetyChecklistSection: React.FC<{ item: SafetyItem | undefined }> = ({ item }) => {
    if (!item) return null;
    return (
        <div className="mt-8 p-6 bg-red-50 rounded-lg border border-red-200">
            <h3 className="text-xl font-bold text-red-800 mb-4 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
                Safety Checklist: {item.topic}
            </h3>
            <ul className="list-disc list-inside space-y-2 text-red-700">
                {item.points.map((point, index) => (
                    <li key={index}>{point}</li>
                ))}
            </ul>
        </div>
    );
};


const QuizSection: React.FC<{ items: QuizItem[] }> = ({ items }) => {
    const [answers, setAnswers] = useState<Record<number, boolean>>({});

    const toggleAnswer = (index: number) => {
        setAnswers(prev => ({...prev, [index]: !prev[index]}));
    };

    return (
        <div className="mt-8 p-6 bg-blue-50 rounded-lg border border-blue-200">
            <h3 className="text-xl font-bold text-blue-800 mb-4">Quiz / Key Takeaways</h3>
            <div className="space-y-4">
                {items.map((item, index) => (
                    <div key={index} className="border-b border-blue-100 pb-2">
                        <p className="font-semibold text-gray-700">{item.question}</p>
                        <button 
                            onClick={() => toggleAnswer(index)}
                            className="text-sm text-blue-600 hover:text-blue-800 mt-1"
                            aria-expanded={!!answers[index]}
                        >
                            {answers[index] ? 'Hide Answer' : 'Show Answer'}
                        </button>
                        {answers[index] && (
                            <p className="mt-2 p-2 bg-green-100 text-green-800 rounded animate-fade-in">{item.answer}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};


const Sidebar: React.FC<{ 
    data: CourseData; 
    activeLessonId: string | null;
    completedLessons: Set<string>;
    onSelectLesson: (id: string) => void;
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
}> = ({ data, activeLessonId, completedLessons, onSelectLesson, isOpen, setIsOpen }) => {
    const [openModules, setOpenModules] = useState<Record<string, boolean>>({});

    useEffect(() => {
        // Auto-open the module of the active lesson
        if (activeLessonId) {
            for (const level of data) {
                for (const module of level.modules) {
                    if (module.lessons.some(l => l.id === activeLessonId)) {
                        setOpenModules(prev => ({ ...prev, [module.id]: true }));
                        break;
                    }
                }
            }
        }
    }, [activeLessonId, data]);


    const toggleModule = (moduleId: string) => {
        setOpenModules(prev => ({ ...prev, [moduleId]: !prev[moduleId] }));
    };
    
    return (
        <>
            <button 
                onClick={() => setIsOpen(!isOpen)}
                className="lg:hidden fixed top-4 left-4 z-40 p-2 bg-white rounded-md shadow-lg"
                aria-label="Toggle navigation"
            >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
            </button>
            <aside className={`fixed top-0 left-0 h-full bg-gray-800 text-white w-72 p-4 z-30 transform transition-transform duration-300 ease-in-out lg:translate-x-0 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}>
                <h1 className="text-2xl font-bold mb-6 border-b border-gray-600 pb-3">Course Outline</h1>
                <nav className="overflow-y-auto h-[calc(100%-4rem)] pr-2">
                    {data.map(level => (
                        <div key={level.id} className="mb-4">
                            <h2 className="text-lg font-semibold text-blue-300">{level.title}</h2>
                            {level.modules.map(module => {
                                const allLessonsInModuleCompleted = module.lessons.length > 0 && module.lessons.every(lesson => completedLessons.has(lesson.id));
                                return (
                                <div key={module.id} className="mt-2">
                                    <button onClick={() => toggleModule(module.id)} className="w-full text-left font-semibold flex justify-between items-center p-2 rounded hover:bg-gray-700">
                                        <span className={`flex items-center flex-1 min-w-0 ${allLessonsInModuleCompleted ? 'text-gray-400' : ''}`}>
                                            {allLessonsInModuleCompleted && (
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2 text-green-500 flex-shrink-0" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                                                </svg>
                                            )}
                                            <span className="truncate">{module.title}</span>
                                        </span>
                                        <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform flex-shrink-0 ml-2 ${openModules[module.id] ? 'rotate-90' : ''} ${allLessonsInModuleCompleted ? 'text-gray-400' : ''}`} viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" /></svg>
                                    </button>
                                    {openModules[module.id] && (
                                        <MotionUl
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            className="ml-4 mt-1 border-l border-gray-600"
                                        >
                                            {module.lessons.map(lesson => (
                                                <li key={lesson.id}>
                                                    <a
                                                        href="#"
                                                        onClick={(e) => {
                                                            e.preventDefault();
                                                            onSelectLesson(lesson.id);
                                                            if (window.innerWidth < 1024) setIsOpen(false);
                                                        }}
                                                        className={`block p-2 text-sm rounded transition-colors duration-200 flex items-center ${activeLessonId === lesson.id ? 'bg-blue-600' : 'hover:bg-gray-700'}`}
                                                    >
                                                         <span className={`w-5 h-5 mr-2 rounded-full flex items-center justify-center border-2 flex-shrink-0 ${completedLessons.has(lesson.id) ? 'bg-green-500 border-green-400' : 'border-gray-400'}`}>
                                                            {completedLessons.has(lesson.id) && <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>}
                                                        </span>
                                                        <span className="truncate">{lesson.title}</span>
                                                    </a>
                                                </li>
                                            ))}
                                        </MotionUl>
                                    )}
                                </div>
                            )})}
                        </div>
                    ))}
                </nav>
            </aside>
        </>
    );
};

const ScrollToTopButton: React.FC = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <MotionButton
            onClick={scrollToTop}
            className={`fixed bottom-5 right-5 p-3 rounded-full bg-blue-600 text-white shadow-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 z-20 ${!isVisible ? 'hidden' : ''}`}
            aria-label="Scroll to top"
            initial={{ scale: 0 }}
            animate={{ scale: isVisible ? 1 : 0 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
        >
             <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>
        </MotionButton>
    );
};

// --- Main App Component ---

const App: React.FC = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [activeLessonId, setActiveLessonId] = useState<string | null>(null);
    const [completedLessons, setCompletedLessons] = useState<Set<string>>(new Set());
    const [isSidebarOpen, setIsSidebarOpen] = useState(window.innerWidth >= 1024);

    // Load progress on initial render
    useEffect(() => {
      try {
        const savedProgress = localStorage.getItem('courseProgress');
        const savedLesson = localStorage.getItem('lastActiveLesson');
        
        if (savedProgress) {
          setCompletedLessons(new Set(JSON.parse(savedProgress)));
        }

        if (savedLesson) {
          setActiveLessonId(savedLesson);
        } else {
           // Set the first lesson as active if no saved lesson
           if (courseData.length > 0 && courseData[0].modules.length > 0 && courseData[0].modules[0].lessons.length > 0) {
              setActiveLessonId(courseData[0].modules[0].lessons[0].id);
           }
        }
      } catch (error) {
        console.error("Failed to load progress from localStorage", error);
        // Fallback to first lesson if localStorage fails
        if (courseData.length > 0 && courseData[0].modules.length > 0 && courseData[0].modules[0].lessons.length > 0) {
           setActiveLessonId(courseData[0].modules[0].lessons[0].id);
        }
      } finally {
        setTimeout(() => setIsLoading(false), 1500); // Simulate loading time
      }
    }, []);

    // Save progress whenever it changes
    useEffect(() => {
      try {
        localStorage.setItem('courseProgress', JSON.stringify(Array.from(completedLessons)));
        if (activeLessonId) {
          localStorage.setItem('lastActiveLesson', activeLessonId);
        }
      } catch (error) {
        console.error("Failed to save progress to localStorage", error);
      }
    }, [completedLessons, activeLessonId]);


    const handleSelectLesson = (id: string) => {
        setActiveLessonId(id);
    };

    const handleMarkComplete = () => {
        if (activeLessonId) {
            setCompletedLessons(prev => new Set(prev).add(activeLessonId));
        }
    };
    
    const activeLesson = useMemo(() => findLessonById(courseData, activeLessonId), [activeLessonId]);

    if (isLoading) {
        return <Loader />;
    }

    return (
        <>
            <OilField3DBackground />
            <div className="relative min-h-screen">
                <Sidebar 
                    data={courseData} 
                    activeLessonId={activeLessonId}
                    completedLessons={completedLessons}
                    onSelectLesson={handleSelectLesson}
                    isOpen={isSidebarOpen}
                    setIsOpen={setIsSidebarOpen}
                />
                <main className="lg:ml-72 transition-all duration-300 ease-in-out p-4 sm:p-6 md:p-8">
                    {activeLesson ? (
                         <MotionDiv
                            key={activeLesson.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                         >
                            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg ring-1 ring-gray-900/5">
                                <h2 className="text-3xl font-bold text-gray-900 mb-2">{activeLesson.title}</h2>
                                <hr className="mb-6"/>
                                <LessonContentView content={activeLesson.content} />
                                
                                <button
                                    onClick={handleMarkComplete}
                                    disabled={completedLessons.has(activeLesson.id)}
                                    className={`mt-8 w-full font-bold py-3 px-4 rounded-lg shadow-md transition duration-300 ease-in-out flex items-center justify-center ${
                                        completedLessons.has(activeLesson.id)
                                        ? 'bg-green-600 text-white cursor-not-allowed'
                                        : 'bg-blue-600 hover:bg-blue-700 text-white'
                                    }`}
                                >
                                     {completedLessons.has(activeLesson.id) ? (
                                        <>
                                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                                            Lesson Completed
                                        </>
                                    ) : (
                                        'Mark as Complete'
                                    )}
                                </button>
                                
                                {activeLesson.glossary.length > 0 && <GlossarySection items={activeLesson.glossary} />}
                                <SafetyChecklistSection item={activeLesson.safety} />
                                {activeLesson.quiz.length > 0 && <QuizSection items={activeLesson.quiz} />}

                            </div>
                         </MotionDiv>
                    ) : (
                        <div className="text-center mt-20">
                            <h2 className="text-2xl font-semibold text-gray-700">Welcome!</h2>
                            <p className="text-gray-500">Please select a lesson from the sidebar to begin.</p>
                        </div>
                    )}
                </main>
                 <footer className="lg:ml-72 text-center p-4 text-xs text-gray-500">
                    <p>Developed & Supervised by Eng/ Muhammed Kamal</p>
                </footer>
                <ScrollToTopButton />
            </div>
        </>
    );
};

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);