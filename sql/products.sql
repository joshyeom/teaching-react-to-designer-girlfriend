
CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    image TEXT,
    badge TEXT,
    badge_color TEXT,
    name TEXT,
    category TEXT,
    price TEXT
);

INSERT INTO products (id, image, badge, badge_color, name, category, price) VALUES
(1, 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop', '신상품', '#ff6900', '에어맥스 270', '남성 신발', '139,000원'),
(2, 'https://images.unsplash.com/photo-1551107696-a4b0c5a0d9a2?w=400&h=400&fit=crop', '베스트셀러', '#111', '에어포스 1', '여성 신발', '119,000원'),
(3, 'https://images.unsplash.com/photo-1605348532760-6753d2c43329?w=400&h=400&fit=crop', '한정판', '#7e22ce', '조던 1 레트로', '남성 신발', '199,000원');
