import sanityClient from '@sanity/client';

export default sanityClient({
    projectId: '0cvz2s8c',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2021-08-31',
});
