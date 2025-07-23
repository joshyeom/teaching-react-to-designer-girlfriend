
CREATE TABLE courses (
    id TEXT PRIMARY KEY,
    title TEXT,
    description TEXT,
    thumbnail TEXT,
    badge TEXT,
    badge_color TEXT
);

INSERT INTO courses (id, title, description, thumbnail, badge, badge_color) VALUES
('react-basics', '아주 아주 기초적인 React 컴포넌트', 'React의 기본 개념부터 실제 프로젝트까지! 컴포넌트, JSX, Props, Events를 단계별로 학습하세요.', 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=240&fit=crop&crop=center', '인기', '#3B82F6'),
('react-basics-exercise', 'React 연습 문제 도전하기', '30개의 연습 문제로 React 실력을 확실하게! 기초부터 응용까지 단계별로 도전해보세요.', 'https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?w=400&h=240&fit=crop&crop=center', '도전', '#7C3AED');
