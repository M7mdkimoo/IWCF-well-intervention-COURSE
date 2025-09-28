
export interface QuizItem {
  question: string;
  answer: string;
}

export interface GlossaryItem {
  term: string;
  definition: string;
}

export interface SafetyItem {
  topic: string;
  points: string[];
}

export interface ImageContent {
  type: 'image';
  src: string;
  alt: string;
  caption: string;
}

export interface TextContent {
  type: 'text';
  content: string;
}

export interface VideoContent {
  type: 'video';
  topic: string;
}

export type LessonContentItem = ImageContent | TextContent | VideoContent;

export interface Lesson {
  id: string;
  title: string;
  content: LessonContentItem[];
  glossary: GlossaryItem[];
  safety?: SafetyItem;
  quiz: QuizItem[];
}

export interface Module {
  id: string;
  title: string;
  lessons: Lesson[];
}

export interface Level {
  id: string;
  title: string;
  modules: Module[];
}

export type CourseData = Level[];