export interface Asset {
  AssetID: string;
  AssetName: string;
  Category: string;
  Status: string;
  ModelNumber: string;
  SerialNumber: string;
  Description: string;
  PurchaseCost: number;
  PurchaseDate: string;
  VendorName: string;
}

export const useAssets = () => {
  const assetList = useState<Asset[]>("assets", () => []);

  const setAssetList = (data: Asset[]) => {
    assetList.value = data;
  };

  const addAsset = () => {};

  return {
    assetList,
    setAssetList,
    addAsset,
  };
};
