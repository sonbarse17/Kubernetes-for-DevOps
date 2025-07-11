export interface Document {
    id: string;
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface CreateDocumentRequest {
    title: string;
    content: string;
}

export interface UpdateDocumentRequest {
    title?: string;
    content?: string;
}

export class DocumentService {
    private documents: Map<string, Document> = new Map();

    createDocument(data: CreateDocumentRequest): Document {
        const document: Document = {
            id: this.generateId(),
            title: data.title,
            content: data.content,
            createdAt: new Date(),
            updatedAt: new Date()
        };
        this.documents.set(document.id, document);
        return document;
    }

    getDocument(id: string): Document | null {
        return this.documents.get(id) || null;
    }

    updateDocument(id: string, data: UpdateDocumentRequest): Document | null {
        const document = this.documents.get(id);
        if (!document) return null;

        const updatedDocument: Document = {
            ...document,
            ...data,
            updatedAt: new Date()
        };
        this.documents.set(id, updatedDocument);
        return updatedDocument;
    }

    deleteDocument(id: string): boolean {
        return this.documents.delete(id);
    }

    listDocuments(): Document[] {
        return Array.from(this.documents.values());
    }

    private generateId(): string {
        return Date.now().toString() + Math.random().toString(36).substr(2, 9);
    }
}