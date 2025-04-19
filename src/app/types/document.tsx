export interface document {
  pageContent: string;
  metadata: {
    id?: string;
    title: string;
    plaintiff: string;
    defendant: string;
    date: string;
    topoic: string;
    outcome: string;
    pageContent: string;
    [key: string]: any;
  };
}
