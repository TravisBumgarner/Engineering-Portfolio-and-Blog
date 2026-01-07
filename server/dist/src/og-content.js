import { CANDLELIGHT_DESCRIPTION, CANDLELIGHT_IMAGE, CANDLELIGHT_TITLE, FAST_CLASSIFIEDS_DESCRIPTION, FAST_CLASSIFIEDS_IMAGE, FAST_CLASSIFIEDS_TITLE, IDEAS_DESCRIPTION, IDEAS_IMAGE, IDEAS_TITLE, posts, projects, TODO_DESCRIPTION, TODO_IMAGE, TODO_TITLE, } from '@common/core';
const OG_CONTENT = {
    marketing: {
        classifieds: {
            'og:title': FAST_CLASSIFIEDS_TITLE,
            'og:description': FAST_CLASSIFIEDS_DESCRIPTION,
            'og:image': FAST_CLASSIFIEDS_IMAGE,
        },
        ideas: {
            'og:title': IDEAS_TITLE,
            'og:description': IDEAS_DESCRIPTION,
            'og:image': IDEAS_IMAGE,
        },
        candlelight: {
            'og:title': CANDLELIGHT_TITLE,
            'og:description': CANDLELIGHT_DESCRIPTION,
            'og:image': CANDLELIGHT_IMAGE,
        },
        todo_today: {
            'og:title': TODO_TITLE,
            'og:description': TODO_DESCRIPTION,
            'og:image': TODO_IMAGE,
        },
    },
    blog: {
        ...Object.entries(posts).reduce((acc, [slug, post]) => {
            acc[slug] = {
                'og:title': post.title,
                'og:description': post.description,
                'og:image': `/post-resources/${slug}/${post.preview_image}`,
            };
            return acc;
        }, {}),
    },
    creations: {
        ...Object.entries(projects).reduce((acc, [slug, project]) => {
            acc[slug] = {
                'og:title': project.title,
                'og:description': project.description,
                'og:image': `/project-resources/${slug}/${project.previewImage?.src ?? ''}`,
            };
            return acc;
        }, {}),
    },
};
console.log(OG_CONTENT);
export function getOgContentFromParts(parts) {
    if (parts.length < 2)
        return null;
    const [section, slug] = parts;
    const sectionContent = OG_CONTENT[section];
    if (!sectionContent)
        return null;
    return sectionContent[slug] ?? null;
}
//# sourceMappingURL=og-content.js.map