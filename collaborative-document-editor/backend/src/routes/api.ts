export function setRoutes(app: any) {
    const documentController = new (require('../controllers/documentController')).DocumentController();

    app.post('/api/documents', documentController.createDocument);
    app.get('/api/documents/:id', documentController.getDocument);
    app.put('/api/documents/:id', documentController.updateDocument);
    app.delete('/api/documents/:id', documentController.deleteDocument);
    app.get('/api/documents', documentController.getAllDocuments);
}