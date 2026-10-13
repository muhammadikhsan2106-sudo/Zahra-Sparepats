import express from 'express';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = parseInt(process.env.PORT || '3000', 10);

const distPath = path.join(__dirname, 'dist');

// Serve static assets from dist if built
if (fs.existsSync(distPath)) {
  app.use(express.static(distPath));

  app.get('*', (_req, res) => {
    res.sendFile(path.join(distPath, 'index.html'));
  });
} else {
  // If dist is not yet built, inform user to run npm run build
  app.get('*', (_req, res) => {
    res.send(`
      <!DOCTYPE html>
      <html>
        <head><title>Zahra Spareparts Server</title></head>
        <body style="font-family:sans-serif;padding:40px;background:#090d16;color:#e2e8f0;text-align:center;">
          <h2>Dist directory not found</h2>
          <p>Please run <code>npm run build</code> first to generate the production build.</p>
        </body>
      </html>
    `);
  });
}

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Zahra Spareparts production server running on http://0.0.0.0:${PORT}`);
});
