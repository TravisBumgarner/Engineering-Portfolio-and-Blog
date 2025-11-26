'use client'

import Typography from '@mui/material/Typography'


// Add whatever you want to override
export const mdxComponents = {
    h1: (props: unknown) => <Typography variant="h2" sx={{ fontSize: '3rem', border: '2px solid red' }} {...props} />,
    h2: (props: unknown) => <Typography variant="h3" sx={{ fontSize: '3rem', border: '2px solid red' }} {...props} />,
    h3: (props: unknown) => <Typography variant="h4" sx={{ fontSize: '3rem', border: '2px solid red' }} gutterBottom {...props} />,
    h4: (props: unknown) => <Typography variant="h5" sx={{ fontSize: '3rem', border: '2px solid red' }} gutterBottom {...props} />,
}

