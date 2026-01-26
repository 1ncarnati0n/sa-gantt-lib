export default {
    plugins: {
        // 모든 CSS 규칙을 .sa-gantt-root 컨테이너 내부로 스코핑
        'postcss-prefix-selector': {
            prefix: '.sa-gantt-root',
            transform: function (prefix, selector, prefixedSelector) {
                // .sa-gantt-root 자체는 스코핑하지 않음
                if (selector === '.sa-gantt-root') {
                    return selector;
                }
                // .sa-gantt-root로 시작하는 선택자는 그대로 유지
                if (selector.startsWith('.sa-gantt-root')) {
                    return selector;
                }
                // :root 또는 :root.dark는 무시 (style.css에서 직접 처리)
                if (selector === ':root' || selector.startsWith(':root')) {
                    return selector;
                }
                // .dark는 무시 (style.css에서 직접 처리)
                if (selector === '.dark' || selector.startsWith('.dark ')) {
                    return selector;
                }
                // @keyframes는 스코핑 제외 (전역이어야 함)
                if (selector.includes('@keyframes')) {
                    return selector;
                }
                // 나머지는 .sa-gantt-root 내부로 스코핑
                return prefixedSelector;
            },
            // 이미 gantt- 프리픽스가 있는 선택자와 애니메이션은 제외
            exclude: [/^@/, /\.sa-gantt-root/],
        },
        '@tailwindcss/postcss': {},
        autoprefixer: {},
    },
}
