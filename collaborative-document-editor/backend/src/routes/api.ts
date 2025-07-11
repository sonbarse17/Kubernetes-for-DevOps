import { Express } from 'express';
import { DocumentController } from '../controllers/documentController';

export function setRoutes(app: Express): void {
    const documentController = new DocumentController();

    // Document routes
    app.post('/api/documents', documentController.createDocument);
    app.get('/api/documents/:id', documentController.getDocument);
    app.put('/api/documents/:id', documentController.updateDocument);
    app.delete('/api/documents/:id', documentController.deleteDocument);
    app.get('/api/documents', documentController.listDocuments);

    // Health check route
    app.get('/api/health', (req, res) => {
        res.json({ status: 'OK', timestamp: new Date().toISOString() });
    });
}