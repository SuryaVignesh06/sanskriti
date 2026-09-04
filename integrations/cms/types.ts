export interface WixDataItem {
  _id: string;
  [key: string]: any;
}

export interface WixDataQueryResult {
  items: WixDataItem[];
  totalCount: number;
  hasNext: () => boolean;
}
