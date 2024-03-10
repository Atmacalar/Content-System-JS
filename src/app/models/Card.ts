export interface Card {
    id: number;
    Title: string;
   
    metadata?: {
       
        Title?: string;
        Plot?: string;
        Poster?: string;
        Year?: string;
        Language?: string;
        Country?: string;
        Genre?: string;
        Director?: string;
    };
    actors?: {
        id?: number;
        name?: string;
        poster?: string;
        
    }[];

}

