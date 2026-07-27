import { createServer } from 'vite';
(async () => {
  const vite = await createServer({ server: { middlewareMode: true }, appType: 'custom' });
  const { render } = await vite.ssrLoadModule('/src/entry-server.tsx');
  const result = render('/');
  console.log('helmet title:', result.helmet ? result.helmet.title.toString() : 'still undefined');
  await vite.close();
})();
