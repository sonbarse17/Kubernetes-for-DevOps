import { Request, Response } from 'express';
import { DocumentService, CreateDocumentRequest, UpdateDocumentRequest } from '../models/Document';

export class DocumentController {
    private documentService: DocumentService;

    constructor() {
        this.documentService = new DocumentService();
    }

    public createDocument = async (req: Request, res: Response): Promise<void> => {
        try {
            const { title, content }: CreateDocumentRequest = req.body;
            
            if (!title || !content) {
                res.status(400).json({ error: 'Title and content are required' });
                return;
            }

            const document = this.documentService.createDocument({ title, content });
            res.status(201).json(document);
        } catch (error) {
            console.error('Error creating document:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    };

    public getDocument = async (req: Request, res: Response): Promise<void> => {
        try {
            const { id } = req.params;
            const document = this.documentService.getDocument(id);
            
            if (!document) {
                res.status(404).json({ error: 'Document not found' });
                return;
            }

            res.json(document);
        } catch (error) {
            console.error('Error getting document:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    };

    public updateDocument = async (req: Request, res: Response): Promise<void> => {
        try {
            const { id } = req.params;
            const updateData: UpdateDocumentRequest = req.body;
            
            const document = this.documentService.updateDocument(id, updateData);
            
            if (!document) {
                res.status(404).json({ error: 'Document not found' });
                return;
            }

            res.json(document);
        } catch (error) {
            console.error('Error updating document:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    };

    public deleteDocument = async (req: Request, res: Response): Promise<void> => {
        try {
            const { id } = req.params;
            const deleted = this.documentService.deleteDocument(id);
            
            if (!deleted) {
                res.status(404).json({ error: 'Document not found' });
                return;
            }

            res.status(204).send();
        } catch (error) {
            console.error('Error deleting document:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    };

    public listDocuments = async (req: Request, res: Response): Promise<void> => {
        try {
            const documents = this.documentService.listDocuments();
            res.json(documents);
        } catch (error) {
            console.error('Error listing documents:', error);
            res.status(500).json({ error: 'Internal server error' });
        }
    };
}