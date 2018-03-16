export interface ArticlesResponse {
  status: String;
  totalResults: number;
  articles: Article[];
}

export interface Article {
  title: string;
  author: string;
  description: string;
}
